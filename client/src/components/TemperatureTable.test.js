import {render, screen} from '@testing-library/react';
import TemperatureTable from './TemperatureTable';

describe('<TemperatureTable />', () => {

     let fakeItems = [
             {
                 id: "2",
                 name: "IPA",
                 minimumTemperature: 4,
                 maximumTemperature: 6,
                 temperature: 2
             }
         ]

    it('renders all product details', () => {
            render(<TemperatureTable items={fakeItems}/>)
            expect(screen.getByText('Product')).toBeTruthy()
            expect(screen.getByText('IPA')).toBeTruthy()
            expect(screen.getByText('Temperature')).toBeTruthy()
            expect(screen.getByText('2')).toBeTruthy()
            expect(screen.getByText('Status')).toBeTruthy()
            expect(screen.getByText('too low')).toBeTruthy()
        });

     it('renders too low', () => {
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
