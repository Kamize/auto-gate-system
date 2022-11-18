from kelas.User import User
from kelas.Alatverified import Alatverified
from kelas.DataHarian import DataHarian

from database.database import connection
import datetime
from datetime import date



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
    hasilrole = User.getRole(connection, email, password)
    for role in hasilrole:
        if role == 'user':
            Alatverified.checkMasker(email, password)
        elif role == 'security':
            while True:
                print("1. Check Data Visitors semua")
                print("2. Check Data Visitors per tanggal")
                print("2. Check Jumlah Visitors per tanggal")
                choose = int(input("Masukkan pilihan : "))
                if choose == 1:
                    DataHarian.get_allData()
                elif choose == 2:
                    tanggal = input("Masukkan tanggal : ")
                    DataHarian.get_allDataByDate(tanggal)
                elif choose == 3:
                    tanggal = input("Masukkan tanggal : ")
                    DataHarian.get_allJumlahVisitorByDate(tanggal)
                else:
                    break
        
