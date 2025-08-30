"use client";
import ListingDetailsRight from "@/components/ListingDetailsRight";
import VideoPopup from "@/components/VideoPopup";
import Layout from "@/layouts/Layout";
import { GallerySlider2, reletedListingSlider2 } from "@/sliderProps";
import Link from "next/link";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import { services } from "@/services";
import BottomTab from "@/components/BottomBar";
import UserInfoPopup from "@/components/userDetailPopup";

const heroImages = [
  "/assets/images/Hero-Banner/HR-1.jpg",
  "/assets/images/Hero-Banner/HR-2.jpg",
  "/assets/images/Hero-Banner/HR-3.jpg",
];

// Success images shown below the hero banner
const successImages = [
  "/assets/images/success_images/alpha_e.png",
  "/assets/images/success_images/hexa_coder.svg",
  "/assets/images/success_images/rajeshwari.png",
  "/assets/images/success_images/sidhhi.webp",
  "/assets/images/success_images/true_north.jpg",
];

const populerSearches = [
  "HR services 2025",
  "Hire top talent",
  "Recruitment help",
  "Payroll solutions",
  "HR for startups",
  "Compliance guide",
  "Onboarding tips",
  "Remote HR tools",
  "HR outsourcing",
  "Team management",
  "Build company culture",
  "Employee policies",
  "Talent strategy",
  "Labor law support",
];

const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000, // slower auto slide (5s per slide)
  fade: false,
  responsive: [
    {
      breakpoint: 768, // mobile and below
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      },
    },
  ],
};

const storyItems = [
  { id: 1, type: "video", src: "/assets/images/Story/story3.mp4" },
  { id: 2, type: "image", src: "/assets/images/Story/story1.jpg" },
  { id: 3, type: "video", src: "/assets/images/Story/story4.mp4" },
  { id: 4, type: "image", src: "/assets/images/Story/story2.jpg" },
  { id: 5, type: "video", src: "/assets/images/Story/story3.mp4" },
  { id: 6, type: "image", src: "/assets/images/Story/story2.jpg" },
];

