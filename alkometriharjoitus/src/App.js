import { useState } from 'react';
import './App.css';

function App() {

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
  const [weight, setWeight] = useState('')
  const [bottle, setBottle] = useState(1)
  const [time, setTime] = useState(1);
  const [gender, setGender] = useState('male')
  const [result, setResult] = useState(0)


  const calculate = () => {
    const litres = bottle * 0.33
    const grams = litres * 8 * 4.5
    const burning = weight / 10
    const gramsLeft = grams - (burning * time)
    let abl = 0
    if (gender === 'male') {
      abl = gramsLeft / (weight * 0.7)
    }
    else {
      abl = gramsLeft / (weight * 0.6)
    }
    setResult(abl)

  }

  return (
    <div id="container">
      <h3>Calculating alcohol blood level</h3>
      <div>
        <label>Weight</label>
        <input type="number" value={weight} onChange={e => setWeight(e.target.value)} />
      </div>
      <div>
        <label>Bottles</label>
        <select value={bottle} onChange={e => setBottle(e.target.value)}>
          {
            numbers.map(bottle => (
              <option value={bottle}>{bottle}</option>
            ))
          }
        </select>
      </div>
      <label>Time</label>
      <select value={time} onChange={e => setTime(e.target.value)}>
        {
          numbers.map(time => (
            <option value={time}>{time}</option>
          ))
        }
      </select>
      <div>
        <label>Gender</label>
        <input type="radio" name="gender" value="male" defaultChecked onChange={e => setGender(e.target.value)} /><label>Male</label>
        <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)} /><label>Female</label>
      </div>
      <p><div>
        <label></label>
        <output>{result.toFixed(2)}</output>
      </div>
      </p>
      <div>
        <button type="button" onClick={calculate}>Calculate</button>
      </div>
    </div>

  );
}

export default App;