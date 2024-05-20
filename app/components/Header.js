import Link from "next/link";
const Header = () => (
  <header className="px-4 lg:px-6 h-14 flex items-center">
    <Link className="flex items-center justify-center" href={"/"}>
      <MusicIcon className="h-6 w-6" />
      <span className="sr-only">Audio Trimmer</span>
    </Link>
    <nav className="ml-auto flex gap-4 sm:gap-6">
      <a
        className="text-sm font-medium hover:underline underline-offset-4"
        href="https://github.com/utsav82/edio"
      >
        GitHub
      </a>
    </nav>
  </header>
);

function MusicIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  );
}
export default Header;
