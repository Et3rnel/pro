import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

export default function Resume() {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch('/Dossier_competences_PASQUION_Gaetan.md')
      .then(response => response.text())
      .then(text => setMarkdown(text))
      .catch(error => console.error('Error loading markdown:', error));
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="prose prose-lg max-w-none">
        <ReactMarkdown>
          {markdown}
        </ReactMarkdown>
      </div>
    </div>
  );
}