import { motion } from "framer-motion";
import ProjectCard from "../ProjectCard";

const projects = [
  {
    title: "Internship Intelligence Platform",
    description:
      "A full-stack web application that helps students track internship applications, analyze outcomes, and improve their chances using data and AI. Features include an application tracker, analytics dashboard, resume ↔ job match scoring, and AI-driven feedback.",
    technologies: [
      "React",
      "Tailwind CSS",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "LLM APIs",
      "Embeddings",
    ],
    githubUrl: "https://github.com/arjunkotwal-del/internship-intelligence",
    featured: true,
  },

  {
    title: "CineWave",
    description:
      "A modern movie discovery platform that allows users to explore trending, top-rated, and upcoming movies with detailed watch pages. Built with a clean UI, real-time API data, and responsive design.",
    technologies: [
      "React",
      "Vite",
      "Firebase",
      "TMDB API",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/arjunkotwal-del/cinewave",
    liveUrl: "https://cinewave-96x3.vercel.app",
    featured: true,
  },

  {
    title: "DevScope",
    description:
      "A developer intelligence and insight platform that analyzes GitHub repositories to surface code quality metrics, tech stack breakdowns, contributor activity, and project health insights. Built to help developers, recruiters, and startup teams quickly understand and evaluate codebases.",
    technologies: [
      "React",
      "TypeScript",
      "FastAPI",
      "Python",
      "GitHub API",
      "PostgreSQL",
      "Docker",
    ],
    githubUrl: "https://github.com/arjunkotwal-del/devscope",
    featured: true,
  }

];


const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">
              <span className="font-mono text-primary">03.</span> Things I've Built
            </h2>
            <div className="flex-1 h-[1px] bg-border" />
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} />
            ))}
          </div>

          {/* More Projects Link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              View more on GitHub →
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
