import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './lib/LanguageContext'
import PreviewPage from './pages/PreviewPage'

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PreviewPage />} />
          <Route path="/preview/:slug" element={<PreviewPage />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App
