import React, { Component } from 'react';
import './DataGrid.css';
import { Table } from 'react-bootstrap';

class DataGrid extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        let { responseVal } = this.props;
        let latitude = responseVal.coord.lat,
            longitude = responseVal.coord.lon,
            temp = responseVal.main.temp,
            humidity = '', //responseVal.main.humidity,
            pressure = responseVal.main.pressure;

        let tempInCelcius = parseFloat(temp) - 273.15;

        return (

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        {latitude ? (<th>Latitude</th>) : ''}
                        {longitude ? (<th>Longitude</th>) : ''}
                        {temp ? (<th>Temp(in Celcius)</th>) : ''}
                        {humidity ? (<th>Humidity</th>) : ''}
                        {pressure ? (<th>Pressure</th>) : ''}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        {latitude ? (<td>{latitude}</td>) : ''}
                        {longitude ? (<td>{longitude}</td>) : ''}
                        {tempInCelcius ? (<td>{tempInCelcius}°C </td>) : ''}
                        {humidity ? (<td>{humidity}</td>) : ''}
                        {pressure ? (<td>{pressure}</td>) : ''}
                    </tr>
                </tbody>
            </Table>
        );
    }
}

export default DataGrid;