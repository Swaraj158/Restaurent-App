import { useState,useEffect, Component } from 'react'
import axios from 'axios';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './Categories.css';

class Categories extends Component{

    
    constructor(props){
        super(props)

        this.state={
            categories:[],
            anchorEl:null,
            desc:"",
            count:0
        }

        axios.get('https://www.themealdb.com/api/json/v1/1/categories.php').then(res=>{
                console.log("Data Obtained Successfully!")
                this.setState({categories:res.data.categories})
            })
            .catch(err=>{console.log(err)})
        this.imageClick = this.imageClick.bind(this)

        
    }

    
    
    imageClick(category){

        this.setState({count:this.state.count+1})
        console.log(this.state.count + category.strCategory)            
      
        this.props.history.push({
            pathname:"/displayCategory",
            state:{
                categoryName: category.strCategory
            }})   
    }
    

    render(){
        const classes =  makeStyles((theme) => ({
            typography: {
              padding: theme.spacing(2),
            },
          }));
     
        const handleClick = (event,categoryDesc) => {
            console.log(categoryDesc)
            this.setState({anchorEl:event.currentTarget});
            this.setState({desc:categoryDesc})
        };

        const handleClose = () => {
            this.setState({anchorEl:null});
        };

        const open = Boolean(this.state.anchorEl);
        const id = open ? 'simple-popover' : undefined;
  
        var cat = this.state.categories.map((category,index)=>{
            return(
                <tr>
                    <td>{index+1}</td>
                    <td  onClick={()=>{this.imageClick(category)}}><img src={category.strCategoryThumb} style={{maxHeight:'150px'}}></img></td>
                    <td>{category.strCategory}</td>
                    <td>
                    <div>
                    <Button aria-describedby={id} variant="contained" color="primary" onClick={(event)=>{handleClick(event,category.strCategoryDescription)}}>
                        View Description
                    </Button>
                    <Popover
                        id={id}
                        open={open}
                        anchorEl={this.state.anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                        }}
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                        }}
                    >
                        <Typography className={classes.typography} value={this.state.desc}>{this.state.desc}</Typography>
                    </Popover>
                    </div>
                    </td>
                </tr>
    
            )
        })

        return(
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-10">
                        <h1>All Categories</h1>
                        <h4 style={{marginBottom:"50px"}}>Click on Image for category menu</h4>
                      
                                <table className="table table-dark table-striped table-bordered">
                                    <thead className="thead">
                                        <tr>
                                            <th>Sr.no.</th>
                                            <th>Image</th>
                                            <th>Name</th>
                                            <th>Description</th>
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
    
}

export default Categories;

/*
export default function Categories(){

    const history = useHistory()
    const[categories,setCategories]=useState([])
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    useEffect(()=>{
        axios.get('https://www.themealdb.com/api/json/v1/1/categories.php').then(res=>{
            console.log(res.data.categories)
            setCategories(res.data.categories)
        })
        .catch(err=>{console.log(err)})
    },[]
    );

    const imageClick = (category) => {
        console.log("hi")
           
        return(
            history.push({
            path:"/displayCategory",
            state:{
                categoryName: category.strCategory
            }
        })    
        )
    }

    const cat = categories.map((category,index)=>{
        return(
            <tr>
                <td>{index+1}</td>
                <td  onClick={()=>{imageClick(category).bind()}}><img src={category.strCategoryThumb} style={{maxHeight:'100px'}}></img></td>
                <td>{category.strCategory}</td>
                <td>
                <Button
                        variant="contained"
                        color="primary"
                        onClick={(event) => {
                        setAnchorEl(event.currentTarget);
                        }}
                    >
                        Click me for more details
                    </Button>
                    <Popover
                        anchorEl={anchorEl}
                        open={open}
                        id={open ? "simple-popover" : undefined}
                        onClose={() => {
                        setAnchorEl(null);
                        }}
                        transformOrigin={{horizontal: "center",
                        vertical: "top",
                        }}
                        anchorOrigin={{
                        horizontal: "center",
                        vertical: "bottom",
                        }}>
                        {category.strCategoryDescription}
                    </Popover>
                </td>
            </tr>

        )
    })

    return(
        <div>
            <h1>Categories</h1>
            <div className="row justify-content-center">
            <div className="col-md-8">
            <table className="table">
                <thead className="thead">
                    <tr>
                        <th>Sr.no.</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Description</th>
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
}*/