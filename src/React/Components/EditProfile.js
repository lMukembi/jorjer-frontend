import React, { useEffect, useState } from "react";
import "../Css/EditProfile.css";
import { BsImages } from "react-icons/bs";
import { IoCloseCircle } from "react-icons/io5";
import { AiFillCloseCircle } from "react-icons/ai";
import { editUser } from "../../Redux/Queries/Actions/Auth";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import Avatar from "../Components/Avatar.png";
import { EDIT_USER } from "../../Redux/Queries/Constants/Users";
import axios from "axios";

function EditProfile(props) {
  const dispatch = useDispatch();
  const { id } = useParams();

  const userData = JSON.parse(localStorage.getItem("userAccount"));

  const [editForm, setEditForm] = useState({
    username: "",
    bio: "",
    file: "",
  });

  const onChange = (val) => setEditForm({ ...editForm, file: val.name });

  const [postImage, setPostImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const onChangeImage = async (e) => {
    setPostImage(e.target.files[0]);
    onChange(e.target.files[0]);
  };

  console.log(editForm);

  // const token = userData.data;

  const submitEditForm = (e) => {
    e.preventDefault();
    if (id) {
      dispatch(editUser(id, editForm));
      console.log(editForm, "qwerty");
    }

    // props.close(false);
  };

  useEffect(() => {
    if (postImage) {
      setImageUrl(URL.createObjectURL(postImage));
    }
  }, [postImage]);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bio, setBio] = useState("");

  const data = localStorage.getItem("userAccount");
  const token = JSON.parse(data);
  const updateUser = async (e) => {
    e.preventDefault();

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token.data}`,
    };

    const config = {
      headers: headers,
    };
    try {
      const { data } = await axios.put(
        `http://localhost:4000/api/auth/editUser/${id}`,
        { username, email, phone },
        config
      );

      dispatch({ type: EDIT_USER, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setUsername(token.result.username);
    setEmail(token.result.email);
    setPhone(token.result.phone);
    setBio(token.result.bio);
  }, []);

  return (
    <div>
      <form className="edit-profile">
        <p className="margin-bottom">
          <IoCloseCircle
            className="close-button"
            onClick={() => props.close(false)}
            style={{
              color: "rgb(55, 136, 184)",
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
                {imageUrl && postImage ? (
                  <>
                    <img
                      src={imageUrl}
                      alt={userData.result.username}
                      style={{
                        marginLeft: "10px",
                        borderRadius: "50%",
                        height: "50px",
                        width: "50px",
                      }}
                    />

                    <small>
                      <AiFillCloseCircle
                        onClick={() => setPostImage(!postImage)}
                        style={{
                          color: "rgb(55, 136, 184)",
                          cursor: "pointer",
                        }}
                      />
                    </small>
                  </>
                ) : (
                  <img
                    style={{
                      marginLeft: "10px",
                      borderRadius: "50%",
                      height: "50px",
                      width: "50px",
                    }}
                    src={Avatar}
                    alt={userData.result.username}
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
                Change profile image
              </label>
            </p>
          </p>
        </div>

        <input
          type="text"
          name="name"
          className="editInput"
          value={username}
          placeholder="Username"
          autoComplete="off"
          onChange={(e) =>
            setEditForm({ ...editForm, username: e.target.value })
          }
        />

        <input
          type="text"
          name="name"
          className="editInput"
          value={email}
          placeholder="Email"
          autoComplete="off"
          onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
        />

        <input
          type="text"
          name="name"
          className="editInput"
          value={phone}
          placeholder="phone"
          autoComplete="off"
          onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
        />

        <textarea
          rows="10"
          className="textArea"
          type="text"
          name="bio"
          placeholder="Describe yourself here..."
          value={bio}
          onChange={(e) => setEditForm({ ...editForm, bio: e.target.value })}
        ></textarea>

        <button className="editButton" onClick={(e) => updateUser(e)}>
          Edit Profile
        </button>
      </form>
    </div>
  );
}

export default EditProfile;
