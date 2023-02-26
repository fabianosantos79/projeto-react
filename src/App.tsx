import { Header } from "./components/Header";
import { Photo } from "./components/Photo";
import React, { useState } from "react";

const App = () => {

  let name:string = 'fabiano';
  let lastName: string = 'santos'
  let n1: number = 10;
  let n2: number = 3;
  let link: string = 'http://google.com'
  let n: number = 0;

  function soma(n1:number, n2:number):number {
    return n1+n2;
  }

  const [nameUser, setNameUser] = useState('Fabiano');  
  const [num, setNum] = useState(0);
  const [nameInput, setNameInput] = useState('');

  const minus = () => {
    setNum(num - 1)
  }

  const more = () => {
    setNum(num + 1)
  }

  const handleClickButton = () => {
    setNameUser('Viviane');
  }

  const handleInputName = (event : React.ChangeEvent<HTMLInputElement>) => {
    setNameInput(event.target.value);
  }

  return(
    <div>
      <Header title="Este é um exemplo"/>
      <Header title="Novo exemplo"/>
      <Header title="Futuro exemplo"/>
      <Photo url="" legend="Imagem do Google2">
        <img src="http://www.google.com/google.jpg" alt="" />
      </Photo>


      Olá, {`${name.toLocaleUpperCase()} ${lastName.toLowerCase()}`} tudo bem?<br />
      A Soma é: {soma(n1, n2) + n2}<br />
      O link do <a href={link}>Google</a>
      <hr />
      Nome:
      <input type='text' onChange = { handleInputName } />
      o nome dele é: { nameInput }
      <hr />
      <hr />
      <hr />
    Meu nome é {nameUser}
    <br />
      <button onClick={ handleClickButton }>
        Clique aqui
      </button>
      <hr />
      <hr />
      <button onClick = {minus}>-</button>
      <p>{num}</p>
      <button onClick = {more}>+</button>
    </div>
    
  )
}

export default App;