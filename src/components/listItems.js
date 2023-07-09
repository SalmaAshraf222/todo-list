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

  
  
return(
        <div  className="container-fluid mt-5 ">
          <div className="row ms-5 ">
          {items.map(item=>(
            <ul  key={item.id}>
 <li>

  <div className="col-6 bg-danger">
  <div onClick={()=>toggleComplete(item.id)}
 style={{ textDecoration: item.complete? "line-through" : null }}>
  {item.text} 
    </div> 
  </div>

  <div className="col-6 d-flex justify-content-start bg-primary">
  <button className='btn btn-light' onClick={(e)=>editItemHandler(item.id)}>Edit</button>

<button className='ms-2 btn btn-light' onClick={()=>deleteItemHandler(item.id)}>Delete</button>

{item.edit===true?<EditList items={items} itemId={item.id} newVal={item.text} handleUpdate={handleUpdate} />:null}
  </div>
 

    
  
      </li>
   </ul>
          ))}
 
 </div>   

 </div>
    )
}
export default ListItems;