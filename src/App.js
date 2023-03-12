import React, { useEffect, useRef, useState } from "react"
import SingleColor from "./SingleColor"

import Values from "values.js"

function App() {
  const [color, setColor] = useState("")
  const [error, setError] = useState(false)
  const [list, setList] = useState(new Values("#f15025").all(5))
  const inputRef = useRef()
  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      let colors = new Values(color).all(5)
      setList(colors)
      setError(false)
    } catch (err) {
      setError(true)
      console.log(err)
    }
  }

  useEffect(() => {
    console.log({ inputRef: inputRef })
  }, [])
  return (
    <>
      <section className="container">
        <form onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            type="text"
            name="number "
            id="number"
            onChange={(e) => setColor(e.target.value)}
            value={color}
            placeholder="#f15025"
            className={`${error ? "error" : null}`}
          />
          <button type="submit" className="btn">
            submit
          </button>
        </form>
        <h3 className="mainFont">
          Color generator
        </h3>
      </section>

      <section className="colors">
        <h4 style={{ textAlign:'center'}}>list goes here</h4>
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          )
        })}
      </section>
    </>
  )
}

export default App
