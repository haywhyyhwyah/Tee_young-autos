import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ImageLightbox from './components/ImageLightbox'

// Sample list you can edit directly or pass your own via props
export const sampleCars = [
    {
        id: 1,
        name: 'Lexus 350 (Toks)',
        price: 27000000,
        mainImg: 'lexus.jpeg',
        sub1: 'frontlex.jpeg',
        sub2: 'innerlex.jpeg',
        year: 2014,
    },
    
    {
        id: 2,
        name: 'Avalon limited edition',
        price: 21000000,
        mainImg: 'avalon.jpeg',
        sub1: 'Avalonside.jpeg',
        sub2: 'avalon.jpeg',
        year: 2013,
    },

    {
        id: 3,
        name: 'Toyota Camry (Used)',
        price: 20000000,
        mainImg: 'toyota.jpeg',
        sub1: 'back013.jpeg',
        sub2: 'inner013.jpeg',
        year: 2013,
    },

    {
        id: 4,
        name: 'Toyota camry (Toks)',
        price: 13000000,
        mainImg: 'toks.jpeg',
        sub1: 'backtoks.jpeg',
        sub2: 'fronttoks.jpeg',
        year: 2018,
    },

    {
        id: 5,
        name: 'Model 5 LX',
        price: 430000,
        mainImg: 'https://source.unsplash.com/800x600/?car&sig=5',
        sub1: 'https://source.unsplash.com/400x300/?car,interior&sig=105',
        sub2: 'https://source.unsplash.com/400x300/?car,detail&sig=205',
        year: 2014,
        mileage: '120k km',
    },

    {
        id: 6,
        name: 'Model 6 X',
        price: 610000,
        mainImg: 'https://source.unsplash.com/800x600/?car&sig=6',
        sub1: 'https://source.unsplash.com/400x300/?car,interior&sig=106',
        sub2: 'https://source.unsplash.com/400x300/?car,detail&sig=206',
        year: 2019,
        mileage: '34k km',
    },

    {
        id: 7,
        name: 'Model 6 X',
        price: 610000,
        mainImg: 'https://source.unsplash.com/800x600/?car&sig=6',
        sub1: 'https://source.unsplash.com/400x300/?car,interior&sig=106',
        sub2: 'https://source.unsplash.com/400x300/?car,detail&sig=206',
        year: 2019,
        mileage: '34k km',
    },

    {
        id: 8,
        name: 'Model 6 X',
        price: 610000,
        mainImg: 'https://source.unsplash.com/800x600/?car&sig=6',
        sub1: 'https://source.unsplash.com/400x300/?car,interior&sig=106',
        sub2: 'https://source.unsplash.com/400x300/?car,detail&sig=206',
        year: 2019,
        mileage: '34k km',
    },

    {
        id: 9,
        name: 'Model 6 X',
        price: 610000,
        mainImg: 'https://source.unsplash.com/800x600/?car&sig=6',
        sub1: 'https://source.unsplash.com/400x300/?car,interior&sig=106',
        sub2: 'https://source.unsplash.com/400x300/?car,detail&sig=206',
        year: 2019,
        mileage: '34k km',
    },

    {
        id: 10,
        name: 'Model 6 X',
        price: 610000,
        mainImg: 'https://source.unsplash.com/800x600/?car&sig=6',
        sub1: 'https://source.unsplash.com/400x300/?car,interior&sig=106',
        sub2: 'https://source.unsplash.com/400x300/?car,detail&sig=206',
        year: 2019,
        mileage: '34k km',
    },

    {
        id: 11,
        name: 'Model 6 X',
        price: 610000,
        mainImg: 'https://source.unsplash.com/800x600/?car&sig=6',
        sub1: 'https://source.unsplash.com/400x300/?car,interior&sig=106',
        sub2: 'https://source.unsplash.com/400x300/?car,detail&sig=206',
        year: 2019,
        mileage: '34k km',
    },

    {
        id: 12,
        name: 'Model 6 X',
        price: 610000,
        mainImg: 'https://source.unsplash.com/800x600/?car&sig=6',
        sub1: 'https://source.unsplash.com/400x300/?car,interior&sig=106',
        sub2: 'https://source.unsplash.com/400x300/?car,detail&sig=206',
        year: 2019,
        mileage: '34k km',
    },

    {
        id: 13,
        name: 'Model 6 X',
        price: 610000,
        mainImg: 'https://source.unsplash.com/800x600/?car&sig=6',
        sub1: 'https://source.unsplash.com/400x300/?car,interior&sig=106',
        sub2: 'https://source.unsplash.com/400x300/?car,detail&sig=206',
        year: 2019,
        mileage: '34k km',
    },

    {
        id: 14,
        name: 'Model 6 X',
        price: 610000,
        mainImg: 'https://source.unsplash.com/800x600/?car&sig=6',
        sub1: 'https://source.unsplash.com/400x300/?car,interior&sig=106',
        sub2: 'https://source.unsplash.com/400x300/?car,detail&sig=206',
        year: 2019,
        mileage: '34k km',
    },

    {
        id: 15,
        name: 'Model 6 X',
        price: 610000,
        mainImg: 'https://source.unsplash.com/800x600/?car&sig=6',
        sub1: 'https://source.unsplash.com/400x300/?car,interior&sig=106',
        sub2: 'https://source.unsplash.com/400x300/?car,detail&sig=206',
        year: 2019,
        mileage: '34k km',
    },

    {
        id: 16,
        name: 'Model 6 X',
        price: 610000,
        mainImg: 'https://source.unsplash.com/800x600/?car&sig=6',
        sub1: 'https://source.unsplash.com/400x300/?car,interior&sig=106',
        sub2: 'https://source.unsplash.com/400x300/?car,detail&sig=206',
        year: 2019,
        mileage: '34k km',
    },

    {
        id: 17,
        name: 'Model 6 X',
        price: 610000,
        mainImg: 'https://source.unsplash.com/800x600/?car&sig=6',
        sub1: 'https://source.unsplash.com/400x300/?car,interior&sig=106',
        sub2: 'https://source.unsplash.com/400x300/?car,detail&sig=206',
        year: 2019,
        mileage: '34k km',
    },

    {
        id: 18,
        name: 'Model 6 X',
        price: 610000,
        mainImg: 'https://source.unsplash.com/800x600/?car&sig=6',
        sub1: 'https://source.unsplash.com/400x300/?car,interior&sig=106',
        sub2: 'https://source.unsplash.com/400x300/?car,detail&sig=206',
        year: 2019,
        mileage: '34k km',
    },

    {
        id: 19,
        name: 'Model 6 X',
        price: 610000,
        mainImg: 'https://source.unsplash.com/800x600/?car&sig=6',
        sub1: 'https://source.unsplash.com/400x300/?car,interior&sig=106',
        sub2: 'https://source.unsplash.com/400x300/?car,detail&sig=206',
        year: 2019,
        mileage: '34k km',
    },

    {
        id: 20,
        name: 'Model 6 X',
        price: 610000,
        mainImg: 'https://source.unsplash.com/800x600/?car&sig=6',
        sub1: 'https://source.unsplash.com/400x300/?car,interior&sig=106',
        sub2: 'https://source.unsplash.com/400x300/?car,detail&sig=206',
        year: 2019,
        mileage: '34k km',
    },
]

