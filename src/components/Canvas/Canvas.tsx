import { useDrop } from 'react-dnd';
import { forwardRef, useImperativeHandle, useRef } from 'react';
import styles from '@/styles/Canvas.module.css';

type CanvasProps = {
  onDrop: (x: number, y: number) => void;
};

interface ExtendedDiv extends HTMLDivElement {
    getBoundingClientRect: () => DOMRect;
}

const CanvasComponent = forwardRef<HTMLDivElement, CanvasProps>(({ onDrop }, ref) => {
  const internalRef = useRef<HTMLDivElement>(null);
  
  useImperativeHandle(ref, () => ({
    getBoundingClientRect: () => {
      // Check if internalRef.current is not null before calling getBoundingClientRect
      return internalRef.current ? internalRef.current.getBoundingClientRect() : new DOMRect();
    },
  }) as ExtendedDiv);

  const [, drop] = useDrop({
    accept: 'COMPONENT',
    drop: (item, monitor) => {
      const clientOffset = monitor.getClientOffset();
      if (clientOffset && internalRef.current) {
        const rect = internalRef.current.getBoundingClientRect();
        const x = clientOffset.x - rect.left;
        const y = clientOffset.y - rect.top;
        onDrop(x, y);
      }
    },
  });

  drop(internalRef);

  return <div ref={internalRef} className={styles.canvasStyle}></div>;
});

export default CanvasComponent;
