import Link from "next/link";
import React from 'react';

const Footer = () => {
    return (
        <footer className="font-jost bg-primary text-white">
            <div className="container mx-auto px-4 py-10 md:px-8 lg:px-4 xl:ml-30">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-y-12">
                    <div className="col-span-1 sm:col-span-2 md:col-span-4 lg:col-span-1 flex justify-center md:mb-8 lg:mb-0">
                        <div className="flex flex-col items-center md:items-center lg:items-start">
                            <img 
                                src="/images/shawazi-logo.png" 
                                alt="Shawazi Logo" 
                                className="w-[60%] max-w-[100px] mb-2 mt-10 md:max-w-[150px] lg:max-w-[150px] xl:max-w-[150px]" 
                            />
                            <h2 className="text-[25px] font-bold text-foreground">SHAWAZI</h2>
                        </div>
                    </div>
                    
                    <div className="text-center sm:text-left md:text-center lg:text-left md:mx-auto lg:mx-0">
                        <h3 className="text-[26px] font-bold mb-5 text-foreground">Features</h3>
                        <ul className="text-[22px] space-y-8">
                            <li><Link href="#" className="hover:text-hover transition-colors duration-300">Land Data</Link></li>
                            <li><Link href="#" className="hover:text-hover transition-colors duration-300">Secure Chat</Link></li>
                            <li><Link href="#" className="hover:text-hover transition-colors duration-300">Smart Contracts</Link></li>
                            <li><Link href="#" className="hover:text-hover transition-colors duration-300">Payment Tracking</Link></li>
                        </ul>
                    </div>
                    
                    <div className="text-center sm:text-left md:text-center lg:text-left md:mx-auto lg:mx-0">
                        <h3 className="text-[26px] font-bold mb-3 text-foreground">Products</h3>
                        <ul className="text-[22px] space-y-8">
                            <li><Link href="#" className="hover:text-hover transition-colors duration-300">Dashboard</Link></li>
                            <li><Link href="#" className="hover:text-hover transition-colors duration-300">Analytics</Link></li>
                            <li><Link href="#" className="hover:text-hover transition-colors duration-300">Analytics</Link></li>
                            <li><Link href="#" className="hover:text-hover transition-colors duration-300">Support</Link></li>
                        </ul>
                    </div>
                    
                    <div className="text-center sm:text-left md:text-center lg:text-left md:mx-auto lg:mx-0">
                        <h3 className="text-[26px] font-bold mb-3 text-foreground">About Us</h3>
                        <ul className="text-[22px] space-y-8">
                            <li><Link href="#" className="hover:text-hover transition-colors duration-300">Mission</Link></li>
                            <li><Link href="#" className="hover:text-hover transition-colors duration-300">Team</Link></li>
                            <li><Link href="#" className="hover:text-hover transition-colors duration-300">Contacts</Link></li>
                        </ul>
                    </div>
                    
                    <div className="text-center sm:text-left md:text-center lg:text-left md:mx-auto lg:mx-0">
                        <h3 className="text-[26px] font-bold mb-3 text-foreground">Socials</h3>
                        <ul className="text-[22px] space-y-8">
                            <li><Link href="#" className="hover:text-hover transition-colors duration-300">Twitter</Link></li>
                            <li><Link href="#" className="hover:text-hover transition-colors duration-300">LinkedIn</Link></li>
                            <li><Link href="#" className="hover:text-hover transition-colors duration-300">Facebook</Link></li>
                            <li><Link href="#" className="hover:text-hover transition-colors duration-300">Instagram</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="border-t border-secondary mt-8 pt-8 pb-4 text-center mb-5">
                <p className="text-[20px]">© 2024 Shawazi Inc. All rights reserved</p>
            </div>
        </footer>
    );
}

export default Footer;
