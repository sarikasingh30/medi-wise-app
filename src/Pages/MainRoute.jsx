
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import ComparePage from './ComparePage'

export default function MainRoute() {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/compare" element={<ComparePage/>} />
    </Routes>
  )
}
