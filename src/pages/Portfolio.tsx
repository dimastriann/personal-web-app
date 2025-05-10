// src/pages/About.tsx
import React, { useState } from "react";
import { X } from "lucide-react";

// import appData from "../data/my_data.json";

type Certificate = {
    title: string;
    image: string;
};

const Portfolio: React.FC = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [selectedCert, setSelectedCert] = useState<Certificate>({
        title: "",
        image: "",
    });

    const certificates = [
        {
            title: "Software Engineer",
            image: "/certificates/software.png",
        },
        {
            title: "Full Stack Web Developer",
            image: "/certificates/fullstack.png",
        },
        {
            title: "Javascript",
            image: "/certificates/javascript.png",
        },
    ];

    // const testimonials = [
    //   {
    //     quote: "Dimas is an exceptional developer with a deep understanding of web technologies.",
    //     author: "..."
    //   },
    //   {
    //     quote: "His contributions made a big difference in our delivery timelines.",
    //     author: "..."
    //   }
    // ];
    // const { educations, work_experiences } = appData.profile;
    return (
        <section id="portfolio" className="portfolio section p-6">
            <div className="mb-12">
                <h3 className="text-2xl font-semibold text-white mb-4">
                    Work Experience
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <li className="bg-white/10 p-4 rounded-xl text-blue-100">
                        Developed a modern e-learning platform with quiz and
                        progress tracking.
                    </li>
                    <li className="bg-white/10 p-4 rounded-xl text-blue-100">
                        Built a real-time queue screen system for hospital and
                        clinic displays.
                    </li>
                    <li className="bg-white/10 p-4 rounded-xl text-blue-100">
                        Customized POS system for retail shops including barcode
                        scanning and inventory sync.
                    </li>
                    <li className="bg-white/10 p-4 rounded-xl text-blue-100">
                        Integrated payment gateway and reporting tools.
                    </li>
                    <li className="bg-white/10 p-4 rounded-xl text-blue-100">
                        Developed internal dashboards and admin panels with user
                        access control.
                    </li>
                </ul>
            </div>
            <div className="mb-12">
                <h3 className="text-2xl font-semibold text-white mb-4">
                    Project List
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <li className="bg-white/10 p-4 rounded-xl text-blue-100">
                        E-learning Web App
                    </li>
                    <li className="bg-white/10 p-4 rounded-xl text-blue-100">
                        Queue Display System
                    </li>
                    <li className="bg-white/10 p-4 rounded-xl text-blue-100">
                        POS Customization
                    </li>
                    <li className="bg-white/10 p-4 rounded-xl text-blue-100">
                        Dashboard for Inventory
                    </li>
                    <li className="bg-white/10 p-4 rounded-xl text-blue-100">
                        React + Tailwind Starter Kit
                    </li>
                </ul>
            </div>

            <div className="mb-12">
                <h3 className="text-2xl font-semibold text-white mb-4">
                    Certifications
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {certificates.map((cert, index) => (
                        <div
                            key={index}
                            className="bg-white/10 p-4 rounded-xl text-blue-100"
                        >
                            <p>{cert.title}</p>
                            <button
                                className="mt-2 underline text-[#FDB913] cursor-pointer"
                                onClick={() => {
                                    setSelectedCert(cert);
                                    setShowModal(true);
                                }}
                            >
                                View Certificate
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mb-12">
                <h3 className="text-2xl font-semibold text-white mb-4">
                    Tools & Technologies
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-blue-100">
                    <div className="bg-white/10 p-4 rounded-xl">
                        React.js, Next.js
                    </div>
                    <div className="bg-white/10 p-4 rounded-xl">
                        Node.js, Express
                    </div>
                    <div className="bg-white/10 p-4 rounded-xl">
                        Tailwind CSS, Bootstrap
                    </div>
                    <div className="bg-white/10 p-4 rounded-xl">
                        MySQL, PostgreSQL
                    </div>
                    <div className="bg-white/10 p-4 rounded-xl">
                        Odoo ERP Customization
                    </div>
                    <div className="bg-white/10 p-4 rounded-xl">
                        Git, GitHub, CI/CD
                    </div>
                </div>
            </div>

            {/* <div className="mb-12">
        <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2"><MessageSquareQuote className="w-6 h-6" /> Testimonials</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((item, idx) => (
            <div key={idx} className="bg-white/10 p-4 rounded-xl text-blue-100">
              <p className="italic mb-2">“{item.quote}”</p>
              <p className="text-right text-sm">— {item.author}</p>
            </div>
          ))}
        </div>
      </div> */}

            {showModal && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl p-4 max-w-3xl w-full relative">
                        <button
                            className="absolute top-2 right-2 text-gray-700 cursor-pointer"
                            onClick={() => setShowModal(false)}
                        >
                            <X className="w-6 h-6" />
                        </button>
                        <h3 className="text-xl font-bold mb-4 text-center text-[#004D98]">
                            {selectedCert.title}
                        </h3>
                        <img
                            src={selectedCert.image}
                            alt={selectedCert.title}
                            className="w-full rounded"
                        />
                    </div>
                </div>
            )}
        </section>
    );
};

export default Portfolio;
