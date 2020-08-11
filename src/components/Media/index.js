import React from 'react'
import Card from '../Card'
import {connect} from 'react-redux';

function Media({min, max}) {
  return (
    <Card 
      title='Média dos Números'
      resultado={(min+max)/2}
    />
  )
}

const mapStateToProps = state => {
  return{
    min: state.numeros.min,
    max: state.numeros.max
  }
}
export default connect(mapStateToProps)(Media);
