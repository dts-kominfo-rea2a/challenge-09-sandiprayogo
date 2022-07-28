import "./App.css";
import Header from "./components/Header";
import Contact from "./components/Contact";

// Uncomment untuk memuat daftar kontak
import contacts from "./data/contacts.json";

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  const contactData = contacts.map(contact => 
    <Contact data={contact} key={contact.name}/>
    );
  
    return (
    <div className="App">
      <Header/>
      {contactData}
    </div>
  );
};

export default App;
