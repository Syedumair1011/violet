"use client"

import React, { useEffect } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import Link from "next/link";
import 'magnific-popup/dist/magnific-popup.css';
import $ from 'jquery'; // Ensure jQuery is imported


export default function ImageGallery() {

    useEffect(() => {
        // Initialize Magnific Popup on your gallery
        $('.grid-images-item-wrap').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
        $('.popup-youtube').magnificPopup({
            type: 'iframe',
        });
        $('#browse-gallery-link').on('click', function () {
            $('.grid-images-item-wrap').magnificPopup('open');
        });
        $('#propertyCarousel-2').carousel();


    }, []);

    return (
        <div className="container" id="gallery" >
            <div className="position-relative">
                <div className="row">
                    <div className="col-md-10 offset-md-1">
                        {/* Start Section Header Title */}
                        <div className="section-header text-center mb-5" data-aos="fade-down">
                            {/* Start Subtitle */}
                            <div className="bg-soft-primary d-inline-block fw-medium mb-3 rounded-pill section-header__subtitle text-capitalize text-warning">
                                Project Gallery
                            </div>
                            {/* /. End Subtitle */}
                            {/* Start Section Header title */}
                            <h2 className="h1 fw-semibold mb-3 section-header__title text-capitalize">See our new <span className="underline position-relative text-warning">project Gallery</span> Violet by DAMAC</h2>
                            {/* /.End Section Header Title */}
                            {/* Start Section Header Sub Title */}
                            <div className="sub-title fs-16">
                                It is a long established fact that a reader will be distracted by
                                the
                                <br className="d-none d-lg-block" /> readable content of a page
                                when looking at its layout.
                            </div>
                            {/* /.End Section Header Sub Title */}
                        </div>
                        {/*/. End Section Header */}
                    </div>
                </div>
                {/* Start Header Masonry */}
                <div className="header-masonry position-relative">
                    <div id="gallery-1" className="header-masonry-grid zoom-gallery">
                        <div id="propertyCarousel-2" className="column-start carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <a href="assets/img/properties/1718615482178-damac-natura-4.jpg" className="grid-images-item-wrap overflow-hidden position-relative rounded-4 h-100 w-100 d-block">
                                        <img src="assets/img/properties/1718615482178-damac-natura-4.jpg" className="d-block w-100" alt="Property Image" />
                                    </a>
                                </div>
                                <div className="carousel-item" >
                                    <a href="assets/img/properties/1718615482227-damac-natura.jpg" className="grid-images-item-wrap overflow-hidden position-relative rounded-4 h-100 w-100 d-block">
                                        <img src="assets/img/properties/1718615482227-damac-natura.jpg" className="d-block w-100" alt="Property Image" />
                                    </a>
                                </div>
                                <div className="carousel-item" >
                                    <a href="assets/img/properties/1718615482196-damac-natura-2.jpg" className="grid-images-item-wrap overflow-hidden position-relative rounded-4 h-100 w-100 d-block">
                                        <img src="assets/img/properties/1718615482196-damac-natura-2.jpg" className="d-block w-100" alt="Property Image" />
                                    </a>
                                </div>
                                <div className="carousel-item" >
                                    <a href="assets/img/properties/1718615482211-damac-natura-5.jpg" className="grid-images-item-wrap overflow-hidden position-relative rounded-4 h-100 w-100 d-block">
                                        <img src="assets/img/properties/1718615482211-damac-natura-5.jpg" className="d-block w-100" alt="Property Image" />
                                    </a>
                                </div>
                            </div>
                            <div className="bg-warning card-property-badge d-inline-block end-1 fs-13 fw-semibold position-absolute property-tags px-2 py-1 rounded-3 text-black   top-1">
                                Townhouses
                            </div>
                            <div className="bg-warning card-property-badge d-inline-block start-1 fs-13 fw-semibold position-absolute property-tags px-2 py-1 rounded-3 text-black top-1">
                                OFF Plan
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#propertyCarousel-2" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#propertyCarousel-2" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div className="column-start-end">
                            <a
                                href="assets/img/properties/1718615482211-damac-natura-5.jpg"
                                className="grid-images-item-wrap overflow-hidden position-relative rounded-4 w-100 box-ratio-2-3 d-block"
                            >
                                {/* Masonry Image */}
                                <img
                                    src="assets/img/properties/1718615482211-damac-natura-5.jpg"
                                    alt=""
                                    className="bottom-0 h-100 object-fit-cover position-absolute start-0 top-0 w-100"
                                />
                            </a>
                            <Link
                               data-bs-toggle="modal" data-bs-target="#cartEmpty" href="/" 
                                className=" overflow-hidden position-relative rounded-4 w-100 box-ratio-2-3 d-block"
                                style={{ display: 'block', position: 'relative' }}
                            >
                                {/* Masonry Image */}
                                <img
                                    src="assets/img/properties/1718615482211-damac-natura-5.jpg"
                                    alt=""
                                    className="bottom-0 h-100 object-fit-cover position-absolute start-0 top-0 w-100"
                                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                                {/* Caption Layer */}
                                <div
                                    className="caption-layer blur position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                                    style={{
                                        background: 'rgba(0, 0, 0, 0.5)',
                                        color: 'white',
                                        backdropFilter: 'blur(10px)',
                                        WebkitBackdropFilter: 'blur(10px)', // For Safari support
                                    }}
                                >

                                    <i className="fa-solid fa-image me-2" />  More
                                </div>
                            </Link>

                        </div>

                    </div>
                </div>
                {/* /. End Header Masonry */}
                <div className="header-share align-items-center bg-dark d-flex gap-2 flex-wrap g-3 header-btn-group p-3 p-lg-4 mt-3 mt-md-0">
                    <button type="button" className="btn btn-sm btn-primary">
                        <i className="fa-solid fa-percent me-2" />
                        60/40 Payment Plan
                    </button>
                    <Link href="#" id="browse-gallery-link" className="btn btn-sm btn-primary btn-gallery">
                        <i className="fa-solid fa-credit-card me-2" />
                        20% Downpayment

                    </Link>
                    {/* End Product Images Slider */}
                    <div className="product-video-btn">
                        <a
                            className="popup-youtube d-flex align-items-center justify-content-center "
                            href="http://www.youtube.com/watch?v=0O2aH4XLbto"
                        >
                            <div className="btn-video  text-white d-flex align-items-center justify-content-center rounded-pill me-2">

                                <i className="fa-solid fa-calendar-days" />
                            </div>
                            <span className="text-white fw-medium"> 2026 Handover</span>
                        </a>
                    </div>
                    {/* /.End of product video button */}
                </div>

            </div>
            <div className='container'>
                <div className="position-relative">
                    <div className="row">
                    <h4 className="fw-semibold mb-4 text-capitalize">Floor <span className="underline position-relative text-warning">Plans</span></h4>

                        <div className="col-md-10 offset-md-1">
                            <div className="mb-5 border-bottom pb-5">
                                {/* Start Title */}
                                {/* /.End Title */}
                                {/* Start Image */}
                                <div id="imageCarousel" className="carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className={`carousel-item active`}>
                                            <img
                                                src={`assets/img/fp-natura.jpg`}
                                                className="d-block w-100"
                                                alt={`Carousel Image`}
                                            />
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#imageCarousel" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#imageCarousel" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                                {/* /.End Image */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
