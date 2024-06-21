import { useContext, useEffect, useState } from "react";
import { CommentContext } from "../App";
import UseMemoExample from "./UseMemoExample";


const UserComments = (props) => {
    const [lruActivities, setLruActivities] = useState([]);
    const userCommentsData = useContext(CommentContext);
    
    //Least Recently Used - LRU
    const onHandleClickLRU = (index, commentName) => {
        console.log(index, " --- ", commentName);
        setLruActivities([...new Set([commentName, ...lruActivities])].slice(0, 5));
        // setLruActivities({[index]: commentName, ...lruActivities});
    }

    return (
        <div>
            <ul>
                {userCommentsData && userCommentsData?.length ? userCommentsData?.map((comment, index) => {
                    return <li key={index} onClick={() => onHandleClickLRU(index, comment.name)}>{comment.name}</li>
                }) : null}
            </ul>
            <h2>Least Recently Used Activities...</h2>
            <ul>
                {lruActivities && lruActivities?.length ? lruActivities?.map((activity, index) => {
                    return <li key={index}>{activity}</li>
                }) : null}
            </ul>

            <UseMemoExample />
        </div>
    )
}

export default UserComments;