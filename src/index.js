import React, { useState } from 'react';
import ReactDOM from 'react-dom'

// El componente que muestra el valor de la calculadora es, por tanto, el siguiente
// El componente solo necesita el contador de campo de props
const Display = ({ counter }) => {
  return (
    <div>{counter}</div>
  )
}

// El controlador de eventos y el texto del botón deben transmitirse al botón mediante accesorios
// accesorios desestructurados para los campos obligatorios y utilizados más cerca de la forma de las funciones de flecha
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)


const App3 = (props) => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter}/>
      <Button
        handleClick={increaseByOne}
        text='plus'
      />
      <Button
        handleClick={setToZero}
        text='zero'
      />     
      <Button
        handleClick={decreaseByOne}
        text='minus'
      />           
    </div>
  )
}

let counter = 1

ReactDOM.render(
  <App3 counter={counter} />, 
  document.getElementById('root')
)