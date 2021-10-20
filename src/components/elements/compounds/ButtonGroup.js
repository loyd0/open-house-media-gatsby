import React from "react"
import { string, bool, array } from "prop-types"
import Button from "../Button"


const ButtonGroup = ({ children }) => {
  return (
    <div className={"flex flex-row content-evenly"}>
        {children}
    </div>
  )
}

Button.propTypes = {
  cta: string,
  altStyle: bool,
  buttons: array,
}

export default ButtonGroup
