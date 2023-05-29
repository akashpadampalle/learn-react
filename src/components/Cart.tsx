interface Props{
    items : {id: number, title: string, quantity: number}[],
    onIncreaseQuantity : (index: number) => void;
    onDecreaseQuantity : (index: number) => void;
}

export default function Cart({items, onDecreaseQuantity, onIncreaseQuantity}:Props){
    return (
        <ul>
            {items.map((item, index) => (<li key={index}>
                <h3>{index} {item.title} {item.quantity}</h3>
                <div>
                    <button onClick={() => onIncreaseQuantity(index)}>Increase</button> 
                    <button onClick={() => onDecreaseQuantity(index)}>Decrease</button>
                </div>
            </li>))}
        </ul>
    )
}