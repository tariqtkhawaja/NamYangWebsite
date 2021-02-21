import './App.css';
import { Button } from './components/button';

function App() {
  return (
    <div className="App">
      <header>
        <h2> Nam Yang Worthing Community Association</h2>
        <nav>
          <Button 
            label="Homepage"
            value={1}
          /> 
         <Button 
          label="About us"
          value={2}/>
          <Button 
            label="Timetable"
            value={3}
          />
          <Button 
        label="Contact us"
        value={4}
      />
        

        </nav>

      </header>
      <div className="app-body">
        <p className="adam">Adam has a big willy</p>
        <p>8============3---o</p>
        <p>8============3---o</p>
        <p className="adam">Adam has a big willy</p>
        <p> 8============3---o </p>
        <p> 8============3---o </p>
        <p> 8============3---o </p>
        <p> 8============3---o </p>
        <p> 8============3---o </p>
        <p> 8============3---o </p>
        <p> 8============3---o </p>
        <p> 8============3---o </p>
        <p> 8============3---o </p>
        <p> 8============3---o </p>
        <p> 8============3---o </p>
        <p> 8============3---o </p>
        
      </div>
    </div>
  );
}

export default App;
