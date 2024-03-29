import "./App.css";
import { Routes, Route, } from "react-router-dom";
import { Home, Test, About, Careers, Contact, Accreditation, Lab_network, Online_test } from "./pages";
import { Header, Footer, ImageContent } from "./components";
function App() {
  return (
    <main>
      <Header />

      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="test" element={<Test />} />
        <Route path="careers" element={<Careers />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="accreditation" element={<Accreditation />} />
        {/*eslint-disable-next-line  */}
        <Route path="/lab_network" element={<Lab_network />} />
        {/* eslint-disable-next-line */}
        <Route path="/online_test" element={<Online_test />} />
        {/* <Route path="test/online_test" element={<Online_test />} /> */}
        <Route path="/image-content/:testName" component={ImageContent} />
      </Routes>
        
        

      <Footer />
    </main>
  );
}

export default App;
