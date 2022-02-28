import { createContext, useCallback, useEffect } from "react"
import { IAuthContext } from "./typings"
import useAuthReducer from "./reducer"
import axios from "axios"

const initialState: IAuthContext = {
  user: null,
  fetchingUser: true,
  isLoggedIn: false,
  login: async () => {
    return
  },
  error: null,
  register: async () => {
    return
  },
  loginWithGoogle: () => {
    return
  },
  logout: () => {
    return
  },
}

export const AuthContext = createContext<IAuthContext>(initialState)

const AuthProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useAuthReducer()

  useEffect(() => {
    dispatch({
      type: "AUTH_FETCHING",
    })
    axios.get<{ user: IAuthContext["user"] }>("/api/auth/getMe").then((res) => {
      dispatch({
        type: "AUTH_SUCCESS",
        payload: res.data.user,
      })
    })
  }, [])

  const register: IAuthContext["register"] = useCallback(
    async ({ email, password, username }) => {
      dispatch({
        type: "AUTH_FETCHING",
      })
      try {
        const {
          data: { user },
        } = await axios.post<
          Parameters<IAuthContext["register"]>,
          { data: { user: IAuthContext["user"] } }
        >(
          "/api/auth/register",
          { email, password, username },
          { withCredentials: true },
        )
        if (!user) {
          return dispatch({
            type: "AUTH_ERROR",
            payload: "Something went wrong",
          })
        }
        dispatch({
          type: "AUTH_SUCCESS",
          payload: user,
        })
      } catch (error) {
        const { message } = error as {
          message?: string
        }
        dispatch({
          type: "AUTH_ERROR",
          payload: message || "Something went wrong",
        })
      }
    },
    [dispatch],
  )

  const login = useCallback(
    async (email: string, password: string) => {
      dispatch({
        type: "AUTH_FETCHING",
      })
      try {
        const {
          data: { user },
        } = await axios.post<
          { email: string; password: string },
          { data: { user: IAuthContext["user"] } }
        >(
          "/api/auth/login",
          {
            email,
            password,
          },
          { withCredentials: true },
        )
        if (!user) {
          dispatch({
            type: "AUTH_ERROR",
            payload: "something went wrong",
          })
          return
        }

        dispatch({
          type: "AUTH_SUCCESS",
          payload: user,
        })
      } catch (error) {
        const { message } = error as {
          message?: string
        }
        dispatch({
          type: "AUTH_ERROR",
          payload: message || "something went wrong",
        })
      }
    },
    [dispatch],
  )

  const loginWithGoogle = useCallback(async () => {
    dispatch({
      type: "AUTH_FETCHING",
    })
    window.open("http://localhost:3000/api/auth/google/callback")
    try {
      const {
        data: { user },
      } = await axios.get<{ user: IAuthContext["user"] }>("/api/auth/getMe", {
        withCredentials: true,
      })
      dispatch({
        type: "AUTH_SUCCESS",
        payload: user,
      })
    } catch (error) {
      const { message } = error as {
        message?: string
      }
      dispatch({
        type: "AUTH_ERROR",
        payload: message || "something went wrong",
      })
    }
  }, [dispatch])

  const logout = async () => {
    await axios.post("/api/auth/logout")
    dispatch({
      type: "AUTH_SUCCESS",
      payload: null,
    })
  }

  return (
    <AuthContext.Provider
      value={{
        loginWithGoogle,
        login,
        logout,
        register,
        isLoggedIn: Boolean(state.user),
        user: state.user,
        fetchingUser: state.fetching,
        error: state.error,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
