import React from 'react';
import { useDrag } from 'react-dnd';
import styles from '@/styles/Sidebar.module.css';

type SidebarItemProps = {
  id: string;
  displayName: string;
};

const DraggableSidebarItem: React.FC<SidebarItemProps> = ({ id, displayName }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'COMPONENT',
    item: { id, type: 'COMPONENT' },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      className={`${styles.itemStyle} ${isDragging ? styles.dragging : ''}`}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      {displayName}
    </div>
  );
};

type SidebarProps = {
  items: SidebarItemProps[];
};

const Sidebar: React.FC<SidebarProps> = ({ items }) => {
  return (
    <div className={styles.sidebarStyle}>
      {items.map((item) => (
        <DraggableSidebarItem key={item.id} id={item.id} displayName={item.displayName} />
      ))}
    </div>
  );
};

export default Sidebar;
