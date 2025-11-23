// Dữ liệu các bài toán thuật toán
const problems = {
    1: {
        title: "Bài 1: Tính tổng từ 1 đến n",
        description: `
            <h3>📝 Mô tả bài toán</h3>
            <p>Viết chương trình tính tổng các số từ 1 đến n, trong đó n là số nguyên dương được nhập vào.</p>
            
            <h3>💡 Ví dụ</h3>
            <ul>
                <li>Nếu n = 5, thì tổng = 1 + 2 + 3 + 4 + 5 = 15</li>
                <li>Nếu n = 10, thì tổng = 1 + 2 + 3 + ... + 10 = 55</li>
            </ul>
            
            <h3>🎯 Yêu cầu</h3>
            <ul>
                <li>Nhập số n từ bàn phím</li>
                <li>Tính tổng từ 1 đến n</li>
                <li>In ra kết quả</li>
            </ul>
        `,
        initialCode: `# Tính tổng từ 1 đến n
n = 10  # Thay đổi số này để thử nghiệm

tong = 0
for i in range(1, n + 1):
    tong = tong + i

print(f"Tổng từ 1 đến {n} là: {tong}")`,
        solution: `
            <div class="solution">
                <h5><i class="fas fa-lightbulb"></i> Đáp án:</h5>
                <div class="code-example">
                    <code>
# Cách 1: Dùng vòng lặp for
n = int(input("Nhập số n: "))
tong = 0
for i in range(1, n + 1):
    tong = tong + i
print(f"Tổng từ 1 đến {n} là: {tong}")

# Cách 2: Dùng công thức toán học
n = int(input("Nhập số n: "))
tong = n * (n + 1) // 2
print(f"Tổng từ 1 đến {n} là: {tong}")
                    </code>
                </div>
                <div class="code-explanation">
                    <strong>Giải thích:</strong>
                    <ul>
                        <li><strong>Cách 1:</strong> Dùng vòng lặp for để cộng dồn từ 1 đến n</li>
                        <li><strong>Cách 2:</strong> Dùng công thức toán học: n × (n + 1) / 2</li>
                        <li>Cách 2 nhanh hơn vì không cần vòng lặp!</li>
                    </ul>
                </div>
            </div>
        `
    },
    2: {
        title: "Bài 2: Kiểm tra số nguyên tố",
        description: `
            <h3>📝 Mô tả bài toán</h3>
            <p>Viết chương trình kiểm tra xem một số có phải là số nguyên tố hay không.</p>
            
            <h3>💡 Số nguyên tố là gì?</h3>
            <p>Số nguyên tố là số chỉ chia hết cho 1 và chính nó. Ví dụ: 2, 3, 5, 7, 11, 13...</p>
            
            <h3>💡 Ví dụ</h3>
            <ul>
                <li>Số 7 là số nguyên tố (chỉ chia hết cho 1 và 7)</li>
                <li>Số 10 không phải số nguyên tố (chia hết cho 1, 2, 5, 10)</li>
            </ul>
            
            <h3>🎯 Yêu cầu</h3>
            <ul>
                <li>Nhập một số nguyên dương</li>
                <li>Kiểm tra xem số đó có phải số nguyên tố không</li>
                <li>In ra kết quả "Là số nguyên tố" hoặc "Không phải số nguyên tố"</li>
            </ul>
        `,
        initialCode: `# Kiểm tra số nguyên tố
so = 17  # Thay đổi số này để thử nghiệm

la_nguyen_to = True

if so < 2:
    la_nguyen_to = False
else:
    for i in range(2, so):
        if so % i == 0:
            la_nguyen_to = False
            break

if la_nguyen_to:
    print(f"{so} là số nguyên tố")
else:
    print(f"{so} không phải số nguyên tố")`,
        solution: `
            <div class="solution">
                <h5><i class="fas fa-lightbulb"></i> Đáp án:</h5>
                <div class="code-example">
                    <code>
so = int(input("Nhập một số: "))

la_nguyen_to = True

# Số nhỏ hơn 2 không phải số nguyên tố
if so < 2:
    la_nguyen_to = False
else:
    # Kiểm tra từ 2 đến so-1
    for i in range(2, so):
        if so % i == 0:  # Nếu chia hết cho i
            la_nguyen_to = False
            break  # Dừng vòng lặp ngay

if la_nguyen_to:
    print(f"{so} là số nguyên tố")
else:
    print(f"{so} không phải số nguyên tố")
                    </code>
                </div>
                <div class="code-explanation">
                    <strong>Giải thích:</strong>
                    <ul>
                        <li>Kiểm tra số nhỏ hơn 2 (không phải số nguyên tố)</li>
                        <li>Dùng vòng lặp kiểm tra từ 2 đến so-1</li>
                        <li>Nếu số chia hết cho bất kỳ số nào → không phải số nguyên tố</li>
                        <li>Dùng <code>break</code> để dừng sớm khi tìm thấy ước số</li>
                    </ul>
                </div>
            </div>
        `
    },
    3: {
        title: "Bài 3: Tìm số lớn nhất",
        description: `
            <h3>📝 Mô tả bài toán</h3>
            <p>Viết chương trình tìm số lớn nhất trong một danh sách các số.</p>
            
            <h3>💡 Ví dụ</h3>
            <ul>
                <li>Danh sách: [5, 2, 8, 1, 9, 3] → Số lớn nhất là 9</li>
                <li>Danh sách: [10, 20, 15, 30, 25] → Số lớn nhất là 30</li>
            </ul>
            
            <h3>🎯 Yêu cầu</h3>
            <ul>
                <li>Tạo một danh sách các số</li>
                <li>Tìm số lớn nhất trong danh sách</li>
                <li>In ra số lớn nhất</li>
            </ul>
        `,
        initialCode: `# Tìm số lớn nhất
danh_sach = [5, 2, 8, 1, 9, 3, 7, 4]

so_lon_nhat = danh_sach[0]  # Giả sử số đầu tiên là lớn nhất

for so in danh_sach:
    if so > so_lon_nhat:
        so_lon_nhat = so

print(f"Danh sách: {danh_sach}")
print(f"Số lớn nhất là: {so_lon_nhat}")`,
        solution: `
            <div class="solution">
                <h5><i class="fas fa-lightbulb"></i> Đáp án:</h5>
                <div class="code-example">
                    <code>
# Cách 1: Dùng vòng lặp
danh_sach = [5, 2, 8, 1, 9, 3]
so_lon_nhat = danh_sach[0]

for so in danh_sach:
    if so > so_lon_nhat:
        so_lon_nhat = so

print(f"Số lớn nhất là: {so_lon_nhat}")

# Cách 2: Dùng hàm max() (đơn giản hơn!)
danh_sach = [5, 2, 8, 1, 9, 3]
so_lon_nhat = max(danh_sach)
print(f"Số lớn nhất là: {so_lon_nhat}")
                    </code>
                </div>
                <div class="code-explanation">
                    <strong>Giải thích:</strong>
                    <ul>
                        <li><strong>Cách 1:</strong> So sánh từng số với số lớn nhất hiện tại</li>
                        <li><strong>Cách 2:</strong> Dùng hàm <code>max()</code> có sẵn trong Python</li>
                        <li>Cả hai cách đều đúng, nhưng cách 2 ngắn gọn hơn!</li>
                    </ul>
                </div>
            </div>
        `
    },
    4: {
        title: "Bài 4: Đảo ngược chuỗi",
        description: `
            <h3>📝 Mô tả bài toán</h3>
            <p>Viết chương trình đảo ngược một chuỗi ký tự.</p>
            
            <h3>💡 Ví dụ</h3>
            <ul>
                <li>"Python" → "nohtyP"</li>
                <li>"Xin chào" → "oàhc niX"</li>
                <li>"12345" → "54321"</li>
            </ul>
            
            <h3>🎯 Yêu cầu</h3>
            <ul>
                <li>Nhập một chuỗi từ bàn phím</li>
                <li>Đảo ngược chuỗi đó</li>
                <li>In ra chuỗi đã đảo ngược</li>
            </ul>
        `,
        initialCode: `# Đảo ngược chuỗi
chuoi = "Python"

chuoi_dao = ""
for i in range(len(chuoi) - 1, -1, -1):
    chuoi_dao = chuoi_dao + chuoi[i]

print(f"Chuỗi gốc: {chuoi}")
print(f"Chuỗi đảo ngược: {chuoi_dao}")`,
        solution: `
            <div class="solution">
                <h5><i class="fas fa-lightbulb"></i> Đáp án:</h5>
                <div class="code-example">
                    <code>
# Cách 1: Dùng vòng lặp
chuoi = input("Nhập chuỗi: ")
chuoi_dao = ""

for i in range(len(chuoi) - 1, -1, -1):
    chuoi_dao = chuoi_dao + chuoi[i]

print(f"Chuỗi đảo ngược: {chuoi_dao}")

# Cách 2: Dùng slice [::-1] (ngắn gọn nhất!)
chuoi = input("Nhập chuỗi: ")
chuoi_dao = chuoi[::-1]
print(f"Chuỗi đảo ngược: {chuoi_dao}")
                    </code>
                </div>
                <div class="code-explanation">
                    <strong>Giải thích:</strong>
                    <ul>
                        <li><strong>Cách 1:</strong> Dùng vòng lặp duyệt từ cuối về đầu</li>
                        <li><strong>Cách 2:</strong> Dùng slice <code>[::-1]</code> - cách Pythonic nhất!</li>
                        <li><code>[::-1]</code> có nghĩa là lấy tất cả ký tự nhưng bước -1 (ngược lại)</li>
                    </ul>
                </div>
            </div>
        `
    },
    5: {
        title: "Bài 5: Tính giai thừa",
        description: `
            <h3>📝 Mô tả bài toán</h3>
            <p>Viết chương trình tính giai thừa của một số nguyên dương n.</p>
            
            <h3>💡 Giai thừa là gì?</h3>
            <p>Giai thừa của n (ký hiệu: n!) = 1 × 2 × 3 × ... × n</p>
            
            <h3>💡 Ví dụ</h3>
            <ul>
                <li>5! = 1 × 2 × 3 × 4 × 5 = 120</li>
                <li>3! = 1 × 2 × 3 = 6</li>
                <li>0! = 1 (quy ước đặc biệt)</li>
            </ul>
            
            <h3>🎯 Yêu cầu</h3>
            <ul>
                <li>Nhập số n từ bàn phím</li>
                <li>Tính n!</li>
                <li>In ra kết quả</li>
            </ul>
        `,
        initialCode: `# Tính giai thừa
n = 5  # Thay đổi số này để thử nghiệm

giai_thua = 1
for i in range(1, n + 1):
    giai_thua = giai_thua * i

print(f"{n}! = {giai_thua}")`,
        solution: `
            <div class="solution">
                <h5><i class="fas fa-lightbulb"></i> Đáp án:</h5>
                <div class="code-example">
                    <code>
# Cách 1: Dùng vòng lặp
n = int(input("Nhập số n: "))

if n == 0:
    giai_thua = 1
else:
    giai_thua = 1
    for i in range(1, n + 1):
        giai_thua = giai_thua * i

print(f"{n}! = {giai_thua}")

# Cách 2: Dùng đệ quy (nâng cao)
def tinh_giai_thua(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n * tinh_giai_thua(n - 1)

n = int(input("Nhập số n: "))
print(f"{n}! = {tinh_giai_thua(n)}")
                    </code>
                </div>
                <div class="code-explanation">
                    <strong>Giải thích:</strong>
                    <ul>
                        <li><strong>Cách 1:</strong> Nhân dồn từ 1 đến n</li>
                        <li><strong>Cách 2:</strong> Dùng đệ quy - hàm gọi chính nó</li>
                        <li>Đệ quy là kỹ thuật nâng cao, bạn sẽ học sau!</li>
                    </ul>
                </div>
            </div>
        `
    },
    6: {
        title: "Bài 6: Kiểm tra số hoàn hảo",
        description: `
            <h3>📝 Mô tả bài toán</h3>
            <p>Viết chương trình kiểm tra xem một số có phải là số hoàn hảo hay không.</p>
            
            <h3>💡 Số hoàn hảo là gì?</h3>
            <p>Số hoàn hảo là số bằng tổng các ước số dương của nó (không tính chính nó).</p>
            
            <h3>💡 Ví dụ</h3>
            <ul>
                <li>Số 6: Các ước số (không tính 6) là 1, 2, 3 → Tổng = 1 + 2 + 3 = 6 ✓</li>
                <li>Số 28: Các ước số là 1, 2, 4, 7, 14 → Tổng = 1 + 2 + 4 + 7 + 14 = 28 ✓</li>
            </ul>
            
            <h3>🎯 Yêu cầu</h3>
            <ul>
                <li>Nhập một số nguyên dương</li>
                <li>Kiểm tra xem số đó có phải số hoàn hảo không</li>
                <li>In ra kết quả</li>
            </ul>
        `,
        initialCode: `# Kiểm tra số hoàn hảo
so = 6  # Thay đổi số này để thử nghiệm

tong_uoc = 0
for i in range(1, so):
    if so % i == 0:
        tong_uoc = tong_uoc + i

if tong_uoc == so:
    print(f"{so} là số hoàn hảo")
else:
    print(f"{so} không phải số hoàn hảo")`,
        solution: `
            <div class="solution">
                <h5><i class="fas fa-lightbulb"></i> Đáp án:</h5>
                <div class="code-example">
                    <code>
so = int(input("Nhập một số: "))

tong_uoc = 0
# Tìm tất cả ước số (không tính chính nó)
for i in range(1, so):
    if so % i == 0:  # Nếu i là ước số
        tong_uoc = tong_uoc + i

# Kiểm tra xem tổng ước số có bằng số ban đầu không
if tong_uoc == so:
    print(f"{so} là số hoàn hảo")
else:
    print(f"{so} không phải số hoàn hảo")
                    </code>
                </div>
                <div class="code-explanation">
                    <strong>Giải thích:</strong>
                    <ul>
                        <li>Tìm tất cả ước số từ 1 đến so-1</li>
                        <li>Cộng dồn các ước số vào biến tong_uoc</li>
                        <li>Nếu tổng bằng số ban đầu → số hoàn hảo</li>
                    </ul>
                </div>
            </div>
        `
    },
    7: {
        title: "Bài 7: Tìm ước chung lớn nhất",
        description: `
            <h3>📝 Mô tả bài toán</h3>
            <p>Viết chương trình tìm ước chung lớn nhất (UCLN) của hai số nguyên dương.</p>
            
            <h3>💡 UCLN là gì?</h3>
            <p>UCLN của hai số là số lớn nhất mà cả hai số đều chia hết.</p>
            
            <h3>💡 Ví dụ</h3>
            <ul>
                <li>UCLN(12, 18) = 6 (vì 12 và 18 đều chia hết cho 6)</li>
                <li>UCLN(15, 25) = 5</li>
                <li>UCLN(7, 13) = 1 (hai số nguyên tố cùng nhau)</li>
            </ul>
            
            <h3>🎯 Yêu cầu</h3>
            <ul>
                <li>Nhập hai số nguyên dương</li>
                <li>Tìm UCLN của hai số đó</li>
                <li>In ra kết quả</li>
            </ul>
        `,
        initialCode: `# Tìm UCLN (dùng thuật toán Euclid)
a = 48
b = 18

# Lưu giá trị gốc
a_goc = a
b_goc = b

# Thuật toán Euclid
while b != 0:
    temp = a % b
    a = b
    b = temp

ucln = a
print(f"UCLN({a_goc}, {b_goc}) = {ucln}")`,
        solution: `
            <div class="solution">
                <h5><i class="fas fa-lightbulb"></i> Đáp án:</h5>
                <div class="code-example">
                    <code>
# Cách 1: Dùng thuật toán Euclid (nhanh nhất!)
a = int(input("Nhập số thứ nhất: "))
b = int(input("Nhập số thứ hai: "))

a_goc = a
b_goc = b

while b != 0:
    temp = a % b
    a = b
    b = temp

ucln = a
print(f"UCLN({a_goc}, {b_goc}) = {ucln}")

# Cách 2: Dùng vòng lặp (dễ hiểu hơn)
a = int(input("Nhập số thứ nhất: "))
b = int(input("Nhập số thứ hai: "))

ucln = 1
for i in range(1, min(a, b) + 1):
    if a % i == 0 and b % i == 0:
        ucln = i

print(f"UCLN({a}, {b}) = {ucln}")
                    </code>
                </div>
                <div class="code-explanation">
                    <strong>Giải thích:</strong>
                    <ul>
                        <li><strong>Cách 1 (Euclid):</strong> Dùng phép chia dư, nhanh và hiệu quả</li>
                        <li><strong>Cách 2:</strong> Kiểm tra từng số từ 1 đến min(a,b), dễ hiểu hơn</li>
                        <li>Thuật toán Euclid là cách tốt nhất để tìm UCLN!</li>
                    </ul>
                </div>
            </div>
        `
    },
    8: {
        title: "Bài 8: In tam giác số",
        description: `
            <h3>📝 Mô tả bài toán</h3>
            <p>Viết chương trình in ra tam giác số theo mẫu.</p>
            
            <h3>💡 Ví dụ</h3>
            <p>Với n = 5, in ra:</p>
            <pre>
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
            </pre>
            
            <h3>🎯 Yêu cầu</h3>
            <ul>
                <li>Nhập số n (số dòng)</li>
                <li>In ra tam giác số như ví dụ</li>
            </ul>
        `,
        initialCode: `# In tam giác số
n = 5  # Thay đổi số này để thử nghiệm

for i in range(1, n + 1):
    for j in range(1, i + 1):
        print(j, end=" ")
    print()  # Xuống dòng`,
        solution: `
            <div class="solution">
                <h5><i class="fas fa-lightbulb"></i> Đáp án:</h5>
                <div class="code-example">
                    <code>
n = int(input("Nhập số dòng: "))

for i in range(1, n + 1):  # Duyệt từng dòng
    for j in range(1, i + 1):  # In số từ 1 đến i
        print(j, end=" ")  # end=" " để không xuống dòng
    print()  # Xuống dòng sau mỗi hàng
                    </code>
                </div>
                <div class="code-explanation">
                    <strong>Giải thích:</strong>
                    <ul>
                        <li>Vòng lặp ngoài: duyệt từng dòng (1 đến n)</li>
                        <li>Vòng lặp trong: in số từ 1 đến số dòng hiện tại</li>
                        <li><code>end=" "</code> để in số trên cùng một dòng, cách nhau bởi khoảng trắng</li>
                        <li><code>print()</code> để xuống dòng sau mỗi hàng</li>
                    </ul>
                </div>
            </div>
        `
    },
    9: {
        title: "Bài 9: Tìm số nhỏ nhất",
        description: `
            <h3>📝 Mô tả bài toán</h3>
            <p>Viết chương trình tìm số nhỏ nhất trong một danh sách các số.</p>
            
            <h3>💡 Ví dụ</h3>
            <ul>
                <li>Danh sách: [5, 2, 8, 1, 9, 3] → Số nhỏ nhất là 1</li>
                <li>Danh sách: [10, 20, 15, 30, 25] → Số nhỏ nhất là 10</li>
            </ul>
            
            <h3>🎯 Yêu cầu</h3>
            <ul>
                <li>Tạo một danh sách các số</li>
                <li>Tìm số nhỏ nhất trong danh sách</li>
                <li>In ra số nhỏ nhất</li>
            </ul>
        `,
        initialCode: `# Tìm số nhỏ nhất
danh_sach = [5, 2, 8, 1, 9, 3, 7, 4]

so_nho_nhat = danh_sach[0]  # Giả sử số đầu tiên là nhỏ nhất

for so in danh_sach:
    if so < so_nho_nhat:
        so_nho_nhat = so

print(f"Danh sách: {danh_sach}")
print(f"Số nhỏ nhất là: {so_nho_nhat}")`,
        solution: `
            <div class="solution">
                <h5><i class="fas fa-lightbulb"></i> Đáp án:</h5>
                <div class="code-example">
                    <code>
# Cách 1: Dùng vòng lặp
danh_sach = [5, 2, 8, 1, 9, 3]
so_nho_nhat = danh_sach[0]

for so in danh_sach:
    if so < so_nho_nhat:
        so_nho_nhat = so

print(f"Số nhỏ nhất là: {so_nho_nhat}")

# Cách 2: Dùng hàm min() (đơn giản hơn!)
danh_sach = [5, 2, 8, 1, 9, 3]
so_nho_nhat = min(danh_sach)
print(f"Số nhỏ nhất là: {so_nho_nhat}")
                    </code>
                </div>
                <div class="code-explanation">
                    <strong>Giải thích:</strong>
                    <ul>
                        <li><strong>Cách 1:</strong> So sánh từng số với số nhỏ nhất hiện tại</li>
                        <li><strong>Cách 2:</strong> Dùng hàm <code>min()</code> có sẵn trong Python</li>
                        <li>Cả hai cách đều đúng, nhưng cách 2 ngắn gọn hơn!</li>
                    </ul>
                </div>
            </div>
        `
    },
    10: {
        title: "Bài 10: Đếm số chẵn và số lẻ",
        description: `
            <h3>📝 Mô tả bài toán</h3>
            <p>Viết chương trình đếm số lượng số chẵn và số lẻ trong một danh sách.</p>
            
            <h3>💡 Ví dụ</h3>
            <ul>
                <li>Danh sách: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]</li>
                <li>Số chẵn: 5 số (2, 4, 6, 8, 10)</li>
                <li>Số lẻ: 5 số (1, 3, 5, 7, 9)</li>
            </ul>
            
            <h3>🎯 Yêu cầu</h3>
            <ul>
                <li>Tạo một danh sách các số</li>
                <li>Đếm số lượng số chẵn</li>
                <li>Đếm số lượng số lẻ</li>
                <li>In ra kết quả</li>
            </ul>
        `,
        initialCode: `# Đếm số chẵn và số lẻ
danh_sach = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

dem_chan = 0
dem_le = 0

for so in danh_sach:
    if so % 2 == 0:  # Số chẵn
        dem_chan = dem_chan + 1
    else:  # Số lẻ
        dem_le = dem_le + 1

print(f"Danh sách: {danh_sach}")
print(f"Số chẵn: {dem_chan} số")
print(f"Số lẻ: {dem_le} số")`,
        solution: `
            <div class="solution">
                <h5><i class="fas fa-lightbulb"></i> Đáp án:</h5>
                <div class="code-example">
                    <code>
danh_sach = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

dem_chan = 0
dem_le = 0

for so in danh_sach:
    if so % 2 == 0:  # Nếu chia hết cho 2 → số chẵn
        dem_chan = dem_chan + 1
    else:  # Không chia hết cho 2 → số lẻ
        dem_le = dem_le + 1

print(f"Số chẵn: {dem_chan} số")
print(f"Số lẻ: {dem_le} số")
                    </code>
                </div>
                <div class="code-explanation">
                    <strong>Giải thích:</strong>
                    <ul>
                        <li>Dùng toán tử <code>%</code> (chia lấy dư) để kiểm tra số chẵn/lẻ</li>
                        <li>Nếu <code>so % 2 == 0</code> → số chẵn</li>
                        <li>Nếu <code>so % 2 != 0</code> → số lẻ</li>
                        <li>Tăng biến đếm tương ứng</li>
                    </ul>
                </div>
            </div>
        `
    },
    11: {
        title: "Bài 11: Kiểm tra số đối xứng",
        description: `
            <h3>📝 Mô tả bài toán</h3>
            <p>Viết chương trình kiểm tra xem một số có phải là số đối xứng (palindrome) hay không.</p>
            
            <h3>💡 Số đối xứng là gì?</h3>
            <p>Số đối xứng là số khi đọc từ trái sang phải hoặc từ phải sang trái đều giống nhau.</p>
            
            <h3>💡 Ví dụ</h3>
            <ul>
                <li>121 → đọc ngược lại vẫn là 121 ✓ (số đối xứng)</li>
                <li>123 → đọc ngược lại là 321 ✗ (không đối xứng)</li>
                <li>1221 → đọc ngược lại vẫn là 1221 ✓ (số đối xứng)</li>
            </ul>
            
            <h3>🎯 Yêu cầu</h3>
            <ul>
                <li>Nhập một số nguyên dương</li>
                <li>Kiểm tra xem số đó có đối xứng không</li>
                <li>In ra kết quả</li>
            </ul>
        `,
        initialCode: `# Kiểm tra số đối xứng
so = 121  # Thay đổi số này để thử nghiệm

# Chuyển số thành chuỗi để dễ so sánh
so_chuoi = str(so)
so_dao = so_chuoi[::-1]  # Đảo ngược chuỗi

if so_chuoi == so_dao:
    print(f"{so} là số đối xứng")
else:
    print(f"{so} không phải số đối xứng")`,
        solution: `
            <div class="solution">
                <h5><i class="fas fa-lightbulb"></i> Đáp án:</h5>
                <div class="code-example">
                    <code>
# Cách 1: Dùng chuỗi (đơn giản)
so = int(input("Nhập một số: "))
so_chuoi = str(so)
so_dao = so_chuoi[::-1]

if so_chuoi == so_dao:
    print(f"{so} là số đối xứng")
else:
    print(f"{so} không phải số đối xứng")

# Cách 2: Dùng toán học (nâng cao)
so = int(input("Nhập một số: "))
so_goc = so
so_dao = 0

while so > 0:
    chu_so = so % 10
    so_dao = so_dao * 10 + chu_so
    so = so // 10

if so_goc == so_dao:
    print(f"{so_goc} là số đối xứng")
else:
    print(f"{so_goc} không phải số đối xứng")
                    </code>
                </div>
                <div class="code-explanation">
                    <strong>Giải thích:</strong>
                    <ul>
                        <li><strong>Cách 1:</strong> Chuyển số thành chuỗi, đảo ngược và so sánh</li>
                        <li><strong>Cách 2:</strong> Dùng toán học để tạo số đảo ngược</li>
                        <li>Cách 1 dễ hiểu hơn, cách 2 hiệu quả hơn với số lớn</li>
                    </ul>
                </div>
            </div>
        `
    },
    12: {
        title: "Bài 12: Tính trung bình cộng",
        description: `
            <h3>📝 Mô tả bài toán</h3>
            <p>Viết chương trình tính trung bình cộng của một danh sách các số.</p>
            
            <h3>💡 Công thức</h3>
            <p>Trung bình cộng = Tổng các số / Số lượng các số</p>
            
            <h3>💡 Ví dụ</h3>
            <ul>
                <li>Danh sách: [10, 20, 30, 40, 50]</li>
                <li>Tổng = 10 + 20 + 30 + 40 + 50 = 150</li>
                <li>Số lượng = 5</li>
                <li>Trung bình cộng = 150 / 5 = 30</li>
            </ul>
            
            <h3>🎯 Yêu cầu</h3>
            <ul>
                <li>Tạo một danh sách các số</li>
                <li>Tính tổng các số</li>
                <li>Đếm số lượng các số</li>
                <li>Tính và in ra trung bình cộng</li>
            </ul>
        `,
        initialCode: `# Tính trung bình cộng
danh_sach = [10, 20, 30, 40, 50]

tong = 0
so_luong = 0

for so in danh_sach:
    tong = tong + so
    so_luong = so_luong + 1

trung_binh = tong / so_luong

print(f"Danh sách: {danh_sach}")
print(f"Tổng: {tong}")
print(f"Số lượng: {so_luong}")
print(f"Trung bình cộng: {trung_binh}")`,
        solution: `
            <div class="solution">
                <h5><i class="fas fa-lightbulb"></i> Đáp án:</h5>
                <div class="code-example">
                    <code>
# Cách 1: Dùng vòng lặp
danh_sach = [10, 20, 30, 40, 50]

tong = 0
so_luong = 0

for so in danh_sach:
    tong = tong + so
    so_luong = so_luong + 1

trung_binh = tong / so_luong
print(f"Trung bình cộng: {trung_binh}")

# Cách 2: Dùng hàm có sẵn (ngắn gọn!)
danh_sach = [10, 20, 30, 40, 50]
trung_binh = sum(danh_sach) / len(danh_sach)
print(f"Trung bình cộng: {trung_binh}")
                    </code>
                </div>
                <div class="code-explanation">
                    <strong>Giải thích:</strong>
                    <ul>
                        <li><strong>Cách 1:</strong> Dùng vòng lặp để tính tổng và đếm số lượng</li>
                        <li><strong>Cách 2:</strong> Dùng <code>sum()</code> để tính tổng và <code>len()</code> để đếm</li>
                        <li>Cả hai cách đều đúng, cách 2 ngắn gọn và dễ đọc hơn!</li>
                    </ul>
                </div>
            </div>
        `
    },
    13: {
        title: "Bài 13: Tìm số Fibonacci",
        description: `
            <h3>📝 Mô tả bài toán</h3>
            <p>Viết chương trình tìm số Fibonacci thứ n trong dãy Fibonacci.</p>
            
            <h3>💡 Dãy Fibonacci là gì?</h3>
            <p>Dãy Fibonacci bắt đầu từ 0 và 1, mỗi số tiếp theo bằng tổng của hai số trước đó.</p>
            <p>Dãy: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...</p>
            
            <h3>💡 Ví dụ</h3>
            <ul>
                <li>F(0) = 0</li>
                <li>F(1) = 1</li>
                <li>F(2) = 1 (0 + 1)</li>
                <li>F(3) = 2 (1 + 1)</li>
                <li>F(4) = 3 (1 + 2)</li>
                <li>F(5) = 5 (2 + 3)</li>
            </ul>
            
            <h3>🎯 Yêu cầu</h3>
            <ul>
                <li>Nhập số n (vị trí trong dãy)</li>
                <li>Tính số Fibonacci thứ n</li>
                <li>In ra kết quả</li>
            </ul>
        `,
        initialCode: `# Tìm số Fibonacci thứ n
n = 10  # Thay đổi số này để thử nghiệm

if n == 0:
    fib = 0
elif n == 1:
    fib = 1
else:
    a = 0  # F(0)
    b = 1  # F(1)
    
    for i in range(2, n + 1):
        fib = a + b
        a = b
        b = fib

print(f"Số Fibonacci thứ {n} là: {fib}")`,
        solution: `
            <div class="solution">
                <h5><i class="fas fa-lightbulb"></i> Đáp án:</h5>
                <div class="code-example">
                    <code>
n = int(input("Nhập vị trí n: "))

if n == 0:
    fib = 0
elif n == 1:
    fib = 1
else:
    a = 0  # Số Fibonacci thứ 0
    b = 1  # Số Fibonacci thứ 1
    
    for i in range(2, n + 1):
        fib = a + b  # Tính số tiếp theo
        a = b        # Cập nhật a
        b = fib      # Cập nhật b

print(f"Số Fibonacci thứ {n} là: {fib}")
                    </code>
                </div>
                <div class="code-explanation">
                    <strong>Giải thích:</strong>
                    <ul>
                        <li>F(0) = 0 và F(1) = 1 là hai số đầu tiên</li>
                        <li>Từ F(2) trở đi, mỗi số = tổng của hai số trước</li>
                        <li>Dùng hai biến a và b để lưu hai số trước đó</li>
                        <li>Cập nhật a và b sau mỗi lần tính</li>
                    </ul>
                </div>
            </div>
        `
    },
    14: {
        title: "Bài 14: Kiểm tra năm nhuận",
        description: `
            <h3>📝 Mô tả bài toán</h3>
            <p>Viết chương trình kiểm tra xem một năm có phải là năm nhuận hay không.</p>
            
            <h3>💡 Năm nhuận là gì?</h3>
            <p>Năm nhuận là năm có 366 ngày (thêm 1 ngày vào tháng 2).</p>
            
            <h3>💡 Quy tắc</h3>
            <ul>
                <li>Năm chia hết cho 4 → Năm nhuận</li>
                <li>Nhưng nếu chia hết cho 100 → Không phải năm nhuận</li>
                <li>Trừ khi chia hết cho 400 → Vẫn là năm nhuận</li>
            </ul>
            
            <h3>💡 Ví dụ</h3>
            <ul>
                <li>2024: Chia hết cho 4 → Năm nhuận ✓</li>
                <li>2023: Không chia hết cho 4 → Không phải năm nhuận ✗</li>
                <li>2000: Chia hết cho 400 → Năm nhuận ✓</li>
                <li>1900: Chia hết cho 100 nhưng không chia hết cho 400 → Không phải năm nhuận ✗</li>
            </ul>
            
            <h3>🎯 Yêu cầu</h3>
            <ul>
                <li>Nhập một năm</li>
                <li>Kiểm tra xem năm đó có phải năm nhuận không</li>
                <li>In ra kết quả</li>
            </ul>
        `,
        initialCode: `# Kiểm tra năm nhuận
nam = 2024  # Thay đổi số này để thử nghiệm

la_nam_nhuan = False

if nam % 400 == 0:
    la_nam_nhuan = True
elif nam % 100 == 0:
    la_nam_nhuan = False
elif nam % 4 == 0:
    la_nam_nhuan = True

if la_nam_nhuan:
    print(f"{nam} là năm nhuận")
else:
    print(f"{nam} không phải năm nhuận")`,
        solution: `
            <div class="solution">
                <h5><i class="fas fa-lightbulb"></i> Đáp án:</h5>
                <div class="code-example">
                    <code>
nam = int(input("Nhập một năm: "))

la_nam_nhuan = False

# Kiểm tra theo thứ tự: 400 → 100 → 4
if nam % 400 == 0:
    la_nam_nhuan = True
elif nam % 100 == 0:
    la_nam_nhuan = False
elif nam % 4 == 0:
    la_nam_nhuan = True

if la_nam_nhuan:
    print(f"{nam} là năm nhuận")
else:
    print(f"{nam} không phải năm nhuận")
                    </code>
                </div>
                <div class="code-explanation">
                    <strong>Giải thích:</strong>
                    <ul>
                        <li>Kiểm tra chia hết cho 400 trước (năm nhuận đặc biệt)</li>
                        <li>Nếu chia hết cho 100 nhưng không chia hết cho 400 → không phải năm nhuận</li>
                        <li>Nếu chia hết cho 4 → năm nhuận</li>
                        <li>Thứ tự kiểm tra rất quan trọng!</li>
                    </ul>
                </div>
            </div>
        `
    },
    15: {
        title: "Bài 15: Đếm số từ trong chuỗi",
        description: `
            <h3>📝 Mô tả bài toán</h3>
            <p>Viết chương trình đếm số lượng từ trong một chuỗi văn bản.</p>
            
            <h3>💡 Ví dụ</h3>
            <ul>
                <li>Chuỗi: "Python là ngôn ngữ lập trình" → 5 từ</li>
                <li>Chuỗi: "Học Python vui vẻ" → 3 từ</li>
                <li>Chuỗi: "Xin chào các bạn!" → 4 từ</li>
            </ul>
            
            <h3>🎯 Yêu cầu</h3>
            <ul>
                <li>Nhập một chuỗi văn bản</li>
                <li>Đếm số lượng từ trong chuỗi</li>
                <li>In ra kết quả</li>
            </ul>
            <p><strong>Lưu ý:</strong> Từ được phân cách bởi khoảng trắng</p>
        `,
        initialCode: `# Đếm số từ trong chuỗi
chuoi = "Python là ngôn ngữ lập trình"

# Tách chuỗi thành danh sách các từ
danh_sach_tu = chuoi.split()

so_tu = len(danh_sach_tu)

print(f"Chuỗi: '{chuoi}'")
print(f"Số từ: {so_tu}")`,
        solution: `
            <div class="solution">
                <h5><i class="fas fa-lightbulb"></i> Đáp án:</h5>
                <div class="code-example">
                    <code>
# Cách 1: Dùng hàm split() (đơn giản nhất!)
chuoi = input("Nhập chuỗi: ")
danh_sach_tu = chuoi.split()  # Tách thành danh sách các từ
so_tu = len(danh_sach_tu)
print(f"Số từ: {so_tu}")

# Cách 2: Dùng vòng lặp đếm khoảng trắng
chuoi = input("Nhập chuỗi: ")
chuoi = chuoi.strip()  # Bỏ khoảng trắng đầu cuối

if len(chuoi) == 0:
    so_tu = 0
else:
    so_tu = 1  # Ít nhất có 1 từ
    for ky_tu in chuoi:
        if ky_tu == ' ':  # Gặp khoảng trắng
            so_tu = so_tu + 1

print(f"Số từ: {so_tu}")
                    </code>
                </div>
                <div class="code-explanation">
                    <strong>Giải thích:</strong>
                    <ul>
                        <li><strong>Cách 1:</strong> Dùng <code>split()</code> để tách chuỗi thành danh sách từ</li>
                        <li><strong>Cách 2:</strong> Đếm số khoảng trắng + 1 (vì số từ = số khoảng trắng + 1)</li>
                        <li>Cách 1 đơn giản và dễ hiểu hơn!</li>
                        <li><code>split()</code> tự động bỏ khoảng trắng thừa</li>
                    </ul>
                </div>
            </div>
        `
    }
};

