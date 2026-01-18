import { motion } from "framer-motion";
import { Mail, Send, FileText } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Section Header */}
          <p className="font-mono text-primary mb-4">04. What's Next?</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>

          <p className="text-muted-foreground mb-10 leading-relaxed">
            I'm actively seeking <span className="text-primary">summer 2026 internship opportunities</span>{" "}
            in software engineering. Whether you have an opportunity, a question,
            or just want to say hi, my inbox is always open. I'll do my best to
            get back to you!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <motion.a
              href="mailto:Arjunkotwal1607@gmail.com"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group px-8 py-4 bg-primary text-primary-foreground font-mono rounded-lg hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Say Hello
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="/Arjun_Kotwal_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              type="application/pdf"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 border border-primary/50 text-primary font-mono rounded-lg hover:bg-primary/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <FileText className="w-5 h-5" />
              Download Resume
            </motion.a>
          </div>

          {/* Terminal-style status */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-card border border-border font-mono text-sm"
          >
            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse shadow-[0_0_10px_hsl(var(--secondary))]" />
            <span className="text-muted-foreground">
              Status: <span className="text-secondary">Open to opportunities</span>
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
