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
  { name: "Art and Design" },
  { name: "Food and Nutrition" },
  { name: "Science and Technology" },
  { name: "Tatoes and Workouts" },
  { name: "House and Appartments" },
  { name: "Land and Plots" },
  { name: "Watch and Trackers" },
  { name: "Photography and videography" },
  { name: "Kitchenware and cookware" },
  { name: "Printers and Scanners" },
  { name: "Security and Surveillance" },
  { name: "Software and Hardware" },
  { name: "Wedding and Ceremony" },
  { name: "Books and Stationary" },
  { name: "Fashion and Design" },
  { name: "CD's and DVD's" },
  { name: "Accounting and Finance" },
  { name: "Advertising and Marketing" },
  { name: "Commedy and Entertainment" },
  { name: "Childcare and Babysitting" },
  { name: "Clerical and Administration" },
  { name: "Consulting and Strategy" },
  { name: "Engineering and Architecture" },
  { name: "Farming and Veterinary" },
  { name: "Animals and Pets" },
  { name: "Dogs and Pupies" },
  { name: "Cats and Kittens" },
  { name: "Travel and Tourism" },
  { name: "Housekeeping and Cleaning" },
  { name: "Gardening and Landscaping" },
  { name: "Logistics and Transport" },
  { name: "Research and Survery" },
  { name: "Restaurants and Bars" },
  { name: "Part-Time and Weekends" },
  { name: "DJ and VirtualDJ" },
  { name: "Building and Trade" },
  { name: "Chauffeur and Airport" },
  { name: "Childcare and Parenting" },
  { name: "Party and Events" },
  { name: "Classes and Courses" },
  { name: "Baby and Kids" },
  { name: "Maternity and Pregrancy" },
  { name: "Prams and Strollers" },
  { name: "Driving and Cycling" },
  { name: "Livestock and Poultery" },
  { name: "Liquor and Drinks" },
  { name: "Feeds and Seeds" },
  { name: "Plumbing and Water" },
  { name: "Measuring and Layouts" },
  { name: "Power and Lighting" },
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
];

const followersRange = [
  { name: "1 - 500" },
  { name: "500 - 1.0k" },
  { name: "1.1k - 1.5k" },
  { name: "1.6k - 2.0k" },
  { name: "2.1k - 2.5k" },
  { name: "2.6k - 3.0k" },
  { name: "3.1k - 3.5k" },
  { name: "3.6k - 4.0k" },
  { name: "4.1k - 4.5k" },
  { name: "4.6k - 5.0k" },
  { name: "5.1k - 5.5k" },
  { name: "5.6k - 6.0k" },
  { name: "6.1k - 6.5k" },
  { name: "6.6k - 7.0k" },
  { name: "7.1k - 7.5k" },
  { name: "7.6k - 8.0k" },
  { name: "8.1k - 8.5k" },
  { name: "8.6k - 9.0k" },
  { name: "9.1k - 9.5k" },
  { name: "9.6k - 10.0k" },
  { name: "10.1k - 15.0k" },
  { name: "15.1k - 20.0k" },
  { name: "20.1k - 25.0k" },
  { name: "25.1k - 30.0k" },
  { name: "30.1k - 35.0k" },
  { name: "35.1k - 40.0k" },
  { name: "40.1k - 45.0k" },
  { name: "45.1k - 50.0k" },
  { name: "50.1k - 55.0k" },
  { name: "55.1k - 60.0k" },
  { name: "60.1k - 65.0k" },
  { name: "65.1k - 70.0k" },
  { name: "70.1k - 75.0k" },
  { name: "75.1k - 80.0k" },
  { name: "80.1k - 85.0k" },
  { name: "85.1k - 90.0k" },
  { name: "90.1k - 95.0k" },
  { name: "95.1k - 100.0k" },
  { name: "100.1k - 150.0k" },
  { name: "150.1k - 200.0k" },
  { name: "200.1k - 250.0k" },
  { name: "250.1k - 300.0k" },
  { name: "300.1k - 350.0k" },
  { name: "350.1k - 400.0k" },
  { name: "400.1k - 450.0k" },
  { name: "450.1k - 500.0k" },
  { name: "500.1k - 550.0k" },
  { name: "550.1k - 600.0k" },
  { name: "600.1k - 650.0k" },
  { name: "650.1k - 700.0k" },
  { name: "700.1k - 750.0k" },
  { name: "750.1k - 800.0k" },
  { name: "800.1k - 850.0k" },
  { name: "850.1k - 900.0k" },
  { name: "900.1k - 950.0k" },
  { name: "950.1k - 1.0m" },
  { name: "1.1m - 1.5m" },
  { name: "1.6m - 2.0m" },
  { name: "2.1m - 2.5m" },
  { name: "2.6m - 3.0m" },
  { name: "3.1m - 3.5m" },
  { name: "3.6m - 4.0m" },
  { name: "4.1m - 4.5m" },
  { name: "4.6m - 5.0m" },
  { name: "5.1m - 5.5m" },
  { name: "5.6m - 6.0m" },
  { name: "6.1m - 6.5m" },
  { name: "6.6m - 7.0m" },
  { name: "7.1m - 7.5m" },
  { name: "7.6m - 8.0m" },
  { name: "8.1m - 8.5m" },
  { name: "8.6m - 9.0m" },
  { name: "9.1m - 9.5m" },
  { name: "9.6m - 10.0m" },
  { name: "10.1m - 15.0m" },
  { name: "15.1m - 20.0.m" },
  { name: "20.1m - 25.0.m" },
  { name: "25.1m - 30.0.m" },
  { name: "30.1m - 35.0.m" },
  { name: "35.1m - 40.0.m" },
  { name: "40.1m - 45.0.m" },
  { name: "45.1m - 50.0.m" },
  { name: "50.1m - 55.0.m" },
  { name: "55.1m - 60.0.m" },
  { name: "60.1m - 65.0.m" },
  { name: "65.1m - 70.0.m" },
  { name: "70.1m - 75.0.m" },
  { name: "75.1m - 80.0.m" },
  { name: "80.1m - 85.0.m" },
  { name: "85.1m - 90.0.m" },
  { name: "90.1m - 95.0.m" },
  { name: "95.1m - 100.0.m" },
  { name: "100.1m - 150.0m" },
  { name: "150.1m - 200.0m" },
  { name: "200.1m - 250.0m" },
  { name: "250.1m - 300.0m" },
  { name: "300.1m - 350.0m" },
  { name: "350.1m - 400.0m" },
  { name: "400.1m - 450.0m" },
  { name: "450.1m - 500.0m" },
  { name: "500.1m - 550.0m" },
  { name: "550.1m - 600.0m" },
  { name: "600.1m - 650.0m" },
  { name: "650.1m - 700.0m" },
  { name: "700.1m - 750.0m" },
  { name: "750.1m - 800.0m" },
  { name: "800.1m - 850.0m" },
  { name: "850.1m - 900.0m" },
  { name: "900.1m - 950.0m" },
  { name: "950.1m - 1.0b" },
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
    console.log(postForm, "qwerty");
  };

  if (!userData) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <div className="sc">
        <form
          autoComplete="off"
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
                  onClick={() => close(false)}
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
                                color: "rgb(55, 135, 185)",
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
      <div className="sclose" onClick={() => close(false)} />
    </div>
  );
}

export default WritePost;