// Load bài toán
function loadProblem(problemId) {
    const problem = problems[problemId];
    if (!problem) return;
    
    // Cập nhật active state trong sidebar - tìm link theo data attribute hoặc href
    const allLinks = document.querySelectorAll('.sidebar-menu a');
    
    // Remove active từ tất cả links trước
    allLinks.forEach(l => l.classList.remove('active'));
    
    let foundMatch = false;
    allLinks.forEach((link) => {
        const dataProblemId = link.getAttribute('data-problem-id');
        const href = link.getAttribute('href');
        
        // Kiểm tra data attribute hoặc href - đảm bảo so sánh đúng kiểu dữ liệu
        const dataMatch = dataProblemId && (parseInt(dataProblemId) === parseInt(problemId) || dataProblemId === String(problemId));
        const hrefMatch = href === `#problem${problemId}`;
        
        if (dataMatch || hrefMatch) {
            // Add active cho link này
            link.classList.add('active');
            foundMatch = true;
        }
    });
    
    // Double check sau một chút và đảm bảo active được giữ
    if (foundMatch) {
        setTimeout(() => {
            const activeLinks = document.querySelectorAll('.sidebar-menu a.active');
            if (activeLinks.length === 0) {
                // Tìm lại và set active
                allLinks.forEach(link => {
                    const dataProblemId = link.getAttribute('data-problem-id');
                    const href = link.getAttribute('href');
                    const dataMatch = dataProblemId && (parseInt(dataProblemId) === parseInt(problemId) || dataProblemId === String(problemId));
                    const hrefMatch = href === `#problem${problemId}`;
                    
                    if (dataMatch || hrefMatch) {
                        link.classList.add('active');
                    }
                });
            }
        }, 200);
    }
    
    // Tạo nội dung bài toán
    const problemContent = `
        <div class="chapter" id="problem${problemId}">
            <div class="chapter-header">
                <div class="chapter-icon">🧮</div>
                <h2 class="chapter-title">${problem.title}</h2>
            </div>
            
            <div class="chapter-intro">
                ${problem.description}
            </div>
            
            <div class="python-runner-container">
                <div id="python-runner-problem-${problemId}"></div>
            </div>
            
            <div id="solution-${problemId}" style="display: none;">
                ${problem.solution}
            </div>
            
            <div style="text-align: center; margin: 2rem 0;">
                <button class="btn btn-primary" onclick="toggleSolution(${problemId})" id="solution-btn-${problemId}">
                    <i class="fas fa-eye"></i> Hiển thị đáp án
                </button>
            </div>
        </div>
    `;
    
    document.getElementById('problem-content').innerHTML = problemContent;
    
    // Đảm bảo active state được giữ sau khi load content
    setTimeout(() => {
        // Re-apply active state sau khi DOM được update
        const targetLink = Array.from(allLinks).find(link => {
            const dataProblemId = link.getAttribute('data-problem-id');
            const href = link.getAttribute('href');
            const dataMatch = dataProblemId && (parseInt(dataProblemId) === parseInt(problemId) || dataProblemId === String(problemId));
            const hrefMatch = href === `#problem${problemId}`;
            return dataMatch || hrefMatch;
        });
        
        if (targetLink) {
            allLinks.forEach(l => l.classList.remove('active'));
            targetLink.classList.add('active');
        }
        
        // Auto-scroll đến phần được load
        const chapter = document.getElementById(`problem${problemId}`);
        if (chapter) {
            chapter.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, 50);
    
    // Khởi tạo Python runner
    setTimeout(() => {
        if (typeof createPythonRunner !== 'undefined') {
            const runnerContainer = document.getElementById(`python-runner-problem-${problemId}`);
            if (runnerContainer) {
                runnerContainer.innerHTML = createPythonRunner(problem.initialCode, `python-runner-problem-${problemId}`);
            }
        } else {
            setTimeout(() => {
                const runnerContainer = document.getElementById(`python-runner-problem-${problemId}`);
                if (runnerContainer && typeof createPythonRunner !== 'undefined') {
                    runnerContainer.innerHTML = createPythonRunner(problem.initialCode, `python-runner-problem-${problemId}`);
                }
            }, 500);
        }
    }, 100);
}

// Toggle hiển thị đáp án
function toggleSolution(problemId) {
    const solutionDiv = document.getElementById(`solution-${problemId}`);
    const btn = document.getElementById(`solution-btn-${problemId}`);
    
    if (solutionDiv.style.display === 'none') {
        solutionDiv.style.display = 'block';
        btn.innerHTML = '<i class="fas fa-eye-slash"></i> Ẩn đáp án';
        btn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } else {
        solutionDiv.style.display = 'none';
        btn.innerHTML = '<i class="fas fa-eye"></i> Hiển thị đáp án';
    }
}


// Thêm event listener cho tất cả sidebar links khi DOM ready
document.addEventListener('DOMContentLoaded', function() {
    // Attach event listeners cho algorithms links
    const links = document.querySelectorAll('.sidebar-menu a[data-problem-id]');
    
    links.forEach((link) => {
        link.addEventListener('click', function(e) {
            const clickedProblemId = this.getAttribute('data-problem-id');
            
            if (clickedProblemId) {
                // Update active state ngay lập tức - trước khi loadProblem chạy
                const allLinks = document.querySelectorAll('.sidebar-menu a');
                allLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            }
        }, true); // Use capture phase để chạy trước onclick handler
    });
    
    // Load bài toán đầu tiên khi trang load
    loadProblem(1);
});

