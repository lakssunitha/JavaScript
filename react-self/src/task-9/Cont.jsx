import { useState } from "react";
import "./Cont.css"
import ContComponent1 from "./ContComponent1";
import FormContext from "../context/FormContext";

function Cont () {
    
    const [theme, setTheme]=useState("light");

    const [formData, setFormData]=useState({
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
    });

    const handleChange=(e)=>{
        const {name, value}=e.target;

        setFormData((prev)=>({
            ...prev,
            [name]: value,
        }));
    };

    const toggleTheme=()=>{
        setTheme(theme === "light" ? "dark" : "light");
    };

    return(
        <FormContext.Provider
          value={{
            formData,
            handleChange,
            theme,
            toggleTheme,
          }}
        >
            <div className={`app ${theme}`}>
                <h1>Context Form</h1>

                <button className="themeBtn" onClick={toggleTheme}>
                    Toggle Theme
                </button>

                <ContComponent1 />
            </div>
        </FormContext.Provider>
    );
}

export default Cont;