import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TasksPage } from "./pages/TasksPage";
import { TaskFormPage } from "./pages/TaskFormPage";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/task" element={<TasksPage />} />
        <Route path="/task-create" element={<TaskFormPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
