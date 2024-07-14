import React from 'react'
import Profilepic from './Profilepic'

export default function StatusListItem({h=60, y=60}) {
  return (
      <div className="flex flex-col gap-1">
          <Profilepic />
          <p className="text-center text-xs dark:text-white">saady_01</p>
      </div>
  )
}