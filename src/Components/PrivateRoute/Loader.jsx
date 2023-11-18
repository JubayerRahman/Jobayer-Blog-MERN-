import { Player } from '@lottiefiles/react-lottie-player'
import React from 'react'
import Animation from "../../assets/loading.json"

const Loader = () => {
  return (
    <div className=' flex justify-center items-center'>
      <Player src={Animation}  loop autoplay/>
    </div>
  )
}

export default Loader
