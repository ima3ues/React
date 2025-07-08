import profilePic from "./assets/profile.jpg"

function Card() {
    return(
        <div className = "card">
            <img className="card-image" src={profilePic} alt="profile picture"/>
            <h2 className="card-title"> 
                Sue
            </h2>
            <p className="card-text">
                Student of Computer Science
            </p>
        </div>
    );
}

export default Card