import React, { useEffect, Fragment } from "react";
import Loader from "../Components/Loader";
import "../Css/Category.css";
import PostCard from "../Components/PostCard";
import GoBack from "../Functions/GoBack";
import { getPosts } from "../../Redux/Queries/Actions/Posts";
import { useDispatch, useSelector } from "react-redux";
import TopBar from "../Components/TopBar";
import DesktopSidebar from "../Components/DesktopSidebar";
import MobileBar from "../Components/MobileBar";

const subCategories = [{ name: "advert" }];

function Add({ loading }) {
  const dispatch = useDispatch();

  const { posts } = useSelector((state) => state.Posts);

  useEffect(() => {
    window.onload = function () {
      window.scrollTo(0, 0);
    };
    dispatch(getPosts());
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  let noOfItems = 0;

  const listPosts = posts.map((post) => {
    return (
      <div>
        {(post.subCategories === "advert") && (
          <div className="categories-post-cards">
            <PostCard
              key={post._id}
              post={post}
              noOfItems={(noOfItems = noOfItems + 1)}
            />
          </div>
        )}
      </div>
    );
  });

  return (
    <Fragment>
      <TopBar />

      {window.outerWidth > 1023 && <DesktopSidebar />}

      <div className="vertical-l-line" />

      {window.innerWidth < 1024 && <MobileBar />}

      <div className="category-container">
        <div className="category-header">
          <GoBack
            title="Accounts on sale"
            noOfItems={noOfItems}
            subCategories={subCategories}
          />
        </div>
        <div>{!loading && posts.length > 0 && <div>{listPosts}</div>}</div>

      </div>
    </Fragment>
  );
}
export default Add;
