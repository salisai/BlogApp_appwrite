import React from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'



const Header = () => {

  //useSelector => hook, allows u to access the redux store's state within a react component.
  //state => represent the entire redux state object
  //state.auth.status => accessing the status property within the auth slice of the redux state.
  //authStatus => holds the value of state.auth.status
  const authStatus = useSelector((state)=>state.auth.status)
  const navigate = useNavigate()
  //useNavigate=> returns a function that can be used to progrrammatically navigate to different routes within your application.


  //benefits => make object and add one nav item
  const navItems = [
    {
      name: 'Home',
      slug: "/",//slug means url kaha par ja raha hai, slug or url
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]

  return (
    <header className='py-3 shadow bg-gray-500'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='70px'/>
            </Link>
          </div>
          <ul className='flex ml-auto'>
              
              {navItems.map((item)=>
                item.active ? (
                <li key={item.name}>
                  <button
                    onClick={()=> navigate(item.slug)}//go to that link
                    className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                    >{item.name}
                  </button>
                </li>
                ) : null
              )}

              {/* logout button here */}
              {authStatus && (//if authStatus true(authenticated) then display logout
                <li>
                  <LogoutBtn/>
                </li>
              )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

//common button UI design

export default Header