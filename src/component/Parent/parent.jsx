import React, { useEffect, useState } from 'react'

export default function Parent() {
  let[count,setCount]=useState(0);
let[username,setUserName]=useState("omar")
 function increasee() {
    setCount(count++)
    
 }
function ChangeName() {
    setUserName("amer")
    
}
useEffect(()=>{
    console.log("Heloo");
},[])
  return<>
  <h1>Function Component</h1>
  <h1>Count:{count}</h1>
  <h1>UserName:{username}</h1>
  <button className='btn btn-info'onClick={increasee} >increase</button>
  <button className='btn btn-danger'onClick={ChangeName}>change Name</button>
</>


}
