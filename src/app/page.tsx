export default function HomePage() {
  const tags = [
    { label: 'Odoo ERP', cls: 'bg-blue-100 text-blue-800' },
    { label: 'Python', cls: 'bg-green-100 text-green-800' },
    { label: 'Backend', cls: 'bg-purple-100 text-purple-800' },
    { label: 'Frontend', cls: 'bg-pink-100 text-pink-800' },
    { label: 'Full Stack', cls: 'bg-yellow-100 text-yellow-800' },
    { label: 'ReactJS', cls: 'bg-green-200 text-yellow-800' },
    { label: 'OWL (Odoo)', cls: 'bg-blue-200 text-yellow-800' },
    { label: 'SQL', cls: 'bg-cyan-100 text-yellow-800' },
    { label: 'REST API', cls: 'bg-teal-100 text-yellow-800' },
  ];

  const leftLogos = [
    {
      name: 'Python',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    },
    {
      name: 'JavaScript',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    },
    {
      name: 'TypeScript',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    },
    {
      name: 'NodeJS',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg',
    },
  ];

  const rightLogos = [
    {
      name: 'HTML5',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    },
    {
      name: 'CSS3',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    },
    {
      name: 'Rust',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg',
    },
    {
      name: 'PostgreSQL',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    },
  ];

  return (
    <section className="relative md:mt-16">
      <div className="absolute left-5 top-1/4 flex flex-col gap-6">
        {leftLogos.map((logo, i) => (
          <img
            key={i}
            src={logo.src}
            alt={logo.name}
            className="w-16 h-16 opacity-70 hover:opacity-100 transition-all duration-300"
          />
        ))}
      </div>
      <div className="absolute right-5 top-1/4 flex flex-col gap-6">
        {rightLogos.map((logo, i) => (
          <img
            key={i}
            src={logo.src}
            alt={logo.name}
            className="w-16 h-16 opacity-70 hover:opacity-100 transition-all duration-300"
          />
        ))}
      </div>

      <div className="flex justify-center items-center min-h-screen">
        <div className="rounded-md shadow-2xl bg-white md:w-[60%] p-10 relative z-10 dark:bg-gray-800">
          <div className="uppercase text-center mb-4">
            <h2 className="text-2xl">Hi There</h2>
            <h1 className="text-5xl">I am</h1>
            <h1 className="text-4xl font-bold">Dimas Trian Nugraha</h1>
            <h1 className="text-2xl text-gray-600 dark:text-gray-50">
              Odoo Developer / Software Engineer
            </h1>
          </div>
          <div className="flex flex-col xl:grid xl:grid-cols-2 items-center">
            {/* Text Section */}
            <div className="text-left space-y-4">
              <p className="text-black dark:text-white text-justify">
                I specialize in building high-performance web applications with
                modern JavaScript and Python frameworks, especially in Odoo ERP.
                I enjoy solving complex problems, designing user-friendly
                interfaces, and delivering efficient, scalable software
                solutions.
              </p>
              <p className="text-gray-700 text-justify dark:text-white">
                With a strong foundation in full-stack development and a passion
                for clean code, I strive to create software that not only works
                but excels in performance and maintainability.
              </p>
              {/* Tags */}
              <div className="flex flex-wrap gap-3 pt-3">
                {tags.map((t, i) => (
                  <span
                    key={i}
                    className={`rounded-full px-3 py-1 text-sm font-medium shadow-sm ${t.cls}`}
                  >
                    {t.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Right image (developer illustration) */}
            <div className="flex justify-center">
              <img
                src="https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif"
                alt="programmer"
                className="w-72 h-72 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
