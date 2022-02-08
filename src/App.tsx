import "./App.css";
import Footer from "./pages/layout/footer";
import Header from "./pages/layout/header";
import Router from "./router";

const App = () => {
  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  );
};

export default App;
