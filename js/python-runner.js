// Python Runner using Pyodide
let pyodide = null;
let isPyodideReady = false;

// Initialize Pyodide
async function initPyodide() {
    if (isPyodideReady) return;
    
    try {
        console.log('Đang tải Pyodide...');
        pyodide = await loadPyodide({
            indexURL: "https://cdn.jsdelivr.net/pyodide/v0.24.1/full/"
        });
        
        // Set up Python environment
        await pyodide.loadPackage(["micropip"]);
        
        // Override print to capture output
        pyodide.runPython(`
            import sys
            from io import StringIO
            
            class OutputCapture:
                def __init__(self):
                    self.output = StringIO()
                
                def write(self, text):
                    self.output.write(text)
                
                def flush(self):
                    pass
                
                def getvalue(self):
                    return self.output.getvalue()
                
                def reset(self):
                    self.output = StringIO()
            
            stdout_capture = OutputCapture()
            stderr_capture = OutputCapture()
            sys.stdout = stdout_capture
            sys.stderr = stderr_capture
        `);
        
        isPyodideReady = true;
        console.log('Pyodide đã sẵn sàng!');
        
        // Enable all run buttons
        enableAllRunButtons();
        
    } catch (error) {
        console.error('Lỗi khi tải Pyodide:', error);
        alert('Không thể tải Python runner. Vui lòng kiểm tra kết nối internet.');
    }
}

// Run Python code
async function runPythonCode(editorId, outputId, buttonId) {
    if (!isPyodideReady) {
        await initPyodide();
    }
    
    const editor = document.getElementById(editorId);
    const output = document.getElementById(outputId);
    const button = document.getElementById(buttonId);
    const loading = button.parentElement.querySelector('.loading-indicator');
    
    if (!editor || !output) return;
    
    const code = editor.value.trim();
    
    if (!code) {
        output.innerHTML = '<div class="output-info">⚠️ Vui lòng nhập code Python!</div>';
        return;
    }
    
    // Disable button and show loading
    button.disabled = true;
    if (loading) loading.classList.add('active');
    output.innerHTML = '<div class="output-info">🔄 Đang chạy code...</div>';
    
    try {
        // Reset output capture
        pyodide.runPython(`
            sys.stdout.reset()
            sys.stderr.reset()
        `);
        
        // Run the code
        await pyodide.runPythonAsync(code);
        
        // Get output
        const stdout = pyodide.runPython('sys.stdout.getvalue()');
        const stderr = pyodide.runPython('sys.stderr.getvalue()');
        
        // Display result - only show stderr if it contains actual errors
        if (stderr && (stderr.includes('Traceback') || stderr.includes('Error') || stderr.includes('Exception'))) {
            output.innerHTML = `<pre class="output-error">❌ Lỗi:\n${escapeHtml(stderr)}</pre>`;
        } else if (stdout) {
            output.innerHTML = `<pre class="output-success">${escapeHtml(stdout)}</pre>`;
        } else if (stderr) {
            // stderr có thể chỉ là warning, hiển thị như info
            output.innerHTML = `<pre class="output-info">${escapeHtml(stderr)}</pre>`;
        } else {
            output.innerHTML = '<div class="output-success">✅ Code đã chạy thành công!</div>';
        }
        
    } catch (error) {
        const errorMsg = error.toString();
        output.innerHTML = `<pre class="output-error">❌ Lỗi:\n${escapeHtml(errorMsg)}</pre>`;
    } finally {
        button.disabled = false;
        if (loading) loading.classList.remove('active');
    }
}

// Clear code editor
function clearPythonCode(editorId, outputId) {
    const editor = document.getElementById(editorId);
    const output = document.getElementById(outputId);
    
    if (editor) editor.value = '';
    if (output) output.innerHTML = '<div class="output-info">💡 Nhập code và nhấn "Chạy Code" để thực thi</div>';
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Create Python runner component
function createPythonRunner(initialCode = '', runnerId = null) {
    const uniqueId = runnerId || `python-runner-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const editorId = `${uniqueId}-editor`;
    const outputId = `${uniqueId}-output`;
    const runButtonId = `${uniqueId}-run`;
    const clearButtonId = `${uniqueId}-clear`;
    
    const runnerHTML = `
        <div class="python-runner" id="${uniqueId}">
            <div class="python-runner-header">
                <i class="fas fa-code"></i>
                <span>💻 Thực Hành Python</span>
            </div>
            <div class="python-editor-container">
                <textarea 
                    id="${editorId}" 
                    class="python-editor" 
                    placeholder="Nhập code Python của bạn ở đây...&#10;&#10;Ví dụ:&#10;print('Xin chào Python!')&#10;ten = 'Minh'&#10;print(f'Tên tôi là {ten}')"
                    spellcheck="false">${escapeHtml(initialCode)}</textarea>
            </div>
            <div class="python-runner-buttons">
                <button 
                    id="${runButtonId}" 
                    class="run-button" 
                    onclick="runPythonCode('${editorId}', '${outputId}', '${runButtonId}')"
                    disabled>
                    <i class="fas fa-play"></i> Chạy Code
                </button>
                <button 
                    id="${clearButtonId}" 
                    class="clear-button" 
                    onclick="clearPythonCode('${editorId}', '${outputId}')">
                    <i class="fas fa-eraser"></i> Xóa Code
                </button>
                <div class="loading-indicator">
                    <div class="loading-spinner"></div>
                    <span>Đang tải Pyodide...</span>
                </div>
            </div>
            <div class="output-box" id="${outputId}">
                <h4><i class="fas fa-terminal"></i> Kết quả:</h4>
                <div class="output-info">💡 Nhập code và nhấn "Chạy Code" để thực thi</div>
            </div>
        </div>
    `;
    
    return runnerHTML;
}

// Initialize Pyodide when page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPyodide);
} else {
    initPyodide();
}

// Enable all run buttons (useful when new runners are created dynamically)
function enableAllRunButtons() {
    if (isPyodideReady) {
        document.querySelectorAll('.run-button').forEach(btn => {
            btn.disabled = false;
        });
    }
}

// Make functions globally available
window.runPythonCode = runPythonCode;
window.clearPythonCode = clearPythonCode;
window.createPythonRunner = createPythonRunner;
window.enableAllRunButtons = enableAllRunButtons;

