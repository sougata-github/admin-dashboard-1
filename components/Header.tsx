import MobileNav from "./MobileNav";

const Header = ({ title }: { title: string }) => {
  return (
    <header className="sticky top-0 bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg border-b border-gray-700 z-40">
      <div className="max-w-7xl mx-auto py-4 px-6 lg:px-8 flex justify-between">
        <h1 className="text-2xl font-semibold text-gray-100">{title}</h1>
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
