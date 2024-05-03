const User = ({name}) => {
    return(
        <div className="border border-solid border-black p-14 m-6 h-52 w-96 rounded-lg hover:bg-yellow-400">
            <h2>Name: {name} </h2>
            <h2>Loacation: Noida</h2>
            <h2>Contact: 12aishwaryasoni@gmail.com</h2>
        </div>
    )
}

export default User;