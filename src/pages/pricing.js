import { StaticImage } from "gatsby-plugin-image"
import ButtonGroup from "../components/elements/compounds/ButtonGroup"
import Button from "../components/elements/Button"
import React from "react"
import Seo from "../components/SEO"
import Layout from "../components/layout/Layout"
import { FAQ } from "./index"


const PricingPage = ({ data }) => {
  return (
    <div className={"bg-background text-white"}>
      <Seo title="Home" />
      <Layout>
        {/*  ============================SECTION==================================*/}

        {/*card blue and black, pricing plans*/}

        <div className={"flex flex-col justify-center text-center mt-20 "}>
          <h3 className={"font-bold text-5xl m-0"}>Performance
            <span
              className={"text-transparent bg-clip-text" +
                " bg-gradient-to-r from-indigo-600 to-blue-400"}
            > Pricing
            </span>
          </h3>
          <p className={"w-1/2 mt-10 mx-auto"}>We’ll integrate our lethal flows that go through rigorous, intensive
            split tests
            & optimizations to convert / re-convert customers across the board.</p>
        </div>

        {/*====== CARDS GROUPED ====*/}
        <div className={"ml-10 mt-10 flex flex-row justify-center"}>


          {/*====== LEFT CARD =======*/}

          <div className={"w-4/12 p-12 bg-gradient-to-r from-gradStart to-gradFin rounded-xl "}>
            <div className={"flex flex-col justify-center"}>
              <h3 className={"font-bold text-4xl m-0"}>Tiered Plans
              </h3>
              <div className={"divide-y-2 divide-white divide-solid"}>
                <div className={"flex flex-wrap mt-5 pb-4"}>
                  <p className={"text-lg font-normal opacity-60 "}>We take a monthly cut of the revenue we generate
                    +
                    a one time set of fee depending on your volume & size.
                  </p>
                </div>

                <div className={"pt-4"}>
                  <h5>Price drops as you scale:
                  </h5>
                </div>
              </div>
              <ul className={"list-none font-normal mt-3"}>
                <li className="flex flex-row align-middle mt-2">
                  <StaticImage
                    src={"../images/whiteCircleTick.svg"}
                    alt="blue_tick"
                    placeholder="blurred"
                    layout="fixed"
                    width={20}
                    height={20}
                  />

                  <div className={"ml-2 opacity-60 "}>$10k-$50k / Mo</div>
                </li>
                <li className="flex flex-row align-middle mt-5">
                  <StaticImage
                    src={"../images/whiteCircleTick.svg"}
                    alt="blue_tick"
                    placeholder="blurred"
                    layout="fixed"
                    width={20}
                    height={20}
                  />
                  <div className={"ml-2 opacity-60 "}>
                    $50k-$100k / Mo
                  </div>
                </li>
                <li className="flex flex-row align-middle mt-5">
                  <StaticImage
                    src={"../images/whiteCircleTick.svg"}
                    alt="blue_tick"
                    placeholder="blurred"
                    layout="fixed"
                    width={20}
                    height={20}
                  />
                  <div className={"ml-2 opacity-60 "}>
                    $100k-$250k / Mo
                  </div>
                </li>
                <li className="flex flex-row align-middle mt-5">
                  <StaticImage
                    src={"../images/whiteCircleTick.svg"}
                    alt="blue_tick"
                    placeholder="blurred"
                    layout="fixed"
                    width={20}
                    height={20}
                  />
                  <div className={"ml-2 opacity-60 "}>
                    $250k-$500k / Mo
                  </div>
                </li>
                <li className="flex flex-row align-middle mt-5 ">
                  <StaticImage
                    className={"opacity-100"}
                    src={"../images/whiteCircleTick.svg"}
                    alt="blue_tick"
                    placeholder="blurred"
                    layout="fixed"
                    width={20}
                    height={20}
                  />
                  <div className={"ml-2 opacity-60 "}>
                    $500k-$1M+ / Mo

                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/*==== RIGHT CARD V===*/}
          <div className={"w-4/12 p-12 rounded-xl bg-blueyGray ml-6"}>
            <div className={"flex flex-col justify-center"}>
              <h3 className={"font-bold text-4xl m-0"}>What We Do
              </h3>

              <div className={"divide-y-2 divide-white divide-solid"}>

                <div className={"flex flex-wrap mt-5 pb-4"}>
                  <p className={"text-lg font-normal opacity-60"}>
                    Here's everything we do to earn our cut.
                    We do the work, you make more profits, we take a small piece of the pie.</p>
                </div>


                <div className={"pt-4"}>
                  <h5>Each tier is treated the same:
                  </h5>
                </div>
              </div>


              <ul className={"list-none font-normal  opacity-60 mt-3"}>
                <li className="flex flex-row align-middle mt-5">
                  <StaticImage
                    src={"../images/whiteCircleTick.svg"}
                    alt="blue_tick"
                    placeholder="blurred"
                    layout="fixed"
                    width={20}
                    height={20}
                  />

                  <div className={"ml-2 opacity-60 "}>Custom tailored set up plan</div>
                </li>
                <li className="flex flex-row align-middle mt-5">
                  <StaticImage
                    src={"../images/whiteCircleTick.svg"}
                    alt="blue_tick"
                    placeholder="blurred"
                    layout="fixed"
                    width={20}
                    height={20}
                  />
                  <div className={"ml-2 opacity-60"}>Fully custom graphics</div>
                </li>
                <li className="flex flex-row align-middle mt-5">
                  <StaticImage
                    src={"../images/whiteCircleTick.svg"}
                    alt="blue_tick"
                    placeholder="blurred"
                    layout="fixed"
                    width={20}
                    height={20}
                  />
                  <div className={"ml-2 opacity-60"}>Battle tested automations</div>
                </li>
                <li className="flex flex-row align-middle mt-5">
                  <StaticImage
                    src={"../images/whiteCircleTick.svg"}
                    alt="blue_tick"
                    placeholder="blurred"
                    layout="fixed"
                    width={20}
                    height={20}
                  />
                  <div className={"ml-2 opacity-60"}>Weekly optimization</div>
                </li>
                <li className="flex flex-row align-middle mt-5">
                  <StaticImage
                    src={"../images/whiteCircleTick.svg"}
                    alt="blue_tick"
                    placeholder="blurred"
                    layout="fixed"
                    width={20}
                    height={20}
                  />
                  <div className={"ml-2 opacity-60 "}>3-5 Campaigns / Mo</div>
                </li>
              </ul>
            </div>
          </div>

        </div>
        <div className={"ml-10 mt-10 flex flex-row justify-center"}>
          {/*======= BUTTON GROUP =======*/}
          <div className={"mt-10 flex"}>
            <ButtonGroup>
              <div>
                <Button>{"Get A Price"}</Button>
              </div>
              <div className={"ml-4"}><Button altStyle={true}>{"View Results"} </Button>
              </div>
            </ButtonGroup>
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


export default PricingPage
