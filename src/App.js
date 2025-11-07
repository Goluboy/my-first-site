import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import MainContent from './components/MainContent/MainContent';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;