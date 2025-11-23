// Python Runner using Pyodide
let pyodide = null;
let isPyodideReady = false;
let pyodideScriptLoaded = false;
let pyodideLoadPromise = null;
let pyodideLoadPromiseResolved = false;

// Load Pyodide script dynamically
function loadPyodideScript() {
    if (pyodideScriptLoaded) {
        return Promise.resolve();
    }
    
    // Only reuse promise if it's still pending (not rejected)
    // Reset promise on rejection to allow retry
    if (pyodideLoadPromise && !pyodideLoadPromiseResolved) {
        return pyodideLoadPromise;
    }
    
    // Reset promise state for retry
    pyodideLoadPromise = null;
    pyodideLoadPromiseResolved = false;
    
    pyodideLoadPromise = new Promise((resolve, reject) => {
        // Check if already loaded
        if (typeof loadPyodide !== 'undefined') {
            pyodideScriptLoaded = true;
            pyodideLoadPromiseResolved = true;
            resolve();
            return;
        }
        
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.js';
        script.async = true;
        script.onload = () => {
            pyodideScriptLoaded = true;
            pyodideLoadPromiseResolved = true;
            resolve();
        };
        script.onerror = () => {
            // Reset promise on error to allow retry
            pyodideLoadPromise = null;
            pyodideLoadPromiseResolved = false;
            reject(new Error('Không thể tải Pyodide script'));
        };
        document.head.appendChild(script);
    });
    
    return pyodideLoadPromise;
}

// Initialize Pyodide
let pyodideLoadAttempts = 0;
const MAX_LOAD_ATTEMPTS = 3;

async function initPyodide() {
    if (isPyodideReady) return;
    
    // Load Pyodide script first if not loaded
    try {
        await loadPyodideScript();
    } catch (error) {
        showPyodideError('Không thể tải Pyodide. Vui lòng kiểm tra kết nối internet.');
        return;
    }
    
    // Check if Pyodide is available
    if (typeof loadPyodide === 'undefined') {
        showPyodideError('Pyodide không được tải. Vui lòng tải lại trang.');
        return;
    }
    
    try {
        pyodideLoadAttempts++;
        showLoadingIndicator(true);
        
        pyodide = await loadPyodide({
            indexURL: "https://cdn.jsdelivr.net/pyodide/v0.24.1/full/"
        });
        
        // Set up Python environment
        try {
            await pyodide.loadPackage(["micropip"]);
        } catch (pkgError) {
            console.warn('Không thể tải micropip, tiếp tục không có package manager:', pkgError);
        }
        
        // Override print to capture output
        try {
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
        } catch (setupError) {
            console.error('Lỗi khi setup Python environment:', setupError);
            throw new Error('Không thể khởi tạo Python environment');
        }
        
        isPyodideReady = true;
        pyodideLoadAttempts = 0;
        showLoadingIndicator(false);
        
        // Enable all run buttons
        enableAllRunButtons();
        
    } catch (error) {
        console.error('Lỗi khi tải Pyodide:', error);
        showLoadingIndicator(false);
        
        if (pyodideLoadAttempts < MAX_LOAD_ATTEMPTS) {
            // Retry after delay
            setTimeout(() => {
                if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
                    console.log(`Thử lại lần ${pyodideLoadAttempts}...`);
                }
                initPyodide();
            }, 2000);
        } else {
            showPyodideError('Không thể tải Python runner sau nhiều lần thử. Vui lòng kiểm tra kết nối internet và tải lại trang.');
        }
    }
}