export function SocialStoriesSection() {
  return (
    <div>
      <h4
        className="title"
        style={{ marginBottom: "20px", marginLeft: "10px" }}
      >
        Reels
      </h4>
      <div
        style={{
          display: "flex",
          overflowX: "auto",
          gap: "20px",
          padding: "10px",
          scrollbarWidth: "none",
          width: "100%",
          height: "300px", // Adjust as needed
        }}
      >
        {storyItems.map((item) => (
          <div
            key={item.id}
            style={{
              flex: "0 0 auto",
              width: "175px",
              height: "100%",
              borderRadius: "10px",
              overflow: "hidden",
              backgroundColor: "#f0f0f0",
            }}
          >
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={`Story ${item.id}`}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            ) : (
              <video
                src={item.src}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                controls
                autoPlay
                loop
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

const faqs = [
  {
    question: "What services does your HR consultancy provide?",
    answer:
      "We offer end-to-end HR solutions including recruitment, payroll management, employee onboarding, compliance support, and strategic HR consulting tailored to your business needs.",
  },
  {
    question: "How do you help with recruitment and talent acquisition?",
    answer:
      "We streamline the hiring process by sourcing qualified candidates, conducting preliminary screenings, and providing interview support to ensure you hire the best talent efficiently.",
  },
  {
    question: "Can small businesses benefit from your services?",
    answer:
      "Absolutely. Our services are scalable and tailored to fit businesses of all sizes. Whether you’re a startup or a growing SME, we provide cost-effective HR solutions to support your growth.",
  },
  {
    question: "Do you offer compliance and legal support?",
    answer:
      "Yes, we help businesses stay compliant with local labor laws and HR regulations, reducing legal risks and ensuring proper documentation and processes are in place.",
  },
  {
    question: "Is your consultancy available for remote or hybrid teams?",
    answer:
      "Yes, we provide HR support for remote, hybrid, and in-office teams, helping you manage workforce operations seamlessly regardless of your work model.",
  },
];

const customerFeedback = [
  {
    name: "Smith Joy",
    date: "Feb 10, 2025",
    feedback:
      "Outstanding consultancy service! They guided me through the entire hiring process with professionalism and clarity. I secured the right candidates faster than expected.",
    rating: 5,
    img: "/assets/images/testimonial/feedback-user-1.jpg",
  },
  {
    name: "Rahul Verma",
    date: "Mar 18, 2025",
    feedback:
      "Very reliable HR support. From recruitment to payroll management, their team made everything seamless and hassle-free for our organization.",
    rating: 4,
    img: "/assets/images/testimonial/feedback-user-2.jpg",
  },
  {
    name: "Ananya Iyer",
    date: "Apr 5, 2025",
    feedback:
      "Highly impressed with their strategic HR solutions. They helped us improve employee retention and streamline performance evaluations effectively.",
    rating: 5,
    img: "/assets/images/testimonial/feedback-user-4.jpg",
  },
];

// /assets/images/testimonial/feedback-user-4.jpg

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0); // First FAQ open by default

  return (
    <div className="mb-20 px-6 md:px-16 py-10">
      <h4
        className="title"
        style={{ marginBottom: "30px", marginTop: "30px", marginLeft: "10px" }}
      >
        Frequently Asked Questions
      </h4>
      <div className="space-y-6" style={{ marginLeft: "10px" }}>
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            style={{ borderRadius: 20 }}
            className="border my-2 border-gray-300 rounded-lg bg-white transition duration-300"
          >
            <button
              className="w-full flex items-center justify-between text-left pl-4 py-3 md:p-6 text-lg md:text-xl font-bold bg-white rounded-2xl"
              onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
            >
              <span className="flex-1">{faq.question}</span>
              <span className="text-3xl ml-4" style={{ color: "#69C8C7" }}>
                {openIndex === idx ? "−" : "+"}
              </span>
            </button>

            {openIndex === idx && faq.answer && (
              <div className="px-4 md:px-6 py-2 pb-6 text-gray-600 text-base md:text-lg leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

const HomeScreen = () => {
  const [showBar, setShowBar] = useState(false);
  const [requirementInput, setRequirementInput] = useState("");
  const [video, setVideo] = useState(false);
  const [visible, setVisible] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      // Intercept the event and store it
      e.preventDefault();
      setDeferredPrompt(e);
      console.log("✅ beforeinstallprompt event captured");
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleAddToHomeScreen = async () => {
    if (!deferredPrompt) {
      console.log("⚠️ Install prompt not available");
      return;
    }

    // Show the prompt
    deferredPrompt.prompt();

    const result = await deferredPrompt.userChoice;
    console.log("👉 User response:", result.outcome);

    if (result.outcome === "accepted") {
      console.log("✅ User accepted the install prompt");
    } else {
      console.log("❌ User dismissed the install prompt");
    }

    // Clear the saved prompt since it can't be used again
    setDeferredPrompt(null);
  };

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
    setMounted(true);
  }, []);

  useEffect(() => {
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
    window.location.href = "mailto:info@shapingteam.com"; // Replace with your email
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

  const getPrice = (product) => {
    const userInfo = sessionStorage.getItem("userInfo");
    if (isMobile) {
      const phoneNumber = "917984348404";
      const imageUrl = `https://plixon.in/${product?.image}`;

      // Create a message with product details and image URL
      const message = `*Product Inquiry*

  ${imageUrl}
  
  *Product Details:*
  • Name: ${product?.name}
  • Description: ${product?.detail}

  *Usability:*
  ${product?.usability?.map((use) => `• ${use}`).join("\n")}
  
  *Specifications:*
  ${product?.specification?.map((spec) => `• ${spec}`).join("\n")}
  
  Please provide information about:
  • Current price
  • Availability
  • Delivery options
  • Warranty details
  
  Thank you!`;

      const encodedMessage = encodeURIComponent(message);
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      window.open(whatsappURL, "_blank");
    } else {
      if (!userInfo) {
        setIsPopupOpen(true); // Open the popup if session data is not available
      } else {
        const phoneNumber = "917984348404";

        // Create a message with product details and image URL
        const message = `*Product Inquiry*

  ${product?.image}
  
  *Product Details:*
  • Name: ${product?.name}
  • Description: ${product?.detail}

  *Usability:*
  ${product?.usability?.map((use) => `• ${use}`).join("\n")}
  
  *Specifications:*
  ${product?.specification?.map((spec) => `• ${spec}`).join("\n")}
  
  Please provide information about:
  • Current price
  • Availability
  • Delivery options
  • Warranty details
  
  Thank you!`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappURL, "_blank");
      }
    }
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false); // Close the popup
  };

  const closeTab = () => {
    setVisible(false);
  };

  const buttonStyle = {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    background: "#160E41",
    border: "2px solid #FFF",
    borderRadius: "10px",
    padding: "0 12px",
    width: "70%",
    height: "48px", // Fixed height for all buttons
    cursor: "pointer",
    color: "#FFF",
    fontSize: "14px",
    fontWeight: "500",
    boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
  };

  const iconWrapperStyle = {
    height: "32px",
    width: "32px",
    backgroundColor: "#FFF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "10px",
    borderRadius: "50%",
    zIndex: 2,
  };

  const labelStyle = {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    color: "#FFF",
    fontSize: "14px",
    zIndex: 1,
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

      {/*====== Start Hero Banner Carousel ======*/}
      <div className="hero-banner-carousel">
        <Slider {...carouselSettings}>
          {heroImages.map((img, idx) => (
            <div key={idx} className="hero-slide">
              <img
                src={img}
                alt={`Hero Banner ${idx + 1}`}
                // className="w-100 h-[68vh] object-cover"
                className="w-100 h-[92vh] object-cover mt-[20px]"
                // className="hero-banner-img"
              />
            </div>
          ))}
        </Slider>
      </div>
      {/*====== End Hero Banner Carousel ======*/}

      {/*====== Success Images Row (below hero) ======*/}
      <div className="container" style={{ paddingTop: 50 }}>
        <div className="row justify-content-center pt-4">
          <div className="col-lg-7">
            <div className="section-title text-center mb-60 wow fadeInUp">
              <span className="sub-title">Our Clients</span>
              <h3>Trusted by the market leaders</h3>
            </div>
          </div>
        </div>
        <div
          className="row justify-content-center align-items-center"
          style={{ gap: 70, flexWrap: "wrap" }}
        >
          {successImages.map((src, idx) => (
            <div
              key={idx}
              className="d-flex justify-content-center align-items-center"
              style={{
                flex: "0 1 auto",
                maxWidth: 180,
                minWidth: 120,
              }}
            >
              <img
                src={src}
                alt={`Success Logo ${idx + 1}`}
                style={{
                  width: "100%",
                  height: 60,
                  objectFit: "contain",
                  filter: "grayscale(0)",
                  opacity: 0.95,
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/*====== Contact Info Buttons Starts here ======*/}
      <div
        className="d-md-none"
        style={{
          marginBottom: "-30px",
          marginTop: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          backgroundColor: "transparent",
        }}
      >
        <div
          style={{
            padding: "10px 0",
            backgroundColor: "transparent",
            overflow: "hidden",
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          {/* CALL */}
          <button onClick={handleCall} style={buttonStyle}>
            <div style={iconWrapperStyle}>
              <img
                src="/assets/images/black-icons/Call-Us.svg"
                alt="Call"
                style={{ height: "20px", width: "20px" }}
              />
            </div>
            <span style={labelStyle}>CALL US</span>
          </button>

          {/* WHATSAPP */}
          <button
            onClick={() => {
              const userInfo = sessionStorage.getItem("userInfo");
              if (isMobile) {
                handleWhatsApp();
              } else {
                !userInfo ? setIsPopupOpen(true) : handleWhatsApp();
              }
            }}
            style={buttonStyle}
          >
            <div style={iconWrapperStyle}>
              <img
                src="/assets/images/black-icons/whatsapp.svg"
                alt="WhatsApp"
                style={{ height: "20px", width: "20px" }}
              />
            </div>
            <span style={labelStyle}>WHATSAPP</span>
          </button>

          {/* LOCATION */}
          <button onClick={handleLocation} style={buttonStyle}>
            <div style={iconWrapperStyle}>
              <img
                src="/assets/images/black-icons/Location.svg"
                alt="Location"
                style={{ height: "20px", width: "20px" }}
              />
            </div>
            <span style={labelStyle}>LOCATION</span>
          </button>

          {/* MAIL */}
          <button onClick={handleMail} style={buttonStyle}>
            <div style={iconWrapperStyle}>
              <img
                src="/assets/images/black-icons/email.svg"
                alt="Mail"
                style={{ height: "20px", width: "20px" }}
              />
            </div>
            <span style={labelStyle}>MAIL US</span>
          </button>

          {/* DOWNLOAD BROCHURE */}
          <button
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/assets/images/Plixon-Catalogue-Digital.pdf";
              link.download = "Plixon-Catalogue-Digital.pdf";
              link.click();
            }}
            style={buttonStyle}
          >
            <div style={iconWrapperStyle}>
              <i
                className="ti-download"
                style={{ color: "#000", fontSize: "18px" }}
              />
            </div>
            <span style={labelStyle}>DOWNLOAD BROCHURE</span>
          </button>
        </div>

        {/* Social Media Buttons - More minimal */}
        <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
          <button className="social-rounded-btn" onClick={handleFacebook}>
            <img
              src="/assets/images/social-media-icons/Facebook.svg"
              alt="Facebook"
            />
          </button>
          <button className="social-rounded-btn" onClick={handleInstagram}>
            <img
              src="/assets/images/social-media-icons/Instagram.svg"
              alt="Instagram"
            />
          </button>
          <button className="social-rounded-btn" onClick={handleLinkedIn}>
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

        {/* Google Review Button - Simplified */}
        <div
          className="col-12"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "25px",
            marginBottom: "-20px",
          }}
        >
          <button
            onClick={() =>
              window.open("https://g.page/r/CTja04nreWhBEBM/review", "_blank")
            }
            style={{
              padding: "6px 20px",
              border: "1px solid #e0e0e0",
              borderRadius: "8px",
              backgroundColor: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "16px",
              fontWeight: "500",
              color: "#333",
              boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
              width: "70%",
            }}
          >
            <img
              src="/assets/images/icons/google.png"
              alt="Google Reviews"
              style={{
                height: "30px",
                width: "30px",
                marginRight: "12px",
              }}
            />
            Rate Us
          </button>
        </div>
      </div>
      {/*====== Contact Info Buttons Ends here ======*/}

      {/*====== Start Listing Details Section ======*/}
      <section className="listing-details-section pt-100 pb-90">
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
                <button className="social-rounded-btn" onClick={handleFacebook}>
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
                <button className="social-rounded-btn" onClick={handleLinkedIn}>
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
        <div>
          {/* Desktop View - Hidden on Mobile */}
          <div
            className="row"
            style={{
              marginBottom: "20px",
              marginTop: "-30px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap", // Ensures responsiveness
            }}
          >
            {/* Buttons Section */}
            <div className="row">
              {/* Desktop View */}
              {/* <div
                className="d-none d-md-flex row"
                style={{
                  marginBottom: "20px",
                  marginTop: "20px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
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
                <div
                  style={{ display: "flex", gap: "10px", marginLeft: "20px" }}
                >
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
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginLeft: "20px",
                  }}
                >
                  <button
                    onClick={() =>
                      window.open(
                        "https://g.page/r/CTja04nreWhBEBM/review",
                        "_blank"
                      )
                    }
                    style={{
                      padding: "9px 40px",
                      border: "1px solid #e0e0e0",
                      borderRadius: "8px",
                      backgroundColor: "white",
                      display: "flex",
                      alignItems: "center",
                      fontSize: "16px",
                      fontWeight: "500",
                      color: "#333",
                      boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                      fontWeight: "bold",
                    }}
                  >
                    <img
                      src="/assets/images/icons/google.png"
                      alt="Google Reviews"
                      style={{
                        height: "30px",
                        width: "30px",
                        marginRight: "12px",
                      }}
                    />
                    Rate Us
                  </button>
                </div>
              </div> */}
            </div>

            {/* Mobile Bottom Tab - Hidden on Desktop */}
            <div
              className="d-md-none bg-white fixed-bottom shadow-lg"
              style={{
                padding: "10px 0", // Adjusted padding to avoid extra space
                paddingTop: "0px",
                borderTop: "1px solid #eee",
                zIndex: 1000,
                overflow: "hidden", // Prevents content overflow
              }}
            >
              <BottomTab visible={visible} closeTab={closeTab} />
              <div
                className="d-flex justify-content-evenly align-items-center"
                style={{
                  gap: "5px", // Ensures proper spacing between buttons
                  width: "100%",
                  padding: "0 10px", // Full width for buttons
                }}
              >
                {/* Call */}
                <button
                  onClick={handleCall}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#160E41",
                    border: "2px solid #FFF",
                    borderRadius: "10px",
                    padding: "4px",
                    width: "100%", // Full width for buttons
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      height: "30px",
                      width: "30px",
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
                      style={{
                        height: "17px",
                        width: "17px",
                      }}
                    />
                  </div>
                  <span style={{ fontSize: "12px", color: "#FFF" }}>Call</span>
                </button>

                {/* WhatsApp */}
                <button
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
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#160E41",
                    border: "2px solid #000",
                    borderRadius: "10px",
                    padding: "4px",
                    width: "100%", // Full width for buttons
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      height: "27px",
                      width: "27px",
                      backgroundColor: "#FFF",
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                      marginRight: 7,
                      borderRadius: "50%",
                    }}
                  >
                    <img
                      src="/assets/images/black-icons/whatsapp.svg"
                      alt="WhatsApp"
                      style={{
                        height: "15px",
                        width: "15px",
                      }}
                    />
                  </div>
                  <span style={{ fontSize: "12px", color: "#FFF" }}>
                    WhatsApp
                  </span>
                </button>

                {/* Location */}
                <button
                  onClick={handleLocation}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#160E41",
                    border: "2px solid #000",
                    borderRadius: "10px",
                    padding: "4px",
                    width: "100%", // Full width for buttons
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      height: "27px",
                      width: "27px",
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
                      alt="Location"
                      style={{
                        height: "18px",
                        width: "18px",
                      }}
                    />
                  </div>
                  <span style={{ fontSize: "12px", color: "#FFF" }}>
                    Location
                  </span>
                </button>

                {/* Share */}
                <button
                  onClick={handleAddToHomeScreen}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#160E41",
                    border: "2px solid #000",
                    borderRadius: "10px",
                    padding: "4px",
                    width: "100%", // Full width for buttons
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      height: "27px",
                      width: "27px",
                      backgroundColor: "#FFF",
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                      marginRight: 10,
                      borderRadius: "50%",
                    }}
                  >
                    <i className="ti-bookmark" style={{ color: "#000" }}></i>
                  </div>
                  <span style={{ fontSize: "12px", color: "#FFF" }}>Save</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div
                className="listing-details-wrapper listing-details-wrapper-two"
                style={{}}
              >
                <div className="listing-thumbnail mb-30 wow fadeInUp">
                  <img
                    src="/assets/images/Hero-Banner/TV-setup-4.webp"
                    alt="listing image"
                  />
                </div>
                <div className="listing-content mb-30 wow fadeInUp">
                  <div className="listing-info-area mb-0 wow fadeInUp">
                    <div className="row align-items-center">
                      <div className="col-md-8">
                        <div className="listing-info-content">
                          <h3 className="title">About Us</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3 className="title">{`HR Consultancy – Smart Solutions for Your Workforce`}</h3>
                  <p>
                    HR Consultancy – Smart Solutions for Your Workforce At HR
                    Consultancy, we redefine human resource management by
                    blending expertise, innovation, and personalized service.
                    Our comprehensive range of HR solutions is designed to
                    support businesses of all sizes in building efficient,
                    compliant, and high-performing teams. Whether you're a
                    growing startup or an established enterprise, we provide
                    tailored services to meet your workforce needs.
                  </p>
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="icon-box icon-box-one">
                        <div className="icon">
                          {/* <i
                            className="ti-desktop"
                            style={{ color: "#69C8C7" }}
                          /> */}
                          <img
                            src="/assets/images/home-about-us/Talent Optimization.svg"
                            className="me-2 mx-2"
                            alt="WhatsApp"
                            style={{ width: "20px", height: "20px" }}
                          />
                        </div>
                        <div className="info">
                          <h6>Talent Optimization</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="icon-box icon-box-one">
                        <div className="icon">
                          {/* <i
                            className="ti-volume"
                            style={{ color: "#69C8C7" }}
                          /> */}
                          <img
                            src="/assets/images/home-about-us/HR Automation Tools.svg"
                            className="me-2 mx-2"
                            alt="WhatsApp"
                            style={{ width: "20px", height: "20px" }}
                          />
                        </div>
                        <div className="info">
                          <h6>HR Automation Tools</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="icon-box icon-box-one">
                        <div className="icon">
                          {/* <i
                            className="ti-desktop"
                            style={{ color: "#69C8C7" }}
                          /> */}
                          <img
                            src="/assets/images/home-about-us/Clear Workforce Insights.svg"
                            className="me-2 mx-2"
                            alt="WhatsApp"
                            style={{ width: "20px", height: "20px" }}
                          />
                        </div>
                        <div className="info">
                          <h6>Clear Workforce Insights</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="icon-box icon-box-one">
                        <div className="icon">
                          {/* <i
                            className="ti-desktop"
                            style={{ color: "#69C8C7" }}
                          /> */}
                          <img
                            src="/assets/images/home-about-us/Smart HR Solutions.svg"
                            className="me-2 mx-2"
                            alt="WhatsApp"
                            style={{ width: "20px", height: "20px" }}
                          />
                        </div>
                        <div className="info">
                          <h6>Smart HR Solutions</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="icon-box icon-box-one">
                        <div className="icon">
                          {/* <i
                            className="ti-volume"
                            style={{ color: "#69C8C7" }}
                          /> */}
                          <img
                            src="/assets/images/home-about-us/Intregrated HR Systems.svg"
                            className="me-2 mx-2"
                            alt="WhatsApp"
                            style={{ width: "20px", height: "20px" }}
                          />
                        </div>
                        <div className="info">
                          <h6>Integrated HR Systems</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="icon-box icon-box-one">
                        <div className="icon">
                          {/* <i
                            className="ti-desktop"
                            style={{ color: "#69C8C7" }}
                          /> */}
                          <img
                            src="/assets/images/home-about-us/Ideal for Growing Teams.svg"
                            className="me-2 mx-2"
                            alt="WhatsApp"
                            style={{ width: "20px", height: "20px" }}
                          />
                        </div>
                        <div className="info">
                          <h6>Ideal for Growing Teams</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p>
                    Discover the future of HR with our premium consultancy
                    services. Built on a foundation of industry knowledge and
                    modern HR practices, we help organizations streamline
                    recruitment, enhance employee engagement, and ensure legal
                    compliance. Whether you need strategic hiring support,
                    payroll management, or end-to-end HR outsourcing, we offer
                    solutions aligned with your goals. Trust in our commitment
                    to professionalism, efficiency, and client satisfaction.
                    <a
                      href="/about"
                      style={{
                        color: "#69C8C7",
                        cursor: "pointer",
                        fontSize: "15px",
                        whiteSpace: "nowrap",
                        display: "inline",
                        marginLeft: "4px",
                      }}
                    >
                      Read More
                    </a>
                  </p>
                </div>

                <div className="releted-listing-area wow fadeInUp mb-10">
                  <h3 className="title mb-40">Related HR Services</h3>
                  <Slider
                    {...reletedListingSlider2}
                    className="releted-listing-slider-one"
                    style={{padding:"10px"}}
                  >
                    {services.map((product, index) => (
                      <div className="listing-item listing-grid-item-two w-100" >
                        <div
                          className="listing-thumbnail"
                          style={{
                            backgroundColor: product.backgroundColor,
                            borderTopLeftRadius: "10px",
                            borderTopRightRadius: "10px",
                            justifyContent: "center",
                            alignItems: "center",
                            display: "flex",
                            width: "100%",
                          }}
                        >
                          <Link
                            href={`/product-details/${product.slug}`}
                            style={{ width: "100%" }}
                          >
                            <img
                              src={product.image}
                              alt="TV Product Image"
                              style={{ objectFit: "", width: "100%" }}
                            />
                          </Link>
                          {/* <span
                            className="featured-btn"
                            style={{ borderRadius: "5px" }}
                          >
                            Featured
                          </span> */}
                        </div>
                        {/* style={{padding:"10px", backgroundColor:"red"}} */}
                        <div className="listing-content">
                          <h3 className="title">
                            <Link href={`/product-details/${product.slug}`}>
                              {product.service}
                            </Link>
                          </h3>
                          <p
                            style={{
                              display: "-webkit-box",
                              WebkitBoxOrient: "vertical",
                              WebkitLineClamp: 6,
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              maxWidth: "300px",
                              lineHeight: "1.5",
                              marginBottom: "15px",
                            }}
                          >
                            {product.detail}
                          </p>
                          <span className="phone-meta"></span>
                          <div
                            className="listing-meta"
                            style={{ width: "100%" }}
                          >
                            <ul style={{ width: "100%" }}>
                              <li style={{ width: "100%" }}>
                                <button
                                  onClick={() => {
                                    const userInfo =
                                      sessionStorage.getItem("userInfo");
                                    if (isMobile) {
                                      getPrice(product);
                                    } else {
                                      if (!userInfo) {
                                        setIsPopupOpen(true); // Open the popup if session data is not available
                                      } else {
                                        getPrice(product);
                                      }
                                    }
                                  }}
                                  className="flex items-center gap-2 px-3 py-1 mt-1 mb-3 rounded-lg transition"
                                  style={{
                                    backgroundColor: "#24D07A",
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: "100%",
                                  }}
                                >
                                  <img
                                    src="/assets/images/WhatsApp_Image.png"
                                    alt="WhatsApp Icon"
                                    style={{
                                      height: "15px",
                                      width: "15px",
                                      marginRight: "8px",
                                    }}
                                  />
                                  <span
                                    className="underline"
                                    style={{ color: "#FFFFFF" }}
                                  >
                                    Get Services
                                  </span>
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
                {/* <div className="listing-gallery-box mb-30 wow fadeInUp">
                  <h4 className="title" style={{ marginBottom: "40px" }}>
                    Features Gallery
                  </h4>
                  <Slider {...GallerySlider2} className="gallery-slider-one">
                    <div className="gallery-item">
                      <img
                        src="/assets/images/Posts/Post 1.jpg"
                        alt="gallery image"
                      />
                    </div>
                    <div className="gallery-item">
                      <img
                        src="/assets/images/Posts/Post 2.jpg"
                        alt="gallery image"
                      />
                    </div>
                    <div className="gallery-item">
                      <img
                        src="/assets/images/Posts/Post 3.jpg"
                        alt="gallery image"
                      />
                    </div>
                    <div className="gallery-item">
                      <img
                        src="/assets/images/Posts/Post 4.jpg"
                        alt="gallery image"
                      />
                    </div>
                    <div className="gallery-item">
                      <img
                        src="/assets/images/Posts/Post 5.jpg"
                        alt="gallery image"
                      />
                    </div>
                    <div className="gallery-item">
                      <img
                        src="/assets/images/Posts/Post 6.jpg"
                        alt="gallery image"
                      />
                    </div>
                    <div className="gallery-item">
                      <img
                        src="/assets/images/Posts/Post 7.jpg"
                        alt="gallery image"
                      />
                    </div>
                  </Slider>
                </div>
                <SocialStoriesSection /> */}
                <FAQSection />
                <div
                  className="d-flex align-items-center justify-content-between p-3 rounded"
                  style={{
                    backgroundColor: "#E5F8F7",
                    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "20px",
                  }}
                >
                  <div
                    className="mb-2 mb-md-0 me-md-3"
                    style={{ minWidth: "250px", paddingLeft: "20px" }}
                  >
                    <span style={{ fontSize: "16px", marginBottom: "5px" }}>
                      Send your requirement
                    </span>
                    <br />
                    <strong
                      style={{
                        fontSize: "25px",
                        color: "#000",
                        fontWeight: "bold",
                      }}
                    >
                      WhatsApp now
                    </strong>
                  </div>

                  <div
                    className="input-group mb-2 mb-md-0"
                    style={{
                      maxWidth: "400px",
                      flexGrow: 1,
                      paddingRight: "20px",
                    }}
                  >
                    <span
                      className="input-group-text bg-white border-end-0"
                      style={{ marginRight: "5px" }}
                    >
                      <img
                        src="/assets/images/whatsapp-image-green.png"
                        alt="WhatsApp Icon"
                        style={{
                          height: "25px",
                          width: "25px",
                        }}
                      />
                    </span>
                    <input
                      type="text"
                      className="form-control border-start-0 rounded"
                      placeholder="Hi, I want your service..."
                      aria-label="WhatsApp Message"
                      style={{ marginRight: "5px" }}
                      onChange={(e) => {
                        setRequirementInput(e.target.value);
                      }}
                      value={requirementInput}
                    />
                    <button
                      className="btn btn-primary"
                      type="button"
                      id="button-send"
                      onClick={() => {
                        const userInfo = sessionStorage.getItem("userInfo");
                        if (isMobile) {
                          handleWhatsApp(); // Directly open WhatsApp on mobile
                        } else {
                          if (!userInfo) {
                            setIsPopupOpen(true); // Open the popup if session data is not available
                          } else {
                            const phoneNumber = "917984348404"; // Replace with your retailer's WhatsApp number
                            const message = `${requirementInput}`;
                            const encodedMessage = encodeURIComponent(message);
                            const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
                            window.open(whatsappURL, "_blank");
                          }
                        }
                      }}
                    >
                      Send
                    </button>
                    <div
                      className="ms-md-3 text-nowrap"
                      style={{ marginTop: "5px" }}
                    >
                      Or connect with us instantly
                      <a
                        href="tel:79843 48404"
                        className="text-decoration-none ms-1"
                      >
                        <strong
                          style={{
                            color: "#007BFF",
                            textDecoration: "underline",
                            marginLeft: "5px",
                          }}
                        >
                          79843 48404
                        </strong>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="listing-tag-box mb-30 wow fadeInUp mt-15 mb-2">
                  <h4 className="title">Related Searches</h4>
                  {populerSearches.map((val) => {
                    return (
                      <span
                        key={val}
                        className="px-3 my-2 mr-3 py-2 rounded-full border border-gray-300 bg-white text-sm"
                      >
                        {val}
                      </span>
                    );
                  })}
                </div>

                <div className="listing-review-box mb-50 wow fadeInUp">
                  <h4 className="title">Customer Review</h4>
                  <ul className="review-list">
                    {customerFeedback.map((review, index) => (
                      <li className="review" key={index}>
                        <div className="thumb">
                          <img
                            src={review.img}
                            alt={review.name}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              borderRadius: "10px",
                            }}
                          />
                        </div>

                        <div className="review-content">
                          <h5>{review.name}</h5>
                          <span className="date">{review.date}</span>
                          <p>{review.feedback}</p>

                          <div className="content-meta d-flex align-items-center justify-content-between">
                            <ul className="ratings ratings-six d-flex">
                              <li>
                                <span className="av-rate">{review.rating}</span>
                              </li>

                              {/* Filled stars */}
                              {[...Array(review.rating)].map((_, i) => (
                                <li className="px-1" key={`filled-${i}`}>
                                  <img
                                    src="/assets/images/contact-info/rating-star-fill.svg"
                                    alt="star-fill"
                                    style={{ height: "20px", width: "20px" }}
                                  />
                                </li>
                              ))}

                              {/* Empty stars (5 - rating) */}
                              {[...Array(5 - review.rating)].map((_, i) => (
                                <li className="px-1" key={`empty-${i}`}>
                                  <img
                                    src="/assets/images/contact-info/rating-star.svg"
                                    alt="star"
                                    style={{ height: "20px", width: "20px" }}
                                  />
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    marginBottom: "50px",
                  }}
                >
                  <button
                    className="main-btn"
                    onClick={
                      handleLocation
                      // window.open("https://g.page/r/CTjtIU0PHHR6EBM/review", "_blank")
                    }
                  >
                    Give Us a Review
                  </button>
                </div>
              </div>
            </div>

            <ListingDetailsRight />
          </div>
        </div>
      </section>
      {/*====== End Listing Details Section ======*/}
    </Layout>
  );
};

export default HomeScreen;

<style jsx global>{`
  html,
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }

  @media (max-width: 767.98px) {
    body {
      position: relative;
      overflow-x: hidden;
      padding-bottom: 70px; /* Reserve space for fixed bottom bar */
    }
  }
`}</style>;
