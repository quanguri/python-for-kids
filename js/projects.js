// Dữ liệu các dự án Python
const projects = {
    game1: {
        title: "🎮 Game 1: Đoán Số",
        category: "Game",
        description: `
            <h3>📝 Mô tả dự án</h3>
            <p>Tạo game đoán số đơn giản! Máy tính sẽ nghĩ một số từ 1 đến 100, bạn phải đoán số đó là gì.</p>
            
            <h3>💡 Tính năng</h3>
            <ul>
                <li>Máy tính chọn số ngẫu nhiên từ 1 đến 100</li>
                <li>Bạn có 7 lần đoán</li>
                <li>Máy tính sẽ gợi ý "lớn hơn" hoặc "nhỏ hơn"</li>
                <li>Thắng nếu đoán đúng trong 7 lần!</li>
            </ul>
            
            <h3>🎯 Yêu cầu</h3>
            <ul>
                <li>Sử dụng <code>random.randint()</code> để tạo số ngẫu nhiên</li>
                <li>Dùng vòng lặp <code>while</code> để cho phép đoán nhiều lần</li>
                <li>Dùng <code>if/else</code> để so sánh và đưa ra gợi ý</li>
            </ul>
        `,
        initialCode: `import random

# Game đoán số
so_bi_mat = random.randint(1, 100)
so_lan_doan = 0
so_lan_toi_da = 7

print("🎮 Chào mừng đến với game Đoán Số!")
print("Tôi đã nghĩ một số từ 1 đến 100")
print(f"Bạn có {so_lan_toi_da} lần đoán. Hãy thử xem!")

while so_lan_doan < so_lan_toi_da:
    so_lan_doan += 1
    so_lan_con_lai = so_lan_toi_da - so_lan_doan
    
    # Giả lập input (trong thực tế dùng input())
    doan = 50  # Thay đổi số này để thử nghiệm
    
    if doan == so_bi_mat:
        print(f"🎉 Chúc mừng! Bạn đã đoán đúng số {so_bi_mat} sau {so_lan_doan} lần!")
        break
    elif doan < so_bi_mat:
        print(f"📈 Số của tôi LỚN HƠN {doan}. Còn {so_lan_con_lai} lần đoán.")
    else:
        print(f"📉 Số của tôi NHỎ HƠN {doan}. Còn {so_lan_con_lai} lần đoán.")
    
    if so_lan_doan == so_lan_toi_da:
        print(f"😢 Hết lượt rồi! Số bí mật là {so_bi_mat}")`,
        solution: `
            <div class="solution">
                <h5><i class="fas fa-lightbulb"></i> Đáp án:</h5>
                <div class="code-example">
                    <code>
import random

so_bi_mat = random.randint(1, 100)
so_lan_doan = 0
so_lan_toi_da = 7

print("🎮 Chào mừng đến với game Đoán Số!")
print("Tôi đã nghĩ một số từ 1 đến 100")
print(f"Bạn có {so_lan_toi_da} lần đoán. Hãy thử xem!")

while so_lan_doan < so_lan_toi_da:
    so_lan_doan += 1
    so_lan_con_lai = so_lan_toi_da - so_lan_doan
    
    doan = int(input(f"Lần đoán thứ {so_lan_doan}: "))
    
    if doan == so_bi_mat:
        print(f"🎉 Chúc mừng! Bạn đã đoán đúng số {so_bi_mat} sau {so_lan_doan} lần!")
        break
    elif doan < so_bi_mat:
        print(f"📈 Số của tôi LỚN HƠN {doan}. Còn {so_lan_con_lai} lần đoán.")
    else:
        print(f"📉 Số của tôi NHỎ HƠN {doan}. Còn {so_lan_con_lai} lần đoán.")
    
    if so_lan_doan == so_lan_toi_da:
        print(f"😢 Hết lượt rồi! Số bí mật là {so_bi_mat}")
                    </code>
                </div>
                <div class="code-explanation">
                    <strong>Giải thích:</strong>
                    <ul>
                        <li><code>random.randint(1, 100)</code> tạo số ngẫu nhiên từ 1 đến 100</li>
                        <li>Vòng lặp <code>while</code> cho phép đoán nhiều lần</li>
                        <li><code>if/elif/else</code> so sánh và đưa ra gợi ý</li>
                        <li><code>break</code> để dừng khi đoán đúng</li>
                    </ul>
                </div>
            </div>
        `
    },
    game2: {
        title: "🎮 Game 2: Kéo Búa Giấy",
        category: "Game",
        description: `
            <h3>📝 Mô tả dự án</h3>
            <p>Tạo game Kéo Búa Giấy (Rock Paper Scissors) cổ điển! Chơi với máy tính.</p>
            
            <h3>💡 Luật chơi</h3>
            <ul>
                <li>Kéo (1) thắng Giấy (2)</li>
                <li>Giấy (2) thắng Búa (0)</li>
                <li>Búa (0) thắng Kéo (1)</li>
                <li>Hòa nếu cùng lựa chọn</li>
            </ul>
            
            <h3>🎯 Yêu cầu</h3>
            <ul>
                <li>Người chơi chọn: 0 (Búa), 1 (Kéo), 2 (Giấy)</li>
                <li>Máy tính chọn ngẫu nhiên</li>
                <li>So sánh và xác định người thắng</li>
                <li>Đếm điểm</li>
            </ul>
        `,
        initialCode: `import random

# Game Kéo Búa Giấy
lua_chon = ["Búa", "Kéo", "Giấy"]
diem_nguoi = 0
diem_may = 0

print("🎮 Game Kéo Búa Giấy!")
print("0 = Búa, 1 = Kéo, 2 = Giấy")

# Giả lập 3 lượt chơi
for luot in range(1, 4):
    print(f"\\n--- Lượt {luot} ---")
    
    # Giả lập người chơi chọn (thay đổi để thử nghiệm)
    nguoi_choi = 1  # 0=Búa, 1=Kéo, 2=Giấy
    may_tinh = random.randint(0, 2)
    
    print(f"Bạn chọn: {lua_chon[nguoi_choi]}")
    print(f"Máy chọn: {lua_chon[may_tinh]}")
    
    # Xác định người thắng
    if nguoi_choi == may_tinh:
        print("🤝 Hòa!")
    elif (nguoi_choi == 0 and may_tinh == 1) or \\
         (nguoi_choi == 1 and may_tinh == 2) or \\
         (nguoi_choi == 2 and may_tinh == 0):
        print("🎉 Bạn thắng!")
        diem_nguoi += 1
    else:
        print("😢 Máy thắng!")
        diem_may += 1

print(f"\\n📊 Kết quả: Bạn {diem_nguoi} - {diem_may} Máy")`,
        solution: `
            <div class="solution">
                <h5><i class="fas fa-lightbulb"></i> Đáp án:</h5>
                <div class="code-example">
                    <code>
import random

lua_chon = ["Búa", "Kéo", "Giấy"]
diem_nguoi = 0
diem_may = 0

print("🎮 Game Kéo Búa Giấy!")
print("0 = Búa, 1 = Kéo, 2 = Giấy")

for luot in range(1, 4):
    print(f"\\n--- Lượt {luot} ---")
    
    nguoi_choi = int(input("Chọn (0/1/2): "))
    may_tinh = random.randint(0, 2)
    
    print(f"Bạn chọn: {lua_chon[nguoi_choi]}")
    print(f"Máy chọn: {lua_chon[may_tinh]}")
    
    if nguoi_choi == may_tinh:
        print("🤝 Hòa!")
    elif (nguoi_choi == 0 and may_tinh == 1) or \\
         (nguoi_choi == 1 and may_tinh == 2) or \\
         (nguoi_choi == 2 and may_tinh == 0):
        print("🎉 Bạn thắng!")
        diem_nguoi += 1
    else:
        print("😢 Máy thắng!")
        diem_may += 1

print(f"\\n📊 Kết quả: Bạn {diem_nguoi} - {diem_may} Máy")
                    </code>
                </div>
                <div class="code-explanation">
                    <strong>Giải thích:</strong>
                    <ul>
                        <li>Dùng list để lưu các lựa chọn</li>
                        <li>So sánh các trường hợp thắng: Búa>Kéo, Kéo>Giấy, Giấy>Búa</li>
                        <li>Đếm điểm cho cả người chơi và máy</li>
                    </ul>
                </div>
            </div>
        `
    },
    game3: {
        title: "🎮 Game 3: Hangman (Đoán Chữ)",
        category: "Game",
        description: `
            <h3>📝 Mô tả dự án</h3>
            <p>Tạo game Hangman - đoán từ bằng cách đoán từng chữ cái!</p>
            
            <h3>💡 Luật chơi</h3>
            <ul>
                <li>Máy tính chọn một từ bí mật</li>
                <li>Bạn đoán từng chữ cái</li>
                <li>Có 6 lần đoán sai</li>
                <li>Thắng nếu đoán đúng từ trước khi hết lượt</li>
            </ul>
            
            <h3>🎯 Yêu cầu</h3>
            <ul>
                <li>Danh sách từ để chọn ngẫu nhiên</li>
                <li>Hiển thị từ dưới dạng dấu gạch dưới (_ _ _)</li>
                <li>Kiểm tra chữ cái có trong từ không</li>
                <li>Đếm số lần đoán sai</li>
            </ul>
        `,
        initialCode: `import random

# Game Hangman
tu_list = ["PYTHON", "PROGRAMMING", "COMPUTER", "ALGORITHM", "FUNCTION"]
tu_bi_mat = random.choice(tu_list)
tu_hien_thi = ["_"] * len(tu_bi_mat)
so_lan_sai = 0
so_lan_sai_toi_da = 6
chu_da_doan = []

print("🎮 Game Hangman - Đoán Chữ!")
print(f"Từ có {len(tu_bi_mat)} chữ cái")

# Giả lập đoán một số chữ
chu_doan = ["P", "Y", "T", "H", "O", "N"]  # Thay đổi để thử nghiệm

for chu in chu_doan:
    if chu in chu_da_doan:
        print(f"Bạn đã đoán chữ '{chu}' rồi!")
        continue
    
    chu_da_doan.append(chu)
    
    if chu in tu_bi_mat:
        print(f"✅ Đúng! Chữ '{chu}' có trong từ!")
        # Cập nhật từ hiển thị
        for i in range(len(tu_bi_mat)):
            if tu_bi_mat[i] == chu:
                tu_hien_thi[i] = chu
    else:
        so_lan_sai += 1
        print(f"❌ Sai! Chữ '{chu}' không có trong từ. Còn {so_lan_sai_toi_da - so_lan_sai} lần sai.")
    
    print(f"Từ: {' '.join(tu_hien_thi)}")
    
    if "_" not in tu_hien_thi:
        print(f"🎉 Chúc mừng! Bạn đã đoán đúng từ: {tu_bi_mat}")
        break
    
    if so_lan_sai >= so_lan_sai_toi_da:
        print(f"😢 Hết lượt! Từ bí mật là: {tu_bi_mat}")
        break`,
        solution: `
            <div class="solution">
                <h5><i class="fas fa-lightbulb"></i> Đáp án:</h5>
                <div class="code-example">
                    <code>
import random

tu_list = ["PYTHON", "PROGRAMMING", "COMPUTER", "ALGORITHM"]
tu_bi_mat = random.choice(tu_list)
tu_hien_thi = ["_"] * len(tu_bi_mat)
so_lan_sai = 0
chu_da_doan = []

print("🎮 Game Hangman!")
print(f"Từ có {len(tu_bi_mat)} chữ cái")

while so_lan_sai < 6 and "_" in tu_hien_thi:
    print(f"\\nTừ: {' '.join(tu_hien_thi)}")
    chu = input("Đoán một chữ cái: ").upper()
    
    if chu in chu_da_doan:
        print("Bạn đã đoán chữ này rồi!")
        continue
    
    chu_da_doan.append(chu)
    
    if chu in tu_bi_mat:
        print(f"✅ Đúng! Chữ '{chu}' có trong từ!")
        for i in range(len(tu_bi_mat)):
            if tu_bi_mat[i] == chu:
                tu_hien_thi[i] = chu
    else:
        so_lan_sai += 1
        print(f"❌ Sai! Còn {6 - so_lan_sai} lần sai.")
    
    if "_" not in tu_hien_thi:
        print(f"🎉 Chúc mừng! Từ là: {tu_bi_mat}")
                    </code>
                </div>
                <div class="code-explanation">
                    <strong>Giải thích:</strong>
                    <ul>
                        <li>Dùng list để lưu từ hiển thị (ban đầu toàn dấu _)</li>
                        <li>Kiểm tra chữ cái có trong từ không</li>
                        <li>Cập nhật từ hiển thị khi đoán đúng</li>
                        <li>Đếm số lần đoán sai</li>
                    </ul>
                </div>
            </div>
        `
    },
    web1: {
        title: "🌐 Website 1: Tạo HTML với Python",
        category: "Website",
        description: `
            <h3>📝 Mô tả dự án</h3>
            <p>Dùng Python để tạo file HTML tự động! Python có thể tạo code HTML cho bạn.</p>
            
            <h3>💡 Ứng dụng</h3>
            <ul>
                <li>Tạo nhiều trang web cùng lúc</li>
                <li>Tự động hóa việc tạo HTML</li>
                <li>Dùng trong các công cụ build website</li>
            </ul>
            
            <h3>🎯 Yêu cầu</h3>
            <ul>
                <li>Tạo nội dung HTML bằng Python</li>
                <li>Lưu vào file .html</li>
                <li>Mở file trong trình duyệt</li>
            </ul>
        `,
        initialCode: `# Tạo HTML với Python
ten_trang = "Trang Web Của Tôi"
noi_dung = "Chào mừng đến với website Python!"

html = f"""
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>{ten_trang}</title>
    <style>
        body {{
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 50px auto;
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
print(html)
print("\\n💡 Trong thực tế, bạn có thể lưu vào file:")
print("with open('trang_web.html', 'w', encoding='utf-8') as f:")
print("    f.write(html)")`,
        solution: `
            <div class="solution">
                <h5><i class="fas fa-lightbulb"></i> Đáp án:</h5>
                <div class="code-example">
                    <code>
ten_trang = input("Nhập tên trang: ")
noi_dung = input("Nhập nội dung: ")

html = f"""
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>{ten_trang}</title>
    <style>
        body {{
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 50px auto;
            padding: 20px;
        }}
        h1 {{ color: #4CAF50; }}
    </style>
</head>
<body>
    <h1>{ten_trang}</h1>
    <p>{noi_dung}</p>
</body>
</html>
"""

# Lưu vào file
with open('trang_web.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("✅ Đã tạo file trang_web.html!")
                    </code>
                </div>
                <div class="code-explanation">
                    <strong>Giải thích:</strong>
                    <ul>
                        <li>Dùng f-string để chèn biến vào HTML</li>
                        <li><code>with open()</code> để mở và ghi file</li>
                        <li>Python có thể tạo bất kỳ loại file text nào!</li>
                    </ul>
                </div>
            </div>
        `
    },
    web2: {
        title: "🌐 Website 2: Tạo Form HTML",
        category: "Website",
        description: `
            <h3>📝 Mô tả dự án</h3>
            <p>Tạo form HTML với Python - form đăng ký, liên hệ, v.v.</p>
            
            <h3>💡 Tính năng</h3>
            <ul>
                <li>Tạo form với các trường input</li>
                <li>Thêm validation (kiểm tra dữ liệu)</li>
                <li>Styling với CSS</li>
            </ul>
            
            <h3>🎯 Yêu cầu</h3>
            <ul>
                <li>Tạo form HTML hoàn chỉnh</li>
                <li>Có các trường: tên, email, tin nhắn</li>
                <li>Thêm CSS để đẹp hơn</li>
            </ul>
        `,
        initialCode: `# Tạo form HTML
html_form = """
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Form Liên Hệ</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 600px;
            margin: 50px auto;
            padding: 20px;
            background: #f5f5f5;
        }
        .form-container {
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        input, textarea {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
        button {
            background: #4CAF50;
            color: white;
            padding: 12px 30px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class="form-container">
        <h1>📧 Form Liên Hệ</h1>
        <form>
            <input type="text" placeholder="Tên của bạn" required>
            <input type="email" placeholder="Email" required>
            <textarea rows="5" placeholder="Tin nhắn" required></textarea>
            <button type="submit">Gửi</button>
        </form>
    </div>
</body>
</html>
"""

print("Form HTML đã được tạo!")
print(html_form[:200] + "...")`,
        solution: `
            <div class="solution">
                <h5><i class="fas fa-lightbulb"></i> Đáp án:</h5>
                <div class="code-example">
                    <code>
# Tạo form với Python
def tao_form(tieu_de, cac_truong):
    html = f"""
    <!DOCTYPE html>
    <html>
    <head>
        <title>{tieu_de}</title>
        <style>
            body {{ font-family: Arial; max-width: 600px; margin: 50px auto; }}
            input, textarea {{ width: 100%; padding: 10px; margin: 5px 0; }}
            button {{ background: #4CAF50; color: white; padding: 10px 20px; }}
        </style>
    </head>
    <body>
        <h1>{tieu_de}</h1>
        <form>
    """
    
    for truong in cac_truong:
        html += f'<input type="{truong["type"]}" placeholder="{truong["placeholder"]}" required><br>'
    
    html += """
            <button type="submit">Gửi</button>
        </form>
    </body>
    </html>
    """
    return html

# Sử dụng
cac_truong = [
    {"type": "text", "placeholder": "Tên"},
    {"type": "email", "placeholder": "Email"},
    {"type": "text", "placeholder": "Số điện thoại"}
]

html = tao_form("Form Đăng Ký", cac_truong)
with open('form.html', 'w', encoding='utf-8') as f:
    f.write(html)
                    </code>
                </div>
                <div class="code-explanation">
                    <strong>Giải thích:</strong>
                    <ul>
                        <li>Dùng hàm để tạo form động</li>
                        <li>Dùng list để lưu các trường form</li>
                        <li>Vòng lặp để tạo các input</li>
                    </ul>
                </div>
            </div>
        `
    },
    ai1: {
        title: "🤖 AI 1: Chatbot Đơn Giản",
        category: "AI",
        description: `
            <h3>📝 Mô tả dự án</h3>
            <p>Tạo chatbot đơn giản có thể trả lời một số câu hỏi cơ bản!</p>
            
            <h3>💡 Cách hoạt động</h3>
            <ul>
                <li>Lưu các câu hỏi và câu trả lời trong từ điển</li>
                <li>Kiểm tra câu hỏi của người dùng</li>
                <li>Trả về câu trả lời phù hợp</li>
            </ul>
            
            <h3>🎯 Yêu cầu</h3>
            <ul>
                <li>Tạo từ điển câu hỏi - câu trả lời</li>
                <li>Xử lý input từ người dùng</li>
                <li>Trả lời hoặc nói "không hiểu"</li>
            </ul>
        `,
        initialCode: `# Chatbot đơn giản
cau_tra_loi = {
    "xin chào": "Xin chào! Tôi là chatbot Python. Bạn cần gì?",
    "tên bạn là gì": "Tôi là chatbot Python! 🐍",
    "bạn khỏe không": "Tôi khỏe lắm! Cảm ơn bạn đã hỏi!",
    "python là gì": "Python là ngôn ngữ lập trình rất dễ học!",
    "tạm biệt": "Tạm biệt! Hẹn gặp lại!"
}

print("🤖 Chatbot Python")
print("Gõ 'tạm biệt' để thoát")

# Giả lập một số câu hỏi
cau_hoi_list = ["xin chào", "tên bạn là gì", "python là gì", "tạm biệt"]

for cau_hoi in cau_hoi_list:
    cau_hoi = cau_hoi.lower().strip()
    
    if cau_hoi in cau_tra_loi:
        print(f"\\nBạn: {cau_hoi}")
        print(f"Bot: {cau_tra_loi[cau_hoi]}")
    else:
        print(f"\\nBạn: {cau_hoi}")
        print("Bot: Xin lỗi, tôi chưa hiểu. Hãy hỏi lại!")
    
    if cau_hoi == "tạm biệt":
        break`,
        solution: `
            <div class="solution">
                <h5><i class="fas fa-lightbulb"></i> Đáp án:</h5>
                <div class="code-example">
                    <code>
cau_tra_loi = {
    "xin chào": "Xin chào! Tôi là chatbot Python.",
    "tên bạn là gì": "Tôi là chatbot Python! 🐍",
    "python là gì": "Python là ngôn ngữ lập trình!",
    "tạm biệt": "Tạm biệt!"
}

print("🤖 Chatbot Python")

while True:
    cau_hoi = input("\\nBạn: ").lower().strip()
    
    if cau_hoi in cau_tra_loi:
        print(f"Bot: {cau_tra_loi[cau_hoi]}")
    else:
        print("Bot: Xin lỗi, tôi chưa hiểu.")
    
    if cau_hoi == "tạm biệt":
        break
                    </code>
                </div>
                <div class="code-explanation">
                    <strong>Giải thích:</strong>
                    <ul>
                        <li>Dùng từ điển để lưu câu hỏi và câu trả lời</li>
                        <li><code>.lower()</code> để chuyển thành chữ thường</li>
                        <li>Kiểm tra câu hỏi có trong từ điển không</li>
                        <li>Vòng lặp vô hạn cho đến khi người dùng nói "tạm biệt"</li>
                    </ul>
                </div>
            </div>
        `
    },
    ai2: {
        title: "🤖 AI 2: Dự Đoán Số (Machine Learning Đơn Giản)",
        category: "AI",
        description: `
            <h3>📝 Mô tả dự án</h3>
            <p>Tạo chương trình "học" từ dữ liệu để dự đoán! Đây là machine learning đơn giản.</p>
            
            <h3>💡 Cách hoạt động</h3>
            <ul>
                <li>Thu thập dữ liệu (ví dụ: điểm số và kết quả)</li>
                <li>Tìm quy luật từ dữ liệu</li>
                <li>Dự đoán kết quả mới dựa trên quy luật</li>
            </ul>
            
            <h3>🎯 Yêu cầu</h3>
            <ul>
                <li>Lưu dữ liệu mẫu</li>
                <li>Tính trung bình hoặc tìm pattern</li>
                <li>Dự đoán dựa trên pattern</li>
            </ul>
        `,
        initialCode: `# AI dự đoán đơn giản
# Dữ liệu mẫu: (tuổi, chiều cao)
du_lieu = [
    (10, 140), (11, 145), (12, 150), (13, 155), (14, 160),
    (10, 138), (11, 143), (12, 148), (13, 153), (14, 158)
]

print("🤖 AI Dự Đoán Chiều Cao")
print("Dựa trên tuổi, dự đoán chiều cao")

# Tính trung bình chiều cao theo tuổi
chieu_cao_theo_tuoi = {}
for tuoi, chieu_cao in du_lieu:
    if tuoi not in chieu_cao_theo_tuoi:
        chieu_cao_theo_tuoi[tuoi] = []
    chieu_cao_theo_tuoi[tuoi].append(chieu_cao)

# Tính trung bình
trung_binh = {}
for tuoi in chieu_cao_theo_tuoi:
    trung_binh[tuoi] = sum(chieu_cao_theo_tuoi[tuoi]) / len(chieu_cao_theo_tuoi[tuoi])

# Dự đoán
tuoi_moi = 12  # Thay đổi để thử nghiệm
if tuoi_moi in trung_binh:
    du_doan = trung_binh[tuoi_moi]
    print(f"\\nDự đoán: Trẻ {tuoi_moi} tuổi có chiều cao khoảng {du_doan:.1f} cm")
else:
    print(f"\\nChưa có dữ liệu cho tuổi {tuoi_moi}")`,
        solution: `
            <div class="solution">
                <h5><i class="fas fa-lightbulb"></i> Đáp án:</h5>
                <div class="code-example">
                    <code>
# AI dự đoán đơn giản
du_lieu = [
    (10, 140), (11, 145), (12, 150), (13, 155), (14, 160)
]

# Tính trung bình
chieu_cao_theo_tuoi = {}
for tuoi, chieu_cao in du_lieu:
    if tuoi not in chieu_cao_theo_tuoi:
        chieu_cao_theo_tuoi[tuoi] = []
    chieu_cao_theo_tuoi[tuoi].append(chieu_cao)

trung_binh = {}
for tuoi in chieu_cao_theo_tuoi:
    trung_binh[tuoi] = sum(chieu_cao_theo_tuoi[tuoi]) / len(chieu_cao_theo_tuoi[tuoi])

# Dự đoán
tuoi = int(input("Nhập tuổi: "))
if tuoi in trung_binh:
    print(f"Dự đoán chiều cao: {trung_binh[tuoi]:.1f} cm")
else:
    print("Chưa có dữ liệu")
                    </code>
                </div>
                <div class="code-explanation">
                    <strong>Giải thích:</strong>
                    <ul>
                        <li>Thu thập dữ liệu mẫu (tuổi và chiều cao)</li>
                        <li>Tính trung bình chiều cao theo từng tuổi</li>
                        <li>Dự đoán dựa trên trung bình</li>
                        <li>Đây là machine learning đơn giản nhất!</li>
                    </ul>
                </div>
            </div>
        `
    },
    ai3: {
        title: "🤖 AI 3: Phân Loại Dữ Liệu",
        category: "AI",
        description: `
            <h3>📝 Mô tả dự án</h3>
            <p>Tạo chương trình phân loại dữ liệu - một ứng dụng quan trọng của AI!</p>
            
            <h3>💡 Ví dụ</h3>
            <ul>
                <li>Phân loại email: spam hay không spam</li>
                <li>Phân loại hoa quả: táo, cam, chuối</li>
                <li>Phân loại điểm: giỏi, khá, trung bình</li>
            </ul>
            
            <h3>🎯 Yêu cầu</h3>
            <ul>
                <li>Tạo dữ liệu mẫu với nhãn</li>
                <li>Phân loại dựa trên đặc điểm</li>
                <li>Dự đoán loại của dữ liệu mới</li>
            </ul>
        `,
        initialCode: `# AI phân loại đơn giản
# Dữ liệu: (điểm, loại)
du_lieu_hoc = [
    (9.5, "Giỏi"), (8.5, "Giỏi"), (7.5, "Khá"), (6.5, "Khá"),
    (5.5, "Trung bình"), (4.5, "Trung bình"), (3.5, "Yếu")
]

print("🤖 AI Phân Loại Điểm Số")
print("Dựa trên điểm, phân loại: Giỏi, Khá, Trung bình, Yếu")

# Tìm ngưỡng phân loại
nguong_gioi = 8.0
nguong_kha = 6.5
nguong_tb = 5.0

def phan_loai(diem):
    if diem >= nguong_gioi:
        return "Giỏi"
    elif diem >= nguong_kha:
        return "Khá"
    elif diem >= nguong_tb:
        return "Trung bình"
    else:
        return "Yếu"

# Test với một số điểm
diem_test = [9.0, 7.0, 5.5, 4.0]

for diem in diem_test:
    loai = phan_loai(diem)
    print(f"Điểm {diem} → {loai}")`,
        solution: `
            <div class="solution">
                <h5><i class="fas fa-lightbulb"></i> Đáp án:</h5>
                <div class="code-example">
                    <code>
# AI phân loại
def phan_loai_diem(diem):
    if diem >= 8.0:
        return "Giỏi"
    elif diem >= 6.5:
        return "Khá"
    elif diem >= 5.0:
        return "Trung bình"
    else:
        return "Yếu"

# Sử dụng
diem = float(input("Nhập điểm: "))
loai = phan_loai_diem(diem)
print(f"Phân loại: {loai}")

# Phân loại nhiều điểm
danh_sach_diem = [9.5, 7.2, 5.8, 4.3]
for diem in danh_sach_diem:
    print(f"Điểm {diem} → {phan_loai_diem(diem)}")
                    </code>
                </div>
                <div class="code-explanation">
                    <strong>Giải thích:</strong>
                    <ul>
                        <li>Dùng hàm để phân loại</li>
                        <li>Đặt ngưỡng (threshold) để phân loại</li>
                        <li>Có thể áp dụng cho nhiều loại dữ liệu khác</li>
                        <li>Đây là classification - một kỹ thuật AI cơ bản!</li>
                    </ul>
                </div>
            </div>
        `
    }
};

