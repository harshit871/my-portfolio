import Link from 'next/link';

const Header = () => {
  return (
    <section className="container mx-auto px-4 py-20 md:py-32">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Harshit Soni
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
          Frontend Developer
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          I build exceptional digital experiences with modern web technologies.
          Passionate about creating intuitive, responsive, and performant applications.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="#contact"
            className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
          >
            Get In Touch
          </Link>
          <Link
            href="#projects"
            className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-300"
          >
            View My Work
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Header;
