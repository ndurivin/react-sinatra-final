import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div >
       <div style={{ 
      backgroundImage: `url("https://www.apollotechnical.com/wp-content/uploads/2020/08/software-engineer-interview-questions.jpg")`, height: 600
    }}>
      <center style={{marginTop: 50}}><br/><br/>
    <h1>Welcome to <span>GITLAB</span></h1>
    <h4>Home of adent software developers</h4> 
    <Link to={`/developers`} style={{marginRight: 15}} className="btn btn-info btn-sm text-center"><h5>Browse Developers</h5></Link>
    <Link to={`/about`} className="btn btn-warning btn-sm text-center"><h5>About Us</h5></Link>
    </center>
    </div>
      
    </div>
  )
}

export default Home;
