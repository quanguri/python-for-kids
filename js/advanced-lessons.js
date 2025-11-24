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
so_lan_lap = 0  # Đếm số lần lặp để tránh lặp vô hạn

print("🎮 Game Đơn Giản")
print("=" * 30)
print("💡 Trong thực tế: lua_chon = input('Chọn (1-3): ')")

while tro_choi_dang_chay:
    so_lan_lap += 1
    print(f"\\n--- Lần chơi {so_lan_lap} ---")
    print(f"Điểm hiện tại: {diem_so}")
    print("1. Chơi (tăng điểm)")
    print("2. Xem điểm")
    print("3. Thoát")
    
    # Giả lập lựa chọn (thay đổi để thử nghiệm)
    # Trong thực tế: lua_chon = input('Chọn (1-3): ')
    if so_lan_lap == 1:
        lua_chon = "1"  # Lần 1: Chơi
    elif so_lan_lap == 2:
        lua_chon = "2"  # Lần 2: Xem điểm
    elif so_lan_lap == 3:
        lua_chon = "1"  # Lần 3: Chơi tiếp
    else:
        lua_chon = "3"  # Lần 4+: Thoát
    
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
    'game-lesson4': {
        title: "Bài 4: Class và Object trong Game (OOP)",
        category: "Game",
        description: `
            <h3>📝 OOP (Object-Oriented Programming) là gì?</h3>
            <p>OOP là cách lập trình dùng "đối tượng" (object) để tổ chức code. Mỗi đối tượng có thuộc tính (attributes) và hành động (methods).</p>
            
            <h3>💡 Tại sao dùng OOP trong game?</h3>
            <ul>
                <li><strong>Tổ chức code tốt hơn:</strong> Mỗi đối tượng quản lý chính nó</li>
                <li><strong>Tái sử dụng:</strong> Tạo nhiều đối tượng từ cùng một class</li>
                <li><strong>Dễ bảo trì:</strong> Sửa một class, tất cả object đều thay đổi</li>
                <li><strong>Mô phỏng thực tế:</strong> Game giống đời thực hơn</li>
            </ul>
            
            <h3>🎯 Các khái niệm OOP</h3>
            <ul>
                <li><code>Class</code> - Khuôn mẫu (ví dụ: Player)</li>
                <li><code>Object/Instance</code> - Đối tượng cụ thể (ví dụ: player1, player2)</li>
                <li><code>Attributes</code> - Thuộc tính (ví dụ: name, health, score)</li>
                <li><code>Methods</code> - Hành động (ví dụ: attack(), heal(), move())</li>
                <li><code>__init__</code> - Constructor, khởi tạo object</li>
                <li><code>self</code> - Tham chiếu đến chính object đó</li>
            </ul>
            
            <h3>🎮 Ví dụ trong game</h3>
            <p>Trong game có nhiều loại đối tượng: Player, Enemy, Item, Bullet... Mỗi loại là một class!</p>
            
            <div class="exercise" style="margin-top: 2rem; padding: 1.5rem; background: #f8f9fa; border-radius: 8px; border-left: 4px solid var(--primary-color);">
                <h4 style="margin-top: 0; color: var(--primary-color);"><i class="fas fa-pencil-alt"></i> Bài Tập Thực Hành</h4>
                <ol class="exercise-list" style="padding-left: 1.5rem;">
                    <li style="margin-bottom: 0.8rem;"><strong>Bài 1:</strong> Tạo class <code>Bullet</code> với các thuộc tính: x, y, speed, damage. Có method <code>move()</code> để di chuyển bullet.</li>
                    <li style="margin-bottom: 0.8rem;"><strong>Bài 2:</strong> Tạo class <code>PowerUp</code> (vật phẩm tăng sức mạnh) với các loại: "speed", "damage", "health". Có method <code>apply()</code> để áp dụng effect lên player.</li>
                    <li style="margin-bottom: 0.8rem;"><strong>Bài 3:</strong> Mở rộng class <code>Player</code> thêm method <code>level_up()</code> để tăng level và cải thiện stats (máu tối đa, sát thương).</li>
                    <li style="margin-bottom: 0.8rem;"><strong>Bài 4:</strong> Tạo class <code>Game</code> quản lý tất cả objects (players, enemies, items). Có method <code>add_enemy()</code>, <code>remove_enemy()</code>, <code>check_collisions()</code>.</li>
                    <li style="margin-bottom: 0.8rem;"><strong>Bài 5:</strong> Tạo class <code>Weapon</code> với thuộc tính: name, damage, durability. Có method <code>attack()</code> giảm durability, <code>repair()</code> để sửa chữa.</li>
                </ol>
                
                <div style="margin-top: 1.5rem; padding: 1rem; background: #e8f5e9; border-left: 4px solid #4CAF50; border-radius: 5px;">
                    <h5 style="margin-top: 0; color: #4CAF50;"><i class="fas fa-star"></i> Gợi ý cho Bài 1:</h5>
                    <div class="code-example" style="margin-top: 0.5rem; background: #fff; padding: 1rem; border-radius: 4px; font-family: 'Courier New', monospace; font-size: 0.9rem;">
                        <code style="color: #333;">
class Bullet:<br>
&nbsp;&nbsp;&nbsp;&nbsp;def __init__(self, x, y, speed, damage):<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.x = x<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.y = y<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.speed = speed<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.damage = damage<br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;def move(self):<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Di chuyển bullet lên trên<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.y -= self.speed<br>
<br>
# Tạo và test<br>
bullet = Bullet(100, 500, 5, 10)<br>
print(f"Vị trí ban đầu: ({bullet.x}, {bullet.y})")<br>
bullet.move()<br>
print(f"Sau khi di chuyển: ({bullet.x}, {bullet.y})")
                        </code>
                    </div>
                </div>
            </div>
        `,
        initialCode: `# OOP trong Game - Class và Object

# ========== VÍ DỤ 1: Class Player ==========
class Player:
    def __init__(self, ten, mau, diem):
        """Khởi tạo player với tên, máu, điểm"""
        self.ten = ten
        self.mau = mau
        self.diem = diem
    
    def tan_cong(self, sat_thuong):
        """Tấn công đối thủ"""
        return sat_thuong
    
    def nhan_sat_thuong(self, sat_thuong):
        """Nhận sát thương"""
        self.mau -= sat_thuong
        if self.mau < 0:
            self.mau = 0
        return self.mau
    
    def hoi_mau(self, luong):
        """Hồi máu"""
        self.mau += luong
        return self.mau
    
    def them_diem(self, diem):
        """Thêm điểm"""
        self.diem += diem
        return self.diem
    
    def hien_thi(self):
        """Hiển thị thông tin player"""
        return f"{self.ten}: Máu={self.mau}, Điểm={self.diem}"

# ========== VÍ DỤ 2: Class Enemy ==========
class Enemy:
    def __init__(self, ten, mau, sat_thuong):
        self.ten = ten
        self.mau = mau
        self.sat_thuong = sat_thuong
    
    def tan_cong(self):
        """Enemy tấn công"""
        return self.sat_thuong
    
    def nhan_sat_thuong(self, sat_thuong):
        """Enemy nhận sát thương"""
        self.mau -= sat_thuong
        if self.mau < 0:
            self.mau = 0
        return self.mau
    
    def con_song(self):
        """Kiểm tra enemy còn sống không"""
        return self.mau > 0
    
    def hien_thi(self):
        return f"{self.ten}: Máu={self.mau}, Sát thương={self.sat_thuong}"

# ========== VÍ DỤ 3: Class Item ==========
class Item:
    def __init__(self, ten, loai, gia_tri):
        self.ten = ten
        self.loai = loai  # "heal", "weapon", "armor"
        self.gia_tri = gia_tri
    
    def su_dung(self, player):
        """Sử dụng item"""
        if self.loai == "heal":
            player.hoi_mau(self.gia_tri)
            return f"Đã hồi {self.gia_tri} máu!"
        elif self.loai == "weapon":
            return f"Vũ khí: +{self.gia_tri} sát thương"
        else:
            return f"Giáp: +{self.gia_tri} phòng thủ"
    
    def hien_thi(self):
        return f"{self.ten} ({self.loai}): +{self.gia_tri}"

print("🎮 OOP trong Game - Nhiều ví dụ")
print("=" * 50)

# Tạo các đối tượng
print("\\n1️⃣ Tạo Player:")
player1 = Player("Anh Hùng", 100, 0)
print(f"   {player1.hien_thi()}")

print("\\n2️⃣ Tạo Enemy:")
enemy1 = Enemy("Quái Vật", 60, 15)
enemy2 = Enemy("Boss", 150, 30)
print(f"   {enemy1.hien_thi()}")
print(f"   {enemy2.hien_thi()}")

print("\\n3️⃣ Tạo Items:")
item1 = Item("Bình Máu", "heal", 50)
item2 = Item("Kiếm Sắt", "weapon", 20)
item3 = Item("Áo Giáp", "armor", 15)
print(f"   {item1.hien_thi()}")
print(f"   {item2.hien_thi()}")
print(f"   {item3.hien_thi()}")

# Tương tác giữa các objects
print("\\n⚔️ Chiến đấu:")
print(f"{player1.ten} tấn công {enemy1.ten}")
sat_thuong = 25
mau_con = enemy1.nhan_sat_thuong(sat_thuong)
print(f"   {enemy1.ten} còn {mau_con} máu")
print(f"   Còn sống: {enemy1.con_song()}")

print(f"\\n{enemy1.ten} tấn công {player1.ten}")
sat_thuong_enemy = enemy1.tan_cong()
player1.nhan_sat_thuong(sat_thuong_enemy)
print(f"   {player1.hien_thi()}")

# Sử dụng item
print("\\n💊 Sử dụng item:")
ket_qua = item1.su_dung(player1)
print(f"   {ket_qua}")
print(f"   {player1.hien_thi()}")

print("\\n💡 OOP giúp tổ chức code game rõ ràng và dễ mở rộng!")`,
        solution: `
            <div class="solution">
                <h5><i class="fas fa-lightbulb"></i> Giải thích chi tiết:</h5>
                <div class="code-explanation">
                    <strong>OOP trong Game:</strong>
                    <ul>
                        <li><code>__init__(self, ...)</code> - Constructor, được gọi khi tạo object mới</li>
                        <li><code>self</code> - Luôn là tham số đầu tiên, tham chiếu đến chính object đó</li>
                        <li><strong>Attributes:</strong> Lưu trữ dữ liệu (self.ten, self.mau...)</li>
                        <li><strong>Methods:</strong> Hành động của object (self.tan_cong(), self.hien_thi()...)</li>
                        <li>Mỗi object độc lập - thay đổi player1 không ảnh hưởng player2</li>
                        <li>Có thể tạo nhiều object từ cùng class: player1, player2, player3...</li>
                    </ul>
                    
                    <strong>Lợi ích của OOP:</strong>
                    <ul>
                        <li>Code có tổ chức, dễ đọc</li>
                        <li>Tái sử dụng: Tạo nhiều enemy từ class Enemy</li>
                        <li>Dễ mở rộng: Thêm method mới vào class</li>
                        <li>Encapsulation: Dữ liệu và hành động gói gọn trong object</li>
                    </ul>
                </div>
            </div>
        `
    },
    'game-lesson5': {
        title: "Bài 5: Game State Management",
        category: "Game",
        description: `
            <h3>📝 Game State là gì?</h3>
            <p>Game State là trạng thái hiện tại của game (menu, đang chơi, game over, pause...). Quản lý state giúp game chạy mượt và logic rõ ràng.</p>
            
            <h3>💡 Các state thường gặp</h3>
            <ul>
                <li><strong>MENU:</strong> Màn hình menu chính</li>
                <li><strong>PLAYING:</strong> Đang chơi game</li>
                <li><strong>PAUSED:</strong> Tạm dừng</li>
                <li><strong>GAME_OVER:</strong> Kết thúc game</li>
                <li><strong>SETTINGS:</strong> Cài đặt</li>
            </ul>
            
            <h3>🎯 State Machine Pattern</h3>
            <p>State Machine là pattern quản lý các state. Game chỉ ở một state tại một thời điểm, và có thể chuyển đổi giữa các state.</p>
            
            <h3>🔄 Chuyển đổi State</h3>
            <ul>
                <li>MENU → PLAYING (khi bấm "Bắt đầu")</li>
                <li>PLAYING → PAUSED (khi bấm "Pause")</li>
                <li>PAUSED → PLAYING (khi bấm "Tiếp tục")</li>
                <li>PLAYING → GAME_OVER (khi thua/thắng)</li>
                <li>GAME_OVER → MENU (khi bấm "Chơi lại")</li>
            </ul>
            
            <div class="exercise" style="margin-top: 2rem; padding: 1.5rem; background: #f8f9fa; border-radius: 8px; border-left: 4px solid var(--primary-color);">
                <h4 style="margin-top: 0; color: var(--primary-color);"><i class="fas fa-pencil-alt"></i> Bài Tập Thực Hành</h4>
                <ol class="exercise-list" style="padding-left: 1.5rem;">
                    <li style="margin-bottom: 0.8rem;"><strong>Bài 1:</strong> Thêm state <code>SETTINGS</code> vào game. Cho phép chuyển từ MENU → SETTINGS và SETTINGS → MENU.</li>
                    <li style="margin-bottom: 0.8rem;"><strong>Bài 2:</strong> Tạo class <code>StateMachine</code> quản lý tất cả states. Có method <code>can_transition()</code> kiểm tra xem có thể chuyển state không.</li>
                    <li style="margin-bottom: 0.8rem;"><strong>Bài 3:</strong> Thêm state <code>LEVEL_SELECT</code> giữa MENU và PLAYING. Cho phép người chơi chọn level trước khi chơi.</li>
                    <li style="margin-bottom: 0.8rem;"><strong>Bài 4:</strong> Tạo method <code>get_valid_transitions()</code> trả về danh sách các state có thể chuyển từ state hiện tại.</li>
                    <li style="margin-bottom: 0.8rem;"><strong>Bài 5:</strong> Thêm logging để ghi lại mọi lần chuyển state (state history).</li>
                </ol>
            </div>
        `,
        initialCode: `# Game State Management

class GameState:
    MENU = "MENU"
    PLAYING = "PLAYING"
    PAUSED = "PAUSED"
    GAME_OVER = "GAME_OVER"

class Game:
    def __init__(self):
        self.state = GameState.MENU
        self.diem = 0
        self.mang = 3
    
    def chuyen_state(self, state_moi):
        """Chuyển đổi state"""
        print(f"🔄 Chuyển từ {self.state} → {state_moi}")
        self.state = state_moi
    
    def xu_ly_menu(self):
        """Xử lý logic menu"""
        print("\\n📋 MENU")
        print("1. Bắt đầu chơi")
        print("2. Thoát")
        # Giả lập chọn "Bắt đầu"
        lua_chon = "1"
        if lua_chon == "1":
            self.chuyen_state(GameState.PLAYING)
    
    def xu_ly_playing(self):
        """Xử lý logic khi đang chơi"""
        print(f"\\n🎮 ĐANG CHƠI - Điểm: {self.diem}, Mạng: {self.mang}")
        # Giả lập chơi
        self.diem += 10
        self.mang -= 1
        
        if self.mang <= 0:
            self.chuyen_state(GameState.GAME_OVER)
    
    def xu_ly_game_over(self):
        """Xử lý logic game over"""
        print(f"\\n💀 GAME OVER!")
        print(f"Điểm cuối cùng: {self.diem}")
        # Giả lập chọn "Chơi lại"
        self.diem = 0
        self.mang = 3
        self.chuyen_state(GameState.MENU)
    
    def chay(self):
        """Game loop chính"""
        print("🎮 Game với State Management")
        print("=" * 40)
        
        # Giả lập game loop
        for buoc in range(5):
            if self.state == GameState.MENU:
                self.xu_ly_menu()
            elif self.state == GameState.PLAYING:
                self.xu_ly_playing()
            elif self.state == GameState.GAME_OVER:
                self.xu_ly_game_over()
            
            if buoc < 4:
                print("\\n" + "-" * 40)

# Chạy game
game = Game()
game.chay()`,
        solution: `
            <div class="solution">
                <h5><i class="fas fa-lightbulb"></i> Giải thích:</h5>
                <div class="code-explanation">
                    <strong>State Management:</strong>
                    <ul>
                        <li>Dùng enum hoặc constant để định nghĩa states</li>
                        <li>Mỗi state có logic xử lý riêng</li>
                        <li>Chuyển đổi state rõ ràng và có điều kiện</li>
                        <li>Game loop chỉ cần kiểm tra state hiện tại</li>
                        <li>Pattern này giúp code dễ đọc và bảo trì</li>
                    </ul>
                </div>
            </div>
        `
    },
    'game-lesson6': {
        title: "Bài 6: Collision Detection (Phát hiện va chạm)",
        category: "Game",
        description: `
            <h3>📝 Collision Detection là gì?</h3>
            <p>Collision Detection là phát hiện khi hai đối tượng trong game va chạm với nhau. Rất quan trọng trong game 2D/3D!</p>
            
            <h3>💡 Các loại collision</h3>
            <ul>
                <li><strong>Rectangle Collision:</strong> Va chạm giữa 2 hình chữ nhật</li>
                <li><strong>Circle Collision:</strong> Va chạm giữa 2 hình tròn</li>
                <li><strong>Point in Rectangle:</strong> Điểm có nằm trong hình chữ nhật không?</li>
            </ul>
            
            <h3>🎯 Ứng dụng</h3>
            <ul>
                <li>Player va chạm với enemy → mất máu</li>
                <li>Bullet va chạm với enemy → enemy chết</li>
                <li>Player va chạm với item → nhận item</li>
                <li>Player va chạm với wall → không thể đi qua</li>
            </ul>
            
            <h3>🔍 Công thức Rectangle Collision</h3>
            <p>Hai hình chữ nhật va chạm khi:</p>
            <ul>
                <li>rect1.x < rect2.x + rect2.width</li>
                <li>rect1.x + rect1.width > rect2.x</li>
                <li>rect1.y < rect2.y + rect2.height</li>
                <li>rect1.y + rect1.height > rect2.y</li>
            </ul>
            
            <div class="exercise" style="margin-top: 2rem; padding: 1.5rem; background: #f8f9fa; border-radius: 8px; border-left: 4px solid var(--primary-color);">
                <h4 style="margin-top: 0; color: var(--primary-color);"><i class="fas fa-pencil-alt"></i> Bài Tập Thực Hành</h4>
                <ol class="exercise-list" style="padding-left: 1.5rem;">
                    <li style="margin-bottom: 0.8rem;"><strong>Bài 1:</strong> Tạo method <code>point_in_rect()</code> kiểm tra xem một điểm (x, y) có nằm trong rectangle không.</li>
                    <li style="margin-bottom: 0.8rem;"><strong>Bài 2:</strong> Tạo class <code>CollisionManager</code> quản lý tất cả objects. Có method <code>check_all_collisions()</code> kiểm tra va chạm giữa tất cả objects.</li>
                    <li style="margin-bottom: 0.8rem;"><strong>Bài 3:</strong> Tạo method <code>get_collision_normal()</code> trả về hướng va chạm (vector) giữa 2 rectangles.</li>
                    <li style="margin-bottom: 0.8rem;"><strong>Bài 4:</strong> Tối ưu collision detection bằng cách dùng spatial grid - chia màn hình thành grid và chỉ kiểm tra va chạm trong cùng cell.</li>
                    <li style="margin-bottom: 0.8rem;"><strong>Bài 5:</strong> Tạo method <code>resolve_collision()</code> xử lý va chạm (ví dụ: đẩy object ra khỏi vùng va chạm).</li>
                </ol>
            </div>
        `,
        initialCode: `# Collision Detection trong Game

class Rectangle:
    def __init__(self, x, y, width, height):
        self.x = x
        self.y = y
        self.width = width
        self.height = height
    
    def check_collision(self, other):
        """Kiểm tra va chạm với rectangle khác"""
        return (self.x < other.x + other.width and
                self.x + self.width > other.x and
                self.y < other.y + other.height and
                self.y + self.height > other.y)
    
    def __str__(self):
        return f"Rect({self.x}, {self.y}, {self.width}x{self.height})"

class Circle:
    def __init__(self, x, y, radius):
        self.x = x
        self.y = y
        self.radius = radius
    
    def check_collision_circle(self, other):
        """Kiểm tra va chạm với circle khác"""
        import math
        dx = self.x - other.x
        dy = self.y - other.y
        distance = math.sqrt(dx*dx + dy*dy)
        return distance < (self.radius + other.radius)
    
    def __str__(self):
        return f"Circle({self.x}, {self.y}, r={self.radius})"

print("🎮 Collision Detection")
print("=" * 40)

# Test Rectangle Collision
player = Rectangle(10, 10, 20, 20)
enemy1 = Rectangle(25, 15, 15, 15)  # Va chạm
enemy2 = Rectangle(50, 50, 15, 15)  # Không va chạm

print("\\n📦 Rectangle Collision:")
print(f"Player: {player}")
print(f"Enemy1: {enemy1}")
print(f"  Va chạm: {player.check_collision(enemy1)}")

print(f"\\nEnemy2: {enemy2}")
print(f"  Va chạm: {player.check_collision(enemy2)}")

# Test Circle Collision
bullet = Circle(10, 10, 5)
target = Circle(12, 12, 8)  # Va chạm
target2 = Circle(30, 30, 5)  # Không va chạm

print("\\n⭕ Circle Collision:")
print(f"Bullet: {bullet}")
print(f"Target: {target}")
print(f"  Va chạm: {bullet.check_collision_circle(target)}")

print(f"\\nTarget2: {target2}")
print(f"  Va chạm: {bullet.check_collision_circle(target2)}")

print("\\n💡 Collision detection là nền tảng của mọi game!")`,
        solution: `
            <div class="solution">
                <h5><i class="fas fa-lightbulb"></i> Giải thích:</h5>
                <div class="code-explanation">
                    <strong>Collision Detection:</strong>
                    <ul>
                        <li>Rectangle collision: Kiểm tra 4 điều kiện overlap</li>
                        <li>Circle collision: Tính khoảng cách giữa 2 tâm</li>
                        <li>Nếu distance < (r1 + r2) thì va chạm</li>
                        <li>Có thể tối ưu bằng spatial partitioning (grid, quadtree)</li>
                        <li>Rất quan trọng cho performance trong game lớn</li>
                    </ul>
                </div>
            </div>
        `
    },
    'game-lesson7': {
        title: "Bài 7: Điểm số và Leaderboard",
        category: "Game",
        description: `
            <h3>📝 Hệ thống điểm số</h3>
            <p>Điểm số là cách đo lường thành tích người chơi. Leaderboard hiển thị top players để tạo động lực cạnh tranh!</p>
            
            <h3>💡 Các thành phần</h3>
            <ul>
                <li><strong>Điểm số:</strong> Tăng khi hoàn thành mục tiêu</li>
                <li><strong>Lưu điểm:</strong> Ghi vào file để lưu lại</li>
                <li><strong>Leaderboard:</strong> Sắp xếp và hiển thị top players</li>
                <li><strong>High Score:</strong> Điểm cao nhất</li>
            </ul>
            
            <h3>🎯 Lưu trữ dữ liệu</h3>
            <ul>
                <li><code>JSON</code> - Dễ đọc, dễ xử lý</li>
                <li><code>CSV</code> - Đơn giản, dễ import Excel</li>
                <li><code>Database</code> - Cho game lớn, nhiều người chơi</li>
            </ul>
            
            <h3>📊 Sắp xếp Leaderboard</h3>
            <p>Dùng <code>sorted()</code> với key function để sắp xếp theo điểm số giảm dần.</p>
            
            <div class="exercise" style="margin-top: 2rem; padding: 1.5rem; background: #f8f9fa; border-radius: 8px; border-left: 4px solid var(--primary-color);">
                <h4 style="margin-top: 0; color: var(--primary-color);"><i class="fas fa-pencil-alt"></i> Bài Tập Thực Hành</h4>
                <ol class="exercise-list" style="padding-left: 1.5rem;">
                    <li style="margin-bottom: 0.8rem;"><strong>Bài 1:</strong> Thêm tính năng lọc leaderboard theo ngày/tháng. Hiển thị top players trong tuần này.</li>
                    <li style="margin-bottom: 0.8rem;"><strong>Bài 2:</strong> Thêm field <code>level</code> và <code>time_played</code> vào score entry. Sắp xếp theo nhiều tiêu chí (điểm, level, thời gian).</li>
                    <li style="margin-bottom: 0.8rem;"><strong>Bài 3:</strong> Tạo method <code>get_player_rank()</code> trả về rank của một player cụ thể trong leaderboard.</li>
                    <li style="margin-bottom: 0.8rem;"><strong>Bài 4:</strong> Thêm tính năng xóa điểm cũ (ví dụ: chỉ giữ điểm trong 30 ngày gần nhất).</li>
                    <li style="margin-bottom: 0.8rem;"><strong>Bài 5:</strong> Tạo method <code>export_to_csv()</code> xuất leaderboard ra file CSV để mở bằng Excel.</li>
                </ol>
            </div>
        `,
        initialCode: `# Hệ thống điểm số và Leaderboard

import json
from datetime import datetime

class Leaderboard:
    def __init__(self, filename="leaderboard.json"):
        self.filename = filename
        self.scores = self.load_scores()
    
    def load_scores(self):
        """Tải điểm số từ file"""
        try:
            # Trong thực tế: with open(self.filename, 'r') as f: return json.load(f)
            # Giả lập dữ liệu có sẵn
            return [
                {"ten": "Anh Hùng", "diem": 1500, "ngay": "2024-01-15"},
                {"ten": "Siêu Nhân", "diem": 1200, "ngay": "2024-01-14"},
                {"ten": "Người Nhện", "diem": 980, "ngay": "2024-01-13"}
            ]
        except:
            return []
    
    def save_scores(self):
        """Lưu điểm số vào file"""
        # Trong thực tế: with open(self.filename, 'w') as f: json.dump(self.scores, f)
        print(f"💾 Đã lưu {len(self.scores)} điểm số vào file")
    
    def them_diem(self, ten, diem):
        """Thêm điểm số mới"""
        score_entry = {
            "ten": ten,
            "diem": diem,
            "ngay": datetime.now().strftime("%Y-%m-%d")
        }
        self.scores.append(score_entry)
        self.scores.sort(key=lambda x: x['diem'], reverse=True)
        self.scores = self.scores[:10]  # Chỉ giữ top 10
        self.save_scores()
    
    def hien_thi(self, top_n=5):
        """Hiển thị top N players"""
        print(f"🏆 LEADERBOARD (Top {top_n})")
        print("=" * 40)
        for i, score in enumerate(self.scores[:top_n], 1):
            print(f"{i}. {score['ten']:15} - {score['diem']:5} điểm ({score['ngay']})")
    
    def diem_cao_nhat(self):
        """Lấy điểm cao nhất"""
        if self.scores:
            return self.scores[0]['diem']
        return 0

# Sử dụng
leaderboard = Leaderboard()

print("🎮 Hệ thống điểm số và Leaderboard")
print("=" * 40)

# Hiển thị leaderboard hiện tại
leaderboard.hien_thi()

# Thêm điểm mới
print("\\n✨ Thêm điểm mới:")
leaderboard.them_diem("Bạn Nhỏ", 1350)
leaderboard.them_diem("Siêu Sao", 1100)

# Hiển thị lại
print("\\n📊 Leaderboard sau khi cập nhật:")
leaderboard.hien_thi()

print(f"\\n🌟 Điểm cao nhất: {leaderboard.diem_cao_nhat()}")`,
        solution: `
            <div class="solution">
                <h5><i class="fas fa-lightbulb"></i> Giải thích:</h5>
                <div class="code-explanation">
                    <strong>Leaderboard System:</strong>
                    <ul>
                        <li>Dùng JSON để lưu trữ dữ liệu dễ đọc</li>
                        <li><code>sorted()</code> với <code>key</code> để sắp xếp theo điểm</li>
                        <li><code>reverse=True</code> để sắp xếp giảm dần</li>
                        <li>Giới hạn top N để tiết kiệm bộ nhớ</li>
                        <li>Có thể mở rộng: thêm thời gian chơi, level, v.v.</li>
                    </ul>
                </div>
            </div>
        `
    },
    'game-lesson8': {
        title: "Bài 8: Tối ưu hóa Game",
        category: "Game",
        description: `
            <h3>📝 Tối ưu hóa là gì?</h3>
            <p>Tối ưu hóa là làm cho game chạy nhanh hơn, mượt hơn, và sử dụng ít tài nguyên hơn!</p>
            
            <h3>💡 Các kỹ thuật tối ưu</h3>
            <ul>
                <li><strong>Object Pooling:</strong> Tái sử dụng object thay vì tạo mới</li>
                <li><strong>Spatial Partitioning:</strong> Chia không gian để giảm collision checks</li>
                <li><strong>Lazy Loading:</strong> Chỉ load khi cần</li>
                <li><strong>Caching:</strong> Lưu kết quả tính toán để dùng lại</li>
                <li><strong>Early Exit:</strong> Thoát sớm khi có thể</li>
            </ul>
            
            <h3>🎯 Profiling</h3>
            <p>Đo lường performance để biết phần nào cần tối ưu. Dùng <code>time.time()</code> hoặc <code>timeit</code> module.</p>
            
            <h3>⚡ Best Practices</h3>
            <ul>
                <li>Tránh tạo object trong game loop</li>
                <li>Dùng list comprehension thay vì vòng lặp thường</li>
                <li>Cache kết quả tính toán phức tạp</li>
                <li>Giảm số lần collision check</li>
            </ul>
        `,
        initialCode: `# Tối ưu hóa Game

import time

# 1. Object Pooling - Tái sử dụng object
class BulletPool:
    def __init__(self, size=10):
        self.pool = [None] * size
        self.index = 0
    
    def get_bullet(self):
        """Lấy bullet từ pool"""
        bullet = self.pool[self.index]
        if bullet is None:
            bullet = {"x": 0, "y": 0, "active": False}
            self.pool[self.index] = bullet
        self.index = (self.index + 1) % len(self.pool)
        return bullet

# 2. Caching - Lưu kết quả tính toán
cache = {}

def tinh_toan_phuc_tap(n):
    """Tính toán phức tạp (giả lập)"""
    if n in cache:
        return cache[n]  # Trả về kết quả đã cache
    
    # Giả lập tính toán phức tạp
    result = sum(i*i for i in range(n))
    cache[n] = result
    return result

# 3. Early Exit - Thoát sớm
def tim_trong_list(items, target):
    """Tìm item trong list - tối ưu với early exit"""
    for item in items:
        if item == target:
            return True  # Thoát ngay khi tìm thấy
    return False

# 4. List Comprehension vs Loop
def tao_list_cham(n):
    """Tạo list - cách chậm"""
    result = []
    for i in range(n):
        result.append(i * 2)
    return result

def tao_list_nhanh(n):
    """Tạo list - cách nhanh"""
    return [i * 2 for i in range(n)]

print("⚡ Tối ưu hóa Game")
print("=" * 40)

# Test Object Pooling
print("\\n1. Object Pooling:")
pool = BulletPool(5)
for i in range(7):
    bullet = pool.get_bullet()
    print(f"  Bullet {i+1}: {bullet}")

# Test Caching
print("\\n2. Caching:")
start = time.time()
result1 = tinh_toan_phuc_tap(1000)
time1 = time.time() - start

start = time.time()
result2 = tinh_toan_phuc_tap(1000)  # Lần 2 - dùng cache
time2 = time.time() - start

print(f"  Lần 1 (không cache): {time1*1000:.3f}ms")
print(f"  Lần 2 (có cache): {time2*1000:.3f}ms")
print(f"  Nhanh hơn: {time1/time2:.1f}x")

# Test Early Exit
print("\\n3. Early Exit:")
items = list(range(1000))
start = time.time()
found = tim_trong_list(items, 10)  # Tìm ở đầu list
time_early = time.time() - start
print(f"  Tìm thấy ở đầu: {time_early*1000:.3f}ms")

# Test List Comprehension
print("\\n4. List Comprehension:")
n = 10000
start = time.time()
list1 = tao_list_cham(n)
time_slow = time.time() - start

start = time.time()
list2 = tao_list_nhanh(n)
time_fast = time.time() - start

print(f"  Vòng lặp thường: {time_slow*1000:.3f}ms")
print(f"  List comprehension: {time_fast*1000:.3f}ms")
print(f"  Nhanh hơn: {time_slow/time_fast:.1f}x")

print("\\n💡 Tối ưu hóa giúp game chạy mượt hơn!")`,
        solution: `
            <div class="solution">
                <h5><i class="fas fa-lightbulb"></i> Giải thích:</h5>
                <div class="code-explanation">
                    <strong>Tối ưu hóa Game:</strong>
                    <ul>
                        <li>Object Pooling: Giảm memory allocation, tăng performance</li>
                        <li>Caching: Tránh tính toán lại những gì đã biết</li>
                        <li>Early Exit: Dừng ngay khi tìm thấy kết quả</li>
                        <li>List Comprehension: Nhanh hơn vòng lặp thường 2-3x</li>
                        <li>Luôn đo lường trước khi tối ưu (profiling)</li>
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
    'web-lesson4': {
        title: "Bài 4: Web Scraping với requests",
        category: "Website",
        description: `
            <h3>📝 Web Scraping là gì?</h3>
            <p>Web Scraping là lấy dữ liệu từ website tự động. Python có thể "đọc" HTML và trích xuất thông tin cần thiết!</p>
            
            <h3>💡 Thư viện cần thiết</h3>
            <ul>
                <li><code>requests</code> - Gửi HTTP request, lấy HTML</li>
                <li><code>BeautifulSoup</code> - Parse HTML, tìm kiếm element</li>
                <li><code>lxml</code> hoặc <code>html.parser</code> - Parser engine</li>
            </ul>
            
            <h3>🎯 Ứng dụng</h3>
            <ul>
                <li>Thu thập dữ liệu giá cả, sản phẩm</li>
                <li>Lấy tin tức, bài viết từ website</li>
                <li>Monitoring giá, stock</li>
                <li>Research và data collection</li>
            </ul>
            
            <h3>⚖️ Đạo đức và pháp lý</h3>
            <ul>
                <li>Luôn kiểm tra <code>robots.txt</code></li>
                <li>Respect rate limits (không spam)</li>
                <li>Chỉ scrape dữ liệu công khai</li>
                <li>Xin phép nếu cần</li>
            </ul>
            
            <div class="exercise" style="margin-top: 2rem; padding: 1.5rem; background: #f8f9fa; border-radius: 8px; border-left: 4px solid var(--accent-color);">
                <h4 style="margin-top: 0; color: var(--accent-color);"><i class="fas fa-pencil-alt"></i> Bài Tập Thực Hành</h4>
                <ol class="exercise-list" style="padding-left: 1.5rem;">
                    <li style="margin-bottom: 0.8rem;"><strong>Bài 1:</strong> Tạo function <code>extract_all_links()</code> trích xuất tất cả links từ HTML và lọc chỉ lấy links hợp lệ (bắt đầu bằng http/https).</li>
                    <li style="margin-bottom: 0.8rem;"><strong>Bài 2:</strong> Tạo function <code>extract_table_data()</code> trích xuất dữ liệu từ HTML table thành list of dictionaries.</li>
                    <li style="margin-bottom: 0.8rem;"><strong>Bài 3:</strong> Tạo class <code>WebScraper</code> với method <code>scrape_with_retry()</code> tự động retry khi request thất bại (tối đa 3 lần).</li>
                    <li style="margin-bottom: 0.8rem;"><strong>Bài 4:</strong> Thêm rate limiting - đợi 1 giây giữa các request để không spam server.</li>
                    <li style="margin-bottom: 0.8rem;"><strong>Bài 5:</strong> Tạo function <code>save_to_file()</code> lưu dữ liệu đã scrape vào file JSON hoặc CSV.</li>
                </ol>
            </div>
        `,
        initialCode: `# Web Scraping với requests và BeautifulSoup

# Lưu ý: Trong môi trường thực tế, cần cài đặt:
# pip install requests beautifulsoup4

# Giả lập HTML response (vì không thể thực sự scrape trong Pyodide)
html_content = """
<html>
<head><title>Python for Kids</title></head>
<body>
    <h1>Chào mừng đến với Python!</h1>
    <div class="content">
        <p>Python là ngôn ngữ lập trình tuyệt vời.</p>
        <ul>
            <li>Dễ học</li>
            <li>Mạnh mẽ</li>
            <li>Phổ biến</li>
        </ul>
    </div>
    <a href="/about">Giới thiệu</a>
    <a href="/contact">Liên hệ</a>
</body>
</html>
"""

# Giả lập BeautifulSoup parsing
def parse_html(html):
    """Parse HTML và trích xuất thông tin"""
    # Trong thực tế: from bs4 import BeautifulSoup
    # soup = BeautifulSoup(html, 'html.parser')
    
    # Giả lập kết quả parsing
    result = {
        "title": "Python for Kids",
        "headings": ["Chào mừng đến với Python!"],
        "paragraphs": ["Python là ngôn ngữ lập trình tuyệt vời."],
        "links": ["/about", "/contact"],
        "list_items": ["Dễ học", "Mạnh mẽ", "Phổ biến"]
    }
    return result

print("🕷️ Web Scraping với Python")
print("=" * 40)

# Parse HTML
data = parse_html(html_content)

print("\\n📄 Thông tin trích xuất:")
print(f"Tiêu đề: {data['title']}")
print(f"\\nHeading: {data['headings'][0]}")
print(f"\\nĐoạn văn: {data['paragraphs'][0]}")
print(f"\\nLinks:")
for link in data['links']:
    print(f"  - {link}")
print(f"\\nList items:")
for item in data['list_items']:
    print(f"  - {item}")

print("\\n💡 Trong thực tế:")
print("  1. import requests")
print("  2. response = requests.get('https://example.com')")
print("  3. from bs4 import BeautifulSoup")
print("  4. soup = BeautifulSoup(response.text, 'html.parser')")
print("  5. title = soup.find('title').text")
print("\\n⚠️ Luôn kiểm tra robots.txt và respect rate limits!")`,
        solution: `
            <div class="solution">
                <h5><i class="fas fa-lightbulb"></i> Giải thích:</h5>
                <div class="code-explanation">
                    <strong>Web Scraping:</strong>
                    <ul>
                        <li><code>requests.get()</code> - Lấy HTML từ URL</li>
                        <li><code>BeautifulSoup</code> - Parse và tìm kiếm trong HTML</li>
                        <li><code>find()</code> - Tìm element đầu tiên</li>
                        <li><code>find_all()</code> - Tìm tất cả elements</li>
                        <li>Luôn xử lý lỗi và respect website's terms</li>
                    </ul>
                </div>
            </div>
        `
    },
    'web-lesson5': {
        title: "Bài 5: API và JSON",
        category: "Website",
        description: `
            <h3>📝 API là gì?</h3>
            <p>API (Application Programming Interface) là cách các ứng dụng giao tiếp với nhau. API trả về dữ liệu dạng JSON.</p>
            
            <h3>💡 JSON là gì?</h3>
            <p>JSON (JavaScript Object Notation) là định dạng dữ liệu dễ đọc, dễ xử lý. Python có module <code>json</code> sẵn!</p>
            
            <h3>🎯 Các bước làm việc với API</h3>
            <ol>
                <li>Gửi HTTP request (GET, POST, PUT, DELETE)</li>
                <li>Nhận response (thường là JSON)</li>
                <li>Parse JSON thành Python dict/list</li>
                <li>Xử lý dữ liệu</li>
            </ol>
            
            <h3>🌐 Ví dụ API miễn phí</h3>
            <ul>
                <li>Weather API - Thời tiết</li>
                <li>News API - Tin tức</li>
                <li>GitHub API - Thông tin repository</li>
                <li>JSONPlaceholder - API test miễn phí</li>
            </ul>
            
            <div class="exercise" style="margin-top: 2rem; padding: 1.5rem; background: #f8f9fa; border-radius: 8px; border-left: 4px solid var(--accent-color);">
                <h4 style="margin-top: 0; color: var(--accent-color);"><i class="fas fa-pencil-alt"></i> Bài Tập Thực Hành</h4>
                <ol class="exercise-list" style="padding-left: 1.5rem;">
                    <li style="margin-bottom: 0.8rem;"><strong>Bài 1:</strong> Tạo class <code>APIClient</code> với method <code>get()</code>, <code>post()</code> để gửi HTTP requests. Xử lý lỗi và retry tự động.</li>
                    <li style="margin-bottom: 0.8rem;"><strong>Bài 2:</strong> Tạo function <code>parse_nested_json()</code> xử lý JSON có cấu trúc lồng nhau sâu. Trích xuất giá trị theo path (ví dụ: "data.weather.temperature").</li>
                    <li style="margin-bottom: 0.8rem;"><strong>Bài 3:</strong> Tạo method <code>validate_json_schema()</code> kiểm tra xem JSON response có đúng format mong đợi không (có đủ fields cần thiết).</li>
                    <li style="margin-bottom: 0.8rem;"><strong>Bài 4:</strong> Tạo function <code>merge_json_data()</code> gộp dữ liệu từ nhiều API calls thành một dictionary.</li>
                    <li style="margin-bottom: 0.8rem;"><strong>Bài 5:</strong> Tạo caching system - lưu JSON response vào file và chỉ gọi API lại nếu dữ liệu cũ hơn 1 giờ.</li>
                </ol>
            </div>
        `,
        initialCode: `# Làm việc với API và JSON

import json

# Giả lập JSON response từ API
# Trong thực tế: response = requests.get('https://api.example.com/data')
json_response = '''
{
    "status": "success",
    "data": {
        "weather": {
            "city": "Hà Nội",
            "temperature": 25,
            "humidity": 70,
            "description": "Nắng đẹp"
        },
        "forecast": [
            {"day": "Hôm nay", "temp": 25, "condition": "Nắng"},
            {"day": "Ngày mai", "temp": 27, "condition": "Nắng"},
            {"day": "Ngày kia", "temp": 24, "condition": "Mưa"}
        ]
    }
}
'''

print("🌐 API và JSON")
print("=" * 40)

# Parse JSON
data = json.loads(json_response)

print("\\n📊 Dữ liệu từ API:")
print(f"Status: {data['status']}")

weather = data['data']['weather']
print(f"\\n🌤️ Thời tiết {weather['city']}:")
print(f"  Nhiệt độ: {weather['temperature']}°C")
print(f"  Độ ẩm: {weather['humidity']}%")
print(f"  Mô tả: {weather['description']}")

print("\\n📅 Dự báo 3 ngày:")
for day_data in data['data']['forecast']:
    print(f"  {day_data['day']}: {day_data['temp']}°C - {day_data['condition']}")

# Tạo JSON từ Python dict
new_data = {
    "user": "Bạn nhỏ",
    "favorite_city": "Hà Nội",
    "settings": {
        "unit": "celsius",
        "language": "vi"
    }
}

json_string = json.dumps(new_data, indent=2, ensure_ascii=False)
print("\\n💾 JSON được tạo từ Python:")
print(json_string)

print("\\n💡 API giúp lấy dữ liệu từ internet dễ dàng!")`,
        solution: `
            <div class="solution">
                <h5><i class="fas fa-lightbulb"></i> Giải thích:</h5>
                <div class="code-explanation">
                    <strong>API và JSON:</strong>
                    <ul>
                        <li><code>json.loads()</code> - Parse JSON string → Python dict</li>
                        <li><code>json.dumps()</code> - Convert Python dict → JSON string</li>
                        <li><code>indent=2</code> - Format JSON đẹp hơn</li>
                        <li><code>ensure_ascii=False</code> - Hỗ trợ tiếng Việt</li>
                        <li>API response thường có status code (200 = success)</li>
                    </ul>
                </div>
            </div>
        `
    },
    'web-lesson6': {
        title: "Bài 6: Database với SQLite",
        category: "Website",
        description: `
            <h3>📝 Database là gì?</h3>
            <p>Database là nơi lưu trữ dữ liệu có cấu trúc. SQLite là database nhẹ, không cần server, rất phù hợp cho Python!</p>
            
            <h3>💡 SQL là gì?</h3>
            <p>SQL (Structured Query Language) là ngôn ngữ để làm việc với database. Các lệnh cơ bản:</p>
            <ul>
                <li><code>CREATE TABLE</code> - Tạo bảng</li>
                <li><code>INSERT</code> - Thêm dữ liệu</li>
                <li><code>SELECT</code> - Đọc dữ liệu</li>
                <li><code>UPDATE</code> - Cập nhật dữ liệu</li>
                <li><code>DELETE</code> - Xóa dữ liệu</li>
            </ul>
            
            <h3>🎯 CRUD Operations</h3>
            <ul>
                <li><strong>Create</strong> - Tạo mới (INSERT)</li>
                <li><strong>Read</strong> - Đọc (SELECT)</li>
                <li><strong>Update</strong> - Cập nhật (UPDATE)</li>
                <li><strong>Delete</strong> - Xóa (DELETE)</li>
            </ul>
            
            <h3>📊 Ví dụ: Blog Database</h3>
            <p>Tạo database để lưu bài viết blog với các trường: id, title, content, author, date.</p>
            
            <div class="exercise" style="margin-top: 2rem; padding: 1.5rem; background: #f8f9fa; border-radius: 8px; border-left: 4px solid var(--accent-color);">
                <h4 style="margin-top: 0; color: var(--accent-color);"><i class="fas fa-pencil-alt"></i> Bài Tập Thực Hành</h4>
                <ol class="exercise-list" style="padding-left: 1.5rem;">
                    <li style="margin-bottom: 0.8rem;"><strong>Bài 1:</strong> Tạo bảng <code>users</code> với các trường: id, username, email, created_at. Tạo foreign key từ posts.author → users.id.</li>
                    <li style="margin-bottom: 0.8rem;"><strong>Bài 2:</strong> Tạo method <code>search_posts()</code> tìm kiếm bài viết theo từ khóa trong title hoặc content (dùng LIKE).</li>
                    <li style="margin-bottom: 0.8rem;"><strong>Bài 3:</strong> Tạo method <code>get_posts_by_author()</code> lấy tất cả bài viết của một author cụ thể. Sắp xếp theo date giảm dần.</li>
                    <li style="margin-bottom: 0.8rem;"><strong>Bài 4:</strong> Tạo method <code>get_statistics()</code> trả về thống kê: tổng số bài viết, số bài viết mỗi author, bài viết mới nhất.</li>
                    <li style="margin-bottom: 0.8rem;"><strong>Bài 5:</strong> Tạo method <code>backup_database()</code> sao lưu toàn bộ dữ liệu ra file JSON.</li>
                </ol>
            </div>
        `,
        initialCode: `# Database với SQLite

import sqlite3
from datetime import datetime

# Giả lập database operations (SQLite không chạy trong Pyodide)
class DatabaseSimulator:
    def __init__(self):
        self.posts = []
        self.next_id = 1
    
    def create_table(self):
        """Tạo bảng posts"""
        print("✅ Đã tạo bảng 'posts'")
        print("   Columns: id, title, content, author, date")
    
    def insert_post(self, title, content, author):
        """Thêm bài viết mới"""
        post = {
            "id": self.next_id,
            "title": title,
            "content": content,
            "author": author,
            "date": datetime.now().strftime("%Y-%m-%d")
        }
        self.posts.append(post)
        self.next_id += 1
        print(f"✅ Đã thêm bài viết: {title}")
        return post["id"]
    
    def get_all_posts(self):
        """Lấy tất cả bài viết"""
        return self.posts
    
    def get_post_by_id(self, post_id):
        """Lấy bài viết theo ID"""
        for post in self.posts:
            if post["id"] == post_id:
                return post
        return None
    
    def update_post(self, post_id, title=None, content=None):
        """Cập nhật bài viết"""
        post = self.get_post_by_id(post_id)
        if post:
            if title:
                post["title"] = title
            if content:
                post["content"] = content
            print(f"✅ Đã cập nhật bài viết ID {post_id}")
            return True
        return False
    
    def delete_post(self, post_id):
        """Xóa bài viết"""
        post = self.get_post_by_id(post_id)
        if post:
            self.posts.remove(post)
            print(f"✅ Đã xóa bài viết ID {post_id}")
            return True
        return False

print("💾 Database với SQLite")
print("=" * 40)

# Tạo database
db = DatabaseSimulator()
db.create_table()

# Thêm bài viết
print("\\n📝 Thêm bài viết:")
post1_id = db.insert_post("Học Python", "Python rất dễ học!", "Bạn nhỏ")
post2_id = db.insert_post("Lập trình Game", "Game rất thú vị!", "Bạn nhỏ")

# Đọc tất cả bài viết
print("\\n📖 Tất cả bài viết:")
for post in db.get_all_posts():
    print(f"  [{post['id']}] {post['title']} - {post['author']} ({post['date']})")

# Cập nhật bài viết
print("\\n✏️ Cập nhật bài viết:")
db.update_post(post1_id, title="Học Python Vui Vẻ", content="Python rất dễ học và thú vị!")

# Xóa bài viết
print("\\n🗑️ Xóa bài viết:")
db.delete_post(post2_id)

# Hiển thị lại
print("\\n📖 Bài viết còn lại:")
for post in db.get_all_posts():
    print(f"  [{post['id']}] {post['title']}")

print("\\n💡 Trong thực tế:")
print("  conn = sqlite3.connect('blog.db')")
print("  cursor = conn.cursor()")
print("  cursor.execute('CREATE TABLE posts ...')")
print("  conn.commit()")
print("  conn.close()")`,
        solution: `
            <div class="solution">
                <h5><i class="fas fa-lightbulb"></i> Giải thích:</h5>
                <div class="code-explanation">
                    <strong>SQLite Database:</strong>
                    <ul>
                        <li>SQLite là file-based database, không cần server</li>
                        <li>Module <code>sqlite3</code> có sẵn trong Python</li>
                        <li>Luôn dùng <code>commit()</code> sau khi thay đổi</li>
                        <li>Nhớ <code>close()</code> connection khi xong</li>
                        <li>Có thể dùng context manager: <code>with sqlite3.connect()</code></li>
                    </ul>
                </div>
            </div>
        `
    },
    'web-lesson7': {
        title: "Bài 7: Authentication và Security",
        category: "Website",
        description: `
            <h3>📝 Authentication là gì?</h3>
            <p>Authentication là xác thực danh tính người dùng (login). Security là bảo mật để bảo vệ dữ liệu và hệ thống.</p>
            
            <h3>💡 Các khái niệm</h3>
            <ul>
                <li><strong>Username/Password:</strong> Thông tin đăng nhập</li>
                <li><strong>Hashing:</strong> Mã hóa password (không thể đảo ngược)</li>
                <li><strong>Session:</strong> Phiên đăng nhập</li>
                <li><strong>Token:</strong> Mã xác thực tạm thời</li>
            </ul>
            
            <h3>🔒 Password Security</h3>
            <ul>
                <li>KHÔNG BAO GIỜ lưu password dạng plain text</li>
                <li>Luôn hash password với thuật toán như bcrypt, SHA-256</li>
                <li>Thêm salt để tăng độ bảo mật</li>
                <li>Yêu cầu password mạnh (8+ ký tự, có số, chữ hoa/thường)</li>
            </ul>
            
            <h3>🎯 Session Management</h3>
            <p>Session là cách lưu trạng thái đăng nhập. Mỗi user có session ID riêng, lưu trong cookie hoặc database.</p>
        `,
        initialCode: `# Authentication và Security

import hashlib
import secrets

class UserAuth:
    def __init__(self):
        self.users = {}  # {username: hashed_password}
        self.sessions = {}  # {session_id: username}
    
    def hash_password(self, password):
        """Hash password với SHA-256 (trong thực tế dùng bcrypt)"""
        return hashlib.sha256(password.encode()).hexdigest()
    
    def register(self, username, password):
        """Đăng ký user mới"""
        if username in self.users:
            return False, "Username đã tồn tại"
        
        if len(password) < 6:
            return False, "Password phải có ít nhất 6 ký tự"
        
        hashed = self.hash_password(password)
        self.users[username] = hashed
        return True, "Đăng ký thành công!"
    
    def login(self, username, password):
        """Đăng nhập"""
        if username not in self.users:
            return False, None, "Username không tồn tại"
        
        hashed = self.hash_password(password)
        if self.users[username] != hashed:
            return False, None, "Password sai"
        
        # Tạo session
        session_id = secrets.token_hex(16)
        self.sessions[session_id] = username
        return True, session_id, "Đăng nhập thành công!"
    
    def verify_session(self, session_id):
        """Xác thực session"""
        return self.sessions.get(session_id)
    
    def logout(self, session_id):
        """Đăng xuất"""
        if session_id in self.sessions:
            del self.sessions[session_id]
            return True
        return False

print("🔐 Authentication và Security")
print("=" * 40)

auth = UserAuth()

# Đăng ký
print("\\n📝 Đăng ký:")
success, msg = auth.register("bannho", "password123")
print(f"  {msg}")

success, msg = auth.register("sieunhan", "abc123")
print(f"  {msg}")

# Đăng nhập
print("\\n🔑 Đăng nhập:")
success, session, msg = auth.login("bannho", "password123")
if success:
    print(f"  {msg}")
    print(f"  Session ID: {session[:20]}...")
else:
    print(f"  {msg}")

# Xác thực session
print("\\n✅ Xác thực session:")
if session:
    username = auth.verify_session(session)
    if username:
        print(f"  User đã đăng nhập: {username}")
    
    # Đăng xuất
    print("\\n🚪 Đăng xuất:")
    auth.logout(session)
    username = auth.verify_session(session)
    if not username:
        print("  Đã đăng xuất thành công")

print("\\n💡 Luôn hash password, không bao giờ lưu plain text!")`,
        solution: `
            <div class="solution">
                <h5><i class="fas fa-lightbulb"></i> Giải thích:</h5>
                <div class="code-explanation">
                    <strong>Authentication:</strong>
                    <ul>
                        <li>Hash password với SHA-256 hoặc bcrypt (bcrypt tốt hơn)</li>
                        <li>Session ID dùng để xác thực user đã đăng nhập</li>
                        <li>Session có thể expire sau một thời gian</li>
                        <li>Luôn validate input để tránh SQL injection, XSS</li>
                        <li>Dùng HTTPS để mã hóa dữ liệu truyền tải</li>
                    </ul>
                </div>
            </div>
        `
    },
    'web-lesson8': {
        title: "Bài 8: Deploy Website",
        category: "Website",
        description: `
            <h3>📝 Deploy là gì?</h3>
            <p>Deploy là đưa website lên internet để mọi người có thể truy cập. Có nhiều cách deploy miễn phí!</p>
            
            <h3>💡 Các nền tảng deploy miễn phí</h3>
            <ul>
                <li><strong>GitHub Pages:</strong> Static website (HTML, CSS, JS)</li>
                <li><strong>Netlify:</strong> Static site với CI/CD</li>
                <li><strong>Vercel:</strong> Deploy nhanh, hỗ trợ nhiều framework</li>
                <li><strong>Heroku:</strong> Backend applications (có giới hạn)</li>
            </ul>
            
            <h3>🎯 Static Site Generator</h3>
            <p>Python có thể tạo static site generator - tự động tạo HTML từ template và data. Rất hữu ích cho blog, portfolio!</p>
            
            <h3>📦 Các bước deploy</h3>
            <ol>
                <li>Tạo static website (HTML files)</li>
                <li>Push code lên GitHub</li>
                <li>Kích hoạt GitHub Pages</li>
                <li>Website sẽ có URL: username.github.io/repo-name</li>
            </ol>
        `,
        initialCode: `# Static Site Generator - Tạo website để deploy

def tao_trang_html(tieu_de, noi_dung, template="default"):
    """Tạo trang HTML từ template"""
    if template == "default":
        html = f"""<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{tieu_de}</title>
    <style>
        body {{
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 50px auto;
            padding: 20px;
            background: #f5f5f5;
        }}
        .container {{
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }}
        h1 {{
            color: #4CAF50;
            border-bottom: 3px solid #4CAF50;
            padding-bottom: 10px;
        }}
        .content {{
            line-height: 1.8;
            margin-top: 20px;
        }}
    </style>
</head>
<body>
    <div class="container">
        <h1>{tieu_de}</h1>
        <div class="content">
            {noi_dung}
        </div>
    </div>
</body>
</html>"""
    return html

# Tạo nhiều trang
trang_web = {
    "index.html": tao_trang_html(
        "Trang Chủ",
        "<p>Chào mừng đến với website của tôi!</p><p>Đây là trang chủ.</p>"
    ),
    "about.html": tao_trang_html(
        "Giới Thiệu",
        "<p>Tôi là một lập trình viên Python.</p><p>Rất vui được gặp bạn!</p>"
    ),
    "contact.html": tao_trang_html(
        "Liên Hệ",
        "<p>Email: contact@example.com</p><p>Phone: 0123-456-789</p>"
    )
}

print("🚀 Static Site Generator")
print("=" * 40)

print("\\n📄 Đã tạo các trang:")
for filename, html in trang_web.items():
    print(f"  ✅ {filename} ({len(html)} ký tự)")
    # Trong thực tế: with open(filename, 'w', encoding='utf-8') as f: f.write(html)

print("\\n📦 Các bước deploy:")
print("  1. Lưu các file HTML vào thư mục")
print("  2. Tạo repository trên GitHub")
print("  3. Push code: git push origin main")
print("  4. Vào Settings > Pages")
print("  5. Chọn branch 'main' và folder '/ (root)'")
print("  6. Website sẽ có tại: username.github.io/repo-name")

print("\\n💡 Static site generator giúp tạo website nhanh chóng!")`,
        solution: `
            <div class="solution">
                <h5><i class="fas fa-lightbulb"></i> Giải thích:</h5>
                <div class="code-explanation">
                    <strong>Deploy Website:</strong>
                    <ul>
                        <li>Static Site Generator: Tạo HTML từ template và data</li>
                        <li>GitHub Pages: Miễn phí, dễ sử dụng cho static site</li>
                        <li>Custom domain: Có thể dùng domain riêng</li>
                        <li>CI/CD: Tự động deploy khi push code</li>
                        <li>HTTPS: Tự động có SSL certificate</li>
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
    },
    'ai-lesson4': {
        title: "Bài 4: Linear Regression từ đầu",
        category: "AI",
        description: `
            <h3>📝 Linear Regression là gì?</h3>
            <p>Linear Regression là thuật toán ML đơn giản nhất - tìm đường thẳng phù hợp nhất với dữ liệu để dự đoán.</p>
            
            <h3>💡 Công thức</h3>
            <p>y = mx + b</p>
            <ul>
                <li><code>y</code> - Giá trị dự đoán</li>
                <li><code>x</code> - Giá trị đầu vào</li>
                <li><code>m</code> - Độ dốc (slope)</li>
                <li><code>b</code> - Điểm cắt (intercept)</li>
            </ul>
            
            <h3>🎯 Gradient Descent</h3>
            <p>Thuật toán tìm m và b tốt nhất bằng cách điều chỉnh từng bước để giảm lỗi (error).</p>
            
            <h3>📊 Mean Squared Error (MSE)</h3>
            <p>MSE đo lường độ chính xác của model. MSE càng nhỏ, model càng tốt!</p>
            <p>MSE = (1/n) × Σ(actual - predicted)²</p>
            
            <div class="exercise" style="margin-top: 2rem; padding: 1.5rem; background: #f8f9fa; border-radius: 8px; border-left: 4px solid #9c27b0;">
                <h4 style="margin-top: 0; color: #9c27b0;"><i class="fas fa-pencil-alt"></i> Bài Tập Thực Hành</h4>
                <ol class="exercise-list" style="padding-left: 1.5rem;">
                    <li style="margin-bottom: 0.8rem;"><strong>Bài 1:</strong> Tạo function <code>multiple_linear_regression()</code> xử lý nhiều features (x1, x2, x3...) thay vì chỉ một feature.</li>
                    <li style="margin-bottom: 0.8rem;"><strong>Bài 2:</strong> Thêm tính năng normalization - chuẩn hóa dữ liệu về khoảng [0, 1] để gradient descent hội tụ nhanh hơn.</li>
                    <li style="margin-bottom: 0.8rem;"><strong>Bài 3:</strong> Tạo function <code>plot_learning_curve()</code> vẽ biểu đồ MSE theo số iterations để xem model học như thế nào.</li>
                    <li style="margin-bottom: 0.8rem;"><strong>Bài 4:</strong> Implement early stopping - dừng training khi MSE không giảm sau N iterations.</li>
                    <li style="margin-bottom: 0.8rem;"><strong>Bài 5:</strong> Tạo function <code>predict_batch()</code> dự đoán nhiều giá trị cùng lúc thay vì từng giá trị một.</li>
                </ol>
            </div>
        `,
        initialCode: `# Linear Regression từ đầu

def tinh_mse(y_thuc_te, y_du_doan):
    """Tính Mean Squared Error"""
    n = len(y_thuc_te)
    tong_loi = sum((y_thuc_te[i] - y_du_doan[i])**2 for i in range(n))
    return tong_loi / n

def linear_regression(x, y, learning_rate=0.01, iterations=1000):
    """Implement Linear Regression với Gradient Descent"""
    # Khởi tạo m và b ngẫu nhiên
    m = 0.0
    b = 0.0
    n = len(x)
    
    # Gradient Descent
    for _ in range(iterations):
        # Tính dự đoán
        y_pred = [m * xi + b for xi in x]
        
        # Tính gradient (đạo hàm)
        dm = -(2/n) * sum(x[i] * (y[i] - y_pred[i]) for i in range(n))
        db = -(2/n) * sum(y[i] - y_pred[i] for i in range(n))
        
        # Cập nhật m và b
        m -= learning_rate * dm
        b -= learning_rate * db
    
    return m, b

# Dữ liệu mẫu: (giờ học, điểm số)
x = [1, 2, 3, 4, 5, 6, 7, 8]  # Giờ học
y = [5, 6, 7, 8, 9, 10, 11, 12]  # Điểm số

print("🤖 Linear Regression từ đầu")
print("=" * 40)

# Train model
m, b = linear_regression(x, y)

print(f"\\n📊 Kết quả:")
print(f"  Độ dốc (m): {m:.2f}")
print(f"  Điểm cắt (b): {b:.2f}")
print(f"  Phương trình: y = {m:.2f}x + {b:.2f}")

# Dự đoán
x_moi = 10
y_du_doan = m * x_moi + b
print(f"\\n🔮 Dự đoán:")
print(f"  Học {x_moi} giờ → Điểm: {y_du_doan:.1f}")

# Tính MSE
y_pred_all = [m * xi + b for xi in x]
mse = tinh_mse(y, y_pred_all)
print(f"\\n📈 Mean Squared Error: {mse:.2f}")

print("\\n💡 Linear Regression là nền tảng của Machine Learning!")`,
        solution: `
            <div class="solution">
                <h5><i class="fas fa-lightbulb"></i> Giải thích:</h5>
                <div class="code-explanation">
                    <strong>Linear Regression:</strong>
                    <ul>
                        <li>Gradient Descent: Tìm m và b tốt nhất bằng cách giảm lỗi</li>
                        <li>Learning rate: Tốc độ học (không quá lớn, không quá nhỏ)</li>
                        <li>MSE: Đo lường độ chính xác, càng nhỏ càng tốt</li>
                        <li>Model học từ dữ liệu để tìm pattern</li>
                        <li>Có thể mở rộng: Multiple Linear Regression (nhiều features)</li>
                    </ul>
                </div>
            </div>
        `
    },
    'ai-lesson5': {
        title: "Bài 5: Classification với Decision Tree",
        category: "AI",
        description: `
            <h3>📝 Decision Tree là gì?</h3>
            <p>Decision Tree là thuật toán phân loại dữ liệu bằng cách đặt câu hỏi "Có/Không" để quyết định.</p>
            
            <h3>💡 Cách hoạt động</h3>
            <p>Giống như trò chơi "20 câu hỏi" - mỗi câu hỏi chia dữ liệu thành 2 nhóm, tiếp tục cho đến khi phân loại được.</p>
            
            <h3>🎯 Entropy và Information Gain</h3>
            <ul>
                <li><strong>Entropy:</strong> Đo độ "hỗn loạn" của dữ liệu (0 = thuần nhất, 1 = hỗn loạn)</li>
                <li><strong>Information Gain:</strong> Đo lường mức độ cải thiện sau khi chia</li>
                <li>Chọn câu hỏi có Information Gain cao nhất</li>
            </ul>
            
            <h3>🌳 Cấu trúc Tree</h3>
            <ul>
                <li><strong>Root:</strong> Câu hỏi đầu tiên</li>
                <li><strong>Branch:</strong> Nhánh (Có/Không)</li>
                <li><strong>Leaf:</strong> Kết quả cuối cùng (class)</li>
            </ul>
            
            <div class="exercise" style="margin-top: 2rem; padding: 1.5rem; background: #f8f9fa; border-radius: 8px; border-left: 4px solid #9c27b0;">
                <h4 style="margin-top: 0; color: #9c27b0;"><i class="fas fa-pencil-alt"></i> Bài Tập Thực Hành</h4>
                <ol class="exercise-list" style="padding-left: 1.5rem;">
                    <li style="margin-bottom: 0.8rem;"><strong>Bài 1:</strong> Implement function <code>calculate_information_gain()</code> tính Information Gain khi chia dữ liệu theo một feature.</li>
                    <li style="margin-bottom: 0.8rem;"><strong>Bài 2:</strong> Tạo class <code>DecisionTreeNode</code> đại diện cho một node trong tree. Có method <code>predict()</code> để dự đoán.</li>
                    <li style="margin-bottom: 0.8rem;"><strong>Bài 3:</strong> Implement <code>build_tree()</code> xây dựng decision tree tự động từ dữ liệu training, chọn feature tốt nhất ở mỗi node.</li>
                    <li style="margin-bottom: 0.8rem;"><strong>Bài 4:</strong> Thêm tính năng pruning - cắt bỏ các nhánh không cần thiết để tránh overfitting.</li>
                    <li style="margin-bottom: 0.8rem;"><strong>Bài 5:</strong> Tạo method <code>visualize_tree()</code> in ra cấu trúc tree dạng text để dễ hiểu.</li>
                </ol>
            </div>
        `,
        initialCode: `# Decision Tree - Phân loại đơn giản

def tinh_entropy(labels):
    """Tính entropy của một nhóm labels"""
    from collections import Counter
    if len(labels) == 0:
        return 0
    
    counts = Counter(labels)
    total = len(labels)
    entropy = 0
    
    for count in counts.values():
        p = count / total
        if p > 0:
            entropy -= p * (p.bit_length() - 1)  # Simplified entropy
    
    return entropy

def phan_loai_don_gian(feature, threshold):
    """Decision Tree đơn giản - phân loại dựa trên 1 feature"""
    # Dữ liệu mẫu: (kích thước, màu sắc, loại quả)
    # 1 = nhỏ, 2 = vừa, 3 = lớn
    # 1 = đỏ, 2 = vàng, 3 = xanh
    data = [
        (1, 1, "Táo"), (2, 1, "Táo"), (3, 2, "Chuối"),
        (2, 2, "Chuối"), (1, 3, "Nho"), (2, 3, "Nho")
    ]
    
    # Phân loại dựa trên kích thước
    nho = [item for item in data if item[0] <= threshold]
    lon = [item for item in data if item[0] > threshold]
    
    # Tìm class phổ biến nhất trong mỗi nhóm
    from collections import Counter
    
    if nho:
        class_nho = Counter([item[2] for item in nho]).most_common(1)[0][0]
    else:
        class_nho = "Không xác định"
    
    if lon:
        class_lon = Counter([item[2] for item in lon]).most_common(1)[0][0]
    else:
        class_lon = "Không xác định"
    
    return class_nho, class_lon, nho, lon

print("🌳 Decision Tree - Classification")
print("=" * 40)

# Phân loại
class_nho, class_lon, nho, lon = phan_loai_don_gian(0, 2)

print("\\n📊 Phân loại dựa trên kích thước:")
print(f"  Nhỏ (<=2): {len(nho)} items → Class: {class_nho}")
for item in nho:
    print(f"    - {item[2]} (kích thước={item[0]}, màu={item[1]})")

print(f"\\n  Lớn (>2): {len(lon)} items → Class: {class_lon}")
for item in lon:
    print(f"    - {item[2]} (kích thước={item[0]}, màu={item[1]})")

# Dự đoán
print("\\n🔮 Dự đoán:")
kich_thuoc_moi = 1
if kich_thuoc_moi <= 2:
    print(f"  Kích thước {kich_thuoc_moi} → Dự đoán: {class_nho}")
else:
    print(f"  Kích thước {kich_thuoc_moi} → Dự đoán: {class_lon}")

print("\\n💡 Decision Tree dễ hiểu và giải thích được!")`,
        solution: `
            <div class="solution">
                <h5><i class="fas fa-lightbulb"></i> Giải thích:</h5>
                <div class="code-explanation">
                    <strong>Decision Tree:</strong>
                    <ul>
                        <li>Entropy: Đo độ "hỗn loạn", entropy = 0 khi tất cả cùng class</li>
                        <li>Information Gain: Chọn feature có gain cao nhất</li>
                        <li>Recursive: Xây dựng tree bằng cách đệ quy</li>
                        <li>Overfitting: Tree quá sâu có thể overfit</li>
                        <li>Có thể dùng Random Forest để cải thiện accuracy</li>
                    </ul>
                </div>
            </div>
        `
    },
    'ai-lesson6': {
        title: "Bài 6: Neural Network cơ bản",
        category: "AI",
        description: `
            <h3>📝 Neural Network là gì?</h3>
            <p>Neural Network (Mạng nơ-ron) là mô hình AI mô phỏng bộ não con người. Gồm nhiều "nơ-ron" kết nối với nhau.</p>
            
            <h3>💡 Cấu trúc cơ bản</h3>
            <ul>
                <li><strong>Input Layer:</strong> Nhận dữ liệu đầu vào</li>
                <li><strong>Hidden Layer:</strong> Xử lý dữ liệu (có thể nhiều lớp)</li>
                <li><strong>Output Layer:</strong> Đưa ra kết quả</li>
            </ul>
            
            <h3>🎯 Perceptron</h3>
            <p>Perceptron là nơ-ron đơn giản nhất - nhận input, nhân với weight, cộng bias, rồi qua activation function.</p>
            <p>output = activation(Σ(input × weight) + bias)</p>
            
            <h3>⚡ Activation Function</h3>
            <ul>
                <li><code>Sigmoid:</code> Chuyển giá trị về 0-1</li>
                <li><code>ReLU:</code> max(0, x) - rất phổ biến</li>
                <li><code>Tanh:</code> Chuyển về -1 đến 1</li>
            </ul>
            
            <div class="exercise" style="margin-top: 2rem; padding: 1.5rem; background: #f8f9fa; border-radius: 8px; border-left: 4px solid #9c27b0;">
                <h4 style="margin-top: 0; color: #9c27b0;"><i class="fas fa-pencil-alt"></i> Bài Tập Thực Hành</h4>
                <ol class="exercise-list" style="padding-left: 1.5rem;">
                    <li style="margin-bottom: 0.8rem;"><strong>Bài 1:</strong> Implement function <code>relu()</code> và <code>tanh()</code> activation functions. So sánh kết quả với sigmoid.</li>
                    <li style="margin-bottom: 0.8rem;"><strong>Bài 2:</strong> Tạo class <code>NeuralNetwork</code> với nhiều layers (input, hidden, output). Có method <code>forward()</code> để tính output.</li>
                    <li style="margin-bottom: 0.8rem;"><strong>Bài 3:</strong> Implement backpropagation - tính gradient và cập nhật weights để train network.</li>
                    <li style="margin-bottom: 0.8rem;"><strong>Bài 4:</strong> Thêm dropout - tắt ngẫu nhiên một số neurons trong quá trình training để tránh overfitting.</li>
                    <li style="margin-bottom: 0.8rem;"><strong>Bài 5:</strong> Tạo method <code>save_weights()</code> và <code>load_weights()</code> để lưu/tải model đã train.</li>
                </ol>
            </div>
        `,
        initialCode: `# Neural Network cơ bản - Perceptron

import math

def sigmoid(x):
    """Activation function: Sigmoid"""
    return 1 / (1 + math.exp(-x))

def relu(x):
    """Activation function: ReLU"""
    return max(0, x)

class Perceptron:
    def __init__(self, weights, bias, activation='sigmoid'):
        self.weights = weights
        self.bias = bias
        self.activation = activation
    
    def forward(self, inputs):
        """Tính output từ input"""
        # Tính tổng có trọng số
        total = sum(inputs[i] * self.weights[i] for i in range(len(inputs)))
        total += self.bias
        
        # Áp dụng activation function
        if self.activation == 'sigmoid':
            return sigmoid(total)
        elif self.activation == 'relu':
            return relu(total)
        else:
            return total
    
    def predict(self, inputs):
        """Dự đoán (binary classification)"""
        output = self.forward(inputs)
        return 1 if output > 0.5 else 0

print("🧠 Neural Network - Perceptron")
print("=" * 40)

# Tạo perceptron đơn giản
# Ví dụ: Nhận diện số chẵn/lẻ dựa trên 2 features
perceptron = Perceptron(
    weights=[0.5, 0.3],  # Trọng số cho 2 inputs
    bias=-0.2,
    activation='sigmoid'
)

# Test với các input
test_cases = [
    ([1, 1], "Số lẻ"),
    ([2, 0], "Số chẵn"),
    ([3, 1], "Số lẻ"),
    ([4, 0], "Số chẵn")
]

print("\\n🔮 Dự đoán:")
for inputs, label in test_cases:
    output = perceptron.forward(inputs)
    prediction = perceptron.predict(inputs)
    print(f"  Input: {inputs} ({label})")
    print(f"    Output: {output:.3f} → Prediction: {prediction}")
    print()

print("💡 Neural Network học bằng cách điều chỉnh weights và bias!")
print("   Training: Dùng backpropagation để cập nhật weights")`,
        solution: `
            <div class="solution">
                <h5><i class="fas fa-lightbulb"></i> Giải thích:</h5>
                <div class="code-explanation">
                    <strong>Neural Network:</strong>
                    <ul>
                        <li>Perceptron: Nơ-ron đơn giản nhất, chỉ có 1 layer</li>
                        <li>Multi-layer: Nhiều layers tạo thành deep learning</li>
                        <li>Weights: Học từ dữ liệu bằng backpropagation</li>
                        <li>Activation: Thêm tính phi tuyến, giúp học pattern phức tạp</li>
                        <li>Training: Cần nhiều dữ liệu và thời gian tính toán</li>
                    </ul>
                </div>
            </div>
        `
    },
    'ai-lesson7': {
        title: "Bài 7: Natural Language Processing (NLP)",
        category: "AI",
        description: `
            <h3>📝 NLP là gì?</h3>
            <p>NLP (Natural Language Processing) là xử lý ngôn ngữ tự nhiên - giúp máy tính hiểu và xử lý ngôn ngữ con người!</p>
            
            <h3>💡 Các bước xử lý text</h3>
            <ul>
                <li><strong>Tokenization:</strong> Chia câu thành từ (tokens)</li>
                <li><strong>Lowercasing:</strong> Chuyển thành chữ thường</li>
                <li><strong>Stop words removal:</strong> Loại bỏ từ không quan trọng</li>
                <li><strong>Stemming/Lemmatization:</strong> Đưa về dạng gốc</li>
            </ul>
            
            <h3>🎯 Ứng dụng NLP</h3>
            <ul>
                <li>Sentiment Analysis - Phân tích cảm xúc</li>
                <li>Chatbot - Trò chuyện tự động</li>
                <li>Machine Translation - Dịch máy</li>
                <li>Text Classification - Phân loại văn bản</li>
            </ul>
            
            <h3>📊 Word Frequency</h3>
            <p>Đếm tần suất xuất hiện của từ - giúp tìm từ quan trọng nhất trong văn bản.</p>
        `,
        initialCode: `# Natural Language Processing (NLP)

from collections import Counter
import re

def preprocess_text(text):
    """Tiền xử lý text"""
    # Chuyển thành chữ thường
    text = text.lower()
    # Loại bỏ dấu câu (giữ lại chữ và số)
    text = re.sub(r'[^a-z0-9\\s]', '', text)
    return text

def tokenize(text):
    """Chia text thành các từ"""
    return text.split()

def remove_stopwords(tokens, stopwords=None):
    """Loại bỏ stop words"""
    if stopwords is None:
        stopwords = {'the', 'a', 'an', 'is', 'are', 'was', 'were', 'be', 'been', 'to', 'of', 'and', 'or'}
    return [token for token in tokens if token not in stopwords]

def word_frequency(text):
    """Tính tần suất từ"""
    # Tiền xử lý
    processed = preprocess_text(text)
    # Tokenize
    tokens = tokenize(processed)
    # Loại bỏ stop words
    tokens = remove_stopwords(tokens)
    # Đếm frequency
    freq = Counter(tokens)
    return freq

def sentiment_simple(text):
    """Phân tích cảm xúc đơn giản (dựa trên từ khóa)"""
    positive_words = {'tốt', 'tuyệt', 'vui', 'hạnh phúc', 'thích', 'yêu'}
    negative_words = {'xấu', 'tệ', 'buồn', 'ghét', 'không thích', 'chán'}
    
    processed = preprocess_text(text)
    tokens = tokenize(processed)
    
    pos_count = sum(1 for token in tokens if token in positive_words)
    neg_count = sum(1 for token in tokens if token in negative_words)
    
    if pos_count > neg_count:
        return "Tích cực"
    elif neg_count > pos_count:
        return "Tiêu cực"
    else:
        return "Trung tính"

print("📝 Natural Language Processing")
print("=" * 40)

# Test text
text1 = "Python là ngôn ngữ lập trình tuyệt vời. Tôi rất thích Python!"
text2 = "Hôm nay trời mưa, tôi cảm thấy buồn."

# Word frequency
print("\\n📊 Word Frequency:")
freq1 = word_frequency(text1)
print(f"Text: '{text1[:50]}...'")
print("Top 5 từ phổ biến:")
for word, count in freq1.most_common(5):
    print(f"  '{word}': {count} lần")

# Sentiment analysis
print("\\n😊 Sentiment Analysis:")
sentiment1 = sentiment_simple(text1)
sentiment2 = sentiment_simple(text2)
print(f"  '{text1[:40]}...' → {sentiment1}")
print(f"  '{text2[:40]}...' → {sentiment2}")

print("\\n💡 NLP giúp máy tính hiểu ngôn ngữ con người!")`,
        solution: `
            <div class="solution">
                <h5><i class="fas fa-lightbulb"></i> Giải thích:</h5>
                <div class="code-explanation">
                    <strong>NLP:</strong>
                    <ul>
                        <li>Preprocessing: Làm sạch và chuẩn hóa text</li>
                        <li>Tokenization: Chia text thành units (từ, câu)</li>
                        <li>Stop words: Loại bỏ từ không mang ý nghĩa</li>
                        <li>Word frequency: Tìm từ quan trọng</li>
                        <li>Sentiment: Phân tích cảm xúc (có thể dùng ML model)</li>
                    </ul>
                </div>
            </div>
        `
    },
    'ai-lesson8': {
        title: "Bài 8: Computer Vision cơ bản",
        category: "AI",
        description: `
            <h3>📝 Computer Vision là gì?</h3>
            <p>Computer Vision là giúp máy tính "nhìn" và hiểu hình ảnh, giống như mắt người!</p>
            
            <h3>💡 Các tác vụ cơ bản</h3>
            <ul>
                <li><strong>Image Processing:</strong> Xử lý ảnh (resize, crop, filter)</li>
                <li><strong>Edge Detection:</strong> Phát hiện đường viền</li>
                <li><strong>Object Detection:</strong> Tìm và nhận diện vật thể</li>
                <li><strong>Face Detection:</strong> Phát hiện khuôn mặt</li>
            </ul>
            
            <h3>🎯 Thư viện Python</h3>
            <ul>
                <li><code>PIL/Pillow:</code> Xử lý ảnh cơ bản</li>
                <li><code>OpenCV:</code> Computer vision mạnh mẽ</li>
                <li><code>numpy:</code> Xử lý mảng số (ảnh = mảng pixels)</li>
            </ul>
            
            <h3>🖼️ Ảnh là gì?</h3>
            <p>Ảnh là mảng 2D (hoặc 3D cho ảnh màu) các pixels. Mỗi pixel có giá trị từ 0-255 (grayscale) hoặc RGB (màu).</p>
            
            <h3>🔍 Edge Detection</h3>
            <p>Phát hiện đường viền bằng cách tìm sự thay đổi đột ngột về độ sáng giữa các pixels.</p>
        `,
        initialCode: `# Computer Vision cơ bản

# Giả lập ảnh grayscale (8x8 pixels, giá trị 0-255)
# Trong thực tế: from PIL import Image
# image = Image.open('photo.jpg')
# pixels = image.load()

def tao_anh_mau():
    """Tạo ảnh mẫu (giả lập)"""
    # Ảnh 8x8 pixels, giá trị 0-255
    image = [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 50, 50, 50, 50, 50, 50, 0],
        [0, 50, 200, 200, 200, 200, 50, 0],
        [0, 50, 200, 255, 255, 200, 50, 0],
        [0, 50, 200, 255, 255, 200, 50, 0],
        [0, 50, 200, 200, 200, 200, 50, 0],
        [0, 50, 50, 50, 50, 50, 50, 0],
        [0, 0, 0, 0, 0, 0, 0, 0]
    ]
    return image

def edge_detection_simple(image):
    """Phát hiện đường viền đơn giản"""
    height = len(image)
    width = len(image[0])
    edges = [[0] * width for _ in range(height)]
    
    # Tìm sự thay đổi đột ngột (threshold = 100)
    threshold = 100
    for y in range(1, height - 1):
        for x in range(1, width - 1):
            # So sánh với pixel bên cạnh
            diff = abs(image[y][x] - image[y][x+1])
            if diff > threshold:
                edges[y][x] = 255  # Edge detected
            else:
                edges[y][x] = 0
    
    return edges

def tinh_trung_binh_mau(image):
    """Tính độ sáng trung bình của ảnh"""
    total = sum(sum(row) for row in image)
    pixels = len(image) * len(image[0])
    return total / pixels

def resize_image(image, new_width, new_height):
    """Resize ảnh (giả lập - đơn giản)"""
    old_height = len(image)
    old_width = len(image[0])
    
    # Tính tỷ lệ
    scale_x = old_width / new_width
    scale_y = old_height / new_height
    
    new_image = []
    for y in range(new_height):
        row = []
        for x in range(new_width):
            # Lấy pixel gần nhất (nearest neighbor)
            old_x = int(x * scale_x)
            old_y = int(y * scale_y)
            row.append(image[old_y][old_x])
        new_image.append(row)
    
    return new_image

print("🖼️ Computer Vision cơ bản")
print("=" * 40)

# Tạo ảnh mẫu
image = tao_anh_mau()

print("\\n📊 Thông tin ảnh:")
print(f"  Kích thước: {len(image[0])}x{len(image)} pixels")
print(f"  Độ sáng trung bình: {tinh_trung_binh_mau(image):.1f}")

# Edge detection
print("\\n🔍 Edge Detection:")
edges = edge_detection_simple(image)
edge_count = sum(sum(1 for pixel in row if pixel == 255) for row in edges)
print(f"  Số pixels đường viền: {edge_count}")

# Resize
print("\\n📐 Resize ảnh:")
resized = resize_image(image, 4, 4)
print(f"  Từ {len(image[0])}x{len(image)} → {len(resized[0])}x{len(resized)}")

print("\\n💡 Computer Vision giúp máy tính 'nhìn' và hiểu ảnh!")`,
        solution: `
            <div class="solution">
                <h5><i class="fas fa-lightbulb"></i> Giải thích:</h5>
                <div class="code-explanation">
                    <strong>Computer Vision:</strong>
                    <ul>
                        <li>Ảnh = mảng 2D/3D của pixels (0-255)</li>
                        <li>Edge detection: Tìm sự thay đổi đột ngột về độ sáng</li>
                        <li>Resize: Thay đổi kích thước (có nhiều thuật toán: nearest, bilinear, bicubic)</li>
                        <li>Filter: Làm mờ, làm nét, detect edges (Gaussian, Sobel, Canny)</li>
                        <li>Deep Learning: CNN (Convolutional Neural Network) cho object detection</li>
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
    
    // Cập nhật active state trong sidebar - tìm link theo data attribute hoặc href
    const allLinks = document.querySelectorAll('.sidebar-menu a');
    
    // Remove active từ tất cả links trước
    allLinks.forEach(l => l.classList.remove('active'));
    
    let foundMatch = false;
    allLinks.forEach((link) => {
        const dataLessonId = link.getAttribute('data-lesson-id');
        const href = link.getAttribute('href');
        
        // Kiểm tra data attribute hoặc href
        if (dataLessonId === lessonId || href === `#${lessonId}`) {
            // Add active cho link này
            link.classList.add('active');
            foundMatch = true;
        }
    });
    
    // Tạo nội dung bài học
    const lessonContent = `
        <div class="chapter" id="${lessonId}">
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
    
    // Đảm bảo active state được giữ sau khi load content
    setTimeout(() => {
        // Re-apply active state sau khi DOM được update
        const targetLink = Array.from(allLinks).find(link => {
            const dataLessonId = link.getAttribute('data-lesson-id');
            const href = link.getAttribute('href');
            return dataLessonId === lessonId || href === `#${lessonId}`;
        });
        
        if (targetLink) {
            allLinks.forEach(l => l.classList.remove('active'));
            targetLink.classList.add('active');
        }
        
        // Auto-scroll đến phần được load
        const chapter = document.getElementById(lessonId);
        if (chapter) {
            chapter.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, 50);
    
    // Khởi tạo Python runner với retry mechanism
    (function() {
        let retryCount = 0;
        const maxRetries = 20; // Tối đa 2 giây (20 * 100ms)
        
        function initRunner() {
            const runnerContainer = document.getElementById(`python-runner-lesson-${lessonId}`);
            
            if (runnerContainer && typeof createPythonRunner !== 'undefined') {
                try {
                    runnerContainer.innerHTML = createPythonRunner(lesson.initialCode, `python-runner-lesson-${lessonId}`);
                    
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
                    if (retryCount < maxRetries) {
                        retryCount++;
                        setTimeout(initRunner, 100);
                    }
                }
            } else if (retryCount < maxRetries) {
                // Retry nếu createPythonRunner chưa sẵn sàng hoặc container chưa tồn tại
                retryCount++;
                setTimeout(initRunner, 100);
            }
        }
        
        // Đợi DOM được render hoàn toàn
        setTimeout(initRunner, 100);
    })();
}

// Thêm event listener cho tất cả sidebar links khi DOM ready
document.addEventListener('DOMContentLoaded', function() {
    // Attach event listeners cho advanced lessons links
    const links = document.querySelectorAll('.sidebar-menu a[data-lesson-id]');
    
    links.forEach((link) => {
        link.addEventListener('click', function(e) {
            const clickedLessonId = this.getAttribute('data-lesson-id');
            
            if (clickedLessonId) {
                // Update active state ngay lập tức - trước khi loadLesson chạy
                const allLinks = document.querySelectorAll('.sidebar-menu a');
                allLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            }
        }, true); // Use capture phase để chạy trước onclick handler
    });
});

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


