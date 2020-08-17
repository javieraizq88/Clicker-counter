import React, { useState } from "react"

const History = (props) => {
    /* si no se hace click, el state esta vacío */
    if (props.allClicks.length === 0) {
        return (
            <div>
                the app is used by pressing the buttons
            </div>
        )
    }

    return (
        <div>
            button press history: {props.allClicks.join(' ')}
        </div>
    )
}

const Button = ({ onClick, text }) => (
    <button onClick={onClick}>
        {text}
    </button>
)


const Counter2 = props => {
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [allClicks, setAll] = useState([])


    const handleLeftClick = () => {
        setAll(allClicks.concat('L'))
        setLeft(left + 1)
    }

    //  al hacer click en el izq, suma 1 a la izquierda, manteniendo el n° de la derecha
    // const handleLeftClick = () => {
    //     setClicks({
    //         ...clicks,
    //         left: clicks.left + 1
    //     })
    // }


    const handleRightClick = () => {
        setAll(allClicks.concat('R'))
        setRight(right + 1)
    }
    //  al hacer click en el der, suma 1 a la derecha, manteniendo el n° de la izquierda
    // {... clicks} crea un objeto con copias de los valores de los campos de clicks del objeto
    // const handleRightClick = () => {
    //     setClicks({
    //         ...clicks,
    //         right: clicks.right + 1
    //     })
    // }

    return (
        <div>
            <div>
                {left}
                <Button onClick={handleLeftClick} text='left' />
                <Button onClick={handleRightClick} text='right' />
                {right}
                <History allClicks={allClicks} />
            </div>
        </div>
    )
}

export default Counter2