import {
  useFormik,
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
} from "formik";
import React from "react";
import * as Yup from "yup";
import TextError from "../TextError";

const initialValues = {
  name: "",
  email: "",
  channel: "",
  comments: "",
  address: "",

  //NESTED OBJECTS
  social: {
    facebook: "",
    instagram: "",
  },

  //Array
  phoneNo: ["", ""],
  phNo: [""],
};
const onSubmit = (values) => {
  console.log("Form data", values);
};

//Validation using Yup library**********
const validationSchema = Yup.object({
  name: Yup.string().required("Required!"),
  email: Yup.string().email("Invalid Format").required("Required!"),
  channel: Yup.string().required("Required!"),
});

//Field Level Validation
const validationComments = (values) => {
  let error;
  if (!values) {
    error = "Required";
  }
  return error;
};

const Validations = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      //   validateOnMount
    >
      {(formik) => {
        console.log("Formik props", formik);
        return (
          <Form>
            <h1>Simple Form</h1>

            <div className="form-control">
              <label htmlFor="name">Name</label>
              <Field type="text" id="name" name="name" />
              <ErrorMessage name="name" />
            </div>

            <div className="form-control">
              <label htmlFor="email">E-Mail</label>
              <Field type="email" id="email" name="email" />

              {/* Inline error styling and message by render props method*/}
              <ErrorMessage name="email">
                {(error) => <div className="error">{error}</div>}
              </ErrorMessage>
            </div>

            <div className="form-control">
              <label htmlFor="channel">Channel</label>
              <Field type="text" id="channel" name="channel" />
              <ErrorMessage name="channel" />
            </div>

            <div>
              <label htmlFor="comments">Comments</label>
              <Field
                as="textarea"
                id="comments"
                name="comments"
                validate={validationComments}
              />
              <ErrorMessage name="comments" component={TextError} />
            </div>

            {/* //Render Props Method using with Formik */}
            <div className="form-control">
              <label htmlFor="address">Address</label>
              <Field type="text" id="address" name="address">
                {(props) => {
                  const { field, form, meta } = props;

                  return (
                    <div>
                      <input type="text" id="address" {...field} />
                      {meta.touched && meta.error ? (
                        <h6>{meta.error}</h6>
                      ) : null}
                    </div>
                  );
                }}
              </Field>
            </div>

            <div className="form-control">
              <label htmlFor="facebook">Facebook</label>
              <Field type="text" id="facebook" name="social.facebook" />
            </div>

            <div className="form-control">
              <label htmlFor="instagram">Instagram</label>
              <Field type="text" id="instagram" name="social.instagram" />
            </div>

            <div className="form-control">
              <label htmlFor="primaryNo">Primary phoneNo</label>
              <Field type="text" id="primaryNo" name="phoneNo[0]" />
            </div>

            <div className="form-control">
              <label htmlFor="secondaryNo">Secondary phoneNo</label>
              <Field type="text" id="secondaryNo" name="phoneNo[1]" />
            </div>

            {/* Field Array */}
            <div className="form-control">
              <label>Ph no</label>
              <FieldArray type="text" name="phNo">
                {(props) => {
                  const { form, push, remove } = props;
                  const { values } = form;
                  const { phNo } = values;
                  return (
                    <div>
                      {phNo.map((number, index) => (
                        <div key={index}>
                          <Field type="text" name={`phNo[${index}]`} />
                          {index > 0 && (
                            <button type="button" onClick={() => remove(index)}>
                              -
                            </button>
                          )}
                          <button type="button" onClick={() => push("")}>
                            +
                          </button>
                        </div>
                      ))}
                    </div>
                  );
                }}
              </FieldArray>
            </div>

            <button
              type="submit"
              disabled={!formik.isValid || formik.isSubmitting}
            >
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Validations;
