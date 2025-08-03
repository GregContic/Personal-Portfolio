// main.js - Adds interactivity for Code & Canvas Portfolio

document.addEventListener('DOMContentLoaded', function () {
  // Tab switching
  const tabs = document.querySelectorAll('.code-tab');
  const codeBlock = document.querySelector('.code-block code');
  const previewMockup = document.querySelector('.preview-mockup');
  const codeSlider = document.querySelector('.code-slider');
  const showMoreBtn = document.querySelector('.show-more-btn');
  const viewToggleBtns = document.querySelectorAll('.view-toggle button');

  // Example code snippets and previews for each tab and slider step
  const codeSnippets = {
    'App.jsx': [
      `// Example React component\nexport default function App() {\n  return <button className=\"btn\">Click Me</button>;\n}`,
      `// Add state\nimport { useState } from 'react';\nexport default function App() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(count+1)}>Clicked {count} times</button>;\n}`,
      `// Styled button\nimport './styles.css';\nexport default function App() {\n  return <button className=\"btn primary\">Primary Button</button>;\n}`
    ],
    'styles.css': [
      `.btn {\n  background: #232946;\n  color: #fff;\n  border: none;\n  padding: 12px 28px;\n  border-radius: 8px;\n  font-family: 'Fira Mono', monospace;\n  font-size: 1rem;\n  cursor: pointer;\n}`,
      `.btn.primary {\n  background: #0077ff;\n  color: #fff;\n  box-shadow: 0 2px 8px 0 rgba(0,119,255,0.08);\n}`,
      `.btn:active {\n  transform: scale(0.97);\n}`
    ],
    'config.js': [
      `export const theme = {\n  accent: '#0077ff',\n  dark: true,\n};`,
      `export const breakpoints = {\n  mobile: 480,\n  tablet: 900,\n  desktop: 1200,\n};`,
      `export const features = ['split-view', 'dev-view', 'client-view'];`
    ]
  };

  const previewImages = [
    'images/product.png',
    'images/portwan.png',
    'images/tpage.png'
  ];

  let currentTab = 'App.jsx';
  let currentStep = 0;
  let showFullCode = false;
  let currentView = 'split';

  function updateCode() {
    let code = codeSnippets[currentTab][currentStep];
    if (!showFullCode) {
      // Show only first 4 lines or 120 chars
      const lines = code.split('\n');
      if (lines.length > 4) {
        code = lines.slice(0, 4).join('\n') + '\n...';
      } else if (code.length > 120) {
        code = code.slice(0, 120) + '\n...';
      }
    }
    codeBlock.textContent = code;
    // Prism.highlightElement(codeBlock); // Uncomment if PrismJS is loaded
  }

  function updatePreview() {
    // Swap image for each step, or swap iframe/video if needed
    previewMockup.innerHTML = `<img src="${previewImages[currentStep]}" alt="Project Preview" style="width:100%;height:auto;" />`;
  }

  tabs.forEach((tab, idx) => {
    tab.addEventListener('click', function () {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentTab = tab.textContent;
      currentStep = 0;
      codeSlider.value = 1;
      updateCode();
      updatePreview();
    });
  });

  codeSlider.addEventListener('input', function () {
    currentStep = parseInt(codeSlider.value, 10) - 1;
    updateCode();
    updatePreview();
  });

  showMoreBtn.addEventListener('click', function () {
    showFullCode = !showFullCode;
    showMoreBtn.textContent = showFullCode ? 'Show Less Code' : 'Show More Code';
    updateCode();
  });

  viewToggleBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      viewToggleBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentView = btn.textContent.toLowerCase();
      document.querySelector('.code-panel').style.display = (currentView === 'client view') ? 'none' : 'flex';
      document.querySelector('.preview-panel').style.display = (currentView === 'dev view') ? 'none' : 'flex';
    });
  });

  // Initial render
  updateCode();
  updatePreview();
});
