import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Landing from "./pages/Landing";
import Books from "./pages/books";
import SingleBook from "./pages/SingleBook";
import AddBook from "./pages/AddBook";
 feature/Landing
import EventsPage from "./pages/EventsPage";

import EditBook from "./pages/EditPage";
 main

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/books" element={<Books />} />
        <Route path="/singlebook" element={<SingleBook />} />
        <Route path="/addbook" element={<AddBook />} />
 feature/Landing
        <Route path="/eventspage" element={<EventsPage />} />

        <Route path="/editbook" element={<EditBook />} />
 main
      </Routes>
    </BrowserRouter>
  );
}

export default App;
