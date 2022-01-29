import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Home } from "./pages/home/Home";
import { Room } from "./pages/room/Room";
import {Toaster} from "react-hot-toast";
import {NoMatch} from "./pages/NoMatch";
import {Header} from "./components/Header";

function App() {
  return (
    <BrowserRouter basename={`/${import.meta.env.VITE_BASE_ROUTE}`}>
      <Toaster position='bottom-right' />
      <Header />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/:roomId" element={<Room />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
