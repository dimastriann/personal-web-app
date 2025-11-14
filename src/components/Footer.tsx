'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const [isNotFound, setIsNotFound] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const notFound = document.getElementById('not-found')!;
    setIsNotFound(!!notFound);
  }, [pathname]);

  return (
    <>
      <footer
        className="py-4 bg-neutral-500 dark:bg-gray-800 text-center max-md:mb-16 text-white"
        style={{ display: isNotFound ? 'none' : 'fixed' }}
      >
        <div>
          <span>&copy;</span>
          <span className="mx-2">{new Date().getFullYear()}</span>
          <span>Dimastiann</span>
        </div>
      </footer>
    </>
  );
}
