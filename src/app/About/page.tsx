import { IconMail, IconPhone, IconBrandGithub, IconBrandLinkedin, IconBrandTwitter } from '@tabler/icons-react';

export default function Footer() {
  return (
    <footer className="py-8 text-white bg-black">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-start justify-between md:flex-row">
          {/* Contact Info */}
          <div className="mb-6 md:mb-0">
            <h2 className="mb-4 text-2xl font-bold">Contact Us</h2>
            <p className="flex items-center mb-3">
              <IconMail size={20} className="mr-2 text-gray-400" />
              <a href="mailto:vanshdhalor0001@gmail.com" className="hover:text-gray-300">vanshdhalor0001@gmail.com</a>
            </p>
            <p className="flex items-center mb-3">
              <IconMail size={20} className="mr-2 text-gray-400" />
              <a href="mailto:navrajsandhu@gmail.com" className="hover:text-gray-300">navrajsandhu@gmail.com</a>
            </p>
            <p className="flex items-center mb-3">
              <IconMail size={20} className="mr-2 text-gray-400" />
              <a href="mailto:madhavpathak@gmail.com" className="hover:text-gray-300">madhavpathak@gmail.com</a>
            </p>
            <p className="flex items-center mb-3">
              <IconPhone size={20} className="mr-2 text-gray-400" />
              <a href="tel:9888xxxx" className="hover:text-gray-300">9888xxxx</a>
            </p>
            <p className="flex items-center mb-3">
              <IconPhone size={20} className="mr-2 text-gray-400" />
              <a href="tel:9777xxxx" className="hover:text-gray-300">9777xxxx</a>
            </p>
            <p className="flex items-center mb-3">
              <IconPhone size={20} className="mr-2 text-gray-400" />
              <a href="tel:62xxxxx" className="hover:text-gray-300">62xxxxx</a>
            </p>
          </div>

          {/* Social Media */}
          <div className="mb-6 md:mb-0">
            <h2 className="mb-4 text-2xl font-bold">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-gray-300">
                <IconBrandLinkedin size={24} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-400 hover:text-gray-300">
                <IconBrandGithub size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-400 hover:text-gray-300">
                <IconBrandTwitter size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-4 mt-8 text-center border-t border-gray-700">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
