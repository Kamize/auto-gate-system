class Alat_Verifikasi(object):
	# @AttributeType int
	___verified_id = None
	# @AttributeType int
	___user_id = None
	# @AssociationType Data_Harian
	___unnamed_Data_Harian_ = None
	# @AssociationType User
	___unnamed_User_ = None

	def verifyVisitorMasker(self):
		pass

	def openGate(self):
		pass

	def alarmWarning(self):
		pass

	# @ParamType aVerified_id int
	def setVerified_id(self, aVerified_id):
		self.___verified_id = aVerified_id

	# @ReturnType int
	def getVerified_id(self):
		return self.___verified_id
