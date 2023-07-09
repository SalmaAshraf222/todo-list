import { React, useState } from "react";
import List from "./components/list";
import ListItems from "./components/listItems";
import Pagination from "./components/pagination";

function App() {
  let [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [todoToShow,setTodoToShow]=useState("All")
  const [toggleAllComplete,setToggleAllComplete]=useState(true)
  let itemsShow = items
  

  
  const addItem = (text, itemId) => {
    setItems([
      ...items,
      {
        text: text,
        id: itemId,
        complete:false,
        edit: false
      },
    ]);
   
  };

  const deleteAllItems=()=>{
    setItems([]);
  }

  const deleteItemHandler = (any) => {
    setItems(items.filter((a) => a.id !== any));
  };

 
  const editItem = ( any) => {
    setItems(items.map((item)=>{
      if(item.id===any){
        return{...item,edit:!item.edit}
      }else{
        return item
      }
     }))
  };
 

  const updateTodoToShow=(s)=>{
    setTodoToShow(s)
  }

  const removeAllComplete=()=>{
    setItems(items.filter((item)=>!item.complete))
  }

  const toggleAllCompleteItems=()=>{
    setItems(items.map((item)=>({
      ...item,
      complete:toggleAllComplete
    })))
    setToggleAllComplete(!toggleAllComplete)
  }

  const toggleComplete=(any)=>{
setItems(items.map((item)=>{
  if(item.id===any){
return{...item,complete:!item.complete}
  }
  else{
    return item
  }
}))
console.log(items);

  }



  if(todoToShow==="active"){
   
   itemsShow=items.filter((item)=>
   item.complete===false
   )
    
  }else if(todoToShow==="complete"){
    itemsShow=items.filter((item)=>
    item.complete === true
    )
  };

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
   const currentItems = itemsShow?.slice(firstIndex, lastIndex);


  return (
      <div className="container-fluid " style={{ height: "100vh" }}>
  
        <h1 className="mt-3 ms-3 border border-light rounded shadow-sm w-25 d-flex justify-content-center ">
          <em>Your todo list</em>
        </h1>
  
        <div className="row mt-5 d-flex justify-content-center">
          <h5 className="d-flex  justify-content-center mt-3">
            Type to add to your list
          </h5>
          <List
            addItem={addItem}
            deleteAllItems={deleteAllItems}
           
          />
        </div>
  
        <div className="row mt-5 d-flex justify-content-center h-100">
  
          <div className="col-6">
          <h5 className="mt-3 d-flex justify-content-center" >
            Items appear below
          </h5>
            <div className="row  h-75">
            <ListItems
            allItems={items}
            items={currentItems}
            deleteItemHandler={deleteItemHandler}
            toggleComplete={toggleComplete}
            editItem={editItem}
            setItems={setItems}
          />
            </div>

            <div className="row">
            <Pagination
        totalPosts={items.length}
        postsPerPage={itemsPerPage}
        setCurrentPage={setCurrentPage}
      /> 
            </div>
          </div>
  
  <div className="col-6 d-flex flex-column justify-content-center ">
  <div className="row w-100 d-flex justify-content-center ">
    <div className="col d-flex justify-content-evenly">
    <button className=' btn btn-light h-100  ' onClick={()=>updateTodoToShow("all")}>All</button>
    <button className=' btn btn-light h-100 ' onClick={()=>updateTodoToShow("active")}>Active</button>
    <button className=' btn btn-light h-100 ' onClick={()=>updateTodoToShow("complete")}>Complete</button>
    </div>
          </div>
  
          <div className="row w-100 d-flex justify-content-center mt-5 ">
          {items.some((item)=>item.complete)?(<button className='mt-3 btn btn-light w-50' onClick={removeAllComplete}>Remove all complete</button>):null}
            <button className='mb-5 mt-3 btn btn-light w-50' onClick={toggleAllCompleteItems}>Toggle all complete:{`${toggleAllComplete}`}</button>
          </div>
  </div>
          </div>
  
      </div>
    );

}
export default App;












 