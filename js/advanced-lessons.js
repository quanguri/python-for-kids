// Dữ liệu các bài học nâng cao (Game, Website, AI)
const advancedLessons = {
    // ========== PHẦN GAME ==========
    'game-lesson1': {
        title: "Bài 1: Giới thiệu lập trình Game",
        category: "Game",
        description: `
            <h3>📝 Game là gì?</h3>
            <p>Game là chương trình tương tác với người chơi! Người chơi thực hiện hành động, game phản hồi lại.</p>
            
            <h3>💡 Các thành phần của game</h3>
            <ul>
                <li><strong>Input:</strong> Người chơi nhập dữ liệu (số, chữ, lựa chọn)</li>
                <li><strong>Logic:</strong> Game xử lý và quyết định</li>
                <li><strong>Output:</strong> Game hiển thị kết quả, điểm số, thông báo</li>
                <li><strong>Vòng lặp:</strong> Game chạy liên tục cho đến khi kết thúc</li>
            </ul>
            
            <h3>🎮 Ví dụ: Game đơn giản</h3>
            <p>Game đoán số là game đơn giản nhất:</p>
            <ul>
                <li>Máy tính chọn một số</li>
                <li>Người chơi đoán số</li>
                <li>Máy tính gợi ý "lớn hơn" hoặc "nhỏ hơn"</li>
                <li>Lặp lại cho đến khi đoán đúng</li>
            </ul>
            
            <h3>🎯 Thư viện cần thiết</h3>
            <ul>
                <li><code>random</code> - Tạo số ngẫu nhiên</li>
                <li><code>time</code> - Tạo delay, timer</li>
            </ul>
        `,
        initialCode: `# Giới thiệu về game
import random

print("🎮 Chào mừng đến với lập trình Game!")
print("\\nGame đơn giản nhất: Đoán số")

# Tạo số ngẫu nhiên
so_bi_mat = random.randint(1, 10)
print(f"Tôi đã nghĩ một số từ 1 đến 10")

# Giả lập đoán
doan = 5  # Thay đổi để thử nghiệm

if doan == so_bi_mat:
    print(f"🎉 Đúng rồi! Số bí mật là {so_bi_mat}")
elif doan < so_bi_mat:
    print(f"📈 Số của tôi lớn hơn {doan}")
else:
    print(f"📉 Số của tôi nhỏ hơn {doan}")

print(f"\\n💡 Đây là cấu trúc cơ bản của mọi game!")`,
        solution: `
            <div class="solution">
                <h5><i class="fas fa-lightbulb"></i> Giải thích:</h5>
                <div class="code-explanation">
                    <strong>Cấu trúc game cơ bản:</strong>
                    <ul>
                        <li>1. Khởi tạo: Tạo số ngẫu nhiên, điểm số, v.v.</li>
                        <li>2. Vòng lặp game: Lặp lại cho đến khi kết thúc</li>
                        <li>3. Xử lý input: Nhận lựa chọn từ người chơi</li>
                        <li>4. Logic game: Kiểm tra, tính toán</li>
                        <li>5. Output: Hiển thị kết quả</li>
                    </ul>
                </div>
            </div>
        `
    },
    'game-lesson2': {
        title: "Bài 2: Thư viện random và số ngẫu nhiên",
        category: "Game",
        description: `
            <h3>📝 Thư viện random</h3>
            <p>Thư viện <code>random</code> giúp tạo số ngẫu nhiên - rất quan trọng trong game!</p>
            
            <h3>💡 Các hàm thường dùng</h3>
            <ul>
                <li><code>random.randint(a, b)</code> - Số nguyên ngẫu nhiên từ a đến b</li>
                <li><code>random.choice(list)</code> - Chọn ngẫu nhiên một phần tử từ list</li>
                <li><code>random.shuffle(list)</code> - Xáo trộn thứ tự list</li>
            </ul>
            
            <h3>🎯 Ứng dụng trong game</h3>
            <ul>
                <li>Tạo số bí mật (game đoán số)</li>
                <li>Chọn ngẫu nhiên câu hỏi (game quiz)</li>
                <li>Xáo trộn bài (game bài)</li>
                <li>Tạo địch ngẫu nhiên (RPG game)</li>
            </ul>
        `,
        initialCode: `import random

print("🎲 Thư viện random trong game")
print("=" * 40)

# 1. Tạo số nguyên ngẫu nhiên
so_ngau_nhien = random.randint(1, 100)
print(f"1. Số ngẫu nhiên từ 1-100: {so_ngau_nhien}")

# 2. Chọn ngẫu nhiên từ list
mon_qua = ["Kẹo", "Bánh", "Đồ chơi", "Sách"]
qua_duoc_chon = random.choice(mon_qua)
print(f"2. Phần quà ngẫu nhiên: {qua_duoc_chon}")

# 3. Xáo trộn danh sách
bai_tu = ["A", "2", "3", "4", "5"]
print(f"3. Bài trước khi xáo: {bai_tu}")
random.shuffle(bai_tu)
print(f"   Bài sau khi xáo: {bai_tu}")

# 4. Tạo nhiều số ngẫu nhiên
print("\\n4. 5 số ngẫu nhiên:")
for i in range(5):
    print(f"   Số {i+1}: {random.randint(1, 10)}")`,
        solution: `
            <div class="solution">
                <h5><i class="fas fa-lightbulb"></i> Giải thích:</h5>
                <div class="code-explanation">
                    <strong>Các hàm random:</strong>
                    <ul>
                        <li><code>randint(1, 100)</code> - Bao gồm cả 1 và 100</li>
                        <li><code>choice()</code> - Rất hữu ích cho game quiz, chọn câu hỏi</li>
                        <li><code>shuffle()</code> - Thay đổi list tại chỗ, không trả về giá trị mới</li>
                    </ul>
                </div>
            </div>
        `
    },
    'game-lesson3': {
        title: "Bài 3: Game loop và tương tác",
        category: "Game",
        description: `
            <h3>📝 Game loop là gì?</h3>
            <p>Game loop là vòng lặp chạy liên tục trong game, xử lý input, cập nhật trạng thái, và hiển thị output.</p>
            
            <h3>💡 Cấu trúc game loop</h3>
            <ol>
                <li>Nhận input từ người chơi</li>
                <li>Xử lý logic game</li>
                <li>Cập nhật trạng thái (điểm, mạng, v.v.)</li>
                <li>Hiển thị kết quả</li>
                <li>Kiểm tra điều kiện kết thúc</li>
                <li>Lặp lại từ bước 1</li>
            </ol>
            
            <h3>🎯 Ví dụ: Game với menu</h3>
            <p>Game có menu cho phép người chơi chọn hành động:</p>
        `,
        initialCode: `# Game loop với menu
diem_so = 0
tro_choi_dang_chay = True

print("🎮 Game Đơn Giản")
print("=" * 30)

while tro_choi_dang_chay:
    print(f"\\nĐiểm hiện tại: {diem_so}")
    print("1. Chơi (tăng điểm)")
    print("2. Xem điểm")
    print("3. Thoát")
    
    # Giả lập lựa chọn (thay đổi để thử nghiệm)
    lua_chon = "1"  # 1, 2, hoặc 3
    
    if lua_chon == "1":
        diem_so += 10
        print("✅ Bạn đã chơi! +10 điểm")
    elif lua_chon == "2":
        print(f"📊 Điểm của bạn: {diem_so}")
    elif lua_chon == "3":
        print("👋 Tạm biệt!")
        tro_choi_dang_chay = False
    else:
        print("❌ Lựa chọn không hợp lệ!")

print("\\n🎉 Cảm ơn bạn đã chơi!")`,
        solution: `
            <div class="solution">
                <h5><i class="fas fa-lightbulb"></i> Giải thích:</h5>
                <div class="code-explanation">
                    <strong>Game loop pattern:</strong>
                    <ul>
                        <li>Dùng <code>while True</code> hoặc <code>while tro_choi_dang_chay</code></li>
                        <li>Hiển thị menu trong mỗi lần lặp</li>
                        <li>Xử lý lựa chọn của người chơi</li>
                        <li>Cập nhật trạng thái game</li>
                        <li>Thoát khi người chơi chọn "Thoát"</li>
                    </ul>
                </div>
            </div>
        `
    },
    
    // ========== PHẦN WEBSITE ==========
    'web-lesson1': {
        title: "Bài 1: HTML/CSS/JavaScript cơ bản",
        category: "Website",
        description: `
            <h3>📝 Website là gì?</h3>
            <p>Website là trang web hiển thị trên trình duyệt. Một website gồm 3 phần chính:</p>
            
            <h3>💡 HTML - Cấu trúc</h3>
            <p>HTML định nghĩa cấu trúc của trang web (tiêu đề, đoạn văn, hình ảnh...)</p>
            <pre>&lt;h1&gt;Tiêu đề&lt;/h1&gt;
&lt;p&gt;Đoạn văn&lt;/p&gt;</pre>
            
            <h3>🎨 CSS - Giao diện</h3>
            <p>CSS làm đẹp trang web (màu sắc, font chữ, bố cục...)</p>
            <pre>h1 { color: blue; }
p { font-size: 16px; }</pre>
            
            <h3>⚡ JavaScript - Tương tác</h3>
            <p>JavaScript làm trang web tương tác (nút bấm, form, animation...)</p>
            <pre>button.onclick = function() {
    alert("Xin chào!");
}</pre>
            
            <h3>🐍 Python có thể tạo HTML!</h3>
            <p>Python có thể tự động tạo file HTML, rất hữu ích khi cần tạo nhiều trang!</p>
        `,
        initialCode: `# Python tạo HTML
ten_trang = "Trang Web Đầu Tiên"
noi_dung = "Chào mừng đến với website!"

# Tạo HTML
html = f"""
<!DOCTYPE html>
<html>
<head>
    <title>{ten_trang}</title>
    <style>
        body {{
            font-family: Arial;
            padding: 20px;
            background: #f0f0f0;
        }}
        h1 {{
            color: #4CAF50;
        }}
    </style>
</head>
<body>
    <h1>{ten_trang}</h1>
    <p>{noi_dung}</p>
    <p>Trang này được tạo bằng Python! 🐍</p>
</body>
</html>
"""

print("HTML đã được tạo:")
print(html[:200] + "...")
print("\\n💡 Trong thực tế, lưu vào file: with open('index.html', 'w') as f: f.write(html)")`,
        solution: `
            <div class="solution">
                <h5><i class="fas fa-lightbulb"></i> Giải thích:</h5>
                <div class="code-explanation">
                    <strong>Python tạo HTML:</strong>
                    <ul>
                        <li>Dùng f-string để chèn biến vào HTML</li>
                        <li>Có thể tạo động nhiều trang web</li>
                        <li>Rất hữu ích cho blog, portfolio tự động</li>
                        <li>Lưu vào file với <code>open('file.html', 'w')</code></li>
                    </ul>
                </div>
            </div>
        `
    },
    'web-lesson2': {
        title: "Bài 2: Tạo file với Python",
        category: "Website",
        description: `
            <h3>📝 Tạo và ghi file</h3>
            <p>Python có thể tạo và ghi bất kỳ loại file text nào, bao gồm HTML, CSS, JavaScript!</p>
            
            <h3>💡 Cách ghi file</h3>
            <ul>
                <li><code>open('file.txt', 'w')</code> - Mở file để ghi (tạo mới hoặc ghi đè)</li>
                <li><code>open('file.txt', 'a')</code> - Mở file để thêm vào cuối</li>
                <li><code>f.write(text)</code> - Ghi text vào file</li>
                <li><code>with open()</code> - Tự động đóng file (khuyến nghị)</li>
            </ul>
            
            <h3>🎯 Ví dụ: Tạo nhiều trang web</h3>
        `,
        initialCode: `# Tạo nhiều file HTML với Python

# Danh sách các trang cần tạo
cac_trang = [
    {"ten": "Trang Chủ", "noi_dung": "Đây là trang chủ"},
    {"ten": "Giới Thiệu", "noi_dung": "Đây là trang giới thiệu"},
    {"ten": "Liên Hệ", "noi_dung": "Đây là trang liên hệ"}
]

# Tạo từng trang
for trang in cac_trang:
    html = f"""
<!DOCTYPE html>
<html>
<head>
    <title>{trang['ten']}</title>
</head>
<body>
    <h1>{trang['ten']}</h1>
    <p>{trang['noi_dung']}</p>
</body>
</html>
"""
    # Trong thực tế: with open(f"{trang['ten']}.html", 'w', encoding='utf-8') as f: f.write(html)
    print(f"✅ Đã tạo: {trang['ten']}.html")
    print(f"   Nội dung: {trang['noi_dung']}\\n")

print("💡 Python có thể tạo hàng trăm trang web tự động!")`,
        solution: `
            <div class="solution">
                <h5><i class="fas fa-lightbulb"></i> Giải thích:</h5>
                <div class="code-explanation">
                    <strong>Tạo file với Python:</strong>
                    <ul>
                        <li><code>'w'</code> - Write mode (ghi đè nếu file đã tồn tại)</li>
                        <li><code>'a'</code> - Append mode (thêm vào cuối)</li>
                        <li><code>encoding='utf-8'</code> - Hỗ trợ tiếng Việt</li>
                        <li>Dùng <code>with</code> để tự động đóng file</li>
                    </ul>
                </div>
            </div>
        `
    },
    'web-lesson3': {
        title: "Bài 3: Template và tự động hóa",
        category: "Website",
        description: `
            <h3>📝 Template là gì?</h3>
            <p>Template là mẫu có sẵn, bạn chỉ cần thay đổi một số phần để tạo nội dung mới!</p>
            
            <h3>💡 Lợi ích của template</h3>
            <ul>
                <li>Tiết kiệm thời gian - không cần viết lại từ đầu</li>
                <li>Nhất quán - tất cả trang có cùng style</li>
                <li>Dễ bảo trì - sửa một chỗ, tất cả trang đều thay đổi</li>
            </ul>
            
            <h3>🎯 Ví dụ: Template blog</h3>
        `,
        initialCode: `# Template cho blog post

def tao_blog_post(tieu_de, noi_dung, tac_gia, ngay):
    template = f"""
<!DOCTYPE html>
<html>
<head>
    <title>{tieu_de}</title>
    <style>
        body {{
            max-width: 800px;
            margin: 50px auto;
            padding: 20px;
            font-family: Arial;
        }}
        .header {{
            border-bottom: 2px solid #4CAF50;
            padding-bottom: 10px;
        }}
        .content {{
            line-height: 1.8;
            margin: 20px 0;
        }}
        .footer {{
            color: #888;
            font-size: 0.9em;
        }}
    </style>
</head>
<body>
    <div class="header">
        <h1>{tieu_de}</h1>
        <p class="footer">Tác giả: {tac_gia} | Ngày: {ngay}</p>
    </div>
    <div class="content">
        {noi_dung}
    </div>
</body>
</html>
"""
    return template

# Tạo blog post
post = tao_blog_post(
    "Học Python Vui Vẻ",
    "Python là ngôn ngữ lập trình tuyệt vời!",
    "Bạn nhỏ",
    "2024-01-15"
)

print("Blog post đã được tạo:")
print(post[:300] + "...")`,
        solution: `
            <div class="solution">
                <h5><i class="fas fa-lightbulb"></i> Giải thích:</h5>
                <div class="code-explanation">
                    <strong>Template pattern:</strong>
                    <ul>
                        <li>Tạo hàm nhận các tham số (tiêu đề, nội dung...)</li>
                        <li>Dùng f-string để chèn vào template</li>
                        <li>Có thể tạo nhiều trang với cùng style</li>
                        <li>Rất hữu ích cho blog, portfolio, documentation</li>
                    </ul>
                </div>
            </div>
        `
    },
    
    // ========== PHẦN AI ==========
    'ai-lesson1': {
        title: "Bài 1: AI và Machine Learning là gì?",
        category: "AI",
        description: `
            <h3>📝 AI (Artificial Intelligence) là gì?</h3>
            <p>AI là trí tuệ nhân tạo - máy tính có thể "suy nghĩ" và "học" giống con người!</p>
            
            <h3>💡 Machine Learning là gì?</h3>
            <p>Machine Learning là cách máy tính "học" từ dữ liệu mà không cần lập trình cụ thể từng bước.</p>
            
            <h3>🎯 Ví dụ đơn giản</h3>
            <ul>
                <li><strong>Phân loại:</strong> Phân biệt chó và mèo trong ảnh</li>
                <li><strong>Dự đoán:</strong> Dự đoán điểm số dựa trên thời gian học</li>
                <li><strong>Nhận dạng:</strong> Nhận dạng giọng nói, chữ viết</li>
            </ul>
            
            <h3>🤖 AI đơn giản nhất</h3>
            <p>AI đơn giản nhất là tìm pattern (mẫu) trong dữ liệu:</p>
        `,
        initialCode: `# AI đơn giản: Tìm pattern trong dữ liệu

# Dữ liệu mẫu: (thời gian học, điểm số)
du_lieu = [
    (1, 5.0), (2, 6.0), (3, 7.0), (4, 8.0), (5, 9.0)
]

print("🤖 AI Tìm Pattern")
print("Dữ liệu: (giờ học, điểm số)")
for gio, diem in du_lieu:
    print(f"  {gio} giờ → {diem} điểm")

# Tìm pattern: điểm tăng theo giờ học
print("\\n💡 Pattern: Điểm tăng khi học nhiều giờ hơn")

# Dự đoán
gio_moi = 6
# Pattern: mỗi giờ tăng thêm 1 điểm
diem_du_doan = 5 + (gio_moi - 1)
print(f"\\n🔮 Dự đoán: Học {gio_moi} giờ → {diem_du_doan} điểm")

print("\\n✨ Đây là AI đơn giản nhất - tìm pattern và dự đoán!")`,
        solution: `
            <div class="solution">
                <h5><i class="fas fa-lightbulb"></i> Giải thích:</h5>
                <div class="code-explanation">
                    <strong>AI cơ bản:</strong>
                    <ul>
                        <li>Thu thập dữ liệu</li>
                        <li>Tìm pattern (quy luật) trong dữ liệu</li>
                        <li>Dự đoán dựa trên pattern</li>
                        <li>Càng nhiều dữ liệu, dự đoán càng chính xác</li>
                    </ul>
                </div>
            </div>
        `
    },
    'ai-lesson2': {
        title: "Bài 2: Dữ liệu và xử lý dữ liệu",
        category: "AI",
        description: `
            <h3>📝 Dữ liệu là gì?</h3>
            <p>Dữ liệu là thông tin mà AI cần để học. Dữ liệu tốt = AI tốt!</p>
            
            <h3>💡 Các loại dữ liệu</h3>
            <ul>
                <li><strong>Số:</strong> Điểm số, tuổi, chiều cao...</li>
                <li><strong>Chữ:</strong> Tên, câu hỏi, câu trả lời...</li>
                <li><strong>Danh sách:</strong> Danh sách điểm, danh sách từ...</li>
            </ul>
            
            <h3>🎯 Xử lý dữ liệu</h3>
            <ul>
                <li>Tính trung bình, tổng, min, max</li>
                <li>Phân loại dữ liệu</li>
                <li>Tìm pattern</li>
            </ul>
        `,
        initialCode: `# Xử lý dữ liệu cho AI

# Dữ liệu: điểm số của học sinh
diem_so = [8.5, 9.0, 7.5, 8.0, 9.5, 6.5, 8.5, 7.0]

print("📊 Dữ liệu điểm số:", diem_so)

# Tính các thống kê
tong = sum(diem_so)
trung_binh = tong / len(diem_so)
diem_cao_nhat = max(diem_so)
diem_thap_nhat = min(diem_so)

print(f"\\n📈 Thống kê:")
print(f"  Tổng: {tong}")
print(f"  Trung bình: {trung_binh:.2f}")
print(f"  Cao nhất: {diem_cao_nhat}")
print(f"  Thấp nhất: {diem_thap_nhat}")

# Phân loại điểm
gioi = [d for d in diem_so if d >= 8.0]
kha = [d for d in diem_so if 6.5 <= d < 8.0]
tb = [d for d in diem_so if d < 6.5]

print(f"\\n🎯 Phân loại:")
print(f"  Giỏi (>=8.0): {len(gioi)} học sinh")
print(f"  Khá (6.5-8.0): {len(kha)} học sinh")
print(f"  Trung bình (<6.5): {len(tb)} học sinh")

print("\\n💡 AI cần dữ liệu để học và dự đoán!")`,
        solution: `
            <div class="solution">
                <h5><i class="fas fa-lightbulb"></i> Giải thích:</h5>
                <div class="code-explanation">
                    <strong>Xử lý dữ liệu:</strong>
                    <ul>
                        <li>Thống kê mô tả giúp hiểu dữ liệu</li>
                        <li>Phân loại giúp tìm pattern</li>
                        <li>Dữ liệu càng nhiều, AI càng thông minh</li>
                        <li>Dữ liệu sạch (không có lỗi) rất quan trọng</li>
                    </ul>
                </div>
            </div>
        `
    },
    'ai-lesson3': {
        title: "Bài 3: Pattern Recognition (Nhận dạng mẫu)",
        category: "AI",
        description: `
            <h3>📝 Pattern Recognition là gì?</h3>
            <p>Pattern Recognition là khả năng nhận ra quy luật, mẫu trong dữ liệu.</p>
            
            <h3>💡 Ví dụ</h3>
            <ul>
                <li>Nhận ra số chẵn: 2, 4, 6, 8... (tăng 2)</li>
                <li>Nhận ra số lẻ: 1, 3, 5, 7... (tăng 2)</li>
                <li>Nhận ra dãy Fibonacci: 0, 1, 1, 2, 3, 5... (số sau = tổng 2 số trước)</li>
            </ul>
            
            <h3>🎯 AI nhận dạng pattern</h3>
            <p>AI có thể tự động tìm pattern mà không cần người lập trình chỉ ra!</p>
        `,
        initialCode: `# Pattern Recognition - Nhận dạng mẫu

# Dữ liệu mẫu: (tuổi, chiều cao)
du_lieu = [
    (10, 140), (11, 145), (12, 150), (13, 155), (14, 160)
]

print("🔍 Tìm Pattern trong dữ liệu")
print("Dữ liệu: (tuổi, chiều cao)")
for tuoi, cao in du_lieu:
    print(f"  {tuoi} tuổi → {cao} cm")

# Tìm pattern: chiều cao tăng bao nhiêu mỗi năm?
tang_trung_binh = []
for i in range(len(du_lieu) - 1):
    tang = du_lieu[i+1][1] - du_lieu[i][1]
    tang_trung_binh.append(tang)
    print(f"  Từ {du_lieu[i][0]}→{du_lieu[i+1][0]} tuổi: tăng {tang} cm")

tang_tb = sum(tang_trung_binh) / len(tang_trung_binh)
print(f"\\n💡 Pattern: Mỗi năm tăng khoảng {tang_tb:.1f} cm")

# Dự đoán dựa trên pattern
tuoi_moi = 15
chieu_cao_du_doan = du_lieu[-1][1] + tang_tb
print(f"\\n🔮 Dự đoán: {tuoi_moi} tuổi → {chieu_cao_du_doan:.1f} cm")

print("\\n✨ AI tìm pattern và dự đoán tự động!")`,
        solution: `
            <div class="solution">
                <h5><i class="fas fa-lightbulb"></i> Giải thích:</h5>
                <div class="code-explanation">
                    <strong>Pattern Recognition:</strong>
                    <ul>
                        <li>Phân tích dữ liệu để tìm quy luật</li>
                        <li>Tính toán các thay đổi, xu hướng</li>
                        <li>Dự đoán dựa trên pattern đã tìm thấy</li>
                        <li>Đây là cách AI "học" từ dữ liệu!</li>
                    </ul>
                </div>
            </div>
        `
    }
};

