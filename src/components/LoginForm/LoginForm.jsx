import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import s from "./LoginForm.module.css";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const LoginForm = () => {
  const handleSubmit = (values) => {
    console.log("Form values:", values);
  };

  return (
    <div className={s.hero}>
      <div className={s.hero}>
        <div className={s.text}>
          <h2 className={s.login}>Login now!</h2>
          <p className={s.p}>
            {" "}
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className={s.card}>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form className={s.card_cont}>
                <div className={s.form}>
                  <label className={s.label}>
                    <span className={s.label_text}>Email</span>
                  </label>
                  <Field
                    as={TextField}
                    name="email"
                    placeholder="email"
                    className={s.input}
                    variant="outlined"
                    fullWidth
                    required
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className={s.error_message}
                  />
                </div>
                <div className={s.form_control}>
                  <label className={s.label}>
                    <span className={s.label_text}>Password</span>
                  </label>
                  <Field
                    as={TextField}
                    name="password"
                    placeholder="password"
                    type="password"
                    className={s.input}
                    variant="outlined"
                    fullWidth
                    required
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className={s.error_message}
                  />
                  <label className={s.label}>
                    <a href="#" className={s.label_text}>
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className={s.form_control}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    fullWidth
                  >
                    Login
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;