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

<<<<<<< HEAD
export default App
=======
export default App
>>>>>>> 0a86fb6261c1542cf4e6035f3eb8871cb42ffabe
