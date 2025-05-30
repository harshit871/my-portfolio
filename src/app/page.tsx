import Header from '@/components/Header/Header';
import Skills from '@/components/Skills/Skills';
import Projects from '@/components/Projects/Projects';
import Contact from '@/components/Contact/Contact';

export default function Home() {
  const skills = [
    'React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS',
    'Node.js', 'Git', 'Responsive Design', 'RESTful APIs', 'GraphQL'
  ];

  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce platform with product listings, cart, and checkout functionality.',
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates using WebSockets.',
      technologies: ['React', 'Express', 'Socket.io', 'PostgreSQL'],
      link: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website to showcase projects and skills.',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      link: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Header />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Contact />
    </div>
  );
}
