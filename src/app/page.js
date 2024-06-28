"use client"
import Header from "@/components/Header";
import FooterWhite from "@/components/footer-white";
import AboutVideoContainer from "@/components/about-video-container";
import ImageGallery from "@/components/image-gallery";
import DownloadButton from "@/components/Download";
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import React, { useState } from 'react';
import { useEffect, useRef } from 'react';
import Swal from 'sweetalert2';
import Link from "next/link";
import WidgetScript from "@/components/Whatsapp";
import FloorPlans from "@/components/floor-plan";

export default function HomeTwo() {

  const [showFadeModal, setShowFadeModal] = useState(false);
    const fadeModalRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowFadeModal(true);
        }, 10000); // Show modal after 10 seconds

        return () => clearTimeout(timer); // Cleanup the timer if the component unmounts

    }, []);

    useEffect(() => {
        // Function to show the fade modal using useRef
        const showFadeModalFunction = () => {
            if (fadeModalRef.current && typeof window.bootstrap !== 'undefined') {
                const bootstrapFadeModal = new window.bootstrap.Modal(fadeModalRef.current);
                bootstrapFadeModal.show();
            }
        };

        if (showFadeModal) {
            showFadeModalFunction();
        }
    }, [showFadeModal]);


  const fileName = 'Brochure_Violet.pdf';
  const fileUrl = '/assets/pdf/Brochure_Violet.pdf';

  const [phoneNumber, setPhoneNumber] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();


    // Create FormData object from the form element
    const formData = new FormData(event.target);

    try {
      // Show spinner while sending email
      Swal.fire({
        title: 'Sending...',
        text: 'Please wait while we send your message.',
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      // Send POST request to your API endpoint
      const response = await fetch('/api/sendEmails', {
        method: 'POST',
        body: formData,
      });

      // Check if response is not okay (HTTP status code not in the range 200-299)
      if (!response.ok) {
        console.log("Request failed:", response);
        throw new Error(`Request failed with status: ${response.status}`);
      }

      // Parse JSON response data
      const responseData = await response.json();
      console.log(responseData.message);

      // Show success message to the user
      Swal.fire({
        icon: 'success',
        title: 'Message Sent',
        text: 'Your message was successfully sent!',
      });

    } catch (error) {
      // Handle any errors that occur during fetch or processing
      console.error('Error submitting form:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'There was an error sending your message. Please try again.',
      });
    }
  }

  return (
    <>
      <Header />
      {/* Start Hero Header Two */}
      <div className="align-items-center d-flex hero-header hero-header__two overflow-hidden position-relative">
        <img src="assets/img/png-img/section-bg.webp" alt="" className="h-100 object-fit-cover position-absolute w-100 top-0" />
        {/* Start Oblique */}
        <div className="d-md-block d-none h-100 oblique overflow-hidden position-absolute top-0 custom-carousel-container">
          <div id="propertyCarousel" className="carousel slide h-100" data-bs-ride="carousel">
            <div className="carousel-inner h-100">
              <div className="carousel-item active h-100">
                <img
                  src="/assets/img/header/01.webp"
                  alt="Property 1"
                  className="h-100 object-fit-cover position-absolute w-100 oblique-image top-0"
                />
              </div>
              <div className="carousel-item h-100">
                <img
                  src="/assets/img/header/02.webp"
                  alt="Property 2"
                  className="h-100 object-fit-cover position-absolute w-100 oblique-image top-0"
                />
              </div>
              {/* Add more carousel items here if needed */}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#propertyCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#propertyCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        {/* /.End Oblique */}
        <div className="container position-relative">
          <div className="row">
            <div className="col-lg-10 col-xl-8">
              {/* <p class="title-sm">BEAT TRAFFIC JAMS AND CLINIC QUEUES.</p> */}
              <div className="bg-soft-primary d-inline-block fw-medium mb-3 rounded-pill section-header__subtitle text-capitalize text-warning">
                Violet by DAMAC
              </div>
              <h1 className="hero-header_title fw-bold mb-5 display-5">
                4 bedroom <span className="underline position-relative text-warning">townhouses</span><br className="d-none d-md-block" /> starting from AED 1.82 million*
              </h1>
              <div className="align-items-center g-xl-5 gx-3 gy-3 row mt-3">
                <div className="col-auto">
                  <div className="align-items-center d-flex justify-content-center justify-content-md-start">
                    <div className="work-icon me-3">
                      <i className="fas fa-wallet fs-33 text-warning" />
                    </div>
                    <div className="media-body">
                      <h5 className="fs-18 fw-semibold mb-0 work-title">
                        1.8 Million
                      </h5>
                      <p>Starting Price</p>
                      {/* <div class="work-sub_title text-muted">Lorem Ipsum is simply</div> */}
                    </div>
                  </div>
                </div>
                <div className="col-auto fs-18 p-0 text-warning">
                  <i className="fa-solid fa-chevron-right" />
                </div>
                {/*/.work-col*/}
                <div className="col-auto">
                  <div className="align-items-center d-flex justify-content-center justify-content-md-start">
                    <div className="work-icon me-3">
                      <i className="fas fa-credit-card fs-28 text-warning" />
                    </div>
                    <div className="media-body">
                      <h5 className="fs-18 fw-semibold mb-0 work-title">
                        Easy 60/40
                      </h5>
                      <p>Payment Plan</p>
                      {/* <div class="work-sub_title text-muted">It is a long established fact</div> */}
                    </div>
                  </div>
                </div>
                <div className="col-auto fs-18 p-0 text-warning">
                  <i className="fa-solid fa-chevron-right" />
                </div>
                {/*/.work-col*/}
                <div className="col-auto">
                  <div className="align-items-center d-flex justify-content-center justify-content-md-start">
                    <div className="work-icon me-3">
                      <i className="fas fa-key fs-30 text-warning" />
                    </div>
                    <div className="media-body">
                      <h5 className="fs-18 fw-semibold mb-0 work-title">
                        Q1 2026
                      </h5>
                      <p>Handover</p>
                      {/* <div class="work-sub_title text-muted">There are many variations</div> */}
                    </div>
                  </div>
                </div>
                {/*/.work-col*/}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /.End Hero Header Two */}

      <div className="py-5" id="about-project">
        <div className="container py-4">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              {/* Start Section Header Title */}
              <div className="section-header text-center mb-5" data-aos="fade-down">
                {/* Start Subtitle */}
                <div className="bg-soft-primary d-inline-block fw-medium mb-3 rounded-pill section-header__subtitle text-capitalize text-warning">
                  About Project
                </div>
                {/* /. End Subtitle */}
                {/* Start Section Header title */}
                <h2 className="h1 fw-semibold mb-3 section-header__title text-capitalize">See new <span className="underline position-relative text-warning">project</span> DAMAC Violet</h2>
                {/* /.End Section Header Title */}
                {/* Start Section Header Sub Title */}
                <div className="sub-title fs-16">
                Discover DAMAC Violet luxury townhouses with premium amenities in prime Dubai.
                  <br className="d-none d-lg-block" /> Invest in contemporary living by DAMAC Properties.
                  
                </div>
                {/* /.End Section Header Sub Title */}
              </div>
              {/*/. End Section Header */}
            </div>
            <div className="about-text align-items-center g-4 justify-content-between row">
              <div className="col-md-12 col-lg-7">
                <div className="row g-3 g-sm-4 align-items-center">
                  {/* Image */}
                  <div className="col-6">
                    <div className="position-relative">
                      <div className="" />
                      <img
                        src="assets/img/offplan/01.webp"
                        className="img-fluid rounded-3 position-relative"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="row g-3 g-sm-4">
                      {/* Image */}
                      <div className="col-12">
                        <img
                          src="assets/img/about/D2-violet-2.webp"
                          className="img-fluid rounded-3"
                          alt=""
                        />
                      </div>
                      {/* Image */}
                      <div className="col-12">
                        <img
                          src="assets/img/about/03.webp"
                          className="img-fluid rounded-3"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-5 ps-xxl-5">
                <div className="text-block">
                  <h6 className="fs-14 fw-bold heading-sm l-spacing-1 position-relative text-warning text-uppercase">
                    About
                  </h6>
                  <h2 className="mb-4">Dive into Adventure</h2>
                  <p className="mb-4">
                    Launching soon in the ready community of Damac Hills 2, Violet presents a unique opportunity to own a luxurious townhouse in one of Dubai's most sought-after residential areas. <br /><br />
                    <b>Location:</b>
                    Damac Hills 2 <br /><br />
                    Discover Violet, where the grass is always greener and life offers a breath of fresh air. Secluded yet connected to the city, Violet is an urban oasis for the entire family. Located opposite Water Town in DAMAC Hills 2, this community offers an array of amenities and conveniences.
                  </p>

                  <ul className="list-checked mb-9 mb-md-10 ps-0">
                    <li>
                      <b>Excellent ROI: </b> Invest in a property with promising returns.
                    </li>
                    <li>
                      <b>Spacious Living:</b> Designed for the growing needs of your family.
                    </li>
                    <li>
                      <b>Proximity to Nature:</b> Close to lush landscapes and essential amenities.
                    </li>
                    <li>
                      <b>Exclusive Opportunity:</b> Limited chance to own a corner unit.
                    </li>
                  </ul>
                  <DownloadButton fileName={fileName} fileUrl={fileUrl} />
                  <hr className="mt-5" />
                  {/* <blockquote className="blockquote quote-text">
                    <p className="fst-italic mb-0">
                      “The mind has great influence over the body and maladies often
                      have their origin there.”
                    </p>
                    <cite className="fs-14 fw-semibold quote-attribution text-dark">
                      — John Doe Molicere
                    </cite>
                    <div className="mt-3 signature">
                      <img src="assets/img/signature.png" alt="" />
                    </div>
                  </blockquote> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-5 bg-gradient-primary" id="amenities">
        <div className="container pt-5">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              {/* Start Section Header Title */}
              <div className="section-header text-center mb-5" data-aos="fade-down">
                {/* Start Subtitle */}
                <div className="bg-soft-primary d-inline-block fw-medium mb-3 rounded-pill section-header__subtitle text-capitalize text-warning">
                  Community Amenities
                </div>
                {/* /. End Subtitle */}
                {/* Start Section Header title */}
                <h2 className="h1 fw-semibold mb-3 section-header__title text-capitalize">Community <span className="underline position-relative text-warning">Facilities</span> and Features</h2>
                {/* /.End Section Header Title */}
                {/* Start Section Header Sub Title */}
                <div className="sub-title fs-16">

                Enjoy a vibrant lifestyle with a gym, swimming pool, landscaped gardens, 
                  <br className="d-none d-lg-block" /> children's play areas, and 24/7 security.
                </div>
                {/* /.End Section Header Sub Title */}
              </div>
              {/*/. End Section Header */}
            </div>
          </div>
          <div className="row g-4 justify-content-center">
            <div className="col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2">
              {/* Start Agent Card */}
              <div
                className="agent-card text-center"
                data-aos="fade"
                data-aos-delay={300}
              >
                <div className="avatar rounded-circle p-1 border border-warning">
                  {/* Start Avatar Image */}
                    <img
                      src="assets/img/avatar/01.webp"
                      alt=""
                      className="avatar-img rounded-circle"
                    />
                  {/* /.End Avatar Image */}
                  <div className="align-items-center avatar-badge bg-warning d-flex justify-content-center position-absolute rounded-circle text-white">
                    <i className="fas fa-umbrella-beach" />
                  </div>
                </div>
                <h5 className="mt-3 mb-1">
                 Malibu beach
                </h5>
                {/* <div>Atomic Properties</div> */}
              </div>
              {/* /.End Agent Card */}
            </div>
            <div className="col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2">
              {/* Start Agent Card */}
              <div
                className="agent-card text-center"
                data-aos="fade"
                data-aos-delay={400}
              >
                <div className="avatar rounded-circle p-1 border border-warning">
                  {/* Start Avatar Image */}
                  
                    <img
                      src="assets/img/avatar/02.webp"
                      alt=""
                      className="avatar-img rounded-circle"
                    />
                  
                  {/* /.End Avatar Image */}
                  <div className="align-items-center avatar-badge bg-warning d-flex justify-content-center position-absolute rounded-circle text-white">
                    <i className="fas fa-swimming-pool" />
                  </div>
                </div>
                <h5 className="mt-3 mb-1">
                  Water Park
                </h5>
                {/* <div>Property Advisor</div> */}
              </div>
              {/* /.End Agent Card */}
            </div>
            <div className="col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2">
              {/* Start Agent Card */}
              <div
                className="agent-card text-center"
                data-aos="fade"
                data-aos-delay={500}
              >
                <div className="avatar rounded-circle p-1 border border-warning">
                  {/* Start Avatar Image */}
                 
                    <img
                      src="assets/img/avatar/03.webp"
                      alt=""
                      className="avatar-img rounded-circle"
                    />
                
                  {/* /.End Avatar Image */}
                  <div className="align-items-center avatar-badge bg-warning d-flex justify-content-center position-absolute rounded-circle text-white">
                    <i className="fas fa-dumbbell" />
                  </div>
                </div>
                <h5 className="mt-3 mb-1">
                 Gym areas
                </h5>
                {/* <div>Property Manager</div> */}
              </div>
              {/* /.End Agent Card */}
            </div>
            <div className="col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2">
              {/* Start Agent Card */}
              <div
                className="agent-card text-center"
                data-aos="fade"
                data-aos-delay={600}
              >
                <div className="avatar rounded-circle p-1 border border-warning">
                  {/* Start Avatar Image */}
                 
                    <img
                      src="assets/img/avatar/04.webp"
                      alt=""
                      className="avatar-img rounded-circle"
                    />
                
                  {/* /.End Avatar Image */}
                  <div className="align-items-center avatar-badge bg-warning d-flex justify-content-center position-absolute rounded-circle text-white">
                    <i className="fas fa-tree" />
                  </div>
                </div>
                <h5 className="mt-3 mb-1">
                 Zen garden
                </h5>
                {/* <div>Property Consultan</div> */}
              </div>
              {/* /.End Agent Card */}
            </div>
            <div className="col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2">
              {/* Start Agent Card */}
              <div
                className="agent-card text-center"
                data-aos="fade"
                data-aos-delay={700}
              >
                <div className="avatar rounded-circle p-1 border border-warning">
                  {/* Start Avatar Image */}
                 
                    <img
                      src="assets/img/avatar/05.webp"
                      alt=""
                      className="avatar-img rounded-circle"
                    />
                 
                  {/* /.End Avatar Image */}
                  <div className="align-items-center avatar-badge bg-warning d-flex justify-content-center position-absolute rounded-circle text-white">
                    <i className="fas fa-water" />
                  </div>
                </div>
                <h5 className="mt-3 mb-1">
                Fishing lake
                </h5>
                {/* <div>Property Consultan</div> */}
              </div>
              {/* /.End Agent Card */}
            </div>
            <div className="col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2">
              {/* Start Agent Card */}
              <div
                className="agent-card text-center"
                data-aos="fade"
                data-aos-delay={800}
              >
                <div className="avatar rounded-circle p-1 border border-warning">
                  {/* Start Avatar Image */}
                 
                    <img
                      src="assets/img/avatar/06.webp"
                      alt=""
                      className="avatar-img rounded-circle"
                    />
                  
                  {/* /.End Avatar Image */}
                  <div className="align-items-center avatar-badge bg-warning d-flex justify-content-center position-absolute rounded-circle text-white">
                    <i className="fab fa-crop" />
                  </div>
                </div>
                <h5 className="mt-3 mb-1">
                Petting farm
                </h5>
                {/* <div>Property Consultan</div> */}
              </div>
              {/* /.End Agent Card */}
            </div>
          </div>
          {/* Start Button */}
          <Link data-bs-toggle="modal" data-bs-target="#cartEmpty" href="/" >

            <button
              type="button"
              className="btn btn-primary btn-lg hstack mx-auto mt-5 gap-2"
              data-aos="fade-up"
            >
              <span>Brows More Amenities</span>
              <span className="vr" />
              <i className="fa-arrow-right fa-solid fs-14" />
            </button>
          </Link>
          {/* /.End Button */}
        </div>
      </div>
      <AboutVideoContainer />

      <br />
      <br />
      <br />
      <ImageGallery />
      <FloorPlans />
      <div className="map-content" id="location">
        {/* Start Map */}
        <div className="map border-bottom">
          {/* <div id="map" className="map border-bottom" /> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14465.48946829272!2d55.37432239512199!3d24.987460044917604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f7be843815cc3%3A0xc6188f776c22ebde!2sMadinat%20Hind%204%20-%20Damac%20Hills%20-%20Dubai!5e0!3m2!1sen!2sae!4v1719163614533!5m2!1sen!2sae"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>          {/* /.End Map */}
        </div>
      </div>

      <div className="py-5 team-content">
        <div className="container py-4">
          <div className="align-items-end row g-4 mb-5">
            <div className="col">
              {/* Start Section Header Title */}
              <div className="section-header text-center text-xl-start">
                {/* Start Subtitle */}
                <div className="bg-soft-primary d-inline-block fw-medium mb-3 rounded-pill section-header__subtitle text-capitalize text-warning">
                  Famous Landmarks
                </div>
                {/* /. End Subtitle */}
                {/* Start Section Header title */}
                <h2 className="h1 fw-semibold mb-3 section-header__title text-capitalize">Nearby <span className="underline position-relative text-warning">Landmarks</span></h2>
                {/* /.End Section Header Title */}
                {/* Start Section Header Sub Title */}
                <div className="sub-title fs-16">

                Discover the vibrant neighborhood and nearby landmarks
                  <br className="d-none d-lg-block" /> that make this location ideal for modern living.
                </div>
                {/* /.End Section Header Sub Title */}
              </div>
              {/*/. End Section Header */}
            </div>
            <div className="col-12 col-xl-auto text-center text-xl-end">
              {/* Start Button */}
              <Link data-bs-toggle="modal" data-bs-target="#cartEmpty" href="/" >
                <button
                  type="button"
                  className="btn btn-primary d-inline-flex hstack gap-2"
                >
                  <span>Brows More</span>
                  <span className="vr" />
                  <i className="fa-arrow-right fa-solid fs-14" />
                </button>
              </Link>
              {/* /.End Button */}
            </div>
          </div>
          <div className="row justify-content-center g-3 g-sm-4">
            <div className="col-sm-6 col-md-6 col-lg-3">
              {/* Start Card */}
              <div className="team-member">
                <div className="member-header overflow-hidden position-relative rounded-4">
                  <div className="d-block overflow-hidden position-relative team-avatar-container">
                    <img
                      src="assets/img/avatar/01-lg.webp"
                      className="img-fluid w-100"
                      alt=""
                    />
                  </div>
                  <div className="bg-dark bottom-1 end-1 position-absolute px-3 py-1 rounded-5 team-description-wrap text-white z-1">
                    Global Village
                  </div>
                </div>
                {/* Start Avatar Info */}
                <div className="member-info text-center mt-3">
                  <h4 className="mb-2 member-name text-truncate">
                    Global Village
                  </h4>
                  <div>
                    25-minutes drive.
                  </div>
                </div>
                {/* /.End Avatar Info */}
              </div>
              {/* /.End Card */}
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3">
              {/* Start Card */}
              <div className="team-member">
                <div className="member-header overflow-hidden position-relative rounded-4">
                  <div className="d-block overflow-hidden position-relative team-avatar-container">
                    <img
                      src="assets/img/avatar/02-lg.webp"
                      className="img-fluid w-100"
                      alt=""
                    />
                  </div>

                  <div className="bg-dark bottom-1 end-1 position-absolute px-3 py-1 rounded-5 team-description-wrap text-white z-1">
                    Dubai Outlet Mall
                  </div>
                </div>
                {/* Start Avatar Info */}
                <div className="member-info text-center mt-3">
                  <h4 className="mb-2 member-name text-truncate">
                    Dubai Outlet Mall
                  </h4>
                  <div>
                    25-minutes drive.
                  </div>
                </div>
                {/* /.End Avatar Info */}
              </div>
              {/* /.End Card */}
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3">
              {/* Start Card */}
              <div className="team-member">
                <div className="member-header overflow-hidden position-relative rounded-4">
                  <div className="d-block overflow-hidden position-relative team-avatar-container">
                    <img
                      src="assets/img/avatar/03-lg.webp"
                      className="img-fluid w-100"
                      alt=""
                    />
                  </div>
                  <div className="bg-dark bottom-1 end-1 position-absolute px-3 py-1 rounded-5 team-description-wrap text-white z-1">
                    Al Maktoum International Airport
                  </div>
                </div>
                {/* Start Avatar Info */}
                <div className="member-info text-center mt-3">
                  <h4 className="mb-2 member-name text-truncate">
                    Al Maktoum International Airport
                  </h4>
                  <div>
                    30-minutes drive.
                  </div>
                </div>
                {/* /.End Avatar Info */}
              </div>
              {/* /.End Card */}
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3">
              {/* Start Card */}
              <div className="team-member">
                <div className="member-header overflow-hidden position-relative rounded-4">
                  <div className="d-block overflow-hidden position-relative team-avatar-container">
                    <img
                      src="assets/img/avatar/04-lg.webp"
                      className="img-fluid w-100"
                      alt=""
                    />
                  </div>
                  <div className="bg-dark bottom-1 end-1 position-absolute px-3 py-1 rounded-5 team-description-wrap text-white z-1">
                    Dubai International Airport

                  </div>
                </div>
                {/* Start Avatar Info */}
                <div className="member-info text-center mt-3">
                  <h4 className="mb-2 member-name text-truncate">
                    Dubai International Airport

                  </h4>
                  <div>
                    35-minutes drive.
                  </div>
                </div>
                {/* /.End Avatar Info */}
              </div>
              {/* /.End Card */}
            </div>
          </div>
        </div>
      </div>

      <div className="py-5 bg-grey">
        <div className="container py-4">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              {/* Start Section Header Title */}
              <div
                className="section-header text-center mb-5"
                data-aos="fade-down"
              >
                {/* Start Subtitle */}
                <div className="bg-soft-primary d-inline-block fw-medium mb-3 rounded-pill section-header__subtitle text-capitalize text-warning">
                  F.A.Qs about Violet by DAMAC
                </div>
                {/* /. End Subtitle */}
                {/* Start Section Header title */}
                <h2 className="h1 fw-semibold mb-3 section-header__title text-capitalize">Get The <span className="underline position-relative text-warning">Answers</span> You Need</h2>
                {/* /.End Section Header Title */}
                {/* Start Section Header Sub Title */}
                <div className="sub-title fs-16">

                  It is a long established fact that a reader will be distracted
                  by the
                  <br className="d-none d-lg-block" /> readable content of a page
                  when looking at its layout.
                </div>
                {/* /.End Section Header Sub Title */}
              </div>
              {/*/. End Section Header */}
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item border-0 mb-3 rounded-4">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button fs-5 p-4 text-dark"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      What is the Location of Violet by DAMAC?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body p-4 pt-0">
                      Location is <strong>DAMAC Hills 2</strong>
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-0 mb-3 rounded-4">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button fs-5 p-4 text-dark collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      How much does a Property Cost in Violet?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body p-4 pt-0">
                      Starting Price is <strong>1.83 Million</strong> with Easy <strong>60/40 Payment Plan</strong>. You have to pay 20% Downpayment, 40% during Construction and 40% on Handover.
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-0 mb-3 rounded-4">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button fs-5 p-4 text-dark collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Is Violet Good Investment?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body p-4 pt-0">

                      Living in Violet grants you exclusive access to a variety of facilities in DAMAC Hills 2. These include Malibu Beach, a paintball park, a wave pool, a lazy river, a Zen Garden, a petting zoo, a fishing lake, outdoor cinemas, and more.
                    </div>
                  </div>
                </div>
                <Link data-bs-toggle="modal" data-bs-target="#cartEmpty" href="/" >
                  <button
                    type="button"
                    className="btn btn-primary btn-lg hstack mx-auto mt-5 gap-2"
                    data-aos="fade-up"
                  >
                    <span>Brows More Question?</span>
                    <span className="vr" />
                    <i className="fa-arrow-right fa-solid fs-14" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5 bg-gradient-primary">
        <div className="container pt-5">

          <div className="py-5 bg-gradient-primary">
            <div className="container pt-5 pb-4">
              <div className="row">
                <div className="col-md-10 offset-md-1" data-aos="fade-down">
                  {/* Start Section Header Title */}
                  <div className="section-header text-center mb-5">
                    {/* Start Subtitle */}
                    <div className="bg-soft-primary d-inline-block fw-medium mb-3 rounded-pill section-header__subtitle text-capitalize text-warning">
                      Similar Properties
                    </div>
                    {/* /. End Subtitle */}
                    {/* Start Section Header title */}

                    <h2 className="h1 fw-semibold mb-3 section-header__title text-capitalize">Featured <span className="underline position-relative text-warning">Properties</span></h2>

                    {/* /.End Section Header Title */}
                    {/* Start Section Header Sub Title */}
                    <div className="sub-title fs-16">

                    Explore our curated selection of featured properties, 
                      <br className="d-none d-lg-block" /> each offering unique charm and exceptional value.
                      when looking at its layout.
                    </div>
                    {/* /.End Section Header Sub Title */}
                  </div>
                  {/*/. End Section Header */}
                </div>
              </div>
              <div className="row g-4 justify-content-center">
                <div
                  className="col-sm-6 col-lg-4 col-xl-4 d-flex"
                  data-aos="fade-up"
                  data-aos-delay={500}
                >
                  {/* Start Card Property */}
                  <div className="border-0 card card-property rounded-3 shadow w-100 flex-fill overflow-hidden">
                    {/* Start Card Link */}
                    <Link href="" className="card-link" />
                    {/* /. End Card Link */}
                    {/* Start Property Image */}
                    <div className="property-img card-image-hover overflow-hidden">
                      <img
                        src={`assets/img/properties/04.webp`}
                        alt=""
                        className="img-fluid"
                      />
                      <div className="bg-warning card-property-badge d-inline-block end-1 fs-13 fw-semibold position-absolute property-tags px-2 py-1 rounded-3 text-black   top-1">
                        OFF Plan
                      </div>
                      <div className="bg-warning card-property-badge d-inline-block start-1 fs-13 fw-semibold position-absolute property-tags px-2 py-1 rounded-3 text-black top-1">
                        DAMAC Properties
                      </div>
                    </div>
                    {/* /. End Property Image */}
                    <div className="card-property-content-wrap d-flex flex-column h-100 position-relative p-4">
                      {/* Start Card Property Price */}
                      <div className="align-items-end card-property-price d-flex flex-row mb-1 gap-1">
                        <h4 className="m-0 fw-semibold property-card-title mb-3">
                          Park Greens by DAMAC
                        </h4>
                        {/* <div> /night</div> */}
                      </div>
                      <div className="card-property-facilities gap-2 hstack mt-auto rounded-3 text-center">
                        <div className="">
                          <i className="fa-solid fa-bed text-dark me-1" />
                          <span>5 Bedrooms</span>
                        </div>
                        <span className="vr" />
                        <div className="">
                          <i className="fa-solid fa-bath text-dark me-1" />
                          <span>3 Baths</span>
                        </div>
                        <span className="vr" />
                        <div className="">
                          <i className="fa-solid fa-vector-square text-dark me-1" />
                          <span>3,542 Sqft</span>
                        </div>
                      </div>
                      {/* /. End Card Property Price */}

                      <div className="card-property-description mb-3 pt-3 ">
                        <i className="fa fa-location-dot "></i>  DAMAC Hills 2
                      </div>
                      <div className="align-items-end card-property-price d-flex flex-row mb-1 gap-1 pb-2">
                        <h5 className="m-0 fw-semibold text-warning">AED 2.9 Million</h5>

                        {/* <div> /night</div> */}
                      </div>
                      <div className="col-auto d-flex flex-wrap gap-1 justify-content-left position-relative z-1">

                        <button
                          type="button"
                          className="border-0 btn btn-outline-default btn-sm fw-medium shadow-sm"
                        >
                          <i className="fa fa-phone fs-14 me-1" />
                          Call
                        </button>
                        <Link href="mailto:nadeem@axproperty.com" passHref >
                          <button
                            type="button"
                            className="border-0 btn btn-outline-default btn-sm fw-medium shadow-sm"
                          >
                            <i className="fa fa-user-tie fs-14 fs-e me-1" />
                            Email
                          </button>
                        </Link>
                        <Link href="https://wa.me/971585791102" passHref target="_blank">
                          <button
                            type="button"
                            className="border-0 btn btn-outline-default btn-sm fw-medium shadow-sm"
                          >
                            <i className="fab fa-whatsapp fs-14 me-1" />
                            WhatsApp
                          </button>
                        </Link>

                      </div>
                      {/* Start Card Property Facilities */}

                      {/* /. End Card Property Facilities */}
                    </div>
                  </div>
                  {/* /. End Card Property */}
                </div>
                <div
                  className="col-sm-6 col-lg-4 col-xl-4 d-flex"
                  data-aos="fade-up"
                  data-aos-delay={500}
                >
                  {/* Start Card Property */}
                  <div className="border-0 card card-property rounded-3 shadow w-100 flex-fill overflow-hidden">
                    {/* Start Card Link */}
                    <Link href="" className="card-link" />
                    {/* /. End Card Link */}
                    {/* Start Property Image */}
                    <div className="property-img card-image-hover overflow-hidden">
                      <img
                        src={`assets/img/properties/verona.webp`}
                        alt=""
                        className="img-fluid"
                      />
                      <div className="bg-warning card-property-badge d-inline-block end-1 fs-13 fw-semibold position-absolute property-tags px-2 py-1 rounded-3 text-black   top-1">
                        OFF Plan
                      </div>
                      <div className="bg-warning card-property-badge d-inline-block start-1 fs-13 fw-semibold position-absolute property-tags px-2 py-1 rounded-3 text-black top-1">
                        DAMAC Properties
                      </div>
                    </div>
                    {/* /. End Property Image */}
                    <div className="card-property-content-wrap d-flex flex-column h-100 position-relative p-4">
                      {/* Start Card Property Price */}
                      <div className="align-items-end card-property-price d-flex flex-row mb-1 gap-1">
                        <h4 className="m-0 fw-semibold property-card-title mb-3">
                          Verona Damac Hills 2
                        </h4>
                        {/* <div> /night</div> */}
                      </div>
                      <div className="card-property-facilities gap-2 hstack mt-auto rounded-3 text-center">
                        <div className="">
                          <i className="fa-solid fa-bed text-dark me-1" />
                          <span>5 Bedrooms</span>
                        </div>
                        <span className="vr" />
                        <div className="">
                          <i className="fa-solid fa-bath text-dark me-1" />
                          <span>3 Baths</span>
                        </div>
                        <span className="vr" />
                        <div className="">
                          <i className="fa-solid fa-vector-square text-dark me-1" />
                          <span>Area</span>
                        </div>
                      </div>
                      {/* /. End Card Property Price */}

                      <div className="card-property-description mb-3 pt-3 ">
                        <i className="fa fa-location-dot "></i>  Damac Hills 2
                      </div>
                      <div className="align-items-end card-property-price d-flex flex-row mb-1 gap-1 pb-2">
                        <h5 className="m-0 fw-semibold text-warning">AED 1.83 Million</h5>

                        {/* <div> /night</div> */}
                      </div>
                      <div className="col-auto d-flex flex-wrap gap-1 justify-content-left position-relative z-1">

                        <button
                          type="button"
                          className="border-0 btn btn-outline-default btn-sm fw-medium shadow-sm"
                        >
                          <i className="fa fa-phone fs-14 me-1" />
                          Call
                        </button>
                        <Link href="mailto:nadeem@axproperty.com" passHref >
                          <button
                            type="button"
                            className="border-0 btn btn-outline-default btn-sm fw-medium shadow-sm"
                          >
                            <i className="fa fa-user-tie fs-14 fs-e me-1" />
                            Email
                          </button>
                        </Link>
                        <Link href="https://wa.me/971585791102" passHref target="_blank">
                          <button
                            type="button"
                            className="border-0 btn btn-outline-default btn-sm fw-medium shadow-sm"
                          >
                            <i className="fab fa-whatsapp fs-14 me-1" />
                            WhatsApp
                          </button>
                        </Link>

                      </div>
                      {/* Start Card Property Facilities */}

                      {/* /. End Card Property Facilities */}
                    </div>
                  </div>
                  {/* /. End Card Property */}
                </div>
                <div
                  className="col-sm-6 col-lg-4 col-xl-4 d-flex"
                  data-aos="fade-up"
                  data-aos-delay={500}
                >
                  {/* Start Card Property */}
                  <div className="border-0 card card-property rounded-3 shadow w-100 flex-fill overflow-hidden">
                    {/* Start Card Link */}
                    <Link href="" className="card-link" />
                    {/* /. End Card Link */}
                    {/* Start Property Image */}
                    <div className="property-img card-image-hover overflow-hidden">
                      <img
                        src={`assets/img/properties/1718615482227-damac-natura.webp`}
                        alt=""
                        className="img-fluid"
                      />
                      <div className="bg-warning card-property-badge d-inline-block end-1 fs-13 fw-semibold position-absolute property-tags px-2 py-1 rounded-3 text-black   top-1">
                        OFF Plan
                      </div>
                      <div className="bg-warning card-property-badge d-inline-block start-1 fs-13 fw-semibold position-absolute property-tags px-2 py-1 rounded-3 text-black top-1">
                        DAMAC Properties
                      </div>
                    </div>
                    {/* /. End Property Image */}
                    <div className="card-property-content-wrap d-flex flex-column h-100 position-relative p-4">
                      {/* Start Card Property Price */}
                      <div className="align-items-end card-property-price d-flex flex-row mb-1 gap-1">
                        <h4 className="m-0 fw-semibold property-card-title mb-3">
                          Natura by DAMAC
                        </h4>
                        {/* <div> /night</div> */}
                      </div>
                      <div className="card-property-facilities gap-2 hstack mt-auto rounded-3 text-center">
                        <div className="">
                          <i className="fa-solid fa-bed text-dark me-1" />
                          <span>4 Bedrooms</span>
                        </div>
                        <span className="vr" />
                        <div className="">
                          <i className="fa-solid fa-bath text-dark me-1" />
                          <span>3 Baths</span>
                        </div>
                        <span className="vr" />
                        <div className="">
                          <i className="fa-solid fa-vector-square text-dark me-1" />
                          <span>Area</span>
                        </div>
                      </div>
                      {/* /. End Card Property Price */}

                      <div className="card-property-description mb-3 pt-3 ">
                        <i className="fa fa-location-dot "></i>  Damac Hills 2
                      </div>
                      <div className="align-items-end card-property-price d-flex flex-row mb-1 gap-1 pb-2">
                        <h5 className="m-0 fw-semibold text-warning">AED 1.82 Million</h5>

                        {/* <div> /night</div> */}
                      </div>
                      <div className="col-auto d-flex flex-wrap gap-1 justify-content-left position-relative z-1">

                        <button
                          type="button"
                          className="border-0 btn btn-outline-default btn-sm fw-medium shadow-sm"
                        >
                          <i className="fa fa-phone fs-14 me-1" />
                          Call
                        </button>
                        <Link href="mailto:nadeem@axproperty.com" passHref >
                          <button
                            type="button"
                            className="border-0 btn btn-outline-default btn-sm fw-medium shadow-sm"
                          >
                            <i className="fa fa-user-tie fs-14 fs-e me-1" />
                            Email
                          </button>
                        </Link>
                        <Link href="https://wa.me/971585791102" passHref target="_blank">
                          <button
                            type="button"
                            className="border-0 btn btn-outline-default btn-sm fw-medium shadow-sm"
                          >
                            <i className="fab fa-whatsapp fs-14 me-1" />
                            WhatsApp
                          </button>
                        </Link>

                      </div>
                      {/* Start Card Property Facilities */}

                      {/* /. End Card Property Facilities */}
                    </div>
                  </div>
                  {/* /. End Card Property */}
                </div>
              </div>

              <div className="text-center mt-5" data-aos="fade-up">
                {/* Start Button */}
                <Link data-bs-toggle="modal" data-bs-target="#cartEmpty" href="/" className="btn btn-primary btn-lg d-inline-flex hstack gap-2" >
                  <span>Browse All Properties</span>
                  <span className="vr" />
                  <i className="fa-arrow-right fa-solid fs-14" />
                </Link>
                {/* /.End Button */}
              </div>
            </div>
          </div>
          {/* /.End Button */}
        </div>
      </div>
      <div className="">
        <div className="container py-4">
          <div className="about-text align-items-center g-4 justify-content-between row">
            <div className="col-md-12 col-lg-5 ps-xxl-5">
              <div className="text-block">

                <h2 className="mb-4">Why Off Plan Properties</h2>
                <p className="mb-4">
                  Off-plan properties in Dubai offer several advantages, including potential for capital appreciation before completion, flexible payment plans, and the opportunity to customize interiors. Additionally, buying off-plan allows investors to enter the market at a lower price point compared to ready properties, potentially yielding higher returns on investment upon completion. This dynamic market presents a range of options from reputable developers, often with incentives and discounts, making it an attractive choice for investors seeking growth potential and diversification in their portfolios.
                </p>
                <h6 className="fs-14 fw-bold heading-sm l-spacing-1 position-relative text-warning text-uppercase">
                  Benefits of Off Plan Properties
                </h6>
                <ul className="list-checked mb-9 mb-md-10 ps-0">
                  <li>
                    Potential for Capital Appreciation
                  </li>
                  <li>
                    Flexible Payment Plans
                  </li>
                  <li>
                    Customization Opportunities
                  </li>
                  <li>
                    Access to New Developments
                  </li>
                </ul>
                {/* <hr className="mt-5" /> */}
                {/* <blockquote className="blockquote quote-text">
                  <p className="fst-italic mb-0">
                    “Building trust, forging
                    relationships,
                    shaping the future.”
                  </p>
                  <cite className="fs-14 fw-semibold quote-attribution text-dark">
                    — Nadeem A Mohlane
                  </cite>
                  <div className="mt-3 signature">
                    <img src="assets/img/signature.png" alt="" />
                  </div>
                </blockquote> */}
              </div>
            </div>
            <div className="col-md-12 col-lg-7">
              <div className="row g-3 g-sm-4 align-items-center">
                {/* Image */}
                <div className="col-12">
                  <div className="position-relative">
                    <div className="" />
                    <img
                      src="assets/img/offplan/04.png"
                      className="img-fluid rounded-3 position-relative"
                      alt=""
                    />
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="bg-white py-5 angled lower-start wrapper">
        <div className="container py-4">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              {/* Start Section Header Title */}
              <div className="section-header text-center mb-5" data-aos="fade-down">
                {/* Start Subtitle */}
                <div className="bg-soft-primary d-inline-block fw-medium mb-3 rounded-pill section-header__subtitle text-capitalize text-warning">
                  Best Way
                </div>
                {/* /. End Subtitle */}
                {/* Start Section Header title */}
                <h2 className="h1 fw-semibold mb-3 section-header__title text-capitalize">Find your <span className="underline position-relative text-warning">dream home</span>the best way</h2>
                {/* /.End Section Header Title */}
                {/* Start Section Header Sub Title */}
                <div className="sub-title fs-16">

                Explore our diverse range of properties with expert guidance
                  <br className="d-none d-lg-block" />  to find your dream home confidently and easily.
                </div>
                {/* /.End Section Header Sub Title */}
              </div>
              {/*/. End Section Header */}
            </div>
          </div>
          <div className="row g-4 g-md-5 justify-content-center work-process">
            <div className="col-sm-6 col-lg-4">
              {/* Start Work Process */}
              <div
                className="work-process position-relative p-3 px-xl-5"
                data-aos="fade"
                data-aos-delay={300}
              >
                {/* Start Step Box */}
                <div className="step-box position-relative d-inline-block mb-4 d-flex gap-3">
                  {/* Start Step Number */}
                  <div className="fs-5 text-dark fw-semibold">01/</div>
                  {/* /.End Step Number */}
                  {/* Start Step Icon */}
                  <i className="fs-50 fa-solid fa-map-location text-warning" />
                  {/* /.End Step Icon */}
                </div>
                {/* /.End Step Box */}
                <div className="step-desc">
                  <h4 className="fs-20 fw-semibold">
                    Find your property in the best location.
                  </h4>
                  {/* <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum, amet?
                  </p> */}
                </div>
              </div>
              {/* /.End Work process */}
            </div>
            <div className="col-sm-6 col-lg-4">
              {/* Start Work Process */}
              <div
                className="work-process position-relative p-3 px-xl-5"
                data-aos="fade"
                data-aos-delay={400}
              >
                {/* Start Step Box */}
                <div className="step-box position-relative d-inline-block mb-4 d-flex gap-3">
                  {/* Start Step Number */}
                  <div className="fs-5 text-dark fw-semibold">02/</div>
                  {/* /.End Step Number */}
                  {/* Start Step Icon */}
                  <i className="fs-50 fas fa-calendar-alt text-warning" />
                  {/* /.End Step Icon */}
                </div>
                {/* /.End Step Box */}
                <div className="step-desc">
                  <h4 className="fs-20 fw-semibold">
                    Make a visit appointment with one of our agents.
                  </h4>
                  {/* <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum, amet?
                  </p> */}
                </div>
              </div>
              {/* /.End Work Process */}
            </div>
            <div className="col-sm-6 col-lg-4">
              {/* Start Work Process */}
              <div
                className="work-process position-relative p-3 px-xl-5"
                data-aos="fade"
                data-aos-delay={500}
              >
                {/* Start Step Box */}
                <div className="step-box position-relative d-inline-block mb-4 d-flex gap-3">
                  {/* Start Step Number */}
                  <div className="fs-5 text-dark fw-semibold">03/</div>
                  {/* /.End Step Number */}
                  {/* Start Step Icon */}
                  <i className="fs-50 fas fa-igloo text-warning" />
                  {/* /.End Step Icon */}
                </div>
                {/* /.End Step Box */}
                <div className="step-desc">
                  <h4 className="fs-20 fw-semibold">
                    And get your dream house in a month, or less.
                  </h4>
                  {/* <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum, amet?
                  </p> */}
                </div>
              </div>
              {/* /.End Work Process */}
            </div>
          </div>
        </div>
      </div>
      {/* /. End Articles Section */}
      {/* Start Newslatter */}
      <div className="py-5 position-relative" id="contact">
        <div className="container position-relative py-4 z-1">
          <div className="row justify-content-center">
            <div className="col-md-10">
              {/* Start Section Header Title */}
              <div className="section-header text-center mb-5">
                {/* Start Section Header title */}
                <h2 className="h1 fw-semibold mb-3 section-header__title text-capitalize">Let us hear from you <span className="underline position-relative text-warning">directly!</span></h2>
                {/* /.End Section Header Title */}
                {/* Start Section Header Sub Title */}
                <div className="sub-title fs-16">

                Reach out to us today and let's start your journey 
                  <br className="d-none d-lg-block" />towards your dream property.
                </div>
                {/* /.End Section Header Sub Title */}
              </div>
              {/*/. End Section Header */}
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-10">
              <div className="row align-items-center">
                <div className="col-md-7 pe-xl-5 mb-5 mb-md-0">
                  {/* Start Illustration Image */}
                  <img
                    src="assets/img/header/01.webp"
                    alt=""
                    className="img-fluid"
                  />
                  {/* /.End Illustration Image */}
                </div>
                <div className="col-md-5">
                  <form onSubmit={handleSubmit}>
                    {/* Start Form Group */}
                    <div className="form-group mb-4">
                      <label className="required">Full Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        placeholder="Enter Your Name"
                        required
                        name="name"
                      />
                    </div>
                    {/* /.End Form Group */}
                    {/* Start Form Group */}
                    <div className="form-group mb-4">
                      <label className="required">Your Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="hello@email.com"
                        required
                        name="email"
                      />
                    </div>
                    {/* /.End Form Group */}
                    {/* Start Form Group */}
                    <div className="form-group mb-4">
                      <label className="required">Your Phone</label>
                      <PhoneInput
                        country={'ae'} // Default country
                        value={phoneNumber}
                        onChange={setPhoneNumber}
                        preferredCountries={['ae', 'gb', 'in', 'pk', 'sa', 'qa']} // Preferred countries
                        containerClass="form-control p-0" // Custom container class
                        inputClass="w-100 h-100" // Custom input class
                        className="form-control"
                      />
                      <input
                        type="text"
                        className="form-control"
                        id="phone"
                        name="phone"
                        value={phoneNumber}
                        onChange={() => { }}
                        hidden
                      />
                    </div>
                    {/* /.End Form Group */}
                    {/* Start Form Group */}
                    <div className="form-group mb-4">
                      <label className="required">Your Comments</label>
                      <textarea
                        className="form-control"
                        rows={5}
                        placeholder="Tell us what we can help you with!"
                        defaultValue={""}
                        name="message"
                      />
                    </div>
                    {/* /.End Form Group */}
                    {/* Start Submit Button */}
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg d-inline-flex hstack gap-2"
                    >
                      <span>Send message</span>
                      <span className="vr" />
                      <i className="fa-arrow-right fa-solid fs-14" />
                    </button>
                    {/* /.End Submit Button */}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Start Section Sketch */}
        <div className="bottom-0 end-0 position-absolute section-sketch">
          <img
            src="assets/img/png-img/section-sketch.png"
            className="img-fluid"
            alt=""
          />
        </div>
        {/* /. End Section Sketch */}
      </div>
      {/* /.End Newslatter */}
      <FooterWhite />
      <div className={`modal fade`} id="cartEmpty" tabIndex="-1" aria-labelledby="cartEmptyLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="cartEmptyLabel">
                <b>4-bedroom townhouses starting from AED 1.82 million*</b>
              </h1>
              <div className="d-flex align-items-center">
                <DownloadButton fileName={fileName} fileUrl={fileUrl} />
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-lg-8 d-none d-sm-block">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="position-relative h-100">
                        <img
                          src="assets/img/properties/D2-violet-1.webp"
                          alt=""
                          className="img-fluid h-100 w-100 object-fit-cover"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="position-relative h-100">
                        <img
                          src="assets/img/properties/D2-violet-2.webp"
                          alt=""
                          className="img-fluid h-100 w-100 object-fit-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="position-relative h-100">
                        <img
                          src="assets/img/properties/D2-violet-3.webp"
                          alt=""
                          className="img-fluid h-100 w-100 object-fit-cover"
                        />
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="position-relative h-100">
                        <img
                          src="assets/img/header/01.webp"
                          alt=""
                          className="img-fluid h-100 w-100 object-fit-cover"
                        />
                      </div>

                    </div>
                    <div className="col-lg-4">
                      <div className="position-relative h-100">
                        <img
                          src="assets/img/properties/1718615482211-damac-natura-5.webp"
                          alt=""
                          className="img-fluid h-100 w-100 object-fit-cover"
                        />
                      </div>

                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="position-relative h-100">
                        <img
                          src="assets/img/properties/1718615482227-damac-natura.webp"
                          alt=""
                          className="img-fluid h-100 w-100 object-fit-cover"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="position-relative h-100">
                        <img
                          src="assets/img/properties/02.jpg"
                          alt=""
                          className="img-fluid h-100 w-100 object-fit-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="row justify-content-center">
                    <div className="col-md-12 col-lg-10">
                      <div className="row align-items-center">
                        <div className="col-md-12">
                          {/* Form inside modal */}
                          <h3 className="modal-title fs-5" id="cartEmptyLabel">
                            <b>Ready to Buy a New Home?</b>
                            <p>Send an Inquiry</p>
                          </h3>
                          <br />
                          <form onSubmit={handleSubmit}>
                            {/* Form fields */}
                            <div className="form-group mb-4">
                              <label className="required">Full Name</label>
                              <input
                                type="text"
                                className="form-control"
                                id="firstName"
                                placeholder="Enter Your Name"
                                required
                                name="name"
                              />
                            </div>
                            <div className="form-group mb-4">
                              <label className="required">Your Email</label>
                              <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="hello@email.com"
                                required
                                name="email"
                              />
                            </div>
                            <div className="form-group mb-4">
                              <label className="required">Your Phone</label>
                              <PhoneInput
                                country={'ae'} // Default country
                                value={phoneNumber}
                                onChange={setPhoneNumber}
                                preferredCountries={['ae', 'gb', 'in', 'pk', 'sa', 'qa']} // Preferred countries
                                placeholder="Enter phone number"
                                containerClass="form-control p-0" // Custom container class
                                inputClass="w-100 h-100" // Custom input class
                                name="phone"
                                className="form-control"
                              />
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              id="phone"
                              name="phone"
                              value={phoneNumber}
                              onChange={() => { }}
                              hidden
                            />
                            <div className="form-group mb-4">
                              <label className="required">Your Comments</label>
                              <textarea
                                className="form-control"
                                rows={5}
                                placeholder="Tell us what we can help you with!"
                                defaultValue={""}
                                name="message"
                              />
                            </div>
                            {/* Submit button */}
                            <button
                              type="submit"
                              className="btn btn-primary btn-lg d-inline-flex hstack gap-2"
                            >
                              <span>Send message</span>
                              <span className="vr" />
                              <i className="fa-arrow-right fa-solid fs-14" />
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className={`modal fade ${showFadeModal ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: showFadeModal ? 'block' : 'none' }} ref={fadeModalRef}>
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="fademodalLabel">
                <b>4-bedroom townhouses starting from AED 1.82 million*</b>
              </h1>
              <div className="d-flex align-items-center">
                <DownloadButton fileName={fileName} fileUrl={fileUrl} />
                <button type="button" className="btn-close" onClick={() => setShowFadeModal(false)} />
              </div>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-lg-6 d-none d-sm-block text-center">
                  <div className="row">
                    <div className="col-md-10 offset-md-1">
                      <div className="section-header text-center mb-5" data-aos="fade-down">
                        <div className="bg-soft-primary d-inline-block fw-medium mb-3 rounded-pill section-header__subtitle text-capitalize text-warning">
                          Best Way
                        </div>
                        <h2 className="h3 fw-semibold mb-3 section-header__title text-capitalize">
                          Find your <span className="underline position-relative text-warning">dream home</span> the best way
                        </h2>
                        <div className="sub-title fs-16">
                          Register your interest
                          <br className="d-none d-lg-block" /> Fill the Form and give you consent one of our agent will contact you shortly.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="row justify-content-center">
                    <div className="col-md-12 col-lg-10">
                      <div className="row align-items-center">
                        <div className="col-md-12">
                          {/* Form inside modal */}
                          <h3 className="modal-title fs-5" id="fademodalLabel">
                            <b>Ready to Buy a New Home?</b>
                            <p>Send an Inquiry</p>
                          </h3>
                          <br />
                          <form onSubmit={handleSubmit}>
                            {/* Form fields */}
                            <div className="form-group mb-4">
                              <label className="required">Full Name</label>
                              <input
                                type="text"
                                className="form-control"
                                id="firstName"
                                placeholder="Enter Your Name"
                                required
                                name="name"
                              />
                            </div>
                            <div className="form-group mb-4">
                              <label className="required">Your Email</label>
                              <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="hello@email.com"
                                required
                                name="email"
                              />
                            </div>
                            <div className="form-group mb-4">
                              <label className="required">Your Phone</label>
                              <PhoneInput
                                country={'ae'} // Default country
                                value={phoneNumber}
                                onChange={setPhoneNumber}
                                preferredCountries={['ae', 'gb', 'in', 'pk', 'sa', 'qa']} // Preferred countries
                                placeholder="Enter phone number"
                                containerClass="form-control p-0" // Custom container class
                                inputClass="w-100 h-100" // Custom input class
                                name="phoneNumber"
                                className="form-control"
                              />
                              <input
                                type="text"
                                className="form-control"
                                id="phone"
                                name="phone"
                                value={phoneNumber}
                                onChange={() => { }}
                                hidden
                              />
                            </div>
                            <div className="form-group mb-4">
                              <label className="required">Your Comments</label>
                              <textarea
                                className="form-control"
                                rows={5}
                                placeholder="Tell us what we can help you with!"
                                defaultValue={""}
                                name="message"
                              />
                            </div>
                            {/* Submit button */}
                            <button
                              type="submit"
                              className="btn btn-primary btn-lg d-inline-flex hstack gap-2"
                            >
                              <span>Send message</span>
                              <span className="vr" />
                              <i className="fa-arrow-right fa-solid fs-14" />
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <WidgetScript />
      </div>
    </>
  );
}


