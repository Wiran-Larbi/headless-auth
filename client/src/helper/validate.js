import toast from "react-hot-toast";

/**  validate register */
export async function registerValidate(values) {
    const errors = usernameVerify({}, values);
    passwordVerify(errors, values);
    emailVerify(errors, values);

    return errors;

}


/** validate otp */
export async function otpValidate(values){
    const errors = otpVerify({}, values);
    
    return errors;
}
// *******   Password Validation   **************

/** validate password */
export async function passwordValidate(values){
    const errors = passwordVerify({}, values);

    return errors;
}

/** validate reset password */
export async function resetPasswordValidation(values){
    const errors = passwordVerify({}, values);

    if(values.password !== values.passwordConfirm){
        errors.exist = toast.error("Password not match...!");
    }

    return errors;
}


/** ************************************************* */

/** validate otp */
function otpVerify(errors = {}, values) {
    const isNumeric =(str) =>  /^\d+$/.test(str);
    if (!values) {
        errors.otp = toast.error("Invalid OTP..");
    }else if (!isNumeric(values)) {
        errors.otp = toast.error("OTP must be numeric");
        
    }else if (values.length < 4) {
        errors.otp = toast.error("OTP must be 4 numerics ..");
    }

    return errors;
}

/** validate password */
function passwordVerify(errors = {}, values){

    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    if(!values.password){
        errors.password = toast.error("Password Required...!");
    } else if(values.password.includes(" ")){
        errors.password = toast.error("Wrong Password...!");
    } else if(values.password.length < 8){
        errors.password = toast.error("Password must be more than 4 characters long");
    } else if(!specialChars.test(values.password)){
        errors.password = toast.error("Password must have special character ..");
    }

    return errors;
}



// *******   Username Validation   **************

export async function usernameValidate(values) {
    const errors = usernameVerify({}, values);

    return errors;
}



function usernameVerify(errors = {}, values) {
    if (!values.username) {
        errors.username = toast.error("Username Required .. !");
    }else if (values.username.includes(" ")) {
        errors.username = toast.error("Invalid Username ..!");
    }

    return errors;
}

// *******   Email Validation   ******************

function emailVerify(errors = {}, values) {
    const isValidEmail = (email) => /^[1-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
    if (!values.email) {
        errors.email = toast.error("Email Required .. !");
    } else if (values.email.includes(" ")) {
        errors.email = toast.error("Wrong Email .. !");
    } else if (!isValidEmail(values.email)) {
        errors.email = toast.error("Invalid Email .. !");
    }

    return errors;
}