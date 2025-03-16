import { CourseDetailsPage } from "@/app/components/CourseDetails";
import { coursesData } from "@/data/coursesData";
import { notFound } from "next/navigation";

interface PageProps {
  params: { slug: string } | Promise<{ slug: string }>;
}

export default async function CoursePage({ params }: PageProps) {
  // If params is a Promise, await it; otherwise, use it directly.
  const resolvedParams = params instanceof Promise ? await params : params;
  const { slug } = resolvedParams;

  const course = coursesData.find(course => course.slug === slug);

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
