import React from 'react';
import { Child } from '../Child/Child';


export const Parent = () => {
  const dataArray = new Array(100).fill(0);


  const mapFunction = (d, index) => {
    return <Child name="A" number={index + 1} />
  }

  
  return <div>
    <div style={{width: '100%', height: 500, border: '1px solid black'}}>
    <h1>Parent</h1>

    {
      dataArray.map(mapFunction)
    }

    </div>
  </div>
}