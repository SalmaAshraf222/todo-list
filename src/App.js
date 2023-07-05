import { useState } from "react";
import "./App.css";
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
  }

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
          deleteItemHandler={deleteItemHandler}
          items={items}
        />
      </div>

      <div className="row mt-5 d-flex justify-content-center">
        <h5 className="mt-3" style={{ marginLeft: "170px" }}>
          Items appear below
        </h5>
        <ListItems
          items={itemsShow}
          deleteItemHandler={deleteItemHandler}
          toggleComplete={toggleComplete}
          editItem={editItem}
          setItems={setItems}
        />
      </div>

        <div className="col mx-auto w-25 d-flex jusitfy-content-between">
          <button className=' btn btn-light' onClick={()=>updateTodoToShow("all")}>All</button>
          <button className=' btn btn-light' onClick={()=>updateTodoToShow("active")}>Active</button>
          <button className=' btn btn-light' onClick={()=>updateTodoToShow("complete")}>Complete</button>
        </div>

        <div className="row w-25 mx-auto ">
          {items.some((item)=>item.complete)?(<button className='mt-3 btn btn-light' onClick={removeAllComplete}>Remove all complete</button>):null}
          <button className='mb-5 mt-3 btn btn-light' onClick={toggleAllCompleteItems}>Toggle all complete:{`${toggleAllComplete}`}</button>
        </div>

{/* <div> 
   <Pagination
          totalPosts={items.length}
          postsPerPage={itemsPerPage}
          setCurrentPage={setCurrentPage}
        /> 
        </div> */}
       
    </div>
  );
}

export default App;







 // const lastIndex = currentPage * itemsPerPage;
  // const firstIndex = lastIndex - itemsPerPage;
  //  const currenItems = items?.slice(firstIndex, lastIndex);
// console.log(items);
// console.log(currenItems);




 // items.map((item) => {
    //   if (item.id == any) {
    //     setItems([
    //       ...items.filter((a) => a.id !== any),
    //       {
    //         text: text,
    //         id: any,
    //         crossed: false,
    //         edit: true,
    //       },
    //     ]);
    //   } else {
    //     console.log("not selected");
    //   }
    //   // console.log(items);
    // });


 //const crossItemHandler = (text, any) => {
    // console.log(items,any);
    // items.map((item) => {
    //   if (item.id == any) {
        // setItems([
        //   ...items.filter((a) => a.id !== any),
        //   {
        //     text: text,
        //     id: any,
        //     crossed: true,
        //     edit: false,
        //   },
        // ]);

      // } else {
      //   console.log("not selected");
      // }
      //  console.log(items);
    // });
  //   const completedItems = items.map((item)=>{if(item.id === any){
  //     return [{crossed : true}]
     
  //   } else {}})
  //   console.log(completedItems)
  // };
