import React, { useEffect, useState } from "react"
import axios from 'axios';
let apiUrl = 'https://stagingb.bittez.io/'
const FileUpload = () => {

    // a local state to store the currently selected file.
    const [selectedFile, setSelectedFile] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData();
        formData.append("selectedFile", selectedFile);
        console.log("selected File",selectedFile );
        try {
            const response = axios({
                method: "post",
                url: `${apiUrl}save-transaction`,
                data: formData,
                headers: { "Content-Type": "multipart/form-data" },
            });
            
        } catch (error) {
            console.log(error)
        }
    }

    const handleFileSelect = (event) => {
        let file = event.target.files[0];
        let reader = new FileReader();
        console.log(file);
        reader.onload = function(e) {
            setSelectedFile(e.target.result);
          };
          reader.readAsDataURL(event.target.files[0]);
 
          if (file != ".png" || file !=".jpg" ) {
               window.alert("File does not support. You must use .png or .jpg ");
               return false;
            }
            if (file.size > 10e6) {
              window.alert("File size should be less than 10 MB.");
              return false;
            }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-xl-8 col-md-8 mx-auto text-left py-5">
                    <form onSubmit={handleSubmit}>
                        <input type="file" onChange={handleFileSelect} />
                        <input type="submit" value="send" />
                    </form>
                </div>
            </div>
        </div>
    )
};

export default FileUpload;