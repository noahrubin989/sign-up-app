import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  Typography,
  TextField,
  Checkbox,
} from "@mui/material";

// https://www.youtube.com/watch?v=APjAsiymAN4

const SignUp = () => {
  let [formData, setFormData] = useState({
    email: "",
    password: "",
    passwordConfirmed: "",
    subscribed: true, // check the box by default
  });

  const handleChange = (e) => {
    // console.log(e); // event itself

    // /*
    //  The `target` property returns the HTML element that triggered an event.
    //  By using this property we can get access to the element's properties and attributes.
    //  */
    // console.log(e.target);

    // // `name` attribute on the corresponding input tag
    // console.log(e.target.name);

    // // `value` attribute on the corresponding input tag
    // console.log(e.target.value);

    // // `type` attribute on the corresponding input tag
    // console.log(e.target.type);

    // // `checked` attribute on the corresponding input tag
    // console.log(e.target.checked);

    // We can destructure `e.target` to obtain the properties that we need
    const { name, value, type, checked } = e.target;

    // ----- Use this instead if you see it as more readbale -----

    // setFormData((prevFormData) => ({
    //   ...prevFormData,
    //   [name]: type === "checkbox" ? checked : value,
    // }));

    if (type === "checkbox") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: checked,
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    // Prevent it from submitting a form on submit
    e.preventDefault();

    // console.log(formData);

    // Password logic
    if (formData.password === formData.passwordConfirmed) {
      console.log("Successfully signed up");
    } else {
      console.log("Passwords do not match!");
      return; // This way, our checkbox logic below does not even get considered
    }

    // Now for the checkbox logic
    if (formData.subscribed) {
      console.log("Thanks for subscribing to the newsletter");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: {
            xs: "90%", // Extra small screen sizes
            sm: "60%", // Small screen sizes
            md: "40%", // Medium screen sizes
            lg: "30%", // Large screen sizes
          },
          bgcolor: "white",
          borderRadius: "15px",
        }}
      >
        <Grid
          container
          spacing={2}
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{ padding: "5%" }}
        >
          <Grid item>
            <Typography variant="h6">Sign-Up Form</Typography>
          </Grid>
          <Grid item>
            <TextField
              variant="filled"
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              // In practice you'd just use `onChange={handleChange} for all of these`
              onChange={(e) => handleChange(e)}
            />
          </Grid>
          <Grid item>
            <TextField
              variant="filled"
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={(e) => handleChange(e)}
            />
          </Grid>
          <Grid item>
            <TextField
              variant="filled"
              label="Confirm Password"
              type="password"
              name="passwordConfirmed"
              value={formData.passwordConfirmed}
              onChange={(e) => handleChange(e)}
            />
          </Grid>
          <Grid item>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Checkbox
                color="primary"
                name="subscribed"
                checked={formData.subscribed} // true or false
                onChange={handleChange}
              />
              <label>Subscribe to newsletter</label>
            </Box>
          </Grid>
          <Grid item>
            <Button type="submit" variant="contained" color="success">
              Sign Up
            </Button>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};

export default SignUp;
