import { useId } from "react";
import css from "./Formik.module.css";
import { Field, Form, Formik } from "formik";

const initialValues = {
  username: "",
  email: "",
  message: "",
  level: "neutral",
};

const FeedbackForm = () => {
  const nameFieldId = useId();
  const emailFildId = useId();
  const descId = useId();
  const selectId = useId();

  const handleSubmit = (value, actions) => {
    console.log(" value", value);
    actions.resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <label htmlFor={nameFieldId}></label>
        <Field
          id={nameFieldId}
          className={css.item}
          type="text"
          name="username"
        />
        <label htmlFor={emailFildId}></label>
        <Field
          id={emailFildId}
          className={css.item}
          type="email"
          name="email"
        />
        <label htmlFor={descId}></label>
        <Field as="textarea" rows="5" id={descId} name="message" />
        <label htmlFor={selectId}></label>
        <Field as="select" id={selectId} name="level" className={css.select}>
          <option value="good">Good</option>
          <option value="neutral">Neutral</option>
          <option value="bad">Bad</option>
        </Field>
        <button className={css.btn} type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
};
export default FeedbackForm;
