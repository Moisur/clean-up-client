import { useEffect } from 'react'
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar";
import publicRoute from "./router/publicRoute";
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div>
      <Navbar>
        <Routes>
          {
            publicRoute.map((router) => <Route key={router} path={router.path} element={<router.Component />} />)
          }
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