const CarsForSale = ({ cars = sampleCars }) => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxImages, setLightboxImages] = useState([]);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    const openLightbox = (images, idx = 0) => {
        setLightboxImages(images);
        setLightboxIndex(Math.max(0, Math.min(idx, images.length - 1)));
        setLightboxOpen(true);
    };

    const closeLightbox = () => setLightboxOpen(false);
    const prevLightbox = () => setLightboxIndex(i => (i - 1 + lightboxImages.length) % lightboxImages.length);
    const nextLightbox = () => setLightboxIndex(i => (i + 1) % lightboxImages.length);

    useEffect(() => {
        if (!lightboxOpen) return;
        // prevent background scroll when lightbox is open
        const prev = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = prev; };
    }, [lightboxOpen]);

    return (
        <div className="min-h-screen bg-black text-white px-8 py-12 font-sans">
            <header className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold uppercase tracking-wide">Inventory</h1>
                    <p className="text-sm text-gray-400">{cars.length} cars available</p>
                </div>
                <div className="flex items-center gap-4">
                    <Link to="/" className="text-sm text-gray-300 hover:text-white">Home</Link>
                </div>
            </header>

            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {cars.map(car => (
                    <CarCard key={car.id} {...car} onOpen={openLightbox} />
                ))}
            </section>

            {/* <footer className="mt-12 text-center text-gray-400 text-sm">Showing sample inventory for demo purposes.</footer> */}

            {lightboxOpen && (
                <ImageLightbox
                    images={lightboxImages}
                    index={lightboxIndex}
                    onClose={closeLightbox}
                    onPrev={(e) => { e && e.stopPropagation(); prevLightbox(); }}
                    onNext={(e) => { e && e.stopPropagation(); nextLightbox(); }}
                />
            )}
        </div>
    )
}

const CarCard = ({ name, mainImg, sub1, sub2, year, mileage, price, onOpen }) => {
    const images = [mainImg, sub1, sub2].filter(Boolean);
    const sub1Index = images.indexOf(sub1);
    const sub2Index = images.indexOf(sub2);

    return (
        <div className="bg-[#1a1a1a] rounded-lg overflow-hidden shadow-md">
            {/* Images: main (left, large) + two stacked sub images (right) */}
            <div className="grid grid-cols-3 gap-2">
                <img src={mainImg} alt={name} onClick={() => onOpen && onOpen(images, 0)} className="col-span-2 h-40 w-full object-cover cursor-pointer hover:opacity-90 transition" />
                <div className="flex flex-col gap-2">
                    <img src={sub1} alt={`${name} interior`} onClick={() => (sub1Index !== -1) && onOpen && onOpen(images, sub1Index)} className="h-20 w-full object-cover cursor-pointer hover:opacity-90 transition" />
                    <img src={sub2} alt={`${name} detail`} onClick={() => (sub2Index !== -1) && onOpen && onOpen(images, sub2Index)} className="h-20 w-full object-cover cursor-pointer hover:opacity-90 transition" />
                </div>
            </div>

            <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <h3 className="font-bold uppercase text-sm">{name}</h3>
                        <p className="text-xs text-gray-400">{year} • {mileage}</p>
                    </div>
                    <div className="text-right">
                        <p className="text-red-600 font-bold">{price ? `₦${price.toLocaleString()}` : ''}</p>
                    </div>
                </div>

                <div className="flex gap-2">
                    <button className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 text-xs font-bold uppercase rounded">Contact Seller</button>
                    <button className="w-20 bg-transparent border border-gray-700 text-xs rounded text-gray-300">Details</button>
                </div>
            </div>
        </div>
    );
}

export default CarsForSale
