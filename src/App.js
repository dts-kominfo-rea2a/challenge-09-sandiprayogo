import "./App.css";
import Header from "../src/components/Header.js";
import Contact from "../src/components/Contact";
// Uncomment untuk memuat daftar kontak
import contacts from "./data/contacts.json";

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  return (
    <div className="App">
      <Header />
      {contacts.map((contact, i) => {
        return <Contact key={i} data={contact} />;
      })}
    </div>
  );
};

export default App;
