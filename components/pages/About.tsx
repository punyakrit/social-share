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
                    <svg viewBox="-2.4 -2.4 28.80 28.80" xmlns="http://www.w3.org/2000/svg" fill="#C084FC" stroke="#C084FC" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.048"></g><g id="SVGRepo_iconCarrier"><path d="M21.3,19a2.42,2.42,0,0,1-2.5.56l-2.35,2.35a.34.34,0,0,1-.49,0l-1-1a.36.36,0,0,1,0-.49l2.36-2.35a2.39,2.39,0,0,1,3.39-2.91L19.12,16.8l1,1,1.62-1.62A2.39,2.39,0,0,1,21.3,19ZM22,8v5.76A4.47,4.47,0,0,0,19.5,13a4.57,4.57,0,0,0-1.29.19V9.29H16.66V14A4.5,4.5,0,0,0,15,17.5a4.07,4.07,0,0,0,0,.5H4a2,2,0,0,1-2-2V8A2,2,0,0,1,4,6H20A2,2,0,0,1,22,8ZM11,15,9.09,9.27H7L5.17,15h1.7l.29-1.07H9L9.29,15Zm4.77-3.89a1.67,1.67,0,0,0-.55-1.35,2.43,2.43,0,0,0-1.62-.47h-2V15h1.54V13.11h.44a2.75,2.75,0,0,0,1-.17,1.82,1.82,0,0,0,.67-.44,1.63,1.63,0,0,0,.36-.64A2.36,2.36,0,0,0,15.75,11.11Zm-7.3.62-.12-.44-.15-.58c0-.21-.08-.37-.11-.5a4.63,4.63,0,0,1-.1.48c0,.19-.08.38-.13.57s-.08.34-.12.47l-.24.93H8.69Zm5.59-1a.63.63,0,0,0-.5-.17h-.4v1.31h.31a.9.9,0,0,0,.37-.07.59.59,0,0,0,.27-.22.75.75,0,0,0,.11-.42A.57.57,0,0,0,14,10.71Z"></path><rect width="24" height="24" fill="none"></rect></g></svg>
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
                    <svg viewBox="0 0 24.00 24.00" xmlns="http://www.w3.org/2000/svg" fill="#C048FC" stroke="#C048FC" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="1.44"></g><g id="SVGRepo_iconCarrier"> <title>webpack</title> <rect width="24" height="24" fill="none"></rect> <path d="M21,16.5a1,1,0,0,1-.53.88l-7.9,4.44a1,1,0,0,1-1.14,0l-7.9-4.44A1,1,0,0,1,3,16.5v-9a1,1,0,0,1,.53-.88l7.9-4.44a1,1,0,0,1,1.14,0l7.9,4.44A1,1,0,0,1,21,7.5v9M12,4.15,5,8.09v7.82l7,3.94,7-3.94V8.09L12,4.15m0,2.08,4.9,2.83L12,11.89,7.1,9.06,12,6.23m5,8.66L13,17.2V13.62l4-2.31v3.58M11,17.2,7,14.89V11.31l4,2.31Z"></path> </g></svg>
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
                    <svg viewBox="0 0 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="" stroke=""><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>dashboard [#671]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-340.000000, -5199.000000)" fill="#C084FC"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M294,5041 C298.411,5041 302,5044.589 302,5049 L295.406,5049 L299.197,5045.378 L297.815,5043.932 L292.511,5049 L286,5049 C286,5044.589 289.589,5041 294,5041 M294,5039 C288.477,5039 284,5043.477 284,5049 C284,5054.523 288.477,5059 294,5059 C299.523,5059 304,5054.523 304,5049 C304,5043.477 299.523,5039 294,5039" id="dashboard-[#671]"> </path> </g> </g> </g> </g></svg>
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
                     <svg fill="#C084FC" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 481.044 481.045" stroke="#C084FC"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M434.874,241.031l35.406-36.292c4.402-4.513,6.224-10.947,4.838-17.097c-1.387-6.15-5.791-11.182-11.705-13.37 l-47.545-17.595l16.162-48.054c2.012-5.976,0.859-12.563-3.055-17.504c-3.918-4.94-10.07-7.572-16.344-6.971l-50.479,4.766 l-6.27-50.309c-0.779-6.257-4.672-11.694-10.345-14.448c-5.672-2.753-12.354-2.45-17.75,0.806L283.97,51.391L256.092,8.477 C252.657,3.19,246.782,0,240.478,0s-12.182,3.19-15.617,8.478l-27.615,42.517l-43.324-26.333 c-5.385-3.275-12.064-3.603-17.748-0.868c-5.68,2.735-9.592,8.158-10.393,14.412l-6.449,50.288l-50.457-4.942 c-6.273-0.619-12.434,1.988-16.367,6.915c-3.933,4.927-5.107,11.51-3.117,17.492l15.994,48.109l-47.609,17.429 c-5.92,2.167-10.342,7.184-11.748,13.329c-1.408,6.146,0.391,12.586,4.775,17.114l35.279,36.414l-35.341,36.351 c-4.393,4.521-6.203,10.958-4.807,17.104c1.398,6.148,5.811,11.172,11.727,13.35l47.58,17.512l-16.084,48.082 c-2,5.979-0.84,12.564,3.086,17.498c3.926,4.936,10.082,7.549,16.355,6.943l50.465-4.854l6.363,50.301 c0.791,6.254,4.691,11.684,10.369,14.428c5.676,2.746,12.355,2.43,17.748-0.836l43.369-26.258l27.545,42.566 c3.426,5.293,9.297,8.494,15.602,8.504c0.01,0,0.021,0,0.031,0c6.293,0,12.162-3.178,15.599-8.449l27.69-42.469l43.281,26.41 c5.382,3.285,12.06,3.623,17.744,0.898c5.687-2.727,9.607-8.143,10.42-14.395l6.535-50.277l50.451,5.029 c6.281,0.625,12.438-1.967,16.381-6.887c3.939-4.92,5.125-11.5,3.146-17.486l-15.912-48.135l47.639-17.348 c5.926-2.156,10.354-7.166,11.773-13.309c1.418-6.143-0.369-12.586-4.748-17.122L434.874,241.031z M148.068,208.509 c0,2.109-1.711,3.82-3.82,3.82h-35.759v15.893h33.16c2.11,0,3.82,1.71,3.82,3.82v18.948c0,2.111-1.71,3.82-3.82,3.82h-33.16 v37.594c0,2.109-1.71,3.82-3.82,3.82H81.289c-2.11,0-3.82-1.711-3.82-3.82V189.407c0-2.11,1.71-3.82,3.82-3.82h62.96 c2.109,0,3.82,1.71,3.82,3.82V208.509z M242.854,294.414c-0.695,1.126-1.926,1.812-3.25,1.812h-23.839 c-1.363,0-2.623-0.728-3.307-1.906c-1.15-1.985-3.188-6.739-7.591-25.012c-0.008-0.031-0.015-0.062-0.021-0.095 c-2.573-12.007-6.098-13.374-12.982-13.483h-3.148v36.676c0,2.109-1.71,3.82-3.82,3.82h-23.074c-2.11,0-3.82-1.711-3.82-3.82 V190.783c0-1.873,1.355-3.469,3.204-3.771c8.521-1.392,20.052-2.189,31.637-2.189c16.884,0,27.89,2.752,35.686,8.924 c7.151,5.721,10.923,14.204,10.923,24.543c0,11.857-6.651,20.885-14.586,25.935c5.791,4.977,8.453,12.424,10.019,18.137 c0.883,3.195,1.767,6.533,2.622,9.762c2.09,7.887,4.249,16.042,5.517,18.574C243.614,291.88,243.549,293.287,242.854,294.414z M321.972,292.404c0,2.111-1.71,3.82-3.821,3.82h-65.709c-2.111,0-3.821-1.709-3.821-3.82V189.407c0-2.11,1.71-3.82,3.821-3.82 h63.57c2.109,0,3.819,1.71,3.819,3.82v19.102c0,2.109-1.71,3.82-3.819,3.82h-36.369v13.753h34.077 c2.109,0,3.818,1.711,3.818,3.821v18.949c0,2.11-1.709,3.82-3.818,3.82h-34.077v16.811h38.508c2.111,0,3.821,1.709,3.821,3.819 V292.404L321.972,292.404z M403.576,292.404c0,2.111-1.71,3.82-3.819,3.82h-65.71c-2.11,0-3.82-1.709-3.82-3.82V189.407 c0-2.11,1.71-3.82,3.82-3.82h63.569c2.11,0,3.82,1.71,3.82,3.82v19.102c0,2.109-1.71,3.82-3.82,3.82h-36.369v13.753h34.076 c2.111,0,3.821,1.711,3.821,3.821v18.949c0,2.11-1.71,3.82-3.821,3.82h-34.076v16.811h38.51c2.109,0,3.819,1.709,3.819,3.819 V292.404L403.576,292.404z"></path> <path d="M195.413,209.732c-2.501,0-4.74,0.095-6.695,0.281v21.265h5.349c4.411,0,14.67-1.072,14.67-11.002 C208.735,217.717,208.734,209.933,195.413,209.732z"></path> </g> </g> </g></svg>
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
