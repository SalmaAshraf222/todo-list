import EditList from "../components/editList/editList"

const ListItems=({
  allItems,
  items
  ,deleteItemHandler ,toggleComplete
  ,editItem,setItems
})=>{

  
  
const editItemHandler=(any)=>{
  editItem(any)
}

  const handleUpdate=(itemId,updatedVal)=>{
    setItems(allItems.map((item)=>{
      if(item.id===itemId){
        return{...item,text:updatedVal,edit:!item.edit}
      }else{
        return item
      }
     }))
  }

  const handleCancel=(itemId)=>{
    setItems(allItems.map((item)=>{
      if(item.id===itemId){
        return{...item,edit:false}
      }else{
        return item
      }
     }))
    
  }

 

  
  
return(
        <div  className="container-fluid mt-5 d-flex justify-content-center ">
          <div className="row w-50 h-100  border border-light shadow rounded">
          {items.map(item=>(
            <ul className="ms-3" key={item.id}>
 <li>

  <div className="col-6 ">
  <div onClick={()=>toggleComplete(item.id)}
 style={{ textDecoration: item.complete? "line-through" : null }}>
  {item.text} 
    </div> 
  </div>

  {item.edit===false? <div className="col-6 ">
  <button className='btn btn-light' onClick={(e)=>editItemHandler(item.id)}>Edit</button>
<button className='ms-2 btn btn-light' onClick={()=>deleteItemHandler(item.id)}>Delete</button>


  </div>
  :null}
  {item.edit===true?<EditList items={items} itemId={item.id} newVal={item.text} handleUpdate={handleUpdate} handleCancel={handleCancel}/>:null}


    
  
      </li>
   </ul>
          ))}
 </div>   

 </div>
    )
}
export default ListItems;