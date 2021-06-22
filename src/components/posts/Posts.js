import {useEffect, useState} from "react";

export default function Posts() {

    let [postsList, setPostsList] = useState([]);


    useEffect(() => {
       fetch('https://jsonplaceholder.typicode.com/posts')
           .then(value => value.json())
           .then(response => {
               console.log(response)
               setPostsList(response);
           });
    }, []);
     return (
       <div>
            {
                postsList.map(value => <div>{value.id} - {value.body}</div>)  // TODO в окрему компоненту
            }
        </div>
    );
}
