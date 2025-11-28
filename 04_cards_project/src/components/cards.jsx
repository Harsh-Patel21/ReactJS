
const cards = (props) => {
    
    console.log(props);
    return (
        <div className="parent">
            <div className="card">
                <div>
                    <div className="top">
                        {/* src="https://static.vecteezy.com/system/resources/previews/019/766/223/large_2x/amazon-logo-amazon-icon-transparent-free-png.png" */}
                        <img src={props.logo} alt="logo" />
                        <button>save<i className="fa-regular fa-bookmark"></i></button>
                    </div>

                    <div className="center">
                        <h2>{props.company} <span>{props.date}</span></h2>
                        <p>{props.post}</p>
                        <div className="box">
                            <h4>{props.tag1}</h4>
                            <h4>{props.tag2}</h4>
                        </div>
                    </div>

                </div>
                <div className="bottom">
                    <div>
                        <h3>{props.pay}</h3>
                        <p>{props.location}</p>
                    </div>
                    <button className="apply">Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default cards;
