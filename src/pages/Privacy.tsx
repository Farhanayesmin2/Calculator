import React from 'react';
import { Shield } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <div className="flex items-center mb-6">
            <Shield className="h-8 w-8 text-indigo-600 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
          </div>

          <div className="prose lg:prose-xl">
            <p>Last updated: {new Date().toLocaleDateString()}</p>

            <h2>Introduction</h2>
            <p>At Horn Calculator, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.</p>

            <h2>Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide to us when you:</p>
            <ul>
              <li>Contact us through our contact form</li>
              <li>Subscribe to our newsletter</li>
              <li>Register for an account</li>
            </ul>

            <h3>Usage Information</h3>
            <p>We automatically collect certain information about your device when you visit our website, including:</p>
            <ul>
              <li>Browser type</li>
              <li>Operating system</li>
              <li>IP address</li>
              <li>Pages visited</li>
              <li>Time and date of visits</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide and maintain our services</li>
              <li>Respond to your inquiries and requests</li>
              <li>Improve our website and user experience</li>
              <li>Send newsletters and updates (with your consent)</li>
              <li>Monitor and analyze usage patterns</li>
            </ul>

            <h2>Data Security</h2>
            <p>We implement appropriate technical and organizational security measures to protect your information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure.</p>

            <h2>Third-Party Services</h2>
            <p>We may use third-party services that collect, monitor, and analyze user data to improve our service. These third parties have access to your personal information only to perform specific tasks on our behalf.</p>

            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
              <li>Object to data processing</li>
            </ul>

            <h2>Changes to This Policy</h2>
            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.</p>

            <h2>Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at privacy@horncalculator.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;