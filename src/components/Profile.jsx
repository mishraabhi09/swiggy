const Profile = (props) => {
    return (
        <>
            <div className="profile">
                <h1>This is linked to profile!!</h1>
                <h1>{props.name}</h1>
            </div>
        </>
    )
}


export default Profile;