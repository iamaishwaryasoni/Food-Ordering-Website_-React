import User from "./User";
import UserClass from "./UserClass";

const About = ()  => {
   return(
    <div className="">
        <h1 className="font-bold text-[40px] m-4 flex items-center justify-center">About </h1>
        <h1 className="font-bold m-4 text-3xl flex items-center justify-center">This is our team</h1>
        <div className="flex items-center justify-center">
        <User name= {"Aishwarya Soni"}/>
        <UserClass name={"ABCD"}/>
        </div>
    </div>

   );
};

export default About;