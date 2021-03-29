import './App.css';
import AddSolve from './components/AddingSolve/AddingSolve';
import Calendar from './components/Calendar/Calendar';
import Navbar from './components/Navigation/Navbar';
import Notification from './components/Notification/Notification';

const App = () => {
  return <div className="main_menu">
    <Navbar />
    <Notification />
    <AddSolve />
    <Calendar />
</div>
}

export default App;
