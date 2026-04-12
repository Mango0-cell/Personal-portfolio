'use client';

import dynamic from 'next/dynamic';
import '../src/i18n'; // Initialize i18n (side-effect)

// Disable SSR — this is a browser-only SPA (WebGL, Lenis, i18next-http-backend)
const App = dynamic(() => import('../src/App'), { ssr: false });

export default function Page() {
  return <App />;
}
