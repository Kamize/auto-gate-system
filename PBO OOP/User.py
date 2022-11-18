from asyncio.windows_events import NULL
from multiprocessing import connection
from sqlite3 import connect
import mysql.connector
from mysql.connector import Error


from database.database import execute_querry, create_db_connection
from database.secret import pw, db

class User():
	
	create_user_table = """
	CREATE TABLE user(
	user_id int primary key auto_increment,
	nama_depan varchar(30) not null,
	nama_belakang varchar(30) not null,
	birth_date date,
	gender boolean not null,
	nomor_telepon int not null,
	email varchar(50) not null,
	username varchar(50) not null,
	password varchar(50) not null
	)
	"""
	
	def __init__(self, namadepan, namabelakang, birthdate, gender, nomortelepon, email, username, password):
		self.__namadepan = namadepan
		self.__namabelakang = namabelakang
		self.__birthdate = birthdate
		self.__gender = gender
		self.__nomortelepon = nomortelepon
		self.__email = email
		self.__username = username
		self.__password = password

	def input_biodata(namadepan, namabelakang, birthdate, gender, nomortelepon, email, username, password):
		nama_depan = namadepan
		nama_belakang = namabelakang
		birth_date = birthdate
		gender1 = gender
		nomor_telepon = nomortelepon
		emailuser = email
		usernameuser = username
		passworduser = password
		connection = create_db_connection("localhost", "root", pw, db)
		execute_querry(connection, "INSERT INTO user VALUES(null, '%s', '%s', '%s', %r, NULL, %s, '%s', '%s', '%s')" %(nama_depan, nama_belakang, birth_date, gender1, nomor_telepon, emailuser, usernameuser, passworduser))

	def get_namadepan(self):
		return self.__namadepan

	def get_namabelakang(self):
		return self.__namabelakang

	def get_birthdate(self):
		return self.__birthdate

	def get_gender(self):
		return self.__gender

	def get_nomortelepon(self):
		return self.__nomortelepon

	def get_email(self):
		return self.__email

	def get_username(self):
		return self.__username

	def get_password(self):
		return self.__password


	# def userLogin(self):
	# 	pass

	# def inputUserBio(self):
	# 	pass

	# def updateUserBio(self):
	# 	pass

	# # @ParamType aUser_id int
	# def setUser_id(self, aUser_id):
	# 	self.___user_id = aUser_id

	# # @ReturnType int
	# def getUser_id(self):
	# 	return self.___user_id

	# # @ParamType aNama_depan string
	# def setNama_depan(self, aNama_depan):
	# 	self.___nama_depan = aNama_depan

	# # @ReturnType string
	# def getNama_depan(self):
	# 	return self.___nama_depan

	# # @ParamType aNama_belakang string
	# def setNama_belakang(self, aNama_belakang):
	# 	self.___nama_belakang = aNama_belakang

	# # @ReturnType string
	# def getNama_belakang(self):
	# 	return self.___nama_belakang

	# # @ParamType aBirthdate string
	# def setBirthdate(self, aBirthdate):
	# 	self.___birthdate = aBirthdate

	# # @ReturnType string
	# def getBirthdate(self):
	# 	return self.___birthdate

	# # @ParamType aGender boolean
	# def setGender(self, aGender):
	# 	self.___gender = aGender

	# # @ReturnType boolean
	# def isGender(self):
	# 	return self.___gender

	# # @ParamType aNomor_telepon string
	# def setNomor_telepon(self, aNomor_telepon):
	# 	self.___nomor_telepon = aNomor_telepon

	# # @ReturnType string
	# def getNomor_telepon(self):
	# 	return self.___nomor_telepon

	# # @ParamType aEmail string
	# def setEmail(self, aEmail):
	# 	self.___email = aEmail

	# # @ReturnType string
	# def getEmail(self):
	# 	return self.___email

	# # @ParamType aPassword string
	# def setPassword(self, aPassword):
	# 	self.___password = aPassword

	# # @ReturnType string
	# def getPassword(self):
	# 	return self.___password

	# # @ParamType aUsername string
	# def setUsername(self, aUsername):
	# 	self.___username = aUsername

	# # @ReturnType string
	# def getUsername(self):
	# 	return self.___username
