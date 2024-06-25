import Link from "next/link";
import ScrollTop from "./scroll-top";

export default function FooterWhite() {
    return (
        <>
            {/* Start Footer */}
            <ScrollTop/>
            <footer className="main-footer background-image" data-image-src="assets/img/wall-sketch.png">
                <div className="container pt-4">
                    <hr className="mb-0 mt-4" />
                    <div className="py-4">
                        {/* Start Sub Footer Nav */}
                        <ul className="list-unstyled list-separator mb-2 footer-nav">
                            <li className="list-inline-item"><Link href="#">Privacy</Link></li>
                            <li className="list-inline-item"><Link href="terms-conditions">Terms &amp; Conditions</Link></li>
                        </ul>
                        {/*  /. End Sub Footer Nav */}
                        <div className="align-items-center row mb-2">
                            {/* Start Footer Logo */}
                            <div className="col-sm-auto footer-logo mb-3 mb-sm-0">
                                <img className="footer-logo__dark" src="assets/img/logo.png" alt="" />
                            </div>
                            {/* /.End Footer Logo  */}
                            {/* Start Copy Rights Text */}
                            <div className="col-sm-auto copy">© 2023 owndxb.ae - All Rights Reserved</div>
                            {/* /.End Copy Rights Text */}
                        </div>
                    </div>
                </div>
            </footer>
            {/* /.End Footer */}
        </>
    );
}
