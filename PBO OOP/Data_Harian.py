class Data_Harian(object):
	# @AttributeType int
	___verified_id = None
	# @AttributeType int
	___user_id = None
	# @AttributeType string
	___waktu = None
	# @AssociationType Security
	___unnamed_Security_ = None
	# @AssociationType Statistik_Periodik
	___unnamed_Statistik_Periodik_ = None
	# @AssociationType Alat_Verifikasi
	___unnamed_Alat_Verifikasi_ = None

	def inputDailyData(self):
		pass

	# @ParamType aWaktu string
	def setWaktu(self, aWaktu):
		self.___waktu = aWaktu

	# @ReturnType string
	def getWaktu(self):
		return self.___waktu
