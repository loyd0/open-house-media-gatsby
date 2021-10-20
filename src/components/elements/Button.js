import React from "react"
import { string, bool } from "prop-types"

const Button = ({ children, altStyle }) => {



  return (
  <button onClick={() => {}} className={`${altStyle ? "border-white border-2" : "bg-gradient-to-r from-gradStart to-gradFin"} rounded-lg text-bold py-3 px-7`}>
      {children}
    </button>
  )
}

Button.propTypes = {
  cta: string,
  altStyle: bool,
}

export default Button
