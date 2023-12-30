// ToastContact.jsx
import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Function to show a toast notification for contact-related messages
const showToastContact = (message, type) => {
  // Display a toast with the provided message and configuration options
  toast(message, {
    position: 'top-center', // Set the position of the toast
    autoClose: 3000, // Auto-close the toast after 3000 milliseconds (3 seconds)
    hideProgressBar: false, // Display a progress bar while the toast is visible
    closeOnClick: true, // Close the toast when clicked
    pauseOnHover: true, // Pause the auto-close timer when the user hovers over the toast
    draggable: true, // Allow the user to drag the toast
    bodyClassName: 'custom-toast-body', // Apply a custom class to the toast body
    type: type || 'info', // Set the type of the toast (default to 'info' if not specified)
  });
};

export default showToastContact;
