import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Form from './components/Form';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">
              React Form App
            </Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Form />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;