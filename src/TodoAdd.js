import './TodoAdd.css';
import React from 'react';



function TodoAdd(props){
   const  {Add, deleteTodo, id} = props

   return(
        <div className='maindiv'>
        <p>{Add}<a onClick={() => deleteTodo(id)}>X</a></p>
     </div>
     );  }

export default TodoAdd;