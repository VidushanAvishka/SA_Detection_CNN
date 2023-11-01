import React, { useState } from "react";
import axios from "axios";
import './test.css';


function Test() {
   const [selectedFile, setSelectedFile] = useState(null);



  
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const uploadFile = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);

      // Send a POST request to your FastAPI backend for file upload
      axios.post("http://localhost:8000/upload-file/", formData)
  .then((response) => {
    // Handle the response (e.g., display the received message)
    console.log("Received response message: " + response.file);
  })
  .catch((error) => {
    // Handle any errors that occurred during the request
    console.error("Error: " + error);
  });
    }
  };

  return (
    <div>
      <h1>Apneac Application</h1>
      
      <div className="file-upload">
        <input type="file" accept=".edf" onChange={handleFileChange} />
        <button onClick={uploadFile}>Upload .edf File</button>
      </div>
    </div>
  );
}

export default Test;
