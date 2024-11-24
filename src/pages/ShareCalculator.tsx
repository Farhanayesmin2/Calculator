import React, { useState } from 'react';
import { Calculator, Percent } from 'lucide-react';

const ShareCalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [result, setResult] = useState<{
    interest: number;
    total: number;
    monthlyInterest: number;
  } | null>(null);

  const calculateReturns = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate);
    
    if (p && r) {
      const monthlyRate = r / 12 / 100;
      const months = 6;
      const interest = p * monthlyRate * months;
      const total = p + interest;
      const monthlyInterest = interest / months;
      
      setResult({
        interest,
        total,
        monthlyInterest
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-3xl mx-auto">
        <div className="glass-card p-6 mb-12">
          <div className="flex items-center mb-6">
            <Percent className="h-8 w-8 text-indigo-400 mr-3" />
            <h1 className="text-3xl font-bold text-white">6 Month Share Certificate Calculator</h1>
          </div>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300">Principal Amount ($)</label>
              <input
                type="number"
                value={principal}
                onChange={(e) => setPrincipal(e.target.value)}
                className="mt-1 block w-full rounded-md input-dark"
                placeholder="Enter principal amount"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">Annual Interest Rate (%)</label>
              <input
                type="number"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                className="mt-1 block w-full rounded-md input-dark"
                placeholder="Enter annual interest rate"
                step="0.01"
              />
            </div>

            <button
              onClick={calculateReturns}
              className="w-full btn-primary py-2 px-4 rounded-md"
            >
              Calculate Returns
            </button>

            {result && (
              <div className="mt-4 p-4 glass-card">
                <h3 className="text-lg font-semibold text-white mb-2">6 Month Certificate Returns:</h3>
                <div className="space-y-2 text-gray-300">
                  <p>Total Interest Earned: ${result.interest.toFixed(2)}</p>
                  <p>Monthly Interest: ${result.monthlyInterest.toFixed(2)}</p>
                  <p className="text-lg font-semibold text-white pt-2 border-t border-gray-700">
                    Maturity Value: ${result.total.toFixed(2)}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        <article className="prose lg:prose-xl max-w-none">
          <h2>Understanding Share Certificates</h2>
          
          <p>Share certificates, also known as certificates of deposit (CDs), are time-deposit accounts that typically offer higher interest rates than regular savings accounts in exchange for keeping your money invested for a fixed period.</p>

          <h3>Benefits of 6-Month Share Certificates</h3>
          
          <ul>
            <li>Higher yields than traditional savings accounts</li>
            <li>Guaranteed returns</li>
            <li>Short-term commitment</li>
            <li>NCUA insurance protection</li>
          </ul>

          <h3>Key Considerations</h3>
          
          <p>Before investing in a share certificate, consider these factors:</p>
          
          <ul>
            <li>Interest rates and APY</li>
            <li>Minimum deposit requirements</li>
            <li>Early withdrawal penalties</li>
            <li>Renewal options</li>
          </ul>

          <h3>Investment Strategy</h3>
          
          <p>Six-month share certificates can be particularly useful for:</p>
          
          <ul>
            <li>Short-term savings goals</li>
            <li>Emergency fund building</li>
            <li>Conservative investment portfolios</li>
            <li>CD laddering strategies</li>
          </ul>
        </article>
      </div>
    </div>
  );
};

export default ShareCalculator;