// Load bài học
function loadLesson(lessonId) {
    const lesson = advancedLessons[lessonId];
    if (!lesson) return;
    
    // Cập nhật active state
    document.querySelectorAll('.sidebar-menu a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('onclick') && link.getAttribute('onclick').includes(`loadLesson('${lessonId}')`)) {
            link.classList.add('active');
        }
    });
    
    // Tạo nội dung bài học
    const lessonContent = `
        <div class="chapter">
            <div class="chapter-header">
                <div class="chapter-icon">${lesson.category === 'Game' ? '🎮' : lesson.category === 'Website' ? '🌐' : '🤖'}</div>
                <h2 class="chapter-title">${lesson.title}</h2>
            </div>
            
            <div class="chapter-intro">
                ${lesson.description}
            </div>
            
            <div class="python-runner-container">
                <div id="python-runner-lesson-${lessonId}"></div>
            </div>
            
            <div id="solution-${lessonId}" style="display: none;">
                ${lesson.solution}
            </div>
            
            <div style="text-align: center; margin: 2rem 0;">
                <button class="btn btn-primary" onclick="toggleSolution('${lessonId}')" id="solution-btn-${lessonId}">
                    <i class="fas fa-eye"></i> Hiển thị giải thích
                </button>
            </div>
        </div>
    `;
    
    document.getElementById('lesson-content').innerHTML = lessonContent;
    
    // Khởi tạo Python runner với retry mechanism
    (function() {
        let retryCount = 0;
        const maxRetries = 20; // Tối đa 2 giây (20 * 100ms)
        
        function initRunner() {
            const runnerContainer = document.getElementById(`python-runner-lesson-${lessonId}`);
            
            if (runnerContainer && typeof createPythonRunner !== 'undefined') {
                try {
                    runnerContainer.innerHTML = createPythonRunner(lesson.initialCode, `python-runner-lesson-${lessonId}`);
                    console.log(`Python runner đã được tạo cho bài học: ${lessonId}`);
                    
                    // Enable run button nếu Pyodide đã sẵn sàng
                    // Đợi một chút để đảm bảo DOM đã được render
                    setTimeout(() => {
                        if (typeof enableAllRunButtons !== 'undefined') {
                            enableAllRunButtons();
                        } else if (typeof window.enableAllRunButtons !== 'undefined') {
                            window.enableAllRunButtons();
                        }
                    }, 50);
                } catch (error) {
                    console.error('Lỗi khi tạo Python runner:', error);
                    if (retryCount < maxRetries) {
                        retryCount++;
                        setTimeout(initRunner, 100);
                    }
                }
            } else if (retryCount < maxRetries) {
                // Retry nếu createPythonRunner chưa sẵn sàng hoặc container chưa tồn tại
                retryCount++;
                setTimeout(initRunner, 100);
            } else {
                console.error('Không thể tạo Python runner sau nhiều lần thử');
            }
        }
        
        // Đợi DOM được render hoàn toàn
        setTimeout(initRunner, 100);
    })();
}

// Toggle hiển thị giải thích
function toggleSolution(lessonId) {
    const solutionDiv = document.getElementById(`solution-${lessonId}`);
    const btn = document.getElementById(`solution-btn-${lessonId}`);
    
    if (solutionDiv.style.display === 'none') {
        solutionDiv.style.display = 'block';
        btn.innerHTML = '<i class="fas fa-eye-slash"></i> Ẩn giải thích';
        btn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } else {
        solutionDiv.style.display = 'none';
        btn.innerHTML = '<i class="fas fa-eye"></i> Hiển thị giải thích';
    }
}

