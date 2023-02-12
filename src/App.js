import './App.css';
import Header from './components/Header';
import React, {useState, useEffect} from 'react';

function App() {
  const [state, setState] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const get = await fetch(`https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`);

      const res = await get.json();

      setData(res);
      console.log(res);
    }
    getData();

    document.title = `(${state}) Employees Online`;

  }, [state])

  return (
    <div className="App">
      <Header />
      <div className='btnandemploy'>
      <button onClick={() => setState(state+1)} type="button" class="btn btn-primary mt-3">Get Employees </button>
      <div className='employee'>Current Online Employees: {state}</div>
      </div>
      {
        data.map((element, index) => {
          return(
            <div className='data'>
              <h4>{element.firstName}</h4>
              <h4>{element.lastName}</h4>
              <h4>{element.email}</h4>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
