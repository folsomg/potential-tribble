// Utility functions
export function formatDate(date) {
    return date.toISOString().split('T')[0]; // updated
  // Update: commit 58
}

export function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
} // updated
