import React from "react";

function About() {
  return (
    <div className="container py-5">
        <h3>
          About <span style={{fontSize: 40, color: 'blue'}}>GITLAB</span>
        </h3>
      <div className="clearfix py-4">
        <img style={{borderRadius: 16}}
          src="https://us.123rf.com/450wm/ra2studio/ra2studio2005/ra2studio200501945/147705114-waiter-serving-social-networking-concept-with-about-us-inscription.jpg?ver=6"
          className="col-md-6 float-md-end mb-3 ms-md-3"
          alt="..." />

        <p style={{marginTop: 80, fontSize: 26}}>
        <span style={{fontSize: 40, color: 'blue'}}>GITLAB</span> is a web based application for Software Developers. 
        </p>
        <p style={{fontSize: 26}}>
          We have various developers with varied technology stacks and levels of experiences.Check our developers page for more information and 
          choice of your favorite developer.
        </p>
      </div>

      {/* https://us.123rf.com/450wm/ra2studio/ra2studio2005/ra2studio200501945/147705114-waiter-serving-social-networking-concept-with-about-us-inscription.jpg?ver=6 */}
    </div>
  );
}

export default About;
