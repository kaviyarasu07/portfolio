// Kaviyarasu Portfolio - React (Minimal White, Photo Hero)
// Save as: src/Portfolio.jsx
// Expects: src/assets/kavi.jpg to exist (your uploaded photo)
// TailwindCSS required (already in project).

import React from "react";
import kavi from "./assets/kavi.jpg";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased font-sans">
      <header className="max-w-5xl mx-auto px-6 py-8 flex items-center justify-between">
        <div>
          <h1 className="text-lg font-semibold">Kaviyarasu N. S</h1>
          <p className="text-sm text-gray-500">Software Developer — Java, Spring Boot & Microservices
            
            {/* German Learning */}
            <p className="text-sm text-gray-500 mt-1">🇩🇪 Learning German (A1)</p></p>
        </div>
        <nav className="space-x-4 text-sm">
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">I build reliable, scalable backend systems.</h2>
            <p className="mt-4 text-gray-600 max-w-2xl">
              I’m a backend engineer passionate about building reliable, scalable and high-performance systems. With
              hands-on experience in Java, Spring Boot and microservices, I focus on designing clean architectures and solving
              real-world problems with elegant engineering.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/KAVIYARASU_NS.pdf" download className="inline-block bg-black text-white px-4 py-2 rounded-md text-sm shadow-sm">Download Resume</a>
              <a href="#projects" className="inline-block border border-gray-300 px-4 py-2 rounded-md text-sm">View Projects</a>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg">
                <h4 className="text-xs text-gray-500">Primary</h4>
                <p className="mt-1 text-sm">Backend Engineering • Microservices</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="text-xs text-gray-500">Tech</h4>
                <p className="mt-1 text-sm">Java • Spring Boot • Kafka • Redis • PostgreSQL</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="text-xs text-gray-500">Goal</h4>
                <p className="mt-1 text-sm">Build robust and scalable applications that deliver seamless experiences to millions of users globally.</p>
              </div>
            </div>
          </div>

          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg flex-shrink-0">
            <img src={kavi} alt="Kaviyarasu" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-5xl mx-auto px-6 py-10">
        <h3 className="text-2xl font-semibold">Projects</h3>
        <p className="mt-2 text-gray-600">Selected work — full projects with code and architecture.</p>

        <div className="mt-6 grid gap-6">
          <article className="p-6 border rounded-lg">
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <div className="flex-1">
                <h4 className="text-lg font-medium">AI Interview Assistant App</h4>
                <p className="mt-2 text-gray-700">
                  AI-powered mock interviews for students with text & speech evaluation, performance analytics and resume feedback.
                </p>

                <ul className="mt-3 text-sm text-gray-600 grid grid-cols-1 md:grid-cols-2 gap-2">
                  <li><strong>Tech:</strong> Java, Spring Boot, React, NLP models, Docker</li>
                  <li><strong>Highlights:</strong> Speech/text analysis, scheduled mocks, AI scoring</li>
                </ul>

                <div className="mt-4 flex gap-3">
                  <a href="https://github.com/kaviyarasu07" target="_blank" rel="noreferrer" className="text-sm hover:underline">GitHub</a>
                </div>
              </div>
            </div>
          </article>

          <article className="p-6 border rounded-lg">
            <h4 className="text-lg font-medium">Ticket Booking — Microservices Platform</h4>
            <p className="mt-2 text-gray-700">
              Microservices-based ticket booking for concerts and movies. Services: Event, Theatre, Booking, Payment, Notification.
              Seat-locking with Redis and event-driven flows via Kafka.
            </p>

            <ul className="mt-3 text-sm text-gray-600 grid grid-cols-1 md:grid-cols-2 gap-2">
              <li><strong>Tech:</strong> Java, Spring Boot, Kafka, Redis, PostgreSQL, Docker, Kubernetes</li>
              <li><strong>Highlights:</strong> Distributed locks, idempotent payments, event-driven design</li>
            </ul>

            <div className="mt-4">
              <a href="https://github.com/kaviyarasu07" target="_blank" rel="noreferrer" className="text-sm hover:underline">GitHub</a>
            </div>
          </article>

          <article className="p-6 border rounded-lg">
            <h4 className="text-lg font-medium">Other Java Projects</h4>
            <p className="mt-2 text-gray-700">Utilities and backend services — REST APIs, data processing and automation tools.</p>
            <div className="mt-4">
              <a href="https://github.com/kaviyarasu07" target="_blank" rel="noreferrer" className="text-sm hover:underline">View GitHub</a>
            </div>
          </article>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-10">
        <h3 className="text-2xl font-semibold">About Me</h3>
        <div className="mt-4 text-gray-700 space-y-4">
          <p>
            I’m a software developer with 5+ years of experience building production-grade backend systems in Java and Spring Boot.
            I enjoy building scalable architectures, distributed systems, and clean microservice designs.
          </p>

          <p>
            Currently building two major projects: a Microservices-based Ticket Booking Platform and an AI-powered Interview Assistant App.
            My aim is to join engineering teams in Germany and contribute to software that impacts millions of users.
          </p>

           <p>
           Activily learing Deutsch (A1)
          </p>

          <div className="mt-4">
            <h4 className="text-sm font-medium text-gray-700">Experience & Education</h4>
            <ul className="mt-2 list-disc list-inside text-gray-700">
              <li>5+ years — Backend development (Java, Spring Boot)</li>
              <li>Experience with Docker, Kubernetes, and GCP components</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      <footer id="contact" className="max-w-5xl mx-auto px-6 py-10 border-t">
        <h3 className="text-2xl font-semibold">Contact</h3>
        <p className="mt-3 text-gray-700">I’m open to backend roles in Germany. Let’s connect!</p>

      <div className="mt-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <span className="text-sm">+91 99524 65664</span>
          <a href="mailto:kaviyarasutt@gmail.com" className="text-sm hover:underline">kaviyarasutt@gmail.com</a>
          <a href="https://www.linkedin.com/in/kaviyarasu-nehru-6a5292162/" target="_blank" rel="noreferrer" className="text-sm hover:underline">LinkedIn</a>
          <a href="https://github.com/kaviyarasu07" target="_blank" rel="noreferrer" className="text-sm hover:underline">GitHub</a>
        </div>

        <p className="mt-6 text-xs text-gray-400">© {new Date().getFullYear()} Kaviyarasu N. S — Built with care.</p>
      </footer>
    </div>
  );
}


