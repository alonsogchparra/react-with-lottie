import React, { Component } from 'react'
import Lottie from 'react-lottie';
import animationData from '../lotties/star.json';

class StarUncontrolledLottie extends Component {
  render () {

    const defaultOptions = {
      loop: true,
      autoplay:true,
      animationData: animationData,
      rendererSettings: {
        preserverAspectRatio: 'xMidYMid slice'
      }
    };

    return (
      <div>
        <h3>Spining Star</h3>
        <Lottie
          options={defaultOptions}
          height={400}
          width={400}
        />
      </div>
    )
  }
}

export default StarUncontrolledLottie;