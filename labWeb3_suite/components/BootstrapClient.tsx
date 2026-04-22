"use client";

import { useEffect } from "react";

// Charge le JS Bootstrap côté client (nécessaire pour le menu hamburger, etc.)
export default function BootstrapClient() {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return null;
}
