import React from "react"
function navbar (){
    return (
        <div>
        <nav>
        <a className="brand">PIZZAMANIA</a>
        <div className="navLeft">
          <ul>
            <li>Home</li>
            <li>About Pizza</li>
            <li>Pizza Types</li>
          </ul>
        </div>
      </nav>
      </div>
    )
}

export default navbar