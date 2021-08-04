import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import { useState,useEffect } from 'react'
import axios from 'axios';

export default function SeaFood(){

    const[meals,setMeals]=useState([])
    
    useEffect(()=>{
        axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
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
                <td><img src={meal.strMealThumb} style={{maxHeight:'100px'}}></img></td>
                <td>{meal.strMeal}</td>
            </tr>

        )
    })

    return(
        <div>
            <h1>SeaFood</h1>
            <div className="row justify-content-center">
            <div className="col-md-8">
            <table className="table">
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