import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput, MDBFormInline } from "mdbreact";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
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
  const [field, setField] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleChange = event => {
    setField(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <AddNewNavbar />
      <br />
      <br />
      <MDBContainer style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <MDBRow>
          <MDBCol md="10">
            <form>
              <p className="h5 text-center mb-4">
                <b>Adding Your New Recommendation With Form Below !</b>
              </p>
              <br />
              <div className="grey-text">
                <MDBInput label="Course Name" group type="text" validate error="wrong" success="right" />
                <MDBInput label="Course Adress" group type="email" validate error="wrong" success="right" />
                <MDBInput label="Course Phone Number" group type="text" validate error="wrong" success="right" />
                <MDBInput label="Price" group type="text" validate error="wrong" success="right" />
                <MDBInput label="Rating" group type="text" validate error="wrong" success="right" />
                {/* <div> */}
                <MDBFormInline>
                  <MDBInput onClick={() => handleClick(1)} checked={options.radio === 1 ? true : false} label="Adults" type="radio" id="radio" containerClass="mr-5" />
                  <MDBInput onClick={() => handleClick(2)} checked={options.radio === 2 ? true : false} label="Kids" type="radio" id="radio2" containerClass="mr-5" />
                </MDBFormInline>
                {/* </div> */}
                {/* <MDBInput type="textarea" rows="2" label="Your message" /> */}
              </div>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-controlled-open-select-label"> Category </InputLabel>
                <Select labelId="demo-controlled-open-select-label" id="demo-controlled-open-select" open={open} onClose={handleClose} onOpen={handleOpen} value={field} onChange={handleChange}>
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
              <div className="text-center">
                <MDBBtn outline color="secondary">
                  Send <MDBIcon far icon="paper-plane" className="ml-1" />
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <br />
      <br />
      <AddNewFooter />
    </div>
  );
}

export default AddNewCourse;
