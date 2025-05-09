import React from 'react';

type ContainerProps = {
  children: React.ReactNode;
};

function Container({ children }: ContainerProps) {
  return (
    <div className="container mx-auto px-10 lg:px-0">
      {children}
    </div>
  );
}

export default Container;
