
interface GameObj {
    id: number;
    player: {name: string}
}

interface Props{
    game: GameObj;
    onClick: () => void;
}

export default function Game({game, onClick}: Props){
    return (
        <>
        <h3>{game.player.name}</h3>
        <p>{game.id}</p>
        <button onClick={onClick}>click to change name</button>
        </>
    )
}