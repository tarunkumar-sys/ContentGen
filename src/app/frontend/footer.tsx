import React from 'react';
import { Play } from "lucide-react";
import { Linkedin, Github, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className=" text-white bg-[#111]">
      <div className="bg-purple-400 rounded-2xl my-10 p-12 text-center flex flex-col items-center max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Stay Connected With Us________</h2>
        <p className="text-base text-center max-w-2xl mb-4">
          Have a question, suggestion, or proposal? We're always open to hearing from you. Whether it's support, collaboration, or feedback — reach out and let's connect!
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-10 text-sm">
        <div>
          <h3 className="font-semibold mb-3 text-lg">Sign up for our newsletter</h3>
          <p className="mb-4 text-white">
            Stay in the loop! We share only the most important updates — no spam, just value.
          </p>
          <button className="border border-purple-400 rounded-full px-6 py-2 hover:bg-purple-400 hover:text-black transition">
            Subscribe
          </button>
        </div>
        <div>
          <h3 className="font-semibold mb-3 text-lg">Help and services</h3>
          <ul className="space-y-2 text-white">
            <li>How it works</li>
            <li>FAQs</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3 text-lg">To explore</h3>
          <ul className="space-y-2 text-white">
            <li>Accommodations</li>
            <li>Experiences</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3 text-lg">Other possibilities</h3>
          <ul className="space-y-2 text-white">
            <li>Giveaways</li>
            <li>Partnerships</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-300 py-6 px-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
        <p className="mb-4 md:mb-0">© 2025 ScribeNova. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-5 w-5 hover:text-blue-400 transition" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Github className="h-5 w-5 hover:text-purple-500 transition" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Twitter className="h-5 w-5 hover:text-blue-800 transition" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Instagram className="h-5 w-5 hover:text-pink-500 transition" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
