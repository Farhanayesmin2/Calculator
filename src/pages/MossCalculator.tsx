import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

const MossCalculator = () => {
  const [frequency, setFrequency] = useState('');
  const [velocity, setVelocity] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const calculateMoss = () => {
    const f = parseFloat(frequency);
    const v = parseFloat(velocity);
    
    if (f && v) {
      // Basic Moss number calculation (simplified for example)
      const mossNumber = v / f;
      setResult(mossNumber);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-6 mb-12">
          <div className="flex items-center mb-6">
            <Calculator className="h-8 w-8 text-indigo-600 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900">Moss Number Calculator</h1>
          </div>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Frequency (Hz)</label>
              <input
                type="number"
                value={frequency}
                onChange={(e) => setFrequency(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Enter frequency"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Velocity (m/s)</label>
              <input
                type="number"
                value={velocity}
                onChange={(e) => setVelocity(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Enter velocity"
              />
            </div>

            <button
              onClick={calculateMoss}
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
            >
              Calculate
            </button>

            {result !== null && (
              <div className="mt-4 p-4 bg-gray-50 rounded-md">
                <h3 className="text-lg font-semibold text-gray-900">Results:</h3>
                <p className="text-gray-700">Moss Number: {result.toFixed(4)}</p>
              </div>
            )}
          </div>
        </div>

        <article className="prose lg:prose-xl max-w-none">
          <h2>Understanding the Moss Number in Acoustics: A Comprehensive Guide</h2>
          
          <p>The Moss number is a fundamental dimensionless parameter in acoustics that plays a crucial role in understanding and characterizing sound propagation and acoustic phenomena. This comprehensive guide explores the significance, applications, and implications of the Moss number in acoustic engineering and design.</p>

          <h3>What is the Moss Number?</h3>
          
          <p>The Moss number represents the ratio between particle velocity and frequency in acoustic systems. It serves as a key indicator of acoustic behavior and helps engineers and designers optimize acoustic systems for various applications.</p>

          <h3>Significance in Acoustic Engineering</h3>
          
          <p>Understanding the Moss number is essential for:</p>
          <ul>
            <li>Acoustic waveguide design</li>
            <li>Sound propagation analysis</li>
            <li>Acoustic impedance matching</li>
            <li>Resonator design</li>
          </ul>

          <h3>Applications</h3>
          
          <p>The Moss number finds practical applications in:</p>
          
          <ol>
            <li><strong>Architectural Acoustics:</strong> Optimizing room acoustics and sound distribution</li>
            <li><strong>Musical Instrument Design:</strong> Understanding and improving instrument resonance</li>
            <li><strong>Industrial Noise Control:</strong> Developing effective noise reduction solutions</li>
            <li><strong>Audio Equipment Design:</strong> Enhancing speaker and microphone performance</li>
          </ol>

          <h3>Calculation Methods</h3>
          
          <p>The Moss number calculation involves:</p>
          
          <ul>
            <li>Determining particle velocity</li>
            <li>Measuring or calculating frequency</li>
            <li>Considering environmental factors</li>
            <li>Accounting for material properties</li>
          </ul>

          <h3>Practical Implications</h3>
          
          <p>The Moss number influences:</p>
          
          <ul>
            <li>Wave propagation characteristics</li>
            <li>Acoustic impedance matching</li>
            <li>Energy transfer efficiency</li>
            <li>System resonance behavior</li>
          </ul>

          <h3>Design Considerations</h3>
          
          <p>When working with the Moss number, consider:</p>
          
          <ol>
            <li>Operating frequency range</li>
            <li>Material properties</li>
            <li>Environmental conditions</li>
            <li>System requirements</li>
          </ol>

          <h3>Conclusion</h3>
          
          <p>The Moss number remains a vital tool in acoustic engineering, providing crucial insights into sound behavior and system performance. Understanding and correctly calculating this parameter ensures optimal acoustic design and performance across various applications.</p>
        </article>
      </div>
    </div>
  );
};

export default MossCalculator;