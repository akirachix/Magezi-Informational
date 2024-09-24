import Link from "next/link";
import React from 'react';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="font-jost bg-primary text-white">
            <div className="container mx-auto px-4 py-10 md:px-8 lg:px-10 xl:px-12">
            <div id='Contacts'> </div>

                <div className="flex flex-col md:flex-row items-stretch justify-between gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14">
                    <div className="flex-1 flex flex-col justify-center md:mr-4 lg:mr-10">
                        <div className="flex flex-col items-center md:items-start">
                            <Image 
                                src="/images/shawazi-logo.png" 
                                alt="Shawazi Logo" 
                                className="w-[60%] max-w-[100px] mb-2 mt-10 md:max-w-[150px] lg:max-w-[150px] xl:max-w-[150px]" 
                            />
                            <h2 className="text-[20px] font-bold text-foreground">SHAWAZI</h2>
                        </div>
                    </div>
                    
                    <div className="flex-1 text-center md:text-left">
                        <h3 className="text-[22px] font-bold mb-5 text-foreground">Features</h3>
                        <ul className="text-[18px] space-y-4">
                            <li><Link href="#" className="hover:text-hover transition-colors duration-300">Land Data</Link></li>
                            <li><Link href="#" className="hover:text-hover transition-colors duration-300">Secure Chat</Link></li>
                            <li><Link href="#" className="hover:text-hover transition-colors duration-300">Smart Contracts</Link></li>
                            <li><Link href="#" className="hover:text-hover transition-colors duration-300">Payment Tracking</Link></li>
                        </ul>
                    </div>
                    
                    <div className="flex-1 text-center md:text-left">
                        <h3 className="text-[22px] font-bold mb-5 text-foreground">Products</h3>
                        <ul className="text-[18px] space-y-4">
                            <li><Link href="#" className="hover:text-hover transition-colors duration-300">Dashboard</Link></li>
                            <li><Link href="#" className="hover:text-hover transition-colors duration-300">Analytics</Link></li>
                            <li><Link href="#" className="hover:text-hover transition-colors duration-300">Reports</Link></li>
                            <li><Link href="#" className="hover:text-hover transition-colors duration-300">Support</Link></li>
                        </ul>
                    </div>
                    
                    <div className="flex-1 text-center md:text-left">
                        <h3 className="text-[22px] font-bold mb-5 text-foreground">About Us</h3>
                        <ul className="text-[18px] space-y-4">
                            <li><Link href="#" className="hover:text-hover transition-colors duration-300">Mission</Link></li>
                            <li><Link href="#" className="hover:text-hover transition-colors duration-300">Team</Link></li>
                            <li><Link href="#" className="hover:text-hover transition-colors duration-300">Contacts</Link></li>
                        </ul>
                    </div>
                    
                    <div className="flex-1 text-center md:text-left">
                        <h3 className="text-[22px] font-bold mb-5 text-foreground">Socials</h3>
                        <ul className="text-[18px] space-y-4">
                            <li><Link href="#" className="hover:text-hover transition-colors duration-300">Twitter</Link></li>
                            <li><Link href="#" className="hover:text-hover transition-colors duration-300">LinkedIn</Link></li>
                            <li><Link href="#" className="hover:text-hover transition-colors duration-300">Facebook</Link></li>
                            <li><Link href="#" className="hover:text-hover transition-colors duration-300">Instagram</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="border-t border-secondary mt-8 pt-8 text-center">
                <p className="text-[18px]">© 2024 Shawazi Inc. All rights reserved</p>
            </div>
        </footer>
    );
}

export default Footer;