import React, { useState, useContext } from "react";
import { UserContext } from "../../providers/UserProvider";
//import UseFirestore from "../hooks/useFirestore"
import UseStorage from "../hooks/useStorage"
import "./Gallery.css";

function Upload() {
  const user = useContext(UserContext);
  const types = ["image/png", "image/jpeg"];
  const [err, setErr] = useState("");
  const [file, setFile] = useState(null);
  const handleChange = (e) => {
    setFile("")
    let file_ = e.target.files[0];
    if (file_ && types.includes(file_.type)) {
      setFile(file_);
      UseStorage(file_, user)
      setErr(null);
    } else {
      setFile(null);
      setErr("Please select a PNG/JPG image");
    }
  };
  return (
    <form>
      <div className="output">
        {file && <div>{file.name}<br/> wait Please</div>}
        {err && <div className="error">{err}</div>}
      </div>
      <label>
        <input
          className="file_input"
          type="file"
          onChange={(e) => handleChange(e)}
        />
        <span>+</span>
      </label>
    </form>
  );
}

export default Upload;
