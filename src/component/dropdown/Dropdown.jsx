import React from 'react'
import './Dropdown.css'

const Dropdown = ({data, setDiffucultchange}) => {
  return (
    <div className='dropdown'>
      <select onChange={e => setDiffucultchange(e.target.value)} name="" id="">
      {
        data.map((dt, i) => (
          <option key={i} value={dt}>{dt}</option>
        ))
      }
      </select>
    </div>
  )
}

export default Dropdown