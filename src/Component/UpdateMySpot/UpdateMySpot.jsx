
import { Link, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
const UpdateMySpot = () => {
    const data = useLoaderData();
    const {text,name,url,price,TravelTime,seasonality,Total,Location,description}=data;

    const handleAddTouristSpot = e =>{
        e.preventDefault();
        const form = e.target;
        const text = form.text.value;
        const name = form.name.value;
        const url = form.url.value;
        const price = form.price.value;
        const TravelTime = form.TravelTime.value;
        const seasonality = form.seasonality.value;
        const Total = form.Total.value;
        const Location = form.Location.value;
        const description = form.description.value;

        const user ={text,name,url,price,TravelTime,seasonality,Total,Location,description}
        // console.log(user);
        fetch(`http://localhost:5000/spots/${data._id}`,{
            method:'PUT',
            headers: {
                "content-type":"application/json"
            },
            body:JSON.stringify(user)
        })
        .then(res =>res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                toast.success("Tourists Spots Updated Successfully!")
                form.reset();
            }
        })
        .catch(error =>{
            console.error(error)
            toast.error("Tourists Spots Update Failed!")
        })
    }

    return (
        <div>
            <div  className=" mb-10">
                <form onSubmit={handleAddTouristSpot} className=" w-full p-5 bg-gray-300">
                    <h1 className="md:text-5xl text-[27px] font-bold text-center mb-4">Update Tourists Spots</h1>
                    <Link to={"/myList"}>
                       <button className='btn mb-2 bg-orange-100'>Back My List</button>
                    </Link>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <div  className="mb-6">
                            <h3 className="font-bold">Tourists Spots Name:</h3>
                                <label className="input  input-bordered flex items-center gap-2">
                                    <input type="text" name="text" defaultValue={text} placeholder="Tourists Spots Name"required/>
                                </label>
                            
                            </div>
                            <div  className="mb-6">
                            <h3 className="font-bold">Country Name:</h3>
                                <label className="input  input-bordered flex items-center gap-2">
                                    <input type="text" name="name" defaultValue={name} placeholder="Country Name"required/>
                                </label>
                            
                            </div>

                            <div  className="mb-6">
                            <h3 className="font-bold">Photo URL:</h3>
                                <label className="input input-bordered flex items-center gap-2 mb-4">
                                    <input type="url" name="url" defaultValue={url} placeholder="Input Photo URL"  required/>
                                </label>
                            
                            </div>
                            <div className="mb-10">
                                <h3 className="font-bold">Average Cost:</h3>
                                <label className="input input-bordered flex items-center gap-2">
                                    <input type="text"  name="price" defaultValue={price} placeholder="Average Cost"  required/>
                                    
                                </label>
                            </div>
                        </div>
                         
                        <div>
                            <div  className="mb-6">
                            <h3 className="font-bold">Seasonality:</h3>
                                <label className="input input-bordered flex items-center gap-2 mb-4">
                                    <input type="text" name="seasonality" defaultValue={seasonality} placeholder="Input Seasonality"  required/>
                                </label>
                            
                            </div>

                            <div className="mb-6">
                                <h3 className="font-bold">Travel Time :</h3>
                                <label className="input input-bordered flex items-center gap-2">
                                    <input type="text" name="TravelTime" defaultValue={TravelTime} placeholder="Travel Time" required/>
                                </label>
                                
                            </div>
                            <div className="mb-10">
                                <h3 className="font-bold">Total Visitors Per Year :</h3>
                                <label className="input input-bordered flex items-center gap-2">
                                    <input type="text"  name="Total" defaultValue={Total} placeholder="Total Visitors Per Year "  required/>
                                    
                                </label>
                                
                            </div>
                            <div className="mb-10">
                                <h3 className="font-bold">Location:</h3>
                                <label className="input input-bordered flex items-center gap-2">
                                    <input type="text"  name="Location" defaultValue={Location} placeholder="Input Location "  required/>
                                    
                                </label>
                                
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <h3 className="font-bold">Short Description:</h3>
                        <textarea className="textarea textarea-bordered w-full" defaultValue={description} name="description" placeholder="Input Short description"></textarea>
                    </div>
                    <button className="btn bg-emerald-400 w-full text-2xl">Update</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateMySpot;