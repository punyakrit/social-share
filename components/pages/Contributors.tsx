'use client';
import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";

const ITEMS_PER_PAGE = 10;

async function getContributors() {
  const res = await axios.get('https://api.github.com/repos/punyakrit/social-share/contributors');
  return res.data;
}

export default function Contributors() {
  const [contributors, setContributors] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // Load data initially
  useEffect(() => {
    getContributors().then(data => setContributors(data));
  }, []);

  // Pagination logic
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedContributors = contributors.slice(startIndex, endIndex);

  const totalPages = Math.ceil(contributors.length / ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const truncateUsername = (username: string) => {
    return username.length > 13 ? username.slice(0, 11) + '...' : username;
  };
  return (
    <div className="bg-gray-900 min-h-screen py-10 px-4 sm:px-8 lg:px-16 text-white ">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-12 mt-24">Our Contributors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedContributors.map((contributor: { url: string; id: Key | null | undefined; login: string; avatar_url: string; contributions: number }) => {
            const username = contributor.url.split("/").pop();
            const profileUrl = `https://github.com/${username}`;
            return (
              <div key={contributor.id} className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <Image
                    src={contributor.avatar_url}
                    height="100"
                    width="100"
                    className="rounded-full border-4 border-gray-600"
                    alt={contributor.login}
                  />
                  <div className="ml-4">
                    <h3 className="text-2xl font-semibold w-fit">{truncateUsername(contributor.login)}</h3>
                    <p className="text-sm text-gray-400">Contributions: {contributor.contributions}</p>
                  </div>``
                </div>
                  <a href={profileUrl}className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-colors">
                    GitHub Profile
                  </a>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center mt-10 space-x-4">
          <button
            onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
          >
            Previous
          </button>
          <span className="flex items-center px-4 py-2 text-lg">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
