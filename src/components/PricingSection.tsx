"use client"

import { Check, X, Building, Globe, Zap } from "lucide-react"
import {
  AnimatedGradientOrbs,
  AnimatedParticles,
  AnimatedHeading,
  AnimatedSparkle,
  AnimatedPricingCard,
  AnimatedRecommendedBadge,
  AnimatedButton,
} from "./client-components"

const pricingPlans = [
  {
    name: "Basic",
    price: "$0",
    period: "/mo",
    description: "Best for individuals exploring learning resources.",
    features: [
      { name: "Access to foundational courses", included: true },
      { name: "Limited practice & revision exercises", included: true },
      { name: "Progress tracking dashboard", included: true },
      { name: "Interactive learning activities", included: true },
      { name: "Email support", included: true },
      { name: "Mobile-friendly learning", included: true },
    ],
    buttonText: "Get Started Free",
    gradient: "from-emerald-400 to-teal-500",
    bgGradient: "from-emerald-50 to-teal-50",
    icon: Globe,
    shadowColor: "rgba(52, 211, 153, 0.2)",
  },
  {
    name: "Pro",
    price: "$49",
    period: "/mo",
    description: "Best for dedicated learners seeking structured progress.",
    features: [
      { name: "Full course access", included: true },
      { name: "Unlimited practice & revision exercises", included: true },
      { name: "Weekly and advanced tests", included: true },
      { name: "Personalized learning insights", included: true },
      { name: "Priority email support", included: true },
      { name: "Performance analytics & goal tracking", included: true },
    ],
    buttonText: "Start 14-Day Free Trial",
    gradient: "from-violet-500 to-purple-600",
    bgGradient: "from-violet-50 to-purple-50",
    icon: Zap,
    recommended: true,
    shadowColor: "rgba(139, 92, 246, 0.25)",
  },
  {
    name: "Enterprise",
    price: "Contact ",
    period: " us",
    description: "Best for institutions and large teams.",
    features: [
      { name: "Unlimited course access", included: true },
      { name: "Custom learning paths", included: true },
      { name: "Dedicated tutor support", included: true },
      { name: "Advanced analytics & reports", included: true },
      { name: "1-on-1 student mentoring", included: true },
      { name: "Priority support & onboarding", included: true },
    ],
    buttonText: "Contact Us",
    gradient: "from-blue-500 to-indigo-600",
    bgGradient: "from-blue-50 to-indigo-50",
    icon: Building,
    shadowColor: "rgba(79, 70, 229, 0.2)",
  },
];

export default function PricingSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient orbs */}
        <AnimatedGradientOrbs />

        {/* Decorative shapes */}
        <div className="absolute top-32 right-[15%] w-12 h-12 rounded-lg bg-purple-400 opacity-10 rotate-12" />
        <div className="absolute top-[40%] left-[10%] w-16 h-16 rounded-full bg-blue-400 opacity-10" />
        <div className="absolute bottom-32 right-[20%] w-20 h-20 rounded-lg bg-emerald-400 opacity-10 rotate-45" />
        <div className="absolute bottom-[20%] left-[20%] w-10 h-10 rounded-full bg-amber-400 opacity-10" />

        {/* Floating particles */}
        <AnimatedParticles />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:linear-gradient(0deg,transparent,black)] opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <AnimatedHeading>
            <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-violet-500 to-transparent rounded-full"></div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Choose the plan thats right for you and start building your next big idea today.
            </p>

            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
              <AnimatedSparkle />
            </div>
          </AnimatedHeading>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <AnimatedPricingCard key={plan.name} index={index} recommended={plan.recommended}>
              {plan.recommended && (
                <div className="absolute -top-4 left-0 right-0 z-20 flex justify-center">
                  <AnimatedRecommendedBadge />
                </div>
              )}

              <div
                className={`h-full rounded-2xl p-8 border backdrop-blur-sm backdrop-filter 
                transition-all duration-300 relative overflow-hidden group
                ${
                  plan.recommended
                    ? "md:p-10 border-violet-200 bg-white shadow-xl shadow-violet-500/10"
                    : "border-slate-200 bg-white/80 shadow-lg hover:shadow-xl"
                }`}
                style={{
                  boxShadow: `0 10px 30px -5px ${plan.shadowColor}`,
                }}
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.bgGradient} opacity-50`}></div>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                  <div
                    className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${plan.gradient} transform rotate-45 translate-x-8 -translate-y-8 opacity-20`}
                  ></div>
                </div>

                <div className="relative">
                  <div className="mb-6">
                    <div className="flex items-center mb-4">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${plan.gradient} text-white mr-3`}>
                        <plan.icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-xl font-semibold">{plan.name}</h3>
                    </div>

                    <div className="flex items-baseline">
                      <span
                        className={`text-5xl font-bold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}
                      >
                        {plan.price}
                      </span>
                      <span className="text-slate-500 ml-1">{plan.period}</span>
                    </div>
                    <div className="text-slate-600 mt-2">{plan.description}</div>
                  </div>

                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        {feature.included ? (
                          <div className={`rounded-full p-1 bg-gradient-to-r ${plan.gradient} bg-opacity-10`}>
                            <Check className={`h-4 w-4 text-white`} />
                          </div>
                        ) : (
                          <div className="rounded-full p-1 bg-slate-100">
                            <X className="h-4 w-4 text-slate-400" />
                          </div>
                        )}
                        <span className={`ml-3 ${feature.included ? "text-slate-800" : "text-slate-500"}`}>
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  <AnimatedButton
                    className={`w-full transition-all relative overflow-hidden
                      ${
                        plan.recommended
                          ? `bg-gradient-to-r ${plan.gradient} hover:shadow-lg hover:shadow-violet-500/20 text-white`
                          : `bg-gradient-to-r ${plan.gradient} hover:shadow-lg text-white`
                      }`}
                  >
                    <span className="relative z-10">{plan.buttonText}</span>
                    <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                  </AnimatedButton>
                </div>
              </div>
            </AnimatedPricingCard>
          ))}
        </div>

        {/* Bottom decorative element */}
        <div className="mt-20 text-center relative">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white shadow-lg border border-slate-100">
            <span className="text-slate-600 mr-2">Need a custom plan?</span>
            <a href="#" className="text-violet-600 font-medium hover:text-violet-700 transition-colors">
              Contact our sales team
            </a>
          </div>

          <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  )
}

