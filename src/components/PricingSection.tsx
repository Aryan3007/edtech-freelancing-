"use client"

import { motion } from "framer-motion"
import { Check, X, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    period: "/mo",
    description: "Best for 1-5 users",
    features: [
      { name: "One workspace", included: true },
      { name: "Email support", included: true },
      { name: "1 day data retention", included: false },
      { name: "Custom roles", included: false },
      { name: "Priority support", included: false },
      { name: "SSO", included: false },
    ],
    buttonText: "Get started free",
    gradient: "from-gray-100 to-gray-50",
  },
  {
    name: "Pro",
    price: "$79",
    period: "/mo",
    description: "Best for 5-50 users",
    features: [
      { name: "Five workspaces", included: true },
      { name: "Email support", included: true },
      { name: "7 day data retention", included: true },
      { name: "Custom roles", included: true },
      { name: "Priority support", included: false },
      { name: "SSO", included: false },
    ],
    buttonText: "14-day free trial",
    gradient: "from-blue-600 to-violet-600",
    recommended: true,
  },
  {
    name: "Enterprise",
    price: "Contact",
    period: " us",
    description: "Best for 50+ users",
    features: [
      { name: "Unlimited workspaces", included: true },
      { name: "Email support", included: true },
      { name: "30 day data retention", included: true },
      { name: "Custom roles", included: true },
      { name: "Priority support", included: true },
      { name: "SSO", included: true },
    ],
    buttonText: "Contact us",
    gradient: "from-gray-900 to-gray-800",
  },
]

export default function PricingSection() {
  return (
    <section className="py-24  relative overflow-hidden">
     
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-gray-600">Choose the plan thats right for you</p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group ${plan.recommended ? "md:-mt-4 md:mb-4" : ""}`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-0 right-0 z-20 flex justify-center">
                  <span className="bg-gradient-to-r from-blue-600 to-violet-600 text-white text-sm font-medium px-4 py-1 rounded-full inline-flex items-center">
                    <Sparkles className="w-4 h-4 mr-1" />
                    Recommended
                  </span>
                </div>
              )}

              <div
                className={`h-full bg-white rounded-2xl p-8 border border-gray-200 shadow-lg shadow-gray-200/50 
                backdrop-blur-sm backdrop-filter hover:border-gray-300 transition-all duration-300
                ${plan.recommended ? "md:p-10 ring-2 ring-blue-600" : ""}`}
              >
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                    <span className="text-gray-500 ml-1">{plan.period}</span>
                  </div>
                  <div className="text-gray-500 mt-2">{plan.description}</div>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      {feature.included ? (
                        <div className="rounded-full p-1 bg-blue-100">
                          <Check className="h-4 w-4 text-blue-600" />
                        </div>
                      ) : (
                        <div className="rounded-full p-1 bg-gray-100">
                          <X className="h-4 w-4 text-gray-400" />
                        </div>
                      )}
                      <span className={`ml-3 ${feature.included ? "text-gray-900" : "text-gray-500"}`}>
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>

                <Button
                  className={`w-full hover:scale-95 transition-all 
                    ${
                      plan.recommended
                        ? "bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white"
                        : "bg-gray-900 hover:bg-gray-800 text-white"
                    }`}
                  size="lg"
                >
                  {plan.buttonText}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

