import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Lesson1 from './pages/module1/Lesson1';
import Lesson2 from './pages/module1/Lesson2';
import Lesson3 from './pages/module2/Lesson3';
import Lesson4 from './pages/module2/Lesson4';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/module1/lesson1" element={<Lesson1 />} />
      <Route path="/module1/lesson2" element={<Lesson2 />} />
      <Route path="/module2/lesson3" element={<Lesson3 />} />
      <Route path="/module2/lesson4" element={<Lesson4 />} />      
      {/* Add more routes as needed */}
    </Routes>
  );
}