'use client';

import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';
import XIcon from './ui/XIcon';
import { useState } from 'react';

function FooterApp() {
  const [email, setEmail] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission

    if (!email) {
      alert('Please enter a valid email address.');
      return;
    }

    setLoading(true);
    setError('');
    setSuccess('');

    try {
      // Store email in MongoDB
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        throw new Error('Failed to store email');
      }

      const result = await res.json();
      setSuccess(result.message);
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to store email');
    } finally {
      setLoading(false);
    }
  };

  const today = new Date();
  const year = today.getFullYear();

  return (
    <footer className="bg-gray-900 border-t backdrop-blur-sm text-white">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white mb-2">
                ShareHub
              </span>
            </Link>
            <p className="text-sm text-gray-300 mt-2 mr-400">
              ShareHub is a Project where users can <br />create their public
              viewable profile containing <br />their customizable social links
              and important links <br />that they want to share with the world.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-300 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4 hover-scale">
                  <Link
                    href="https://github.com/punyakrit/social-share"
                    target="_blank"
                    className="transition ease duration-150 hover:text-white hover:cursor-pointer"
                  >
                    Github
                  </Link>
                </li>
                <li className="mb-4 hover-scale">
                  <Link
                    href="https://www.linkedin.com/in/punyakrit-singh-makhni/"
                    target="_blank"
                    className="transition ease duration-150 hover:text-white hover:cursor-pointer"
                  >
                    Linkedin
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-300 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4 hover-scale">
                  <Link
                    href="/policy"
                    target="_blank"
                    className="transition ease duration-150 hover:text-white hover:cursor-pointer"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li className="mb-4 hover-scale">
                  <Link
                    href="/terms_conditions"
                    target="_blank"
                    className="transition ease duration-150 hover:text-white hover:cursor-pointer"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li className="mb-4 hover-scale">
                  <Link
                    href="/licensing"
                    target="_blank"
                    className="transition ease duration-150 hover:text-white hover:cursor-pointer"
                  >
                    Licensing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-300 uppercase dark:text-white">
                Newsletter
              </h2>
              <form className="flex flex-col space-y-4" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="px-4 py-2 rounded bg-gray-800 text-gray-200 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Subscribe'}
                </button>
                {error && <p className="text-red-500">{error}</p>}
                {success && <p className="text-green-500">{success}</p>}
              </form>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            &copy; {year}{' '}
            <Link href="#" className="hover:underline">
              ShareHub
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <Link
              href="https://www.linkedin.com/in/punyakrit-singh-makhni/"
              className="text-gray-500 hover:text-white dark:hover:text-white ms-5 transform-scale"
            >
              <Linkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn community</span>
            </Link>
            <Link
              href="https://x.com/Punyakrit22"
              className="text-gray-500 hover:text-white dark:hover:text-white ms-5 transform-scale"
            >
              <XIcon className={"fill-gray-500 hover:fill-white w-6"} />
              <span className="sr-only">Twitter page</span>
            </Link>
            <Link
              href="https://github.com/punyakrit/social-share"
              className="text-gray-500 hover:text-white dark:hover:text-white ms-5 transform-scale"
            >
              <Github className="w-6 h-6" />
              <span className="sr-only">GitHub repository</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterApp;
