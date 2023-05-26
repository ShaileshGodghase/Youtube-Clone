import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { Provider } from "react-redux";
import { store } from "../store/store";
import "./globals.scss";
import Home from "./components/Home/Home";
import Loader from "./components/Loader/Loader";
import HomeLayout from "./components/Layout/HomeLayout";
import VideoInfo from "./components/VideoInfoComp/VideoInfo";
import Category from "./components/CategoryPage/Category";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <Suspense fallback={<Loader />}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<HomeLayout />}>
                  <Route index element={<Home />} />
                  <Route path="video/:videoId" element={<VideoInfo />} />
                  <Route path="category/:categoryId" element={<Category />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </Suspense>
        </Provider>
      </QueryClientProvider>
    </>
  );
}

export default App;
