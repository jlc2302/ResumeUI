import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Website from "./Landing Page/Website/Website";
import Upload from "./Dashboard Page/Upload/Upload";
import Analysis from "./Dashboard Page/Analysis and Feedback/Analysis/Analysis";
import Feedback from "./Dashboard Page/Analysis and Feedback/Feedback/Feedback";
import Result from "./Dashboard Page/Result/Result";
import History from "./Dashboard Page/History/History";

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route index element={<Website />} />
        
        <Route path="/website" element={<Website />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/result" element={<Result />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
