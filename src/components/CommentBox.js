import React, { useState, useContext } from "react";
import axios from "axios";

import { UserContext } from "./UserContext";
import { BACKEND_URI } from "../helpers/path";

function CommentBox({ courseId }) {
  const [users] = useContext(UserContext);

  const [content, setContent] = useState("");
  const [userPost, setUserPost] = useState([]);

  const handleChange = event => {
    setContent({
      ...content,
      [event.target.name]: event.target.value
    });
  };

  // useEffect(() => {
  //   axios
  //     .get("https://coursepediabackend.herokuapp.com/courses")
  //     .then(res => {
  //       // console.log(res);
  //       setContent(res.data);
  //     })
  //     .catch(error => console.log(error.message));
  // }, []);

  const addComment = event => {
    event.preventDefault();
    axios
      .post(BACKEND_URI + "/users-comments", {
        ...content,
        users: users._id,
        courseId
      })
      .then(res => {
        console.log(res);
        // setUserPost(res.data);
      })
      .catch(error => console.log(error.message));
  };

  return (
    <div>
      {/* {content &&
        content.map((data, index) => {
          return ( */}
      <h4 className="font-weight-light">Say something about the course : </h4>
      <div className="row">
        <div className="col-12  mt-3">
          <h6>Say something about React</h6>
          {/* Comment Form Component */}
          <form onSubmit={addComment}>
            <label htmlFor="comment">Ada komentar</label>
            <textarea
              name="content"
              cols="30"
              rows="10"
              onChange={handleChange}
            ></textarea>
            <button>Add</button>
          </form>
        </div>
      </div>
      {/* );
        })} */}
    </div>
  );
}

export default CommentBox;
