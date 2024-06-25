"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
const links = [
    { href: '/home-2', text: 'Buy' },
    { href: '/home-2', text: 'Home 1' },
    { href: '/', text: 'Home 2' },
    { href: '/properties-list', text: 'Properties List' },
    { href: '/properties-grid', text: 'Properties Grid' },
    { href: '/propertity-details-1', text: 'Property Details 1' },
    { href: '/property-details-2', text: 'Property Details 2' },
    { href: '/about', text: 'About Us' },
    { href: '/agent-list', text: 'Agents List' },
    { href: '/agent-grid', text: 'Agents Grid' },
    { href: '/agent-details', text: 'Agent Details' },
    { href: '/post-property', text: 'Post Property' },
    { href: '/locations', text: 'Locations' },
    { href: '/contact', text: 'Contact Us' },
    { href: '/blog-1', text: 'Blog 1' },
    { href: '/blog-2', text: 'Blog 2' },
    { href: '/blog-details', text: 'Blog Details' },
    { href: '/signin', text: 'Sign In' },
    { href: '/signup', text: 'Sign Up' },
    { href: '/forgot-password', text: 'Forgot Password' },
    { href: '/two-factor-auth', text: 'Two factor authentication' },
    { href: '/terms-conditions', text: 'Terms & Conditions' },
    { href: '/not_found', text: '404 Page' },
    { href: '/505', text: '505 Page' },
    { href: '/style-guide', text: 'Style Guide' },
];

export default function Header() {
    const [hasLogo, setHasLogo] = useState(false);
    const path = usePathname()
    useEffect(() => {
        const handleScroll = () => {
            const scroll = window.scrollY;
            if (scroll >= 81) {
                setHasLogo(true);
            } else {
                setHasLogo(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            {/* Start Topbar */}
            <div className="topbar d-none d-lg-block topbar-bg text-white" style={{ backgroundColor: "#212529" }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4 col-lg-3 col-xl-4">
                            <Link href="/" className="headerLogo"></Link>
                            <img src="assets/img/logo-owndxb.png" alt="owndxb.ae" height="40" />
                        </div>
                        <div className="col-md-8 col-lg-9 col-xl-8 d-none d-md-block">
                            <div className="d-flex justify-content-end">
                                <div className="d-flex align-items-center help-info">
                                    <div className="flex-shrink-0 icon">
                                        <i className="fa-building fa-solid fs-30 text-white opacity-75"></i>
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <h6 className="fs-15 fw-semibold help-info__title mb-0 text-white">Violet by DAMAC</h6>
                                        <p className="sub-text mb-0 fs-14">DAMAC Properties - <span className="fw-semibold text-warning">DUBAI</span></p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center help-info ms-4">
                                    <div className="flex-shrink-0 icon">
                                        <i className="fa-solid fa-street-view fs-30 text-white opacity-75"></i>
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <h6 className="fs-15 fw-semibold help-info__title mb-0 text-white">DAMAC Hills 2 </h6>
                                        <p className="sub-text mb-0 fs-14">Dubai, United Arab Emirates</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center help-info ms-4">
                                    <div className="flex-shrink-0 icon">
                                        <i className="fa-solid fa-mobile-button fs-30 text-white opacity-75"></i>
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <h6 className="fs-15 fw-semibold help-info__title mb-0 text-white">+ 971 55 774 6715</h6>
                                        <p className="sub-text mb-0 fs-14">Contact Us For Help</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /.End Topbar */}
            {/* Start Navbar */}
            <div className={hasLogo ? 'has-logo navbar-wrap sticky-top' : 'no-logo navbar-wrap sticky-top'}>
                <div className="container-lg nav-container position-relative">
                    <nav className="custom-navbar navbar navbar-expand-lg">
                        {/* Start Navbar Brand */}
                        <Link className="border-end navbar-brand pe-3 pe-sm-4 py-0" href="/">
                            <img className="logo-dark" src="assets/img/logo.png" alt="" />
                            <img className="logo-white" src="assets/img/logo-white.png" alt="" />
                        </Link>
                        {/* End Navbar Brand */}
                        {/* Start Navbar Collapse */}
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            {/* Start Navbar Collapse Header */}
                            <div className="align-items-center border-bottom d-flex d-lg-none justify-content-between mb-3 navbar-collapse__header pb-3">
                                {/* Start Brand Logo For Mobile */}
                                <div className="collapse-brand flex-shrink-0">
                                    <Link href="/"><img src="assets/img/logo.png" alt="" /></Link>
                                </div>
                                {/* End Brand Logo For Mobile */}
                                {/* Start Collapse Close Button */}
                                <div className="flex-grow-1 ms-3 text-end">
                                    <button type="button" className="bg-transparent border-0 collapse-close p-0 position-relative" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span></span> <span></span>
                                    </button>
                                </div>
                                {/* End Collapse Close Button */}
                            </div>
                            {/* End Navbar Collapse Header */}
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">

                                    <Link className="nav-link" href="/" role="button">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item"><Link className="nav-link" href="#about-project" >About</Link></li>
                                <li className="nav-item"><Link className="nav-link" href="#amenities">Amenities</Link></li>
                                <li className="nav-item"><Link className="nav-link" href="#gallery">Gallery</Link></li>
                                <li className="nav-item"><Link className="nav-link" href="#location">Location</Link></li>
                                <li className="nav-item"><Link className="nav-link" href="#contact">Contact</Link></li>
                            </ul>
                        </div>
                        {/*  /. End Navbar Collapse */}
                        <div className="d-flex gap-1 ms-lg-5">
                            {/* Start Cart Button */}
                            <Link href="https://api.whatsapp.com/send?phone=971557746715" className="align-items-center btn d-none cart-button d-xl-flex ms-2 ms-lg-0" target="_blank">
                                <span className="align-items-center cart-quantity d-flex fw-bold justify-content-center ms-2 rounded-circle"><i className="fab fa-whatsapp"></i></span>
                                <span className="ms-2">Whatsapp</span>
                            </Link>
                            {/* For Mobile */}                            {/*  /. End Cart Button */}
                            {/* Start Login & Signup Button */}
                            <Link data-bs-toggle="modal" data-bs-target="#cartEmpty" href="/" className="btn btn-primary btn-login hstack gap-2">
                                <i className="fa-solid fa-arrow-right-to-bracket"></i>
                                <div className="vr d-none d-sm-inline-block"></div>
                                <span className="d-none d-sm-inline-block">Contact Us</span>
                            </Link>
                            {/* /. End Login & Signup Button */}
                            {/*  Start Navbar Toggler Buton */}
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            {/*  /. End Navbar Toggler Buton */}
                        </div>
                    </nav>
                </div>
                {/* /.End of navbar */}
            </div>
            {/* /.End of navbar */}
            {/* Start Cart Empty Modal */}
            
            {/* /.End Cart Empty Modal */}
        </>
    );
}
