import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

export function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}



// utils/fontUtils.js

// System fonts that are commonly available across platforms
export const systemFonts = [
  "Arial", "Helvetica", "Times New Roman", "Courier New",
  "Georgia", "Verdana", "Impact", "Comic Sans MS", "Trebuchet MS",
  "Arial Black", "Palatino", "Garamond", "Bookman", "Tahoma",
  "Lucida Console", "Monaco", "Consolas", "Andale Mono"
];

// Google Fonts - popular ones
export const googleFonts = [
  "Open Sans", "Roboto", "Lato", "Montserrat", "Oswald",
  "Source Sans Pro", "Raleway", "PT Sans", "Lora", "Ubuntu",
  "Playfair Display", "Merriweather", "Nunito", "Poppins", "Inter"
];

// Load Google Font dynamically
export const loadGoogleFont = (fontFamily) => {
  return new Promise((resolve, reject) => {
    // Check if font is already loaded
    if (document.fonts.check(`12px "${fontFamily}"`)) {
      resolve();
      return;
    }

    // Create link element
    const link = document.createElement('link');
    link.href = `https://fonts.googleapis.com/css2?family=${fontFamily.replace(/\s+/g, '+')}&display=swap`;
    link.rel = 'stylesheet';

    link.onload = () => {
      // Wait for font to be ready
      document.fonts.load(`12px "${fontFamily}"`).then(() => {
        resolve();
      }).catch(reject);
    };

    link.onerror = reject;
    document.head.appendChild(link);
  });
};

// Load custom font from file
export const loadCustomFont = (fontFile, fontFamily) => {
  return new Promise((resolve, reject) => {
    const fontFace = new FontFace(fontFamily, `url(${fontFile})`);

    fontFace.load().then((loadedFont) => {
      document.fonts.add(loadedFont);
      resolve();
    }).catch(reject);
  });
};

// Check if font is available
export const isFontAvailable = (fontFamily) => {
  return document.fonts.check(`12px "${fontFamily}"`);
};

// Get all available fonts
export const getAllFonts = () => {
  const availableFonts = [];

  // Add system fonts
  systemFonts.forEach(font => {
    if (isFontAvailable(font)) {
      availableFonts.push({ name: font, type: 'system' });
    }
  });

  // Add Google fonts (you might want to check which are loaded)
  googleFonts.forEach(font => {
    availableFonts.push({ name: font, type: 'google' });
  });

  return availableFonts;
};








