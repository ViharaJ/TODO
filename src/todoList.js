import {useState, useEffect} from 'react';


export default function TodoList(){
    const [items, setItems] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3000/todos")
            .then((res)=>{
                setItems(res.json());
            }).then(() =>{
                console.log(items);
            });
    },[]);

    // return (
    //     <div className="fullList">
    //         if(items){
    //             console.log(items);
    //         };
    //     </div>
    // );
    
}