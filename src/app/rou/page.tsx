"use client";
import Link from 'next/link';
import { useRouter } from "next/navigation";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function About() {
  const Router = useRouter()
  return (
    <>
      <div className='container text-center'>
          <div className='col'>
            <h1 className='text-center'>About Us <button style={{marginTop: '20px'}} className='btn btn-outline-info gap-2 mb-4' onClick={() => Router.push("/")}>Go back</button></h1>
          </div>
          <div className='col'>
            <img src="https://images.unsplash.com/photo-1717244517670-4579a3a475c5?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  alt="sun set" width={800} 
              height={500} />
          </div>
         
        </div>
    </>
  );
}