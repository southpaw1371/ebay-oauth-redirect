import { useEffect, useState } from 'react';

export default function Callback() {
  const [code, setCode] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const codeParam = params.get('code');
    if (codeParam) {
      setCode(codeParam);
    }
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>✅ eBay OAuth Code Received</h1>
      {code ? (
        <>
          <p><strong>Copy and paste this code into your token script:</strong></p>
          <textarea style={{ width: '100%', height: '100px' }} readOnly value={code}></textarea>
        </>
      ) : (
        <p>⚠️ No code parameter found in the URL.</p>
      )}
    </div>
  );
}
