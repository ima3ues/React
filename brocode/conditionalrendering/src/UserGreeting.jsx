import PropTypes from 'prop-types'

function UserGreeting({ isLoggedIn = false, userName = "Guest" }) {
    // if(isLoggedIn) {
    //     return(
    //         <h2 className="welcome-message">
    //             Welcome {userName}
    //         </h2>
    //     );
    // }
    // else {
    //     return(
    //         <h2 className="login-prompt">
    //             Please log in to continue
    //         </h2>
    //     );
    // }

    // other way (ternary operator)
    // return(
    //     isLoggedIn ? 
    //     <h2 className="welcome-message">Welcome {userName}</h2> :
    //     <h2 className="login-prompt">Please log in to continue</h2>
    // );

    // other way (constant)
    // if no need to use {} is because the const is not used in a tag
    // const welcomeMessage = <h2 className="welcome-message">Welcome {userName}</h2>
    // const loginPrompt = <h2 className="login-prompt">Please log in to continue</h2>
    // return (
    //     isLoggedIn ? welcomeMessage : loginPrompt
    // );
}

UserGreeting.propTypes = {
  isLoggedIn: PropTypes.bool,
  userName: PropTypes.string,
};

export default UserGreeting;