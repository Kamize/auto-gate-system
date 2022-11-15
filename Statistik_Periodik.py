class Statistik_Periodik(object):
	# @AttributeType int
	___statistic_id = None
	# @AttributeType int
	___dataHarian_id = None
	# @AssociationType DataScientist
	___unnamed_DataScientist_ = None
	# @AssociationType Data_Harian
	# @AssociationKind Composition
	___unnamed_Data_Harian_ = None

	def showStatisticChart(self):
		pass

	def processData(self):
		pass

	# @ParamType aStatistic_id int
	def setStatistic_id(self, aStatistic_id):
		self.___statistic_id = aStatistic_id

	# @ReturnType int
	def getStatistic_id(self):
		return self.___statistic_id

	# @ParamType aDataHarian_id int
	def setDataHarian_id(self, aDataHarian_id):
		self.___dataHarian_id = aDataHarian_id

	# @ReturnType int
	def getDataHarian_id(self):
		return self.___dataHarian_id
