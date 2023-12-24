import { Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import ItemPage from "./components/ItemPage";


function App() {

  return (
    <div className="flex justify-center items-center">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/dynamic-table/:tableId" element={<ItemPage />} />
      </Routes>
    </div>
  );
}

export default App;
