import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { ThemeProvider } from './theme/ThemeProvider'
import LayoutWrapper from './components/layout/LayoutWrapper/LayoutWrapper'

import { appRoutes } from './routes/routes'

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutWrapper />}>
            {appRoutes.map(({ path, element: Element, index }, idx) => (
              <Route
                key={idx}
                path={index ? undefined : path}
                index={index}
                element={<Element />}
              />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
