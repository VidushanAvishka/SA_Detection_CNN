from fastapi import FastAPI, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from pathlib import Path
from helper import get_prediction 
import subprocess
import shutil

import mne

app = FastAPI()

# CORS configuration to allow requests from your React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000","http://localhost:3001"],  # Add your React frontend URL here
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"],  # Add the HTTP methods you intend to use
    allow_headers=["*"],
)

@app.post("/upload-edf/")
async def upload_edf(file: UploadFile):
    temp_folder = Path("temp_folder")
    temp_folder.mkdir(parents=True, exist_ok=True)
    file_path = temp_folder / file.filename
    with file_path.open("wb") as buffer:
        buffer.write(file.file.read())

    try:
        # Load the .edf file using MNE-Python
        
        output = get_prediction(file_path)
        

        # Perform further processing or analysis as needed
        # For example, you can access the EEG data using raw.get_data()

        # You can print some information about the loaded data
        print("Output", output)
        shutil.rmtree(temp_folder)
        # Return success message or any relevant information to React
        return {"message": output}
    
         
    except Exception as e:
        # Handle errors appropriately
        error_message = f"Error processing .edf file: {str(e)}"
        print("Error:", error_message)
        shutil.rmtree(temp_folder)
        return {"error": error_message}



