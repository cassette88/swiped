import React from 'react'
import Fade from 'react-reveal/Fade'
import { Image } from '@rebass/emotion'

export default function C() {
    return (
        <div>
            <Fade bottom>
            <h2>Slide C</h2>
            <Image
  width={[ 1, 1, 1/2 ]}
  src='https://source.unsplash.com/random/1280x720'
  borderRadius={8}
/>
            </Fade>
        </div>
    )
}
