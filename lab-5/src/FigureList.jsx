import React, { useState } from "react";
import BasicFigure from "./BasicFigure";
import "./FigureList.css";

const initialImages = [
  { src: "https://picsum.photos/200/400?random=1", caption: "Image 1" },
  { src: "https://picsum.photos/200/400?random=2", caption: "Image 2" },
  { src: "https://picsum.photos/200/400?random=3", caption: "Image 3" }
];

const FigureList = () => {
  const [images, setImages] = useState(initialImages);

  const addImage = () => {
    const id = Math.floor(Math.random() * 1000);
    const newImage = {
      src: `https://picsum.photos/200/400?random=${id}`,
      caption: `Image ${images.length + 1}`
    };
    setImages([...images, newImage]);
  };

  const removeImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Image Gallery</h2>
      <button onClick={addImage}>Add Image</button>
      <div className="gallery">
        {images.map((img, index) => (
          <BasicFigure
            key={index}
            src={img.src}
            caption={img.caption}
            onRemove={() => removeImage(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FigureList;
