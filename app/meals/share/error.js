"use client"; // error.js needs to be a client side component

import React from "react";

export default function Error({}) {
  return (
    <main className="error">
      <h1>Failed to create a meal</h1>
      <p>Failed to create your meal data. Please try again later.</p>
    </main>
  );
}
