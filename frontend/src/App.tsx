import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/ui/nav/Navbar";
import { useSelector } from "react-redux";
import { RootState } from "./interfaces/redux/rootState";
import Aside from "./components/ui/aside/Aside";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {

  const user = useSelector((state: RootState) => state.auth.user)

  const [isAsideOpen, setIsAsideOpen] = useState(false);

  return (
    <>
      <main className="bg-[#f6f8fc] min-h-[100vh]">
        {
          user
            ?
            <>
              <BrowserRouter>
                <Navbar setIsAsideOpen={setIsAsideOpen} />
                <Aside isAsideOpen={isAsideOpen} />
                  <Routes>
                    <Route path="/" element={<Home />} />
                  </Routes>
              </BrowserRouter>
            </>
            :
            <Login />
        }
      </main>
    </>
  );
}

export default App;
