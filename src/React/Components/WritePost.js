import React, { useState, useEffect } from "react";
import "../Css/Category.css";
import "../Css/Share.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import Avatar from "../Components/Avatar.png";
import { addPost } from "../../Redux/Queries/Actions/Posts";
import SelectOption from "../Components/SelectOption";
import { BsImages } from "react-icons/bs";
import "../Css/Share.css";

const categories = [
  { name: "Home and Office" },
  { name: "Phones and Tablets" },
  { name: "IT and Computing" },
  { name: "Health and Beauty" },
  { name: "Wealth and Luxury" },
  { name: "Politics and Fame" },
  { name: "Cars and Bikes" },
  { name: "Dance and Music" },
  { name: "Movie and Cinema" },
  { name: "Atheltics and Gaming" },
  { name: "Influencer and Celebrity" },
  { name: "Travel and Photography" },
  { name: "Art and Design" },
  { name: "Education and Books" },
  { name: "Food and Nutrition" },
  { name: "Pets and Animals" },
  { name: "Science and Technology" },
  { name: "Tatoes and Workouts" },
];

const platforms = [
  { name: "Twitter" },
  { name: "Facebook" },
  { name: "Instagram" },
  { name: "TikTok" },
  { name: "YouTube" },
  { name: "WhatsApp" },
  { name: "Telegram" },
  { name: "Snapchat" },
  { name: "Pinterest" },
  { name: "Website" },
];

const followersRange = [
  { name: "1 - 500" },
  { name: "501 - 1000" },
  { name: "1001 - 1500" },
  { name: "1501 - 2000" },
  { name: "2001 - 2500" },
  { name: "2501 - 3000" },
  { name: "3001 - 3500" },
  { name: "3501 - 4000" },
  { name: "4001 - 4500" },
  { name: "4501 - 5000" },
  { name: "5001 - 5500" },
  { name: "5501 - 6000" },
  { name: "6001 - 6500" },
  { name: "6501 - 7000" },
  { name: "7001 - 7500" },
  { name: "7501 - 8000" },
  { name: "8001 - 8500" },
  { name: "8501 - 9000" },
  { name: "9001 - 9500" },
  { name: "9501 - 10000" },
  { name: "10001 - 15000" },
  { name: "15001 - 20000" },
  { name: "20001 - 25000" },
  { name: "25001 - 30000" },
  { name: "30001 - 35000" },
  { name: "35001 - 40000" },
  { name: "40001 - 45000" },
  { name: "45001 - 50000" },
  { name: "50001 - 55000" },
  { name: "55001 - 60000" },
  { name: "60001 - 65000" },
  { name: "65001 - 70000" },
  { name: "70001 - 75000" },
  { name: "75001 - 80000" },
  { name: "80001 - 85000" },
  { name: "85001 - 90000" },
  { name: "90001 - 95000" },
  { name: "95000 - 100000" },
  { name: "100001 - 150000" },
  { name: "150001 - 200000" },
  { name: "200001 - 250000" },
  { name: "250001 - 300000" },
  { name: "300001 - 350000" },
  { name: "350001 - 400000" },
  { name: "400001 - 450000" },
  { name: "450001 - 500000" },
  { name: "500001 - 550000" },
  { name: "550001 - 600000" },
  { name: "600001 - 650000" },
  { name: "650001 - 700000" },
  { name: "700001 - 750000" },
  { name: "750001 - 800000" },
  { name: "800001 - 850000" },
  { name: "850001 - 900000" },
  { name: "900001 - 950000" },
  { name: "950000 - 1000000" },
  { name: "1000001 - 1500000" },
  { name: "1500001 - 2000000" },
  { name: "2000001 - 2500000" },
  { name: "2500001 - 3000000" },
  { name: "3000001 - 3500000" },
  { name: "3500001 - 4000000" },
  { name: "4000001 - 4500000" },
  { name: "4500001 - 5000000" },
  { name: "5000001 - 5500000" },
  { name: "5500001 - 6000000" },
  { name: "6000001 - 6500000" },
  { name: "6500001 - 7000000" },
  { name: "7000001 - 7500000" },
  { name: "7500001 - 8000000" },
  { name: "8000001 - 8500000" },
  { name: "8500001 - 9000000" },
  { name: "9000001 - 9500000" },
  { name: "9500000 - 10000000" },
  { name: "10000001 - 15000000" },
  { name: "15000001 - 20000000" },
  { name: "20000001 - 25000000" },
  { name: "25000001 - 30000000" },
  { name: "30000001 - 35000000" },
  { name: "35000001 - 40000000" },
  { name: "40000001 - 45000000" },
  { name: "45000001 - 50000000" },
  { name: "50000001 - 55000000" },
  { name: "55000001 - 60000000" },
  { name: "60000001 - 65000000" },
  { name: "65000001 - 70000000" },
  { name: "70000001 - 75000000" },
  { name: "75000001 - 80000000" },
  { name: "80000001 - 85000000" },
  { name: "85000001 - 90000000" },
  { name: "90000001 - 95000000" },
  { name: "95000000 - 100000000" },
  { name: "100000001 - 150000000" },
  { name: "150000001 - 200000000" },
  { name: "200000001 - 250000000" },
  { name: "250000001 - 300000000" },
  { name: "300000001 - 350000000" },
  { name: "350000001 - 400000000" },
  { name: "400000001 - 450000000" },
  { name: "450000001 - 500000000" },
  { name: "500000001 - 550000000" },
  { name: "550000001 - 600000000" },
  { name: "600000001 - 650000000" },
  { name: "650000001 - 700000000" },
  { name: "700000001 - 750000000" },
  { name: "750000001 - 800000000" },
  { name: "800000001 - 850000000" },
  { name: "850000001 - 900000000" },
  { name: "900000001 - 950000000" },
  { name: "950000000 - 1000000000" },
];

