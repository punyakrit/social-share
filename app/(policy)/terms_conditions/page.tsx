import FooterApp from '@/components/FooterApp';
import Link from 'next/link';
import React from 'react'

function terms_condition() {
  return (
    <main>
      <h1 className='text-white text-6xl font-extrabold text-center mt-16'>Terms & Conditions</h1> 
      <div className='flex justify-center mt-12 text-white/50 text-xl'>
        <div className='w-[75%] flex flex-col gap-8 max-md:text-justify mb-12'>
          
          <p className='text-md text-white/80'>Effective date : 1 June, 2024</p>
          
          <p>
            Welcome to ShareHub! These Terms and Conditions govern your use of our website <span className='text-blue-500'><Link href="/" target='_blank'>ShareHub</Link></span> and any related services provided by ShareHub. By accessing or using the Service, you agree to comply with and be bound by these Terms. If you do not agree with these Terms, please do not use the Service.
          </p>

          {/* Clause 1 */}
          <h2 className='text-3xl text-white/95 text-left'>1. Acceptance of Terms :</h2>
          <p>By accessing the Service, you agree to be bound by these Terms and all applicable laws and regulations. If you do not agree to these Terms, you are prohibited from using or accessing the Service.</p>

          {/* Clause 2 */}
          <h2 className='text-3xl text-white/95 text-left'>2. Use of the Service :</h2>
          <div className='flex justify-center'>
            <div className='w-[90%] flex flex-col gap-6'>
              <div className='flex flex-col gap-4'>
                <h3 className='text-2xl text-white/85'>Eligibility</h3>
                <p>
                  You must be at least 13 years old to use the Service. By using the Service, you represent and warrant that you are at least 13 years old and that you have the legal capacity to enter into these Terms.
                </p>
              </div>
              <div className='flex flex-col gap-4'>
                <h3 className='text-2xl text-white/85'>Account Registration</h3>
                <p>
                  To access certain features of the Service, you may be required to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete. You are responsible for maintaining the confidentiality of your account password and for all activities that occur under your account.
                </p>
              </div>
            </div>
          </div>

          {/* Clause 3 */}
          <h2 className='text-3xl text-white/95 text-left'>3. User Conduct :</h2>
          <p>You agree not to use the Service for any unlawful purpose or any purpose prohibited under these Terms. You agree not to use the Service in any way that could damage the Service, impair the Service's functionality, or interfere with any other party's use and enjoyment of the Service. Specifically, you agree not to -</p>
          <div className='flex justify-center'>
            <div className='w-[90%] flex flex-col gap-6'>
              <ul className='list-disc flex flex-col gap-2'>
                <li>
                  Engage in any unauthorized use of the Service, including but not limited to accessing non-public areas of the Service.
                </li>
                <li>
                  Use the Service to transmit any unsolicited commercial communications.
                </li>
                <li>
                  Upload or transmit any material that infringes upon the intellectual property rights of any party.
                </li>
                <li>
                  Engage in any conduct that could damage, disable, overburden, or impair the Service.
                </li>
                <li>
                  Use any automated means to access the Service for any purpose without our express written permission.
                </li>
              </ul>
            </div>
          </div>

          {/* Clause 4 */}
          <h2 className='text-3xl text-white/95 text-left'>4. Security of Your Information :</h2>
          <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>
          
          {/* Clause 5 */}
          <h2 className='text-3xl text-white/95 text-left'>5. Termination :</h2>
          <p>We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.</p>
          
          {/* Clause 6 */}
          <h2 className='text-3xl text-white/95 text-left'>6. Limitation of Liability :</h2>
          <p>In no event shall ShareHub, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your use or inability to use the Service; (ii) any unauthorized access to or use of our servers and/or any personal information stored therein; (iii) any interruption or cessation of transmission to or from the Service; (iv) any bugs, viruses, trojan horses, or the like that may be transmitted to or through the Service by any third party; (v) any errors or omissions in any content or for any loss or damage incurred as a result of your use of any content posted, emailed, transmitted, or otherwise made available through the Service; and/or (vi) the defamatory, offensive, or illegal conduct of any third party.</p>
          
          {/* Clause 7 */}
          <h2 className='text-3xl text-white/95 text-left'>7. Disclaimer of Warranties :</h2>
          <p>Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance.</p>
          
          {/* Clause 8 */}
          <h2 className='text-3xl text-white/95 text-left'>8. Governing Law :</h2>
          <p>These Terms shall be governed and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have had between us regarding the Service.</p>
          
          {/* Clause 9 */}
          <h2 className='text-3xl text-white/95 text-left'>9. Changes to These Terms :</h2>
          <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Service.</p>

          {/* Clause 10 */}
          <h2 className='text-3xl text-white/95 text-left'>10. Contact Us :</h2>
          <p>If you have questions about these Terms, please contact us at -</p>
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
          <p>Thank you for using ShareHub!</p>

        </div>
      </div>
      <FooterApp />
    </main>
  )
}

export default terms_condition;
