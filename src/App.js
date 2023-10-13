import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Search from './components/Search';
import Pharmacy from './components/Pharmacy';
import Paramedics from './components/Paramedics';
import Ambulance from './components/Ambulance';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';


function App() {
  return (
    <>
    <Header/>
      <Container>
          <Menu/>
          <Search/>
          <Pharmacy/>
          <Paramedics/>
          <Ambulance/>
          <Footer/>
      </Container>
    </>
  );
}

export default App;
