import FooterApp from '@/components/FooterApp';
import Link from 'next/link';
import React from 'react'

function Policy() {
  return (
    <main>
      <h1 className='text-white text-6xl font-extrabold text-center mt-16'>Privacy Policy</h1> 
      <div className='flex justify-center mt-12 text-white/50 text-xl'>
        <div className='w-[75%] flex flex-col gap-8 max-md:text-justify mb-12'>
          
          <p className='text-md text-white/80'>Effective date : 1 June, 2024</p>
          
          <p>
            Thank you for choosing ShareHub. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website ShareHub and use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
          </p>
          
          {/* Clause 1 */}
          <h2 className='text-3xl text-white/95 text-left'>1. Information we collect :</h2>
          <p>We may collect information about you in a variety of ways. The information we may collect on the site includes -</p>
          <div className='flex justify-center'>
            <div className='w-[90%] flex flex-col gap-6'>
              <div className='flex flex-col gap-4'>
                <h3 className='text-2xl text-white/85'>Personal Data</h3>
                <p>
                  Personally identifiable information, such as your name, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the site or when you choose to participate in various activities related to the site.
                </p>
              </div>
              <div className='flex flex-col gap-4'>
                <h3 className='text-2xl text-white/85'>Derivative Data</h3>
                <p>
                  Information our servers automatically collect when you access the site, such as your access times, and the pages you have viewed directly before and after accessing the site.
                </p>
              </div>
              <div className='flex flex-col gap-4'>
                <h3 className='text-2xl text-white/85'>Data From Social Networks</h3>
                <p>
                  User information from social networking sites, such as <span className='text-blue-500'><a href="https://mail.google.com/" target='_blank'>Gmail</a></span>, including your name, your social network username, email address, profile picture, and public data for contacts, if you connect your account to such social networks.
                </p>
              </div>
              
            </div>
          </div>

          {/* Clause 2 */}
          <h2 className='text-3xl text-white/95 text-left'>2. Use of Your Information :</h2>
          <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the site to -</p>
          <div className='flex justify-center'>
            <div className='w-[90%] flex flex-col gap-6'>
              <ul className='list-disc flex flex-col gap-2'>
                <li>
                  Create and manage your account.
                </li>
                
               
                <li>
                  Understand and analyze how you use our site and services.
                </li>
                <li>
                  Develop new products, services, features, and functionality.
                </li>
                <li>
                  Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the site, and for marketing and promotional purposes.
                </li>
                <li>
                  Monitor and analyze usage and trends to improve your experience with the site.
                </li>
                <li>
                  Prevent fraudulent transactions, monitor against theft, and protect against criminal activity.
                </li>
              </ul>
            </div>
          </div>

          {/* Clause 3 */}
          <h2 className='text-3xl text-white/95 text-left'>3. Disclosure of Your Information :</h2>
          <p>We may share information we have collected about you in certain situations. Your information may be disclosed as follows -</p>
          <div className='flex justify-center'>
            <div className='w-[90%] flex flex-col gap-6'>
              <div className='flex flex-col gap-4'>
                <h3 className='text-2xl text-white/85'>By Law or to Protect Rights</h3>
                <p>
                  If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
                </p>
              </div>
              <div className='flex flex-col gap-4'>
                <h3 className='text-2xl text-white/85'>Business Transfers</h3>
                <p>
                  We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
                </p>
              </div>
              <div className='flex flex-col gap-4'>
                <h3 className='text-2xl text-white/85'>Third-Party Service Providers</h3>
                <p>
                  We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.
                </p>
              </div>
              <div className='flex flex-col gap-4'>
                <h3 className='text-2xl text-white/85'>Social Media Contacts</h3>
                <p>
                  If you connect to the site through a social network, your contacts on the social network will see your name, profile photo, and descriptions of your activity.
                </p>
              </div>
              <div className='flex flex-col gap-4'>
                <h3 className='text-2xl text-white/85'>Other Third Parties</h3>
                <p>
                  We may share your information with advertisers and investors for the purpose of conducting general business analysis. We may also share your information with such third parties for marketing purposes, as permitted by law.
                </p>
              </div>
            </div>
          </div>

          {/* Clause 4 */}
          <h2 className='text-3xl text-white/95 text-left'>4. Security of Your Information :</h2>
          <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>
          
          {/* Clause 5 */}
          <h2 className='text-3xl text-white/95 text-left'>5. Policy for Children :</h2>
          <p>We do not knowingly solicit information from or market to children under the age of 13. If we learn that we have collected personal information from a child under age 13 without verification of parental consent, we will delete that information as quickly as possible. If you believe we might have any information from or about a child under 13, please contact us.</p>
          
          {/* Clause 6 */}
          <h2 className='text-3xl text-white/95 text-left'>6. Controls for Do-Not-Track Features :</h2>
          <p>Most web browsers and some mobile operating systems include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. No uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online.</p>

          {/* Clause 7 */}
          <h2 className='text-3xl text-white/95 text-left'>7. Options Regarding Your Information :</h2>
          <p>You may at any time review or change the information in your account or terminate your account by -</p>
          <div className='flex justify-center'>
            <div className='w-[90%] flex flex-col gap-6'>
              <ul className='list-disc flex flex-col gap-2'>
                <li>
                  Logging into your account settings and updating your account.
                </li>
                <li>
                  Contacting us using the contact information provided below.
                </li>
              </ul>
            </div>
          </div>
          <p>Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, some information may be retained in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our <span className='text-blue-500'><Link href="/terms_conditions" target='_blank'>Terms of Use</Link></span>, and/or comply with legal requirements.</p>

          {/* Clause 8 */}
          <h2 className='text-3xl text-white/95 text-left'>8. Contact Us :</h2>
          <p>If you have questions or comments about this Privacy Policy, please contact us at -</p>
          <div className='flex justify-center'>
            <div className='w-[90%] flex flex-col gap-6'>
              <ul className='list-disc flex flex-col gap-2'>
                <li>
                  <span className='text-blue-500'>
                    <a href="https://www.linkedin.com/in/punyakrit-singh-makhni/" target='_blank'>
                      LinkedIn
                    </a>
                  </span>
                </li>
                <li>
                <span className='text-blue-500'>
                    <a href="https://github.com/punyakrit/" target='_blank'>
                      GitHub
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <p>We are committed to protecting your privacy and ensuring a safe and enjoyable experience on our site. Thank you for using ShareHub!</p>
        </div>
      </div>
      <FooterApp />
    </main>
  );
}

export default Policy;


