import { useReducer } from "react"
import { AuthReducer } from "./typings"

const authReducer: AuthReducer = (state, action) => {
  switch (action.type) {
    case "AUTH_FETCHING": {
      return { ...state, fetching: true }
    }
    case "AUTH_ERROR": {
      return { ...state, error: action.payload, fetching: false }
    }
    case "AUTH_SUCCESS": {
      return { user: action.payload, error: null, fetching: false }
    }
    default: {
      return state
    }
  }
}
const useAuthReducer = () => {
  return useReducer(authReducer, {
    user: null,
    fetching: true,
    error: null,
  })
}

export default useAuthReducer
