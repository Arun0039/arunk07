'use client';
import React, { useEffect, useState } from 'react';
import AnimationContainer from '../utils/AnimationContainer';
import { siteConfig } from '@/src/configs/config';
import { CardProjectProps } from '@/src/types';
import SectionContainer from '../utils/SectionContainer';
import TitleSectionPageContainer from '../utils/TitleSectionPageContainer';
import CardProject from '@/src/components/content/CardProject';
import Link from 'next/link';
import { Skeleton } from '../ui/skeleton';
import Script from 'next/script';
import { usePathname } from 'next/navigation';
import SearchInput from '@/src/components/ui/SearchInput';

const projectsList = [
  {
    id: "6",
    title: "Research and Development - Paid Apps",
    des: "Currently working in Research and Development for paid applications. Analyzed 5 products in the global market, consolidated customer queries into use cases, and conducted market share research. Submitted product reviews to the analysis team to improve sales activity. Successfully introduced 60 apps, with 40 currently generating revenue.",
    category: "Product Based",
    repo: "https://github.com/Arun0039/AI-agent-MCP.git",
    link: "https://github.com/Arun0039/AI-agent-MCP.git",
    topics: ["Research", "Market Analysis", "Product Development", "Revenue Generation", "Customer Feedback"]
  },
  {
    id: "1",
    title: "Affigenix",
    des: "Lab Support Application - Product based application developed at Interlace India. Focused on laboratory management and support systems.",
    category: "Product Based",
    repo: "https://github.com/Arun0039/AI-agent-MCP.git",
    link: "https://github.com/Arun0039/AI-agent-MCP.git",
    topics: ["Lab Support", "Product Development", "Interlace India"]
  },
  {
    id: "2",
    title: "IFMIS",
    des: "Corrosion resistance management system - Product based application developed at Interlace India.",
    category: "Product Based",
    repo: "https://github.com/Arun0039/AI-agent-MCP.git",
    link: "https://github.com/Arun0039/AI-agent-MCP.git",
    topics: ["Corrosion Management", "Product Development", "Interlace India"]
  },
  {
    id: "3",
    title: "Government Projects",
    des: "Worked on multiple central and state government projects including NSIC, SWP, TNEB, CWMSSB, and IFMIS for Mizoram. Role: Test Engineer Trainee - Developed and executed test cases.",
    category: "Project Based",
    repo: "https://github.com/Arun0039/AI-agent-MCP.git",
    link: "https://github.com/Arun0039/AI-agent-MCP.git",
    topics: ["NSIC", "SWP", "TNEB", "CWMSSB", "IFMIS", "Government Projects", "Test Engineering"]
  },
  {
    id: "4",
    title: "SaaS Platform Testing",
    des: "At Spritle Software: Worked on SaaS platforms including Freshworks, Zendesk, Monday.com, Shopify, and Zoho. Developed test plans, strategies, test cases, executed testing, and coordinated with development teams.",
    category: "Project Based",
    repo: "https://github.com/Arun0039/AI-agent-MCP.git",
    link: "https://github.com/Arun0039/AI-agent-MCP.git",
    topics: ["SaaS", "Freshworks", "Zendesk", "Monday.com", "Shopify", "Zoho", "Test Planning"]
  },
  {
    id: "5",
    title: "Automation Testing",
    des: "Developed automated testing scripts using Selenium Java and Playwright JS. Currently working on POC for AI agent development for application scripting.",
    category: "Project Based",
    repo: "https://github.com/Arun0039/AI-agent-MCP.git",
    link: "https://github.com/Arun0039/AI-agent-MCP.git",
    topics: ["Selenium", "Playwright", "Java", "JavaScript", "Automation Testing", "AI Agent"]
  }
];

const ProjectsSection = () => {
  const [projectSearch, setProjectSearch] = useState<string>('');
  const [allProjectsInfo, setAllProjectsInfo] = useState<CardProjectProps[]>(
    projectsList
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [fetchError, setFetchError] = useState<string>(''); // New state for handling fetch errors

  const pathname = usePathname(); // Hook to track the current path

  // Fetch GitHub repositories when the component mounts or when the search or pathname changes
  // useEffect(() => {
  //   const fetchProjects = async () => {
  //     setIsLoading(true);
  //     setFetchError(''); // Reset error message before fetching
  //     try {
  //       const response = await fetch(
  //         `/api/fetch-projects?search=${projectSearch}`
  //       );
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch repositories');
  //       }
  //       const data = await response.json();
  //       // Ensure data is an array before setting it
  //       setAllProjectsInfo(Array.isArray(data) ? data : []);
  //     } catch (error) {
  //       console.error('Error fetching projects:', error);
  //       setFetchError('Failed to fetch projects'); // Set the error message
  //       setAllProjectsInfo([]); // Fallback to empty array if an error occurs
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchProjects();
  // }, [projectSearch, pathname]); // Re-run when either the projectSearch or pathname changes

  // Generate JSON-LD structured data for each individual project
  const generateJsonLdForProject = (project: CardProjectProps) => {
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      name: project.title,
      description: project.des,
      url: project.repo,
      image: project.link,
      keywords: project.topics.join(', '),
      author: {
        '@type': 'Person',
        name: siteConfig.author
      },
      datePublished: project.date
    };

    return JSON.stringify(jsonLd);
  };

  return (
    <>
      <SectionContainer>
        <div className="w-full flex flex-col gap-6">
          <TitleSectionPageContainer title="Projects" />

          {/* Use SearchInput component */}
          <SearchInput
            value={projectSearch}
            onChange={(e) => setProjectSearch(e.target.value)}
            placeholder="Search projects (Languages, frameworks, libraries, etc...)"
            ariaLabel="Search projects"
          />

          {/* Display Projects or error message */}
          <article className="w-full flex justify-center items-center content-center flex-wrap gap-6 mx-auto">
            {isLoading ? (
              // Display skeleton loader instead of text or static content
              Array.from({ length: 6 }).map((_, index) => (
                <div key={`skeleton-${index}`} className="w-full h-auto p-4">
                  <Skeleton className="w-full h-10 mb-4 bg-gray-700 dark:bg-gray-600 rounded-md" />
                  <Skeleton className="w-full h-6 bg-gray-700 dark:bg-gray-600 rounded-md" />
                  <Skeleton className="w-3/4 h-4 bg-gray-700 dark:bg-gray-600 rounded-md mt-2" />
                  <Skeleton className="w-full h-10 bg-gray-700 dark:bg-gray-600 rounded-md mt-4" />
                </div>
              ))
            ) : fetchError ? (
              <AnimationContainer customClassName="w-full group flex flex-col justify-center items-center mb-8">
                <div className="text-center text-black dark:text-white p-4">
                  <h2>{fetchError}</h2> {/* Display the error message */}
                </div>
              </AnimationContainer>
            ) : allProjectsInfo.length > 0 ? (
              allProjectsInfo.map(
                ({ id, title, des, category, repo, link, topics }) => (
                  <React.Fragment key={id}>
                    {/* Add JSON-LD for each individual project */}
                    <Script
                      key={`json-ld-project-${id}`}
                      id={`json-ld-project-${id}`}
                      type="application/ld+json"
                      dangerouslySetInnerHTML={{
                        __html: generateJsonLdForProject({
                          id,
                          title,
                          des,
                          category,
                          repo,
                          link,
                          topics
                        })
                      }}
                    />
                    <CardProject
                      key={id}
                      title={title}
                      des={des}
                      category={category}
                      repo={repo}
                      link={link}
                      topics={topics}
                    />
                  </React.Fragment>
                )
              )
            ) : (
              <AnimationContainer customClassName="w-full group flex flex-col justify-center items-center mb-8">
                <div className="text-center text-black dark:text-white p-4">
                  <h2>No projects found</h2>
                </div>
              </AnimationContainer>
            )}
          </article>
        </div>
      </SectionContainer>
    </>
  );
};

export default ProjectsSection;
