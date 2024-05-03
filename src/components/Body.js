import ResturantCard from "./ResturantCard";
import useOnlineStatus from "../utils/useOnlineStatus";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Body = () => {

    const [list, setList] = useState([]);
    const [fliteredRestaurant, setFilteredRestuarant] =useState ([]) ;
    const [searchText, setSearchtext] = useState("");

    useEffect(() => {
        fetchData();
    },
    [])

    const fetchData = async () => {
        try{
        const data = await fetch(
            "https://mocki.io/v1/af39e235-6ae6-4fa8-ac32-757d58791846"
        );

 

        const jjson = await data.json();
        
        console.log(jjson, "test1" )
        setList(jjson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(jjson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants, "testt")
        } catch (error) {
       
        console.log(error);
    }
}
 


    const handleFilter = (  ) => {
        const filteredList = list.filter(
            (restaurant) => restaurant.info.avgRating > 4.2
            );
        console.log(filteredList);
        setList(filteredList);
    }
 const  searchHandler= ()=>{
       const fliteredRestaurant = list.filter((res) => 
       res.info.name.toLowerCase().includes(searchText.toLowerCase()) );
        
       setFilteredRestuarant(fliteredRestaurant);
 }

  useEffect(() => {
    searchHandler();
  },[searchText]) // countinuslly update


  const OnlineStatus = useOnlineStatus();

  if(OnlineStatus === false) return(
      <div>
      <h1>Please Check Your Internet Connection!</h1>
      <h2> It's Look like you are offline</h2>
      </div>
  )


    return(
        <div className="body">

            <div className="flex items-center justify-center">
                 
               <div className="search m-5 p-4">
                <input type="text"
                 className="border border-solid border-black  " 
                value={searchText} 
                 onChange={(e) => {
                  setSearchtext(e.target.value);
                 }}
                />
                <button
                 className="px-4 py-1 ml-2 bg-yellow-400 rounded-lg font-semibold shadow-md"
                  onClick={searchHandler}
                 >Search</button>

               </div>

                  <div className="search m-4 p-4 flex items-center">  
                 <button className="px-4 py-1  bg-yellow-400 rounded-lg font-semibold shadow-md"
                  onClick = {handleFilter}>
                    Top Rated Restaurent
                 </button>
                 </div>
                  </div>
             <div className=" m-5 flex flex-wrap items-center justify-center">
                
              {fliteredRestaurant.length === 0 && list && list.map((restaurant) => (
                <Link 
                key={restaurant.info.id}
                to={"/restaurants/" + restaurant.info.id }
                >
                <ResturantCard   resData = {restaurant} />
                </Link>
              ))}
              
              {fliteredRestaurant.length > 0 && fliteredRestaurant.map((restaurant) => (
                <Link 
                key={restaurant.info.id}
                to={"/restaurants/" + restaurant.info.id }
                >
                <ResturantCard  resData = {restaurant} />
              </Link>
               ))}
              
               
             </div>
        </div>
    )
}

export default Body;