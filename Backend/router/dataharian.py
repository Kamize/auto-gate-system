from fastapi import APIRouter
from database import Base, SessionLocal, engine
from schemas.Tanggal import Tanggal
from sqlalchemy.orm import Session
from fastapi import FastAPI, Depends, Request


router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/dataharian")
async def get_dataharian(db:Session=Depends(get_db)):
    return db.execute("SELECT dataharian.dataharian_id, users.namadepan, users.namabelakang, users.email, dataharian.input_at FROM users INNER JOIN dataharian ON users.id = dataharian.user_id").fetchall()

@router.post("/dataharian/{tanggal}")
async def get_dataharian(tanggal,db:Session=Depends(get_db)):
    return db.execute("SELECT dataharian.dataharian_id, users.namadepan, users.namabelakang, users.email, dataharian.input_at FROM users INNER JOIN dataharian ON users.id = dataharian.user_id WHERE dataharian.input_at = '%s';" %tanggal).fetchall()
    
@router.post("/dataharian/{bulan}/{tahun}")
async def get_dataharian(bulan :int, tahun :int,db:Session=Depends(get_db)):
    return db.execute("SELECT dataharian.dataharian_id, users.namadepan, users.namabelakang, users.email, dataharian.input_at FROM users INNER JOIN dataharian ON users.id = dataharian.user_id WHERE input_at BETWEEN '%d-%d-01' AND '%d-%d-01' ORDER BY dataharian.input_at ASC" %(tahun, bulan, tahun, bulan+1)).fetchall()

@router.post("/dataharian/{tanggal}/jumlah")
async def get_dataharian(tanggal, db:Session=Depends(get_db)):
    return db.execute("SELECT COUNT(user_id) as 'Jumlah' FROM dataharian WHERE input_at = '%s'" %tanggal).fetchall()

@router.post("/dataharian/{bulan}/{tahun}/jumlah")
async def get_dataharian(bulan :int, tahun :int,db:Session=Depends(get_db)):
    return db.execute("SELECT COUNT(dataharian.dataharian_id) as 'Jumlah' FROM users INNER JOIN dataharian ON users.id = dataharian.user_id WHERE input_at BETWEEN '%d-%d-01' AND '%d-%d-01' ORDER BY dataharian.input_at ASC" %(tahun, bulan, tahun, bulan+1)).fetchall()