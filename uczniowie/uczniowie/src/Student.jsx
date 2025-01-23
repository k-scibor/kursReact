
function Student(props) {
    return (
        <div>
            <p>Imie: {props.name}</p>
            <p>Wiek: {props.age}</p>
            <p>Jest uczniem? {props.isStudent ? "Tak" : "Nie"}</p>
        </div>
    );
}
export default Student