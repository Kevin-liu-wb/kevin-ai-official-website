'use client';

import { motion } from 'framer-motion';

const clients = [
  { name: 'DCH', label: '大昌行集团', color: '#0A2540' },
  { name: 'Manulife', label: '万通保险', color: '#FF6600' },
  { name: 'Ping An', label: '平安保险', color: '#E60012' },
  { name: 'China Life', label: '中国人寿', color: '#C41E3A' },
  { name: 'CPIC', label: '太平洋保险', color: '#1D4ED8' },
  { name: 'AIA', label: '友邦保险', color: '#00A0DF' },
  { name: 'New China Life', label: '新华保险', color: '#7C3AED' },
  { name: 'Taikang', label: '泰康保险', color: '#E91E63' },
];

function CompanyLogo({ client }: { client: typeof clients[0] }) {
  return (
    <svg
      width="100"
      height="28"
      viewBox="0 0 100 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-7 w-auto transition-all duration-300 opacity-40 hover:opacity-100"
    >
      <text
        x="0"
        y="22"
        fill={client.color}
        fontSize="18"
        fontWeight="600"
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
      >
        {client.name}
      </text>
    </svg>
  );
}

export function LogoWall() {
  const duplicatedClients = [...clients, ...clients];

  return (
    <div className="relative w-full overflow-hidden py-2">
      {/* Gradient Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#F6F9FC] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#F6F9FC] to-transparent z-10 pointer-events-none" />
      
      {/* Scrolling Container */}
      <motion.div
        className="flex gap-12 items-center"
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
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.02, duration: 0.3 }}
              className="cursor-pointer"
            >
              <CompanyLogo client={client} />
            </motion.div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
