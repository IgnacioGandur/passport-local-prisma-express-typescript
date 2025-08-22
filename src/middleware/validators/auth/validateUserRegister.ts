import validateChain from "../validateChain.js";
import isUsernameAvailable from "../utilities/isUsernameAvailable.js";
import { body } from "express-validator";

const regex = /\w-/;

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
        .custom(async (username) => isUsernameAvailable(username, false))
    ,
    body("password")
        .trim()
        .notEmpty()
        .withMessage("The password field can't be empty.")
];

const validateUserRegister = validateChain(validationChain);

export default validateUserRegister;


