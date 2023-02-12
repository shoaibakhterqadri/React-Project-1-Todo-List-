import React, { useState } from 'react'
import index from './../index'

export default function TodoList() {
  const [activity,setActivity]=useState("")
  const [listData,setListData]=useState([]);
function addActivity(){
  setListData((listData)=>{
    const updatedList=[...listData,activity];
    setActivity("");
    return updatedList;
  })
}

function removeActivity(i){
  const updatedListData=listData.filter((ele,id)=>{
    return i!=id;
  })

  setListData(updatedListData)
}

function removeAllData(){
  setListData([])
}


  return (
    <>
   <div className="container header" style={{textAlign:"center"}}>
   <h1 className="display-3" >Todo List</h1>
   <div className="input-group mb-3 mt-3 input container">
  <input type="text" class="form-control" placeholder="Enter your list" value={activity} onChange={(e)=>setActivity(e.target.value)} aria-label="Recipient's username" aria-describedby="button-addon2" />
  <button className="btn btn-success" onClick={addActivity} type="button" id="button-addon2">ADD</button>
</div>
   <h2>Here is your List :{")"}</h2>
   {listData!=[] && listData.map((data,i)=>{
return(
  <>
  <div key={i}>
  <div className="input-group mb-3 mt-3 input container">
  <input type="text" class="form-control"  value={data} aria-label="Recipient's username" aria-describedby="button-addon2" />
  <button className="btn btn-danger" onClick={()=>removeActivity(i)} type="button" id="button-addon2">DELETE</button>
</div>
    
  </div>
  </>
)
   })}
   {listData.length>1 && <button className="btn btn-primary" onClick={removeAllData} type="button" id="button-addon2">DELETE ALL DATA</button>}
   
   </div>
    </>
  )
}
