import "./App.scss";

import {
  Navbar,
  Hero,
  Feature,
  Reports,
  Customize,
  Dashboard,
  Pricing,
  Footer,
} from "./components";
function App() {
  return (
    <div className="App">
      <div className="app__header">
        <Navbar />
        <Hero />
        <div className="box"></div>
      </div>
      <div className="app__feature">
        <Feature />
      </div>
      <div className="app__reports">
        <Reports />
      </div>
      <div className="app__cust">
        <Customize />
      </div>
      <div className="app__dash">
        <Dashboard />
      </div>
      <div className="app__pricing">
        <div className="box"></div>
        <Pricing />
      </div>
      <footer className="app__footer">
      <Footer />
      </footer>
  
    </div>
  );
}

export default App;
