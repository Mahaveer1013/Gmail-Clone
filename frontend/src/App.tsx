import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navbar from "./components/ui/nav/Navbar";
import { useSelector } from "react-redux";
import { RootState } from "./interfaces/redux/rootState";

function App() {

  const user = useSelector((state: RootState) => state.auth.user)

  const Home = lazy(() => import("./pages/Home"));
  const Login = lazy(() => import("./pages/Login"));

  return (
    <>
      <main className="bg-[#f6f8fc]">
        <BrowserRouter>
          <Suspense fallback={<div>Loading...</div>}>
            {user && <Navbar />}
            <Routes>
              <Route path="/" element={user ? <Home /> : <Login />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
