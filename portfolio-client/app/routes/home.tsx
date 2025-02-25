import type { Route } from "./+types/home";
import { useState, useEffect } from 'react';
import Markdown from 'markdown-to-jsx';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Gaëtan PASQUION - Portfolio" },
    { name: "description", content: "Portfolio et dossier de compétences de Gaëtan PASQUION" },
  ];
}

export default function Home() {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch('/Dossier_competences_PASQUION_Gaetan.md')
      .then(response => response.text())
      .then(text => setMarkdown(text))
      .catch(error => console.error('Error loading markdown:', error));
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="prose prose-lg max-w-none dark:prose-invert">
        <Markdown>
          {markdown}
        </Markdown>
      </div>
    </div>
  );
}
