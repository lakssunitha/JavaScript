export const initialState = {
    values: {
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        password: "",
        confirmPassword: "",
        dob: "",
        gender: "",
        address: "",
        city: "",
    },

    errors: {},

    submitted: false,
};

export const formReducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_FIELD":
            return {
                ...state,
                values: {
                    ...state.values,
                    [action.field]: action.value,
                },
            };

            case "SET_ERRORS":
                return {
                    ...state,
                    errors: action.payload,
                };

        case "SUBMIT_FORM":
            return {
                ...state,
                submitted: true,
            };

        case "RESET_FORM":
            return initialState;

        default:
            return state;
    }
};