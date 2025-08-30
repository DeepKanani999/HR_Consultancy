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

  const featuresArray = [
    {
      title: "Talent Acquisition",
      img: "/assets/images/about-us/Strategy.svg",
      description:
        "We connect organizations with the right talent, ensuring each role is filled with individuals who bring value, skill, and passion.",
    },
    {
      title: "Organizing & Team Building",
      img: "/assets/images/about-us/Employee Search.svg",
      description:
        "We help structure teams and build strong foundations that encourage collaboration, trust, and long-term growth.",
    },
    {
      title: "People Cohesion & Training",
      img: "/assets/images/about-us/People Cohesion.svg",
      description:
        "Through tailored training programs, we enhance skills and create harmony within teams to achieve shared goals.",
    },
    {
      title: "Strategic Leadership",
      img: "/assets/images/about-us/Team Leadership.svg",
      description:
        "We provide guidance to leaders, enabling them to shape vision, drive innovation, and lead with confidence.",
    },
    {
      title: "Implementation",
      img: "/assets/images/about-us/Team Build Up.svg",
      description:
        "We turn strategies into action, ensuring plans are executed effectively and deliver measurable results.",
    },
  ];

  const challengesArr = [
    {
      img: "/assets/images/about-us/challanges/First.svg",
      title:"Our Vision",
      description:
        "To be a trusted partner in shaping organizations by building strong teams, ensuring compliance, and fostering a culture of growth, innovation, and integrity.",
    },
    {
      img: "/assets/images/about-us/challanges/Second.svg",
      title:"Our Mission",
      description:
        "To provide end-to-end HR, compliance, and workforce management solutions that simplify processes, empower people, and drive sustainable business success.",
    },
    {
      img: "/assets/images/about-us/challanges/Third.svg",
      title:"Our Values",
      description:
        "We are guided by integrity, excellence, collaboration, innovation, and a people-first approach, ensuring every solution we deliver creates lasting impact for our clients and their teams.",
    },
  ];

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
                        src="/assets/images/black-icons/Call-Us.svg"
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
                        src="/assets/images/black-icons/Location.svg"
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
                        src="/assets/images/black-icons/whatsapp.svg"
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
                        src="/assets/images/black-icons/email.svg"
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
                  >
                    <img
                      src="/assets/images/social-media-icons/Facebook.svg"
                      alt="Facebook"
                    />
                  </button>
                  <button
                    className="social-rounded-btn"
                    onClick={handleInstagram}
                  >
                    <img
                      src="/assets/images/social-media-icons/Instagram.svg"
                      alt="Instagram"
                    />
                  </button>
                  <button
                    className="social-rounded-btn"
                    onClick={handleLinkedIn}
                  >
                    <img
                      src="/assets/images/social-media-icons/Linkedin.svg"
                      alt="LinkedIn"
                    />
                  </button>
                  <button className="social-rounded-btn" onClick={handleShare}>
                    <img
                      src="/assets/images/social-media-icons/Share.svg"
                      alt="Share"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="features-wrapper-three pt-110">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7">
                <div className="section-title text-center mb-60 wow fadeInUp">
                  <span className="sub-title">Some Feature</span>
                  <h2>The Way We Build Success</h2>
                </div>
              </div>
            </div>
            <div
              className="row"
              style={{
                display: "flex",
                flexWrap: "nowrap",
                justifyContent: "space-evenly",
              }}
            >
              {featuresArray?.map((val, index) => (
                <div
                  key={index}
                  className="col"
                  style={{ flex: 1, minWidth: 0, maxWidth: "20%" }} // Force equal width for 5 items
                >
                  <div
                    className={`features-item features-item-two text-center mb-40 wow ${
                      index % 2 === 0 ? "fadeInUp" : "fadeInDown"
                    }`}
                    data-wow-delay={`${(index + 1) * 10}ms`}
                  >
                    <div className="icon">
                      <img
                        src={`${val?.img}`}
                        className="me-2 mx-2"
                        alt="icons"
                        style={{ width: "50px", height: "50px" }}
                      />
                    </div>
                    <div className="content">
                      <h3 className="title">{val?.title}</h3>
                      <p>{val?.description}</p>
                    </div>
                  </div>
                </div>
              ))}
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
                    src="/assets/images/details-images/about-us-speciality.jpg"
                    alt="Features Image"
                    style={{ width: "100%" }}
                  />
                </div>
                <div
                  style={{
                    marginTop: "50px",
                    width: "90%",
                  }}
                >
                  <h4
                    style={{
                      paddingRight: "10px",
                      paddingLeft: "10px",
                      color: "#676767",
                    }}
                  >
                    With over a decade of experience since beginning their HR
                    journey in 2012, our founder has led regional HR operations
                    for teams of 500+ employees, driving impact across IT and
                    non-IT sectors.
                  </h4>
                  <div style={{ marginTop: "30px" }}>
                    <div className="p-3 border rounded mb-4">
                      <li>
                        Extensive expertise in HR strategy, talent optimization,
                        and regulatory compliance across IT and non-IT
                        industries.
                      </li>
                    </div>
                    <div className="p-3 border rounded mb-4">
                      <li>
                        Proven track record in HR operations, performance
                        management, and employee engagement to drive workforce
                        efficiency.
                      </li>
                    </div>
                    <div className="p-3 border rounded mb-4">
                      <li>
                        Data-driven approach to aligning HR initiatives and
                        mastery in various HR software implementation and usage.
                      </li>
                    </div>
                    <div className="p-3 border rounded mb-4">
                      <li>
                        Leader in transformation, driving cultural development,
                        analytics-based decision-making, and workforce
                        compliance.
                      </li>
                    </div>
                    <div className="p-3 border rounded">
                      <li>
                        Certified Digital Trailblazer, integrating modern HR
                        technology to optimize talent strategies through social
                        media and various other platforms.
                      </li>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="features-content-box features-content-box-one">
                  <div className="section-title section-title-left mb-30 wow fadeInUp">
                    <span className="sub-title">Our Speciality</span>
                    <h2>Core Expertise</h2>
                  </div>
                  <h5>
                    Our founder brings a wealth of experience and visionary
                    leadership to the HR Shaping Team. Their core expertise
                    includes:
                  </h5>
                  <ul className="features-list-one">
                    <li
                      className="list-item wow fadeInUp"
                      data-wow-delay="10ms"
                    >
                      <div className="icon">
                        {/* <i className="flaticon-find" /> */}
                        <img
                          src="/assets/images/about-us/core-Expertise/Talent Acquisitions.svg"
                          className="me-2 mx-2"
                          alt="WhatsApp"
                          style={{ width: "40px", height: "40px" }}
                        />
                      </div>
                      <div className="content">
                        <h5>Talent Acquisition</h5>
                        <p>
                          We help organizations attract and hire the right
                          talent through a structured recruitment process that
                          aligns with business needs, culture, and long-term
                          goals.
                        </p>
                      </div>
                    </li>
                    <li
                      className="list-item wow fadeInUp"
                      data-wow-delay="20ms"
                    >
                      <div className="icon">
                        {/* <i className="flaticon-place" /> */}
                        <img
                          src="/assets/images/about-us/core-Expertise/Payroll.svg"
                          className="me-2 mx-2"
                          alt="WhatsApp"
                          style={{ width: "40px", height: "40px" }}
                        />
                      </div>
                      <div className="content">
                        <h5>Payroll Management</h5>
                        <p>
                          Comprehensive payroll solutions ensuring timely salary
                          disbursement, tax compliance, and transparent
                          financial management for employees and employers.
                        </p>
                      </div>
                    </li>
                    <li
                      className="list-item wow fadeInUp"
                      data-wow-delay="30ms"
                    >
                      <div className="icon">
                        {/* <i className="flaticon-social-care" /> */}
                        <img
                          src="/assets/images/about-us/core-Expertise/Statutory Compliance.svg"
                          className="me-2 mx-2"
                          alt="WhatsApp"
                          style={{ width: "40px", height: "40px" }}
                        />
                      </div>
                      <div className="content">
                        <h5>Statutory Compliance</h5>
                        <p>
                          Expert management of labor laws and statutory
                          requirements to reduce legal risks, ensure compliance,
                          and promote ethical business practices.
                        </p>
                      </div>
                    </li>
                    <li
                      className="list-item wow fadeInUp"
                      data-wow-delay="30ms"
                    >
                      <div className="icon">
                        {/* <i className="flaticon-social-care" /> */}
                        <img
                          src="/assets/images/about-us/core-Expertise/Contract Labour Management.svg"
                          className="me-2 mx-2"
                          alt="WhatsApp"
                          style={{ width: "40px", height: "40px" }}
                        />
                      </div>
                      <div className="content">
                        <h5>Factory Compliance</h5>
                        <p>
                          Support for compliance with factory laws, labor
                          regulations, and safety standards, building a secure,
                          lawful, and productive workplace environment.
                        </p>
                      </div>
                    </li>
                    <li
                      className="list-item wow fadeInUp"
                      data-wow-delay="30ms"
                    >
                      <div className="icon">
                        {/* <i className="flaticon-social-care" /> */}
                        <img
                          src="/assets/images/about-us/core-Expertise/Factory Compliance.svg"
                          className="me-2 mx-2"
                          alt="WhatsApp"
                          style={{ width: "40px", height: "40px" }}
                        />
                      </div>
                      <div className="content">
                        <h5>Training & Development</h5>
                        <p>
                          Tailored training programs designed to enhance
                          employee skills, productivity, and leadership
                          capabilities, driving both individual and
                          organizational growth.
                        </p>
                      </div>
                    </li>
                    <li
                      className="list-item wow fadeInUp"
                      data-wow-delay="30ms"
                    >
                      <div className="icon">
                        {/* <i className="flaticon-social-care" /> */}
                        <img
                          src="/assets/images/about-us/core-Expertise/PMS and Appraisals.svg"
                          className="me-2 mx-2"
                          alt="WhatsApp"
                          style={{ width: "40px", height: "40px" }}
                        />
                      </div>
                      <div className="content">
                        <h5>Performance Management System (PMS)</h5>
                        <p>
                          Structured evaluation and appraisal systems that align
                          employee goals with organizational objectives,
                          improving performance, accountability, and career
                          growth.
                        </p>
                      </div>
                    </li>
                    <li
                      className="list-item wow fadeInUp"
                      data-wow-delay="30ms"
                    >
                      <div className="icon">
                        {/* <i className="flaticon-social-care" /> */}
                        <img
                          src="/assets/images/about-us/core-Expertise/Training.svg"
                          className="me-2 mx-2"
                          alt="WhatsApp"
                          style={{ width: "40px", height: "40px" }}
                        />
                      </div>
                      <div className="content">
                        <h5>Contract Management</h5>
                        <p>
                          End-to-end management of contract labor, including
                          legal compliance, documentation, and fair engagement
                          practices to optimize workforce efficiency.
                        </p>
                      </div>
                    </li>
                    <li
                      className="list-item wow fadeInUp"
                      data-wow-delay="30ms"
                    >
                      <div className="icon">
                        {/* <i className="flaticon-social-care" /> */}
                        <img
                          src="/assets/images/about-us/core-Expertise/Training.svg"
                          className="me-2 mx-2"
                          alt="WhatsApp"
                          style={{ width: "40px", height: "40px" }}
                        />
                      </div>
                      <div className="content">
                        <h5>ISO Implementation & Auditing</h5>
                        <p>
                          Comprehensive guidance and auditing for ISO standards,
                          ensuring organizations meet global quality benchmarks
                          and achieve certification with confidence.
                        </p>
                      </div>
                    </li>
                    <li
                      className="list-item wow fadeInUp"
                      data-wow-delay="30ms"
                    >
                      <div className="icon">
                        {/* <i className="flaticon-social-care" /> */}
                        <img
                          src="/assets/images/about-us/core-Expertise/Training.svg"
                          className="me-2 mx-2"
                          alt="WhatsApp"
                          style={{ width: "40px", height: "40px" }}
                        />
                      </div>
                      <div className="content">
                        <h5>POSH Training</h5>
                        <p>
                          Awareness and compliance training on the Prevention of
                          Sexual Harassment (POSH) Act, creating a safe,
                          respectful, and inclusive workplace for all employees.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="features-wrapper-three pt-100 pb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center mb-60 wow fadeInUp">
                <span className="sub-title">Some</span>
                <h2>Our Foundation</h2>
              </div>
            </div>
          </div>
          <div
            className="row"
            style={{
              display: "flex",
              flexWrap: "nowrap",
              justifyContent: "space-evenly",
            }}
          >
            {challengesArr?.map((val, index) => (
              <div
                key={index}
                className="col"
                style={{ flex: 1, minWidth: 0, maxWidth: "30%" }} // Force equal width for 5 items
              >
                <div
                  className={`features-item features-item-two text-center mb-40 wow ${
                    index % 2 === 0 ? "fadeInUp" : "fadeInDown"
                  }`}
                  data-wow-delay={`${(index + 1) * 10}ms`}
                >
                  <div className="icon">
                    <img
                      src={`${val?.img}`}
                      className="me-2 mx-2"
                      alt="icons"
                      style={{ width: "50px", height: "50px" }}
                    />
                  </div>
                  <h5>{val?.title}</h5>
                  <div className="content">
                    {/* <h3 className="title">{val?.title}</h3> */}
                    <p>{val?.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="row mt-5 mb-5">
            <div className="col-lg-6 mb-5">
              <div className="content">
                <h5>Our Vision</h5>
                <p>
                  To be the most trusted and innovative HR consultancy,
                  empowering organizations and individuals to thrive through
                  people-first solutions, strategic insight, and transformative
                  partnerships.
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
          </div> */}
        </div>
      </div>
      {/*====== End Features Section ======*/}
      {/*====== Start CTA Section ======*/}
      <section className="cta-area">
        <div
          className="cta-wrapper-two bg_cover b"
          style={{
            backgroundImage: "url(/assets/images/bg/cta-bg-2.jpg)",
            height: "40vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* <div className="container"> */}
          <div
            className="row align-items-center align-items-center"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* <div className="col-lg-7">
              <div
                className="company-name wow fadeInLeft"
                style={{ fontSize: "150px" }}
              >
                Shaping Team
              </div>
            </div> */}
            <div className="col-lg-5">
              <div
                className="cta-content-box wow fadeInRight"
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h2 style={{ textAlign: "center" }}>
                  Experience Next-Level Human Potential
                </h2>
                <p style={{ textAlign: "center" }}>
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
                    alignSelf: "center",
                    cursor: "pointer",
                  }}
                >
                  View Services
                </a>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </section>
      {/*====== End CTA Section ======*/}
      {/*====== Start Testimonial Section ======*/}
      {/* <section
        className="testimonial-area bg_cover pt-110 pb-80"
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
      </section> */}
      {/*====== End Testimonial Section ======*/}
      {/*====== Start Success Story Section ======*/}
      <section
        className="pt-50 pb-200"
        style={{
          backgroundImage: "url(assets/images/bg/testimonial-bg-2.jpg)",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center mb-60 wow fadeInUp">
                <span className="sub-title">Esteemed Clients</span>
                <h2>Success Stories</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div
                className="text-center fadeInUp"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  padding: "30px 40px",
                  boxShadow: "2 5px 15px rgba(8,0,0,0.15)",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "10px",
                }}
              >
                <img
                  src="/assets/images/about-us/Rajeswari_Img.jpg"
                  alt="Features Image"
                  style={{
                    width: "25%",
                    marginBottom: "20px",
                  }}
                />
                Design and Implementation Entire HR Operation from Scratch
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Success Story Section ======*/}
      {/*====== Start Newsletter Section ======*/}
      <section className="newsletter-area">
        <div className="container" style={{ marginBottom: "50px" }}>
          <div
            className="newsletter-wrapper newsletter-wrapper-one bg_cover"
            style={{
              backgroundColor: "#B5E3E3",
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
    </Layout>
  );
};
export default About;
