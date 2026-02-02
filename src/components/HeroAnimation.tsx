"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

function Orb({ 
  width, 
  height, 
  color, 
  top, 
  left, 
  delay 
}: { 
  width: number; 
  height: number; 
  color: string; 
  top: string; 
  left: string; 
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
      
      const maxDistance = 400; // Repulsion radius
      
      if (distance < maxDistance) {
        const force = (maxDistance - distance) / maxDistance;
        const moveX = -(distanceX / distance) * force * 100; // Power of repulsion
        const moveY = -(distanceY / distance) * force * 100;
        
        x.set(moveX);
        y.set(moveY);
      } else {
        x.set(0);
        y.set(0);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  // Smooth spring physics for the repulsion
  const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: [0.4, 0.6, 0.4],
        scale: [1, 1.1, 1],
        x: [0, 30, -30, 0], // Floating animation base
        y: [0, -30, 30, 0],
      }}
      transition={{
        duration: 10 + delay * 2,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      }}
      style={{
        width,
        height,
        top,
        left,
        x: springX, // Add repulsion on top
        y: springY,
      }}
      className={`absolute rounded-full blur-[80px] ${color}`}
    />
  );
}

export function HeroAnimation() {
  const orbs = [
    {
      id: 1,
      width: 400,
      height: 400,
      color: "bg-purple-600/30",
      top: "10%",
      left: "20%",
      delay: 0,
    },
    {
      id: 2,
      width: 300,
      height: 300,
      color: "bg-blue-600/30",
      top: "60%",
      left: "70%",
      delay: 2,
    },
    {
      id: 3,
      width: 200,
      height: 200,
      color: "bg-cyan-500/30",
      top: "30%",
      left: "80%",
      delay: 4,
    },
    {
      id: 4,
      width: 250,
      height: 250,
      color: "bg-indigo-500/30",
      top: "70%",
      left: "10%",
      delay: 1,
    },
    {
      id: 5,
      width: 150,
      height: 150,
      color: "bg-fuchsia-500/30",
      top: "20%",
      left: "60%",
      delay: 3,
    },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {orbs.map((orb) => (
        <Orb key={orb.id} {...orb} />
      ))}
    </div>
  );
}
