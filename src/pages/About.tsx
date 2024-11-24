import React from 'react';
import { Users } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <div className="flex items-center mb-6">
            <Users className="h-8 w-8 text-indigo-600 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900">About Us</h1>
          </div>

          <div className="prose lg:prose-xl">
            <p>Welcome to Horn Calculator, your trusted resource for acoustic engineering calculations and design tools. Our platform is dedicated to providing professional-grade calculators and educational resources for audio engineers, acousticians, and enthusiasts.</p>

            <h2>Our Mission</h2>
            <p>Our mission is to simplify complex acoustic calculations while maintaining professional accuracy. We strive to provide accessible tools that help audio professionals and enthusiasts achieve optimal results in their projects.</p>

            <h2>Our Expertise</h2>
            <p>With over two decades of combined experience in acoustic engineering and software development, our team brings together technical expertise and practical knowledge to create reliable calculation tools.</p>

            <h2>What We Offer</h2>
            <ul>
              <li>Professional-grade acoustic calculators</li>
              <li>Educational resources and articles</li>
              <li>Regular updates and improvements</li>
              <li>Technical support and guidance</li>
            </ul>

            <h2>Our Values</h2>
            <ul>
              <li><strong>Accuracy:</strong> We prioritize precision in all our calculations</li>
              <li><strong>Accessibility:</strong> Making complex tools user-friendly</li>
              <li><strong>Education:</strong> Providing comprehensive learning resources</li>
              <li><strong>Innovation:</strong> Continuously improving our tools</li>
            </ul>

            <p>Thank you for choosing Horn Calculator as your acoustic design companion. We're committed to supporting your professional journey in audio engineering and acoustics.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;