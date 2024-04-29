import { toast } from "react-toastify";

const AddTouristsSpots = () => {
    const handleAddTouristSpot = e =>{
        e.preventDefault();
        const form = e.target;
        const text = form.text.value;
        const name = form.name.value;
        const url = form.url.value;
        const email = form.email.value;
        const price = form.price.value;
        const Username = form.Username.value;
        const TravelTime = form.TravelTime.value;
        const seasonality = form.seasonality.value;
        const Total = form.Total.value;
        const Location = form.Location.value;
        const description = form.description.value;

        const user ={text,name,url,email,price,Username,TravelTime,seasonality,Total,Location,description}
        console.log(user);
        fetch('http://localhost:5000/spots',{
            method:'POST',
            headers: {
                "content-type":"application/json"
            },
            body:JSON.stringify(user)
        })
        .then(res =>res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                toast.success("Add Tourists Spots Successfully!")
                form.reset();
            }
        })
        .catch(error =>{
            console.error(error)
            toast.error("Add Tourists Spots Failed!")
        })
    }
    return (
        <div>
            <div  className=" mb-10">
                <form onSubmit={handleAddTouristSpot} className=" w-full p-5 bg-gray-300">
                    <h1 className="md:text-5xl text-[27px] font-bold text-center mb-4">Add Tourists Spots</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <div  className="mb-6">
                            <h3 className="font-bold">Tourists Spots Name:</h3>
                                <label className="input  input-bordered flex items-center gap-2">
                                    <input type="text" name="text" placeholder="Tourists Spots Name"required/>
                                </label>
                            
                            </div>
                            <div  className="mb-6">
                            <h3 className="font-bold">Country Name:</h3>
                                <label className="input  input-bordered flex items-center gap-2">
                                    <input type="text" name="name" placeholder="Country Name"required/>
                                </label>
                            
                            </div>

                            <div  className="mb-6">
                            <h3 className="font-bold">Photo URL:</h3>
                                <label className="input input-bordered flex items-center gap-2 mb-4">
                                    <input type="url" name="url" placeholder="Input Photo URL"  required/>
                                </label>
                            
                            </div>

                            <div className="mb-6">
                                <h3 className="font-bold">User Email:</h3>
                                <label className="input input-bordered flex items-center gap-2">
                                    <input type="email" name="email" placeholder="Email" required/>
                                </label>
                                
                            </div>
                            <div className="mb-10">
                                <h3 className="font-bold">Average Cost:</h3>
                                <label className="input input-bordered flex items-center gap-2">
                                    <input type="text"  name="price" placeholder="Average Cost"  required/>
                                    
                                </label>
                            </div>
                        </div>
                         
                        <div>
                        <div  className="mb-6">
                            <h3 className="font-bold">User Name:</h3>
                                <label className="input  input-bordered flex items-center gap-2">
                                    <input type="text" name="Username" placeholder="Input Username"required/>
                                </label>
                            
                            </div>

                            <div  className="mb-6">
                            <h3 className="font-bold">Seasonality:</h3>
                                <label className="input input-bordered flex items-center gap-2 mb-4">
                                    <input type="text" name="seasonality" placeholder="Input Seasonality"  required/>
                                </label>
                            
                            </div>

                            <div className="mb-6">
                                <h3 className="font-bold">Travel Time :</h3>
                                <label className="input input-bordered flex items-center gap-2">
                                    <input type="text" name="TravelTime" placeholder="Travel Time" required/>
                                </label>
                                
                            </div>
                            <div className="mb-10">
                                <h3 className="font-bold">Total Visitors Per Year :</h3>
                                <label className="input input-bordered flex items-center gap-2">
                                    <input type="text"  name="Total" placeholder="Total Visitors Per Year "  required/>
                                    
                                </label>
                                
                            </div>
                            <div className="mb-10">
                                <h3 className="font-bold">Location:</h3>
                                <label className="input input-bordered flex items-center gap-2">
                                    <input type="text"  name="Location" placeholder="Input Location "  required/>
                                    
                                </label>
                                
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <h3 className="font-bold">Short Description:</h3>
                        <textarea className="textarea textarea-bordered w-full" name="description" placeholder="Input Short description"></textarea>
                    </div>
                    <button className="btn bg-emerald-400 w-full text-2xl">Add</button>
                </form>
            </div>
        </div>
    );
};

export default AddTouristsSpots;