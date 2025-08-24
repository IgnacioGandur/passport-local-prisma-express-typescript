import { body } from "express-validator";
import validateChain from "../validateChain.js";
import checkIfUserExistsByUsername from "../utilities/checkIfUserExistsByUsername.js";
import checkIfPasswordIsCorrect from "../utilities/checkIfPasswordIsCorrect.js";

const validationChain = [
    body("username")
        .trim()
        .notEmpty()
        .withMessage("The username field can't be empty.")
        .bail()
        .custom(checkIfUserExistsByUsername)
        .bail()
        .custom(checkIfPasswordIsCorrect)
    // NOTE: No need to validate the password in req.body.password since it's validated in the username validation chain.
];

const validateUserLogin = validateChain(validationChain);

export default validateUserLogin;
