
import React from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

const Layout = ({ children, title, subtitle }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1 p-6 max-w-full mx-auto w-full animate-fade-in">
        <div className="mb-6">
          <h1 className="section-title text-2xl">{title}</h1>
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </div>
        
        {children}
      </main>
    </div>
  );
};

export default Layout;
