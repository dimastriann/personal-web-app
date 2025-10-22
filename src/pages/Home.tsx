// src/pages/Home.tsx
import React from 'react';

const Home: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-center px-4 pt-5 overflow-auto">
      <h2 className="text-md text-[#FDB913] mb-2">Hi There</h2>
      <h1 className="text-5xl font-extrabold text-white mb-2">I am</h1>
      <h1 className="text-4xl text-[#FDB913] font-semibold mb-1">
        Dimas Trian Nugraha
      </h1>
      <p className="text-xl text-blue-100 mb-8">Software Engineer</p>
      <div className="max-w-xl text-blue-100 text-lg leading-relaxed px-6">
        <p>
          I specialize in building high-performance web applications with modern
          JavaScript and Python frameworks especially in Odoo ERP. I enjoy
          solving complex problems, designing user-friendly interfaces, and
          delivering efficient, scalable software solutions.
        </p>
        <p className="mt-4">
          With a strong foundation in full-stack development and a passion for
          clean code, I strive to create software that not only works but excels
          in performance and maintainability.
        </p>
      </div>
    </section>
  );
};

export default Home;
