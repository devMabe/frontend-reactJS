import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPageForm from "./pages/LoginPageForm";
import RegisterPageForm from "./pages/RegisterPageForm";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPageForm />} />
        <Route path="/register" element={<RegisterPageForm/>}></Route>
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
