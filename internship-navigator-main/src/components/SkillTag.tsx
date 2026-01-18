import { motion } from "framer-motion";

interface SkillTagProps {
  name: string;
  level?: "beginner" | "intermediate" | "advanced";
  index: number;
}

const SkillTag = ({ name, level = "intermediate", index }: SkillTagProps) => {
  const levelColors = {
    beginner: "border-muted-foreground/30 text-muted-foreground",
    intermediate: "border-primary/50 text-primary glow-border",
    advanced: "border-secondary/70 text-secondary shadow-[0_0_15px_hsl(var(--secondary)/0.3)]",
  };

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.05, y: -2 }}
      className={`inline-flex items-center px-4 py-2 rounded-lg border font-mono text-sm transition-all duration-300 ${levelColors[level]}`}
    >
      {name}
    </motion.span>
  );
};

export default SkillTag;
