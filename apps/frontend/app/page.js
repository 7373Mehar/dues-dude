"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("http://localhost:3001/api/test")
      .then((res) => res.json())
      .then((data) => setMessage(data.message || data.error))
      .catch(() => setMessage("Failed to fetch data"));
  }, []);

  return <h1>{message}</h1>;
}
