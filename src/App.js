import React, { Component } from 'react';
import styled from 'styled-components';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.sumX = this.sumX.bind(this);
    this.sumY = this.sumY.bind(this);
    this.calcZeff = this.calcZeff.bind(this);
  }
  state = {
    cmpdName: 0,
    w1: 0, w2: 0, w3: 0, w4: 0, a1: 0, a2: 0, a3: 0, a4: 0, z1: 0, z2: 0, z3: 0, z4: 0, mac: 0, zeff: 0,
    MAI1: 0, MAI2: 0, MAI3: 0, MAI4: 0,
  }
  
  onChangeText = (e) => {
    this.setState({
      cmpdName: e.target.value
    })
  }
  onChangew1 = (e) => {
    this.setState({
      w1: e.target.value
    })
    
  }
  onChangew2 = (e) => {
    this.setState({
      w2: e.target.value
    })

  }
  onChangew3 = (e) => {
    this.setState({
      w3: e.target.value
    })

  }
  onChangew4 = (e) => {
    this.setState({
      w4: e.target.value
    })

  }
  onChangea1 = (e) => {
    this.setState({
      a1: e.target.value
    })

  }
  onChangea2 = (e) => {
    this.setState({
      a2: e.target.value
    })

  }
  onChangea3 = (e) => {
    this.setState({
      a3: e.target.value
    })

  }
  onChangea4 = (e) => {
    this.setState({
      a4: e.target.value
    })

  }
  onChangez1 = (e) => {
    this.setState({
      z1: e.target.value
    })

  }
  onChangez2 = (e) => {
    this.setState({
      z2: e.target.value
    })

  }
  onChangez3 = (e) => {
    this.setState({
      z3: e.target.value
    })

  }
  onChangez4 = (e) => {
    this.setState({
      z4: e.target.value
    })

  }
  onChangeMAC = (e) => {
    this.setState({
      mac: e.target.value
    })
  }

  onChangeMAI1 = (e) => {
    this.setState({
      MAI1: e.target.value
    })
  }
  onChangeMAI2 = (e) => {
    this.setState({
      MAI2: e.target.value
    })
  }

  onChangeMAI3 = (e) => {
    this.setState({
      MAI3: e.target.value
    })
  }
  onChangeMAI4 = (e) => {
    this.setState({
      MAI4: e.target.value
    })
  }

  // formulars
  sumX() {
    let x1 = this.state.w1 / this.state.a1;
    let x2 = this.state.w2 / this.state.a2;
    let x3 = this.state.w3 / this.state.a3;
    let x4 = this.state.w4 / this.state.a4;
    if (this.state.cmpdName === '2') {
      let sum = x1 + x2;
      return sum;
    }
    if (this.state.cmpdName === '3') {
      let sum = x1 + x2 + x3;
      return sum;
    }
    if (this.state.cmpdName === '4') {
      let sum = x1 + x2 + x3 + x4;
      return sum;
    }
    
    // this.setState({
    //   sumX: sum
    // })
  }

  sumY() {

    let y1 = this.state.w1 * this.state.a1 * this.state.MAI1 / this.state.z1;
    let y2 = this.state.w2 * this.state.a2 * this.state.MAI2 / this.state.z2;
    let y3 = this.state.w3 * this.state.a3 * this.state.MAI3 / this.state.z3;
    let y4 = this.state.w4 * this.state.a4 * this.state.MAI4 / this.state.z4;
    if (this.state.cmpdName === '2') {
      let sumY = y1 + y2;
      return sumY;
    }
    if (this.state.cmpdName === '3') {
      let sumY = y1 + y2 + y3;
      return sumY;
    }
    if (this.state.cmpdName === '4') {
      let sumY = y1 + y2 + y3 + y4;
      return sumY;
    }

  }
  calcZeff() {
    let sumX = this.sumX();
    let sumY = this.sumY();
    let product = sumX * sumY;
    let zeff = this.state.mac / product;
    this.setState({
      zeff: zeff
    })
    // console.log(zeff*2);
    
  }
  onChangeZeff(e) {
    this.setState({
      zeff: e.target.value
    })
    alert("Zeff has been changed");
  }
  render() {
    return (
      <div className="container mt-5" style={{border: "1px dotted black", padding: "30px"}}>
        <h1 className="text-capitalize mb-5 text-center">simple zeff calculator</h1>
        <Wrapper>
          <div className="cmpdBox">
            <label className="mb-4 font-weight-bold" style={{ fontSize: '20px' }}>Name of Compound</label>
            <input type="text" className="text-uppercase font-weight-bold text-center" style={{ padding: '5px', marginLeft: '10px' }} />
          </div>
          <div className="cmpdBox">
            <label className="mb-4 font-weight-bold" style={{fontSize: '20px'}}>Number of Elements</label>
            <input type="number" value={this.state.cmpdName} onChange={this.onChangeText} style={{ padding: '5px', marginLeft: '10px'}}/>
          </div>

          <div className="stateTypes">
            <label>W1: </label>
            <input className="mx-2" type="number" value={this.state.w1} onChange={this.onChangew1} name="w1" />
            <label>A1: </label>
            <input className="mx-2" type="number" value={this.state.a1} onChange={this.onChangea1} name="a1" />
            <label>Z1: </label>
            <input className="mx-2" type="number" value={this.state.z1} onChange={this.onChangez1} name="z1" />
          </div>

          <div className="stateTypes">
            <label>W2: </label>
            <input className="mx-2" type="number" value={this.state.w2} onChange={this.onChangew2} name="w2" />
            <label>A2: </label>
            <input className="mx-2" type="number" value={this.state.a2} onChange={this.onChangea2} name="a2" />
            <label>Z2: </label>
            <input className="mx-2" type="number" value={this.state.z2} onChange={this.onChangez2} name="z2" />
          </div>

          <div className="stateTypes">
            <label>W3: </label>
            <input className="mx-2" type="number" value={this.state.w3} onChange={this.onChangew3} name="w3" />
            <label>A3: </label>
            <input className="mx-2" type="number" value={this.state.a3} onChange={this.onChangea3} name="a3" />
            <label>Z3: </label>
            <input className="mx-2" type="number" value={this.state.z3} onChange={this.onChangez3} name="z3" />
          </div>

          <div className="stateTypes">
            <label>W4: </label>
            <input className="mx-2" type="number" value={this.state.w4} onChange={this.onChangew4} name="w4" />
            <label>A4: </label>
            <input className="mx-2" type="number" value={this.state.a4} onChange={this.onChangea4} name="a4" />
            <label>Z4: </label>
            <input className="mx-2" type="number" value={this.state.z4} onChange={this.onChangez4} name="z4" />
          </div>

          <div className="">
            <label className="mb-4">MAC:</label>
            <input type="number" value={this.state.mac} onChange={this.onChangeMAC} style={{ padding: '5px', marginLeft: '5px'}}/>
          </div>
          <div className="">
            <label className="mb-4">MAI 1:</label>
            <input type="number" value={this.state.MAI1} onChange={this.onChangeMAI1} style={{ padding: '5px', marginLeft: '5px' }} />
          </div>
          <div className="">
            <label className="mb-4">MAI 2:</label>
            <input type="number" value={this.state.MAI2} onChange={this.onChangeMAI2} style={{ padding: '5px', marginLeft: '5px' }} />
          </div>
          <div className="">
            <label className="mb-4">MAI 3:</label>
            <input type="number" value={this.state.MAI3} onChange={this.onChangeMAI3} style={{ padding: '5px', marginLeft: '5px' }} />
          </div>
          <div className="">
            <label className="mb-4">MAI 4:</label>
            <input type="number" value={this.state.MAI4} onChange={this.onChangeMAI4} style={{ padding: '5px', marginLeft: '5px' }} />
          </div>

          <div className="text-center">
            <input type="button" onClick={this.calcZeff} value="Calculate Zeff" />
            <p className="mt-3">ZEFF VALUE: {this.state.zeff}</p>
          </div>
        </Wrapper>
      </div>
    );
  }
}

const Wrapper = styled.form`
  .stateTypes {
    margin-bottom: 20px;
  }
`;