import React, { useContext, useState } from "react";
import { UserContext } from "../providers/UserProvider";
import Nav from "./gallery/Nav";
import Upload from "./gallery/Upload";
import ImgGrid from "./gallery/ImgGrid";
import Modal from './gallery/Modal';

function Home() {
  const user = useContext(UserContext);
  const [selectImg, setSelectImg] = useState("")
  return (
    <div>
      <Nav user={user} />
      <Upload />
      <ImgGrid user={user} setSelectedImg={setSelectImg}></ImgGrid>
      { selectImg && (
        <Modal selectedImg={selectImg} setSelectedImg={setSelectImg} />
      )}
    </div>
  );
}

export default Home;
