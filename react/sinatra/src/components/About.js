import React from "react";

function About() {
  return (
    <div className="container py-5">
      <center>
        <h3>This is About Us page</h3>
        <div class="col-sm-6 col-md-6 col-xs-6">
        <div className="thumbnail">
          <div className="col-sm-6 col-md-6 col-xs-12 image-container">
            <img
              src="https://i.pinimg.com/474x/35/5f/e8/355fe8a95a65ad5804e6ab74f53d2956.jpg"
              style={{ height: 200, marginLeft: -15 }}
              alt=""
            />
          </div>

          <div className="col-sm-6 col-md-6 col-xs-12">
            <h3>Hello World</h3>
            <p style={{ fontSize: 13 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              hendrerit adipiscing blandit. Aliquam placerat, velit a fermentum
              fermentum, mi felis vehicula justo, a dapibus quam augue non
              massa.
            </p>
          </div>
        </div>
      </div>
      </center>
      
      {/* https://us.123rf.com/450wm/ra2studio/ra2studio2005/ra2studio200501945/147705114-waiter-serving-social-networking-concept-with-about-us-inscription.jpg?ver=6 */}
    </div>
  );
}

export default About;
