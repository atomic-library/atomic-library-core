import {createContext, useContext} from 'react'

const AtomicContext = createContext()
const useCompContext = () => useContext(AtomicContext)
export { useCompContext }
export default AtomicContext