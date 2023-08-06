import React from 'react'

const BorderBottom = ({color, width = 0, margin = 0}) => {
  return (
    <div style={{borderBottom: `1px solid ${color}`, width: width, margin: margin}}/>
  )
}

export default BorderBottom