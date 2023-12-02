import React, { useState } from "react";
import axios from "axios";
import './test.css';

function Test() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [resultText, setResultText] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const uploadFile = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);

      // Send a POST request to your FastAPI backend for file upload
      axios.post("http://localhost:8000/upload-edf/", formData)
        .then((response) => {
          // Handle the response (e.g., display the received message)
          const message = response.data.message;
          setResultText(message === 1 ? 'You have apneac disorder' : 'You do not have apneac');
          console.log("Received response message: " + message);
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
        <button onClick={uploadFile}>Analyze</button>
      </div>

      {/* Display the result in a text box */}
      <div>
        <label>Your Result:</label>
        <input type="text" value={resultText} readOnly />
      </div>
    </div>
  );
}

export default Test;
