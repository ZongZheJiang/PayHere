import { Route, Routes } from "react-router-dom";
import HomePage from "./routes/homepage";
import UploadPage from "./routes/uploadQR";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/upload" element={<UploadPage />} />
      </Routes>
    </div>
  );
}

export default App;
