import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

const Home = () => {
  const [throat, setThroat] = useState('');
  const [mouth, setMouth] = useState('');
  const [length, setLength] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const calculateBiradialHorn = () => {
    const t = parseFloat(throat);
    const m = parseFloat(mouth);
    const l = parseFloat(length);
    
    if (t && m && l) {
      // Basic biradial horn calculation (simplified for example)
      const flareRate = (m - t) / l;
      setResult(flareRate);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-6 mb-12">
          <div className="flex items-center mb-6">
            <Calculator className="h-8 w-8 text-indigo-600 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900">Biradial Horn Calculator</h1>
          </div>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Throat Diameter (mm)</label>
              <input
                type="number"
                value={throat}
                onChange={(e) => setThroat(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Enter throat diameter"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Mouth Diameter (mm)</label>
              <input
                type="number"
                value={mouth}
                onChange={(e) => setMouth(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Enter mouth diameter"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Horn Length (mm)</label>
              <input
                type="number"
                value={length}
                onChange={(e) => setLength(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Enter horn length"
              />
            </div>

            <button
              onClick={calculateBiradialHorn}
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
            >
              Calculate
            </button>

            {result !== null && (
              <div className="mt-4 p-4 bg-gray-50 rounded-md">
                <h3 className="text-lg font-semibold text-gray-900">Results:</h3>
                <p className="text-gray-700">Flare Rate: {result.toFixed(4)} mm/mm</p>
              </div>
            )}
          </div>
        </div>

        <article className="prose lg:prose-xl max-w-none">
          <h2>Understanding Biradial Horn Design: A Comprehensive Guide</h2>
          
          <p>Biradial horns represent a significant advancement in acoustic engineering, combining efficiency with practical design considerations. These specialized waveguides play a crucial role in professional sound reinforcement systems, offering superior control over acoustic radiation patterns while maintaining consistent frequency response.</p>

          <h3>What is a Biradial Horn?</h3>
          
          <p>A biradial horn features two distinct radii of curvature: one in the vertical plane and another in the horizontal plane. This design allows for independent control of vertical and horizontal coverage patterns, making it particularly valuable in professional audio applications where precise sound distribution is essential.</p>

          <h3>Key Design Parameters</h3>
          
          <ul>
            <li><strong>Throat Diameter:</strong> The entry point where sound waves begin their journey through the horn</li>
            <li><strong>Mouth Diameter:</strong> The exit point where sound waves are released into the environment</li>
            <li><strong>Horn Length:</strong> The total path length from throat to mouth</li>
            <li><strong>Flare Rate:</strong> The rate at which the horn expands from throat to mouth</li>
          </ul>

          <h3>Applications and Benefits</h3>
          
          <p>Biradial horns find extensive use in:</p>
          <ul>
            <li>Professional sound reinforcement systems</li>
            <li>Concert venues and theaters</li>
            <li>High-end audio installations</li>
            <li>Public address systems</li>
          </ul>

          <h3>Design Considerations</h3>
          
          <p>When designing a biradial horn, several factors must be considered:</p>
          
          <ol>
            <li><strong>Frequency Response:</strong> The horn's dimensions directly affect its low-frequency cutoff and overall frequency response</li>
            <li><strong>Coverage Pattern:</strong> Horizontal and vertical coverage angles must be carefully calculated for optimal sound distribution</li>
            <li><strong>Phase Response:</strong> Proper design ensures minimal phase distortion throughout the operating range</li>
            <li><strong>Size Constraints:</strong> Physical dimensions must be practical for the intended application</li>
          </ol>

          <h3>Optimization Techniques</h3>
          
          <p>Modern horn design often employs computational methods to optimize performance. Key optimization goals include:</p>
          
          <ul>
            <li>Minimizing distortion</li>
            <li>Achieving uniform coverage</li>
            <li>Maximizing efficiency</li>
            <li>Controlling directivity</li>
          </ul>

          <h3>Conclusion</h3>
          
          <p>Biradial horn design represents a perfect balance between theoretical acoustics and practical implementation. Understanding the fundamental principles and using proper calculation tools ensures optimal results in professional audio applications. This calculator serves as an essential tool for audio professionals and enthusiasts alike, streamlining the design process while maintaining accuracy and reliability.</p>
        </article>
      </div>
    </div>
  );
};

export default Home;