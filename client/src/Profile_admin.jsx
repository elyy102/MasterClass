import React from 'react'
import Add_mk from "./Add_mk";
import Person from "./assets/person.fill.svg"
import Paint from "./assets/paintpalette.fill.svg"
import { useDispatch } from 'react-redux'
import { logOut } from './redux/authSlice'
import Header from './Header';
import Footer from './Footer';
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Profile_admin = () => {

    const dispatch = useDispatch()

    const id = useSelector((state) => state.auth.id)

    const [user, setUser] = useState([]) 
 
    useEffect(() => { 
      fetch('http://localhost:3000/admin_info', { 
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
        <Header />
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
            <Add_mk />
            <div className="info_btn">
                <Link to={'/afisha'}><img src={Paint} alt="" className="profile_icon" /></Link>
                <Link to={'/afisha'}><h1 className="like">Все мастер-классы</h1></Link>
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

export default Profile_admin