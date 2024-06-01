import React from 'react'
import styled from "../layouts/index.module.css"
import LeftSidebar from "../components/LeftSidebar"
import RightSidebar from "../components/RightSidebar"

function Layout({ children }) {
  return (
    <>
      <div className={styled.layout}>
        <LeftSidebar></LeftSidebar>
        {children}
        <RightSidebar></RightSidebar>
      </div>
    </>
  )
}

export default Layout