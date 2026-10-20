import { useState } from 'react';
import './App.css';

const API_URL = 'http://localhost:3000/api/claims/assess';

function App() {
  const [claimText, setClaimText] = useState('');
  const [evidence, setEvidence] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleAssess() {
    setLoading(true);
    setError('');
    setResult(null);

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ claimText, evidence }),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new Error(body.message || 'Assessment failed');
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError(err.message || 'Unable to connect to the server');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="page">
      <header className="header">
        <span className="eyebrow">RESEARCH & INNOVATION</span>
        <h1>Claims Intelligence Engine</h1>
        <p>
          Evaluate whether scientific evidence supports a
          cosmetic product claim.
        </p>
      </header>

      <section className="panel">
        <label htmlFor="claim">Product claim</label>
        <textarea
          id="claim"
          value={claimText}
          onChange={(e) => setClaimText(e.target.value)}
          placeholder="Example: Reduces wrinkles by 20% in 4 weeks"
        />

        <label htmlFor="evidence">Clinical study evidence</label>
        <textarea
          id="evidence"
          className="evidence-input"
          value={evidence}
          onChange={(e) => setEvidence(e.target.value)}
          placeholder="Enter study design, sample size, results, duration and limitations..."
        />

        <button
          onClick={handleAssess}
          disabled={loading || !claimText.trim() || !evidence.trim()}
        >
          {loading ? 'Assessing evidence...' : 'Assess Claim'}
        </button>

        {loading && (
          <p className="muted">Please wait for the assessment.</p>
        )}

        {error && <p className="error" role="alert">{error}</p>}
      </section>

      {result && (
        <section className="panel result">
          <span className="eyebrow">ASSESSMENT REPORT</span>

          <h2>
            {result.justified
              ? 'Evidence supports the claim'
              : 'Claim not established by the evidence'}
          </h2>

          <p>
            <strong>Justified:</strong>{' '}
            {result.justified ? 'Yes' : 'No'}
          </p>

          <div className="score">
            <span>AI confidence score</span>
            <strong>{result.confidenceScore}%</strong>
          </div>

          <label>Reasoning</label>
          <p className="reasoning">{result.reasoning}</p>

          <p className="disclaimer">
            AI-generated assessment for demonstration. Human
            scientific review is required before claim approval.
          </p>
        </section>
      )}
    </main>
  );
}

export default App;