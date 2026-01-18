import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-32 relative">
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
              <span className="font-mono text-primary">01.</span> About Me
            </h2>
            <div className="flex-1 h-[1px] bg-border" />
          </div>

          <div className="grid md:grid-cols-5 gap-12">
            {/* Text Content */}
            <div className="md:col-span-3 space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Hello! I'm Arjun, a passionate Computer Science student with a love for
                turning complex problems into elegant, user-friendly solutions. My journey
                in programming started when I was 14, building simple games in Python, and
                has evolved into a deep appreciation for full-stack development.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently, I'm focused on learning{" "}
                <span className="text-primary">modern web technologies</span> and{" "}
                <span className="text-primary">machine learning</span>, while actively
                contributing to open-source projects. I believe in writing clean,
                maintainable code and staying curious about emerging technologies.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me exploring hackathons, mentoring
                younger students, or diving into competitive programming challenges.
              </p>

              {/* Quick Facts */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <span className="text-sm">B.S. Computer Science</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-sm">Scarborough, ON</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="text-sm">Expected Grad: APRIL 2029</span>
                </div>
              </div>
            </div>

            {/* Profile Image Placeholder */}
            <div className="md:col-span-2 relative group">
              <div className="relative">
                {/* Image Container */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative z-10 rounded-lg overflow-hidden glow-border"
                >
                  <div className="aspect-square bg-gradient-to-br from-muted to-card flex items-center justify-center">
                    <div className="text-8xl">👨‍💻</div>
                  </div>
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all duration-300" />
                </motion.div>
                {/* Decorative Border */}
                <div className="absolute inset-0 border-2 border-primary rounded-lg translate-x-4 translate-y-4 -z-0 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
