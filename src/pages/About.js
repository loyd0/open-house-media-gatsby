import { StaticImage } from "gatsby-plugin-image"
import ButtonGroup from "../components/elements/compounds/ButtonGroup"
import Button from "../components/elements/Button"
import React from "react"
import Seo from "../components/SEO"
import Layout from "../components/layout/Layout"
import { autoPilots, FAQ } from "./index"


const AboutPage = ({ data }) => {
  return (
    <div className={"bg-background text-white"}>
      <Seo title="Home" />
      <Layout>
        {/*======= SECTION =======*/}
        {/*======= TOP COMPONENT =======*/}
        <div className="flex justify-center">
          <div className={"flex flex-col  mt-20 max-w-screen-lg"}>
            <h3 className={"font-bold text-5xl m-0"}>We're Here To Accompany
              <span
                className={"text-transparent bg-clip-text" +
                " bg-gradient-to-r from-indigo-600 to-blue-400"}
              > Your Growth
            </span>
            </h3>
            <p className={"text-lg font-normal opacity-60"}>
              We're here, right by your side to help you grow, scale and automate your business. We want you to focus on
              doing the things you've already mastered while we make sure your business generates healthy profits on a
              consistent basis.
            </p>

            <div className="mt-20">
              <div className="w-full h-full">
                <StaticImage
                  className={"rounded-l-2xl"}
                  src={"../images/mailbucksBigPhoto.png"}
                  alt="mailbucks logo Large"
                  placeholder="blurred"
                />
              </div>
            </div>
          </div>
        </div>


        {/*  ====================== section ===========================*/}
        {/* 6 card, title, description*/}
        <div className={"flex flex-col justify-center  text-center mt-20 "}>
          <h3 className={"font-bold text-5xl m-0"}>Our Company
            <span
              className={"text-transparent bg-clip-text" +
              " bg-gradient-to-r from-indigo-600 to-blue-400"}
            > Values
          </span>
          </h3>
          <div className={" text-center flex justify-center flex-wrap mt-10"}>
            <p className={"w-1/3"}>We strive to be the best, we never settle for less and thats why we're the industry
              leading authorities. No other agency compares.</p>
          </div>
          <div className={"flex justify-center mt-10"}>
            <div className={"grid grid-cols-3 max-w-screen-2xl gap-4"}>{autoPilots.map((auto, index) => {
              console.log({ logo: auto.logo })
              return (
                <div key={index} className={"rounded-2xl bg-blueyGray p-8 w-96"}>
                  <div className={"flex sm:justify-center sm:items-center"}>

                    {/*image*/}
                    <div className={"w-full"}>
                      <StaticImage
                        className={"rounded-3xl"}
                        src={auto.logo}
                        alt="Logo"
                        placeholder="blurred"
                      />
                    </div>
                  </div>
                  <h4 className={"mt-10 text-center font-bold text-2xl "}>{auto.title}</h4>
                  <div className={"mt-10"}>{auto.description}</div>
                </div>
              )
            })}</div>


          </div>

          {/*BUTTON GROUPING */}
          <div className={"mt-10 flex justify-center"}>
            <ButtonGroup>
              <div>
                <Button>{"Get A Price"}< /Button>
              </div>
              <div className={"ml-4"}><Button altStyle={true}>{"View Results"} </Button>
              </div>
            </ButtonGroup>
          </div>


        </div>
        {/*  ============================SECTION==================================*/}
        {/* carousel */}
        <div className="flex justify-center align-middle mt-80">
          <div className={"max-w-screen-xl"}>
            <div className={"w-5/12"}>
              <div className={"flex flex-col justify-center"}>


                <div className={"flex flex-col"}>
                  <h3 className={"font-bold text-5xl m-0"}>The <span
                    className={"font-bold text-5xl  text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-400"}>Amazing Team</span>
                  </h3>
                  <h3 className={"font-bold text-5xl m-0"}>Behind <span
                    className={"font-bold text-5xl  text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-400"}>Mailbucks</span>
                  </h3>
                </div>
                <div className={"flex flex-wrap mt-10"}>
                  <p className={"opacity-60"}>With our elusive company culture & calibre of clientele MailBucks has our
                    pick of
                    the litter all across the world when it comes to who we want on our team. What you see in front of
                    you
                    is a culmination of that.</p>
                </div>
              </div>
            </div>


            <div className={"grid grid-cols-2 mt-20"}>{autoPilots.map((auto, index) => {
              return (
                <div key={index} className={"rounded-2xl bg-blueyGray p-8 w-96"}>
                  <div className={"flex sm:justify-center sm:items-center"}>

                    {/*image*/}
                    <div className={"w-full"}>
                      <StaticImage
                        className={"rounded-3xl"}
                        src={auto.logo}
                        alt="Logo"
                        placeholder="blurred"
                      />
                    </div>
                  </div>
                  <h4 className={"mt-10 text-center font-bold text-2xl"}>{auto.title}</h4>
                  <div className={"mt-10"}>{auto.description}</div>
                </div>
              )
            })}


            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}


export default AboutPage
