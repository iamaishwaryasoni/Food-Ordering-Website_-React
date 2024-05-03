
import {CDN_URL} from "../utils/constant";


const ResturantCard = ({resData}) => {

     const{
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        deliveryTime,
     } = resData?.info;

    console.log(resData, "resData")


    return(
        <div className="p-4 m-4 mr-10  w-[300px] rounded-lg bg-gray-100 hover:bg-gray-200" 
        >
            <img className="rounded-lg" 
             src= {CDN_URL+ cloudinaryImageId} /> 
            <h3 className="font-bold text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} Star</h4>
            <h4>{costForTwo } </h4>
            <h4>{deliveryTime} minutes</h4>
           
        </div>
    );
};

export default  ResturantCard; 