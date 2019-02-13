import React, { Component } from 'react';
import './Weather.css';
import DataGrid from './../DataGrid/DataGrid';
import { Form, Button, Col, Row } from 'react-bootstrap';
import * as Config from './../../config';

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        city: ''
      },
      response: '',
      error: ''
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const { formData } = this.state
    formData[event.target.name] = event.target.value
    this.setState({ formData })
  }

  handleSubmit(e) {
    e.preventDefault()
    const { city } = this.state.formData


    fetch(Config.API_URL + city + ',IN&APPID=' + Config.APP_ID)
      .then((result) => {
        if (result.status === 404) {
          this.setState({
            error: 'Please use Indian city names'
          });
          return;
        }
        this.setState({
          error: ''
        });
        return result.json();
      }).then((jsonResult) => {
        this.setState({
          response: jsonResult
        });
        console.log(jsonResult)
      })
  }



  render() {
    const { formData, response, error } = this.state
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Row>
            <Form.Group controlId="formBasic">
              <Form.Control type="text" name="city" value={formData.city}
                onChange={this.handleChange} placeholder="Enter city name" />
            </Form.Group>

            <Form.Group as={Row}>
              <Col sm={{ span: 10, offset: 2 }}>
                <Button type="submit">submit</Button>
              </Col>
            </Form.Group>
          </Form.Row>
          {error ? (<span>{error}</span>) : ''}
          {response ? (<DataGrid responseVal={response} />) : ''}
        </Form>
      </div>
    );
  }
}

export default Weather;
