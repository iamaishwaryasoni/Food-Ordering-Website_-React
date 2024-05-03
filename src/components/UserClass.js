import React from "react"

 class UserClass extends  React.Component {

     constructor(props){
        super(props);

        // this.state={
        //     count: 0,
        // };
     }
    render(){
        return(
            <div className="border border-solid border-black p-14 m-6 h-52 w-96 rounded-lg hover:bg-yellow-400">
                {/* <h1>Count: {this.state.count}</h1>
                <button 
                onClick={() => {
                    this.setState({
                        count: this.state.count +1
                })
                }}>
                    Increase
                </button> */}
            <h2>Name: {this.props.name} </h2>
            <h2>Loacation: Noida</h2>
            <h2>Contact: 1abcd@gmail.com</h2>
        </div>
        )
    }
 }

 export default UserClass;