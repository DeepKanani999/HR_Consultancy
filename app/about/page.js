"use client";
import PageBanner from "@/components/PageBanner";
import TestimoinalSlider from "@/components/Slider/TestimonialSlider";
import UserInfoPopup from "@/components/userDetailPopup";
import Layout from "@/layouts/Layout";
import Link from "next/link";
import { useEffect, useState } from "react";

const About = () => {
  const [showBar, setShowBar] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const isMobileDevice = () => {
    // Check user agent
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isMobileUserAgent =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        userAgent
      );

    // Check screen width
    const isMobileScreen = window.innerWidth <= 768;

    // Check if device has touch capability
    const hasTouchScreen =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    return isMobileUserAgent || (isMobileScreen && hasTouchScreen);
  };

  useEffect(() => {
    // Initial check
    setIsMobile(isMobileDevice());

    // Add resize listener
    const handleResize = () => {
      setIsMobile(isMobileDevice());
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setIsClient(true); // Set to true when component mounts on client

    let lastScrollTop = 0;
    const handleScroll = () => {
      const st = window.scrollY || document.documentElement.scrollTop;
      const isScrollingDown = st > lastScrollTop;
      lastScrollTop = st <= 0 ? 0 : st;

      if (isScrollingDown && window.innerWidth >= 768) {
        setShowBar(true);
      } else {
        setShowBar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCall = () => {
    window.location.href = "tel:+917984348404"; // Replace with your number
  };

  const handleLocation = () => {
    window.open("https://g.co/kgs/NVpSRxo", "_blank");
  };
  const handleWhatsApp = () => {
    const phoneNumber = "917984348404"; // Replace with your number
    const defaultMessage = `Hi, I'm interested in your products. Could you please provide more details?`;

    const encodedMessage = encodeURIComponent(defaultMessage);
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  const handleMail = () => {
    window.location.href = "mailto:info@plixon.in"; // Replace with your email
  };

  const handleFacebook = () => {
    window.open("https://facebook.com/yourprofile", "_blank");
  };

  const handleInstagram = () => {
    window.open("https://instagram.com/yourprofile", "_blank");
  };

  const handleLinkedIn = () => {
    window.open("https://linkedin.com/in/yourprofile", "_blank");
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Check this out!",
          text: "Have a look at this amazing website.",
          url: window.location.href,
        });
      } else {
        alert("Sharing is not supported on this browser.");
      }
    } catch (error) {
      console.error("Share failed:", error);
    }
  };

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClosePopup = () => {
    setIsPopupOpen(false); // Close the popup
  };

  const handleButtonClick = () => {
    if (!mounted) return;

    const userInfo = sessionStorage.getItem("userInfo");
    if (isMobile) {
      handleWhatsApp(); // Directly open WhatsApp on mobile
    } else {
      if (!userInfo) {
        setIsPopupOpen(true);
      } else {
        handleWhatsApp();
      }
    }
  };

  return (
    <Layout>
      {mounted && isPopupOpen && !sessionStorage.getItem("userInfo") && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 9999,
            background: "rgba(255, 255, 255, 0.8)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
            padding: "20px",
            width: "90%",
            maxWidth: "400px",
            textAlign: "center",
          }}
        >
          <UserInfoPopup isOpen={isPopupOpen} onClose={handleClosePopup} />
        </div>
      )}
      <PageBanner title={"About us"} />
      {/*====== Start Features Section ======*/}
      <section className="features-area">
        {isClient && (
          <div
            className={`floating-social-bar ${showBar ? "visible" : ""}`}
            style={{
              position: "fixed",
              bottom: 10,
              left: "50%",
              transform: `translate(-50%, ${showBar ? "0%" : "100%"})`,
              width: "80%",
              backgroundColor: "#fff",
              zIndex: 9999,
              justifyContent: "",
              alignItems: "center",
              transition: "transform 0.3s ease-in-out",
              borderRadius: "10px 10px 10px 10px",
              boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            <div
              className="d-none d-md-flex row"
              style={{
                marginBottom: "10px",
                marginTop: "10px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap", // Optional: Makes it responsive
                  width: "95%",
                }}
              >
                {/* Left Section: Main Social Buttons */}
                <div style={{ display: "flex", gap: "12px" }}>
                  <button
                    className="social-main-btn"
                    onClick={handleCall}
                    style={{
                      width: "150px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: 1,
                    }}
                  >
                    <div
                      style={{
                        height: "32px",
                        width: "32px",
                        backgroundColor: "#FFF",
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                        marginRight: 10,
                        borderRadius: "50%",
                      }}
                    >
                      <img
                        src="/assets/images/black-icons/phone_black.png"
                        alt="Call"
                        style={{ height: "20px", width: "20px" }}
                      />
                    </div>
                    Call Us
                  </button>
                  <button
                    className="social-main-btn"
                    onClick={handleLocation}
                    style={{
                      width: "150px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        height: "32px",
                        width: "32px",
                        backgroundColor: "#FFF",
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                        marginRight: 10,
                        borderRadius: "50%",
                      }}
                    >
                      <img
                        src="/assets/images/black-icons/location_black.png"
                        alt="Call"
                        style={{ height: "20px", width: "20px" }}
                      />
                    </div>
                    Location
                  </button>
                  <button
                    className="social-main-btn"
                    onClick={() => {
                      const userInfo = sessionStorage.getItem("userInfo");
                      if (isMobile) {
                        handleWhatsApp(); // Directly open WhatsApp on mobile
                      } else {
                        if (!userInfo) {
                          setIsPopupOpen(true); // Open the popup if session data is not available
                        } else {
                          handleWhatsApp();
                        }
                      }
                    }}
                    style={{
                      width: "160px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        height: "32px",
                        width: "32px",
                        backgroundColor: "#FFF",
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                        marginRight: 10,
                        borderRadius: "50%",
                      }}
                    >
                      <img
                        src="/assets/images/black-icons/whatsapp_black.png"
                        alt="Call"
                        style={{ height: "20px", width: "20px" }}
                      />
                    </div>
                    WhatsApp
                  </button>
                  <button
                    className="social-main-btn"
                    onClick={handleMail}
                    style={{
                      width: "150px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        height: "32px",
                        width: "32px",
                        backgroundColor: "#FFF",
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                        marginRight: 10,
                        borderRadius: "50%",
                      }}
                    >
                      <img
                        src="/assets/images/black-icons/gmail_black.png"
                        alt="Call"
                        style={{ height: "20px", width: "20px" }}
                      />
                    </div>
                    Mail Us
                  </button>
                </div>

                {/* Right Section: Rounded Social Buttons */}
                <div style={{ display: "flex", gap: "10px" }}>
                  <button
                    className="social-rounded-btn"
                    onClick={handleFacebook}
                    style={{ padding: "8px", backgroundColor: "#3A559F" }}
                  >
                    <img
                      src="/assets/images/icons/facebook.png"
                      alt="Facebook"
                    />
                  </button>
                  <button
                    className="social-rounded-btn"
                    onClick={handleInstagram}
                    style={{ padding: "8px", backgroundColor: "#D03B98" }}
                  >
                    <img
                      src="/assets/images/icons/instagram.png"
                      alt="Instagram"
                    />
                  </button>
                  <button
                    className="social-rounded-btn"
                    onClick={handleLinkedIn}
                    style={{ padding: "8px", backgroundColor: "#0B63BD" }}
                  >
                    <img
                      src="/assets/images/icons/linkedin.png"
                      alt="LinkedIn"
                    />
                  </button>
                  <button
                    className="social-rounded-btn"
                    onClick={handleShare}
                    style={{ padding: "8px", backgroundColor: "#00ADFF" }}
                  >
                    <img src="/assets/images/icons/share.png" alt="Share" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="features-wrapper-three pt-110">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section-title text-center mb-60 wow fadeInUp">
                  <span className="sub-title">Some Feature</span>
                  <h2>Caring for Your Entertainment</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div
                  className="features-item features-item-two text-center mb-40 wow fadeInUp"
                  data-wow-delay="10ms"
                >
                  <div className="icon">
                    <i className="flaticon-add-user" />
                  </div>
                  <div className="content">
                    <h3 className="title">User-Friendly Experience</h3>
                    <p>
                      At our HR Consultancy, we make managing human resources
                      simple and stress-free — with easy-to-understand
                      solutions, clear processes, and personalized support at
                      every step.
                    </p>
                    {/* <Link className="btn-link icon-btn" href="/how-work">
                      More Details
                    </Link> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div
                  className="features-item features-item-two text-center mb-40 wow fadeInDown"
                  data-wow-delay="20ms"
                >
                  <div className="icon">
                    <i className="flaticon-gift-box" />
                  </div>
                  <div className="content">
                    <h3 className="title">Exciting Daily Insights</h3>
                    <p>
                      Get access to the latest HR trends, recruitment tips, and
                      compliance updates. We provide valuable daily insights to
                      help your business stay ahead and make smarter HR
                      decisions.
                    </p>
                    {/* <Link className="btn-link icon-btn" href="/how-work">
                      More Details
                    </Link> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div
                  className="features-item features-item-two text-center mb-40 wow fadeInUp"
                  data-wow-delay="30ms"
                >
                  <div className="icon">
                    <i className="flaticon-laptop" />
                  </div>
                  <div className="content">
                    <h3 className="title">Smart & Quick Hiring</h3>
                    <p>
                      No more wasting time on unqualified applicants. Our
                      intelligent talent-matching system and efficient screening
                      tools help you find the right candidates quickly — based
                      on your exact hiring needs.
                    </p>
                    {/* <Link className="btn-link icon-btn" href="/how-work">
                      More Details
                    </Link> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div
                  className="features-item features-item-two text-center mb-40 wow fadeInDown"
                  data-wow-delay="40ms"
                >
                  <div className="icon">
                    <i className="flaticon-headphone" />
                  </div>
                  <div className="content">
                    <h3 className="title">24/7 Expert Support</h3>
                    <p>
                      Have questions? Our HR professionals are available around
                      the clock — whether you need help with policies, hiring
                      strategies, or compliance concerns. We're always just a
                      call or message away.
                    </p>
                    {/* <Link className="btn-link icon-btn" href="/how-work">
                      More Details
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Features Section ======*/}
      {/*====== Start Features Section ======*/}
      <section className="features-area">
        <div className="features-wrapper-four pt-80 pb-115">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="features-img wow fadeInLeft">
                  <img
                    src="/assets/images/details-images/product-detail-4.jpg"
                    alt="Features Image"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="features-content-box features-content-box-one">
                  <div className="section-title section-title-left mb-30 wow fadeInUp">
                    <span className="sub-title">Our Speciality</span>
                    <h2>Experience HR that Delivers Impact</h2>
                  </div>
                  <h5>Where people performance meets future-ready thinking.</h5>
                  <ul className="features-list-one">
                    <li
                      className="list-item wow fadeInUp"
                      data-wow-delay="10ms"
                    >
                      <div className="icon">
                        <i className="flaticon-find" />
                      </div>
                      <div className="content">
                        <h5>Perfect Match, Effortlessly</h5>
                        <p>
                          Empowering individuals and teams to thrive, grow, and
                          lead.
                        </p>
                      </div>
                    </li>
                    <li
                      className="list-item wow fadeInUp"
                      data-wow-delay="20ms"
                    >
                      <div className="icon">
                        <i className="flaticon-place" />
                      </div>
                      <div className="content">
                        <h5>Smart & Simple Selection</h5>
                        <p>
                          Transforming talent into a competitive advantage
                          through strategic HR solutions.
                        </p>
                      </div>
                    </li>
                    <li
                      className="list-item wow fadeInUp"
                      data-wow-delay="30ms"
                    >
                      <div className="icon">
                        <i className="flaticon-social-care" />
                      </div>
                      <div className="content">
                        <h5>24/7 Expert Support</h5>
                        <p>
                          Expert HR guidance available whenever you need it.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-lg-6">
                <div className="content">
                  <h5>Our Vision</h5>
                  <p>
                    To be the most trusted and innovative HR consultancy,
                    empowering organizations and individuals to thrive through
                    people-first solutions, strategic insight, and
                    transformative partnerships.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="content">
                  <h5>Our Mission</h5>
                  <p>
                    To deliver exceptional HR services that align talent with
                    opportunity, foster workplace excellence, and drive
                    sustainable growth for our clients. We are committed to
                    supporting businesses and job seekers through ethical,
                    responsive, and results-driven human resource solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Features Section ======*/}
      {/*====== Start CTA Section ======*/}
      <section className="cta-area">
        <div
          className="cta-wrapper-two bg_cover b"
          style={{ backgroundImage: "url(assets/images/bg/cta-bg-2.jpg)" }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div
                  className="company-name wow fadeInLeft"
                  style={{ fontSize: "150px" }}
                >
                  Shaping Team
                </div>
              </div>
              <div className="col-lg-5">
                <div className="cta-content-box wow fadeInRight">
                  <h2>Experience Next-Level Human Potential</h2>
                  <p>
                    Human-centered HR expertise combining deep industry insight
                    and customized solutions that turn your workforce into your
                    greatest competitive advantage.
                  </p>
                  <a
                    onClick={() => {
                      const link = document.createElement("a");
                      link.href = "/assets/images/HR_Consultancy.pptx";
                      link.target = "_blank"; // Open in a new tab
                      link.rel = "noopener noreferrer"; // Security best practice
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                    className="main-btn"
                    style={{
                      display: "inline-block",
                      padding: "10px 20px",
                      backgroundColor: "#69C8C7",
                      color: "#FFF",
                      textDecoration: "none",
                      borderRadius: "5px",
                      marginTop: "10px",
                    }}
                  >
                    View Services
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End CTA Section ======*/}
      {/*====== Start Testimonial Section ======*/}
      <section
        className="testimonial-area bg_cover pt-110 pb-265"
        style={{
          backgroundImage: "url(assets/images/bg/testimonial-bg-2.jpg)",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center mb-60 wow fadeInUp">
                <span className="sub-title">Our Testimoinals</span>
                <h2>Happy User Feedback</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="testimonial-wrapper-one text-center wow fadeInUp">
                <div className="testimonial-review-area">
                  <TestimoinalSlider />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Testimonial Section ======*/}
      {/*====== Start Newsletter Section ======*/}
      <section className="newsletter-area">
        <div className="container" style={{ marginBottom: "50px" }}>
          <div
            className="newsletter-wrapper newsletter-wrapper-one bg_cover"
            style={{
              backgroundImage: "url(assets/images/bg/newsletter-bg-1.jpg)",
            }}
          >
            <div className="row">
              <div className="col-lg-5">
                <div className="newsletter-content-box-one wow fadeInLeft">
                  <div className="icon">
                    <i
                      className="flaticon-email"
                      style={{ marginTop: "5px" }}
                    />
                  </div>
                  <div className="content">
                    <h4 style={{ color: "#FFF" }}>Send your requirement</h4>
                    <div
                      style={{
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <h2>WhatsApp Now</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="newsletter-form wow fadeInRight">
                  <div className="form_group">
                    <input
                      type="text"
                      id="whatsappMessage"
                      className="form_control"
                      placeholder="Enter your requirement"
                      name="message"
                      required=""
                      style={{ marginTop: "20px" }}
                    />
                    <button
                      className="main-btn"
                      style={{ backgroundColor: "#69C8C7" }}
                      onClick={() => {
                        const userInfo = sessionStorage.getItem("userInfo"); // Retrieve userInfo here
                        if (isMobile) {
                          handleWhatsApp(); // Directly open WhatsApp on mobile
                        } else {
                          if (!userInfo) {
                            setIsPopupOpen(true); // Open the popup if session data is not available
                          } else {
                            const message =
                              document.getElementById("whatsappMessage").value;
                            const encodedMessage = encodeURIComponent(message);
                            // Replace with your actual WhatsApp number (with country code, remove +)
                            const whatsappNumber = "917984348404";
                            window.open(
                              `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
                              "_blank"
                            );
                          }
                        }
                      }}
                    >
                      Send via WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Newsletter Section ======*/}
      {/*====== Start Team Section ======*/}
      {/* <section className="team-area pt-115 pb-85">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center mb-50 wow fadeInUp">
                <span className="sub-title">Team Member</span>
                <h2>Meet Our Executive</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="team-item team-item-one mb-30 wow fadeInUp">
                <div className="team-img">
                  <img src="assets/images/team/team-1.jpg" alt="Team Image" />
                  <div className="team-social">
                    <ul className="social-link">
                      <li>
                        <a href="#">
                          <i className="ti-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-twitter-alt" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-linkedin" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-pinterest" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-info text-center">
                  <h3 className="title">Alesha Mature</h3>
                  <span className="position">Sr. Executive</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="team-item team-item-one mb-30 wow fadeInDown"
                data-wow-delay="20ms"
              >
                <div className="team-img">
                  <img src="assets/images/team/team-2.jpg" alt="Team Image" />
                  <div className="team-social">
                    <ul className="social-link">
                      <li>
                        <a href="#">
                          <i className="ti-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-twitter-alt" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-linkedin" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-pinterest" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-info text-center">
                  <h3 className="title">Martyn Decode</h3>
                  <span className="position">Sr. Executive</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="team-item team-item-one mb-30 wow fadeInUp">
                <div className="team-img">
                  <img src="assets/images/team/team-3.jpg" alt="Team Image" />
                  <div className="team-social">
                    <ul className="social-link">
                      <li>
                        <a href="#">
                          <i className="ti-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-twitter-alt" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-linkedin" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-pinterest" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-info text-center">
                  <h3 className="title">Alesha Mature</h3>
                  <span className="position">Sr. Executive</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/*====== End Team Section ======*/}
    </Layout>
  );
};
export default About;
