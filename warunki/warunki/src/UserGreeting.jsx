import PropTypes from 'prop-types';
function UserGreeting(props) {
    const welcomeMessage = <h2 className="welcome-message">Dzien dobry {props.username}</h2>
    const loginPrompt = <h2 className="login-prompt">Zaloguj sie</h2>;
    return (props.isLoggedIn ? welcomeMessage : loginPrompt);
}
UserGreeting.proptypes = {
    isLoggedIn: PropTypes.bool,
    usermane: PropTypes.string,
}
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Gosc"
}
export default UserGreeting