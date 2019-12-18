import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, MDBFormInline } from "mdbreact";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import ReactFilestack from "filestack-react";
import axios from "axios";

import AddNewNavbar from "../components/AddNewNavbar";
import AddNewFooter from "../components/AddNewFooter";
import { BACKEND_URI } from "../helpers/path";

const useStyles = makeStyles(theme => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2)
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }
}));

function AddNewCourse() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [imageName, setImageName] = useState("");
  const [newCourse, setNewCourse] = useState({
    name: "",
    address: "",
    phoneNumber: "",
    price: 0,
    rating: 1,
    ageCategory: "",
    fieldCategory: "",
    imageUrl: ""
  });
  const [selectValue, setselectValue] = useState({
    adult: ["art", "tech", "softskill"],
    kids: ["art", "sport", "math and science"]
  });
  const [error, setError] = useState("");
  const [options, setNewOptions] = useState({
    options: {
      radio: 1
    }
  });

  const handleClick = number => {
    setNewOptions({
      radio: number
    });
    setNewCourse({ ...newCourse, ageCategory: number === 1 ? "adults" : "kids" });
  };

  const handleSubmit = event => {
    event.preventDefault();
    axios
      .post(BACKEND_URI + "/courses", newCourse) //harus sama dengan route yang di backend"
      .then(res => {
        console.log(res);
      })
      .catch(error => setError(error.response.data.message));
  };

  const handleChangeField = event => {
    setNewCourse({ ...newCourse, fieldCategory: event.target.value });
  };

  const handleChangeCourse = event => {
    setNewCourse({ ...newCourse, [event.target.name]: event.target.value });
  };

  React.useEffect(() => {
    console.log(newCourse);
  }, [newCourse]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleImage = data => {
    setNewCourse({
      ...newCourse,
      imageUrl: data.url
    });

    setImageName(data.filename);
  };

  return (
    <div>
      <AddNewNavbar />
      <MDBContainer style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <MDBRow>
          <MDBCol md="10">
            <section id="form-add">
              <form>
                <p className="h5 text-center mb-4">
                  <b>Adding Your New Recommendation Course With Form Below !</b>
                </p>
                <br />
                <div className="grey-text">
                  <MDBInput label="Course Name" group type="text" validate error="wrong" success="right" name="name" value={newCourse.name} onChange={handleChangeCourse} />
                  <MDBInput label="Course Address" group type="text" validate error="wrong" success="right" name="address" value={newCourse.address} onChange={handleChangeCourse} />
                  <MDBInput label="Course Phone Number" group type="text" validate error="wrong" success="right" name="phoneNumber" value={newCourse.phoneNumber} onChange={handleChangeCourse} />
                  <MDBInput label="Price" group type="text" validate error="wrong" success="right" name="price" value={newCourse.price} onChange={handleChangeCourse} />
                  <MDBInput label="Rating (Please give rate 1 - 5)" group type="number" validate error="wrong" success="right" name="rating" value={newCourse.rating} onChange={handleChangeCourse} max="5" min="1" />
                  {/* <div> */}
                  <MDBFormInline name="ageCategory" value={newCourse.ageCategory} onChange={handleChangeCourse}>
                    <MDBInput onClick={() => handleClick(1)} checked={options.radio === 1 ? true : false} label="Adults" type="radio" id="radio" containerClass="mr-5" />
                    <MDBInput onClick={() => handleClick(2)} checked={options.radio === 2 ? true : false} label="Kids" type="radio" id="radio2" containerClass="mr-5" />
                  </MDBFormInline>
                  {/* </div> */}
                  {/* <MDBInput type="textarea" rows="2" label="Your message" /> */}
                </div>
                <FormControl className={classes.formControl} name="fieldCategory" value={newCourse.fieldCategory} onChange={handleChangeCourse}>
                  <InputLabel id="demo-controlled-open-select-label"> Category </InputLabel>
                  <Select labelId="demo-controlled-open-select-label" id="demo-controlled-open-select" open={open} onClose={handleClose} onOpen={handleOpen} value={newCourse.fieldCategory} onChange={handleChangeField}>
                    <MenuItem value="">
                      <em>Others...</em>
                    </MenuItem>
                    {options.radio === 1 ? selectValue.adult && selectValue.adult.map(item => <MenuItem value={item}>{item}</MenuItem>) : selectValue.kids && selectValue.kids.map(item => <MenuItem value={item}>{item}</MenuItem>)}
                    {/* <MenuItem value={10}>Art</MenuItem>
                <MenuItem value={20}>Sport</MenuItem>
                <MenuItem value={30}>Math and Science</MenuItem> */}
                  </Select>
                </FormControl>
                <br />
                <br />
                <br />
                <div className="input-group">
                  <ReactFilestack apikey={process.env.REACT_APP_FILESTACK_API_KEY} onSuccess={res => handleImage(res.filesUploaded[0])} />
                  <span> {imageName} </span> {/*munculin nama file yg diupload*/}
                </div>
                <br />
                <br />
                <div className="text-center">
                  <MDBBtn outline color="secondary" onClick={handleSubmit}>
                    Send
                    {/* <MDBIcon far icon="paper-plane" className="ml-1" /> */}
                  </MDBBtn>
                </div>
              </form>
            </section>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <AddNewFooter />
    </div>
  );
}

export default AddNewCourse;
