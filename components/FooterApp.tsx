'use client'
import Link from "next/link";
import React from "react";
import { Github, Twitter, Linkedin, Facebook } from 'lucide-react';

function FooterApp() {
    return (
        <footer className="bg-white dark:bg-gray-900">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link href="/" className="flex items-center">
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">ShareHub</span>
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link href="/" className="hover:underline ">Github</Link>
                                </li>
                                <li>
                                    <Link href="/" className="hover:underline">Discord</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link href="/policy" className="hover:underline">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link href="/terms_conditions" className="hover:underline">Terms &amp; Conditions</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <Link href="#" className="hover:underline">ShareHub</Link>. All Rights Reserved.
                    </span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0">
                        <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <Facebook className="w-5 h-5" />
                            <span className="sr-only">Facebook page</span>
                        </Link>
                        <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <Linkedin className="w-5 h-5" />
                            <span className="sr-only">Discord community</span>
                        </Link>
                        <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <Twitter className="w-5 h-5" />
                            <span className="sr-only">Twitter page</span>
                        </Link>
                        <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <Github className="w-5 h-5" />
                            <span className="sr-only">GitHub account</span>
                        </Link>

                    </div>
                </div>
            </div>
        </footer>

    )
}

export default FooterApp;
