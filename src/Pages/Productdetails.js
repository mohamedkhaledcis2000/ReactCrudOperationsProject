import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function Productdetails(){
    const [product,setProduct] = useState();
    let {productId} = useParams();
    useEffect(()=>{
        fetch(`http://localhost:9000/products/${productId}`)
        .then((res)=>res.json())
        .then((product)=>{
            setProduct(product);
            console.log(product.title)
        })
    },[])
    return(
        
        <>
        {product && 
        <div className="card" Style="width: 50rem;text-align:center; margin:auto">
            <div className="card-body">
            <h5 class="card-title">{product.title}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">{product.price}</h6>
            <p class="card-text">{product.description}</p>

            </div>
      </div>
        }

        </>
    )
}