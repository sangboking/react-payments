import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AddCard from '@/pages/addcard';
import CardList from '@/pages/cardlist';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddCard />} />
        <Route path="/cardlist" element={<CardList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
