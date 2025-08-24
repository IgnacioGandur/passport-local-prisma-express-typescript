import validateChain from "../validateChain.js";
import checkIfUsernameIsAvailable from "../utilities/checkIfUsernameIsAvailable.js";
import { body } from "express-validator";

const regex = /[\w\-/]*/;

const validationChain = [
    body("username")
        .trim()
        .notEmpty()
        .withMessage("The username field can't be empty.")
        .matches(regex)
        .withMessage("The username field can only contain letters, numbers and hyphens.")
        .isLength({ min: 2, max: 40 })
        .withMessage("The username field should be between 2 and 40 characters long.")
        .bail()
        .custom(checkIfUsernameIsAvailable)
    ,
    body("password")
        .trim()
        .notEmpty()
        .withMessage("The password field can't be empty.")
];

const validateUserRegister = validateChain(validationChain);

export default validateUserRegister;


