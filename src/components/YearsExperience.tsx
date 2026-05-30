'use client';

export default function YearsExperience({ startYear }: { startYear: number }) {
  const years = new Date().getFullYear() - startYear;
  return <span>{years}+ Years Experience</span>;
}
