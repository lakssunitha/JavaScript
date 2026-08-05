import { useReducer } from "react";
import "./RegForm.css";
import { formReducer, initialState } from "./RegFormReducer";
import { validateForm } from "./RegFormValidation";
import RegInputField from "./RegInputField";

const RegForm = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const { values, errors } = state;

  const handleChange = (e) => {
    dispatch({ 
        type: "UPDATE_FIELD", 
        field: e.target.name, 
        value: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm(values);

    if (Object.keys(validationErrors).length > 0) {
      dispatch({ 
        type: "SET_ERRORS", 
        payload: validationErrors 
       });
    return;
    }

    dispatch({ 
        type: "SET_ERRORS",
        payload: {},
    });

    dispatch({ type: "SUBMIT_FORM" });

    alert("Registration Successful");
  };

  const handleReset = () => {
    dispatch({ type: "RESET_FORM" });
  };

  return (
    <div className="container">
        <form className="form" onSubmit={handleSubmit}>
      <h2>Registration Form</h2>

      <div className="grid">

        <RegInputField
          label="First Name"
          type="text"
          name="firstName"
          value={values.firstName}
          onChange={handleChange}
          error={errors.firstName}
        />

        <RegInputField
          label="Last Name"
          type="text"
          name="lastName"
          value={values.lastName}
          onChange={handleChange}
          error={errors.lastName}
        />

        <RegInputField
          label="Email"
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          error={errors.email}
        />

        <RegInputField
            label="Mobile"
            type="text"
            name="mobile"
            value={values.mobile}
            onChange={handleChange}
            error={errors.mobile}
        />

        <RegInputField
            label="Password"
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            error={errors.password}
        />

        <RegInputField
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
            error={errors.confirmPassword}
        />

        <RegInputField
            label="Date of Birth"
            type="date"
            name="dob"
            value={values.dob}
            onChange={handleChange}
            error={errors.dob}
        />

        <div className="inputGroup">
            <label>Gender</label>

            <select
                name="gender"
                value={values.gender}
                onChange={handleChange}
            >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>

            {errors.gender && (
                <span className="error">{errors.gender}</span>
            )}
        </div>

        <div className="inputGroup full">
            <label>Address</label>
            <textarea
                name="address"
                value={values.address}
                onChange={handleChange}
            />
            
            {errors.address && (
                <span className="error">{errors.address}</span>
            )}
        </div>

        <RegInputField
            label="City"
            type="text"
            name="city"
            value={values.city}
            onChange={handleChange}
            error={errors.city}
        />
    </div>

        <div className="buttons">
            <button type="submit">Submit</button>
            <button type="button" onClick={handleReset}>
                Reset
            </button>
        </div>
    </form>
</div>
);
};

export default RegForm;