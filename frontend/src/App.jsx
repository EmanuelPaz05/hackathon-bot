import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/" element={<Protected component={Inicio} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
