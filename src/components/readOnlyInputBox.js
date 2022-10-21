const ReadOnlyInputBox = ({ htmlFor, label, type, id, disabled, defaultValue }) => {
    return (
        <div className="col-sm-5">
            <label htmlFor={htmlFor} className="form-label">{label}</label>
            <input type={type} className="form-control" id={id}
                disabled={disabled}
                defaultValue={defaultValue}
            />
        </div>
    )
}

export default ReadOnlyInputBox;
