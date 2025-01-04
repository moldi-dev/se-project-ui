import React from 'react';
import {Button} from "@/components/ui/button.tsx";
import {Link} from "react-router-dom";

function HeroComponent() {
    return (
        <div className="relative bg-white overflow-hidden mb-5">
            <div className="max-w-7xl mx-auto">
                <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="text-center lg:text-left">
                            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                <span className="block xl:inline">Welcome to</span>{' '}
                                <span className="block text-primary xl:inline">Allora</span>
                            </h1>
                            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                Stay ahead of the curve with the hottest styles of the season!
                                From bold prints to sustainable fabrics, fashion is all about self-expression and individuality this year.
                                Whether you’re looking for chic workwear, casual street style, or elegant evening attire, there’s something for everyone.
                            </p>
                            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                <Link to="/products" className="rounded-md shadow">
                                    <Button
                                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white  md:py-4 md:text-lg md:px-10">
                                        Shop now
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <div className="lg:absolute lg:flex hidden lg:inset-y-0 lg:right-0 lg:w-1/2">
                <img
                    className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                    src="src/assets/clothing-store-image.avif"
                    alt="Allora store showcase"
                />
            </div>
        </div>
    );
}

export default HeroComponent;