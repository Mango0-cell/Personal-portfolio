'use client';

import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Github, Linkedin, Instagram, Mail, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { portfolioData } from '../../utils';

export function Contact() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${portfolioData.email}?subject=${subject}&body=${body}`;
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Mango0-cell', label: 'GitHub' },
    { icon: Linkedin, href: portfolioData.socialLinks.find(s => s.name === 'LinkedIn')?.url ?? '#', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com/storxm._', label: 'Instagram' },
    { icon: Mail, href: `mailto:${portfolioData.email}`, label: 'Email' },
  ];

  const inputClass =
    'w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-blue-400/50 transition-colors placeholder:text-white/30 text-white text-sm';

  return (
    <section id="contact" ref={ref} className="py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-white" style={{ fontSize: '3rem', fontWeight: 700 }}>
            {t('sections.contact')}
          </h2>
          <p className="text-white/50" style={{ fontSize: '1.1rem' }}>
            {t('contact.subtitle')}
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="backdrop-blur-xl border rounded-2xl p-8 mb-12"
          style={{ background: 'rgba(20, 20, 25, 0.4)', borderColor: 'rgba(255,255,255,0.08)' }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              placeholder={t('contact.name')}
              value={formData.name}
              onChange={e => setFormData({ ...formData, name: e.target.value })}
              className={inputClass}
              required
            />
            <input
              type="email"
              placeholder={t('contact.email')}
              value={formData.email}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
              className={inputClass}
              required
            />
            <textarea
              placeholder={t('contact.message')}
              value={formData.message}
              onChange={e => setFormData({ ...formData, message: e.target.value })}
              rows={6}
              className={`${inputClass} resize-none`}
              required
            />
            <button
              type="submit"
              className="w-full px-8 py-4 rounded-xl font-medium hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 flex items-center justify-center gap-2 group text-white"
              style={{ background: 'linear-gradient(135deg, var(--neon-blue), var(--neon-purple))' }}
            >
              <span>{t('contact.send')}</span>
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </motion.div>

        {/* Social links + copyright */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-white/40 mb-6 text-sm">{t('contact.connect')}</p>
          <div className="flex justify-center gap-4 mb-12">
            {socialLinks.map(social => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                className="p-4 backdrop-blur-xl border rounded-xl hover:border-blue-500/40 transition-all duration-300 group text-white/60 hover:text-white"
                style={{ background: 'rgba(20, 20, 25, 0.4)', borderColor: 'rgba(255,255,255,0.08)' }}
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
          <div className="pt-8 border-t border-white/10">
            <p className="text-sm text-white/30">
              {t('footer.copyright', { year: new Date().getFullYear(), name: portfolioData.name })}
            </p>
            <p className="text-xs text-white/20 mt-1">{t('footer.madeWith')}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
