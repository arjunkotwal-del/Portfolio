import { motion } from "framer-motion";
import SkillTag from "../SkillTag";

const skills = {
  languages: [
    { name: "Python", level: "advanced" as const },
    { name: "JavaScript", level: "advanced" as const },
    { name: "TypeScript", level: "intermediate" as const },
    { name: "Java", level: "intermediate" as const },
    { name: "C++", level: "intermediate" as const },
    { name: "SQL", level: "intermediate" as const },
    { name: "HTML", level: "advanced" as const },
    { name: "CSS", level: "advanced" as const },
  ],

  frameworks: [
    { name: "React", level: "advanced" as const },
    { name: "Next.js", level: "intermediate" as const },
    { name: "Node.js", level: "intermediate" as const },
    { name: "Express.js", level: "intermediate" as const },
    { name: "FastAPI", level: "intermediate" as const },
    { name: "Tailwind CSS", level: "advanced" as const },
    { name: "Django", level: "beginner" as const },
  ],

  databases: [
    { name: "PostgreSQL", level: "intermediate" as const },
    { name: "MongoDB", level: "intermediate" as const },
    { name: "SQLite", level: "intermediate" as const },
    { name: "Supabase", level: "intermediate" as const },
    { name: "Firebase", level: "intermediate" as const },
  ],

  tools: [
    { name: "Git", level: "advanced" as const },
    { name: "GitHub", level: "advanced" as const },
    { name: "Docker", level: "intermediate" as const },
    { name: "Docker Compose", level: "intermediate" as const },
    { name: "Vite", level: "intermediate" as const },
    { name: "VS Code", level: "advanced" as const },
    { name: "Linux", level: "intermediate" as const },
    { name: "AWS", level: "beginner" as const },
    { name: "Postman", level: "intermediate" as const },
  ],

  cloud_and_devops: [
    { name: "Vercel", level: "intermediate" as const },
    { name: "Netlify", level: "intermediate" as const },
    { name: "CI/CD (GitHub Actions)", level: "beginner" as const },
  ],

  AI_ML: [
    { name: "LLM APIs", level: "intermediate" as const },
    { name: "Embeddings & NLP", level: "intermediate" as const },
    { name: "Prompt Engineering", level: "advanced" as const },
    { name: "Resume ↔ Job Matching Models", level: "intermediate" as const },
  ],

  concepts: [
    { name: "Data Structures", level: "advanced" as const },
    { name: "Algorithms", level: "advanced" as const },
    { name: "RESTful APIs", level: "intermediate" as const },
    { name: "Authentication & JWT", level: "intermediate" as const },
    { name: "Database Design", level: "intermediate" as const },
    { name: "System Design Basics", level: "beginner" as const },
    { name: "Agile / Scrum", level: "intermediate" as const },
    { name: "SDLC", level: "intermediate" as const },
  ],
};


const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 relative bg-card/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">
              <span className="font-mono text-primary">02.</span> Skills & Technologies
            </h2>
            <div className="flex-1 h-[1px] bg-border" />
          </div>

          {/* Skills Legend */}
          <div className="flex flex-wrap gap-6 mb-10 text-sm font-mono">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-secondary shadow-[0_0_10px_hsl(var(--secondary)/0.5)]" />
              <span className="text-muted-foreground">Advanced</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary)/0.5)]" />
              <span className="text-muted-foreground">Intermediate</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-muted-foreground/50" />
              <span className="text-muted-foreground">Learning</span>
            </div>
          </div>

          {/* Skill Categories */}
          <div className="space-y-10">
            {Object.entries(skills).map(([category, items], catIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              >
                <h3 className="text-lg font-mono text-primary mb-4 capitalize">
                  {`// ${category}`}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {items.map((skill, index) => (
                    <SkillTag
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      index={index}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
