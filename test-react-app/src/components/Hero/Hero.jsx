import React from 'react';
import './hero.css'

export const Hero = () => {

  const [count, setCount] = React.useState(0);


  const increaseCount = () => {
    setCount(count + 1);
  }
  console.log(' Hero Component');

  return (
<div>

<div class="container-fluid banner">

    <h1 class="abs-heading">Le Catering


    </h1>
  </div>
</div>

  )
}