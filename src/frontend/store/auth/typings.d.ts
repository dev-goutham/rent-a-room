import { User } from "@prisma/client"

export interface IAuthContext {
  isLoggedIn: boolean
  fetchingUser: boolean
  user: User | null
  login: (email: string, password: string) => Promise<void>
  register: (args: RegisterArgs) => Promise<void>
  loginWithGoogle: () => void
  logout: () => void
  error: string | null
}

interface RegisterArgs {
  username: string
  password: string
  email: string
}

class IAction {
  readonly type: string
}

class AuthFetching implements IAction {
  readonly type = "AUTH_FETCHING"
}

class AuthSuccess implements IAction {
  readonly type = "AUTH_SUCCESS"

  constructor(public payload: User | null) {}
}

class AuthError implements IAction {
  readonly type = "AUTH_ERROR"

  constructor(public payload: string | null) {}
}

export type AuthReducerState = {
  user: User | null
  error: string | null
  fetching: boolean
}

export type AuthActions = AuthFetching | AuthSuccess | AuthError

export type AuthReducer = (
  state: AuthReducerState,
  action: AuthActions,
) => AuthReducerState
