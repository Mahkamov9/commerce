import React, { useContext } from 'react'
import { DataContext } from '../../App'

export default function Basket() {
  const data = useContext(DataContext)
  console.log(data,"yhtwadaw")
  return (
    <>
      <section>
        <div className="container">
          <p>Basket Page</p>
        </div>
      </section>
    </>
  )
}
