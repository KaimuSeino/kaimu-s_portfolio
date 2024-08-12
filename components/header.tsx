import Link from "next/link";
import Menu from "@/components/menu";


const Header = () => {
    return ( 
        <header className="fixed top-0 left-0 w-full flex items-center justify-around px-8 py-6 z-50">
            <h1>
                <a className="text-2xl font-bold">Kaimu Seino</a>
            </h1>
            <nav className="hidden md:flex md:gap-x-6">
                <Link href="#about" passHref>
                    About
                </Link>
                <Link href="#skill" passHref>
                    Skill
                </Link>
                <Link href="#experience" passHref>
                    Experience
                </Link>
                <Link href="#products" passHref>
                    Products
                </Link>
                <Link href="#social" passHref>
                    SNS
                </Link>
            </nav>
            <Menu />
        </header>
     );
}
 
export default Header;