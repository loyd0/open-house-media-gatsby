import React from "react"
import Layout from "../components/layout/Layout"
import Seo from "../components/SEO"
import { StaticImage } from "gatsby-plugin-image"
import Button from "../components/elements/Button"
import ButtonGroup from "../components/elements/compounds/ButtonGroup"

export const FAQ = [{
  title: "But isn't email marketing dead?",
  description: "Absolutely not. Email is up to 6x more likely to get clicks than a FB ad when shown to the same amount of people. " +
    "Email is an industry that grows year over year. P.s. according to Marketing Sherpa, " +
    "72% of people prefer receiving promotions through email, compared to 17% who prefer social media.",
}, {
  title: "Will I have any responsibilities?",
  description: "Once you get onboarded with us, all we ask of you is to add us as a staff" +
    " on your Shopify (or whatever platform you use) provide us with your" +
    " brands content, and we'll take over from there.",
}, {
  title: "How long does it take to make profits?",
  description: "If we've determined that your a good fit for us, allow us at least 7-14 days to fully " +
    "implement everything you need to succeed and you should see profits start " +
    "rolling in within the first 30 days.",
}, {
  title: "How much control do I have?",
  description: "As much as you'd like, although we highly recommend letting our team get to work without " +
    "much back and forth for maximum speed and efficiency. Trust us and let our team with a combined experience of " +
    "15+ years take over so you can focus on what you're good at and let the profits roll in on autopilot.",
}, {
  title: "Why is there a set up fee?",
  description: "We require a minor set up fee to make sure our expert level graphic" +
    " design team gets paid, and paid well. If you want to work with another agency who doesn't require a set up fee we," +
    " guarantee their quality of work will show for it and you'll come crawling right back to us. So you may as well just get it done properly the first time around.",
}, {
  title: "What if I don't get results?",
  description: "First of all, this hardly ever happens because we simply won't work with you if we don't see potential growth for your business through email. But if we don't at the very minimum 1.5x your investment we'll" +
    " refund you the full amount. Don't let this scare you though, on average " +
    "we 6-12x our clients investments almost every single time.",
}]


