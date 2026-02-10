import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <section id="contact" className="p-8 bg-gray-100 text-center">
      <h3 className="text-2xl font-bold mb-4">Contact Me</h3>
      <p className="text-gray-700 mb-6">
      Open to collaboration, client partnerships, and company projects. let’s build impactful solutions together.
      </p>

      {/* Contact list */}
      <div className="flex flex-col items-center space-y-4 md:space-y-2 md:flex-row md:justify-center md:space-x-8">
        
        {/* Email */}
        <a 
          href="mailto:shamsherdevp@gmail.com" 
          className="flex items-center space-x-2 text-red-600 hover:text-red-800"
        >
          <MdEmail className="text-2xl" />
          <span>shamsherdevp@gmail.com</span>
        </a>

        {/* LinkedIn */}
        <a 
          href="https://www.linkedin.com/in/shamsherali-dev/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-800"
        >
          <FaLinkedin className="text-2xl" />
          <span>shamsherali-dev</span>
        </a>

        {/* GitHub */}
        <a 
          href="https://github.com/shamsherali-da" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center space-x-2 text-gray-800 hover:text-black"
        >
          <FaGithub className="text-2xl" />
          <span>shamsherali-da</span>
        </a>

        {/* WhatsApp */}
        <a 
          href="https://wa.me/923058840463" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center space-x-2 text-green-600 hover:text-green-800"
        >
          <FaWhatsapp className="text-2xl" />
          <span>+923058840463</span>
        </a>
      </div>
    </section>
  );
}
