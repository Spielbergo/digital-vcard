function Info() {
    return (
        <div className="info--container">
            <img src="https://i.pinimg.com/736x/17/34/a0/1734a04a1a9f0c5d95ab87b53b721d35--male-portraits-animal-portraits.jpg" alt="headshot" />
            <div className="card-text">
                <h1>Scott Sutherland</h1>
                <h3>Frontend Developer</h3>
                <p>scott@webcheddar.ca</p>
            </div>
            <div className="info--btns">
                <button><i className="fa fa-envelope"></i> Email</button>
                <button className="blue-btn"><i className="fab fa-linkedin"></i>  LinkedIn</button>
            </div>
        </div>
    )
}

export default Info