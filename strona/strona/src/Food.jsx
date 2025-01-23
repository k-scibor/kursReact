
function Food() {

    const food1 = "Jablko";
    const food2 = "Gruszka";

    return (
        <ul>
            <li>Ananas</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>);
}

export default Food;