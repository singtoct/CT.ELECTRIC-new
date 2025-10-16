
import React, { useState, useCallback } from 'react';
import type { DashboardData } from '../types';
import { generateSummary } from '../services/geminiService';

interface AiSummaryProps {
  data: DashboardData;
}

const AiSummary: React.FC<AiSummaryProps> = ({ data }) => {
  const [summary, setSummary] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateSummary = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    setSummary('');

    try {
      const dataString = JSON.stringify(data, null, 2);
      const prompt = `
        You are a senior business analyst. Analyze the following dashboard data and provide a concise summary of key insights, trends, and actionable recommendations.
        Format your response in markdown with clear headings.

        Data:
        ${dataString}
      `;

      const result = await generateSummary(prompt);
      setSummary(result);
    } catch (err) {
      // FIX: Updated error message to remove mention of API key, as per coding guidelines.
      setError('Failed to generate summary. Please try again later.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [data]);

  return (
    <div className="bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-700">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-white">AI-Powered Insights</h3>
        <button
          onClick={handleGenerateSummary}
          disabled={isLoading}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-700 disabled:bg-indigo-900 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
        >
          {isLoading ? (
             <SpinnerIcon />
          ) : (
            <SparklesIcon />
          )}
          <span>{isLoading ? 'Generating...' : 'Generate Summary'}</span>
        </button>
      </div>

      {error && <div className="bg-red-500/20 text-red-300 p-3 rounded-lg mb-4">{error}</div>}

      <div className="prose prose-invert max-w-none text-gray-300">
        {summary ? (
          <pre className="whitespace-pre-wrap font-sans bg-slate-900/50 p-4 rounded-md">{summary}</pre>
        ) : (
          <p className="text-gray-400">Click the button to generate an AI-powered summary of your dashboard data.</p>
        )}
      </div>
    </div>
  );
};

const SparklesIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M5 2a1 1 0 00-1 1v1.586l-1.293 1.293a1 1 0 101.414 1.414L5 6.414V8a1 1 0 002 0V6.414l1.293 1.293a1 1 0 101.414-1.414L8 4.586V3a1 1 0 00-2 0V1.586l-1.293-1.293a1 1 0 00-1.414 0L5 2zm5 10a1 1 0 00-1 1v1.586l-1.293 1.293a1 1 0 101.414 1.414L10 16.414V18a1 1 0 002 0v-1.586l1.293 1.293a1 1 0 101.414-1.414L13 14.586V13a1 1 0 00-2 0v-1.586l-1.293-1.293a1 1 0 00-1.414 0L10 12zm-5-5a1 1 0 00-1 1v1.586l-1.293 1.293a1 1 0 101.414 1.414L5 11.414V13a1 1 0 002 0v-1.586l1.293 1.293a1 1 0 101.414-1.414L8 9.586V8a1 1 0 00-2 0V6.586l-1.293-1.293a1 1 0 00-1.414 0L5 7z" clipRule="evenodd" />
    </svg>
);

const SpinnerIcon = () => (
    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
);


export default AiSummary;