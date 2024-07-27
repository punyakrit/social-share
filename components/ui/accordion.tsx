import React from "react";

export default function AccordionComponent() {
  return (
    <div className="py-24">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-orchid mb-8 md:mb-12">
        Frequently Asked Questions (FAQ)
      </h1>
      <div className="max-w-4xl flex-col flex gap-2 mx-auto px-4 md:px-0 text-white transition-all ease-in-out duration-300">
        <div className="group  ">
          <div className=" p-4  cursor-pointer flex justify-between transition-all duration-500 ease-in-out mt-2">
            <p className="text-white text-left flex-1">What is ShareHub?</p>
            <p className="group-hover:rotate-90 transition-all ease-in-out duration-500">
              {"➤"}
            </p>
          </div>
          <div className="max-h-0 pl-4  overflow-hidden group-hover:max-h-96 transition-all duration-500 ease-in-out bg-gray-900  rounded">
            <p>
              ShareHub is a versatile platform designed for individuals and
              businesses to create personalized web pages. It offers
              customizable themes and layouts to showcase unique styles and
              brands effectively. Users can integrate various social media
              profiles for streamlined engagement and content sharing.
            </p>
          </div>
        </div>
        <div className="group ">
          <div className="flex justify-between  p-4 cursor-pointer border-t-[1px] border-white mt-2">
            <p className="text-white text-left flex-1">
              How can I personalize my page on ShareHub?
            </p>
            <p className="group-hover:rotate-90 transition-all ease-in-out duration-500">
              {"➤"}
            </p>{" "}
          </div>
          <div className="max-h-0 pl-4 overflow-hidden group-hover:max-h-96 transition-all duration-500 ease-in-out bg-gray-900 rounded">
            <p>
              You can personalize your page on ShareHub by choosing from a
              variety of themes, layouts, and customization options. This
              includes uploading custom images, adjusting colors, and arranging
              content blocks to reflect your personal or brand identity
              effectively.
            </p>
          </div>
        </div>
        <div className="group">
          <div className=" p-4 cursor-pointer flex justify-between border-t-[1px] border-white mt-2">
            <p className="text-white text-left flex-1">
              Does ShareHub support integration with social media platforms?
            </p>
            <p className="group-hover:rotate-90 transition-all ease-in-out duration-500">
              {"➤"}
            </p>{" "}
          </div>
          <div className="max-h-0 pl-4 overflow-hidden group-hover:max-h-96 transition-all duration-500 ease-in-out bg-gray-900  rounded">
            <p>
              Yes, ShareHub seamlessly integrates with popular social media
              platforms such as Instagram, Twitter, Facebook, and more. This
              integration allows users to centralize their social media
              presence, making it easier for followers to connect and engage
              across different channels.
            </p>
          </div>
        </div>
        <div className="group">
          <div className="p-4  cursor-pointer flex justify-between border-t-[1px] border-white mt-2 ">
            <p className="text-white text-left flex-1">
              What types of content can I share on ShareHub?
            </p>
            <p className="group-hover:rotate-90 transition-all ease-in-out duration-500">
              {"➤"}
            </p>{" "}
          </div>
          <div className="max-h-0 pl-4 overflow-hidden group-hover:max-h-96 transition-all duration-500 ease-in-out bg-gray-900  rounded">
            <p>
              Yes, ShareHub seamlessly integrates with popular social media
              platforms such as Instagram, Twitter, Facebook, and more. This
              integration allows users to centralize their social media
              presence, making it easier for followers to connect and engage
              across different channels.
            </p>
          </div>
        </div>
        <div className="group">
          <div className=" p-4  cursor-pointer flex justify-between border-t-[1px] border-white mt-2">
            <p className="text-white text-left flex-1">
              Can I track the performance of my page and content on ShareHub?
            </p>
            <p className="group-hover:rotate-90 transition-all ease-in-out duration-500">
              {"➤"}
            </p>{" "}
          </div>
          <div className="max-h-0 pl-4 overflow-hidden group-hover:max-h-96 transition-all duration-500 ease-in-out bg-gray-900  rounded">
            <p>
              Yes, ShareHub offers robust analytics tools that provide insights
              into your page's performance, audience demographics, engagement
              metrics, and more. These analytics help you optimize your content
              strategy and measure the impact of your online presence
              effectively.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
