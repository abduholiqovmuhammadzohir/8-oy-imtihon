import React, { useEffect, useState } from 'react'
import HomeHero from '../components/HomeHero'
import styled from "../pages/index.module.css"

import Mixes from '../Card/Mixes'
import Made from '../Card/Made'
import Recently from '../Card/Recently'
import Jump from '../Card/Jump'
import Uniq from '../Card/Uniq'

function Home() {

  return (
    <div className={styled.home}>
      <HomeHero></HomeHero>
      <Mixes></Mixes>
      <Made></Made>
      <Recently></Recently>
      <Jump></Jump>
      <Uniq></Uniq>
    </div>
  )
}

export default Home