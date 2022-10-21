const InputBox = ({ htmlFor, label, type, id, placeholder, isRequired, defaultValue, name, ...rest }) => {
    return (
        <div className="col-sm-5">
            <label htmlFor={htmlFor} className="form-label">{label}</label>
            <input type={type} className="form-control" id={id}
                placeholder={placeholder}
                required={isRequired}
                name={name}
                defaultValue={defaultValue}
                {...rest}
            />
        </div>
    )
}

export default InputBox;
