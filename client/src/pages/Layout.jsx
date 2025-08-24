import React, { use } from 'react'
import Sidebar from '../components/sidebar'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  const[sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <div className='w-full flex h-screen '>
      <sidebar />
      <div className='flex-1 bg-slate-50'>
        <outlet />

      </div>
      <h1>Layout</h1>
      </div>
  )
}

export default Layout