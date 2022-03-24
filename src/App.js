import React, { Component } from 'react'
import { ReactSession } from 'react-client-session';
import Barra from './components/Barra';

export default class App extends Component {
  constructor(props) {
    super(props)
    //ReactSession.setStoreType("cookie")
    ReactSession.setStoreType("cookie")
  }
 
  componentDidMount() {
      // try {
      //    const valor = ReactSession.get('usuario')
      //    console.log("Tramap:", valor)
      // } catch (err) {
      //   console.log("Entra aqui")
      //   ReactSession.set('usuario','jorge')
      // } 
      fetch('http://localhost:4000/api/v1/token').then((response)=>
        response.json()
      ).then(data => {
        console.log(data)
        ReactSession.set('token',data.token);
      })

      
  }


  render() {
    return (
      <div>
        App
        <Barra/>
      </div>
    )
  }
}
