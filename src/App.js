import './styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import HomePage from './components/homepage';
import Team from './components/team';
import Navigation from './components/navbar';
import Footer from './components/footer';
import Layout from './components/layout';
import RecentSales from './components/recentSales';
import AboutUs from './components/aboutUs';
import ContactUs from './components/contactUs';
import CanterburyBroughtonStreet from './components/recentSales/canterburyBroughtonStreet';
import BlacktownIrelandSt from './components/recentSales/blacktownIrelandSt';
import WentworthvilleLaneSt from './components/recentSales/wentworthvilleLaneSt';
import BlacktownSparkleAv from './components/recentSales/blacktownSparkleAv';
import WentworthvilleCraddockSt from './components/recentSales/wentworthvilleCraddockSt';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="recentSales" element={<RecentSales />} />
          <Route path="team" element={<Team />} />
          <Route path="about" element={<AboutUs />} />
          <Route
            path="canterburyBroughtonStreet"
            element={<CanterburyBroughtonStreet />}
          />
          <Route path="blacktownIrelandSt" element={<BlacktownIrelandSt />} />
          <Route
            path="wentworthvilleLaneSt"
            element={<WentworthvilleLaneSt />}
          />
          <Route path="blacktownSparkleAv" element={<BlacktownSparkleAv />} />
          <Route
            path="wentworthvilleCraddockSt"
            element={<WentworthvilleCraddockSt />}
          />
          <Route path="contact" element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
