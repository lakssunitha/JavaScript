export const validateForm = (values) => {
    const errors = {};

    //firstname
    if (!values.firstName.trim())
        errors.firstName = "First name is required";
    else if (values.firstName.length < 3)
        errors.firstName = "Minimum 3 characters"; 

    //lastname
    if (!values.lastName.trim())
        errors.lastName = "Last name is required";

    //email
    if (!values.email.trim())
        errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(values.email))
        errors.email = "Invalid email address";

    //mobile
    if (!values.mobile)
        errors.mobile = "Mobile number is required";
    else if (!/^[6-9]\d{9}$/.test(values.mobile))
        errors.mobile = "Invalid mobile number";

    //password
    if (!values.password)
        errors.password = "Password is required";
    else if (values.password.length < 6)
        errors.password = "Minimum 6 characters";

    //confirm password
    if (values.confirmPassword !== values.password)
        errors.confirmPassword = "Passwords do not match";

    //dob
    if (!values.dob)
        errors.dob = "Select Date of Birth";

    //gender
    if (!values.gender)
        errors.gender = "Select Gender";

    //address
    if (!values.address.trim())
        errors.address = "Address is required";
    else if (values.address.length < 10)
        errors.address = "Minimum 10 characters";

    //city
    if (!values.city.trim())
        errors.city = "City is required";

    return errors;
};