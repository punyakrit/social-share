"use client";
import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/lottieabout.json";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="main">
      <div className="h-screen flex flex-col md:flex-row pt-24">
        {/* Animation Section */}
        <div className="md:w-1/2 h-1/2 md:h-screen bg-gray-900 relative">
          <Lottie
            animationData={animationData}
            loop
            autoplay
            className="absolute inset-0 w-full h-full"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 h-1/2 md:h-screen bg-gray-900 p-4 md:p-12 flex flex-col justify-center items-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold focus-in-expand mb-8 md:mb-12 text-purple-400">
            ABOUT US
          </h1>
          <p className="text-base md:text-lg lg:text-2xl text-gray-400 text-center">
            At Social Share, we believe that everyone deserves a space to
            showcase their unique voice and content. Our platform empowers you
            to build and customize your own personal page, making it easier than
            ever to share your online presence with the world.
          </p>
        </div>

        {/* Why Us Section */}
      </div>
      <section className="bg-gray-900 mb-10 mt-40">
        <div className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-30 font-bold text-center mb-30 md:mb-12 text-purple-400">
                WHY CHOOSE US?
              </h1>
              <p className="font-heading mt-10 text-center text-xl leading-8 font-semibold mb-20 tracking-tight text-gray-100 sm:text-4xl">
                Social Share has the best team of developers from around the
                world
              </p>
            </div>
            <div className="mt-32">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white transform transition duration-500 hover:scale-110">
                      <Image
                        src="https://www.svgrepo.com/show/503163/api-settings.svg"
                        alt="Powerful API"
                        width={48}
                        height={48}
                        className="text-white"
                      />
                    </div>
                    <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-100">
                      Customizable Personal Pages
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-400">
                    Create and personalize your own page to reflect your unique
                    style and brand. Social Share offers a variety of themes,
                    layouts, and customization options to ensure your online
                    presence stands out.
                  </dd>
                </div>
                <div className="relative">
                  <dt className="text-white">
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white transform transition duration-500 hover:scale-110">
                      <Image
                        src="https://www.svgrepo.com/show/503138/webpack.svg"
                        alt="Easy to integrate SDK"
                        width={48}
                        height={48}
                        className="text-white"
                      />
                    </div>
                    <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-100">
                      Integrated Social Media
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-400">
                    Connect all your social media profiles in one place. Social
                    Share allows seamless integration with popular platforms
                    like Instagram, Twitter, Facebook, and more, making it easy
                    for your audience to follow and engage with you across
                    multiple channels.
                  </dd>
                </div>
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white transform transition duration-500 hover:scale-110">
                      <Image
                        src="https://www.svgrepo.com/show/511771/dashboard-671.svg"
                        alt="Low Transaction Cost"
                        width={48}
                        height={48}
                      />
                    </div>
                    <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-100">
                      Content Sharing Made Simple
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-400">
                    Effortlessly share your content, whether it's blog posts,
                    videos, or photos. Social Share supports various media types
                    and provides tools to organize and present your content
                    beautifully.
                  </dd>
                </div>
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white transform transition duration-500 hover:scale-110">
                      <Image
                        src="https://www.svgrepo.com/show/76267/free-commercial-label.svg"
                        alt="Powerful Dashboard"
                        width={48}
                        height={48}
                      />
                    </div>
                    <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-100">
                      Analytics and Insights
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-400">
                    Gain valuable insights into your audience and content
                    performance. ShareHub offers comprehensive analytics to help
                    you understand your reach, engagement, and growth.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"></div>
    </div>
  );
};

export default AboutPage;
