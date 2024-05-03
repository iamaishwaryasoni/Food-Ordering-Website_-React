import { useNavigate, useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";



const RestaurantMenu = () => {
    

    const {resId} = useParams()
    const route = useNavigate()

    const resInfo = useRestaurantMenu(resId);
   

    return(
        <div>
            <h1 className="font-bold text-3xl p-2 mt-5 ml-6">{resInfo?.cards[2]?.card?.card?.info?.name}</h1>
            <p className=" ml-8 space-x-2">{resInfo?.cards[2]?.card?.card?.info?.cuisines.join(",")} - 
             {resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage}</p>

             <p className="ml-8">{resInfo?.cards[2]?.card?.card?.info?.avgRating} Star</p>
            <ul>
                {/* <li style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    cursor: "pointer",
                    
                }}  onClick={() => route("/about")}>
                    {resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[0]?.card?.info?.name}
                </li> */}
                 
                <li>
                {resInfo && resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[0]?.card?.info?.name}
                </li>
                <li>
                {resInfo && resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[1]?.card?.info?.name}
                </li>
               <li>
               {resInfo && resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[2]?.card?.info?.name}
               </li>
               <li>
               {resInfo && resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[3]?.card?.info?.name}
               </li>
               <li>
               {resInfo && resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[4]?.card?.info?.name}
               </li>
            </ul>
        </div>
    )
}

export default  RestaurantMenu;


 {/* {resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.
                    itemCards?.map(item =>
                    <li key={item?.card?.info?.name}
                     >item?.card?.info?.name </li>)} */}