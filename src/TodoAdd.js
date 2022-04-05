import './TodoAdd.css';
import React from 'react';



function TodoAdd(props){

   return(
        <div className='maindiv'>
        <p>{props.Add}<a>X</a></p>
     </div>
     );  }

export default TodoAdd;