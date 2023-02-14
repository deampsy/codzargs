import "../styles/post.css";

const Post = (props) => {
  return (
    <div className="post">
      <div className="post-image-container">
        <img
          src={props.image}
          className={`post-image ${props.aspect}`}
          alt="turtle"
        />
      </div>
      <div className="post-text">{props.text}</div>
    </div>
  );
};

export default Post;
