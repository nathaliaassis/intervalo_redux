import React from 'react'
import Card from '../Card'

import {connect} from 'react-redux';

function Sorteio({min, max}) {
  return (
    <Card 
      title='Sorteio de um número'
      resultado={parseInt(Math.random() * (max - min)) + min}
    />
  )
}
const mapStateToProps = state => {
  return{
    min: state.numeros.min,
    max: state.numeros.max
  }
}
export default connect(mapStateToProps)(Sorteio)