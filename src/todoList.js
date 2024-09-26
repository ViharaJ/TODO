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

    const updateText = ((text, pos) => {
        items[pos-1].text = text;
        setItems(Array.from(items));

        fetch(`http://localhost:3000/todos/:${items[pos-1].id}`, {
            method: 'PATCH',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(items[pos-1])})
            .then(() => {
                console.log("Updated item");

            })
    })

    return (
        <div className="fullList">
            {items && items.map((i) => (
                <div className="item-block" 
                    draggable={true}
                    onDragStart={e => console.log('onDragStart')}
                    onDragEnd={e => console.log('onDragEnd')}
                    key={i.id}>
                    <label>
                        <input type="checkbox" onChange={(e) => {console.log(e)}}/>
                        <input type="text"  value={i.text} onChange={e => updateText(e.target.value, i.position)}/> <br/>
                    </label>
                 </div>
            ))}
        </div>
    );
    
}