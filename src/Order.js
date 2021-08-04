import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import { useState,useEffect } from 'react'
import axios from 'axios';
import swal from 'sweetalert';
import './Order.css';

export default function Order(){

    const [username,setusername]=useState('')
    const [contact,setcontact]=useState('')
    const [order,setorder]=useState('')
    const [price,setprice]=useState('')
    const [allOrders,setallOrders]=useState([])
    
    function handleSelectCategory(event) {
        setCategorySelected(event.target.value)
        console.log("thiss1" + event.target.value)
          

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
        setorder(event.target.value);
    }


    function createOrder(event){
        event.preventDefault();

        console.log(JSON.parse(localStorage.getItem('mealsPrices')));
        
        var tempPrice=500;

        if((JSON.parse(localStorage.getItem('mealsPrices')))!=null){
            (JSON.parse(localStorage.getItem('mealsPrices'))).map((item)=>{
            console.log(item.name);
            if(item.name==order){
                console.log("Price Found")
                tempPrice = (item.price)
            }
            else{
                console.log("Price Not Found")
            }
        })
        }

        var ordd={name:username,contact:contact,orders:[order],price:tempPrice}
        swal({
            title: "Confirm Order?",
            text: "Order : "+order+"\nAmount : "+tempPrice,
            buttons: true,
            dangerMode: false,
          })
          .then((willDelete) => {
            if (willDelete) {
              setallOrders([...allOrders,ordd])
              swal("Order Confirmed!", {
                icon: "success",
              });
            } else {
              swal("Order Cancelled");
            }
          });
               }
    

    function reset(){
        setusername('')
        setcontact('')
        setorder('')
        setprice('')
    }

    const allOrdersss = allOrders.map((or,index)=>{
        return(
        <tr>
            <td>{index+1}</td>
            <td>{or.name}</td>
            <td>{or.contact}</td>
            <td>{or.orders}</td>
            <td>{or.price}</td>
        </tr>
    )})


    const[category,setCategory]=useState([])
    const[categorySelected,setCategorySelected]=useState('')
    const[meals,setMeals]=useState([])
    
    useEffect(()=>{
        axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(res=>{
            setCategory(res.data.categories)
        })
        .catch(err=>{console.log(err)})
    },[]
    )

    const categories = category.map((cat,index)=>{
        if(index==0){
            return(
                <option value={cat.strCategory} selected>{cat.strCategory}</option>
            ) 
        }
        else{
            return(
                <option value={cat.strCategory}>{cat.strCategory}</option>
             )
        }
    })

    const mealss = meals.map((meal,index)=>{
        if(index==0){
            <option value={meal.strMeal} selected>{meal.strMeal}</option>
        }
        else{
            return(
                <option value={meal.strMeal}>{meal.strMeal}</option>
            )
        }
    })

    console.log("1"+JSON.parse(localStorage.getItem('mealsPrices')))

    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h1 style={{color:"yellow",margin:"20px",fontWeight:"bold"}}>Order Now!</h1> 
                    <div className="order-form">   
                        <input data-testid="user-input" type="text" placeholder="Name" className='form-control' value={username} onChange={(e)=>{setusername(e.target.value)}}/>
                        <input data-testid="contact-input" type="tel" placeholder="Contact" className='form-control' value={contact} onChange={(e)=>{setcontact(e.target.value)}}/>
                        <select className="form-select" value={categorySelected} onChange={handleSelectCategory}>
                            <option value="none" selected disabled>
                                Select Category
                            </option>
                            {categories}
                        </select>
                        <select className="form-select" value={order} onChange={handleSelectMeal}>
                           <option value="none" selected disabled hidden>
                                Select Meal
                            </option>
                            {mealss}
                        </select>
                    
                        <button data-testid="button-submit" className="btn btn-lg btn-warning" onClick={createOrder}>ORDER!</button>
                        <button data-testid="button-reset" className="btn btn-lg btn-neutral" onClick={reset}>Reset</button>
                    </div>
                </div>
            
                <div className="col-md-10">
                    <h1 style={{margin:"40px"}}>All Orders</h1>
                    <table className="table table-dark table-striped table-bordered">
                        <thead className="thead">
                            <tr>
                                <th>Sr.no.</th>
                                <th>Name</th>
                                <th>Contact</th>
                                <th>Orders</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allOrdersss}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}