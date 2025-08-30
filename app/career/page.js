"use client";
import PageBanner from "@/components/PageBanner";
import UserInfoPopup from "@/components/userDetailPopup";
import Layout from "@/layouts/Layout";
import { useEffect, useMemo, useState } from "react";

const jobOpenings = [
  {
    id: "hr-executive",
    title: "HR Executive",
    location: "Ahmedabad, India",
    type: "Full-time",
    summary:
      "Support end-to-end HR operations including onboarding, documentation, and employee engagement.",
  },
  {
    id: "talent-acquisition",
    title: "Talent Acquisition Specialist",
    location: "Ahmedabad, India",
    type: "Full-time",
    summary:
      "Own the recruitment cycle, source candidates, manage pipelines, and partner with hiring managers.",
  },
  {
    id: "payroll-specialist",
    title: "Payroll Specialist",
    location: "Ahmedabad, India",
    type: "Full-time",
    summary:
      "Process payroll, handle compliance, maintain records, and ensure accurate & timely payouts.",
  },
  {
    id: "compliance-officer",
    title: "Compliance Officer",
    location: "Ahmedabad, India",
    type: "Full-time",
    summary:
      "Manage statutory and factory compliance, audits, and documentation as per regulations.",
  },
  {
    id: "training-coordinator",
    title: "Training & Development Coordinator",
    location: "Ahmedabad, India",
    type: "Full-time",
    summary:
      "Plan and execute training programs to upskill teams and improve performance.",
  },
];

