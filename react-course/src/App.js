import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetup";

function App() {
  return (
    <Layout>
      <div>
        <Routes>
          <Route path="/" element={<AllMeetupsPage />} />
          <Route path="/new-meetup" element={<NewMeetupsPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </div>
    </Layout>
  );
}

export default App;
