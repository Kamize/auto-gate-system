from asyncio.windows_events import NULL
from multiprocessing import connection
from sqlite3 import connect
import mysql.connector
from mysql.connector import Error
import datetime
from datetime import date

from database.database import execute_querry, create_db_connection, getRole, getUserID, connection
from database.secret import pw, db

class DataHarian():

	def get_allData():

		cursor = connection.cursor()
		cursor.execute("SELECT dataharian.dataharian_id, user.nama_depan, user.nama_belakang, user.email, dataharian.input_at FROM user INNER JOIN dataharian ON user.user_id = dataharian.user_id")
		
		myresult = cursor.fetchall()
		for result in myresult:
			print(result)
		
	def get_allDataByDate(tanggal):

		cursor = connection.cursor()
		cursor.execute("SELECT dataharian.dataharian_id, user.nama_depan, user.nama_belakang, user.email, dataharian.input_at FROM user INNER JOIN dataharian ON user.user_id = dataharian.user_id WHERE input_at = '%s'" %tanggal)
		
		myresult = cursor.fetchall()
		for result in myresult:
			print(result)

	def get_allJumlahVisitorByDate(tanggal):

		cursor = connection.cursor()
		cursor.execute("SELECT COUNT(dataharian.dataharian_id) as 'Jumlah Pengunjung' FROM dataharian WHERE input_at = '%s' " %tanggal)
		
		myresult = cursor.fetchone()
		for result in myresult:
			print("JUMLAH PENGUNJUNG PADA TANGGAL", tanggal, "ADALAH", result)

	
