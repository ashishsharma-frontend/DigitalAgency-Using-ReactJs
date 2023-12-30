import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/**
 * Display a toast notification with the specified message.
 *
 * @param {string} message - The message to be displayed in the toast.
 */
const showToast = (message) => {
  // Display a toast with the provided message and configuration options
  toast(message, {
    position: "top-left",
    autoClose: 5000,
    hideProgressBar: false,
    newestOnTop: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: true,
    theme: "dark",
    toastClassName: "custom-toast", // Apply a custom class to the toast
    bodyClassName: "custom-toast-body", // Apply a custom class to the toast body
    progressStyle: { backgroundColor: "#FFF78A" }, // Customize the progress bar color
  });
};

export default showToast;
