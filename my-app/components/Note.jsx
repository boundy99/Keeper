import React from 'react'

export default function Note() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
  return (
    <p>{currentYear}</p>
  )
}
