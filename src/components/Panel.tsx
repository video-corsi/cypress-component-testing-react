import React, { PropsWithChildren, useState } from 'react';

interface PanelProps {
  title: string;
  icon?: string;
  onIconClick?: () => void;
  open?: boolean;
}

export function Panel(props: PropsWithChildren<PanelProps>) {
  const {children, icon, onIconClick, open = true, title} = props;
  const [isOpen, setIsOpen] = useState(open);

  function iconClickHandler(e: React.MouseEvent) {
    e.stopPropagation();
    if (onIconClick)
      onIconClick()
  }

  return (
    <div>
      <div
        className="flex justify-between bg-slate-800 text-white p-3"
        onClick={() => setIsOpen(s => !s)}
      >
        {title}
        <div onClick={iconClickHandler}>{icon}</div>
      </div>

      {
        isOpen && <div className="bg-slate-200 p-3">
          {children}
        </div>
      }
    </div>
  )
}
