import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_SINGLE_CAR = 'GET_SINGLE_CAR'

/**
 * INITIAL STATE
 */
const defaultSingleCar = {}

/**
 * ACTION CREATORS
 */
const getSingleCar = car => ({type: GET_SINGLE_CAR, car})

/**
 * THUNK CREATORS
 */
export const fetchSingleCar = () => async dispatch => {
  try {
    const res = await axios.get(`/api/singleCar/${1}`)
    dispatch(getSingleCar(res.data))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = defaultSingleCar, action) {
  switch (action.type) {
    case GET_SINGLE_CAR:
      return {defaultSingleCar: action.car}
    default:
      return state
  }
}
