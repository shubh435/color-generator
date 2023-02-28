import React, { useState, useEffect } from "react"
// import rgbToHex from "./utils"

const SingleColor = ({ rgb, weight, index, alpha, hexColor }) => {
  const [alert, setAlert] = useState(false)
  const bcg = rgb.join(",")
  // const regbaColor = `rgba(${bcg},${alpha}))`
  const hexValue = `#${hexColor}`

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAlert(false)
    }, 3000)
    return () => clearTimeout(timeOut)
  }, [alert])

  return (
    <article
      onClick={() => {
        setAlert(true)
        navigator.clipboard.writeText(hexValue)
      }}
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
    >
      <p className="percent">{weight}%</p>
      {/* <p className="color-value">{regbaColor}</p> */}
      <p className="color-value">{hexValue}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  )
}

export default SingleColor
