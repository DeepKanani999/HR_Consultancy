"use client";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

export default function UserInfoPopup({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sheetData, setSheetData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Normalize phone numbers to compare reliably (keeps digits only, trims leading 0s except country code '91')
  const normalizePhone = (val) => {
    if (!val) return "";
    const digits = String(val).replace(/\D/g, "");
    // If starts with 91 and length >= 12, keep. Else remove leading zeros.
    if (digits.startsWith("91") && digits.length >= 12) return digits;
    return digits.replace(/^0+/, "");
  };

  const isDuplicateNumber = (phone) => {
    const target = normalizePhone(phone);
    if (!target) return false;
    try {
      return (sheetData || []).some((row) => {
        // Object shape: { Name, Number } or variations in casing
        if (row && typeof row === "object" && !Array.isArray(row)) {
          const candidate =
            row.Number ?? row.number ?? row.Phone ?? row.phone ?? row.WhatsApp ?? row.whatsapp ?? "";
          return normalizePhone(candidate) === target;
        }
        // Array shape: [Name, Number, ...]
        if (Array.isArray(row)) {
          const candidate = row[1] ?? row[0] ?? "";
          return normalizePhone(candidate) === target;
        }
        return false;
      });
    } catch {
      return false;
    }
  };

  const toastConfig = {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  };

  useEffect(() => {
    fetchSheetData();
  }, []);

  const fetchSheetData = async () => {
    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbwtV8WqKoB2ag9CJoz-zEsi3HqFbm3Z5lia0h77JckgqwiRB84djIC4bXoEy9ultK0AEg/exec");
      const data = await response.json();

      if (data.status === "success") {
        setSheetData(data.data);
      } else {
        toast.error("Error: " + data.message, toastConfig);
        return [];
      }
    } catch (err) {
      toast.error("Fetch failed", toastConfig);
      return [];
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    // Client-side duplicate prevention using already-fetched sheetData
    if (isDuplicateNumber(formData.phone)) {
      toast.error("This number already exists in our records.", toastConfig);
      return;
    }

    try {
      setIsSubmitting(true);

      // Prepare form data
      const params = new URLSearchParams();
      params.append("Name", formData.name);
      params.append("Number", formData.phone);

      // Replace with your deployed web app URL
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwN42ThiHWprgmxQnI_nR_Bz3-v20cWehALZtBx3eIjb63oWQOXJ63mdMTvCXUh_wRQpg/exec",
        {
          method: "POST",
          body: params,
        }
      );

      const data = await response.json();

      if (data.status === "success") {
        // Show success toast and close popup
        toast.success("Your details have been submitted successfully!", toastConfig);
        // Refresh local cache to include the newly added number
        try { await fetchSheetData(); } catch {}
        onClose?.();
      } else {
        toast.error(data.message ? `Error: ${data.message}` : "Something went wrong", toastConfig);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to connect to Google Sheets.", toastConfig);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        background: "transparent",
        width: "100%",
        maxWidth: "500px",
        padding: "24px",
        borderRadius: "12px",
        position: "relative",
      }}
    >
      {/* Header */}
      <h2
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          color: "#69C8C7",
          marginBottom: "8px",
        }}
      >
        Get More Details
      </h2>
      <p style={{ color: "#374151", marginBottom: "20px" }}>
        Enter your name and WhatsApp number to get product updates and offers.
      </p>

      {/* Close Button */}
      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: "16px",
          right: "16px",
          fontSize: "24px",
          background: "none",
          border: "none",
          color: "#6b7280",
          cursor: "pointer",
        }}
      >
        &times;
      </button>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            value={formData.name}
            onChange={handleChange}
            disabled={isSubmitting}
            style={{
              width: "100%",
              padding: "12px",
              border: "1px solid #ccc",
              borderRadius: "6px",
              fontSize: "16px",
              opacity: isSubmitting ? 0.7 : 1,
            }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <input
            type="tel"
            name="phone"
            placeholder="Enter WhatsApp number"
            required
            maxLength={13}
            value={formData.phone}
            onChange={handleChange}
            disabled={isSubmitting}
            style={{
              width: "100%",
              padding: "12px",
              border: "1px solid #ccc",
              borderRadius: "6px",
              fontSize: "16px",
              opacity: isSubmitting ? 0.7 : 1,
            }}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            width: "100%",
            backgroundColor: "#69C8C7",
            color: "white",
            padding: "12px",
            borderRadius: "8px",
            fontSize: "18px",
            fontWeight: "600",
            cursor: isSubmitting ? "not-allowed" : "pointer",
            border: "none",
            opacity: isSubmitting ? 0.7 : 1,
          }}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>

        <button
          type="button"
          onClick={onClose}
          disabled={isSubmitting}
          style={{
            marginTop: "12px",
            width: "100%",
            background: "none",
            border: "none",
            color: "gray",
            fontSize: "14px",
            textDecoration: "underline",
            cursor: isSubmitting ? "not-allowed" : "pointer",
            opacity: isSubmitting ? 0.7 : 1,
          }}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}
