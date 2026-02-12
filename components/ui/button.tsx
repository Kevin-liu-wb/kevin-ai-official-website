'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
}

export function Button({ children, variant = 'primary', className, onClick }: ButtonProps) {
  const baseStyles = 'px-6 py-3 rounded-lg font-medium transition-all duration-300 inline-flex items-center justify-center gap-2';
  
  const variants = {
    primary: 'bg-stripe-purple text-white hover:bg-opacity-90 shadow-lg hover:shadow-xl',
    secondary: 'bg-white text-stripe-dark hover:bg-stripe-light border border-gray-200',
    outline: 'border-2 border-stripe-purple text-stripe-purple hover:bg-stripe-purple hover:text-white'
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], className)}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}