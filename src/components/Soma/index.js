import React from 'react'
import Card from '../Card'

import { connect } from 'react-redux';

function Soma(props) {

  const {min, max} = props;

  return (
    <Card 
      title='Soma dos Números'
      resultado={min+max}
    />
  )
}

const mapStateToProps = state => {
  return{
    min: state.numeros.min,
    max: state.numeros.max
  }
}

export default connect(mapStateToProps)(Soma)
