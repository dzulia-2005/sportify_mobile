import React from 'react'
import Svg, { Path } from "react-native-svg";


const GoogleIcon:React.FC = () => {
  return (
    <Svg width={20} height={20} viewBox="0 0 48 48">
    <Path
      fill="#EA4335"
      d="M24 9.5c3.1 0 5.9 1.1 8.1 3.2l6-6C34.5 2.9 29.6 1 24 1 14.6 1 6.6 6.8 3 15.1l7.5 5.8C12.3 14.2 17.7 9.5 24 9.5z"
    />
    <Path
      fill="#34A853"
      d="M46.1 24.5c0-1.6-.1-3.1-.4-4.5H24v8.5h12.4c-.5 2.7-2 5-4.3 6.5l6.7 5.2C43.8 36.2 46.1 30.9 46.1 24.5z"
    />
    <Path
      fill="#4A90E2"
      d="M10.5 28.9c-.6-1.8-.9-3.7-.9-5.9s.3-4.1.9-5.9l-7.5-5.8C1.1 15.2 0 19.4 0 23s1.1 7.8 3 11.7l7.5-5.8z"
    />
    <Path
      fill="#FBBC05"
      d="M24 46c6.5 0 11.9-2.1 15.8-5.7l-6.7-5.2c-2 1.3-4.6 2.1-9.1 2.1-6.3 0-11.7-4.7-13.5-11.4l-7.5 5.8C6.6 41.2 14.6 46 24 46z"
    />
  </Svg>
  )
}

export default GoogleIcon;