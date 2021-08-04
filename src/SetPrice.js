import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import { useState,useEffect } from 'react'
import axios from 'axios';
import swal from 'sweetalert';
import './SetPrice.css'

export default function SetPrice(props){

    const [categories,setCategories] = useState([])
    const [categorySelected,setCategorySelected] = useState('')

    const [meals,setMeals] = useState([])
    const [mealSelected,setMealSelected] = useState('')

    const [priceSelectedMeal,setPriceSelectedMeal] = useState()
     
    if(localStorage.getItem('mealsPrices')==null){
        console.log("No Previous Prices Data found")
        localStorage.setItem('mealsPrices',JSON.stringify([{category:null,name:null,price:null}]))
    }

    function handleSelectCategory(event) {
        setCategorySelected(event.target.value)
       
        axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c='+event.target.value)
        .then(res=>{
            console.log(res.data.meals)
            
            if(res.data.meals==null){
                swal("Try Again!")
            }
            else{
                setMeals(res.data.meals)
            }
        })
        .catch(err=>{console.log(err)})
    }

    function handleSelectMeal(event) {
        setMealSelected(event.target.value)
    }

    useEffect(()=>{
        axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(res=>{
            setCategories(res.data.categories)
        })
        .catch(err=>{console.log(err)})
    },[]
    )

    const allCategories = categories.map((cat,index)=>{
        return(
           <option value={cat.strCategory}>{cat.strCategory}</option>
        )
    })

    const allMeals = meals.map((meal,index)=>{
        return(
           <option value={meal.strMeal}>{meal.strMeal}</option>
        )
    })

    function setprice(event){
        
        var temp = JSON.parse(localStorage.getItem('mealsPrices'));
        if(temp!=null){
            if(temp[0].category==null){
                temp =[];
            }
            temp.push({category:categorySelected,name:mealSelected,price:parseInt(priceSelectedMeal)});
            localStorage.setItem('mealsPrices',JSON.stringify(temp));
        }
        else{
            localStorage.setItem('mealsPrices',JSON.stringify(temp));
        }
        setPriceSelectedMeal(0);
}

    function reset(event){
        setPriceSelectedMeal(0);
    }

    function handlePriceInput(event){
        setPriceSelectedMeal(event.target.value)
    }

    const temp1 = (JSON.parse(localStorage.getItem('mealsPrices')));
    console.log(JSON.parse(localStorage.getItem('mealsPrices')))
    const definedPrices = JSON.parse(localStorage.getItem('mealsPrices')).map((item,index)=>{
         return(
             <tr>
                 <td>{index+1}</td>
                 <td>{item.category}</td>
                 <td>{item.name}</td>
                 <td>{item.price}</td>
             </tr>
         )});




    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h1 style={{color:"yellow",margin:"20px",fontWeight:"bold"}}>Set Prices</h1>     
                    <select className="form-select" value={categorySelected} onChange={handleSelectCategory}>
                        <option value="none" selected disabled>
                            Select Category
                        </option>
                        {allCategories}
                    </select>
                    <select className="form-select" value={mealSelected} onChange={handleSelectMeal}>
                        <option value="none" selected disabled>
                            Select Meal
                        </option>
                        {allMeals}
                    </select>
                    <input className="form-control" type="number" placeholder="Price" className='form-control' value={priceSelectedMeal} onChange={handlePriceInput}/>
            
                    <button className="btn btn-lg btn-success" onClick={setprice}>Set Price</button>
                    <button className="btn btn-lg btn-neutral" onClick={reset}>Reset</button>
                </div>
           </div>

           <div className="row justify-content-center">
                <div className="col-md-10">
                    <h1 style={{margin:"30px"}}>Defined Prices</h1>
                    <table className="table table-dark table-striped table-bordered">
                        <thead className="thead">
                            <tr>
                                <td>Sr.no.</td>
                                <td>Category</td>
                                <td>Meal</td>
                                <td>Price</td>
                            </tr>
                        </thead>
                        <tbody className="tbody">
                                {definedPrices}
                        </tbody>
                    </table>
                </div>
           </div>
        </div>
    )
}