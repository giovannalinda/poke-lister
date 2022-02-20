import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home, Error } from 'pages'
import { HOME } from 'routes'
import { GlobalStyle } from 'ui'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME} element={<Home />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  )
}

export default App
