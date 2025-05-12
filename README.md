<!--
  README.md for SoftSell — a React app for marketing unused software licenses
-->

<div align="center">
  <h1>SoftSell</h1>
  <p><strong>Turn idle software licenses into instant cash.</strong></p>
  <p>
    <a href="#overview">Overview</a> •
    <a href="#features-implemented">Features</a> •
  </p>
</div>

---

## Table of Contents

1. [Overview](#overview)  
2. [Features Implemented](#features-implemented)  
3. [Design Choices](#design-choices)  
4. [Time Spent](#time-spent)  
5. [Tech Stack](#tech-stack)  

---

## Overview

SoftSell is a responsive, single-page React application that enables organizations to unlock value in idle or surplus software licenses through a secure, fast, and fair process. The site features a Hero banner with CTA, “How It Works” steps, “Why Choose Us” highlights, customer testimonials, a contact form with embedded Google Maps, and an AI-powered chat assistant.

---

## Features Implemented

- **Hero Section** – Custom headline, subheading, and “Get a Quote” CTA button.  
- **How It Works** – Three-step visual process (Upload → Valuation → Payment) using React-Feather icons.  
- **Why Choose Us** – Three benefit tiles with icons and brief descriptions.  
- **Customer Testimonials** – Two dummy reviews with name, role, and company, styled as cards.  
- **Contact Form** – Front-end validation for Name, Email, Company, License Type (dropdown), and Message fields; embedded Google Maps iframe.  
- **AI ChatBot** – Floating chat widget powered by Google Gemini (via `@google/genai`), with preset Q&A and fallback responses.  
- **Responsive Navbar** – Fixed-top navbar that transitions from transparent to colored on scroll.
- **Animations** – On-scroll reveals using AOS for fade, zoom, and flip effects.

---

## Design Choices

- **Color Palette** – Teal, green, and gray for a modern, trust-inspiring aesthetic; switches to dark neutrals in night mode.  
- **Typography** – “Poppins” for a clean, readable sans-serif look, with system-font fallbacks.  
- **Layout** – Bootstrap grid ensures mobile responsiveness; `.ratio` utility for responsive iframes.  
- **Iconography** – React-Feather icons for lightweight, consistent visuals.  
- **Transitions** – Subtle hover lifts on cards and smooth navbar color shifts to reinforce interactivity.

---

## Time Spent

- Planning & Wireframing: 1.5 hours  
- Setup & Component Scaffolding: 2 hours  
- Styling & Layout: 3 hours  
- Animations & Interactivity: 1.5 hours  
- AI ChatBot Integration: 2 hours  
- Testing & Responsiveness: 1 hour  
- README & Documentation: 1 hour  

**Total**: ~12 hours

---

## Tech Stack

- **Framework**: React (via Vite)  
- **Styling**: Bootstrap 5 + Custom CSS with CSS Variables  
- **Animations**: AOS (Animate On Scroll)  
- **Icons**: react-feather  
- **AI**: `@google/genai` (Gemini 2.0 Flash)  
- **Maps**: Google Maps Embed API (iframe)  
- **State Management**: React `useState` & `useEffect`  
- **Hosting**: Vercel

---
