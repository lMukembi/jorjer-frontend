import React, { useEffect, useState } from "react";
import { BsImages } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
import "../Css/Share.css";

export const UploadImage = ({ onChange }) => {
  const [postImage, setPostImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const onChangeImage = async (e) => {
    setPostImage(e.target.files[0]);
    onChange(e.target.files[0]);
    const formData = new FormData();

    formData.append("postImage", postImage);
  };
  console.log(postImage);

  useEffect(() => {
    if (postImage) {
      setImageUrl(URL.createObjectURL(postImage));
    }
  }, [postImage]);

  return (
    <div>
      <input
        postImage={postImage}
        type="file"
        accept="image/*"
        name="file"
        filename="postImage"
        onChange={onChangeImage}
        id="actual-btn"
        hidden
      />
      <div
        style={{ display: "flex", alignItems: "center", marginRight: "5px" }}
      >
        <p>
          <label
            for="actual-btn"
            style={{
              display: "flex",
              alignItems: "center",
              whiteSpace: "nowrap",
            }}
          >
            <BsImages
              style={{ fontSize: "20px", color: "green", marginRight: "5px" }}
            />
            Add Image
          </label>
        </p>
        <p style={{ left: "8rem", bottom: "1rem" }}>
          {imageUrl && postImage && (
            <>
              <span style={{ display: "flex" }}>
                <img
                  src={imageUrl}
                  alt={postImage.name}
                  height="50px"
                  style={{ marginLeft: "10px", borderRadius: "5px" }}
                />

                <small>
                  <AiFillCloseCircle
                    onClick={() => setPostImage(!postImage)}
                    style={{ color: "rgb(55, 136, 184)", cursor: "pointer" }}
                  />
                </small>
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default UploadImage;
