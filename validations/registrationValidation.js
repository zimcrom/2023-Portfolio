import * as yup from "yup";
import * as moment from "moment";

const signupSchema = yup.object({
  //firstName
  "001": yup.string().max(30).required("Please enter your first name"),
  //lastName
  "002": yup.string().max(30).required("Please enter your last name"),
  //email
  "003": yup
    .string()
    .email("Please enter a vaild email")
    .max(80, "Please enter your email")
    .required("Please enter your email"),
  // message
  "004": yup
    .string()
    .max(500, "Please keep it short! Under 500 characters would be nice"),
});

export default signupSchema;
