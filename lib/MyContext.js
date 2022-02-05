import {createContext, useContext} from 'react'

const MyContext = createContext()
const useComponentContext = () => useContext(MyContext)
export { useComponentContext}
export default MyContext