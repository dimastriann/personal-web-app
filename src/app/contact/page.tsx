import { Mail } from 'lucide-react';
import appData from '../../data/my_data.json';

export default function ContactPage() {
  const { contacts } = appData;

  const contactClass = () => {
    return `p-3 flex items-center gap-2 justify-center bg-white rounded-xl 
      shadow-2xl hover:bg-blue-400 hover:text-white dark:bg-gray-800 
      hover:dark:bg-gray-700`;
  };

  return (
    <>
      <section className="min-h-screen px-6 pb-16 pt-4 text-center md:mt-16">
        <h1 className="m-4 text-3xl">Get In Touch With Me</h1>
        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="p-2">
            <a
              href={contacts.telegram.value}
              target="_blank"
              className={contactClass()}
            >
              <img src="/img/telegram.png" alt="LinkedIn" />
              <span title={contacts.telegram.label}>Dimas Trian</span>
            </a>
          </div>
          <div className="p-2">
            <a
              href={contacts.email.value}
              target="_blank"
              className={contactClass()}
            >
              <Mail className="w-5 h-5" />{' '}
              <span title={contacts.email.label}>{contacts.email.value}</span>
            </a>
          </div>
          <div className="p-2">
            <a
              href={contacts.linkedin.value}
              target="_blank"
              className={contactClass()}
            >
              <img src="/img/linkedin.png" alt="LinkedIn" />
              <span title={contacts.linkedin.label}>Dimas Trian Nugraha</span>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="shadow-2xl max-w-2xl mx-auto p-4 rounded-2xl dark:bg-gray-800">
          <form className="grid grid-cols-1 gap-4 round">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded bg-white/10 placeholder:text-blue-200 border focus:border-2"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded bg-white/10 placeholder:text-blue-200 border focus:border-2"
            />
            <input
              type="text"
              placeholder="Subject"
              className="p-3 rounded bg-white/10 placeholder:text-blue-200 border focus:border-2"
            />
            <textarea
              rows={4}
              placeholder="Your Message"
              className="p-3 rounded bg-white/10 placeholder:text-blue-200 border focus:border-2"
            />
            <button
              type="submit"
              disabled={true}
              className="mt-4 text-white bg-[#004D98] font-semibold py-2 rounded hover:bg-blue-500 transition dark:bg-gray-950 hover:dark:bg-gray-900 cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
