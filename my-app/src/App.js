import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import MealDetails from './MealDetails';

function App() {
  return (
    <BrowserRouter> 
    <div className="App">
      <Routes>
       
        <Route path='/' element={<Home />}/>
        <Route path='/' element= {<MealDetails/>}/>
        
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

//Crea app con pagine Home e MealDetails

//Nella home mostriamo:

//-Searchbar con ricerca per nome (URL: www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata)

//La search restituisce elementi cliccabili che reindirizzano alla pagina di dettaglio (URL: www.themealdb.com/api/json/v1/1/lookup.php?i=52772)