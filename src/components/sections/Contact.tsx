"use client";

import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { portfolioData } from "../../utils";

type Status = "idle" | "loading" | "success" | "error" | "ratelimit";

const RATE_LIMIT = 3;
const RATE_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const STORAGE_KEY = "contact_sends";

function getSendTimestamps(): number[] {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]");
  } catch {
    return [];
  }
}

function getRecentSends(): number[] {
  const now = Date.now();
  return getSendTimestamps().filter((t) => now - t < RATE_WINDOW_MS);
}

function recordSend() {
  const recent = getRecentSends();
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...recent, Date.now()]));
}

function minutesUntilReset(): number {
  const oldest = getRecentSends().sort()[0];
  if (!oldest) return 0;
  return Math.ceil((RATE_WINDOW_MS - (Date.now() - oldest)) / 60000);
}

export function Contact() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [minutesLeft, setMinutesLeft] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const recent = getRecentSends();
    if (recent.length >= RATE_LIMIT) {
      setMinutesLeft(minutesUntilReset());
      setStatus("ratelimit");
      return;
    }

    setStatus("loading");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: portfolioData.email,
          time: new Date().toLocaleString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );
      recordSend();
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/Mango0-cell", label: "GitHub" },
    {
      icon: Linkedin,
      href:
        portfolioData.socialLinks.find((s) => s.name === "LinkedIn")?.url ??
        "#",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://instagram.com/storxm._",
      label: "Instagram",
    },
    { icon: Mail, href: "#contact", label: "Email" },
  ];

  const inputClass =
    "w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-blue-400/50 transition-colors placeholder:text-white/30 text-white text-sm disabled:opacity-50 disabled:cursor-not-allowed";

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-32 px-4 overflow-visible"
    >
      <div className="absolute -inset-x-32 -top-24 bottom-0 pointer-events-none">
        <div
          className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full blur-[140px] opacity-10"
          style={{ background: "var(--neon-blue)" }}
        />
      </div>
      <div className="relative max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="mb-4 text-white"
            style={{ fontSize: "3rem", fontWeight: 700 }}
          >
            {t("sections.contact")}
          </h2>
          <p className="text-white/50" style={{ fontSize: "1.1rem" }}>
            {t("contact.subtitle")}
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="backdrop-blur-xl border rounded-2xl p-8 mb-12 relative overflow-hidden"
          style={{
            background: "rgba(20, 20, 25, 0.4)",
            borderColor: "rgba(255,255,255,0.08)",
          }}
        >
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center justify-center gap-4 py-12 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {t("contact.success")}
                </h3>
                <p className="text-white/50 text-sm">
                  {t("contact.successDesc")}
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-2 text-blue-400 text-sm hover:text-blue-300 transition-colors"
                >
                  {t("contact.send")} →
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                ref={formRef}
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <input
                  type="text"
                  placeholder={t("contact.name")}
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className={inputClass}
                  disabled={status === "loading"}
                  required
                />
                <input
                  type="email"
                  placeholder={t("contact.email")}
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className={inputClass}
                  disabled={status === "loading"}
                  required
                />
                <textarea
                  placeholder={t("contact.message")}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={6}
                  className={`${inputClass} resize-none`}
                  disabled={status === "loading"}
                  required
                />

                <AnimatePresence>
                  {(status === "error" || status === "ratelimit") && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="flex items-center gap-2 text-red-400 text-sm"
                    >
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      {status === "ratelimit"
                        ? t("contact.ratelimit", { minutes: minutesLeft })
                        : t("contact.error")}
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  type="submit"
                  disabled={status === "loading" || status === "ratelimit"}
                  className="w-full px-8 py-4 rounded-xl font-medium hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 flex items-center justify-center gap-2 group text-white disabled:opacity-70 disabled:cursor-not-allowed"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--neon-blue), var(--neon-purple))",
                  }}
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>{t("contact.sending")}</span>
                    </>
                  ) : (
                    <>
                      <span>{t("contact.send")}</span>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Social links + copyright */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-white/40 mb-6 text-sm">{t("contact.connect")}</p>
          <div className="flex justify-center gap-4 mb-12">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                {...(social.href.startsWith("#")
                  ? {}
                  : { target: "_blank", rel: "noopener noreferrer" })}
                whileHover={{ scale: 1.1, y: -5 }}
                className="p-4 backdrop-blur-xl border rounded-xl hover:border-blue-500/40 transition-all duration-300 group text-white/60 hover:text-white"
                style={{
                  background: "rgba(20, 20, 25, 0.4)",
                  borderColor: "rgba(255,255,255,0.08)",
                }}
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
          <div className="pt-8 border-t border-white/10">
            <p className="text-sm text-white/30">
              {t("footer.copyright", {
                year: new Date().getFullYear(),
                name: portfolioData.name,
              })}
            </p>
            <p className="text-xs text-white/20 mt-1">{t("footer.madeWith")}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
