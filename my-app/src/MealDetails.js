import React from "react";
import {useParams} from 'react-router-dom';
import { useEffect, useState } from "react";

const MealDetails = () => {
    const [meal, setMeal] = useState({})
    const [ id ] = useParams('id')

    const fetchMeal = async () => {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        const json = await res.json()
        setMeal({...json.meals})
    }

    useEffect(() => {
        fetchMeal();
    }, [])
    return (<div>{}</div>  );
}
 
export default MealDetails;