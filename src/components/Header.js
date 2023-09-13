const { default: Link } = require("next/link");

const Header = ({ first, second }) => {
  return (
    <header className="shadow-xl w-full bg-white sticky top-0 py-4 z-50 flex justify-center items-center">
      <nav className="w-1/2 flex justify-between">
        {first ? (
          <Link
            href="/content"
            className="text-blue-400 border-b-2 border-blue-400 font-semibold"
          >
            Opslag
          </Link>
        ) : (
          <Link href="/content">Opslag</Link>
        )}
        {second ? (
          <Link
            href="/content/images"
            className="text-blue-400 border-b-2 border-blue-400 font-semibold"
          >
            Billeder
          </Link>
        ) : (
          <Link href="/content/images">Billeder</Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
