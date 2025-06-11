import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Landing from "./pages/Landing";
import Books from "./pages/Books";  
import SingleBook from "./pages/SingleBook";
import AddBook from "./pages/AddBook";

import EventsPage from "./pages/EventsPage";

import EditBook from "./pages/EditPage";
import AboutPage from "./pages/About";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/books" element={<Books />} />
        <Route path="/singlebook" element={<SingleBook />} />
        <Route path="/addbook" element={<AddBook />} />
        <Route path="/eventspage" element={<EventsPage />} />
        <Route path="/editbook" element={<EditBook />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;