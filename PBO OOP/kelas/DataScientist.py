class DataScientist(User):
	# @AttributeType int
	___dataScientist_ID = None
	# @AttributeType int
	___user_id = None
	# @AssociationType Statistik_Periodik
	___unnamed_Statistik_Periodik_ = None

	def checkStatistic(self):
		pass

	# @ParamType aDataScientist_ID int
	def setDataScientist_ID(self, aDataScientist_ID):
		self.___dataScientist_ID = aDataScientist_ID

	# @ReturnType int
	def getDataScientist_ID(self):
		return self.___dataScientist_ID
