import RetailerPopup from "@/../app/RetailerPopup/RetailerPopup";
import Link from "next/link";
import React, { useState } from "react";

const Header2 = () => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <header
      className="header-area header-area-two d-none d-xl-block"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.4)",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
        width: "100%",
        padding: "6px 0",
      }}
    >
      <div className="header-navigation glass-morphism" style={{
        backgroundColor: "rgba(255, 255, 255, 0.4)",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
        width: "100%",
        padding: "6px 0",
      }}>
        <div className="container-fluid">
          <div className="primary-menu">
            <div className="row align-items-center justify-content-between">
              <div className="col-lg-2 col-5">
                <div className="site-branding">
                  <Link className="brand-logo" href="/">
                    <img
                      src="/assets/images/logo/Shapping-Team-Logo.png"
                      alt="Brand Logo"
                      className="h-5 w-auto"
                      height={44}
                      width={44}
                    />
                  </Link>
                </div>
              </div>
              <div className="col-lg-10 col-7 text-end">
                <div className="nav-menu" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <div className="navbar-close">
                    <i className="ti-close"></i>
                  </div>
                  <nav className="main-menu">
                    <ul>
                      <li className="menu-item">
                        <Link href="/">Home</Link>
                      </li>
                      <li className="menu-item">
                        <Link href="/about">About</Link>
                      </li>
                      <li className="menu-item">
                        <Link href="/services">Services</Link>
                      </li>
                      <li className="menu-item">
                        <Link href="/career">Career</Link>
                      </li>
                      <li className="menu-item">
                        <Link href="/contact">Contact</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <RetailerPopup
                visible={showPopup}
                onClose={() => setShowPopup(false)}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header2;
