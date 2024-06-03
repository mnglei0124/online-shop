import Image from "next/image";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import UserProfile from "./UserProfile";

const Navbar = ({ isLoggedIn }) => {
  isLoggedIn = 1;
  return (
    <nav className="flex justify-between w-full px-20 py-3 border-b-2 border-blue-300">
      <Link href="/">
        <Image src="logo.svg" alt="logo" width={45} height={45} />
      </Link>
      <div className="flex gap-12 items-center">
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/blogs">Blog</Link>
        <Link href="/faq">FAQ</Link>
        <Link href="/contact">Contact Us</Link>
      </div>
      <div className="flex gap-3">
        <Image src="search.svg" alt="search button" width={40} height={40} />
        <Image src="cart.svg" alt="cart" width={40} height={40} />
        {isLoggedIn ? <UserProfile /> : <Button>login/signup</Button>}
      </div>
    </nav>
  );
};

export default Navbar;
