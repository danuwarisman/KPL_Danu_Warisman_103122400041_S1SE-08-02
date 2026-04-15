from dotenv import load_dotenv
import os

# baca envir aktif, default ke "local"
env = os.getenv("APP_ENV", "local")

# load file .env sesuai envir
load_dotenv(f".env.{env}")

# baca konfig
APP_NAME     = os.getenv("APP_NAME")
DEBUG        = os.getenv("DEBUG")
BASE_URL     = os.getenv("BASE_URL")
DATABASE_URL = os.getenv("DATABASE_URL")

print(f"Environment  : {env}")
print(f"APP_NAME     : {APP_NAME}")
print(f"DEBUG        : {DEBUG}")
print(f"BASE_URL     : {BASE_URL}")
print(f"DATABASE_URL : {DATABASE_URL}")


# local
# python app.py

# development
# APP_ENV=development python app.py

# staging
# APP_ENV=staging python app.py

# production
# APP_ENV=production python app.py