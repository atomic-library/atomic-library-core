import {createContext, useContext} from 'react'

const AtomicContext = createContext()
const useComponentContext = () => useContext(AtomicContext)
export { useComponentContext }
export default AtomicContext