// Show loading indicator
function showLoadingIndicator(show) {
    document.querySelectorAll('.loading-indicator').forEach(indicator => {
        if (show) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

// Show error message
function showPyodideError(message) {
    // Show error in all output boxes
    document.querySelectorAll('.output-box').forEach(outputBox => {
        const outputId = outputBox.id;
        if (outputId) {
            outputBox.innerHTML = `
                <h4><i class="fas fa-terminal"></i> Kết quả:</h4>
                <div class="output-error">
                    <i class="fas fa-exclamation-triangle"></i> ${message}
                    <br><br>
                    <small>💡 Mẹo: Kiểm tra kết nối internet và tải lại trang (F5)</small>
                </div>
            `;
        }
    });
    
    // Disable all run buttons
    document.querySelectorAll('.run-button').forEach(btn => {
        btn.disabled = true;
        btn.title = 'Python runner không khả dụng';
    });
}

// Run Python code
async function runPythonCode(editorId, outputId, buttonId) {
    const editor = document.getElementById(editorId);
    const output = document.getElementById(outputId);
    const button = document.getElementById(buttonId);
    
    if (!editor || !output) {
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            console.error('Không tìm thấy editor hoặc output element', { editorId, outputId, buttonId });
        }
        return;
    }
    
    // Debug log in development
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.log('Running Python code...', { editorId, outputId, buttonId });
    }
    
    const code = editor.value.trim();
    
    if (!code) {
        output.innerHTML = '<h4><i class="fas fa-terminal"></i> Kết quả:</h4><div class="output-info">⚠️ Vui lòng nhập code Python!</div>';
        return;
    }
    
    // Check if Pyodide is ready
    if (!isPyodideReady) {
        try {
            await initPyodide();
            if (!isPyodideReady) {
                output.innerHTML = '<h4><i class="fas fa-terminal"></i> Kết quả:</h4><div class="output-error"><i class="fas fa-exclamation-triangle"></i> Python runner đang được tải. Vui lòng đợi và thử lại...</div>';
                return;
            }
        } catch (error) {
            output.innerHTML = `<h4><i class="fas fa-terminal"></i> Kết quả:</h4><div class="output-error"><i class="fas fa-times-circle"></i> Không thể khởi tạo Python runner: ${escapeHtml(error.message)}</div>`;
            return;
        }
    }
    
    const loading = button ? button.parentElement.querySelector('.loading-indicator') : null;
    
    // Disable button and show loading
    if (button) {
        button.disabled = true;
        button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Đang chạy...';
    }
    if (loading) loading.classList.add('active');
    // Update output box with loading message
    output.innerHTML = '<h4><i class="fas fa-terminal"></i> Kết quả:</h4><div class="output-info">🔄 Đang chạy code...</div>';
    
    try {
        // Reset output capture
        pyodide.runPython(`
            stdout_capture.reset()
            stderr_capture.reset()
        `);
        
        // Run the code with timeout protection (10 seconds)
        const runPromise = pyodide.runPythonAsync(code);
        const timeoutPromise = new Promise((_, reject) => 
            setTimeout(() => reject(new Error('Code chạy quá lâu (>10 giây). Có thể có vòng lặp vô hạn.')), 10000)
        );
        
        await Promise.race([runPromise, timeoutPromise]);
        
        // Get output
        const stdout = pyodide.runPython('stdout_capture.getvalue()');
        const stderr = pyodide.runPython('stderr_capture.getvalue()');
        
        // Debug in development
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            console.log('Python output:', { stdout, stderr, stdoutLength: stdout?.length, stderrLength: stderr?.length });
        }
        
        // Display result with proper formatting
        let outputHTML = '<h4><i class="fas fa-terminal"></i> Kết quả:</h4>';
        
        if (stderr && stderr.trim() && (stderr.includes('Traceback') || stderr.includes('Error') || stderr.includes('Exception'))) {
            // Actual error
            outputHTML += `<div class="output-error"><i class="fas fa-times-circle"></i> Lỗi:<pre>${escapeHtml(stderr)}</pre></div>`;
        } else if (stdout && stdout.trim()) {
            // Success with output
            outputHTML += `<div class="output-success"><i class="fas fa-check-circle"></i> Kết quả:<pre>${escapeHtml(stdout)}</pre></div>`;
        } else if (stderr && stderr.trim()) {
            // Warning/info in stderr
            outputHTML += `<div class="output-info"><i class="fas fa-info-circle"></i> ${escapeHtml(stderr)}</div>`;
        } else {
            // No output but code ran successfully
            outputHTML += '<div class="output-success"><i class="fas fa-check"></i> Code đã chạy thành công (không có output)</div>';
        }
        
        output.innerHTML = outputHTML;
        
        // Scroll output into view
        output.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        
    } catch (error) {
        let errorMsg = error.toString();
        if (errorMsg.includes('quá lâu') || errorMsg.includes('timeout')) {
            errorMsg = 'Code chạy quá lâu (>10 giây). Có thể có vòng lặp vô hạn hoặc code phức tạp.';
        } else if (errorMsg.includes('Pyodide')) {
            errorMsg = 'Lỗi Python runtime. Kiểm tra lại code của bạn.';
        }
        output.innerHTML = `<h4><i class="fas fa-terminal"></i> Kết quả:</h4><div class="output-error"><i class="fas fa-times-circle"></i> Lỗi:<pre>${escapeHtml(errorMsg)}</pre></div>`;
    } finally {
        if (button) {
            button.disabled = false;
            button.innerHTML = '<i class="fas fa-play"></i> Chạy Code';
        }
        if (loading) loading.classList.remove('active');
    }
}

