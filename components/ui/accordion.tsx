import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function AccordionComponent() {

  return (
    <div className="py-24">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-orchid mb-8 md:mb-12">Frequently Asked Questions (FAQ)</h1>
      <div className="max-w-4xl mx-auto px-4 md:px-0 text-white">
        <Accordion>
          <AccordionItem key="1" aria-label="Accordion 1" title={<p className="text-white text-left flex-1">What is ShareHub?</p>}>
            <p>ShareHub is a versatile platform designed for individuals and businesses to create personalized web pages. It offers customizable themes and layouts to showcase unique styles and brands effectively. Users can integrate various social media profiles for streamlined engagement and content sharing.</p>
          </AccordionItem>
          <AccordionItem key="2" aria-label="Accordion 2" title={<p className="text-white text-left flex-1">How can I personalize my page on ShareHub?</p>}>
            <p>You can personalize your page on ShareHub by choosing from a variety of themes, layouts, and customization options. This includes uploading custom images, adjusting colors, and arranging content blocks to reflect your personal or brand identity effectively.</p>
          </AccordionItem>
          <AccordionItem key="3" aria-label="Accordion 3" title={<p className="text-white text-left flex-1">Does ShareHub support integration with social media platforms?</p>}>
            <p>Yes, ShareHub seamlessly integrates with popular social media platforms such as Instagram, Twitter, Facebook, and more. This integration allows users to centralize their social media presence, making it easier for followers to connect and engage across different channels.</p>
          </AccordionItem>
          <AccordionItem key="4" aria-label="Accordion 4" title={<p className="text-white text-left flex-1">What types of content can I share on ShareHub?</p>}>
            <p>Yes, ShareHub seamlessly integrates with popular social media platforms such as Instagram, Twitter, Facebook, and more. This integration allows users to centralize their social media presence, making it easier for followers to connect and engage across different channels.</p>
          </AccordionItem>
          <AccordionItem key="5" aria-label="Accordion 5" title={<p className="text-white text-left flex-1">Can I track the performance of my page and content on ShareHub?</p>}>
            <p>Yes, ShareHub offers robust analytics tools that provide insights into your page&apos;s performance, audience demographics, engagement metrics, and more. These analytics help you optimize your content strategy and measure the impact of your online presence effectively.</p>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
