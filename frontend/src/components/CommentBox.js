import { useState, useLayoutEffect } from "react";
import gsap from "gsap";
import "../styles/comment_box.css";

import Comment from "./Comment";

const CommentBox = (props) => {
  const [open, setOpen] = useState(false);
	const [comments, setComments] = useState([]);

  return (
    <div className="comment-box">
      <div className="open-comments-button" onClick={() => setOpen(!open)}>
        Comments
      </div>
      <div
        className="comments-container"
        style={{ height: open ? 700 + "px" : 0 + "px" }}
      >
        <Comment
          date={"01/17/2023"}
          text={"you r right; origins is terrible!"}
        />
        <Comment date={"01/18/2023"} text={"u r wrong; oriigns is amazing"} />
      <div className="add-comment-button">Add Comment</div>

      </div>
    </div>
  );
};

export default CommentBox;