// Clear code editor
function clearPythonCode(editorId, outputId) {
    const editor = document.getElementById(editorId);
    const output = document.getElementById(outputId);
    
    if (editor) editor.value = '';
    if (output) output.innerHTML = '<h4><i class="fas fa-terminal"></i> Kết quả:</h4><div class="output-info">💡 Nhập code và nhấn "Chạy Code" để thực thi</div>';
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
                    data-editor-id="${editorId}"
                    data-output-id="${outputId}">
                    <i class="fas fa-play"></i> Chạy Code
                </button>
                <button 
                    id="${clearButtonId}" 
                    class="clear-button"
                    data-editor-id="${editorId}"
                    data-output-id="${outputId}">
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

// Attach event listeners to a runner after it's inserted into DOM
function attachRunnerListeners(containerId) {
    if (!containerId) return;
    
    let container = document.getElementById(containerId);
    if (!container) {
        // Try to find by class if ID not found
        const containers = document.querySelectorAll('.python-runner');
        for (let c of containers) {
            if (c.id === containerId) {
                container = c;
                break;
            }
        }
    }
    if (!container) {
        // Debug in development
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            console.warn('Container not found:', containerId);
        }
        return;
    }
    
    let runBtn = container.querySelector('.run-button');
    let clearBtn = container.querySelector('.clear-button');
    
    if (runBtn) {
        const editorId = runBtn.getAttribute('data-editor-id');
        const outputId = runBtn.getAttribute('data-output-id');
        const buttonId = runBtn.id;
        
        if (editorId && outputId && buttonId) {
            // Remove old listener if exists
            if (runBtn.hasAttribute('data-listener-attached')) {
                const newRunBtn = runBtn.cloneNode(true);
                runBtn.parentNode.replaceChild(newRunBtn, runBtn);
                runBtn = newRunBtn;
            }
            
            // Attach click listener
            runBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
                    console.log('Run button clicked', { editorId, outputId, buttonId });
                }
                runPythonCode(editorId, outputId, buttonId);
            });
            runBtn.setAttribute('data-listener-attached', 'true');
            // Enable button immediately - Pyodide will load when clicked
            runBtn.disabled = false;
        } else {
            if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
                console.warn('Run button missing attributes', { editorId, outputId, buttonId });
            }
        }
    }
    
    if (clearBtn) {
        const editorId = clearBtn.getAttribute('data-editor-id');
        const outputId = clearBtn.getAttribute('data-output-id');
        
        if (editorId && outputId) {
            // Remove old listener if exists
            if (clearBtn.hasAttribute('data-listener-attached')) {
                const newClearBtn = clearBtn.cloneNode(true);
                clearBtn.parentNode.replaceChild(newClearBtn, clearBtn);
                clearBtn = newClearBtn;
            }
            
            // Attach click listener
            clearBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
                    console.log('Clear button clicked', { editorId, outputId });
                }
                clearPythonCode(editorId, outputId);
            });
            clearBtn.setAttribute('data-listener-attached', 'true');
        }
    }
}

