import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navbar from "./components/ui/nav/Navbar";
import { useSelector } from "react-redux";
import { RootState } from "./interfaces/redux/rootState";
import Aside from "./components/ui/aside/Aside";

function App() {

  const user = useSelector((state: RootState) => state.auth.user)

  const Home = lazy(() => import("./pages/Home"));
  const Login = lazy(() => import("./pages/Login"));

  return (
    <>
      <main className="bg-[#f6f8fc] min-h-[100vh]">
        <Suspense fallback={<div>Loading...</div>}>
          {
            user
              ?
              <>
                <BrowserRouter>
                  {user &&
                    <>
                      <Navbar />
                      <Aside />
                    </>
                  }
                  <Routes>
                    <Route path="/" element={<Home />} />
                  </Routes>
                </BrowserRouter>
              </>
              :
              <Login />
          }
        </Suspense>
      </main>
    </>
  );
}

export default App;
