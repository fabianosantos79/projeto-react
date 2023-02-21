import { Header } from "./components/Header";

const App = () => {

  let name:string = 'fabiano';
  let lastName: string = 'santos'
  let n1: number = 10;
  let n2: number = 3;
  let link: string = 'http://google.com'

  function soma(n1:number, n2:number):number {
    return n1+n2;
  }

  return(
    <div>
      <Header title="Este é um exemplo"/>
      <Header title="Novo exemplo"/>
      <Header title="Futuro exemplo"/>
      Olá, {`${name.toLocaleUpperCase()} ${lastName.toLowerCase()}`} tudo bem?<br />
      A Soma é: {soma(n1, n2) + n2}<br />
      O link do <a href={link}>Google</a>
    </div>
  )
  
}

export default App;