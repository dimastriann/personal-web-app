import { Smartphone, MapPin, Mail } from 'lucide-react';
import appData from '../../data/my_data.json';

export default function ContactPage() {
  const { contacts, profile } = appData;
  return (
    <>
      <section className="min-h-screen px-6 py-16 text-center md:mt-16">
        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="flex items-center gap-2 justify-center">
            <Smartphone className="w-5 h-5" />{' '}
            <span title={contacts.phone.label}>
              <a href={`tel:${contacts.phone.value}`}>{contacts.phone.value}</a>
            </span>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <MapPin className="w-5 h-5" /> <span>{profile.address}</span>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <Mail className="w-5 h-5" />{' '}
            <span title={contacts.email.label}>
              <a href={`mailto:${contacts.email.value}`}>
                {contacts.email.value}
              </a>
            </span>
          </div>
        </div>

        {/* Contact Form */}
        <form className="max-w-2xl mx-auto grid grid-cols-1 gap-4">
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
            className="mt-4 text-white bg-[#004D98] font-semibold py-2 rounded hover:bg-blue-500 transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </>
  );
}
