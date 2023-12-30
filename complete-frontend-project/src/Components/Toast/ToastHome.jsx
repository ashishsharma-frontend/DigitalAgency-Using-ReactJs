// Toast.jsx
import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Function to show a toast notification with the specified message
const showToast = (message) => {
  // Display a toast with the provided message and configuration options
  toast(message , {
    position: 'bottom-right', // Set the position of the toast
    autoClose: 5000, // Auto-close the toast after 5000 milliseconds (5 seconds)
    hideProgressBar: false, // Display a progress bar while the toast is visible
    newestOnTop: false, // Place the newest toast at the bottom
    closeOnClick: true, // Close the toast when clicked
    rtl: false, // Set to true for right-to-left languages
    pauseOnFocusLoss: true, // Pause the auto-close timer when the window loses focus
    draggable: true, // Allow the user to drag the toast
    pauseOnHover: true, // Pause the auto-close timer when the user hovers over the toast
    theme: 'dark', // Set the theme of the toast (you can use 'light' or 'dark')
    toastClassName: 'custom-toast', // Apply a custom class to the toast
    bodyClassName: 'custom-toast-body', // Apply a custom class to the toast body
  });
};

export default showToast;
