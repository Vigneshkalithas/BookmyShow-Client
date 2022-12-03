import React from "react";
import { useNavigate, Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
// import { useContext } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";
// import { Config } from "./Config";
// import { toast } from "react-toastify";
import Button from "@mui/material/Button";

function Login() {
  const navigate = useNavigate();

  const validationSchema = yup.object({
    email: yup.string("Enter email").email().required("Email is required"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: validationSchema,

    onSubmit: async (values) => {
      // try {
      //   const adminlogin = await axios.post(`${Config.api}/adminlogin`, values);
      //   if (adminlogin.data.error) {
      //     toast.error("Error: " + adminlogin.data.error);
      //   } else {
      //     toast.success(adminlogin.data.message);
      //     localStorage.setItem("react-app-token", adminlogin.data.token);
      //     navigate("/");
      //   }
      // } catch (error) {
      //   console.log(error);
      // }
    },
  });
  return (
    <>
      <div className="container login-container">
        <section className="forget text-center">
          <div className="content-login">
            <h4 className="loginhead">Signup</h4>
            <div>
              <form onSubmit={formik.handleSubmit}>
                <div className="form-box">
                  <div className="input-group mb-3">
                    <TextField
                      id="outlined-basic"
                      label="email"
                      variant="outlined"
                      size="small"
                      sx={{ width: "52ch" }}
                      type={"text"}
                      error={
                        formik.touched.email && Boolean(formik.errors.email)
                      }
                      helperText={formik.touched.email && formik.errors.email}
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
                      helperText={
                        formik.touched.password && formik.errors.password
                      }
                      name={"password"}
                      value={formik.values.password}
                      onChange={formik.handleChange}
                    />
                  </div>

                  <div className="d-grid gap-2">
                    <Button
                      color="primary"
                      variant="contained"
                      fullWidth
                      type="submit"
                    >
                      Submit
                    </Button>
                  </div>

                  <div className="my-4">
                    <Link className="text-decoration-none" to="/signup">
                      Create an account | Sign up ?
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

export default Login;
