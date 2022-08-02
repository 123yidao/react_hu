import React, { useRef, useState } from 'react'

export default function Menud() {
const refs=useRef()
const  [value,setValue]=useState(localStorage.getItem('items')||'')
  const handelClick=()=>{
    // console.log('xxx');
   console.log(refs.current.value,333);
   localStorage.setItem('items',refs.current.value,)
   setValue('')
  }
  return (
    <div>菜单2-2
      <input ref={refs} value={value} onChange={(e)=>setValue(e.target.value)} />
      <button onClick={handelClick}>保存</button>
    </div>
  )
}
