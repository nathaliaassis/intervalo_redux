import React from 'react'
import { Card as Box } from 'react-bootstrap'

export default function Card(props) {
  const {title, color, resultado, children} = props;
  
  return (
    <Box 
      style={{border: `1px solid ${color || '#6822d8'}`, borderRadius: '8px', margin: '8px', width: '100%'}}
    >
      <Box.Header style={{fontSize: '14px', fontWeight: 'bold',color:color || '#6822d8',textAlign:'center', textTransform: 'uppercase', padding: '16px', borderBottom: `1px solid ${color || '#6822d8'}`}}>
        {title}
      </Box.Header>
      <Box.Body>
        <Box.Title>{}</Box.Title>
        <Box.Text style={{padding: '16px', fontSize: '14px', fontWeight: 'bold', textAlign: 'center'}}>
          {resultado ? `Resultado: ${resultado}` : children }
        </Box.Text>
      </Box.Body>
    </Box>
  )
}