export default function Career() {
  const [showBar, setShowBar] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Device detection (same approach as about/contact)
  const isMobileDevice = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isMobileUserAgent =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        userAgent
      );
    const isMobileScreen = window.innerWidth <= 768;
    const hasTouchScreen =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    return isMobileUserAgent || (isMobileScreen && hasTouchScreen);
  };

  useEffect(() => {
    setMounted(true);
    setIsMobile(isMobileDevice());

    let lastScrollTop = 0;
    const handleResize = () => setIsMobile(isMobileDevice());
    const handleScroll = () => {
      const st = window.scrollY || document.documentElement.scrollTop;
      const isDown = st > lastScrollTop;
      lastScrollTop = st <= 0 ? 0 : st;
      if (isDown && window.innerWidth >= 768) {
        setShowBar(true);
      } else {
        setShowBar(false);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleCall = () => {
    window.location.href = "tel:+917984348404";
  };
  const handleLocation = () => {
    window.open("https://g.co/kgs/NVpSRxo", "_blank");
  };
  const handleWhatsApp = () => {
    window.open("https://wa.me/917984348404", "_blank");
  };
  const handleMail = () => {
    window.location.href = "mailto:info@shapingteam.com";
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
          title: "Careers at Shaping Team",
          text: "Explore open roles and apply today.",
          url: window.location.href,
        });
      } else {
        alert("Sharing is not supported on this browser.");
      }
    } catch (e) {
      console.error("Share failed:", e);
    }
  };

  const handleClosePopup = () => setIsPopupOpen(false);

  const roleOptions = useMemo(
    () => jobOpenings.map((j) => ({ id: j.id, title: j.title })),
    []
  );

  const handleApplyClick = (roleId) => {
    const selectEl = document.querySelector('select[name="role"]');
    if (selectEl) {
      selectEl.value = roleId;
      selectEl.dispatchEvent(new Event("change", { bubbles: true }));
    }
    const formEl = document.getElementById("career-apply-form");
    if (formEl) {
      formEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    try {
      setIsSubmitting(true);
      const userInfo =
        typeof window !== "undefined" && sessionStorage.getItem("userInfo");

      // Extract fields
      const form = e.target;
      const firstName = form.elements["firstName"].value;
      const lastName = form.elements["lastName"].value;
      const email = form.elements["email"].value;
      const phone = form.elements["phone"].value;
      const role = form.elements["role"].value;
      const experience = form.elements["experience"].value;
      const linkedin = form.elements["linkedin"].value;
      const message = form.elements["message"].value;

      // NOTE: Can't attach files via mailto. We include a reminder in the body.
      const subject = `Career Application - ${role} - ${firstName} ${lastName}`;
      const body =
        `First Name: ${firstName}%0D%0A` +
        `Last Name: ${lastName}%0D%0A` +
        `Email: ${email}%0D%0A` +
        `Phone: ${phone}%0D%0A` +
        `Role: ${role}%0D%0A` +
        `Experience (Years): ${experience}%0D%0A` +
        `LinkedIn: ${linkedin || "N/A"}%0D%0A%0D%0A` +
        `Message:%0D%0A${message}%0D%0A%0D%0A` +
        `Note: Please attach your resume to this email before sending.`;

      const mailtoLink = `mailto:info@shapingteam.com?subject=${encodeURIComponent(
        subject
      )}&body=${body}`;

      if (isMobile) {
        // Mobile: open email client
        window.location.href = mailtoLink;
      } else {
        // Desktop gating
        if (!userInfo) {
          setIsPopupOpen(true);
          return;
        }
        window.location.href = mailtoLink;
      }
    } catch (error) {
      console.error("Error submitting application:", error);
    } finally {
      setIsSubmitting(false);
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

      <PageBanner title={"Career"} />

      {/* Floating social bar */}
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
          alignItems: "center",
          transition: "transform 0.3s ease-in-out",
          borderRadius: "10px",
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
              flexWrap: "wrap",
              width: "95%",
            }}
          >
            {/* Left Section */}
            <div style={{ display: "flex", gap: "12px" }}>
              <button className="social-main-btn" onClick={handleCall} style={{ width: "150px", display: "flex", justifyContent: "center", alignItems: "center" }}>
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
              <button className="social-main-btn" onClick={handleLocation} style={{ width: "150px", display: "flex", justifyContent: "center", alignItems: "center" }}>
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
                    alt="Location"
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
                    handleWhatsApp();
                  } else {
                    !userInfo ? setIsPopupOpen(true) : handleWhatsApp();
                  }
                }}
                style={{ width: "160px", display: "flex", justifyContent: "center", alignItems: "center" }}
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
                    alt="WhatsApp"
                    style={{ height: "20px", width: "20px" }}
                  />
                </div>
                WhatsApp
              </button>
              <button className="social-main-btn" onClick={handleMail} style={{ width: "150px", display: "flex", justifyContent: "center", alignItems: "center" }}>
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
                    alt="Mail"
                    style={{ height: "20px", width: "20px" }}
                  />
                </div>
                Mail Us
              </button>
            </div>

            {/* Right Section */}
            <div style={{ display: "flex", gap: "10px" }}>
              <button className="social-rounded-btn" onClick={handleFacebook}>
                <img src="/assets/images/social-media-icons/Facebook.svg" alt="Facebook" />
              </button>
              <button className="social-rounded-btn" onClick={handleInstagram}>
                <img src="/assets/images/social-media-icons/Instagram.svg" alt="Instagram" />
              </button>
              <button className="social-rounded-btn" onClick={handleLinkedIn}>
                <img src="/assets/images/social-media-icons/Linkedin.svg" alt="LinkedIn" />
              </button>
              <button className="social-rounded-btn" onClick={handleShare}>
                <img src="/assets/images/social-media-icons/Share.svg" alt="Share" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Intro */}
      <section className="features-area pt-80 pb-60">
        <div className="container">
          <div className="row justify-content-center mb-30">
            <div className="col-lg-8">
              <div className="section-title text-center wow fadeInUp">
                <span className="sub-title">Join Our Team</span>
                <h2>Build Your Career with Us</h2>
                <p className="mt-3">
                  We’re always looking for passionate people who love solving real business challenges
                  in HR, compliance, payroll, and people development. Explore our openings below and apply.
                </p>
              </div>
            </div>
          </div>

          {/* Separator Image */}
          <div className="col-lg-12">
              <div className="text-center mb-40">
                <img
                  src="/assets/images/career/career_page_image.jpg"
                  alt="Join Our Team"
                  style={{ maxWidth: "85%", height: "auto", borderRadius: 8 }}
                />
              </div>
            </div>

          {/* Application Form */}
          <div className="row mt-60">
            <div className="col-lg-10">
              <div className="section-title section-title-left mb-30">
                <span className="sub-title">Application</span>
                <h2>Apply for a Role</h2>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="contact-wrapper-one mb-30 wow fadeInRight">
                <div className="contact-form">
                  <form id="career-apply-form" onSubmit={handleFormSubmit}>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form_group">
                          <input
                            type="text"
                            className="form_control"
                            placeholder="First Name"
                            name="firstName"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form_group">
                          <input
                            type="text"
                            className="form_control"
                            placeholder="Last Name"
                            name="lastName"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form_group">
                          <input
                            type="email"
                            className="form_control"
                            placeholder="Email"
                            name="email"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form_group">
                          <input
                            type="text"
                            className="form_control"
                            placeholder="Phone"
                            name="phone"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form_group">
                          <input
                            type="text"
                            className="form_control"
                            placeholder="Desired Role"
                            name="role"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form_group">
                          <input
                            type="number"
                            min="0"
                            step="0.5"
                            className="form_control"
                            placeholder="Experience (Years)"
                            name="experience"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form_group">
                          <input
                            type="url"
                            className="form_control"
                            placeholder="LinkedIn Profile (optional)"
                            name="linkedin"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form_group">
                          {/* File cannot be attached via mailto; we collect to guide users */}
                          <input
                            type="file"
                            className="form_control pt-3"
                            accept=".pdf,.doc,.docx"
                            name="resume"
                          />
                          <small className="text-muted">
                            Please attach your resume in the email client after it opens.
                          </small>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form_group">
                          <textarea
                            className="form_control"
                            placeholder="Cover Letter / Message"
                            name="message"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form_group">
                          <button
                            type="submit"
                            className="main-btn"
                            disabled={isSubmitting}
                            style={{ opacity: isSubmitting ? 0.7 : 1 }}
                          >
                            {isSubmitting ? "Sending..." : "Submit Application"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                  <p className="mt-2 text-muted" style={{ fontSize: 13 }}>
                    By submitting, you agree to our Terms and acknowledge our Privacy Policy.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contact-information-list">
                <div className="information-item mb-30 wow fadeInUp">
                  <div className="icon">
                    <i className="ti-location-pin" />
                  </div>
                  <div className="info">
                    <h5>Work Location</h5>
                    <p>Ahmedabad, Gujarat, India</p>
                  </div>
                </div>
                <div className="information-item mb-30 wow fadeInUp">
                  <div className="icon">
                    <i className="ti-email" />
                  </div>
                  <div className="info">
                    <h5>Careers Email</h5>
                    <p>
                      <a href="mailto:info@shapingteam.com">info@shapingteam.com</a>
                    </p>
                  </div>
                </div>
                <div className="information-item mb-30 wow fadeInUp">
                  <div className="icon">
                    <i className="ti-mobile" />
                  </div>
                  <div className="info">
                    <h5>HR Contact</h5>
                    <p>
                      <a href="tel:+91 79843 48404">+91 79843 48404</a>
                    </p>
                  </div>
                </div>
                <div className="information-item mb-10 wow fadeInUp">
                  <div className="icon">
                    <i className="ti-share" />
                  </div>
                  <div className="info">
                    <h5>Quick Apply</h5>
                    <button className="social-main-btn mt-2" onClick={handleWhatsApp}>
                      Apply via WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}