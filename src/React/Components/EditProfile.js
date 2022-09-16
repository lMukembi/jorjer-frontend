import React, { useEffect, useState } from "react";
import "../Css/EditProfile.css";
import { BsImages } from "react-icons/bs";
import { IoCloseCircle } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import Avatar from "../Components/Avatar.png";
import { EDIT_USER } from "../../Redux/Queries/Constants/Users";
import axios from "axios";

const hostUrlApi = "http://localhost:4000";
const hostUrl = "https://jorjer.herokuapp.com";

function EditProfile(props) {
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();

  const { userData } = useSelector((state) => state.Users);

  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");

  const [postImage, setPostImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const onChangeImage = async (e) => {
    setPostImage(e.target.files[0]);
    setImageUrl(e.target.files[0].name);
  };

  useEffect(() => {
    if (postImage) {
      setImageUrl(URL.createObjectURL(postImage));
    } else {
      setImageUrl(
        `https://drive.google.com/uc?export=view&id=${userData.avatar}`
      );
    }
  }, [postImage]);

  const data = localStorage.getItem("userAccount");
  const token = JSON.parse(data);
  const updateUser = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("postImage", postImage);
    formData.append("username", username);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("bio", bio);

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token.data}`,
      "Access-Control-Allow-Origin": "https://www.jorjer.com",
    };

    const config = {
      headers: headers,
    };
    
    try {
      const { data } = await axios.put(
        `${hostUrl}/api/auth/editUser/${id}`,
        formData,
        config
      );

      dispatch({ type: EDIT_USER, payload: data });

      if (data) {
        alert("Your profile updated successfully.");
      }

      history.goBack();
    } catch (error) {
      console.log(error);
      if (error) {
        alert("Could not update profile.");
      }
    }
  };

  useEffect(() => {
    setImageUrl(userData.avatar);
    setUsername(userData.username);
    setEmail(userData.email);
    setPhone(userData.phone);
    if (userData.bio !== undefined) {
      setBio(userData.bio);
    }
  }, []);

  return (
    <div>
      <form
        className="edit-profile"
        action="/"
        method="POST"
        encType="multipart/form-data"
      >
        <p className="margin-bottom">
          <IoCloseCircle
            className="close-button"
            onClick={() => props.close(false)}
            style={{
              color: "rgb(55, 135, 185)",
              cursor: "pointer",
              fontSize: "30px",
              marginLeft: "0.45rem",
            }}
          />
        </p>

        <input
          type="file"
          accept="image/*"
          name="file"
          filename="postImage"
          onChange={onChangeImage}
          id="actual-btn"
          hidden
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginRight: "5px",
          }}
        >
          <p style={{ left: "8rem", bottom: "1rem" }}>
            <span style={{ display: "flex" }}>
              <>
                {postImage !== null || imageUrl === null ? (
                  <img
                    src={imageUrl}
                    alt={userData.username}
                    style={{
                      marginLeft: "10px",
                      borderRadius: "50%",
                      height: "50px",
                      width: "50px",
                    }}
                  />
                ) : (
                  <img
                    style={{
                      marginLeft: "10px",
                      borderRadius: "50%",
                      height: "50px",
                      width: "50px",
                    }}
                    src={
                      userData.avatar
                        ? `https://drive.google.com/uc?export=view&id=${userData.avatar}`
                        : Avatar
                    }
                    alt={userData.username}
                  />
                )}
              </>
            </span>
          </p>
          <p style={{ marginBottom: "1rem" }}>
            <p>
              <label
                for="actual-btn"
                style={{
                  display: "flex",
                  whiteSpace: "nowrap",
                  border: "1px solid rgb(204, 199, 199)",
                  outline: "none",
                  borderRadius: "0.5rem",
                }}
              >
                <BsImages
                  style={{
                    fontSize: "20px",
                    color: "green",
                    marginRight: "5px",
                  }}
                />
                Change
              </label>
            </p>
          </p>
        </div>

        <input
          type="text"
          name="username"
          className="editInput"
          value={username}
          placeholder="Username"
          autoComplete="off"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="text"
          name="email"
          className="editInput"
          value={email}
          placeholder="Email"
          autoComplete="off"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          name="phone"
          className="editInput"
          value={phone}
          placeholder="phone"
          autoComplete="off"
          onChange={(e) => setPhone(e.target.value)}
        />

        <textarea
          rows="10"
          className="textArea"
          type="text"
          name="bio"
          placeholder="Describe yourself here..."
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        ></textarea>

        <button className="editButton" onClick={(e) => updateUser(e)}>
          Edit Profile
        </button>
      </form>
    </div>
  );
}

export default EditProfile;
