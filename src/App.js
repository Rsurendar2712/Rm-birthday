import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cake from "./compounds/Cake";
import Middle from "./compounds/Middle";
import Chart from "./compounds/Chart";
import Story from "./compounds/Story";
import Final from "./compounds/Final";
import BirthdayPage from "./compounds/BirthdayPage";

function App() {
  return (
    <BrowserRouter> {/* Wrap here if not done in index.js */}
      <Routes>
        <Route path="/" element={<Cake />} />
        <Route path="/middle" element={<Middle />} />
        <Route path="/Chart" element={<Chart />} />
        <Route path="/Story" element={<Story />} />
         <Route path="/Final" element={<Final />} />
         <Route path="/BirthdayPage" element={<BirthdayPage />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;