// Load dự án
function loadProject(projectId) {
    const project = projects[projectId];
    if (!project) return;
    
    // Cập nhật active state trong sidebar
    document.querySelectorAll('.sidebar-menu a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('onclick') && link.getAttribute('onclick').includes(`loadProject('${projectId}')`)) {
            link.classList.add('active');
        }
    });
    
    // Tạo nội dung dự án
    const projectContent = `
        <div class="chapter">
            <div class="chapter-header">
                <div class="chapter-icon">${project.category === 'Game' ? '🎮' : project.category === 'Website' ? '🌐' : '🤖'}</div>
                <h2 class="chapter-title">${project.title}</h2>
            </div>
            
            <div class="chapter-intro">
                ${project.description}
            </div>
            
            <div class="python-runner-container">
                <div id="python-runner-project-${projectId}"></div>
            </div>
            
            <div id="solution-${projectId}" style="display: none;">
                ${project.solution}
            </div>
            
            <div style="text-align: center; margin: 2rem 0;">
                <button class="btn btn-primary" onclick="toggleSolution('${projectId}')" id="solution-btn-${projectId}">
                    <i class="fas fa-eye"></i> Hiển thị đáp án
                </button>
            </div>
        </div>
    `;
    
    document.getElementById('project-content').innerHTML = projectContent;
    
    // Khởi tạo Python runner
    setTimeout(() => {
        if (typeof createPythonRunner !== 'undefined') {
            const runnerContainer = document.getElementById(`python-runner-project-${projectId}`);
            if (runnerContainer) {
                runnerContainer.innerHTML = createPythonRunner(project.initialCode, `python-runner-project-${projectId}`);
            }
        } else {
            setTimeout(() => {
                const runnerContainer = document.getElementById(`python-runner-project-${projectId}`);
                if (runnerContainer && typeof createPythonRunner !== 'undefined') {
                    runnerContainer.innerHTML = createPythonRunner(project.initialCode, `python-runner-project-${projectId}`);
                }
            }, 500);
        }
    }, 100);
}

// Toggle hiển thị đáp án
function toggleSolution(projectId) {
    const solutionDiv = document.getElementById(`solution-${projectId}`);
    const btn = document.getElementById(`solution-btn-${projectId}`);
    
    if (solutionDiv.style.display === 'none') {
        solutionDiv.style.display = 'block';
        btn.innerHTML = '<i class="fas fa-eye-slash"></i> Ẩn đáp án';
        btn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } else {
        solutionDiv.style.display = 'none';
        btn.innerHTML = '<i class="fas fa-eye"></i> Hiển thị đáp án';
    }
}

