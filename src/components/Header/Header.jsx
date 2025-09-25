import React from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import { useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'

const Header = () => {

  const authenticated = useSelector((state)=>state.auth.isAuthenticated)
  const navigate = useNavigate()

  const navItems = [
    { name: "Home", slug: "/", active: true },
    { name: "Login", slug: "/login", active: !authenticated },
    { name: "Signup", slug: "/signup", active: !authenticated },
    { name: "Articles", slug: "/all-posts", active: authenticated },
    { name: "Write", slug: "/add-post", active: authenticated },
  ];

  return (
    <header className='sticky top-0 z-50 bg-white shadow-sm'>
      <Container>
        <nav className='flex items-center justify-between py-3'>
          {/* Logo */}
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='100px'/>
            </Link>
          </div>

          {/* navitems */}
          <ul className='flex items-center space-x-3'> 
              
              {navItems.map(
                (item) => 
                  item.active && (
                    <li key={item.name}>
                      <button
                        onClick={() => navigate(item.slug)}
                        className='px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition text-sm font-medium'
                      >
                        {item.name}
                      </button>
                    </li>
                  )
              )}

              {/* logout button here */}
              {authenticated && (
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

export default Header