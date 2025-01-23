import List from './List.jsx'
function App() {
    const fruits = [
        { id: 1, name: "jablko", calories: 80 },
        { id: 2, name: "banan", calories: 120 },
        { id: 3, name: "pomarancza", calories: 60 },
        { id: 4, name: "kokos", calories: 170 },
        { id: 5, name: "durian", calories: 78 }];
    const vegetables = [
        { id: 6, name: "brokul", calories: 62 },
        { id: 7, name: "pomidor", calories: 59 },
        { id: 8, name: "dynia", calories: 76 },
        { id: 9, name: "marchewka", calories: 40 },
        { id: 10, name: "kapusta", calories: 31 }];

    return (<>
        {fruits.length > 0 && <List items={fruits} category="owoce"/>}
        {vegetables.length > 0 && <List items={vegetables} category="warzywa" />}
    </>);
}

export default App
