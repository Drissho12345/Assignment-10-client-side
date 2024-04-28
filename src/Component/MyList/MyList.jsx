import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const MyList = () => {
    const {user} = useContext(AuthContext)
    console.log(user);
    const [item,setItem] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5173/mySpots/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setItem(data);
        })
    },[user])
    console.log(item);
    const {} =item;
    return (
        <div>
            <div>
                {
                    item.map(item =><></>)
                }
            </div>
        </div>
    );
};

export default MyList;