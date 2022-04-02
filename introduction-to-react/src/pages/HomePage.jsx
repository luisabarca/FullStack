import React from "react";
import FeaturedPost from "../components/FeaturedPost";
import ListOfPost from "../components/ListOfPost";

const HomePage = ({ allPosts, onDelete }) => {
  return (
    <>
      <FeaturedPost
        updatedAt={"May 13 2021"}
        height={500}
        width={500}
        title={"The Internet of Medical Things: The Healthcare Revolution"}
        content={
          "Since the Pandemic started, we have experienced a growing dependency on technology in the healthcare industry, which demands continuous innovation to deal with the new health dangers."
        }
        image={
          "https://itjuana.com/wp-content/uploads/2021/05/IoMT-The-Health-Revolution-image.png"
        }
      />
      <ListOfPost posts={allPosts} onDelete={onDelete}/>
    </>
  );
};

export default HomePage;
