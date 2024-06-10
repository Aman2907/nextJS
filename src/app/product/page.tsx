
"use client";
// import Link from 'next/link';
import { useRouter } from "next/navigation";
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function Product() {

  const [product,setProduct] = useState([])
  const Router = useRouter()
  

  // useffect is being used for fetching data from api
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch("https://dummyjson.com/products");
        let data = await response.json();
        console.log(data);
        setProduct(data.products)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-center">Product  <button style={{width:"100px",marginTop: '16px'}} className="btn btn-outline-info gap-2 mb-4" onClick={() => Router.push("/")}>Go back</button></h1>
     
      {
        product.map((item)=>(
          <h3>Name of the Product:  {item.title}, and the Price is : {item.price}</h3>      
        ))
      }
    </div>
  );
}