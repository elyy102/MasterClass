import React from 'react'
import Person from "./assets/person.fill.svg"
import Like from "./assets/heart.fill.svg"
import Paint from "./assets/paintpalette.fill.svg"
import { useDispatch } from 'react-redux'
import { logOut } from './redux/authSlice'
import Footer from './Footer'
import Header from './Header'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

export const Profile_user = () => {

    const dispatch = useDispatch()

    const id = useSelector((state) => state.auth.id)

    const [user, setUser] = useState([]) 
 
    useEffect(() => { 
      fetch('http://localhost:3000/user_info', { 
        method: 'GET', 
        mode: 'cors', 
        headers: { 
          "Content-Type": "application/json" 
        } 
      }) 
      .then(user => user.json()) 
      .then(user => { 
        setUser(user) 
      }) 
    }, [])

  return (
    <>
    {
        user.map((el) => {
            return (el.id == id) ?
            <div className='wrapper'>
        <Header/>
    <div className="login_2">
    <div className="login">
        <div className="login_rectangle">
            <div className="info_name">
                <img src={Person} alt="" className="profile_icon" />
                <h1 className="name">{el.name}</h1>
            </div>
                <p className="email">Email : <span>{el.email}</span></p>
                <p className="email">Номер телефона : <span>{el.phone_number}</span></p>
            <hr class="hr-line"></hr>
            <div className="info_btn">
                <Link to={'/afisha'}><img src={Paint} alt="" className="profile_icon" /></Link>
                <Link to={'/afisha'}><h1 className="like">Все мастер-классы</h1></Link>
            </div>
            <div className="info_btn">
                <Link to={'/favourites'}><img src={Like} alt="" className="profile_icon" /></Link>
                <Link to={'/favourites'}><h1 className="like">Избранное</h1></Link>
            </div>
            <div className="info_btn">
                <Link to={'/my_mk'}><img src={Paint} alt="" className="profile_icon" /></Link>
                <Link to={'/my_mk'}><h1 className="like">Мои мастер-классы</h1></Link>
            </div>
            <button className='logout_btn' onClick={() => {
                dispatch(logOut())
            }}>Выйти</button>
        </div>
    </div>
</div>
<Footer />
</div>
:
{}
        })
    }
    </>
  )
}

export default Profile_user