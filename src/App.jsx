
import { Header } from "./Components/Header/Header"
import './App.css'
import { Main } from "./Components/Main/Main"
import Footer from "./Components/Footer/Footer"
import { PokemonList } from "./Components/PokemonList/PokemonList"


//Para usar JS se ingresa entre llaves {}
function App() {
  

  return (
    <div className="App">
      {
        /*
        <Header />
        <Main />
        <Footer />
        <PokemonList name={"Pepito"} />
        */
      }
       <PokemonList />
    </div>
  )
}

export default App
