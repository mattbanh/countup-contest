import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AdminPage } from "./pages/AdminPage";
import { VisualPage } from "./pages/VisualPage";

function App() {
  // console.log(unavailable);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VisualPage />} />
          <Route path="/admina2vcd" element={<AdminPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
