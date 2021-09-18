import React from "react";
import Post from "../../posts/index"
import "./styles.css";
import DATA from "../../../Data";

const Posts = (props) => {
    let button = props.number
    let DATA_FILTERED = DATA.filter(element => element.address === button)
  return (
    <section className="posts">
      {DATA_FILTERED.map((element) => (
        <Post  key={element.id} image={element.image} title={element.title} link={element.link}/>
      ))}
    </section>
  );
};

export default Posts;
