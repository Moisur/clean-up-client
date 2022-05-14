import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import publicRoute from "./router/publicRoute";
function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          {
            publicRoute.map((router)=><Route key={router} path={router.path} element={<router.Component/>}/>)
          }
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
