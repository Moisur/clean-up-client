import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Services from "./pages/Services/Services";

function App() {
  const publicRoute=[
    {path:'/',name:'Home',Component:Home},
    {path:'/about',name:'About',Component:About},
    {path:'/services',name:'Services',Component:Services},
    {path:'/contact',name:'Contact',Component:Contact},
    {path:'/login',name:'Login',Component:Login},
  ]
  
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