const audience = [
  { name: "followers" },
  { name: "subscribers" },
  { name: "page likes" },
  { name: "contants" },
];

function WritePost({ close, value }) {
  const dispatch = useDispatch();

  const userData = JSON.parse(localStorage.getItem("userAccount"));

  const categoryType = true;
  const platformType = true;
  const followersNo = true;
  const audienceType = true;

  const [postForm, setPostForm] = useState({
    category: "",
    platform: "",
    followersCount: "",
    audienceType: "",
    content: "",
    btnType: value,
  });

  const [postImage, setPostImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const submitImage = async (e) => {
    setPostImage(e.target.files[0]);
    setImageUrl(e.target.files[0].name);
  };

  useEffect(() => {
    if (postImage) {
      setImageUrl(URL.createObjectURL(postImage));
    }
  }, [postImage]);

  const handleSubmitPost = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("postImage", postImage);
    formData.append("category", postForm.category);
    formData.append("platform", postForm.platform);
    formData.append("followersCount", postForm.followersCount);
    formData.append("content", postForm.content);
    formData.append("btnType", postForm.btnType);
    formData.append("audienceType", postForm.audienceType);

    dispatch(addPost(formData));
    window.location.reload(false);
  };

  if (!userData) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <form
        autoComplete="off"
        className="sc"
        action="/"
        method="POST"
        encType="multipart/form-data"
      >
        <p className="flex-row"></p>

        <div className="sfc">
          <p className="ac">
            <span>
              {userData.result.avatar ? (
                <img
                  style={{
                    width: "28px",
                    height: "284px",
                    borderRadius: "50%",
                  }}
                  src={userData.result.avatar}
                  alt={userData.result.username}
                />
              ) : (
                <img
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                  }}
                  src={Avatar}
                  alt={userData.result.username}
                />
              )}
            </span>

            <span style={{ margin: "auto", fontSize: "20px" }}>
              Create a post
            </span>

            <span>
              <AiFillCloseCircle
                onClick={() => close()}
                style={{
                  color: "rgb(55, 136, 184)",
                  cursor: "pointer",
                  fontSize: "30px",
                }}
              />
            </span>
          </p>

          <p className="ips">
            <span>
              {categoryType && (
                <SelectOption
                  style={{ cursor: "pointer" }}
                  value={postForm.category}
                  prompt="Select category ..."
                  onChange={(val) =>
                    setPostForm({ ...postForm, category: val })
                  }
                  categories={categories}
                />
              )}
            </span>

            <span>
              {platformType && (
                <SelectOption
                  style={{ cursor: "pointer" }}
                  value={postForm.platform}
                  prompt="Select platform ..."
                  onChange={(val) =>
                    setPostForm({ ...postForm, platform: val })
                  }
                  categories={platforms}
                />
              )}
            </span>

            <span className="fa">
              <p>
                <h6>
                  {followersNo && (
                    <SelectOption
                      style={{ cursor: "pointer" }}
                      value={postForm.followersCount}
                      prompt="Select follower range ..."
                      onChange={(val) =>
                        setPostForm({
                          ...postForm,
                          followersCount: val,
                        })
                      }
                      categories={followersRange}
                    />
                  )}
                </h6>
                <h6>
                  {audienceType && (
                    <SelectOption
                      style={{ cursor: "pointer" }}
                      value={postForm.audienceType}
                      prompt="Choose audience type ..."
                      onChange={(val) =>
                        setPostForm({ ...postForm, audienceType: val })
                      }
                      categories={audience}
                    />
                  )}
                </h6>
              </p>
            </span>
            <textarea
              cols="10"
              rows="3"
              value={postForm.content}
              onChange={(e) =>
                setPostForm({ ...postForm, content: e.target.value })
              }
              type="text"
              name="content"
              placeholder="Add description for your account here."
            />
          </p>

          <p>
            <div className="flex-column choose-file">
              <input
                type="file"
                accept="image/*"
                name="file"
                filename="postImage"
                onChange={submitImage}
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
                      style={{
                        fontSize: "20px",
                        color: "green",
                        marginRight: "5px",
                      }}
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
                            style={{
                              color: "rgb(55, 136, 184)",
                              cursor: "pointer",
                            }}
                          />
                        </small>
                      </span>
                    </>
                  )}
                </p>
              </div>
            </div>
            <span
              type="submit"
              className="share-btn"
              onClick={handleSubmitPost}
            >
              Post
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}

export default WritePost;
