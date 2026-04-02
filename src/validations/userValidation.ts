import { body } from "express-validator";

const userValidationUpdate = [
    body("name")
        .notEmpty().withMessage("Name is required")
        .isLength({ min: 3 }).withMessage("Name must be at least 3 characters long"),
    body("email")
        .notEmpty().withMessage("Email is required")
        .isEmail().withMessage("Email is invalid"),
]


const userValidation = [
    ...userValidationUpdate,
    body("password")
        .notEmpty().withMessage("Password is required")
        .isLength({ min: 6 }).withMessage("Password must be at least 6 characters long"),
]

export {
    userValidation,
    userValidationUpdate
}
