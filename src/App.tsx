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

const App = () => {
  return (
    <div className="app">
      <header className="app__header">
        <Navbar />
        <Hero />
      </header>
      <main className="app__main">
        <section className="app__main__feature section" id="products">
          <Feature />
        </section>
        <section className="app__main__reports section" id="services">
          <Reports />
        </section>
        <section className="app__main__cust section">
          <Customize />
        </section>
        <section className="app__main__dash section">
          <Dashboard />
        </section>
        <section className="app__main__pricing section" id="pricing">
          <div className="box"></div>
          <Pricing />
        </section>
      </main>
      <footer className="app__footer" id="contact">
        <Footer />
      </footer>
    </div>
  );
};

export default App;
