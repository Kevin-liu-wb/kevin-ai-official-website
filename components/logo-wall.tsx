'use client';

import { motion } from 'framer-motion';
import { ClientLogo } from '@/components/client-logo';

const clients = [
  { name: '大昌行集团', letter: 'D', gradientFrom: '#635BFF', gradientTo: '#00D4FF' },
  { name: '万通保险', letter: 'W', gradientFrom: '#00D4FF', gradientTo: '#FF4ECD' },
  { name: '平安保险', letter: 'P', gradientFrom: '#FF4ECD', gradientTo: '#635BFF' },
  { name: '中国人寿', letter: 'C', gradientFrom: '#635BFF', gradientTo: '#FF4ECD' },
  { name: '太平洋保险', letter: 'T', gradientFrom: '#00D4FF', gradientTo: '#635BFF' },
  { name: '友邦保险', letter: 'A', gradientFrom: '#FF4ECD', gradientTo: '#00D4FF' },
  { name: '新华保险', letter: 'N', gradientFrom: '#635BFF', gradientTo: '#00D4FF' },
  { name: '泰康保险', letter: 'K', gradientFrom: '#00D4FF', gradientTo: '#FF4ECD' },
];

export function LogoWall() {
  // 复制一份用于无限滚动
  const duplicatedClients = [...clients, ...clients];

  return (
    <div className="relative w-full overflow-hidden py-4">
      {/* Gradient Overlays - adapted for light background */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#F6F9FC] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#F6F9FC] to-transparent z-10 pointer-events-none" />
      
      {/* Scrolling Container */}
      <motion.div
        className="flex gap-12"
        animate={{
          x: [0, -50 * clients.length * 1.5],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
      >
        {duplicatedClients.map((client, index) => (
          <div key={`${client.name}-${index}`} className="flex-shrink-0">
            <ClientLogo
              name={client.name}
              letter={client.letter}
              gradientFrom={client.gradientFrom}
              gradientTo={client.gradientTo}
              delay={index * 0.05}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
