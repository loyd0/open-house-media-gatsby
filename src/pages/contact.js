import { StaticImage } from "gatsby-plugin-image"
import ButtonGroup from "../components/elements/compounds/ButtonGroup"
import Button from "../components/elements/Button"
import React from "react"
import Seo from "../components/SEO"
import Layout from "../components/layout/Layout"
import { FAQ } from "./index"


const ContactPage = ({ data }) => {
  return (
    <div className={"bg-background text-white"}>
      <Seo title="Home" />
      <Layout>

        {/*======= FAQ =======*/}
        <div className={"flex flex-col  mt-20"}>
          <div className={"mx-auto"}>
            <div className={"text-center font-bold text-2xl"}>
              <h3>title</h3>
              <p>description</p>
              <div>formformformformform</div>
            </div>
          </div>
        </div>

        {/*======= SECTION =======*/}
        {/*======= FAQ =======*/}
        <div className={"flex flex-col max-w-screen-2xl mt-20"}>
          <div className={"mx-auto"}>
            <h3 className={"font-bold text-5xl m-0"}>Frequesntly Asked
              <span
                className={"text-transparent bg-clip-text" +
                  " bg-gradient-to-r from-indigo-600 to-blue-400"}
              > Questions
              </span>
            </h3>
          </div>
        </div>

        <div className={"flex justify-center mt-10"}>
          <div className={"grid grid-cols-2 max-w-screen-2xl gap-6"}>{FAQ.map((fq, index) => {
            return (
              <div key={index} className={"rounded-2xl bg-blueyGray p-8 flex flex-row "}>
                <div className={"w-4/6"}><h4 className={"font-bold text-2xl"}>{fq.title}</h4>
                </div>
                <div className={"w-2/6 flex justify-end items-end"}>
                  <div className={""}>
                    <button className={"bg-gradient-to-r from-gradStart to-gradFin rounded-lg font-bold py-2 px-4"}>
                      <div className={"text-2xl"}>{">"}</div>
                    </button>
                  </div>
                </div>

                <div className={"mt-10 hidden"}>{fq.description}</div>
              </div>
            )
          })}</div>
        </div>
      </Layout>
    </div>
  )
}


export default ContactPage
