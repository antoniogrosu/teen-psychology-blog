export default function Footer() {
  function getCurrentYear() {
    const currentDate = new Date();
    return currentDate.getFullYear();
  }

  // Example usage:
  const year = getCurrentYear();
  return (
    <footer className="bg-brown py-20 flex items-center justify-center">
      <p className="urbanist font-bold text-sm text-gray-50/40">
        Copyright © TeenPsychology {year}
      </p>
    </footer>
  );
}
