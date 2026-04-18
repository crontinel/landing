#!/usr/bin/env node
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const W = 1200, H = 630;

// SVG logo (green accent version)
const logoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120">
  <defs>
    <linearGradient id="crl-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#166534"/>
      <stop offset="100%" stop-color="#15803d"/>
    </linearGradient>
  </defs>
  <circle cx="60" cy="60" r="56" fill="url(#crl-bg)"/>
  <circle cx="60" cy="60" r="36" stroke="#052e16" stroke-width="6" fill="none"/>
  <line x1="60" y1="60" x2="60" y2="34" stroke="#052e16" stroke-width="6" stroke-linecap="round"/>
  <line x1="60" y1="60" x2="74" y2="68" stroke="#052e16" stroke-width="5" stroke-linecap="round"/>
  <circle cx="60" cy="60" r="5" fill="#052e16"/>
  <circle cx="82" cy="28" r="10" fill="#22c55e"/>
</svg>`;

// Main OG image SVG
const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a0a0a"/>
      <stop offset="100%" stop-color="#000000"/>
    </linearGradient>
    <linearGradient id="glow" x1="50%" y1="0%" x2="50%" y2="100%">
      <stop offset="0%" stop-color="#22c55e" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#22c55e" stop-opacity="0"/>
    </linearGradient>
    <filter id="glow-f">
      <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
      <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="${W}" height="${H}" fill="url(#bg-grad)"/>

  <!-- Subtle grid -->
  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1a1a1a" stroke-width="0.5"/>
  </pattern>
  <rect width="${W}" height="${H}" fill="url(#grid)" opacity="0.5"/>

  <!-- Top accent glow -->
  <ellipse cx="${W/2}" cy="0" rx="${W*0.6}" ry="${H*0.5}" fill="url(#glow)"/>

  <!-- Logo -->
  <g transform="translate(${W/2 - 60}, ${H*0.22})">
    ${logoSvg.replace(/<svg[^>]*>|<\/svg>/g, '')}
  </g>

  <!-- Brand name -->
  <text x="${W/2}" y="${H*0.22 + 145}"
    font-family="JetBrains Mono, monospace"
    font-size="38" font-weight="700" fill="white"
    text-anchor="middle" letter-spacing="-0.02em">Crontinel</text>

  <!-- Tagline -->
  <text x="${W/2}" y="${H*0.22 + 185}"
    font-family="Inter, system-ui, sans-serif"
    font-size="22" fill="#a1a1aa"
    text-anchor="middle">Know when your cron jobs stop working</text>

  <!-- Status bar -->
  <rect x="${W/2 - 160}" y="${H - 80}" width="320" height="40" rx="20" fill="#0f0f11" stroke="#1f1f23"/>
  <circle cx="${W/2 - 130}" cy="${H - 60}" r="5" fill="#22c55e" filter="url(#glow-f)"/>
  <text x="${W/2 - 115}" y="${H - 52}"
    font-family="JetBrains Mono, monospace"
    font-size="13" fill="#22c55e"
    text-anchor="start">all.systems.operational</text>
  <circle cx="${W/2 + 10}" cy="${H - 60}" r="3" fill="#3f3f46"/>
  <text x="${W/2 + 20}" y="${H - 52}"
    font-family="JetBrains Mono, monospace"
    font-size="13" fill="#71717a"
    text-anchor="start">crontinel.com</text>
</svg>`;

async function main() {
  const svgBuffer = Buffer.from(ogSvg);
  await sharp(svgBuffer, { density: 144 })
    .png()
    .toFile(path.join(__dirname, '../public/og-default.png'));
  console.log('OG image generated: public/og-default.png');
}

main().catch(console.error);
