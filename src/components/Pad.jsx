import React from 'react'

const Pad = ({btnclick}) => {
  return (
    <div id='calculator'>
      <button onClick={() => btnclick('7')} id='seven'>7</button>
      <button onClick={() => btnclick('8')} id='eight'>8</button>
      <button onClick={() => btnclick('9')} id='nine'>9</button>
      <button onClick={() => btnclick('/')} className='operator' id='divide'>/</button>
      <button onClick={() => btnclick('4')} id='four'>4</button>
      <button onClick={() => btnclick('5')} id='five'>5</button>
      <button onClick={() => btnclick('6')} id='six'>6</button>
      <button onClick={() => btnclick('*')} className='operator' id='multiply'>x</button>
      <button onClick={() => btnclick('1')} id='one'>1</button>
      <button onClick={() => btnclick('2')} id='two'>2</button>
      <button onClick={() => btnclick('3')} id='three'>3</button>
      <button onClick={() => btnclick('+')} className='operator' id='add'>+</button>
      <button onClick={() => btnclick('0')} id='zero'>0</button>
      <button onClick={() => btnclick('.')} id='decimal'>.</button>
      <button onClick={() => btnclick('-')} className='operator' id='subtract'>-</button>
      <button onClick={() => btnclick('clear')} id='clear'>AC</button>
      <button onClick={() => btnclick('=')} id='equals'>=</button>
    </div>
  )
}

export default Pad