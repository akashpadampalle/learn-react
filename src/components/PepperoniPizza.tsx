
interface Props{
    pizza: {name: string, toppings: string[]}
    onClick: () => void;
}

export default function PepperoniPizza({pizza, onClick}: Props){
    return <div>
        <h1>Name: {pizza.name}</h1>
        <h3>Toppings</h3>
        <ul>
            {pizza.toppings.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
        <button onClick={onClick}>Add Topping</button>
    </div>
}