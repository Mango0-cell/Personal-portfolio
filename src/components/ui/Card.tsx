import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

/**
 * Componente Card reutilizable
 * Proporciona un contenedor consistente para experience y projects
 */
export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = true
}) => {
  return (
    <div
      className={`
        bg-white dark:bg-slate-800 
        rounded-lg 
        p-6 
        border border-slate-200 dark:border-slate-700
        transition-all duration-300
        ${hover ? 'hover:shadow-lg dark:hover:shadow-slate-900/50 hover:-translate-y-1' : 'shadow-sm'}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;
