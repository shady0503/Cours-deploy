import { CourseDetailsPage } from "@/app/components/CourseDetails";
import { coursesData } from "@/data/coursesData";
import { notFound } from "next/navigation";

// 1. Define the type for your params as a Promise.
type Params = Promise<{ slug: string }>;

export default async function CoursePage({ params }: { params: Params }) {
  // 2. Await the resolved params.
  const { slug } = await params;

  // 3. Fetch or filter your data based on the slug.
  const course = coursesData.find((course) => course.slug === slug);

  if (!course) {
    notFound();
  }

  // 4. Return your page component with the fetched data.
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
