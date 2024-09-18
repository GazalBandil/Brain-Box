'use client';

import Image from "next/image";
import Topbar from "./topbar";
import HeroSection from "./herosection";
import ServicesSection from "./servicesection";
import ContactSection from "./contactsection";
import "./globals.css"
import ScrollToTopButton from "./scroll-to-top";
import TestimonialsSection from "./testimonialsection";
import Footer from "./footersectoin";
import TutorsSection from "./tutorssection";
import WhatsAppIcon from "./whatsappicon";
import  Faqsection  from "./faqsection";
import ExtraSection from "./extrasection";
import CourseSection from "./coursesection";
import AboutUsSection from "./aboutussection";
import Head from 'next/head';


export default function Home() {
  return (
    <>
    <Head>
        <title>Expert Tutoring Services | Unlock Your Potential</title>
        <meta name="description" content="Personalized tutoring services to help you excel in any subject. Our experienced tutors are dedicated to your academic success." />
        <link rel="canonical" href="https://www.yourwebsite.com/" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Expert Tutoring Services | Unlock Your Potential" />
        <meta property="og:description" content="Personalized tutoring services to help you excel in any subject. Our experienced tutors are dedicated to your academic success." />
        <meta property="og:url" content="https://www.yourwebsite.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.yourwebsite.com/path-to-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Expert Tutoring Services | Unlock Your Potential" />
        <meta name="twitter:description" content="Personalized tutoring services to help you excel in any subject. Our experienced tutors are dedicated to your academic success." />
        <meta name="twitter:image" content="https://www.yourwebsite.com/path-to-image.jpg" />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Your Tutoring Service",
            "url": "https://www.yourwebsite.com/",
            "logo": "https://www.yourwebsite.com/path-to-logo.jpg",
            "sameAs": [
              "https://www.facebook.com/yourprofile",
              "https://www.twitter.com/yourprofile",
              "https://www.linkedin.com/yourprofile"
            ]
          }
          `}
        </script>
      </Head>
      <Topbar />
      <HeroSection />
      
      <AboutUsSection/>
      <CourseSection/>
      <ServicesSection />
      {/* <KeyFeaturesSection/> */}
      {/* <TutorsSection /> */}
      <ExtraSection/>
      <TestimonialsSection />

      <ContactSection />
      <Faqsection/>
      <Footer />
      <div className="relative">
        <div className="fixed bottom-6 right-6 z-50   "
        >
          <WhatsAppIcon/>
        </div>
      </div>
      <ScrollToTopButton/>

    </>
  );
}
