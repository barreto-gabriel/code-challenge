import {render, screen} from '@testing-library/react';
import TemperatureTable from './TemperatureTable';

describe('<TemperatureTable />', () => {
     it('renders too low', () => {
        let fakeItems = [
            {
                id: "2",
                name: "IPA",
                minimumTemperature: 4,
                maximumTemperature: 6,
                temperature: 2
            }
        ]

        render(<TemperatureTable items={fakeItems}/>)
        expect(screen.getByText('too low')).toBeTruthy()
    });

     it('renders too high', () => {
         let fakeItems = [
                    {
                        id: "2",
                        name: "IPA",
                        minimumTemperature: 4,
                        maximumTemperature: 6,
                        temperature: 8
                    }
                ]

        render(<TemperatureTable items={fakeItems}/>)
        expect(screen.getByText('too high')).toBeTruthy()
    });

     it('renders all good', () => {
      let fakeItems = [
         {
             id: "2",
             name: "IPA",
             minimumTemperature: 4,
             maximumTemperature: 6,
             temperature: 5
         }
     ]

        render(<TemperatureTable items={fakeItems}/>)
        expect(screen.getByText('all good')).toBeTruthy()
    });
});
