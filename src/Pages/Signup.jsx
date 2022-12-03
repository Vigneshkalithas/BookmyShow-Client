import * as React from "react";
import { useNavigate, Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@mui/material/Button";
import axios from "axios";
import { Config } from "../Config/Config";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { toast } from "react-toastify";

function Signup() {
  const navigate = useNavigate();

  const validationSchema = yup.object({
    username: yup.string("Enter username").required("Username is required"),
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },

    validationSchema: validationSchema,

    onSubmit: async (values) => {
      try {
        const result = await axios.post(`${Config.api}/user/signp`, values);
        toast.success(result.data.message);
      } catch (error) {
        console.log(error);
        toast.error(result.data.message);
      }
      // try {
      //   const loginAdmin = await axios.post(
      //     `${Config.api}/adminregister`,
      //     values
      //   );
      //   toast.success(loginAdmin.data.message);
      //   formik.resetForm();
      //   navigate("/adminlogin");
      // } catch (error) {
      //   console.log(error);
      // }
      // alert("hi")
    },
  });

  return (
    <>
      <div className="container login-container">
        <section className="forget text-center">
          <div className="content-signup">
            <h4 className="loginhead">Signup</h4>
            <div>
              <form onSubmit={formik.handleSubmit}>
                <div className="form-box">
                  <div className="input-group mb-3">
                    <TextField
                      id="outlined-basic"
                      label="Username"
                      variant="outlined"
                      size="small"
                      sx={{ width: "52ch" }}
                      type={"text"}
                      error={
                        formik.touched.username &&
                        Boolean(formik.errors.username)
                      }
                      // helperText={
                      //   formik.touched.username && formik.errors.username
                      // }
                      name={"username"}
                      value={formik.values.username}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div className="input-group mb-3">
                    <TextField
                      id="outlined-basic"
                      label="Email"
                      variant="outlined"
                      size="small"
                      sx={{ width: "52ch" }}
                      type={"text"}
                      error={
                        formik.touched.email && Boolean(formik.errors.email)
                      }
                      // helperText={formik.touched.email && formik.errors.email}
                      name={"email"}
                      value={formik.values.email}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div className="input-group mb-3">
                    <TextField
                      id="outlined-basic"
                      label="Password"
                      variant="outlined"
                      size="small"
                      sx={{ width: "52ch" }}
                      type={"text"}
                      error={
                        formik.touched.password &&
                        Boolean(formik.errors.password)
                      }
                      // helperText={
                      //   formik.touched.password && formik.errors.password
                      // }
                      name={"password"}
                      value={formik.values.password}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div className="input-group mb-3 radio-input">
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel
                        value="admin"
                        control={<Radio />}
                        label="Admin"
                      />
                      <FormControlLabel
                        value="user"
                        control={<Radio />}
                        label="User"
                      />
                    </RadioGroup>
                  </div>

                  <div className="d-grid gap-2">
                    <Button
                      color="primary"
                      variant="contained"
                      fullWidth
                      type="submit"
                    >
                      Register
                    </Button>
                  </div>

                  <div className="my-4">
                    <Link className="text-decoration-none" to="/login">
                      Already have an account ? | Sign in ?
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export default Signup;
