import React from "react";
import RetrieveFirestore from "../hooks/RetrieveFirestore";
import { motion } from 'framer-motion';

function ImgGrid({user, setSelectedImg}) {
  const images = RetrieveFirestore(user)
  return (
    <div className="img-grid">
      {images && images.map(image =>(
        <motion.div className="img-wrap" key={image.id} 
          layout
          whileHover={{ opacity: 1 }}
          onClick={() => setSelectedImg(image.data.url)}
        >
          <motion.img src={image.data.url} alt={image.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          />
        </motion.div>
      ))}
    </div>
  )
}

export default ImgGrid;
