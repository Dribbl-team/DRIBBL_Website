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
                The first ever Social Media app for Soccer!
                A new home for fans, players, and creators to share, connect, and compete.
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
          <div className="flex flex-wrap items-start mt-64">
            <div className="w-full md:w-7/12 lg:w-6/12 xl:w-5/12 px-4">
              <Typography
                variant="h3"
                className="mb-3 font-bold text-left"
                color="blue-gray"
              >
                What is Dribbl?
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500 text-left">
                Dribbl is Canada’s first-ever soccer-only social media app — a positive, engaging space for soccer lovers to:
                <ul className="list-disc pl-6 mt-2">
                  <li>Share match highlights, training clips, and behind-the-scenes moments</li>
                  <li>Join team communities and league threads</li>
                  <li>Participate in challenges and showcase skills</li>
                  <li>Stay updated on local and global soccer news</li>
                </ul>
                <br />
                Curious about what we’re building?
                Explore our early designs and app features below:
              </Typography>
            </div>
            {/* You can add your images on the right here later */}
          </div>
        </div>
      </section>
      {/* --- New Section Start --- */}
      <section className="w-full bg-gray-200 pt-20 pb-40">
        <div className="max-w-4xl mx-auto px-4">
          <Typography variant="h2" color="blue-gray" className="font-bold mb-4">
            Why Dribbl?
          </Typography>
          <Typography variant="lead" color="blue-gray" className="text-blue-gray-600">
            <ul className="list-disc pl-6 mt-2">
            <li>🔥 No more toxic feeds — Dribbl is for real soccer fans</li>
            <li>🧠 Smart, soccer-first design — not another generic social app</li>
            <li>🌎 Built in Canada, made for the world</li>
          </ul>
          </Typography>
        </div>
      </section>
      {/* --- New Section End --- */}
      <section className="w-full py-20">
        <div className="flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto px-4 gap-12">
          {/* Left: Sign up form */}
          <form className="w-full md:w-1/2 max-w-lg bg-black rounded-xl p-10 shadow-lg">
            <Typography variant="h2" className="font-bold text-white mb-4 text-left">
              Sign Up For An Account
            </Typography>
            <Typography className="mb-8 text-white text-left">
              Be the first to know when the app launches, and get early access to our players and confirmed NFL coaches.
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
              Sign Up
            </Button>
          </form>
          {/* Right: Screenshot image */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <img
              src="/img/Screenshot_20250422_231039_Chrome.jpg"
              alt="Dribbl App Screenshot"
              className="rounded-xl max-h-96 object-cover shadow-lg w-full md:w-4/5"
              style={{ maxWidth: "100%" }}
            />
          </div>
        </div>
      </section>
      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default Home;
