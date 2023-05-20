
import { useState } from 'react';

import './style.css';


const Form = () => {
  const [nome, setNome] = useState('');
  const [altura, setAltura] = useState(0);
  const [peso, setPeso] = useState(0);
  const [resultadoIMC, setResultadoIMC] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    const alturaMetros = altura / 100;
    const imc = peso / (alturaMetros * alturaMetros);

    if(imc < 18.5) {
      setResultadoIMC('Magreza');
    } else if (imc >= 18.5 && imc < 25){
      setResultadoIMC('Normal');
    } else if(imc >= 25 && imc < 30) {
      setResultadoIMC('Sobrepeso');
    } else {
      setResultadoIMC('Obesidade');
    }

    console.log(imc)
  }

  return (
    <>
      <form>
        <label htmlFor="name">Digite seu nome</label>
        <input 
          type="text" 
          id="name"
          onChange={event => setNome(event.target.value)}
          required
        />

        <label htmlFor="altura">Digite sua altura em cm</label>
        <input 
          type="number" 
          id="altura" 
          onChange={event => setAltura(parseInt(event.target.value))} 
          required
        />

        <label htmlFor="peso">Digite seu peso</label>
        <input 
          type="number" 
          id="peso" 
          onChange={event => setPeso(parseInt(event.target.value))} 
          required
        />

        <button type='submit' onClick={handleSubmit}>Calcular</button>

      </form>
      {resultadoIMC && (
        <p>Olá {nome} o resultado do seu imc é {resultadoIMC}</p>
      )}
    </>
  )
}

export default Form;