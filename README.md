
Summary of my Approach for this Task:  <br/>
**Objective**: Create a Next.js application with at least two pages and implement  <br/>
client-side navigation between them.  <br/>

Install:
1) Set Up a New Next.js Application <br/>
    Initialize the Project:  <br/>
    npx create-next-app@latest myname
    cd my-next-app <br/>


2) Create Pages and Implement Client-Side Navigation  <br/>
    Create Two New Pages:  <br/>
    Product/pages.tsx  <br/>
     rou/pages.tsx  <br/>


3) Integrate Mock API with Next.js  <br/>
Fetch Data in Product/pages.tsx:  <br/>

"use client";
// import Link from 'next/link';
import { useRouter } from "next/navigation";
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Product() {

  const [product,setProduct] = useState([])
  const Router = useRouter()
  
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



Project Structure <br/>
my-next-app/ <br/>
│
├──node_modules <br/>
├──public <br/>
├──src <br/>
│   ├── app  <br/>
│   │   ├── image  <br/>
│   │   ├── product  <br/>
│   │   │ ├── page.tsx  <br/>
│   │   ├── rou  <br/>
│   │   │ ├── page.tsx  <br/> 
│   │   ├── layout.tsx  <br/>
│   │   ├── page.tsx  <br/> 
│   │   ├── style.css <br/>
├──package.json <br/>
├──package-lock.json  <br/>


  
