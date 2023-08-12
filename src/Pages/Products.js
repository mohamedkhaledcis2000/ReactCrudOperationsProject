import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import swal from 'sweetalert';
export default function Products(){
  const [product,setProduct]=useState([])
  useEffect(()=>{
    fetch('http://localhost:9000/products')
    .then((res)=>res.json())
    .then((data)=>{
      // console.log(data)
      setProduct(data)
    })
  })

  const getData = () => {
    fetch("http://localhost:9000/products").then((response) => response.json())
      .then((result) => {
        setProduct(result)
      })
  }

  const deleteProduct = (productId) => {
    fetch(`http://localhost:9000/products/${productId}`,{
      method:'DELETE',
    })
    .then((result) => {
        // alert("Record deleted")
        getData()
      })
  }
    return(
        <>
        <h1>Products Page</h1>
        <Link to="/products/add" className="btn btn-success mt-3">Add New Product</Link>
        <table className="table table-striped mt-4">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Description</th>

      <th scope="col">Edit</th>

    </tr>
  </thead>
  <tbody>
    {
      product.map((p)=>{
        return(
      <tr key={product.id}>
      <th scope="row">{p.id}</th>
      <td>{p.id}</td>
      <td>{p.title}</td>
      <td>{p.price}</td>
      <td>{p.description}</td>
      <td><Link to={`/products/edit/${p.id}`} className="btn btn-primary btn-sm ml-3">Edit</Link>
      <Link to={`/products/${p.id}`} className="btn btn-primary btn-sm left-3">View</Link>
      <button className="btn btn-danger btn-sm left-3" onClick={(e) => { deleteProduct(p.id) }}>Delete</button></td>
      </tr>)}
      )
        }
   
  </tbody>
</table>
       

        </>
    )
}