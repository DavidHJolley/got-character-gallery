import './App.css';
import Header from './components/header/Header'
import Hero from './components/Hero/Hero'
import Main from './components/Main/Main'
import Contact from './components/Contact/Contact'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavTabs from './components/NavTabs';

function App() {
  return (
    <Router>
      <div>
        <Header />
        {/* Wrap Route elements in a Routes component */}
        <Routes>
        <Route path="/" element={<Hero />} />
          <Route path="hero" element={<Hero />}></Route>
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="about" element={<Main />} />
          {/* Define a route that will have descendant routes */}
          <Route path="contact" element={<Contact
            name='David Jolley'
            email = 'Davidhjolley2000@gmail.com'
        ></Contact>} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
