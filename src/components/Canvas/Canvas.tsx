
import { useDrop } from 'react-dnd';
import styles from '@/styles/Canvas.module.css';

type CanvasProps = {
  onDrop: (x: number, y: number) => void;
};

const CanvasComponent: React.FC<CanvasProps> = ({ onDrop }) => {
  const [, drop] = useDrop({
    accept: 'YOUR_COMPONENT_TYPE',
    drop: (item, monitor) => {
      const clientOffset = monitor.getClientOffset();
      if (clientOffset) {
        onDrop(clientOffset.x, clientOffset.y);
      }
    },
  });

  return <div ref={drop} className={styles.canvasStyle}></div>;
};

export default CanvasComponent;

