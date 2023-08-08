import React,{useState,useEffect} from "react"
import { Link } from "react-router-dom";

export default function Addproduct(){
    const [data , setData] = useState([]);
    const [id, setid] = useState("")
  const [name, setname] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const postData = async () => {
    let res = await fetch('http://localhost:9000/products', {
        method:'POST',
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify,
        id,
        price,
        name,
        description

    })
    console.log(res)
}


    return(
        <>
            <h1>Add New Product</h1>
            <form className="mt-5 ">
            <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Product Id</label>
            <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Enter Product Name" onChange={(e) => setid(e.target.value)}/>
            </div>
            <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Product Name</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Product Name" onChange={(e) => setname(e.target.value)}/>
            </div>
            <div className="mb-3">
            <label for="exampleFormControlInput2" className="form-label">Product Description </label>
            <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="Enter Description" onChange={(e) => setDescription(e.target.value)}/>
            </div>
            <div className="mb-3">
            <label for="exampleFormControlInput3" className="form-label">Product Price</label>
            <input type="text" className="form-control" id="exampleFormControlInput3" placeholder="Enter Price" onChange={(e) => setPrice(e.target.value)}/>
            </div>
            
            <Link to={'/Products'} type="button" className="btn btn-primary" onClick={console.log(postData)}>Add New Item</Link>
            
            </form>
            

        </>
    )
}