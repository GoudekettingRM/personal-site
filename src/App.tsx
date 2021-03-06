import React from 'react';
import { Switch, Route, useLocation } from 'react-router';
import { Home } from './components/Home/Home';
import { About } from './components/About/About';
import { Projects } from './components/Projects/Projects';
import { ProjectDetails } from './components/Projects/ProjectDetails';
import { Footer } from './components/Footer/Footer';
import { Menu } from './components/Header/Menu';
import { Contact } from './components/Contact/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

const App: React.FC = () => {
  const location = useLocation();
  return (
    <div className="App">
      <Menu />
      <main>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/projects/:projectId" exact component={ProjectDetails} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
};

export default App;
