import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Website from "./Landing Page/Website/Website";
import Upload from "./Dashboard Page/Upload/Upload";

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route index element={<Website />} />
        
        <Route path="/website" element={<Website />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
