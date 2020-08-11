import React from 'react'
import Card from '../Card'
import { Form } from 'react-bootstrap'

import {connect, useDispatch} from 'react-redux';
import { alterarNumeroMaximo, alterarNumeroMinimo } from '../../store/actions/numeros';

function Intervalo({min, max}) {

  const dispatch = useDispatch();

  const alterarMin = e => dispatch(alterarNumeroMinimo(+e.target.value));
  const alterarMax = e => dispatch(alterarNumeroMaximo(+e.target.value));
  
  return (
    <Card 
      title='Intervalo de Números'
      color='#EE4900'
    >
      Mínimo: 
      <Form.Control
        type='text' 
        value={min}
        onChange={alterarMin}
        style={{marginLeft: '8px'}}
      />  
      
      <span style={{padding: '0 8px'}}>|</span> 
      
      Máximo: 
      
      <Form.Control
        type='text'
        value={max}
        onChange={alterarMax}
        style={{marginLeft: '8px'}}
      />     
    </Card>
  )
}

const mapStateToProps = state => {
  return{
    min: state.numeros.min,
    max: state.numeros.max
  }
}

export default connect(mapStateToProps)(Intervalo)