// components/seo/CanonicalLink.jsx
import React from 'react';

// Next.js App Router automatically handles the <head> using the 'metadata' object or built-in components
// However, the <link rel="canonical"> tag is often best managed directly for maximum control.

const CanonicalLink = ({ path }) => {
  // Determine the full URL for the canonical link
  // Use a sensible default like the environment variable or a base URL
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000/';

  const fullUrl = `${baseUrl}${path}`;

  return (
    // We use the standard HTML tag directly.
    // In Next.js App Router, these go directly into the <head> element.
    <link rel="canonical" href={fullUrl} />
  );
};

export default CanonicalLink;