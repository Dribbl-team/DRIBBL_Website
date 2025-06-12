import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import { PageTitle, Footer } from "@/widgets/layout";
import { TeamCard } from "@/widgets/cards";
import { teamData, contactData } from "@/data";

export function Home() {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/Screenshot_20250422_231039_Chrome.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                Welcome to Dribbl
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
              Dribbl – Canada’s Soccer-First Social Network
              A new home for players, fans, and creators. Share highlights. Build your soccer identity. Join a community built for the beautiful game.
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                Coming soon to the App Store and Google Play!
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-white px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-start mt-48 min-h-[480px]">
            <div className="w-full md:w-7/12 lg:w-6/12 xl:w-5/12 px-4 flex flex-col justify-center">
              <Typography
                variant="h3"
                className="mb-4 font-bold text-left text-4xl md:text-5xl"
                color="blue-gray"
              >
                What is Dribbl?
              </Typography>
              <Typography className="mb-8 font-normal text-black text-left text-lg md:text-xl leading-relaxed">
              Dribbl is Canada’s soccer-first social platform — built to connect fans, players, and communities across the country. Inspired by LinkedIn, Dribbl is where you can grow your soccer network, share your journey, and engage with others who live the game.
              Here's what you can do on Dribbl:
                <ul className="list-disc pl-6 mt-4 space-y-2 text-base md:text-lg">
                  <li>Share match highlights, training clips, and behind-the-scenes moments</li>
                  <li>Connect with others who support your team or play your position</li>
                  <li>Participate in challenges and showcase skills</li>
                  <li>Build your profile to showcase your identity in the game</li>
                </ul>
                <br />
                Curious about what we’re building? Explore our early designs and app features below:
              </Typography>
            </div>
            {/* Right side image */}
            <div className="hidden md:flex md:w-5/12 lg:w-6/12 xl:w-7/12 px-4 items-center justify-center">
              <img
                src="/img/Holding_phone_side.png"
                alt="Person holding phone with Dribbl app"
                className="rounded-xl max-h-96 object-cover shadow-lg w-full"
                style={{ maxWidth: "500px" }}
              />
            </div>
          </div>
        </div>
      </section>
      {/* --- New Section Start --- */}
      <section className="w-full bg-black pt-20 pb-40">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          {/* Left: Why Dribbl text, aligned with above */}
          <div className="md:w-2/3 w-full md:pl-8">
            <Typography variant="h2" color="white" className="font-bold mb-4 text-left">
              Why Dribbl?
            </Typography>
            <Typography variant="lead" className="text-white text-left">
              <ul className="list-disc pl-6 mt-2">
                <li>
                  <span className="text-orange-500">🔥</span> 🤝 Built for connection — Dribbl helps you find and engage with people who love the game like you do!
                </li>
                <li>
                  <span className="text-orange-500">🧠</span> ⚽ Focused on soccer — No distractions, just meaningful moments and real football stories!
                </li>
                <li>
                  <span className="text-orange-500">🌎</span> 🇨🇦 Proudly Canadian — Designed for the Diverse Canadian soccer community!
                </li>
              </ul>
            </Typography>
          </div>
          {/* Right: Button linking to footer */}
          <div className="md:w-1/3 w-full flex justify-center md:justify-end mt-8 md:mt-0">
            <a
              href="#footer-socials"
              className="inline-block bg-white text-black font-bold px-6 py-5 rounded-2xl shadow-lg text-lg text-center hover:bg-gray-200 transition-all"
              style={{ minWidth: "260px" }}
            >
              Want to learn more? <br className="hidden md:block" />Check out our Social media!
            </a>
          </div>
        </div>
      </section>
      {/* --- New Section End --- */}
      <section className="w-full py-20">
        <div className="flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto px-4 gap-12">
          {/* Left: Sign up form */}
          <form className="w-full md:w-1/2 max-w-lg bg-black rounded-xl p-10 shadow-lg">
            <Typography variant="h2" className="font-bold text-white mb-4 text-left">
              Join the Dribbl beta version
            </Typography>
            <Typography className="text-base font-normal text-white">
              Be among the first to try the platform built for soccer players and fans.
            </Typography>
            <Typography className="text-base font-normal text-white mb-6">
              Sign up below to receive early access and updates.
            </Typography>
            <div className="mb-6">
              <label className="block text-white mb-2" htmlFor="firstName">
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                className="w-full rounded-md bg-black border border-orange-500 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="First Name"
              />
            </div>
            <div className="mb-6">
              <label className="block text-white mb-2" htmlFor="lastName">
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                className="w-full rounded-md bg-black border border-orange-500 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Last Name"
              />
            </div>
            <div className="mb-6">
              <label className="block text-white mb-2" htmlFor="email">
                Email:
              </label>
              <input
                id="email"
                type="email"
                className="w-full rounded-md bg-black border border-orange-500 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Email"
              />
            </div>
            <Button
              type="submit"
              className="mt-4 bg-orange-500 text-white font-bold py-3 px-8 rounded-md w-full text-lg normal-case"
              fullWidth
            >
              submit
            </Button>
          </form>
          {/* Right: Screenshot image */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center gap-6">
            <img
              src="/img/Dribbl_computer.png"
              alt="Dribbl Computer"
              className="rounded-xl max-h-80 object-cover shadow-lg w-full md:w-4/5 mb-2"
              style={{ maxWidth: "100%" }}
            />
            <img
              src="/img/Dribbl_mug.png"
              alt="Dribbl Mug"
              className="rounded-xl max-h-60 object-cover shadow-lg w-full md:w-3/5 mt-2"
              style={{ maxWidth: "80%" }}
            />
          </div>
        </div>
      </section>
      <div className="bg-white">
        <Footer id="footer-socials" />
      </div>
    </>
  );
}

export default Home;
