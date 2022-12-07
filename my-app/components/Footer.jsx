import React from 'react'

export default function footer() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    
  return (
    <div>Copyright {currentYear}</div>
  )

}
