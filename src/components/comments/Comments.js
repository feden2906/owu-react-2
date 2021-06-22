import {useEffect, useState} from "react";

export default function Comments() {
    let [commentsList, setCommentsList] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(response => {
                setCommentsList(response)
            })
    }, []);

    return (
        <div>
            {
                commentsList.map(value => <div>{value.id}. {value.name}  -  {value.email}</div>)
            }
        </div>
    );
}