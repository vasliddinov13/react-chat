import React from 'react'
import './details.css';

const Details = () => {
  return (
    <div className='details'>
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>Jane Doe</h2>
        <p>Lorem, ipsum dolor.</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privecy & help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://i.pinimg.com/736x/33/59/dd/3359dd4175ee66c2490c7c0c2ee54e46.jpg" alt="" />
                <span>img name</span>
              </div>
              <img src="./download.png" alt="" className='icon' />
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared files</span>
            <img src="./arrowDown.png" alt="" />
          </div>
        </div>
        <button>Block user</button>
        <button className='logout'>Logout</button>
      </div>
    </div>
  )
}

export default Details;