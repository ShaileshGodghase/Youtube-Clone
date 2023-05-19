import { Provider } from "react-redux";
import { store } from "../store/store";
import "./globals.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import { Suspense } from "react";
import Loader from "./components/Loader/Loader";
import HomeLayout from "./components/Layout/HomeLayout";

function App() {
  return (
    <>
      <Provider store={store}>
        <Suspense fallback={<Loader />}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomeLayout />}>
                <Route index element={<Home />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </Suspense>
      </Provider>
    </>
  );
}

export default App;
