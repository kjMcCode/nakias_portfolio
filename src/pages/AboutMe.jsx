import profilePic from '../assets/profilepic.jpg'

const AboutMe = () => {
    return (
        <section className="=aboutme">
            <div className="profile-photo">
                <img className="profilepic" src={profilePic} alt="profile" />
            </div>
            <div className="profile-info">
                <p className="name">Nakia McNeil</p>
                <p className="about">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum quo rerum architecto explicabo velit ea similique repellendus, ipsum tempore error veritatis, commodi consequatur inventore aliquid praesentium nam quaerat, sed alias!<br/>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente repellat aut quisquam tenetur harum blanditiis. Minus, quam nulla mollitia fugit ipsam, distinctio velit tempora officia laboriosam quas in? Ex, quia?<br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, hic? Facere doloremque soluta quia tempora consequatur, distinctio illo amet atque provident. Neque, illo? Repellendus accusamus esse est obcaecati earum voluptatem!</p>
            </div>
        </section>
    )
}

export default AboutMe