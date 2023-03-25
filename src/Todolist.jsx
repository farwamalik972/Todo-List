
import React, { useState } from 'react'
import { To } from './To';

const Todolist = () => {

    const [inputItem, setinputItem] = useState("");
    //    create array
    const [item1, setitem1] = useState([])

    const itemEvent = (event) => {
        setinputItem(event.target.value);
    };

    const linkbtn = () => {
        setitem1((olditem) => {
            return [...olditem, inputItem];
        });
        setinputItem("");
    };
    const deletItems = (id)=>{

        // consol.log("deleted");

        setitem1((olditem)=>{
            return olditem.filter((arrEle,index)=>{
             return index !== id ;
            });
        });
     };

    return (
        <>
            <div className='main'>
                <div className='mid'>
                    <br />
                    <h3 className='heading'>ToDo List</h3>
                    <br />
                    <input className='input' type='text' placeholder='Add an item' onChange={itemEvent} value={inputItem} />
                    <button className='btn' onClick={linkbtn}>+</button>
                    <ol>
                        {/* <li style={item}>{inputItem}</li> */}
                      { item1.map((itemvalue,index)=>{
                        return <To 
                          key={index}
                          id={index}
                          text={itemvalue} 
                          onSelect={deletItems}
                          />
                       })}
                     </ol>
                </div>
            </div>
        </>
    )
}

export default Todolist;
 