
import Selectinput from "./pages/Selectrichspage"
import Homepage from "./pages/Homepages"
import { Routes,Route } from "react-router-dom";
import Cryptomarketing from "./pages/Cryptomarketing";
import Marketing from "./pages/Marketing";

function App() {
  return (
    <>






<Routes>
      <Route path="/" element={<Selectinput />} />
      <Route path="/cart" element={< Homepage/>} />
      <Route path="/crypto" element={< Cryptomarketing/>} />
      <Route path="/marketing" element={< Marketing/>} />
      
      
    </Routes>
    </>
  );
}

export default App;
