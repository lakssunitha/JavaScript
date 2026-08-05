import { useContext } from "react";
import FormContext from "../context/FormContext";

function ContComponent3() {

    const {formData, handleChange}=useContext(FormContext);

    return(
        <div className="card">
            <h2>Component 3</h2>
            <form className="form">

                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  />

                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                  />

                  <input
                    type="text"
                    name="mobile"
                    placeholder="Mobile Number"
                    value={formData.mobile}
                    onChange={handleChange}
                  />

                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                  />

                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />

                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                  />

                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    style={{color: formData.gender === "" ? "gray" : "#333"}}
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                    </select>

                    <textarea
                     name="address"
                     placeholder="Address"
                     value={formData.address}
                     onChange={handleChange}
                     />

                    <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleChange}
                    />
            </form>

            <h3>Live Preview</h3>

            <p><strong>Name:</strong> {formData.firstName} {formData.lastName}</p>

            <p><strong>Email:</strong> {formData.email}</p>

            <p><strong>Mobile:</strong> {formData.mobile}</p>

            <p><strong>DOB:</strong> {formData.dob}</p>

            <p><strong>Gender:</strong> {formData.gender}</p>

            <p><strong>Address:</strong> {formData.address}</p>

            <p><strong>City:</strong> {formData.city}</p>
        </div>
    );
    
}

export default ContComponent3;






