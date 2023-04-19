import sys, os
import pymysql.cursors
from dotenv import load_dotenv

# Get the path to the directory this file is in
BASEDIR = os.path.abspath(os.path.dirname(__file__))

load_dotenv(os.path.join(BASEDIR, '..', '.env'))

DB_HOSTNAME = os.getenv("DB_HOSTNAME")
DB_USERNAME = os.getenv("DB_USERNAME")
DB_PASSWORD = os.getenv("DB_PASSWORD")
DB_NAME = os.getenv("DB_NAME")
DB_PORT = int(os.getenv("DB_PORT"))
DB_TABLE = os.getenv("DB_TABLE")

print("Connecting to Databse instance")

conn = pymysql.connect(
    host=DB_HOSTNAME,
    user=DB_USERNAME,
    password=DB_PASSWORD,
    db=DB_NAME,
    port=DB_PORT,
    cursorclass=pymysql.cursors.DictCursor,
)

print("Connected to Databse instance")

cursor = conn.cursor()
cursor.execute("SELECT VERSION()")
row = cursor.fetchone()
print("\nServer version:", row["VERSION()"])

print("\nCreating table for photos.")
cursor.execute(
    f"""CREATE TABLE `{DB_TABLE}` ( \
        `PhotoID` int NOT NULL AUTO_INCREMENT, \
        `Title` TEXT NOT NULL, \
        `Description` TEXT NOT NULL, \
        `Tags` TEXT NOT NULL, \
        `URL` TEXT NOT NULL, \
        `EXIF` TEXT NOT NULL, \
        `CreationTime` TIMESTAMP DEFAULT CURRENT_TIMESTAMP, \
        PRIMARY KEY (`PhotoID`));"""
)
print("\nTable for photos created.")

cursor.close()
conn.close()
