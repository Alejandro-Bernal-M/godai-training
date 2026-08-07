"use client";

import { motion } from "framer-motion";
import { Check, Mountain, Flame, Crown } from "lucide-react";
import { useTranslations } from "next-intl";

const WHATSAPP_NUMBER = "573146594963";

const staticPlans = [
  {
    key: "foundation",
    priceAud: "$90 AUD",
    priceUsd: "$60 USD",
    icon: Mountain,
    highlighted: false,
    featureKeys: ["f1", "f2", "f3", "f4", "f5"],
  },
  {
    key: "performance",
    priceAud: "$120 AUD",
    priceUsd: "$80 USD",
    icon: Flame,
    highlighted: true,
    featureKeys: ["f1", "f2", "f3", "f4", "f5", "f6"],
  },
  {
    key: "mastery",
    priceAud: "$150 AUD",
    priceUsd: "$100 USD",
    icon: Crown,
    highlighted: false,
    featureKeys: ["f1", "f2", "f3", "f4", "f5", "f6"],
  },
];

export default function TrainingPaths() {
  const t = useTranslations("TrainingPaths");

  return (
    <section id="paths" className="bg-[#0A0F14] py-32">
      <div className="mx-auto max-w-7xl px-6">

        {/* HEADER */}
        <div className="mb-24 text-center">
          <p className="mb-4 uppercase tracking-[0.4em] text-lime-400">
            {t("subtitle")}
          </p>

          <h2 className="text-5xl font-black md:text-6xl">
            {t("title_line1")}
            <br />
            {t("title_line2")}
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg text-zinc-400">
            {t("description")}
          </p>
        </div>

        {/* CARDS GRID */}
        <div className="grid gap-8 lg:grid-cols-3 items-start">
          {staticPlans.map((plan, index) => {
            const Icon = plan.icon;
            const hasBadge = plan.key === "performance";
            
            // Construir enlace de WhatsApp con el mensaje traducido dinámicamente
            const rawMessage = t(`plans.${plan.key}.whatsapp_message`);
            const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(rawMessage)}`;

            return (
              <motion.div
                key={plan.key}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className={`relative flex flex-col rounded-[32px] border p-8 backdrop-blur-sm h-full ${
                  plan.highlighted
                    ? "border-lime-400 bg-lime-500/5 lg:scale-105"
                    : "border-zinc-800 bg-zinc-900/40"
                }`}
              >
                {hasBadge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-lime-400 px-4 py-2 text-xs font-bold text-black whitespace-nowrap">
                    {t(`plans.${plan.key}.badge`)}
                  </div>
                )}

                <div className="mb-6 flex items-center gap-4">
                  <Icon className="h-10 w-10 text-lime-400 flex-shrink-0" />

                  <div>
                    <p className="text-xs tracking-[0.3em] text-lime-400 uppercase">
                      {t(`plans.${plan.key}.element`)}
                    </p>

                    <h3 className="text-3xl font-black">
                      {t(`plans.${plan.key}.name`)}
                    </h3>
                  </div>
                </div>

                <div className="mb-6">
                  <span className="text-4xl font-black text-white">
                    {plan.priceAud}
                  /
                  </span>
                  <br />
                  <span className="text-4xl font-black text-white">
                    {plan.priceUsd}
                  </span>

                </div>

                <p className="mb-4 text-xl font-semibold text-white">
                  {t(`plans.${plan.key}.tagline`)}
                </p>

                <p className="mb-8 text-zinc-400">
                  {t(`plans.${plan.key}.description`)}
                </p>

                {/* Listado de características */}
                <div className="mb-10 space-y-4 flex-grow">
                  {plan.featureKeys.map((fKey) => (
                    <div key={fKey} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-lime-400 flex-shrink-0 mt-0.5" />

                      <span className="text-zinc-300">
                        {t(`plans.${plan.key}.features.${fKey}`)}
                      </span>
                    </div>
                  ))}
                </div>

                {/* BOTÓN / ENLACE DE WHATSAPP */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full rounded-full py-4 font-semibold transition text-center cursor-pointer ${
                    plan.highlighted
                      ? "bg-lime-400 text-black hover:bg-lime-300"
                      : "border border-zinc-700 text-zinc-300 hover:border-lime-400 hover:text-white"
                  }`}
                >
                  {t(`plans.${plan.key}.cta`)}
                </a>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}