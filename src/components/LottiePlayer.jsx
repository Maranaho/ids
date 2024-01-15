import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

const LottiePlayer = ({anim})=>(
    <Lottie
        loop
        play
        className="Lottie"
        animationData={anim}
    />
  )
export default LottiePlayer