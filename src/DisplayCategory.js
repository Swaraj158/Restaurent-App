import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import { useState,useEffect } from 'react'
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import './DisplayCategory.css';

export default function DisplayCategory(props){

    const [meals,setMeals]=useState([])

    const location = useLocation();
    
    const category = location.state.categoryName

    useEffect(()=>{
        axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c='+category)
        .then(res=>{
            console.log(res.data)
            setMeals(res.data.meals)
        })
        .catch(err=>{console.log(err)})
    },[]
    )

    const cat = meals.map((meal,index)=>{
        return(
            <tr>
                <td>{index+1}</td>
                <td><img src={meal.strMealThumb} style={{maxHeight:'200px'}}></img></td>
                <td>{meal.strMeal}</td>
            </tr>

        )
    })

    return(
        <div className="container">
            <h1 style={{margin:"50px"}}>{category} Menu</h1>
            <div className="row justify-content-center">
            <div className="col-10">
            <table className="table table-dark table-striped table-bordered">
                <thead className="thead">
                    <tr>
                        <th>Sr.no.</th>
                        <th>Image</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody className="tbody">
                    {cat}
                </tbody>
            </table>
            </div>
            </div>
        </div>
    )
}