import React, { Component } from 'react';

import ArrowUncontrolledLottie from '../../components/ArrowUncontrolledLottie/ArrowUncontrolledLottie';
import StarUncontrolledLottie from '../../components/StarUncontrolledLottie/StarUncontrolledLottie';
import CheckControlledLottie from '../../components/CheckControlledLottie/CheckControlledLottie';

class LottieControl extends Component {
  render () {
    return (
      <div>
        <h1>React with Lottie</h1>

        <h2>Lottie Uncontrolled</h2>
        <ArrowUncontrolledLottie />
        <StarUncontrolledLottie />

        <h2>Lottie Controlled</h2>
        <CheckControlledLottie />
      </div>
    )
  }
}

export default LottieControl