import profilePic from './assets/pic.jpeg'

function Card() {
    return (
        <div className="card">
            <img className="card-image" height="200" width="200" src={profilePic } alt="meow"></img>
            <h2 className="card-title">jakas typiarka</h2>
            <p className="card-text">odtwarzam tutoriale z youtube i mowie ze moje</p>
        </div>
    )
}

export default Card