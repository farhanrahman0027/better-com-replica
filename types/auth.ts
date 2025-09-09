export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  createdAt: string
}

export interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
  signup: (email: string, password: string, firstName: string, lastName: string) => Promise<boolean>
  logout: () => void
  isLoading: boolean
}
