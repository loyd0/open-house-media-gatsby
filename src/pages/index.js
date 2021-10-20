import React from "react"
import Layout from "../components/layout/Layout"
import Seo from "../components/SEO"
import { StaticImage } from "gatsby-plugin-image"
import Button from "../components/elements/Button"
import ButtonGroup from "../components/elements/compounds/ButtonGroup"
import Carousel from "../components/elements/Carousel"


const autoPilots = [{
  logo: "../images/emailAuto.png",
  title: "Email Automations",
  description: "We set up and manage highly profitable branded email flows " +
    "such as abandoned carts, welcome series, " +
    "customer win back, upsells / cross sells and much more.",
}, {
  logo: "../images/emailAuto.png",
  title: "Email Campaigns",
  description: "Your customers love hearing from you. We regularly send out " +
    "manual campaigns keeping your customers engaged and re-converting them generating extra revenue.",
}, {
  logo: "../images/emailAuto.png",
  title: "List Segmentation",
  description: "Don't sell cat food to dog owners, it won't work. Every email " +
    "sent by us is tailored for the right consumer. This reduces unsubscribe rates and increases conversions.",
}, {
  logo: "../images/emailAuto.png",
  title: "List Management",
  description: "Let us manage your list and segment customers based on their " +
    "similarities so we can offer personalized content. " +
    "This skyrockets your CTR'S and conversions meaning more $.",
}, {
  logo: "../images/emailAuto.png",
  title: "Account Optimzation\n",
  description: "We perform A/B split tests on every email on a weekly " +
    "bases so we can continue improving, scaling, and finding" +
    " the perfect combinations your customers want to engage with.",
}, {
  logo: "../images/emailAuto.png",
  title: "Sms Marketing\n",
  description: "Along with our email services we offer sms marketing. " +
    "We mastered the art of marketing through sms over the years resulting " +
    "the best ROI's our clients have ever seen.",
}]


