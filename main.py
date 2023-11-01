from fastapi import FastAPI, UploadFile, File
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from pathlib import Path
import subprocess

app = FastAPI()

# CORS configuration to allow requests from your React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Add your React frontend URL here
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"],  # Add the HTTP methods you intend to use
    allow_headers=["*"],
)

class Message(BaseModel):
    user: str
    text: str

messages = []

@app.post("/upload-file/")
async def upload_file(file: UploadFile):
    temp_folder = Path("temp_folder")
    temp_folder.mkdir(parents=True, exist_ok=True)
    file_path = temp_folder / file.filename
    with file_path.open("wb") as buffer:
        buffer.write(file.file.read())
    try:
        result = subprocess.check_output(
            ['python', 'helper.py'],
            text=True, stderr=subprocess.STDOUT
        )
        print("Output from helper.py:", result)  # Print the output in the console
        # Return the result to React
        return {"file": result}
    except subprocess.CalledProcessError as e:
        error_message = f"Script failed with error: {e.returncode}\n{e.output.strip()}"
        print("Error from helper.py:", error_message)  # Print the error message in the console
        return {"file": error_message}



