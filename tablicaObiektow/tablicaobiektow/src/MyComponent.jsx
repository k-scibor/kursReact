import React, { useState } from 'react';

function MyComponent() {
    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleAddCar() {

        const newCar = {
            year: carYear,
            make: carMake,
            model: carModel
        };
        setCars(cars => [...cars, newCar]);
    }

    function handleRemoveCar(index) {

    }

    function handleYearChange(event) {
        setCarYear(event.target.value);
    }

    function handleMakeChange(event) {
        setCarMake(event.target.value);
    }

    function handleModelChange(event) {
        setCarModel(event.target.value);
    }

    return (<div>
        <h2>Lista samochodow</h2>
        <ul>
            {cars.map((car, index) =>
                <li key={index }>
                    {car.year} {car.make} {car.model }
                </li>)}
        </ul>
        <input type="number" value={carYear} onChange={handleYearChange} /><br/>
        <input type="text" value={carMake} onChange={handleMakeChange}
            placeholder="Wprowadz marke samochodu" /><br />
        <input type="text" value={carModel} onChange={handleModelChange}
            placeholder="Wprowadz model samochodu" /><br />
        <button onClick={handleAddCar }>Dodaj samochod</button>
    </div>);
}

export default MyComponent;