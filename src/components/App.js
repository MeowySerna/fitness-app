import Header from "./Header";
import Schedule from "./Schedule";
import Today from "./Today";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="root">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/" element={<Today />} />
        </Routes>
       
      </main>
    </div>
  );
}

export default App;
