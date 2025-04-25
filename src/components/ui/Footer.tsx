'use client';

import Link from 'next/link';
import AnimationContainer from '../utils/AnimationContainer';
import ExternalLink from './ExternalLink';
import { siteConfig } from '@/src/configs/config';
import Credits from '@/src/components/ui/Credits';

const Footer = () => {
  return (
    <footer className="w-full lg:max-w-screen-md flex flex-col justify-center items-center mx-auto dark:text-white/70 text-black/70">
      <AnimationContainer customClassName="w-full">
        <hr className="w-full border-1 border-black/50 dark:border-white/50 mb-8" />
      </AnimationContainer>
      <AnimationContainer customClassName="w-full grid place-items-center grid-cols-3 gap-1 lg:gap-4 pb-8 sm:grid-cols-3 mx-3">
        <div className="flex flex-col space-y-4">
          <Link
            href="/"
            className="flex items-center gap-2 hover:text-gray-600 transition ease"
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="flex items-center gap-2 hover:text-gray-600 transition ease"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="flex items-center gap-2 hover:text-gray-600 transition ease"
          >
            Contact
          </Link>
        </div>

        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://github.com/Arun0039/AI-agent-MCP.git">
            GitHub
          </ExternalLink>
          <ExternalLink href={siteConfig.social.linkedin}>
            LinkedIn
          </ExternalLink>
          <ExternalLink 
            href="https://ik.imagekit.io/psxpebqrj/QA%20Resume.pdf?updatedAt=1745572529772"
            customClassName="flex items-center gap-2 hover:text-gray-600 transition ease bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-md"
          >
            Download Resume
          </ExternalLink>
        </div>
      </AnimationContainer>

      <Credits />
    </footer>
  );
};

export default Footer;
