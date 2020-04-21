import React from 'react'

import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const SingleCar = props => {
  const {singleCar} = props
  return (
    <div>
      <p>CERRS</p>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    singleCar: {}
  }
}

export default connect(mapState)(SingleCar)

/**
 * PROP TYPES
 */
// UserHome.propTypes = {
//   email: PropTypes.string,
// }