const IndexPage = ({ data }) => {
  return (
    <div className={"bg-background text-white"}>
      <Seo title="Home" />
      <Layout>

        {/*  ====================== section ===========================*/}

        {/*top hero card*/}


        <div className={"flex max-w-screen-lg  mx-auto mt-10 "}>
          {/*title*/}
          {/*left hand side card*/}
          <div className={"flex flex-col w-3/5"}>
            <h3 className={"text-6xl font-bold"}>Email Marketing</h3>
            <h3 className={"text-6xl font-bold"}>For
              <span className={"text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-blue-400"}>
                  Ecommerce
               </span>
            </h3>
            {/*Description*/}
            <p>Our agency helps ecommerce & info product businesses produce
              <span className={"font-bold"}> spine-chilling profits </span>
              via monetizing existing traffic through emails.
            </p>

            {/*<ButtonGroup/>*/}
            {/*cite*/}
            <div className={"mt-10 flex"}>
              <ButtonGroup>
                <div>
                  <Button>{"Get A Price"}</Button>
                </div>
                <div className={"ml-4"}><Button altStyle={true}>{"View Results"} </Button>
                </div>
              </ButtonGroup>
            </div>

            <p className={"mt-10"}>Currently managing 57+ clients via Klaviyo</p>

            {/*logo*/}
            <div className="mt-10">
              <StaticImage
                src={"../images/klavyioMaster.png"}
                alt="klavyio Master"
                placeholder="blurred"
                layout="fixed"
                width={300}
                height={50}
              />
            </div>
          </div>
          {/*righ side of card*/}
          <div className={"hidden sm:flex justify-center items-center w-2/5"}>
            {/*image*/}
            <StaticImage
              className={"rounded-3xl"}
              src={"../images/dashboard.png"}
              alt="A dinosaur"
              placeholder="blurred"
              layout="fixed"
              width={700}
              height={700}
            />
          </div>
        </div>

        {/*  ====================== section ===========================*/}
        {/*  gradient banner*/}
        <div className={"flex flex-row  mx-28 mt-20 p-12 bg-gradient-to-l from-gradStart to-gradFin rounded-xl "}>
          <h3 className={"w-3/5 font-bold text-6xl m-0"}>$12,000,000+</h3>
          <p className={"w-2/5 font-normal text-2xl  opacity-60"}>Total Yearly Revenue Generated For Our Clients Through
            Email Marketing</p>
        </div>


        {/*  ====================== section ===========================*/}
        {/* 6 card, title, description*/}
        <div className={"flex flex-col justify-center  text-center mt-20 "}>
          <h3 className={"font-bold text-5xl m-0"}>Profit On
            <span
              className={"text-transparent bg-clip-text" +
              " bg-gradient-to-br from-indigo-600 to-blue-400"}
            > Autopilot
          </span>
          </h3>
          <div className={" text-center flex justify-center flex-wrap mt-10"}>
            <p className={"w-1/3"}>Emails aren't sexy but they generate massive profits for our clients and we're here
              to take them off your
              hands. Spend your time doing what you're good at and let us handle all of the boring tasks below.</p>
          </div>
          <div className={"flex justify-center mt-10"}>
            <div className={"grid grid-cols-3 max-w-screen-2xl gap-4"}>{autoPilots.map((auto, index) => {
              console.log({ auto })
              return (
                <div key={index} className={"rounded-2xl bg-gray-800 p-8 w-96"}>
                  <div className={"flex sm:justify-center sm:items-center"}>
                    {/*image*/}

                    <StaticImage
                      className={"rounded-3xl"}
                      src={auto.logo}
                      alt="Logo"
                      placeholder="blurred"
                      layout="fixed"
                      width={200}
                      height={200}
                    />
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

        {/*  ============================NEW SECTION==================================*/}

        {/*TODO: fix line to be in middle, make responsive*/}
        <div className={"max-w-screen-lg"}>
          <div className={"border-t-2 border-gray-400 my-10"} />
        </div>
        {/*  ============================SECTION==================================*/}
        {/*2 cards, last reversed*/}
        {/*LEFT CARD*/}

        <div className={"max-w-screen-xl flex flex-row mx-auto justify-center align-middle mt-80 "}>
          <div className={"w-5/12"}>
            <div className={"flex flex-col justify-center"}>
              <h3 className={"font-bold text-5xl m-0"}>Things We Do That</h3>
              <h3
                className={"font-bold text-5xl  text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-blue-400"}>Grow
                Your Business
              </h3>
              <div className={"flex flex-wrap mt-10"}>
                <p className={"w-1/2"}>We’ll integrate our lethal flows that go through rigorous, intensive split tests
                  & optimizations to convert / re-convert customers across the board.</p>
              </div>
              <ul className={"list-none mt-10"}>
                <li className="flex flex-row align-middle ">
                  <StaticImage
                    src={"../images/blue_tick.png"}
                    alt="blue_tick"
                    placeholder="blurred"
                    layout="fixed"
                    width={20}
                    height={20}
                  />
                  <div className={"ml-2"}>Allows you to outbid your competitors
                  </div>
                </li>
                <li className="flex flex-row align-middle ">
                  <StaticImage
                    src={"../images/blue_tick.png"}
                    alt="blue_tick"
                    placeholder="blurred"
                    layout="fixed"
                    width={20}
                    height={20}
                  />
                  <div className={"ml-2"}>Achieve consistency like never before
                  </div>
                </li>
                <li className="flex flex-row align-middle ">
                  <StaticImage
                    src={"../images/blue_tick.png"}
                    alt="blue_tick"
                    placeholder="blurred"
                    layout="fixed"
                    width={20}
                    height={20}
                  />
                  <div className={"ml-2"}>Make the most of your sites traffic
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className={"w-7/12"}>
            <div className="flex flex-row justify-center align-middle">
              <StaticImage
                className={"rounded-3xl"}
                src={"../images/right_side_email_data.png"}
                alt="blue_tick"
                placeholder="blurred"
                layout="fixed"
                width={600}
                height={400}
              />
            </div>
          </div>


        </div>
        {/*  RIGHT CARD */}
        <div className={"max-w-screen-xl flex flex-row mx-auto justify-center align-middle mt-80 "}>

          <div className={"w-7/12"}>
            <div className="flex flex-row justify-center align-middle">
              <StaticImage
                className={"rounded-3xl"}
                src={"../images/webFlowRightCard.png"}
                alt="blue_tick"
                placeholder="blurred"
                layout="fixed"
                width={600}
                height={400}
              />
            </div>
          </div>
          <div className={"w-5/12 ml-10"}>
            <div className={"flex flex-col justify-center"}>
              <h3 className={"font-bold text-5xl m-0"}>Make Profits In
              </h3>
              <h3
                className={"font-bold text-5xl  text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-blue-400"}>4
                Weeks Or Less</h3>
              <div className={"flex flex-wrap mt-10"}>
                <p className={"w-1/2"}>When we implement our proven to perform email systems across your business -
                  instead of window shoppers and chirping crickets, your customers will compliment your brand
                  aesthetics..</p>
              </div>
              <ul className={"list-none mt-10"}>
                <li className="flex flex-row align-middle ">
                  <StaticImage
                    src={"../images/blue_tick.png"}
                    alt="blue_tick"
                    placeholder="blurred"
                    layout="fixed"
                    width={20}
                    height={20}
                  />

                  <div className={"ml-2"}>Laser targeted messaging</div>
                </li>
                <li className="flex flex-row align-middle ">
                  <StaticImage
                    src={"../images/blue_tick.png"}
                    alt="blue_tick"
                    placeholder="blurred"
                    layout="fixed"
                    width={20}
                    height={20}
                  />
                  <div className={"ml-2"}>Above average engagement
                  </div>
                </li>
                <li className="flex flex-row align-middle ">
                  <StaticImage
                    src={"../images/blue_tick.png"}
                    alt="blue_tick"
                    placeholder="blurred"
                    layout="fixed"
                    width={20}
                    height={20}
                  />
                  <div className={"ml-2"}>Top level graphic designs
                  </div>
                </li>
              </ul>
            </div>
          </div>


        </div>

        {/*  ============================SECTION==================================*/}

        {/*  larger gradient banner*/}
        <div className={"flex justify-center"}>
          <div
            className={"max-w-screen-2xl  mt-20 px-6 py-24 bg-gradient-to-r from-gradStart to-gradFin rounded-xl"}>


            <div className={"flex flex-col  items-center text-center"}>
              <h3 className={"font-bold text-5xl"}>High Converting And Engaging Graphics
              </h3>
              <p className={"w-4/6 font-light text-lg opacity-60"}>Other agencies just can't compete... We don't mean to
                call anyone out but if we showcased their designs on our website it would completely throw off the
                industry leading aesthetics we strive for.
              </p>

            </div>
            <div className={"flex sm:justify-center sm:items-center mt-24"}>
              {/*image*/}
              <StaticImage
                src={"../images/multiple_mobiles.png"}
                alt="Logo"
                placeholder="blurred"
                layout="fixed"
                width={900}
                height={500}
              />
            </div>
          </div>

        </div>
        {/*  ============================SECTION==================================*/}
        <div className={"flex flex-col justify-center  text-center mt-20 "}>
          <h3 className={"font-bold text-5xl m-0"}>The
            <span
              className={"text-transparent bg-clip-text" +
              " bg-gradient-to-br from-indigo-600 to-blue-400"}
            > Industry Leaders
          </span>
          </h3>
        </div>
        <div className={"flex justify-center  mt-10 "}>
          <div className={"flex"}>
          <div className={"w-3/6"}>


            <div className={"flex flex-col max-w-screen-2xl"}>
              {/*======================== #1 ========================*/}
              <div className={"rounded-2xl p-8 w-104"}>
                <div className={"flex"}>
                  <StaticImage
                    className={"rounded-3xl"}
                    src="../images/smileyFaceBlue.png"
                    alt="Logo"
                    placeholder="blurred"
                    layout="fixed"
                    width={50}
                    height={50}
                  />
                </div>
                <div className={"mt-10 font-bold text-2xl"}>We Take The Stress Off You.
                </div>
                <div className={"mt-10"}>Entrepreneurs only have so much time in the day. Don't waste it trying to learn
                  new skills & figuring out what works. Smart business owners delegate emails to the top dog agency for
                  e-commerce, dropshipping & digital products.
                </div>
              </div>
              {/*======================== #2 ========================*/}
              <div className={"rounded-2xl p-8 w-104"}>
                <div className={"flex"}>
                  <StaticImage
                    className={"rounded-3xl"}
                    src="../images/blueCogs.png"
                    alt="Logo"
                    placeholder="blurred"
                    layout="fixed"
                    width={50}
                    height={50}
                  />
                </div>
                <div className={"mt-10 font-bold text-2xl"}>Automated Services

                </div>
                <div className={"mt-10"}>Never touch an email. Kick back & focus on your strengths while we drive highly
                  profitable revenue to your business. We're good at emails, you're good at growing your business. When
                  we
                  work together, you become unstoppable.
                </div>
              </div>
              {/*======================== #3 ========================*/}
              <div className={"rounded-2xl p-8 w-104"}>
                <div className={"flex"}>
                  <StaticImage
                    className={"rounded-3xl"}
                    src="../images/pencilRulerBlue.png"
                    alt="Logo"
                    placeholder="blurred"
                    layout="fixed"
                    width={50}
                    height={50}
                  />
                </div>
                <div className={"mt-10 font-bold text-2xl"}>Tailored For You Plan

                </div>
                <div className={"mt-10"}>Maximize profits by getting more from your customers. FB, Google & IG ads are
                  rising everyday... We custom tailor a specific email strategy unique to your business.. Let us
                  generate
                  higher profits per sale & increase revenue 15-35%.
                </div>
              </div>

            </div>


          </div>
          <div className={"w-3/6"}>
            <StaticImage
              className={"rounded-3xl"}
              src="../images/staticParallax.png"
              alt="Logo"
              placeholder="blurred"
              layout="fixed"
              width={650}
              height={300}
            />
          </div>
          </div>
        </div>
        {/*  ============================SECTION==================================*/}
        {/* carousel */}
        <div className={"max-w-screen-xl flex flex-row mx-auto justify-center align-middle mt-80 "}>
          <div className={"w-5/12"}>
            <div className={"flex flex-col justify-center"}>
              <h3 className={"font-bold text-5xl m-0"}>Meet The <span
                className={"font-bold text-5xl  text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-blue-400"}>A-Team</span>
              </h3>

              <div className={"flex flex-wrap mt-10"}>
                <p className={"w-1/2"}>We’ll integrate our lethal flows that go through rigorous, intensive split tests
                  & optimizations to convert / re-convert customers across the board.</p>
              </div>
            </div>
          </div>
          <div className={"w-7/12 flex justify-end content-end"}>
            <div className={"self-end"}>
              <Button>
                <div className={"text-2xl"}>{"<"}</div>
              </Button>
            </div>


            <div className={"ml-4 self-end"}>
              <Button>
                <div className={"text-2xl"}>{">"}</div>
              </Button>
            </div>
          </div>
          {/*TODO: not working eneds sorting out*/}
          {/*<Carousel />*/}
        </div>

        {/*  ============================SECTION==================================*/}

        <div className={"flex flex-col justify-center  text-center mt-20 "}>
          <h3 className={"font-bold text-5xl m-0"}>Performance
            <span
              className={"text-transparent bg-clip-text" +
              " bg-gradient-to-br from-indigo-600 to-blue-400"}
            > Pricing
          </span>
          </h3>
        </div>
      </Layout>
    </div>
  )
}


export default IndexPage
