from kelas.User import User

# user1 = User("Fikri", "Maulana", "2002-06-25", True, "08123123123", "fikri2@gmail.com", "fikri123", "fikri123")
# user2 = User.input_biodata("Fikri", "Maulana", "2002-06-25", True, "08123123123", "fikri2345@gmail.com", "fikri123", "fikri123")
# ?\user2 = User.userLogin("fikri@gmail.com", "fikri123")

while True:
    print("1. Registrasi Akun")
    print("2. Login")
    pilihan = int(input("Masukkan pilihan : "))
    if pilihan == 1:
        namadepan = input("Masukkan nama depan anda : ")
        nama_belakang = input("Masukkan nama belakang anda : ")
        birth_date = input("Masukkan tanggal lahir anda : ")
        gender = input("Masukkan jenis kelamin (M=1/F=0) : ")
        nomor_telepon = int(input("Masukkan nomor telefon anda : "))
        email = input("Masukkan email anda : ")
        username = input("Masukkan username anda : ")
        password = input("Masukkan password anda : ")
        User.input_biodata(namadepan, nama_belakang, birth_date, True, nomor_telepon, email, username, password)
    else :
        email = input("Masukkan email anda : ")
        password = input("Masukkan password anda : ")
        User.userLogin(email, password)
