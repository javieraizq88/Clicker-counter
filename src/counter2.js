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

const Display = props => 
<div>
    {props.value}
</div>

const Button = ( props ) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)


const Counter2 = props => {
    const [value, setValue] = useState(10)

  const setToValue = newValue => {
    setValue(newValue)
  }

    //  al hacer click en el izq, suma 1 a la izquierda, manteniendo el n° de la derecha
    // const handleLeftClick = () => {
    //     setClicks({
    //         ...clicks,
    //         left: clicks.left + 1
    //     })
    // }


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
        <Display value={value} />
        <Button handleClick={() => setToValue(1000)} text="thousand" />
        <Button handleClick={() => setToValue(0)} text="reset" />
        <Button handleClick={() => setToValue(value + 1)} text="increment" />
      </div>
    )
}

export default Counter2