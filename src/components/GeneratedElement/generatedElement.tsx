import React from 'react';
import { useDrag } from 'react-dnd';
import { CanvasElement } from '@/utils/Types';


type DraggableElementProps = {
  element: CanvasElement;
  selectedElement: string | null;
  setSelectedElement: (id: string | null) => void;
};

const DraggableElement: React.FC<DraggableElementProps> = ({ element, selectedElement, setSelectedElement }) => {

  const [, drag] = useDrag({
    type: 'GENERATEDCOMPONENT',
    item: { id: element.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      onClick={() => setSelectedElement(element.id)}
      style={{
        position: 'absolute',
        left: `${element.x}px`,
        top: `${element.y}px`,
        fontSize: `${element.fontSize}px`,
        fontWeight: element.fontWeight,
        opacity: element.isDragging ? 0.5 : 1,
        border: selectedElement === element.id ? '2px solid red' : 'none',
        cursor: selectedElement === element.id ? 'grab' : 'pointer',
      }}
    >
      {element.text}
    </div>
  );
};

export default DraggableElement;

