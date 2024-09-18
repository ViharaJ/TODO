import {useState, useEffect} from 'react';


export default function TodoList(){
    const [items, setItems] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3000/todos")
            .then((res)=>{
                return res.json();
            }). then((data) => {
                setItems(data);
            }).then(() =>{
                console.log(items);
            });
    },[]);

    return (
        <div className="fullList">
            {items && items.map((i) => (
                 <label>
                    <input type="checkbox" onChange={(e) => {console.log(e)}}/> {i.text} <br/>
                 </label>
            ))}
        </div>
    );
    
}