// Don't initialize Pyodide on page load - only when user clicks "Chạy Code"
// This improves page load performance

// Enable all run buttons (useful when new runners are created dynamically)
function enableAllRunButtons() {
    document.querySelectorAll('.run-button').forEach(btn => {
        // Attach event listener if not already attached
        if (!btn.hasAttribute('data-listener-attached')) {
            const editorId = btn.getAttribute('data-editor-id');
            const outputId = btn.getAttribute('data-output-id');
            const buttonId = btn.id;
            
            if (editorId && outputId) {
                btn.addEventListener('click', () => {
                    runPythonCode(editorId, outputId, buttonId);
                });
                btn.setAttribute('data-listener-attached', 'true');
            }
        }
        // Enable button - Pyodide will load when clicked
        btn.disabled = false;
    });
}

// Function to attach listeners to all existing runners
function attachAllRunners() {
    document.querySelectorAll('.python-runner').forEach(runner => {
        if (runner.id) {
            attachRunnerListeners(runner.id);
        }
    });
}

// Wrapper for createPythonRunner to auto-attach listeners
const originalCreatePythonRunner = createPythonRunner;
function createPythonRunnerWithListeners(initialCode, runnerId) {
    const html = originalCreatePythonRunner(initialCode, runnerId);
    
    // Extract runner ID from HTML or use provided one
    const uniqueId = runnerId || (() => {
        const match = html.match(/id="([^"]*python-runner[^"]*)"/);
        return match ? match[1] : null;
    })();
    
    // Schedule listener attachment after DOM update
    // Use requestAnimationFrame for better timing
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            if (uniqueId && document.getElementById(uniqueId)) {
                attachRunnerListeners(uniqueId);
            } else {
                // Fallback: attach to all runners
                attachAllRunners();
            }
        });
    });
    
    return html;
}

// Make functions globally available
window.runPythonCode = runPythonCode;
window.clearPythonCode = clearPythonCode;
window.createPythonRunner = createPythonRunnerWithListeners;
window.enableAllRunButtons = enableAllRunButtons;
window.attachRunnerListeners = attachRunnerListeners;
window.attachAllRunners = attachAllRunners;

// Observer to auto-attach listeners when runners are added to DOM
if (typeof MutationObserver !== 'undefined') {
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
                if (node.nodeType === 1) { // Element node
                    // Check if it's a runner container or contains one
                    if (node.classList && node.classList.contains('python-runner')) {
                        attachRunnerListeners(node.id);
                    } else {
                        const runner = node.querySelector && node.querySelector('.python-runner');
                        if (runner && runner.id) {
                            attachRunnerListeners(runner.id);
                        }
                    }
                    // Also check for innerHTML changes that add runners
                    if (node.querySelector && node.querySelector('.python-runner')) {
                        node.querySelectorAll('.python-runner').forEach(runner => {
                            if (runner.id) {
                                attachRunnerListeners(runner.id);
                            }
                        });
                    }
                }
            });
        });
    });
    
    // Start observing when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
            // Attach to existing runners with multiple attempts
            setTimeout(attachAllRunners, 50);
            setTimeout(attachAllRunners, 200);
            setTimeout(attachAllRunners, 500);
        });
    } else {
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
        // Attach to existing runners
        setTimeout(attachAllRunners, 50);
        setTimeout(attachAllRunners, 200);
    }
}

// Also attach when window loads (fallback)
window.addEventListener('load', () => {
    setTimeout(attachAllRunners, 100);
    setTimeout(attachAllRunners, 500);
});

// Immediate attach attempt if script loads after DOM is ready
if (document.readyState !== 'loading') {
    setTimeout(attachAllRunners, 0);
}

// Make attachAllRunners available globally
window.attachAllRunners = attachAllRunners;

