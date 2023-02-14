import "../styles/comment.css";

const Comment = (props) => {
  return (
    <div className="comment">
      <div className="comment-date">{props.date}</div>
      <div className="comment-text">{props.text}</div>
    </div>
  );
};

export default Comment;
