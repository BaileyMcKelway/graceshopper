import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_SINGLECAR = 'GET_SINGLECAR'

/**
 * INITIAL STATE
 */
const defaultSingleCar = {}

/**
 * ACTION CREATORS
 */
const getSingleCar = car => ({type: GET_SINGLECAR, car})

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
const singleCarReducer = (state = defaultSingleCar, action) => {
  switch (action.type) {
    case GET_SINGLECAR:
      return {defaultSingleCar: action.car}
    default:
      return state
  }
}

export default singleCarReducer
