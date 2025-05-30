import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
          <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
            I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi,
            I&apos;ll get back to you as soon as possible!
          </p>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400">
                <span className="sr-only">GitHub</span>
                <FaGithub className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400">
                <span className="sr-only">LinkedIn</span>
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400">
                <span className="sr-only">Twitter</span>
                <FaTwitter className="h-6 w-6" />
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} Harshit Soni. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
