import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    q: "Do I need to install software?",
    a: "No. You can use Apex Scholar right in your browser. Just sign in with Puter and start researching. If you prefer to host your own instance, we provide simple installation instructions for admins."
  },
  {
    q: "Is my research data private?",
    a: "Yes. When you enable End-to-End Encryption, your data is encrypted in your browser before being stored. Not even we can read it. You can also self-host for full control."
  },
  {
    q: "Which databases can I search?",
    a: "Apex Scholar searches ArXiv, Google Scholar, PubMed, Semantic Scholar, and OpenAlex—all from one search box. This gives you comprehensive coverage across disciplines."
  },
  {
    q: "Can I collaborate with my team?",
    a: "Collaboration features are coming soon. Today, Apex Scholar is optimized for individual researchers. We're working on shared projects and role-based access."
  },
  {
    q: "Do I need to install LaTeX locally?",
    a: "No. The built-in LaTeX editor compiles your documents in the cloud via GitHub Actions. Just write and click Compile. No TeX Live installation needed."
  },
  {
    q: "Is it really free?",
    a: "Yes. Apex Scholar is open-source (MIT license) and free to use. You only need free API keys for some search engines if you self-host. The demo instance may have rate limits."
  },
  {
    q: "How do I get started?",
    a: "Go to the demo, sign in with Puter, create a project, search for papers, save them, and explore AI insights. That's enough to be productive immediately."
  },
  {
    q: "Where can I find detailed documentation?",
    a: "We have a full documentation site with guides, how-tos, and troubleshooting. Check out https://apexscholar-docs.pages.dev for all the details."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-desc">Quick answers to common questions about Apex Scholar.</p>
        </div>

        <div className="faq-list">
          {faqs.map((item, idx) => (
            <div key={idx} className="faq-item">
              <button
                className="faq-question"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                aria-expanded={openIndex === idx}
              >
                <span>{item.q}</span>
                {openIndex === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              {openIndex === idx && (
                <div className="faq-answer">
                  <p>{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="faq-cta">
          <p>Still have questions? Check our <a href="https://apexscholar-docs.pages.dev" target="_blank" rel="noopener noreferrer">full documentation</a> or <a href="https://github.com/scholarkit/apexscholar/issues" target="_blank" rel="noopener noreferrer">open an issue</a>.</p>
        </div>
      </div>
    </section>
  );
}
