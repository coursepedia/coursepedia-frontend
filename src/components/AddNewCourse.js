import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, MDBFormInline } from "mdbreact";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import ReactFilestack from "filestack-react";

import AddNewNavbar from "../components/AddNewNavbar";
import AddNewFooter from "../components/AddNewFooter";

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
  const [options, setNewOptions] = useState({
    options: {
      radio: 1
    }
  });

  const [selectValue, setselectValue] = useState({
    adult: ["art", "tech", "softskill"],
    kids: ["art", "sport", "math and science"]
  });

  // useEffect(() => {
  //   axios
  //     .get("https://coursepediabackend.herokuapp.com/courses")
  //     .then(res => {
  //       setselectValue(res.data);
  //     })
  //     .catch(error => console.log(error.message));
  // }, []);

  const handleClick = number => {
    setNewOptions({
      radio: number
    });
  };

  const classes = useStyles();
  const [field, setField] = useState("");
  const [open, setOpen] = useState(false);
  const [newCourse, setNewCourse] = useState({
    name: "",
    address: "",
    phoneNumber: "",
    price: "",
    rating: null,
    ageCategory: "",
    fieldCategory: "",
    imageUrl: ""
  });

  const handleChangeField = event => {
    setField(event.target.value);
  };

  const handleChangeRating = event => {
    handleChangeCourse(event);
    if (newCourse.rating < 1) {
      alert("invalid rating number! Rating number should be above 1");
      return setNewCourse({ rating: 1 });
    } else if (newCourse.rating > 5) {
      alert("invalid rating number! Rating number should be under 5");
      return setNewCourse({ rating: 1 });
    }
  };

  const handleChangeCourse = event => {
    setNewCourse({
      ...newCourse,
      [event.target.name]: event.target.value
    });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleImage = data => {
    setNewCourse({
      ...newCourse,
      imageUrl: data
    });
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
                  <MDBInput label="Course Adress" group type="email" validate error="wrong" success="right" name="email" value={newCourse.address} onChange={handleChangeCourse} />
                  <MDBInput label="Course Phone Number" group type="text" validate error="wrong" success="right" name="phoneNumber" value={newCourse.phoneNumber} onChange={handleChangeCourse} />
                  <MDBInput label="Price" group type="text" validate error="wrong" success="right" name="price" value={newCourse.price} onChange={handleChangeCourse} />
                  <MDBInput label="Rating (Please give rate 1 - 5)" group type="text" validate error="wrong" success="right" name="rating" value={newCourse.rating} onChange={handleChangeRating} />
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
                  <Select labelId="demo-controlled-open-select-label" id="demo-controlled-open-select" open={open} onClose={handleClose} onOpen={handleOpen} value={field} onChange={handleChangeField}>
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {options.radio === 1 ? selectValue.adult.map(item => <MenuItem value={10}>{item}</MenuItem>) : selectValue.kids.map(item => <MenuItem value={10}>{item}</MenuItem>)}
                    {/* <MenuItem value={10}>Art</MenuItem>
                <MenuItem value={20}>Sport</MenuItem>
                <MenuItem value={30}>Math and Science</MenuItem> */}
                  </Select>
                </FormControl>
                <br />
                <br />
                <br />
                <div className="input-group">
                  <ReactFilestack apikey={process.env.REACT_APP_FILESTACK_API_KEY} onSuccess={res => handleImage(res.filesUploaded[0].url)} />
                  {/* <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroupFileAddon01">
                      Upload
                    </span>
                  </div>
                  <div className="custom-file">
                    <input type="file" className="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" />
                    <label className="custom-file-label" htmlFor="inputGroupFile01">
                      Choose file
                    </label>
                  </div> */}
                </div>
                <br />
                <br />
                <div className="text-center">
                  <MDBBtn outline color="secondary">
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