export const autoPilots = [{
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
  title: "Account Optimzation",
  description: "We perform A/B split tests on every email on a weekly " +
    "bases so we can continue improving, scaling, and finding" +
    " the perfect combinations your customers want to engage with.",
}, {
  logo: "../images/emailAuto.png",
  title: "Sms Marketing",
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


        <div className={"flex max-w-screen-2xl  mx-auto mt-10 "}>
          {/*title*/}
          {/*left hand side card*/}
          <div className={"flex flex-col w-2/5"}>
            <h3 className={"text-6xl font-bold"}>Email Marketing</h3>
            <h3 className={"text-6xl font-bold"}>For
              <span className={"text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-400"}>
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
            <div className="mt-10 w-64">
            <div className="w-full">
              <StaticImage
                src={"../images/klavyioMaster.png"}
                alt="klavyio Master"
                placeholder="blurred"
              />
            </div>
            </div>
          </div>
          {/*righ side of card*/}
          <div className={"hidden sm:flex justify-center items-center w-3/5"}>
          <div className={"w-full w-104"}>
            {/*image*/}
            <StaticImage
              className={"rounded-3xl"}
              src={"../images/dashboard.png"}
              alt="A dinosaur"
              placeholder="blurred"
            />
          </div>
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
        <div className={"flex justify-center"}>
        <div className={"max-w-screen-2xl border-b-2 border-gray-400 "}>
        <div className={"flex flex-col justify-center text-center mt-20 "}>
          <h3 className={"font-bold text-5xl m-0"}>Profit On
            <span
              className={"text-transparent bg-clip-text" +
              " bg-gradient-to-r from-indigo-600 to-blue-400"}
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
                <div key={index} className={"rounded-2xl bg-blueyGray p-8 w-96"}>
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
          <div className={"mt-10 flex justify-center mb-20 "}>
            <ButtonGroup>
              <div>
                <Button>{"Get A Price"}< /Button>
              </div>
              <div className={"ml-4"}><Button altStyle={true}>{"View Results"} </Button>
              </div>
            </ButtonGroup>
          </div>


        </div>
        </div>
        </div>

        {/*  ============================NEW SECTION==================================*/}

        {/*TODO: fix line to be in middle, make responsive*/}

        {/*  ============================SECTION==================================*/}
        {/*2 cards, last reversed*/}
        {/*LEFT CARD*/}

        <div className={"max-w-screen-xl flex flex-row mx-auto justify-center align-middle mt-80 "}>
          <div className={"w-5/12"}>
            <div className={"flex flex-col justify-center"}>
              <h3 className={"font-bold text-5xl m-0"}>Things We Do That</h3>
              <h3
                className={"font-bold text-5xl  text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-400"}>Grow
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
                className={"font-bold text-5xl  text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-400"}>4
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
              " bg-gradient-to-r from-indigo-600 to-blue-400"}
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
                  <div className={"mt-10"}>Entrepreneurs only have so much time in the day. Don't waste it trying to
                    learn
                    new skills & figuring out what works. Smart business owners delegate emails to the top dog agency
                    for
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
                  <div className={"mt-10"}>Never touch an email. Kick back & focus on your strengths while we drive
                    highly
                    profitable revenue to your business. We're good at emails, you're good at growing your business.
                    When
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
                className={"font-bold text-5xl  text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-400"}>A-Team</span>
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

        {/*======= SECTION =======*/}
        {/*======= BLOG =======*/}
        <div className="max-w-screen-lg mx-auto ">
          <div className={"flex justify-center flex-col mt-20"}>
            <h3 className={"font-bold text-5xl m-0"}>Read Our
              <span
                className={"text-transparent bg-clip-text" +
                " bg-gradient-to-r from-indigo-600 to-blue-400"}>  Blogs
          </span>
            </h3>

            <div className={"flex flex-wrap mt-5 pb-4"}>
              <p className={"w-2/4 text-lg font-normal opacity-60"}>
                Everything from case studies to tips and tricks on how you can squeeze the most out of your traffic.
              </p>
              <div className="w-2/4 flex justify-end">
                <Button altStyle={true}>
                  {"Visit Our Blog Center"}
                </Button>

              </div>
            </div>

          </div>
        </div>
        {/*  ========= CARD CONTAINERS =============*/}

        <div className={"flex justify-center mt-10"}>
          <div className={"max-w-screen-xl"}>
            {/*  ========= BIG CARD  =============*/}

            <div className="flex justify-center w-full">

              <div className="flex">
                <div className="w-full h-full">
                  <StaticImage
                    className={"rounded-l-2xl"}
                    src={"../images/buck_palmer_surfing.png"}
                    alt="buck palmer surfing"
                    placeholder="blurred"
                  />
                </div>
                <div className={"rounded-r-2xl box-border p-6 bg-blueyGray"}>
                  <div className={"flex flex-col justify-center"}>
                    <div className={"flex flex-row items-center flex-wrap space-x-3 mb-5"}>
                      <Button>
                        <div className={"font-bold"}>Case Studies</div>
                      </Button>
                      {/*//date*/}
                      <div className={"opacity-60"}>Aug 12, 2021</div>
                    </div>
                    <h5 className={"font-bold text-2xl m-0"}>We More Than Doubled Buck Palmers Email Revenue In 30 Days
                    </h5>

                    <div>

                      <div className={"flex flex-wrap box-border mt-5 pb-4"}>
                        <p className={"text-lg font-normal opacity-60"}>
                          We took Buck Palmer from 15% of monthly email revenue to 33% in under 30 days. Now we're on
                          track
                          for
                          50%.</p>
                      </div>
                      <div className="flex flex-row align-middle mt-5 ">
                        <StaticImage
                          className={"rounded-full"}
                          src={"../images/ethan.jpeg"}
                          alt="ethan feldman"
                          placeholder="blurred"
                          layout="fixed"
                          width={50}
                          height={50}
                        />
                        <div className={"ml-2"}>Ethan Feldman</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  ========= 3 SMALL CARDS  =============*/}
            {/*all cards*/}
            <div className="flex justify-center space-x-3">
              {/*card 2*/}
              <div className="flex flex-col  box-border mt-10">
                {/*card top image*/}
                <div className={"w-full"}>
                  <StaticImage
                    className={"rounded-t-2xl"}
                    src={"../images/people_around_table_office.png"}
                    alt="people around table in an office"
                    placeholder="blurred"
                  />
                </div>
                {/*card header*/}
                <div className={"rounded-b-2xl bg-blueyGray"}>
                  <div className={"flex flex-col justify-center pt-6 px-6"}>
                    <h5 className={"font-bold text-2xl m-0"}>In House Vs Outsourced Email Marketing Team
                    </h5>
                    <div className={"flex flex-wrap mt-5 pb-4"}>
                      <p className={"text-lg font-normal opacity-60"}>
                        Everything you need to know about In-House Vs. Outsourced Email Marketing. Read this blog to
                        find out what's best for your situation.</p>
                    </div>
                    {/*card footer*/}
                    <div className="flex flex-row justify-between align-middle mt-5 border-t border-gray-400	p-6">
                      <div className={"w-12"}>
                        <StaticImage
                          className={"rounded-full"}
                          src={"../images/luca.jpeg"}
                          alt="Luca Schnetzler"
                          placeholder="blurred"
                        />
                      </div>

                      <div className="flex flex-col">
                        <div className={"ml-2"}>Luca Schnetzler</div>
                        <div className={"opacity-60"}>Aug 12, 2021</div>
                      </div>

                      <button onClick={() => {
                      }}
                              className={`leading-none font-bold text-sm bg-gradient-to-r from-gradStart to-gradFin rounded-lg text-bold py-2 px-4`}>
                        Tactics
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/*card 2*/}
              <div className="flex flex-col box-border mt-10">
                {/*card top image*/}
                <div className={"w-full"}>
                  <StaticImage
                    className={"rounded-t-2xl"}
                    src={"../images/people_around_table_office.png"}
                    alt="people around table in an office"
                    placeholder="blurred"
                  />
                </div>
                {/*card header*/}
                <div className={"rounded-b-2xl bg-blueyGray"}>
                  <div className={"flex flex-col justify-center pt-6 px-6"}>
                    <h5 className={"font-bold text-2xl m-0"}>The quickest way to grow your brands email list
                    </h5>
                    <div className={"flex flex-wrap mt-5 pb-4"}>
                      <p className={"text-lg font-normal opacity-60"}>
                        Your email list is a vital source of predictable and consistent revenue. It's best you learn how
                        to grow it quickly and start right away.</p>
                    </div>
                  </div>
                  {/*card footer*/}
                  <div className="flex flex-row justify-between align-middle mt-5 border-t border-gray-400	p-6">
                    <div className={"w-12"}>
                      <StaticImage
                        className={"rounded-full"}
                        src={"../images/ethan.jpeg"}
                        alt="ethan feldman"
                        placeholder="blurred"
                      />
                    </div>

                    <div className="flex flex-col">
                      <div className={"ml-2"}>Ethan Feldman</div>
                      <div className={"opacity-60"}>Aug 12, 2021</div>
                    </div>

                    <button onClick={() => {
                    }}
                            className={`leading-none font-bold text-sm bg-gradient-to-r from-gradStart to-gradFin rounded-lg text-bold py-2 px-4`}>
                      Tactics
                    </button>
                  </div>

                </div>
              </div>


              {/*card 3*/}
              <div className="flex flex-col  box-border mt-10">
                {/*card top image*/}
                <div className={"w-full"}>
                  <StaticImage
                    className={"rounded-t-2xl"}
                    src={"../images/people_around_table_office.png"}
                    alt="people around table in an office"
                    placeholder="blurred"
                  />
                </div>
                <div className={"rounded-b-2xl bg-blueyGray"}>
                  {/*card header*/}
                  <div className={"flex flex-col justify-center pt-6 px-6"}>

                    <h5 className={"font-bold text-2xl m-0"}>The Best Practices For Skyrocketing Your Open Rates
                    </h5>

                    <div>

                      <div className={"flex flex-wrap mt-5 pb-4"}>
                        <p className={"text-lg font-normal opacity-60"}>
                          Email is a great channel for driving revenue given you can actually get people to open them.
                          ￼.</p>
                      </div>


                    </div>
                  </div>
                  {/*card footer*/}
                  <div className="flex flex-row justify-between align-middle mt-5 border-t border-gray-400	p-6">
                    <div className={"w-12"}>
                      <StaticImage
                        className={"rounded-full"}
                        src={"../images/ethan.jpeg"}
                        alt="ethan feldman"
                        placeholder="blurred"
                      />
                    </div>

                    <div className="flex flex-col">
                      <div className={"ml-2"}>Ethan Feldman</div>
                      <div className={"opacity-60"}>Aug 12, 2021</div>
                    </div>

                    <button onClick={() => {
                    }}
                            className={`leading-none font-bold text-sm bg-gradient-to-r from-gradStart to-gradFin rounded-lg text-bold py-2 px-4`}>
                      Tactics
                    </button>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}


export default IndexPage
