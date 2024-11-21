
const Button = ({ type, disabled, onClick, text, className }) => {
    return(
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={className}
        >
            {text}
        </button>
    );
};

export default Button;