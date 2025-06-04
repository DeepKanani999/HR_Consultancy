"use client";

import Layout from "@/layouts/Layout";
import { useEffect, useState } from "react";
import PageBanner from "@/components/PageBanner";
import UserInfoPopup from "@/components/userDetailPopup";

const TermsAndConditions = () => {
  const [showBar, setShowBar] = useState(false);
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
    window.location.href = "tel:+919726594265"; // Replace with your number
  };

  const handleLocation = () => {
    window.open("https://maps.app.goo.gl/K2WbFgvgbXR13jTj7", "_blank");
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/919726594265", "_blank"); // Replace with your number
  };

  const handleMail = () => {
    window.location.href = "mailto:somixafoodsllp@gmail.com"; // Replace with your email
  };

  const handleFacebook = () => {
    window.open("https://www.facebook.com/", "_blank");
  };

  const handleInstagram = () => {
    window.open("https://www.instagram.com/", "_blank");
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
      <PageBanner title={"Terms & Conditions"} />
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
            <div style={{ display: "flex", gap: "10px", marginLeft: "20px" }}>
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
          </div>
        </div>
      </div>
      <div
  className="terms-container"
  style={{ padding: "40px 20px", maxWidth: "1200px", margin: "0 auto" }}
>
  <div
    className="terms-header"
    style={{ marginBottom: "40px", textAlign: "center" }}
  >
    <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
      Terms and Conditions
    </h1>
    <p style={{ color: "#666" }}>Last updated: June 03, 2025</p>
  </div>

  <div className="terms-content" style={{ lineHeight: "1.6" }}>
    <section style={{ marginBottom: "30px" }}>
      <p>
        Please read these terms and conditions carefully before using Our
        Service.
      </p>
    </section>

    <section style={{ marginBottom: "30px" }}>
      <h2 style={{ fontSize: "1.8rem", marginBottom: "15px" }}>
        Interpretation and Definitions
      </h2>
      <h3 style={{ fontSize: "1.4rem", marginBottom: "10px" }}>
        Interpretation
      </h3>
      <p>
        The words of which the initial letter is capitalized have meanings
        defined under the following conditions. The following definitions
        shall have the same meaning regardless of whether they appear in
        singular or in plural.
      </p>

      <h3
        style={{
          fontSize: "1.4rem",
          marginBottom: "10px",
          marginTop: "20px",
        }}
      >
        Definitions
      </h3>
      <p>For the purposes of these Terms and Conditions:</p>
      <ul
        style={{
          listStyle: "disc",
          marginLeft: "20px",
          marginTop: "10px",
        }}
      >
        <li>
          <strong>Affiliate</strong> means an entity that controls, is
          controlled by or is under common control with a party, where
          "control" means ownership of 50% or more of the shares, equity
          interest or other securities entitled to vote for election of
          directors or other managing authority.
        </li>
        <li>
          <strong>Country</strong> refers to: Gujarat, India
        </li>
        <li>
          <strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this
          Agreement) refers to Shaping Team - Expert HR Consultancy Services, D-103,
          Silver Hormony, S.G. Highway, Gota, Ahmedabad. Gujarat, India - 382481.
        </li>
        <li>
          <strong>Device</strong> means any device that can access the
          Service such as a computer, a cellphone or a digital tablet.
        </li>
        <li>
          <strong>Service</strong> refers to the Website.
        </li>
        <li>
          <strong>Terms and Conditions</strong> (also referred as "Terms") mean these Terms and
          Conditions that form the entire agreement between You and the Company
          regarding the use of the Service. This Terms and Conditions agreement has
          been created with the help of the <a href="https://www.freeprivacypolicy.com/free-terms-and-conditions-generator/" style={{ color: "#007bff" }}>Free Terms and Conditions
          Generator</a>.
        </li>
        <li>
          <strong>Third-party Social Media Service</strong> means any services or content (including
          data, information, products or services) provided by a third-party that
          may be displayed, included or made available by the Service.
        </li>
        <li>
          <strong>Website</strong> refers to Shapping Team, accessible from{" "}
          <a href="https://shapingteam.com/" style={{ color: "#007bff" }}>
            https://shapingteam.com/
          </a>
        </li>
        <li>
          <strong>You</strong> means the individual accessing or using the
          Service, or the company, or other legal entity on behalf of
          which such individual is accessing or using the Service, as
          applicable.
        </li>
      </ul>
    </section>

    <section style={{ marginBottom: "30px" }}>
      <h2 style={{ fontSize: "1.8rem", marginBottom: "15px" }}>
        Acknowledgment
      </h2>
      <p>
        These are the Terms and Conditions governing the use of this
        Service and the agreement that operates between You and the
        Company. These Terms and Conditions set out the rights and
        obligations of all users regarding the use of the Service.
      </p>
      <p>
        Your access to and use of the Service is conditioned on Your
        acceptance of and compliance with these Terms and Conditions.
        These Terms and Conditions apply to all visitors, users and others
        who access or use the Service.
      </p>
      <p>
        By accessing or using the Service You agree to be bound by these
        Terms and Conditions. If You disagree with any part of these Terms
        and Conditions then You may not access the Service.
      </p>
      <p>
        You represent that you are over the age of 18. The Company does
        not permit those under 18 to use the Service.
      </p>
      <p>
        Your access to and use of the Service is also conditioned on Your
        acceptance of and compliance with the Privacy Policy of the
        Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of
        Your personal information when You use the Application or the Website and
        tells You about Your privacy rights and how the law protects You. Please read
        Our Privacy Policy carefully before using Our Service.
      </p>
    </section>

    <section style={{ marginBottom: "30px" }}>
      <h2 style={{ fontSize: "1.8rem", marginBottom: "15px" }}>
        Links to Other Websites
      </h2>
      <p>
        Our Service may contain links to third-party web sites or services that are
        not owned or controlled by the Company.
      </p>
      <p>
        The Company has no control over, and assumes no responsibility
        for, the content, privacy policies, or practices of any third party web sites or
        services. You further acknowledge and agree that the Company shall not be
        responsible or liable, directly or indirectly, for any damage or loss caused or
        alleged to be caused by or in connection with the use of or reliance on any
        such content, goods or services available on or through any such web sites or
        services.
      </p>
      <p>
        We strongly advise You to read the terms and conditions and
        privacy policies of any third-party web sites or services that You
        visit.
      </p>
    </section>

    <section style={{ marginBottom: "30px" }}>
      <h2 style={{ fontSize: "1.8rem", marginBottom: "15px" }}>
        Termination
      </h2>
      <p>
        We may terminate or suspend Your access immediately, without prior
        notice or liability, for any reason whatsoever, including without
        limitation if You breach these Terms and Conditions.
      </p>
      <p>
        Upon termination, Your right to use the Service will cease
        immediately.
      </p>
    </section>

    <section style={{ marginBottom: "30px" }}>
      <h2 style={{ fontSize: "1.8rem", marginBottom: "15px" }}>
        Limitation of Liability
      </h2>
      <p>
        Notwithstanding any damages that You might incur, the entire
        liability of the Company and any of its suppliers under any
        provision of this Terms and Your exclusive remedy for all of the
        foregoing shall be limited to the amount actually paid by You
        through the Service or 100 USD if You haven't purchased anything
        through the Service.
      </p>
      <p>
        To the maximum extent permitted by applicable law, in no event
        shall the Company or its suppliers be liable for any special,
        incidental, indirect, or consequential damages whatsoever
        (including, but not limited to, damages for loss of profits, loss
        of data or other information, for business interruption, for
        personal injury, loss of privacy arising out of or in any way
        related to the use of or inability to use the Service, third-party
        software and/or third-party hardware used with the Service, or
        otherwise in connection with any provision of this Terms), even if
        the Company or any supplier has been advised of the possibility of
        such damages and even if the remedy fails of its essential
        purpose.
      </p>
      <p>
        Some states do not allow the exclusion of implied warranties or
        limitation of liability for incidental or consequential damages,
        which means that some of the above limitations may not apply. In
        these states, each party's liability will be limited to the
        greatest extent permitted by law.
      </p>
    </section>

    <section style={{ marginBottom: "30px" }}>
      <h2 style={{ fontSize: "1.8rem", marginBottom: "15px" }}>
        "AS IS" and "AS AVAILABLE" Disclaimer
      </h2>
      <p>
        The Service is provided to You "AS IS" and "AS AVAILABLE" and with
        all faults and defects without warranty of any kind. To the
        maximum extent permitted under applicable law, the Company, on its
        own behalf and on behalf of its Affiliates and its and their
        respective licensors and service providers, expressly disclaims
        all warranties, whether express, implied, statutory or otherwise,
        with respect to the Service, including all implied warranties of
        merchantability, fitness for a particular purpose, title and
        non-infringement, and warranties that may arise out of course of
        dealing, course of performance, usage or trade practice. Without
        limitation to the foregoing, the Company provides no warranty or
        undertaking, and makes no representation of any kind that the
        Service will meet Your requirements, achieve any intended results,
        be compatible or work with any other software, applications,
        systems or services, operate without interruption, meet any
        performance or reliability standards or be error free or that any
        errors or defects can or will be corrected.
      </p>
      <p>
        Without limiting the foregoing, neither the Company nor any of the
        company's provider makes any representation or warranty of any
        kind, express or implied: (i) as to the operation or availability
        of the Service, or the information, content, and materials or
        products included thereon; (ii) that the Service will be
        uninterrupted or error-free; (iii) as to the accuracy,
        reliability, or currency of any information or content provided
        through the Service; or (iv) that the Service, its servers, the
        content, or e-mails sent from or on behalf of the Company are free
        of viruses, scripts, trojan horses, worms, malware, timebombs or
        other harmful components.
      </p>
      <p>
        Some jurisdictions do not allow the exclusion of certain types of
        warranties or limitations on applicable statutory rights of a
        consumer, so some or all of the above exclusions and limitations
        may not apply to You. But in such a case the exclusions and
        limitations set forth in this section shall be applied to the
        greatest extent enforceable under applicable law.
      </p>
    </section>

    <section style={{ marginBottom: "30px" }}>
      <h2 style={{ fontSize: "1.8rem", marginBottom: "15px" }}>
        Governing Law
      </h2>
      <p>
        The laws of the Country, excluding its conflicts of law rules,
        shall govern this Terms and Your use of the Service. Your use of
        the Application may also be subject to other local, state,
        national, or international laws.
      </p>
    </section>

    <section style={{ marginBottom: "30px" }}>
      <h2 style={{ fontSize: "1.8rem", marginBottom: "15px" }}>
        Disputes Resolution
      </h2>
      <p>
        If You have any concern or dispute about the Service, You agree to
        first try to resolve the dispute informally by contacting the
        Company.
      </p>
    </section>

    <section style={{ marginBottom: "30px" }}>
      <h2 style={{ fontSize: "1.8rem", marginBottom: "15px" }}>
        For European Union (EU) Users
      </h2>
      <p>
        If You are a European Union consumer, you will benefit from any
        mandatory provisions of the law of the country in which You are
        resident.
      </p>
    </section>

    <section style={{ marginBottom: "30px" }}>
      <h2 style={{ fontSize: "1.8rem", marginBottom: "15px" }}>
        United States Legal Compliance
      </h2>
      <p>
        You represent and warrant that (i) You are not located in a
        country that is subject to the United States government embargo,
        or that has been designated by the United States government as a
        "terrorist supporting" country, and (ii) You are not listed on any
        United States government list of prohibited or restricted parties.
      </p>
    </section>

    <section style={{ marginBottom: "30px" }}>
      <h2 style={{ fontSize: "1.8rem", marginBottom: "15px" }}>
        Severability and Waiver
      </h2>
      <h3 style={{ fontSize: "1.4rem", marginBottom: "10px" }}>
        Severability
      </h3>
      <p>
        If any provision of these Terms is held to be unenforceable or
        invalid, such provision will be changed and interpreted to
        accomplish the objectives of such provision to the greatest extent
        possible under applicable law and the remaining provisions will
        continue in full force and effect.
      </p>
      <h3
        style={{
          fontSize: "1.4rem",
          marginBottom: "10px",
          marginTop: "20px",
        }}
      >
        Waiver
      </h3>
      <p>
        Except as provided herein, the failure to exercise a right or to
        require performance of an obligation under these Terms shall not
        affect a party's ability to exercise such right or require such
        performance at any time thereafter nor shall the waiver of a
        breach constitute a waiver of any subsequent breach.
      </p>
    </section>

    <section style={{ marginBottom: "30px" }}>
      <h2 style={{ fontSize: "1.8rem", marginBottom: "15px" }}>
        Translation Interpretation
      </h2>
      <p>
        These Terms and Conditions may have been translated if We have
        made them available to You on our Service. You agree that the
        original English text shall prevail in the case of a dispute.
      </p>
    </section>

    <section style={{ marginBottom: "30px" }}>
      <h2 style={{ fontSize: "1.8rem", marginBottom: "15px" }}>
        Changes to These Terms and Conditions
      </h2>
      <p>
        We reserve the right, at Our sole discretion, to modify or replace
        these Terms at any time. If a revision is material We will make
        reasonable efforts to provide at least 30 days' notice prior to
        any new terms taking effect. What constitutes a material change
        will be determined at Our sole discretion.
      </p>
      <p>
        By continuing to access or use Our Service after those revisions
        become effective, You agree to be bound by the revised terms. If
        You do not agree to the new terms, in whole or in part, please
        stop using the website and the Service.
      </p>
    </section>

    <section style={{ marginBottom: "30px" }}>
      <h2 style={{ fontSize: "1.8rem", marginBottom: "15px" }}>
        Contact Us
      </h2>
      <p>
        If you have any questions about these Terms and Conditions, You
        can contact us:
      </p>
      <ul
        style={{
          listStyle: "disc",
          marginLeft: "20px",
          marginTop: "10px",
        }}
      >
        <li>
          By visiting this page on our website:{" "}
          <a
            href="https://shapingteam.com/contact/"
            style={{ color: "#007bff" }}
          >
            https://shapingteam.com/contact/
          </a>
        </li>
      </ul>
    </section>
  </div>
</div>
    </Layout>
  );
};

export default TermsAndConditions;
