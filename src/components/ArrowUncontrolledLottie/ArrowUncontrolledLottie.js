import React, { Component } from 'react';
import Lottie from 'react-lottie';
import animationData from '../lotties/arrow.json';

class ArrowUncontrolledLottie extends Component {
  render () {

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserverAspectRatio: 'xMidYMid slice'
      }
    };

    return (
      <div>
        <h3>Arrow Up</h3>
        <h2>Lottie Uncontrolled</h2>
        <Lottie
          options={defaultOptions}
          height={400}
          width={400}
        />
      </div>
    )
  }
}

export default ArrowUncontrolledLottie