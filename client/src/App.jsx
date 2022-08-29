import { GlobalStyle } from "./styles/globalStyle";
import { Navigation } from "./components/Navigation";
import { UlbiPagination } from "./components/Paginate";
import { AddNewCard } from "./components/AddNewCard";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navigation />
      <Routes>
        <Route path={"/"} element={<UlbiPagination />} />
        <Route path={"/addCard"} element={<AddNewCard />} />
      </Routes>
    </BrowserRouter>
  );
}
