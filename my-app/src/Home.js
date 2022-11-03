import React from "react";
import { useState } from "react";
import MealCard from "./MealCard";


const Home = () => {
    const [meal, setMeal] = useState([])
    const [input, setInput] = useState('')

    const handleFetchMeal = async () => {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
        const json = await response.json();
        setMeal([...json.meals]);
        console.log(meal)
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div>
                <input type='text' placeholder="SEARCH MEAL" value={input} onChange={(e) => setInput(e.currentTarget.value)}/>
                <button onClick={handleFetchMeal}>Search Meal</button>
            </div>
            <div>
                {
                    meal.map(dishes => <MealCard key={dishes.idMeal} dishes={dishes}/>)
                }
            </div>
        </div>
      );
}
 
export default Home;