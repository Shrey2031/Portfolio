import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck } from "react-icons/fi";
import { profile } from "@/data/profile";
import { SocialLinks } from "@/components/ui/SocialLinks";


const FORMSPREE_ENDPOINT = "https://formspree.io/f/xrenzjaa";


type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-[11px] uppercase tracking-[0.2em] text-teal-400"
        >
          $ ./contact.sh
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="mt-3 font-display text-3xl md:text-4xl text-fog-100 max-w-lg text-balance"
        >
          Let's talk about your next hire.
        </motion.h2>

        <div className="mt-12 grid lg:grid-cols-[0.8fr_1.2fr] gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 text-fog-300 hover:text-amber-400 transition-colors"
            >
              <FiMail size={16} />
              <span className="text-sm">{profile.email}</span>
            </a>
            {/* <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-3 text-fog-300 hover:text-amber-400 transition-colors"
            >
              <FiPhone size={16} />
              <span className="text-sm">{profile.phone}</span>
            </a> */}
            <div className="flex items-center gap-3 text-fog-300">
              <FiMapPin size={16} />
              <span className="text-sm">{profile.location}</span>
            </div>

            <div className="pt-4">
              <SocialLinks />
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            onSubmit={handleSubmit}
            className="rounded-xl border border-ink-border bg-ink-900/60 p-6 md:p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Name" name="name" type="text" required />
              <Field label="Email" name="email" type="email" required />
            </div>
            <Field label="Subject" name="subject" type="text" />
            <div>
              <label className="block font-mono text-[11px] uppercase tracking-wide text-fog-500 mb-2">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                className="w-full rounded-lg border border-ink-border bg-ink-950/60 px-4 py-3 text-sm text-fog-100 placeholder:text-fog-500 focus:border-teal-400 outline-none transition-colors resize-none"
                placeholder="Tell me about the role or project..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3 font-mono text-[13px] font-medium text-ink-950 hover:bg-amber-300 transition-colors disabled:opacity-60 cursor-pointer"
            >
              {status === "sent" ? (
                <>
                  <FiCheck size={14} /> Sent
                </>
              ) : (
                <>
                  <FiSend size={14} />
                  {status === "sending" ? "Sending..." : "Send message"}
                </>
              )}
            </button>

            {status === "sent" && (
              <p className="font-mono text-[12px] text-teal-400">
                Thanks — I'll reply from {profile.email}.
              </p>
            )}
            {status === "error" && (
              <p className="font-mono text-[12px] text-rose-400">
                Something went wrong. Email me directly at {profile.email}.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block font-mono text-[11px] uppercase tracking-wide text-fog-500 mb-2"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-lg border border-ink-border bg-ink-950/60 px-4 py-3 text-sm text-fog-100 placeholder:text-fog-500 focus:border-teal-400 outline-none transition-colors"
      />
    </div>
  );
}
