export default function Footer() {
  return (
    <>
      <footer className="py-4 bg-neutral-500 text-center max-md:mb-16 text-white">
        <div>
          <span>&copy;</span>
          <span className="mx-2">{new Date().getFullYear()}</span>
          <span>Dimastiann</span>
        </div>
      </footer>
    </>
  );
}
