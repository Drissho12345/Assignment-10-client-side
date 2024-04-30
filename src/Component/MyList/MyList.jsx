import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

// animation
import AOS from 'aos';
import 'aos/dist/aos.css';

const MyList = () => {
    const {user} = useContext(AuthContext)
    
    const [item,setItem] = useState([])

    const handleDelete =_id =>{
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              
              fetch(`http://localhost:5000/myCardDelete/${_id}`,{
                method: 'DELETE'
              })
              .then(res => res.json())
              .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your Spot has been deleted.",
                        icon: "success"
                      });
                }
              })
            }
          });
    }
    
    useEffect(()=>{
        fetch(`http://localhost:5000/mySpots/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setItem(data);
            console.log(data);
        })
    },[user])
    // animation
    useEffect(() => {
        AOS.init({
          duration: 2000,
        });
      }, []);
    return (
        <div>
            <Helmet><title>My List Page</title></Helmet>
            <div className="mt-10 mb-10"data-aos="zoom-in">
                {
                    item.map(item =><div key={item._id}>
                        <div className="overflow-x-auto text-black rounded-2xl mb-5 bg-slate-300">
                            <table className="table border">
                                <tr className="border">
                                    <th className="border">Spots</th>
                                    <th className="border">Country</th>
                                    <th className="border">Location</th>
                                    <th className="border">Photo</th>
                                    <th className="border">Travel Time</th>
                                    <th className="border">Email</th>
                                    <th className="border">Average Cost</th>
                                    <th className="border">Seasonality</th>
                                    <th className="border">Description</th>
                                    <th className="border"></th>
                                </tr>
                                <tr>
                                    <td className="border">{item.text}</td>
                                    <td className="border">{item.name}</td>
                                    <td className="border">{item.Location}</td>
                                    <td className="border">
                                        <img src={item.url} alt="" />
                                    </td>
                                    <td className="border">{item.TravelTime}</td>
                                    <td className="border">{item.email}</td>
                                    <td className="border">{item.price}</td>
                                    <td className="border">{item.seasonality}</td>
                                    <td className="border">{item.description.slice(0,90)}</td>
                                    <td className="flex">
                                        <button onClick={()=>handleDelete(item._id)} className="btn text-sm bg-slate-500">Delete</button>
                                        <Link to={`/UpdateMySpot/${item._id}`}>
                                            <button className="btn bg-slate-500">Update</button>
                                        </Link>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyList;