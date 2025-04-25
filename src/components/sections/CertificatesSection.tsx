'use client';

import React from 'react';
import Image from 'next/image';
import AnimationContainer from '@/src/components/utils/AnimationContainer';
import SectionHeader from '@/src/components/ui/SectionHeader';
import Link from 'next/link';

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  hours: string;
  certificateNo: string;
  certificateUrl: string;
  imageUrl: string;
}

const certificates: Certificate[] = [
  {
    title: 'Learn JMETER from Scratch on Live Apps -Performance Testing',
    issuer: 'Rahul Shetty, QA Click Academy',
    date: 'April 1, 2023',
    hours: '8.5',
    certificateNo: 'UC-7eac7f30-95f7-4d77-9d57-f2c8a3b0f020',
    certificateUrl: 'ude.my/UC-7eac7f30-95f7-4d77-9d57-f2c8a3b0f020',
    imageUrl: '/images/certificates/Jmeter.jpg'
  },
  {
    title: 'Playwright JS/TS Automation Testing from Scratch & Framework',
    issuer: 'Rahul Shetty',
    date: 'March 28, 2025',
    hours: '22.5',
    certificateNo: 'UC-79a67e76-9dbe-4124-8ea1-81dc2001d794',
    certificateUrl: 'ude.my/UC-79a67e76-9dbe-4124-8ea1-81dc2001d794',
    imageUrl: '/images/certificates/PLAYWRIGHT.jpg'
  },
  {
    title: 'Selenium with Java - Novice to Ninja + Interview Guide',
    issuer: 'Rahul Shetty',
    date: 'January 15, 2023',
    hours: '30.5',
    certificateNo: 'SEL-JAVA-2023-01',
    certificateUrl: 'ude.my/selenium-java-cert',
    imageUrl: '/images/certificates/selenium.jpg'
  },
  {
    title: 'Software Testing Masterclass',
    issuer: 'QA Academy',
    date: 'December 1, 2022',
    hours: '40',
    certificateNo: 'STM-2022-12',
    certificateUrl: 'qa-academy/cert/stm-2022',
    imageUrl: '/images/certificates/testing.jpg'
  },
  {
    title: 'Gen AI Agent Development Certification',
    issuer: 'AI Institute',
    date: 'February 15, 2024',
    hours: '25',
    certificateNo: 'GENAI-2024-02',
    certificateUrl: 'ai-institute/cert/genai',
    imageUrl: '/images/certificates/genai.jpg'
  },
  {
    title: 'RPA Developer Certification',
    issuer: 'UiPath Academy',
    date: 'November 30, 2023',
    hours: '35',
    certificateNo: 'RPA-2023-11',
    certificateUrl: 'uipath/cert/rpa-dev',
    imageUrl: '/images/certificates/rpa.jpg'
  },
  {
    title: 'Freshworks Product Certification',
    issuer: 'Freshworks Academy',
    date: 'March 1, 2024',
    hours: '20',
    certificateNo: 'FW-PROD-2024-03',
    certificateUrl: 'freshworks/cert/product',
    imageUrl: '/images/certificates/freshworks-product.jpg'
  },
  {
    title: 'Freshworks Implementation Certification',
    issuer: 'Freshworks Academy',
    date: 'March 15, 2024',
    hours: '25',
    certificateNo: 'FW-IMPL-2024-03',
    certificateUrl: 'freshworks/cert/implementation',
    imageUrl: '/images/certificates/freshworks-implementation.jpg'
  },
  {
    title: 'Freshsales Foundation Certification',
    issuer: 'Freshworks Academy',
    date: 'March 30, 2024',
    hours: '15',
    certificateNo: 'FW-SALES-2024-03',
    certificateUrl: 'freshworks/cert/freshsales',
    imageUrl: '/images/certificates/freshsales.jpg'
  }
];

const CertificatesSection = () => {
  return (
    <AnimationContainer customClassName="w-full mt-16">
      <div className="flex flex-col gap-5">
        <SectionHeader
          title="Certifications"
          content="Professional certifications and courses I've completed to enhance my skills and stay current with industry best practices."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-40 w-full">
                <Image
                  src={cert.imageUrl}
                  alt={cert.title}
                  width={400}
                  height={225}
                  className="transition-transform duration-300 hover:scale-105 object-contain"
                  priority={index === 0}
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              </div>
              <div className="p-4">
                <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
                  {cert.title}
                </h3>
                <div className="space-y-1.5 text-sm text-gray-600 dark:text-gray-300">
                  <p><span className="font-medium">Issuer:</span> {cert.issuer}</p>
                  <p><span className="font-medium">Date:</span> {cert.date}</p>
                  <p><span className="font-medium">Duration:</span> {cert.hours} hours</p>
                  <p className="truncate">
                    <span className="font-medium">Certificate No:</span> {cert.certificateNo}
                  </p>
                </div>
                <Link
                  href={`https://${cert.certificateUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 px-4 py-1.5 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors duration-300"
                >
                  View Certificate
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimationContainer>
  );
};

export default CertificatesSection; 