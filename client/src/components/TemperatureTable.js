import React from 'react';

class TemperatureTable extends React.Component {
    render() {
          return (
              <table>
                <thead>
                  <tr>
                    <th align="left">Product</th>
                    <th align="left">Temperature</th>
                    <th align="left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(this.props.items).map((itemKey) => (
                    <tr key={this.props.items[itemKey].id}>
                      <td width={150}>{this.props.items[itemKey].name}</td>
                      <td width={150}>{this.props.items[itemKey].temperature}</td>
                      <td width={150}>
                        {this.props.items[itemKey].temperature <
                          this.props.items[itemKey].minimumTemperature && <span>too low</span>}
                        {this.props.items[itemKey].temperature >
                          this.props.items[itemKey].maximumTemperature && <span>too high</span>}
                        {this.props.items[itemKey].temperature <=
                          this.props.items[itemKey].maximumTemperature &&
                          this.props.items[itemKey].temperature >=
                            this.props.items[itemKey].minimumTemperature && <span>all good</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
          );
    }
}


export default TemperatureTable;