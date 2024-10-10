"use client";

import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { JSX, SVGProps } from "react";
import { FaHome } from "react-icons/fa";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Component() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const targetId = hash.substring(1);
            const element = document.getElementById(targetId);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }

        const handleScroll = () => {
            

            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [pathname]);

    const closeMenu = () => {
        setIsOpen(false);
    };

    const closeMenuAndScroll = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        event.preventDefault();
        closeMenu();
    
        setTimeout(() => {
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                element.focus();
            }
        }, 300);
    };

    return (
        <header className={`fixed z-10 flex h-20 w-full bg-gray-900 text-gray-400 shrink-0 items-center px-4 md:px-6 transition-all duration-300 ${isSticky ? 'shadow-lg' : ''}`}>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                    <Button variant="btn" size="icon" className="lg:hidden" onClick={() => setIsOpen(true)}>
                        <MenuIcon className="h-6 w-6" />
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="bg-black text-white">
                    <div className="grid gap-2 py-6">
                        <Link href="/" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false} onClick={(event) => closeMenuAndScroll(event, '/')}>
                            <FaHome />
                        </Link>
                        <Link href="#services" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false} onClick={(event) => closeMenuAndScroll(event, 'services')}>
                            Services
                        </Link>
                        <Link href="#competences" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false} onClick={(event) => closeMenuAndScroll(event, 'competences')}>
                            Compétences
                        </Link>
                        <Link href="#portfolio" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false} onClick={(event) => closeMenuAndScroll(event, 'portfolio')}>
                            Portfolio
                        </Link>
                        <Link href="#a-propos" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false} onClick={(event) => closeMenuAndScroll(event, 'a-propos')}>
                            À propos
                        </Link>
                        <Link href="#contact" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false} onClick={(event) => closeMenuAndScroll(event, 'contact')}>
                            Contact
                        </Link>
                    </div>
                </SheetContent>
            </Sheet>
            <Link href="/" className="mr-6 hidden lg:flex" prefetch={false} aria-label="Page d'accueil">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-900 to-blue-700 rounded-lg shadow-lg flex items-center justify-center">
                    <div className="text-white text-xl font-mono transform -rotate-12">
                        {'{'}

                        <span className="inline-block transform rotate-12 translate-y-1">{'}'}</span>
                    </div>
                </div>
            </Link>
            <nav className="ml-auto hidden lg:flex gap-6">
                <Link
                    href="/"
                    className="group inline-flex h-9 w-max items-center justify-center border border-1 border-gray-800 hover:bg-gray-800 hover:text-white rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50"
                    prefetch={false}
                    onClick={closeMenu}
                >
                    <FaHome />
                </Link>
                <Link
                    href="#services"
                    className="group inline-flex h-9 w-max items-center justify-center border border-1 border-gray-800 hover:bg-gray-800 hover:text-white rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50"
                    prefetch={false}
                    onClick={closeMenu}
                >
                    Services
                </Link>
                <Link
                    href="#competences"
                    className="group inline-flex h-9 w-max items-center justify-center border border-1 border-gray-800 hover:bg-gray-800 hover:text-white rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50"
                    prefetch={false}
                    onClick={closeMenu}
                >
                    Compétences
                </Link>
                <Link
                    href="#portfolio"
                    className="group inline-flex h-9 w-max items-center justify-center border border-1 border-gray-800 hover:bg-gray-800 hover:text-white rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50"
                    prefetch={false}
                    onClick={closeMenu}
                >
                    Portfolio
                </Link>
                <Link
                    href="#a-propos"
                    className="group inline-flex h-9 w-max items-center justify-center border border-1 border-gray-800 hover:bg-gray-800 hover:text-white rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50"
                    prefetch={false}
                    onClick={closeMenu}
                >
                    À propos
                </Link>
                <Link
                    href="#contact"
                    className="group inline-flex h-9 w-max items-center justify-center border border-1 border-gray-800 hover:bg-gray-800 hover:text-white rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50"
                    prefetch={false}
                    onClick={closeMenu}
                >
                    Contact
                </Link>
            </nav>
        </header>
    );
}

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <line x1="4" x2="20" y1="4" y2="4" />
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="20" y2="20" />
        </svg>
    );
}