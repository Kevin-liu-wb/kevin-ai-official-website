'use client';

import { motion } from 'framer-motion';

const clients = [
  { name: 'Shopify', color: '#95BF47' },
  { name: 'Amazon', color: '#FF9900' },
  { name: 'Google', color: '#4285F4' },
  { name: 'Slack', color: '#4A154B' },
  { name: 'Spotify', color: '#1DB954' },
  { name: 'Microsoft', color: '#00A4EF' },
  { name: 'Notion', color: '#000000' },
  { name: 'Figma', color: '#F24E1E' },
];

function CompanyLogo({ client }: { client: typeof clients[0] }) {
  return (
    <svg
      width="120"
      height="32"
      viewBox="0 0 120 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-auto transition-all duration-300 opacity-40 hover:opacity-100"
    >
      <text
        x="60"
        y="22"
        textAnchor="middle"
        fill={client.color}
        fontSize="16"
        fontWeight="700"
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
        className="flex gap-16 items-center"
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
