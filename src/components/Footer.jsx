import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-purple-800 text-white p-4">
        <div className="flex justify-between items-center">
          <p>Copyright ©2019 RAILMADAD. All Rights Reserved.</p>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">FAQs</a></li>
              <li><a href="#" className="hover:underline">Railway Admin Login</a></li>
              <li><a href="#" className="hover:underline">MIS Report Login</a></li>
            </ul>
          </nav>
        </div>
      </footer>
  )
}

export default Footer