"use client";

import Script from "next/script";

export default function ChatbotWidget() {
  return (
    <Script
      src="https://charbot-mobi.vercel.app/chatbot-widget.js"
      data-position="bottom-right"
      data-theme="light"
      data-primary-color="#007BFF"
      data-width="300px"
      data-height="400px"
      strategy="afterInteractive"
      data-chat_url="https://moby.host/app/hAW9B"
    />
  );
}
