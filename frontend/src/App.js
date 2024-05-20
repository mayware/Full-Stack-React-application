import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import HeaderBar from './components/HeaderBar';
import Header from './components/Header';
import PaginationBar from './components/PaginationBar';
import Footer from './components/Footer';
import Item from './pages/Item';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderBar />
        <Header />
        <div className="content-wrapper">
          <div className="content-wrapper-inner">
            <Routes>
              <Route
                path='/'
                element={<Home />}
              />
              <Route
                path='/item'
                element={<Item />}
              />
            </Routes>
          </div>
          <PaginationBar />
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
