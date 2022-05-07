import React from 'react';
import { useState } from "react"

type ContainerProps = {
    text: string,
    test?: string, // не обязательный, отмечен - ?
}

export const ContainerBox = ({ text, test }: ContainerProps) => {
    const [count, setCount] = useState(0);

    const handleClick = (e: React.MouseEvent<HTMLDivElement>): void => {
        setCount(count + 1);

        console.log(`DATASET.COUNT => ${e.currentTarget.dataset.count}`);
    }

    return (
        <div
            className='container_hover'
            onClick={handleClick}
            data-count={count}
        >
            {text}{` - Count CLICK: ${count}`}
        </div>
    )
}

// export const ContainerBox: React.FC = () => {
//     return (
//         <div className='container' >
//             Test text
//         </div>
//     )
// }


