'use client';

import AnimationContainer from '../utils/AnimationContainer';
import { siteConfig } from '@/src/configs/config';
import SectionHeader from '@/src/components/ui/SectionHeader';

const AboutMe = () => {
  return (
    <AnimationContainer customClassName="w-full mb-16">
      <SectionHeader
        id="aboutme"
        title="About Me"
        content={`Here’s a bit about me and my journey as a Quality Assurance Engineer.`}
      />

      <p className="text-sm sm:text-base md:text-lg text-foreground dark:text-white">
        Hey there! 👋 I'm{' '}
        <strong className="text-foreground dark:text-white">
          {siteConfig.author}
        </strong>
        , I've always been curious about how software works behind the scenes, which led me to pursue a career in Quality Assurance. From my early days of exploring test cases and understanding user workflows, I developed a strong passion for ensuring product quality and reliability. Over the years, this passion has evolved into a profession where I specialize in manual and automation testing, working with tools like Selenium, Playwright, and RPA to deliver high-performing, bug-free applications across platforms like Freshworks, Shopify, Zendesk, and Monday.com.
      </p>

      <p className="text-sm sm:text-base md:text-lg text-foreground dark:text-white mt-4">
      As I’ve grown in my career, I’ve expanded my expertise into areas like test automation, RPA, and integrating AI into QA workflows. I’ve worked extensively with tools like Selenium and Playwright, and explored smart testing strategies across platforms like Freshworks, Shopify, Zendesk, and Monday.com. No matter how much I evolve, I still carry the same curiosity and drive to explore new tools, frameworks, and technologies that elevate the quality and efficiency of software products.
      </p>

      <p className="text-sm sm:text-base md:text-lg text-foreground dark:text-white mt-4">
      Today, I’m not just focused on testing applications; I’m also exploring automation frameworks, CI/CD pipelines, and QA integrations with tools like Selenium, Playwright, and RPA to enhance testing efficiency and scalability. I believe in continuous learning and growth, and I’m always seeking new challenges that push me to refine my skills and contribute to building high-quality, reliable software products.
      </p>

      <p className="text-sm sm:text-base md:text-lg text-foreground dark:text-white mt-4">
      If you're interested in collaborating on testing automation, QA solutions, or need help with any project related to quality assurance, feel free to reach out. Let’s build something exceptional together!
      </p>
    </AnimationContainer>
  );
};

export default AboutMe;
