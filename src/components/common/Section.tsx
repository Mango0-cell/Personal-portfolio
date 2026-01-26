import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

/**
 * Componente Section
 * Proporciona layout consistente para secciones
 * - Altura mínima de pantalla completa
 * - Ancho máximo y padding lateral
 * - Espaciado vertical estandarizado
 */
export const Section: React.FC<SectionProps> = ({
  children,
  id,
  className = ''
}) => {
  return (
    <section
      id={id}
      className={`
        w-full 
        py-20 
        px-6 
        md:px-8 
        lg:px-0
        flex 
        flex-col 
        items-center
        ${className}
      `}
    >
      <div className="w-full max-w-7xl">
        {children}
      </div>
    </section>
  );
};

export default Section;
