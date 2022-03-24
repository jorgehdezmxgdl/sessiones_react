import React, { Component } from 'react'
import { ReactSession } from 'react-client-session';


export default class Barra extends Component {
  render() {
    const valor = ReactSession.get('usuario');  
    console.log(valor)
    return (
      <div>Barra</div>
    )
  }
}
