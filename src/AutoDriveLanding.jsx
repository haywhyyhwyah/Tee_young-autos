import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Instagram, Facebook, Twitter, Calendar, ShieldCheck, Settings, Star } from 'lucide-react';

const AutoDriveLanding = () => {
    return (
        <div className="min-h-screen font-sans bg-black text-white">
            {/* 1. Hero Section */}
            <header className="relative h-[600px] flex flex-col">
                {/* Navigation */}
                <nav className="absolute top-0 w-full z-10 flex justify-between items-center px-12 py-6">
                    <div className="text-2xl font-bold italic" style={{display: 'flex', alignItems: 'center'}}>
                        <img src="rm.png" alt="" style={{width: '100px'}}/>
                        Teeyoung_<span className="text-red-600">Autos</span>
                    </div>
                    <div className="hidden md:flex space-x-8 text-xs font-semibold tracking-widest uppercase text-gray-300">
                        <Link to="/" className="hover:text-white">Home</Link>
                        <Link to="/inventory" className="hover:text-white">Inventory</Link>
                        <a href="#" className="hover:text-white">About Us</a>
                        <a href="#" className="hover:text-white">Contact</a>
                    </div>
                </nav>

                {/* Hero Background & Text */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=2000')` }}
                />
                <div className="relative z-0 flex flex-col justify-center h-full px-12 max-w-2xl">
                    <h1 className="text-5xl font-bold leading-tight mb-4">
                        FIND YOUR DRIVE HERE <br /> WITH US AT <span style={{color: 'red'}}>TEEYOUNG</span> AUTOS.
                    </h1>
                    <p className="text-gray-300 mb-8 text-lg">
                        Explore a curated selection of new & pre-owned vehicles.
                    </p>
                    <Link to="/inventory" className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded w-fit transition duration-300 uppercase text-sm tracking-wider inline-block">
                        Browse and check for our vehicles
                    </Link>
                </div>
            </header>

            {/* 2. Features & Featured Cars */}
            <section className="bg-[#121212] px-12 py-16 grid grid-cols-1 md:grid-cols-12 gap-12">
                {/* Why Choose Us */}
                <div className="md:col-span-4">
                    <h2 className="text-2xl font-bold mb-8 uppercase">Why Choose Us</h2>
                    <div className="flex gap-4">
                        <div className="border border-red-600 p-6 rounded-lg text-center flex-1">
                            <Settings className="mx-auto mb-2 text-red-500" size={32} />
                            <p className="text-xs font-bold uppercase">Quality Vehicles</p>
                        </div>
                        <div className="border border-red-600 p-6 rounded-lg text-center flex-1">
                            <Calendar className="mx-auto mb-2 text-red-500" size={32} />
                            <p className="text-xs font-bold uppercase">Trusted Dealers</p>
                        </div>
                    </div>
                </div>

                {/* Featured Cars */}
                <div className="md:col-span-8">
                    <h2 className="text-2xl font-bold mb-8 uppercase">Featured Cars</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <CarCard name="Lexus 350" price="#27,000,000" img="lexus.jpeg" />
                        <CarCard name="Toyota camry" price="#20,000,000" img="toyota.jpeg" />
                    </div>
                </div>
            </section>

            {/* 3. Customer Trust Banner */}
            <section className="bg-gray-100 text-black px-12 py-16 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-8 md:mb-0">
                    <h2 className="text-2xl font-bold mb-2 uppercase tracking-tight">Customer Trust</h2>
                    <div className="flex items-center gap-2">
                        <Star className="text-red-600 fill-current" size={32} />
                        <span className="text-4xl font-black italic">1000+</span>
                    </div>
                    <p className="text-gray-600 text-sm font-bold uppercase">Happy Customers</p>
                    <Link to="/inventory" className="mt-4 bg-red-600 text-white px-6 py-2 rounded font-bold text-xs inline-block">VIEW OUR VEHICLES</Link>
                </div>

                <div className="grid grid-cols-2 gap-x-12 gap-y-6">
                    <TrustItem icon={<ShieldCheck size={20} />} text="Certified Pre-Owned" />
                    <TrustItem icon={<ShieldCheck size={20} />} text="Certified Pre-Owned" />
                    <TrustItem icon={<Calendar size={20} />} text="Easy Financing" />
                    <TrustItem icon={<Settings size={20} />} text="Service & Support" />
                </div>
            </section>

            {/* 4. Footer */}
            <footer className="bg-black border-t border-gray-800 px-12 py-16">
                <div className="flex flex-col md:flex-row justify-between items-end">
                    <div>
                        <h3 className="text-xl font-bold mb-6">NEED TO CONTACT US?</h3>
                        <div className="text-sm text-gray-400 space-y-1">
                            <p className="font-bold text-white">Teeyoung Autos</p>
                            <p>Location: Akure, Ondo state</p>
                            <p>info@Teeyoungautos</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center md:items-end gap-6 mt-8 md:mt-0">
                        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-10 rounded uppercase text-sm">
                            Contact Us
                        </button>
                        <div className="flex gap-4">
                            <Facebook className="cursor-pointer hover:text-red-500" />
                            <Instagram className="cursor-pointer hover:text-red-500" />
                            <Twitter className="cursor-pointer hover:text-red-500" />
                        </div>
                        <span>Site Developed by haywhy</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

// Sub-components for cleaner code
const CarCard = ({ name, price, img }) => (
    <div className="bg-[#1a1a1a] p-4 rounded-lg">
        <img src={img} alt={name} className="w-full h-40 object-cover rounded mb-4" />
        <div className="flex justify-between items-center mb-4">
            <div>
                <h4 className="font-bold uppercase text-sm">{name}</h4>
                <p className="text-red-500 font-bold">{price}</p>
            </div>
            <span className="text-[10px] text-gray-500 uppercase">Apex EV</span>
        </div>
        <button className="w-full bg-red-600 py-2 text-xs font-bold uppercase hover:bg-red-700 transition">Order now</button>
    </div>
);

const TrustItem = ({ icon, text }) => (
    <div className="flex items-center gap-3 text-xs font-bold uppercase">
        <div className="text-red-600">{icon}</div>
        <span>{text}</span>
    </div>
);

export default AutoDriveLanding;