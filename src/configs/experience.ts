'use client';
import { siteConfig } from '@/src/configs/config';

export interface ExperienceEntry {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  isActive?: boolean;
  companyUrl?: string;
}

export const experienceEntries: ExperienceEntry[] = [
  {
    title: 'Looking for Job Opportunities | Present',
    description:
      "Actively seeking opportunities in Quality Assurance Engineering, AI-driven testing, Manual Testing, and Automation Testing. Open to full-time roles, internships, or freelance projects. Let’s connect and build something great together",
    startDate: 'Present',
    endDate: 'Present',
    isActive: true,
    companyUrl: siteConfig.social.linkedin
  },
  {
    title: 'Sprite Software | March 2022 - Present',
    description:
      'Building QA-first tools at Saasly.in to enhance testing efficiency. Focused on creating innovative solutions using Selenium, Playwright, and platforms like Freshworks, Shopify, Zendesk, and Monday.com — empowering quality engineers and streamlining the testing process',
    startDate: 'Mar 2022',
    endDate: 'Present',
    isActive: true,
    companyUrl: siteConfig.social.github_organisation
  },
  {
    title: 'Interlace India | Oct. 2020 - Mar. 2022',
    description:
      'Worked as a Testing Trainee at Interlace India, contributing to real-time government and enterprise projects. Gained hands-on experience in manual testing, analyzing business workflows, and documenting test cases. Actively collaborated with teams to ensure quality deliverables and process improvements across multiple domains.',
    startDate: 'Oct 2020',
    endDate: 'Mar 2022',
    isActive: false,
    // companyUrl: siteConfig.other.hacktoberfest
  },
  {
    title: 'Indium Software | Jan. 2020 - Jul. 2020',
    description:
      'Worked as a QA Training at Indium Software, where I gained foundational experience in manual testing. Involved in writing and executing test cases, identifying bugs, and ensuring software quality across client projects. Collaborated with cross-functional teams to understand business requirements and deliver reliable testing outcomes.',
    startDate: 'Oct 2020',
    endDate: 'Mar 2022',
    isActive: false,
    // companyUrl: siteConfig.other.hacktoberfest
  },
];
