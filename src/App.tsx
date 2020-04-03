import React from "react";
import { Switch, Route } from "react-router";
import "./App.css";
import { Home } from "./components/Home/Home";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Projects } from "./components/Projects/Projects";
import { ProjectDetails } from "./components/Projects/ProjectDetails";
import { Footer } from "./components/Footer/Footer";
import { Menu } from "./components/Header/Menu";

const App: React.FC = () => {
  return (
    <div className="App">
      <Menu />
      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/projects/:id" exact component={ProjectDetails} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
};

export default App;
