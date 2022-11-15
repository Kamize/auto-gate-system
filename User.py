class User(object):
	# @AttributeType int
	___user_id = None
	# @AttributeType string
	___nama_depan = None
	# @AttributeType string
	___nama_belakang = None
	# @AttributeType string
	___birthdate = None
	# @AttributeType boolean
	___gender = None
	# @AttributeType string
	___nomor_telepon = None
	# @AttributeType string
	___email = None
	# @AttributeType string
	___password = None
	# @AttributeType string
	___username = None
	# @AssociationType Alat_Verifikasi
	___unnamed_Alat_Verifikasi_ = None

	def userLogin(self):
		pass

	def inputUserBio(self):
		pass

	def updateUserBio(self):
		pass

	# @ParamType aUser_id int
	def setUser_id(self, aUser_id):
		self.___user_id = aUser_id

	# @ReturnType int
	def getUser_id(self):
		return self.___user_id

	# @ParamType aNama_depan string
	def setNama_depan(self, aNama_depan):
		self.___nama_depan = aNama_depan

	# @ReturnType string
	def getNama_depan(self):
		return self.___nama_depan

	# @ParamType aNama_belakang string
	def setNama_belakang(self, aNama_belakang):
		self.___nama_belakang = aNama_belakang

	# @ReturnType string
	def getNama_belakang(self):
		return self.___nama_belakang

	# @ParamType aBirthdate string
	def setBirthdate(self, aBirthdate):
		self.___birthdate = aBirthdate

	# @ReturnType string
	def getBirthdate(self):
		return self.___birthdate

	# @ParamType aGender boolean
	def setGender(self, aGender):
		self.___gender = aGender

	# @ReturnType boolean
	def isGender(self):
		return self.___gender

	# @ParamType aNomor_telepon string
	def setNomor_telepon(self, aNomor_telepon):
		self.___nomor_telepon = aNomor_telepon

	# @ReturnType string
	def getNomor_telepon(self):
		return self.___nomor_telepon

	# @ParamType aEmail string
	def setEmail(self, aEmail):
		self.___email = aEmail

	# @ReturnType string
	def getEmail(self):
		return self.___email

	# @ParamType aPassword string
	def setPassword(self, aPassword):
		self.___password = aPassword

	# @ReturnType string
	def getPassword(self):
		return self.___password

	# @ParamType aUsername string
	def setUsername(self, aUsername):
		self.___username = aUsername

	# @ReturnType string
	def getUsername(self):
		return self.___username
