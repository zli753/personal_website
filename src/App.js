import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home'
import ContactUs from './components/pages/contactForm';
import Resume from './components/pages/Resume';
import Footer from './components/Footer';

function App() {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/contact' exact component={ContactUs}/>
                <Route path='/resume' exact component={Resume}/>
            </Switch>
            <Footer/>
        </Router>
    );
}

export default App;
