import React from 'react';

type ContainerProps = {
  children: React.ReactNode;
};

function Container({ children }: ContainerProps) {
  return (
    <div className="max-w-9xl 2xl:container mx-auto px-6 lg:px-0 relative">
      {children}
    </div>
  );
}

export default Container;
