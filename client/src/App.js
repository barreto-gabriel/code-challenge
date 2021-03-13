import { useEffect, useState } from 'react';
import TemperatureTable from './components/TemperatureTable';
var data = require('./temperatureData.json');

function App() {
  const [items, setItems] = useState({});

  useEffect(() => {
    const request = () =>
      data.forEach((product) => {
        fetch(`http://localhost:8081/temperature/${product.id}`)
          .then((response) => response.json())
          .then((response) =>
            setItems((prevItems) => ({
              ...prevItems,
              [product.id]: {
                ...product,
                ...response,
              },
            }))
          );
      });

    setInterval(request, 5000);

    request();
  }, []);

    return (
        <div className="App">
            <h2>Beers</h2>
            <TemperatureTable items={items} />
        </div>
    );

}

export default App;
