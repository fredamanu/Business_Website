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
  Partners,
} from "./components";

const App = () => {
  return (
    <div className="app">
      <header className="app__header">
        <div>
          <Navbar />
        </div>

        <div className="app__header__hero">
          <Hero />
        </div>
      </header>
      <main className="app__main">
        <section
          className="app__main__partners section"
          style={{ background: "white" }}
        >
          <Partners />
        </section>

        <section
          className="app__main__feature section"
          id="products"
          style={{ background: "white" }}
        >
          <Feature />
        </section>
        <div style={{ background: "white", paddingBottom: "120px" }}>
          <section className="app__main__reports section" id="services">
            <Reports />
          </section>
          <section className="app__main__cust section">
            <Customize />
          </section>
          <section className="app__main__dash section">
            <Dashboard />
          </section>
        </div>

        <section className="app__main__pricing" id="pricing">
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
