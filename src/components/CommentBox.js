import React, { useState, useContext, useEffect } from "react";
import axios from "axios";

import { UserContext } from "./UserContext";
import { BACKEND_URI } from "../helpers/path";

function CommentBox({ courseId, modalContent, setModalContent }) {
  const [users] = useContext(UserContext);

  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  const handleChange = event => {
    setContent(event.target.value);
    console.log(users);
  };

  const addComment = event => {
    event.preventDefault();
    setModalContent({
      ...modalContent,
      comments: [...modalContent.comments, { content: content, users: { username: users.username } }]
    });

    axios
      .post(BACKEND_URI + "/users-comments", {
        content,
        users: users._id,
        courseId
      })
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        if (error) {
          if (error.response) {
            setError(error.response.data.message);
          } else {
            setError(error.message);
          }
        }
      });
  };

  return (
    <div>
      {/* {content &&
        content.map((data, index) => {
          return ( */}

      <h4 className="font-weight-light">Write your comment here : </h4>
      <div className="input-group">
        <div className="input-group-prepend">
          <span onClick={addComment} className="input-group-text" id="basic-addon">
            <i className="fa fa-paper-plane-o"></i>
          </span>
        </div>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" name="content" onChange={handleChange} value={content}></textarea>
      </div>
    </div>
  );
}

export default CommentBox;
