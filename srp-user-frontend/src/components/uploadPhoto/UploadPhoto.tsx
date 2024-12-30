import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { testSmth } from "../../api/api.ts";
import { AppDispatch } from "../../store/store.ts";

const UploadPhoto = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [file, setFile] = useState<File | null>(null);

  console.log(file);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  }

  const { getAccessTokenSilently } = useAuth0();

  const upload = () => {
    console.log("Hello there !");
    dispatch(testSmth({ accessToken: getAccessTokenSilently, photo: file }));
  };

  return (
    <div className="App">
      <h2>Add Image:</h2>
      <input type="file" onChange={handleChange} />
      <button onClick={upload}>Hey</button>
    </div>
  );
};

export default UploadPhoto;
