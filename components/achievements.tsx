"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

const achievementsData = [
  {
    id: 1,
    title: "PENS FEST 2025",
    achievements: [
      "Top 1 Best Backend Architecture",
      "Top 2 Best Mobile",
      "Best Human Capital",
    ],
    image: "/achievements/pensfest2025.JPG",
  },
  {
    id: 2,
    title: "Decode 2024",
    achievements: ["3rd Winner - National CP"],
    image: "/achievements/decode-2024.png",
  },
  {
    id: 3,
    title: "Srifoton 2024",
    achievements: ["Finalist - National CP"],
    image: "/achievements/srifoton-2024.png",
  },
];

function AchievementImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className: string;
}) {
  const [imageSrc, setImageSrc] = useState("/default.png");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!src || src === "/default.png") {
      setImageSrc("/default.png");
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    const img = new Image();

    img.onload = () => {
      setImageSrc(src);
      setIsLoading(false);
    };

    img.onerror = () => {
      setImageSrc("/default.png");
      setIsLoading(false);
    };

    img.src = src;
  }, [src]);

  return <img src={imageSrc} alt={alt} className={className} />;
}

export default function Achievements() {
  return (
    <section className="bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="space-y-12">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}>
            <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide flex items-center gap-2">
              <Award className="w-4 h-4" />
              Achievements
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold">
              Recognition & Awards
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Milestones and recognitions achieved throughout my development
              journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievementsData.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}>
                <div className="group cursor-pointer h-full">
                  <div className="bg-background rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                    {/* Image Container */}
                    <motion.div
                      className="relative overflow-hidden aspect-[4/3] bg-secondary"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}>
                      <AchievementImage
                        src={achievement.image || "/default.png"}
                        alt={achievement.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>

                    {/* Content */}
                    <div className="p-5 flex-1 flex flex-col">
                      <h3 className="font-semibold text-base mb-3 group-hover:text-accent transition-colors">
                        {achievement.title}
                      </h3>

                      {/* Badges */}
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {achievement.achievements.map((badge, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center px-3 py-1.5 bg-accent/10 text-accent border border-accent/20 text-xs font-medium rounded-full">
                            {badge}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
