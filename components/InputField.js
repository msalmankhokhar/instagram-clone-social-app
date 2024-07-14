import React from 'react'

export default function InputField({ type = 'text', placeholder = 'Place holder'}) {
  return (
    <input placeholder={placeholder} type={type} className="text-xs p-2 border border-gray-300 bg-slate-50 outline-none focus:border-slate-500 rounded-sm" />
  )
}
