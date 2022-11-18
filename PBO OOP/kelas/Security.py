class Security(User):
	___security_id = None
	___user_id = None
	___unnamed_Data_Harian_ = None

	def checkCCTV(self):
		pass

	def checkDailyData(self):
		pass

	# @ParamType aSecurity_id int
	def setSecurity_id(self, aSecurity_id):
		self.___security_id = aSecurity_id

	# @ReturnType int
	def getSecurity_id(self):
		return self.___security_id
