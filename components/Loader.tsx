"use client";

import { useState, useEffect } from "react";

export default function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1000); // 1 secondes comme dans ton script original

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div id="loader">
      <div className="spinner"></div>
    </div>
  );
}



