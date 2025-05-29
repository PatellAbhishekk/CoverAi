// utils.js

/**
 * Combines class names into a single string
 * Filters out falsy values (e.g., null, undefined, false)
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Checks if a string contains only alphanumeric characters (a–z, A–Z, 0–9)
 */
export function isAlphaNumeric(str) {
  const regex = /^[a-zA-Z0-9]*$/;
  return regex.test(str);
}
