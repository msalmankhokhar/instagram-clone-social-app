import React from 'react'

export default function Button({text}) {
  return (
    <button className="text-xs p-2 font-bold text-white bg-sky-500 rounded hover:bg-sky-400">{text}</button>
  )
}
