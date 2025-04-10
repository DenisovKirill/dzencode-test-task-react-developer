import { ReactNode } from 'react';

interface IProps {
  text: string;
  className?: string;
  children: ReactNode;
}

export const Tooltip = ({ text, className, children }: IProps) => {
  return (
    <div className="relative group">
      {children}
      <div
        className={`pointer-events-none absolute bottom-full left-1/8 transform -translate-x-1/8 mb-2 px-3 py-2 
          bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto
          transition-opacity break-words whitespace-normal z-50 ${className}`}
      >
        {text}
      </div>
    </div>
  );
};
