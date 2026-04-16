import { useState } from "react";
import type { FormEvent } from "react";
import { motion } from "motion/react";
import { MessageSquareHeart, Send } from "lucide-react";

const FEEDBACK_EMAIL = "hensley.santos9@gmail.com";

export function DeveloperFeedbackSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = "Shattered Realm Feedback & Suggestions";
    const bodyLines = [
      "Hi Shattered Realm Developers,",
      "",
      "I would like to share feedback to help improve the game and submission flow:",
      feedback,
      "",
      `Name: ${name || "Anonymous"}`,
      `Email: ${email || "Not provided"}`,
    ];

    const mailtoUrl = `mailto:${FEEDBACK_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section
      id="feedback"
      className="relative py-24"
      style={{ background: "linear-gradient(180deg, #020a14 0%, #071a2f 50%, #020a14 100%)" }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-cyan-400/20 bg-[#071221]/70 p-6 sm:p-8 backdrop-blur-sm"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10">
            <MessageSquareHeart size={16} className="text-cyan-300" />
            <span className="text-cyan-200" style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", fontWeight: 500 }}>
              Contact The Developers
            </span>
          </div>

          <h2
            className="text-white mb-3"
            style={{ fontFamily: "Cinzel, serif", fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700 }}
          >
            Help Us Improve Shattered Realm
          </h2>

          <p className="text-gray-400 mb-8" style={{ fontFamily: "Inter, sans-serif", fontSize: "15px", lineHeight: 1.7 }}>
            Share your ideas, report issues, and suggest improvements for the game and beta submission experience.
            When you submit this form, your email app will open with your feedback addressed to the development team.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name (optional)"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="w-full rounded-xl border border-white/15 bg-[#0a1b30] px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "14px" }}
            />

            <input
              type="email"
              placeholder="Your Email (optional)"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-xl border border-white/15 bg-[#0a1b30] px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "14px" }}
            />

            <textarea
              placeholder="Your feedback"
              value={feedback}
              onChange={(event) => setFeedback(event.target.value)}
              required
              rows={6}
              className="w-full resize-y rounded-xl border border-white/15 bg-[#0a1b30] px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "14px" }}
            />

            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-white"
              style={{
                fontFamily: "Cinzel, serif",
                fontSize: "15px",
                fontWeight: 700,
                background: "linear-gradient(135deg, #0891b2, #2563eb)",
                boxShadow: "0 0 32px rgba(14, 165, 233, 0.35)",
              }}
            >
              <Send size={17} />
              Submit Feedback
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}