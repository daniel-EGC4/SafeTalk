// App.jsx (nuevo, solo rutas)
import { Routes, Route } from 'react-router-dom'
import SafeTalk from './SafeTalk/SafeTalk.jsx'
import History from './Historias/History.jsx'
import Explorer from './Historias/Exploracion-historias.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<SafeTalk />} />
      <Route path="/explorer" element={<Explorer />} />
      <Route path="/historia/:id" element={<History />} />
    </Routes>
  )
}

export default App
