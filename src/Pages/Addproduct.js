import React,{useState,useEffect} from "react"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Navigate } from "react-router-dom";

export default function Addproduct(){
  const [name, setname] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")


  let navigate = useNavigate();

const formSubmit = (e) =>{
    axios.post("http://localhost:9000/products",{
    title:name,
    price:price,
    description:description
}
    )
    e.preventDefault()
    navigate('/products')
}


    return(
        <>
            <h1>Add New Product</h1>
            <form className="mt-5 ">
            <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Product Name</label>
            <input type="text" 
            className="form-control" 
            id="exampleFormControlInput1" 
            placeholder="Enter Product Name" 
            value={(e) => setname(e.target.value)}/>
            </div>
            <div className="mb-3">
            <label for="exampleFormControlInput2" className="form-label">Product Description </label>
            <input type="text" 
            className="form-control" 
            id="exampleFormControlInput2" 
            placeholder="Enter Description" 
            value={(e) => setDescription(e.target.value)}/>
            </div>
            <div className="mb-3">
            <label for="exampleFormControlInput3" className="form-label">Product Price</label>
            <input type="text" 
            className="form-control" 
            id="exampleFormControlInput3" 
            placeholder="Enter Price" 
            value={(e) => setPrice(e.target.value)}/>
            </div>
            
            <Link to={'/Products'} type="button" className="btn btn-primary" onClick={formSubmit}>Add New Item</Link>
            
            </form>
            

        </>
    )
}