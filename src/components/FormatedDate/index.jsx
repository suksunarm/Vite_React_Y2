const FormateDate = ({children}) => {
    return (
        <div>
            <span className={`text-sm ${isMouseEnter['exp1'] ? "text-primaryTitle": ""}`}>
                {children}
                </span>
        </div>
    )
}

export default FormateDate;