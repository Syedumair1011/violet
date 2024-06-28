"use client"

import React, { useState, useEffect } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import Link from "next/link";
import 'magnific-popup/dist/magnific-popup.css';
import $ from 'jquery'; // Ensure jQuery is imported
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Swal from 'sweetalert2';


export default function FloorPlans() {
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
        <div className="container mt-5" id="floor-plan" >
            <div className='container'>
                <div className="position-relative">
                    <div className="row">
                        <div className="col-md-10 offset-md-1">
                            {/* Start Section Header Title */}
                            <div className="section-header text-center mb-5" data-aos="fade-down">
                                {/* Start Subtitle */}
                                <div className="bg-soft-primary d-inline-block fw-medium mb-3 rounded-pill section-header__subtitle text-capitalize text-warning">
                                    Floor Plans
                                </div>
                                {/* /. End Subtitle */}
                                {/* Start Section Header title */}
                                <h2 className="h1 fw-semibold mb-3 section-header__title text-capitalize">See <span className="underline position-relative text-warning">Floor Plans</span> Violet by DAMAC</h2>
                                {/* /.End Section Header Title */}
                                {/* Start Section Header Sub Title */}
                                <div className="sub-title fs-16">
                                    Explore our detailed floor plans to envision your ideal living space,
                                    <br className="d-none d-lg-block" /> tailored to meet your every need.

                                </div>
                                {/* /.End Section Header Sub Title */}
                            </div>
                            {/*/. End Section Header */}
                        </div>
                    </div>
                    <div className="row">
                        <h4 className="fw-semibold mb-4 text-capitalize">Floor <span className="underline position-relative text-warning">Plans</span></h4>

                        <div className="col-md-7">
                            <div className="mb-5 border-bottom pb-5">
                                {/* Start Title */}
                                {/* /.End Title */}
                                {/* Start Image */}
                                <div id="imageCarousel" className="carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img
                                                src="assets/img/fp-1.webp"
                                                className="d-block w-100"
                                                alt="Carousel Image"
                                            />
                                        </div>
                                        <div className="carousel-item">
                                            <img
                                                src="assets/img/fp-2.webp"
                                                className="d-block w-100"
                                                alt="Carousel Image"
                                            />
                                        </div>
                                        <div className="carousel-item">
                                            <img
                                                src="assets/img/fp-3.webp"
                                                className="d-block w-100"
                                                alt="Carousel Image"
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
                        <div className="col-md-5">
                            <h3 className="modal-title fs-5" id="fademodalLabel">
                                <b>Want to know more about Floor Plans?</b>
                                <p>Send an Inquiry</p>
                            </h3>
                            <br />

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
    );
}
