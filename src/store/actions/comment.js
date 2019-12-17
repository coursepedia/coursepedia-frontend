import axios from "axios";

const API = process.env.REACT_APP_BACKEND_URI;

export const addComment = (values, history) => async dispatch => {
  axios
    .post(`${API}/comment`, values)
    .then(result => {
      dispatch({
        type: "ADD_COMMENT",
        values
      });
    })
    .catch(error => {
      console.log(error.message);
    });
};
