// App.jsx (nuevo, solo rutas)
import { Routes, Route } from 'react-router-dom'
import SafeTalk from './SafeTalk.jsx'
import History from './History.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<SafeTalk />} />
      <Route path="/historia/:id" element={<History />} />
    </Routes>
  )
}

export default App