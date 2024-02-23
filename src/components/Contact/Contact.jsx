import "./Contact.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const Contact = ({ submitButtonRef }) => {
  const initialValues = {
    firstName: "",
    email: "",
    phone: "",
    address: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Full Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    address: Yup.string().required("Address is required"),
  });

  const onSubmit = (values, { resetForm }) => {
    // Handle form submission logic here
    console.log(values);
    resetForm();
  };

  return (
    <div className="contact_container">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="contact_titles" ref={submitButtonRef}>
            <h1>
              Contact us now and we will help choose the right plan for you
            </h1>
            <p>
              Please note that the offers available for new subscribers only
            </p>
          </div>
          <div class="row">
            <div class="col">
              <Field
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Name*"
                class="form-control"
              />
              {/* <ErrorMessage name="firstName" component="div" /> */}
            </div>
            <div class="col">
              <Field
                type="text"
                id="email"
                name="email"
                placeholder="Email address"
                class="form-control"
              />
              {/* <ErrorMessage name="email" component="div" /> */}
            </div>
          </div>
          <div class="row">
            <div class="col">
              <Field
                type="text"
                id="phone"
                name="phone"
                placeholder="Mobile number*"
                class="form-control"
              />
              {/* <ErrorMessage name="phone" component="div" /> */}
            </div>
            <div class="col">
              <Field
                type="text"
                id="address"
                name="address"
                placeholder="Home address"
                class="form-control"
              />
              {/* <ErrorMessage name="address" component="div" /> */}
            </div>
          </div>

          <div className="contact_btn">
            <button type="submit">Submit</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Contact;
