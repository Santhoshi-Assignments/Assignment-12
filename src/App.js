import React  from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Dashboard from './user-login/Dashboard';
import Login from './user-login/Login';
import Registration from './user-login/Registration';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route
            path="/dashboard"
            element={<Dashboard />}
          />
        </Routes>
      </div>
    </Router>
 
  );
}

export default App;

