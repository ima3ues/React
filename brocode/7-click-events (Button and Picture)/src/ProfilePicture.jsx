import profileImage from './assets/profilepic.jpg';

function ProfilePicture() {

    const handleClick = () => console.log("this is a picture")

    const handleClick2 = (e) => e.target.style.display = "none"

    return(
        <>
            <img onClick={handleClick} src={profileImage} />
            <img onClick={(e) => handleClick2(e)} src={profileImage} />
        </>
    );
    
}

export default ProfilePicture