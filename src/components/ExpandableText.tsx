import { useState } from "react";

interface Props{
    children: string;
    maxChar ?: number;
    onClick : () => void;
}

export default function ExpandableText({children, maxChar=100, onClick}:Props){

    const [isExpanded, setExpandetion] = useState(false);

    const handleClick = () => {
        setExpandetion(!isExpanded);
        onClick();
    }

    return (<p>
        {(isExpanded) ? children : children.slice(0, maxChar) + '...'}
        <button onClick={handleClick}>{(isExpanded) ? 'shrink' : 'expand'}</button>
    </p>)
}