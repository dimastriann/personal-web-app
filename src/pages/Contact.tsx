// src/pages/Contact.tsx
import React from "react";
import { Smartphone, MapPin, Mail } from "lucide-react";

import appData from "../data/my_data.json";

const Contact: React.FC = () => {
    const { contacts, profile } = appData;
    return (
        <section className="min-h-screen px-6 py-16 text-center">
            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-blue-100">
                <div className="flex items-center gap-2 justify-center">
                    <Smartphone className="w-5 h-5 text-[#FDB913]" />{" "}
                    <span>{contacts.phone.value}</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                    <MapPin className="w-5 h-5 text-[#FDB913]" />{" "}
                    <span>{profile.address}</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                    <Mail className="w-5 h-5 text-[#FDB913]" />{" "}
                    <span>{contacts.email.value}</span>
                </div>
            </div>

            {/* Contact Form */}
            <form className="max-w-2xl mx-auto grid grid-cols-1 gap-4">
                <input
                    type="text"
                    placeholder="Your Name"
                    className="p-3 rounded bg-white/10 text-white placeholder:text-blue-200"
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    className="p-3 rounded bg-white/10 text-white placeholder:text-blue-200"
                />
                <input
                    type="text"
                    placeholder="Subject"
                    className="p-3 rounded bg-white/10 text-white placeholder:text-blue-200"
                />
                <textarea
                    rows={4}
                    placeholder="Your Message"
                    className="p-3 rounded bg-white/10 text-white placeholder:text-blue-200"
                />
                <button
                    type="submit"
                    onClick={() => alert("Under Construction")}
                    className="mt-4 bg-[#FDB913] text-[#004D98] font-semibold py-2 rounded hover:bg-[#fbcf3c] transition"
                >
                    Send Message
                </button>
            </form>
        </section>
    );
};

export default Contact;
