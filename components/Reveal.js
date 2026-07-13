import { useEffect, useRef, useState } from 'react';

export default function Reveal({ as: Element = 'div', className = '', children, ...props }) {
  const ref = useRef(null);
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setReady(true);

    if (!ref.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.12 });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Element ref={ref} className={`${className} ${ready ? 'revealReady' : ''} ${visible ? 'revealVisible' : ''}`.trim()} {...props}>
      {children}
    </Element>
  );
}
