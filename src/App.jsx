import './App.css'

export default function App() {
  return (
  <div className="bussines-card">      
    <img src="./assets/img/profile.png"/ >
      <div className="container">
        
        <div className='info'>
          <h1> Laura Smith</h1>
          <h3> Frontend Developer</h3>
          <h6> <a href="mywebsite"> www.laurasmith.website.com </a></h6>
        </div>
        
          <div className='btns-container'>
            <button className="button" id="email-btn">Email</button>
            <button className="button" id="linkedin-btn">Linkedlind</button>
          </div>
          
          <div className="about">
            <h4>About</h4>
            <p> I am a frontend developer with a particular interest in making things 
              simple and automating daily tasks. I try to keep up with security 
              and best practices, and I am always looking for new things to learn. </p>
          </div>
        
          <div className="interests">
            <h4>interests</h4>
            <p> Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
              Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
          </div>

        <footer>
          <p>© 2024 Laura Smith</p>
        </footer>
      </div>
    
  </div>
  )
}

