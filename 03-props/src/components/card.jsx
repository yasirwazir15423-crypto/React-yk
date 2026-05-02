import React from 'react'

const card = (prop) => {
  return (
    <div className="card">
            <img src={prop.img} alt="" />
            <h1>{prop.user} </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A ad exercitationem ipsa reprehenderit aperiam voluptate!</p>
            <button>View Profile</button>
          </div>
  )
}

export default card
