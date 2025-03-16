import Banner from './Banner/Banner';
import Companies from './Companies/Companies';
import Tabs from './Courses/Courses';
import Mentor from './Mentor/Mentor';
import Students from './Students/Students';
import Newsletter from './Newsletter/Newsletter';
import ContactSection from './Contact/Contact';
import AboutUs from './AboutUs/AboutUs';
import NamesList from './components/NamesList';

export default function Home() {
  return (
    <main>
      {/* <Companies /> */}
      <Banner />
      <AboutUs></AboutUs>
      <NamesList />
      <Mentor />
      <Students />
      <ContactSection />
    </main>
  )
}
