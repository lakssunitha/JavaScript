const RegInputField = ({ 
    label, 
    type, 
    name, 
    value, 
    onChange,
    error,
 }) => {
    return (
        <div className="inputGroup">
            <label>{label}</label>

            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
            />
            {error && <span className="error">{error}</span>}
        </div>
    );
};

export default RegInputField;