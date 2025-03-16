import React from "react";
import { notFound } from "next/navigation";
import { CourseDetailsPage } from "../../components/CourseDetails";
import { coursesData } from "../../../data/coursesData";

interface PageProps {
  params: {
    slug: string;
  };
}

export default function CoursePage({ params }: PageProps) {
  const course = coursesData.find(course => course.slug === params.slug);

  if (!course) {
    notFound();
  }

  return (
    <CourseDetailsPage
      courseTitle={course.courseTitle}
      courseSubtitle={course.courseSubtitle}
      heroImageUrl={course.heroImageUrl}
      introParagraphs={course.introParagraphs}
      resourcesHeading={course.resourcesHeading}
      resources={course.resources}
      sliderTitle={course.sliderTitle}
      sliderItems={course.sliderItems}
      timelineTitle={course.timelineTitle}
      timelineItems={course.timelineItems}
      faqTitle={course.faqTitle}
      faqItems={course.faqItems}
    />
  );
}
