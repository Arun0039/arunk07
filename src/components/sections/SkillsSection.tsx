'use client';

import Image from 'next/image';
import AnimationContainer from '@/src/components/utils/AnimationContainer';
import SectionHeader from '@/src/components/ui/SectionHeader';
import React from 'react';

/**
 * Portfolio Credits and References
 * ------------------------------
 * Original Repository: muhammad-fiaz/portfolio
 * 
 * Repository Statistics:
 * - Stars: 165+
 * - Forks: 40+
 * - Active PRs: 27
 * - Global Contributors Community
 * 
 * This portfolio design is adapted with modifications
 * and enhancements for personal requirements.
 * 
 * @license MIT
 * @author Original: muhammad-fiaz
 * @author Modified: Arun K
 */

const MySkills = () => {
  return (
    <AnimationContainer customClassName="w-full mt-16">
      <div className="flex flex-col gap-5">
        <SectionHeader
          title="Skills"
          content="I've been working in Quality Assurance for several years, gaining hands-on experience with various testing tools, automation frameworks, and methodologies. I've worked with both manual and automation testing, using tools like Selenium, Playwright, and RPA, which has allowed me to contribute to ensuring quality across the entire software development lifecycle."
        />

        <div className="w-full">
          {/* Programming & Tools - Using skillicons.dev */}
          <div className="mb-8 flex justify-center">
            <Image
              src="https://skillicons.dev/icons?i=js,java,selenium,postman&perline=8"
              alt="Programming Languages and Tools"
              width={320}
              height={80}
              className="dark:bg-gray-800 rounded-xl p-2"
            />
          </div>

          {/* Custom Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Testing Skills */}
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md flex flex-col items-center justify-center text-center hover:shadow-lg transition-shadow">
              <svg className="w-8 h-8 mb-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-9 13H4v-5h7v5zm9 0h-7v-5h7v5zm0-7H4V6h16v4z"/>
              </svg>
              <span className="text-sm font-medium">Test Case Design</span>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md flex flex-col items-center justify-center text-center hover:shadow-lg transition-shadow">
              <svg className="w-8 h-8 mb-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 8h-2.81c-.45-.78-1.07-1.45-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5c-.49 0-.96.06-1.41.17L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8zm-4 4v3c0 2.21-1.79 4-4 4s-4-1.79-4-4v-3c0-2.21 1.79-4 4-4s4 1.79 4 4z"/>
              </svg>
              <span className="text-sm font-medium">Bug Identification</span>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md flex flex-col items-center justify-center text-center hover:shadow-lg transition-shadow">
              <svg className="w-8 h-8 mb-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8 14H7v-2h4v2zm6-4H7v-2h10v2zm0-4H7V7h10v2z"/>
              </svg>
              <span className="text-sm font-medium">Test Execution</span>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md flex flex-col items-center justify-center text-center hover:shadow-lg transition-shadow">
              <svg className="w-8 h-8 mb-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.71 4.63l-1.34-1.34c-.39-.39-1.02-.39-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41zM7 14c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
              </svg>
              <span className="text-sm font-medium">Automation Scripting</span>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md flex flex-col items-center justify-center text-center hover:shadow-lg transition-shadow">
              <Image
                src="/images/jmeter.svg"
                alt="Apache JMeter"
                width={40}
                height={40}
                className="mb-2"
              />
              <span className="text-sm font-medium">JMeter</span>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md flex flex-col items-center justify-center text-center hover:shadow-lg transition-shadow">
              <Image
                src="/images/burpsuite.svg"
                alt="Burp Suite"
                width={40}
                height={40}
                className="mb-2"
              />
              <span className="text-sm font-medium">Burp Suite</span>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md flex flex-col items-center justify-center text-center hover:shadow-lg transition-shadow">
              <Image
                src="/images/rpa.svg"
                alt="RPA"
                width={32}
                height={32}
                className="mb-2 dark:invert"
              />
              <span className="text-sm font-medium">RPA</span>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md flex flex-col items-center justify-center text-center hover:shadow-lg transition-shadow">
            <Image
             src="/images/ai.svg" 
             alt="AI Testing"
             width={32}
             height={32}
             className="mb-2"
  />
              <span className="text-sm font-medium">AI Testing</span>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md flex flex-col items-center justify-center text-center hover:shadow-lg transition-shadow">
              <Image
                src="/images/playwrightt.svg"
                alt="Playwright"
                width={32}
                height={32}
                className="mb-2"
              />
              <span className="text-sm font-medium">Playwright</span>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md flex flex-col items-center justify-center text-center hover:shadow-lg transition-shadow">
              <svg className="w-8 h-8 mb-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"/>
              </svg>
              <span className="text-sm font-medium">REST API</span>
            </div>
          </div>

          {/* Testing Frameworks */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4 text-center text-gray-900 dark:text-white">Testing Frameworks</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md flex flex-col items-center justify-center text-center hover:shadow-lg transition-shadow">
                <Image
                  src="/images/mocha.svg"
                  alt="Mocha"
                  width={32}
                  height={32}
                  className="mb-2"
                />
                <span className="text-sm font-medium">Mocha</span>
              </div>

              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md flex flex-col items-center justify-center text-center hover:shadow-lg transition-shadow">
                <svg className="w-8 h-8 mb-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z"/>
                </svg>
                <span className="text-sm font-medium">Page Object Model</span>
              </div>

              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md flex flex-col items-center justify-center text-center hover:shadow-lg transition-shadow">
                <Image
                  src="/images/testng.svg"
                  alt="TestNG"
                  width={32}
                  height={32}
                  className="mb-2"
                />
                <span className="text-sm font-medium">TestNG</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimationContainer>
  );
};

export default MySkills;
