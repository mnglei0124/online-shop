import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex justify-between w-full px-20 py-6 border-b-2 border-blue-300">
      <Image src="logo.svg" alt="lalar" width={26} height={26} />
      <div className="flex gap-12">
        <div>Home</div>
        <div>Products</div>
        <div>Blog</div>
        <div>FAQ</div>
        <div>Contact Us</div>
      </div>
      <div className="flex gap-3">
        <div>search</div>
        <div>login/signup</div>
      </div>
    </nav>
  );
};

export default Navbar;
