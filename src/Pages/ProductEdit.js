import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Navigate } from "react-router-dom";
export default function ProductEdit(){

    const Navigate = useNavigate()

    // const [product,setProduct] = useState();
    const [name,setName]=useState('');
    const [price,setPrice]=useState('');
    const [description,setDescription]=useState('');

    const [productData, setProductData] = useState({
        name: '',
        price: 0,
        description: ''
    })

    let {productId} = useParams();
    useEffect(()=>{
        fetch(`http://localhost:9000/products/${productId}`)
        .then((res)=>res.json())
        .then((product)=>{
            setProductData({
                ...productData,
                name: product.title,
                price: product.price,
                description: product.description
            })
        })
    }, [productId])

    const formSubmit = (e) =>{
        axios.put(`http://localhost:9000/products/${productId}`,{
        title:name,
        price:price,
        description:description
    }
        )
        e.preventDefault()
        Navigate('/products')

    
    
    }
    return(
        <>
        {productData &&
            <>
              <h1>Edit New Product</h1>
              <form className="mt-5 ">
              <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Product Name</label>
              <input 
              type="text"
              name="name" 
              className="form-control" 
              id="exampleFormControlInput1" 
              placeholder="Enter Product Name" 
              onChange={(e) => setName(e.target.value)}
              value={productData.name}
              />
              </div>
              <div className="mb-3">
              <label htmlFor="exampleFormControlInput2" className="form-label">Product Description </label>
              <input 
              type="text" 
              name="description"
              className="form-control" 
              id="exampleFormControlInput2" 
              placeholder="Enter Description" 
              onChange={(e) => setDescription(e.target.value)}
              value={productData.description}
              />
              </div>
              <div className="mb-3">
              <label htmlFor="exampleFormControlInput3" className="form-label">Product Price</label>
              <input 
              type="number" 
              name="price"
              className="form-control" 
              id="exampleFormControlInput3" 
              placeholder="Enter Price"     
              onChange={(e) => setPrice(e.target.value)}
              value={productData.price}
              />
              </div>
              <button type='submit' onClick={formSubmit} className="btn btn-danger">Update</button>
              </form>
              </>

        }
        </>
    )
}