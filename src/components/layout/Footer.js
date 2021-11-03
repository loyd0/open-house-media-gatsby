import React from "react"
import Linked from "../elements/Linked"
import { StaticImage } from "gatsby-plugin-image"
import ButtonGroup from "../elements/compounds/ButtonGroup"
import Button from "../elements/Button"
import { SocialIcons } from "../elements/SocialIcons"
import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"


const footerNavLeft = [
  "Home",
  "Blogs",
  "About",
  "Get Started",
  "Pricing",
  "Contact",
  "Privacy Policy",
  "Terms & Condition",
]

const contacts = [
  "help@mailbucks.io",
  "clients@mailbucks.io",
  "ethan@mailbucks.io",
]

const followUs = ["facebook", "twitter", "instagram"]


const followUsProps = {
  icons: [
    { icon: faFacebookF, text: "Facebook" },
    { icon: faTwitter, text: "Twitter" },
    { icon: faInstagram, text: "Instagram" }],
  className: "grid grid-cols-1 gap-4 opacity-60",
  showText: true,
}

const Footer = props => {
  return (
    <footer className={"border-t-2 border-gray-300 border-opacity-30 mt-20 pb-20"}>
      {/*mailbucks logo and buttons*/}
      <div className="flex max-w-screen-xl mx-auto font-bold px-2 py-5 mt-20">
        {/*<nav className="hidden md:flex py-4 max-w-screen-lg mx-auto font-bold">*/}
        <Linked linkTo="/home" className="w-1/2	 text-center">
          <div className={"w-48"}>
            <StaticImage
              src={"../../images/mailbucks_logo.png"}
              alt="Mailbucks logo"
              placeholder="blurred"
            />
          </div>
        </Linked>

        <div className={"w-1/2 ml-6 flex justify-end"}>
          <ButtonGroup>
            <div>
              <Button>{"Get A Price"}</Button>
            </div>
            <div className={"ml-4"}>
              <Button altStyle={true}>{"View Results"} </Button>
            </div>
          </ButtonGroup>
        </div>

      </div>

      <div
        className={"mx-auto max-w-screen-xl border-t-2 border-gray-400 border-opacity-30 mt-10"}>
        <div className="mt-20 flex justify-center justify-between">
          {/*pages*/}
          <div className={"flex flex-col"}>
            <h4 className={"text-white font-bold mb-10"}>Pages</h4>
            <ul className={"grid grid-cols-4 gap-4 font-bold"}>
              {footerNavLeft.map(item => {
                return (
                  <li>{item}</li>
                )
              })}
            </ul>
          </div>
          {/*contact*/}
          <div className={"flex flex-col"}>
            <h4 className={"text-white font-bold mb-10"}>Contacts</h4>
            <ul className={"grid grid-cols-1 gap-4 opacity-60"}>
              {contacts.map(item => {
                return (
                  <li>{item}</li>
                )
              })}
            </ul>
          </div>
          {/*follow us*/}
          <div className={"flex flex-col"}>
            <h4 className={"text-white bold mb-10"}>Follow Us</h4>
            <SocialIcons {...followUsProps} />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


