import FooterApp from '@/components/FooterApp';
import React from 'react';
import BackToHomeButton from '@/components/BackToHome'; //Imported button 

function Licensing() {
  return (
    <><BackToHomeButton />
    <main>
      <h1 className='text-white text-6xl font-extrabold text-center mt-2'>Licensing</h1>
      <div className='flex justify-center mt-12 text-white/50 text-xl'>
        <div className='w-[75%] flex flex-col gap-8 max-md:text-justify mb-12'>
          
          <p className='text-md text-white/80'>Welcome to ShareHub <br /><br />
          ShareHub is a Project where users can create their public viewable profile containing their customizable social links and important links that they want to share with the world. It is licensed under MIT License, this page outlines the terms of the license and provides details on how to use, modify and distribute our software.</p>
          
          <div className='flex justify-center'>
            <div className='w-[90%] flex flex-col gap-6'>
            
              <p className='text-md text-white/80'>
                The MIT License (MIT)
              </p>
              
              <p>
                Permission is hereby granted, free of charge, to any person obtaining a copy
                of this software and associated documentation files (the "Software"), to deal
                in the Software without restriction, including without limitation the rights
                to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                copies of the Software, and to permit persons to whom the Software is
                furnished to do so, subject to the following conditions:
              </p>
              
              <p>
                The above copyright notice and this permission notice shall be included in
                all copies or substantial portions of the Software.
              </p>
              
              <p>
                THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                THE SOFTWARE.
              </p>
              
              <p className='text-md text-white/80'>
              Copyright (c) 2024 Punyakrit
              </p>
            </div>
          </div>
          

          {/* Contact Section */}
          <h2 className='text-3xl text-white/95 text-left'>Contact Us :</h2>
          <p>If you have questions or comments about this License, please contact us at -</p>
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
        </div>
      </div>
      <FooterApp />
    </main>
    </>
  );
}

export default Licensing;
