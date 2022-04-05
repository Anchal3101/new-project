import React,{ useState } from 'react';
import './Todo.css'
import TodoAdd from './TodoAdd'

function Todo(){
const [input, setInput]=  useState('');
const [input1, setInput1]=  useState([ ]);



 
const Click=()=>{

    if(!input){
alert('enter')
    }else{
     setInput1([input,...input1]);



    console.log([...input1,input])
    

        setInput('')
    }
}

    return(
<div className="todocontainer">
<div className='todoinner'>
<h1>My todo list</h1>
<input onChange={(event)=>setInput(event.target.value)} value={input} placeholder='enter your data' className="todoinput"/>
<span onClick={Click} className='button'>+</span>
</div>
<div>
{
    input1.map(()=>{
        return(
            <TodoAdd Add={input1}/>
        );
})

}
</div>




</div>

    );
    }

export default Todo;