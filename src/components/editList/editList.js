import { useState } from "react"

const EditList=({newVal,items , itemId,handleUpdate,handleCancel})=>{
    const [updatedVal,setupdatedVal]=useState(newVal)

    const handleChange=(e)=>{
        setupdatedVal(e.target.value)
   }
   
  const handleUpdateClick=(event,itemId)=>{
    event.preventDefault()
    console.log(updatedVal); 
    handleUpdate(itemId,updatedVal)
  
   }
  
   const handleCancelClick=(event,itemId)=>{
    event.preventDefault()
    handleCancel(itemId)
   }
 


return(
    <div className='container-fluid 
    mt-3 w-100
     '>
       <div className="row  ">
        <form className="d-flex  justify-content-start" >
          <input
            type="text"
            className='form-control w-25 '
          value={updatedVal}
        onChange={handleChange}
            />
          <button className='ms-3  btn btn-light' onClick={(event)=>handleUpdateClick(event,itemId)} >Update</button>
    <button className='ms-3  btn btn-light' onClick={(event)=>handleCancelClick(event,itemId)}>Cancel</button>
        </form>
        </div>


</div>
)
}
export default EditList;