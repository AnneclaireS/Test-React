import React from "react";
import {useNavigate} from 'react-router-dom'

const MealCard = (props) => {
    const navigate = useNavigate();

    return <div onClick={() => navigate('./mealdetails', {
     state: {
        id: props.idMeal
     }
    })}>
    {/* <img src={props.meal.strMealThumb}/> */}
    <h1>{props.strMeal}</h1>
    </div>
}
 
export default MealCard;