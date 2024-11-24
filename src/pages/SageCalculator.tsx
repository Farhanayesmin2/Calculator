import React, { useState } from 'react';
import { Calculator, DollarSign } from 'lucide-react';

const SageCalculator = () => {
  const [users, setUsers] = useState('');
  const [modules, setModules] = useState<string[]>([]);
  const [result, setResult] = useState<{
    basePrice: number;
    modulePrice: number;
    total: number;
  } | null>(null);

  const moduleOptions = [
    { id: 'core', name: 'Core Financials', price: 150 },
    { id: 'billing', name: 'Advanced Billing', price: 100 },
    { id: 'inventory', name: 'Inventory Management', price: 125 },
    { id: 'project', name: 'Project Accounting', price: 110 },
    { id: 'revenue', name: 'Revenue Recognition', price: 90 }
  ];

  const calculatePrice = () => {
    const userCount = parseInt(users);
    if (userCount) {
      const basePrice = userCount * 100; // Base price per user
      const modulePrice = modules.reduce((total, moduleId) => {
        const module = moduleOptions.find(m => m.id === moduleId);
        return total + (module?.price || 0);
      }, 0);
      
      setResult({
        basePrice,
        modulePrice,
        total: basePrice + modulePrice
      });
    }
  };

  const handleModuleChange = (moduleId: string) => {
    setModules(prev => 
      prev.includes(moduleId)
        ? prev.filter(id => id !== moduleId)
        : [...prev, moduleId]
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-3xl mx-auto">
        <div className="glass-card p-6 mb-12">
          <div className="flex items-center mb-6">
            <DollarSign className="h-8 w-8 text-indigo-400 mr-3" />
            <h1 className="text-3xl font-bold text-white">Sage Intacct Pricing Calculator</h1>
          </div>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300">Number of Users</label>
              <input
                type="number"
                value={users}
                onChange={(e) => setUsers(e.target.value)}
                className="mt-1 block w-full rounded-md input-dark"
                placeholder="Enter number of users"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Select Modules</label>
              <div className="space-y-2">
                {moduleOptions.map(module => (
                  <label key={module.id} className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={modules.includes(module.id)}
                      onChange={() => handleModuleChange(module.id)}
                      className="rounded border-gray-700 text-indigo-600 focus:ring-indigo-500 bg-gray-800"
                    />
                    <span className="text-gray-300">{module.name} (${module.price}/month)</span>
                  </label>
                ))}
              </div>
            </div>

            <button
              onClick={calculatePrice}
              className="w-full btn-primary py-2 px-4 rounded-md"
            >
              Calculate Price
            </button>

            {result && (
              <div className="mt-4 p-4 glass-card">
                <h3 className="text-lg font-semibold text-white mb-2">Monthly Pricing Breakdown:</h3>
                <div className="space-y-2 text-gray-300">
                  <p>Base Price (Users): ${result.basePrice}</p>
                  <p>Module Price: ${result.modulePrice}</p>
                  <p className="text-lg font-semibold text-white pt-2 border-t border-gray-700">
                    Total Monthly Cost: ${result.total}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        <article className="prose lg:prose-xl max-w-none">
          <h2>Understanding Sage Intacct Pricing</h2>
          
          <p>Sage Intacct is a cloud-based financial management solution that offers flexible pricing based on your organization's needs. Understanding the pricing structure is crucial for making an informed decision about your investment in financial software.</p>

          <h3>Pricing Components</h3>
          
          <ul>
            <li>Base user licenses</li>
            <li>Optional modules</li>
            <li>Implementation services</li>
            <li>Training and support</li>
          </ul>

          <h3>Factors Affecting Cost</h3>
          
          <p>Several factors influence the total cost of your Sage Intacct implementation:</p>
          
          <ul>
            <li>Number of users</li>
            <li>Selected modules</li>
            <li>Contract length</li>
            <li>Integration requirements</li>
          </ul>

          <h3>ROI Considerations</h3>
          
          <p>When evaluating Sage Intacct, consider these potential returns on investment:</p>
          
          <ul>
            <li>Improved financial visibility</li>
            <li>Automated processes</li>
            <li>Reduced manual errors</li>
            <li>Better decision-making capabilities</li>
          </ul>
        </article>
      </div>
    </div>
  );
};

export default SageCalculator;