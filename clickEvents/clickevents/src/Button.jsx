
function Button() {
    const handleClick = (e) => e.target.textContent = "AUC";

    return (<button onDoubleClick={(e) => handleClick(e)}>Kliknij</button>);
}

export default Button