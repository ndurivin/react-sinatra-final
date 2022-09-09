import React from 'react'



// fetch("http://localhost:9292/games", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     title: "Breath of the Wild",
//     platform: "Switch",
//   }),
// });

function Admin() {
  return (
    <div>
      <div className="navbar navbar-default text-center" role="navigation">
            <h2 className="navbar-text col-md-12 col-sm-12 col-xs-12 text p-3">This is the Admin Page</h2>
        </div>
    </div>
  )
}

export default Admin;
