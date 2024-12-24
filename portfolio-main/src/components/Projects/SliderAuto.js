import React from 'react'

export default function SliderAuto(props) {

  return (
    <div>
      <a href={props.href} target='blank'><h1>{props.name}</h1></a> 
      <img alt="ArieGonzAguer project" src={props.src}/>
    </div>
  );

}
