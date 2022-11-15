from database import Base
from sqlalchemy import Column, Integer, String, CHAR, DateTime, Boolean, ForeignKey

from sqlalchemy.orm import relationship


class Users(Base):
    __tablename__="users"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    namadepan = Column(String(30))
    namabelakang = Column(String(30))
    birthdate = Column(String(10), nullable=True)
    gender = Column(Boolean)
    nomor_telepon = Column(String(20))
    email = Column(String(40), unique=True)
    username = Column(String(40))
    password = Column(String(40))

    verified = relationship("AlatVerified", back_populates="pengunjung")

class AlatVerified(Base):
    __tablename__="alatverified"

    scan_id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('users.id'))
    login_at = Column(DateTime)
    masker = Column(Boolean)

    pengunjung = relationship("Users", back_populates="verified")