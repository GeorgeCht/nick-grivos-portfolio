import { useEffect } from 'react';

interface DemoProps {
  text: string;
}

const Demo: React.FC<DemoProps> = ({ text }) => {
  useEffect(() => {
    const container = document.getElementById('container'); // Get a reference to the container element
    if (container) {
      container.innerHTML = text.split('').map((letter, index) => `<span key=${index}>${letter}</span>`).join(''); // Create the HTML content with <span> tags
    }
  }, [text]);

  return (
    <div id="container">
      {/* The content will be populated by the useEffect */}
    </div>
  );
};

export default Demo;
