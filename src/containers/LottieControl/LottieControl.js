import React, { Component } from 'react';

import ArrowUncontrolledLottie from '../../components/ArrowUncontrolledLottie/ArrowUncontrolledLottie';
import StarUncontrolledLottie from '../../components/StarUncontrolledLottie/StarUncontrolledLottie';
import CheckControlledLottie from '../../components/CheckControlledLottie/CheckControlledLottie';

class LottieControl extends Component {
  render () {
    return (
      <div className="lotties">
        <ArrowUncontrolledLottie />
        <StarUncontrolledLottie />
        <CheckControlledLottie />
      </div>
    )
  }
}

export default LottieControl