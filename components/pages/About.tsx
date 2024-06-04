
"use client";
import React from 'react';
import Lottie from 'lottie-react';
// import '../styles/Aboutstyles.css';
import '../Aboutstyles.css'
import animationData from '../assets/lottieabout.json';
import Image from 'next/image';

const AboutPage = () => {
    return (
        <div className='main'>
        <div className="h-screen flex flex-col md:flex-row">
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
                    At Social Share, we believe that everyone deserves a space to showcase their unique voice and content. Our platform empowers you to build and customize your own personal page, making it easier than ever to share your online presence with the world.
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
                         Social Share has the best team of developers from around the world
                        </p>
                    
                    </div>
                    <div className="mt-40">
                        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                            <div className="relative">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white transform transition duration-500 hover:scale-110">
                                        <Image src="https://www.svgrepo.com/show/503163/api-settings.svg" alt="Powerful API" width={48} height={48} className='text-white'/>
                                    </div>
                                    <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-100">Customizable Personal Pages</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-400">Create and personalize your own page to reflect your unique style and brand. Social Share offers a variety of themes, layouts, and customization options to ensure your online presence stands out.</dd>
                            </div>
                            <div className="relative">
                                <dt className='text-white'>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white transform transition duration-500 hover:scale-110">
                                        <Image src="https://www.svgrepo.com/show/503138/webpack.svg" alt="Easy to integrate SDK" width={48} height={48} className='text-white'/>
                                    </div>
                                    <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-100">Integrated Social Media</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-400">Connect all your social media profiles in one place. Social Share allows seamless integration with popular platforms like Instagram, Twitter, Facebook, and more, making it easy for your audience to follow and engage with you across multiple channels.</dd>
                            </div>
                            <div className="relative">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white transform transition duration-500 hover:scale-110">
                                        <Image src="https://www.svgrepo.com/show/511771/dashboard-671.svg" alt="Low Transaction Cost" width={48} height={48} />
                                    </div>
                                    <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-100">Content Sharing Made Simple</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-400">Effortlessly share your content, whether it's blog posts, videos, or photos. Social Share supports various media types and provides tools to organize and present your content beautifully.</dd>
                            </div>
                            <div className="relative">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white transform transition duration-500 hover:scale-110">
                                        <Image src="https://www.svgrepo.com/show/76267/free-commercial-label.svg" alt="Powerful Dashboard" width={48} height={48} />
                                    </div>
                                    <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-100">Analytics and Insights</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-400">Gain valuable insights into your audience and content performance. ShareHub offers comprehensive analytics to help you understand your reach, engagement, and growth.</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
            </section>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
      <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold  mb-30 md:mb-12 text-purple-400">
                   CORE TEAM
                </h1>
    
  
      </div>
      <div className="grid mt-40 gap-10 sm:grid-cols-2 lg:grid-cols-4">
    
        <div>
          <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt="Person"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-1 text-lg font-bold text-gray-100">
                Emily Abigail
              </p>
              <p className="mb-4 text-xs text-gray-100">Design Team Lead</p>
              <p className="mb-4 text-xs tracking-wide text-gray-400">
                Amet I love liquorice jujubes pudding croissant I love pudding.
              </p>
              <div className="flex items-center justify-center space-x-3">
                <a
                  href="https://x.com/?lang=en-in"
                  className="text-blue-300 transition-colors duration-300 hover:text-blue-700"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                    <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/"
                  className="text-blue-300 transition-colors duration-300 hover:text-blue-700"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                    <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=1921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Person"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-1 text-lg font-bold text-gray-100">
                Josh Warton
              </p>
              <p className="mb-4 text-xs text-gray-100">App Developer</p>
              <p className="mb-4 text-xs tracking-wide text-gray-400">
               I live in the coding realm.
              </p>
              <div className="flex items-center justify-center space-x-3">
                <a
                  href="https://x.com/?lang=en-in"
                  className="text-blue-300 transition-colors duration-300 hover:text-blue-700"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                    <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/"
                  className="text-blue-300 transition-colors duration-300 hover:text-blue-700"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                    <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
                    </div>
                    <div>
          <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="https://images.unsplash.com/photo-1573497019236-17f8177b81e8?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Person"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-1 text-lg font-bold text-gray-100">
                Christina Nicholson
              </p>
              <p className="mb-4 text-xs text-gray-100">Senior Software Engineer</p>
              <p className="mb-4 text-xs tracking-wide text-gray-400">
               I love fixing the errors that my junior developers create.
              </p>
              <div className="flex items-center justify-center space-x-3">
                <a
                  href="https://x.com/?lang=en-in"
                  className="text-blue-300 transition-colors duration-300 hover:text-blue-700"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                    <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/"
                  className="text-blue-300 transition-colors duration-300 hover:text-blue-700"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                    <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
                    </div>
                    <div>
          <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="https://images.unsplash.com/photo-1507591064344-4c6ce005b128?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Person"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-1 text-lg font-bold text-gray-100">
                Mark Fischer
              </p>
              <p className="mb-4 text-xs text-gray-100">Tech Lead</p>
              <p className="mb-4 text-xs tracking-wide text-gray-400">
               I love managing teams
              </p>
              <div className="flex items-center justify-center space-x-3">
                <a
                  href="https://x.com/?lang=en-in"
                  className="text-blue-300 transition-colors duration-300 hover:text-blue-700"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                    <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/"
                  className="text-blue-300 transition-colors duration-300 hover:text-blue-700"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                    <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
  
       
    
       
      </div>
    </div>

            </div>
    );
};

export default AboutPage;
