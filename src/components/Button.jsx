import React from 'react'

const Button = ({ icon, bgColor,
   color, size, text, 
   borderRadius, width }) => {
  return (
    <button
      type='button'
      style={{ backgroundColor: bgColor, color, borderRadius }}
      size={`text-${size} p-3 w-${width} hover:drop-shadow-xl`}
    >
      {icon}{text}
    </button>
  )
}

export default Button
