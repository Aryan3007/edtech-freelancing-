"use client"

import { motion } from "framer-motion"
import { Check, X, HelpCircle, Sparkles } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const features = [
  {
    name: "Adaptive & Structured Learning",
    tooltip: "How the platform adapts to individual student needs and structures the learning process",
    companies: {
      gradeNext: "Adaptive & Personalized",
      kumon: "Fixed Progression",
      mathnasium: "Fixed Progression",
      koncept: "Partially Adaptive",
      khanAcademy: "Self-Paced Only",
    },
  },
  {
    name: "Retention-Based Smart Revisions",
    tooltip: "Systems in place to ensure students retain what they've learned",
    companies: {
      gradeNext: "AI-Powered Revisions",
      kumon: "Manual Repetition",
      mathnasium: "Limited Review",
      koncept: "No Structured Revisions",
      khanAcademy: "Student-Led Only",
    },
  },
  {
    name: "Personalized 1:1 Learning",
    tooltip: "Availability of one-on-one personalized learning support",
    companies: {
      gradeNext: "Dedicated Tutor Support",
      kumon: "Group-Based",
      mathnasium: "Group-Based",
      koncept: "Limited Tutor Access",
      khanAcademy: "No Direct Tutoring",
    },
  },
  {
    name: "AI-Powered Performance Analytics",
    tooltip: "Advanced analytics to track and improve student performance",
    companies: {
      gradeNext: "Real-Time Insights",
      kumon: "No Analytics",
      mathnasium: "Limited Data",
      koncept: "Basic Tracking",
      khanAcademy: "Generalized Feedback",
    },
  },
  {
    name: "Structured Testing & Weekly Assessments",
    tooltip: "Regular assessment systems to measure progress",
    companies: {
      gradeNext: "Weekly & Community Tests",
      kumon: "No Weekly Tracking",
      mathnasium: "Math-Only Tests",
      koncept: "Periodic Assessments",
      khanAcademy: "No Regular Testing",
    },
  },
  {
    name: "Topic-Wise Practice & Reinforcement",
    tooltip: "Focused practice on specific topics to reinforce learning",
    companies: {
      gradeNext: "Targeted & Adaptive",
      kumon: "Repetitive Practice",
      mathnasium: "Focused on Math",
      koncept: "Limited Subject Coverage",
      khanAcademy: "Generalized Exercises",
    },
  },
]

const companies = [
  {
    id: "gradeNext",
    name: "GradeNext",
    color: "from-emerald-500 to-teal-600",
    lightColor: "from-emerald-50 to-teal-50",
  },
  {
    id: "kumon",
    name: "Kumon",
    color: "from-blue-500 to-indigo-600",
    lightColor: "from-blue-50 to-indigo-50",
  },
  {
    id: "mathnasium",
    name: "Mathnasium",
    color: "from-purple-500 to-violet-600",
    lightColor: "from-purple-50 to-violet-50",
  },
  {
    id: "koncept",
    name: "Koncept",
    color: "from-orange-500 to-amber-600",
    lightColor: "from-orange-50 to-amber-50",
  },
  {
    id: "khanAcademy",
    name: "Khan Academy",
    color: "from-rose-500 to-pink-600",
    lightColor: "from-rose-50 to-pink-50",
  },
]

const CellContent = ({ value, gradient }: { value: string; gradient: string }) => {
  // Check if the value starts with specific keywords to determine the display type
  if (
    value.startsWith("✓") ||
    value.includes("Adaptive") ||
    value.includes("AI-Powered") ||
    value.includes("Dedicated") ||
    value.includes("Real-Time") ||
    value.includes("Weekly") ||
    value.includes("Targeted")
  ) {
    return (
      <div className="flex items-center gap-2">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.2 }}
          className={`w-8 h-8 rounded-full bg-gradient-to-r ${gradient} flex items-center justify-center`}
        >
          <Check className="w-5 h-5 text-white" />
        </motion.div>
        <span className="text-sm text-slate-700">{value.replace("✓", "").trim()}</span>
      </div>
    )
  } else if (
    value.startsWith("✗") ||
    value.includes("Fixed") ||
    value.startsWith("No") ||
    value.includes("Limited") ||
    value.includes("Group") ||
    value.includes("Generalized") ||
    value.includes("Self-Paced") ||
    value.includes("Student-Led")
  ) {
    return (
      <div className="flex items-center gap-2">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.2 }}
          className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center"
        >
          <X className="w-5 h-5 text-red-600" />
        </motion.div>
        <span className="text-sm text-slate-700">{value.replace("✗", "").trim()}</span>
      </div>
    )
  } else if (
    value.includes("Partially") ||
    value.includes("Basic") ||
    value.includes("Periodic") ||
    value.includes("Repetitive") ||
    value.includes("Focused")
  ) {
    return (
      <div className="flex items-center gap-2">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.2 }}
          className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center"
        >
          <Check className="w-5 h-5 text-amber-600" />
        </motion.div>
        <span className="text-sm text-slate-700">{value}</span>
      </div>
    )
  }

  return (
    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm font-medium text-slate-700">
      {value}
    </motion.span>
  )
}

export default function UpdatedComparisonTable() {
  return (
    <TooltipProvider>
      <div className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles className="h-6 w-6 text-emerald-500" />
              <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600">
                Learning Platform Comparison
              </h2>
              <Sparkles className="h-6 w-6 text-teal-500" />
            </div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              See how Grade Next compares to other leading educational platforms
            </p>
          </motion.div>

          {/* Table */}
          <div className="relative overflow-x-auto rounded-xl shadow-2xl border border-slate-200">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="bg-gradient-to-r from-violet-50 to-purple-50 p-4 text-left min-w-[200px]">
                    <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-purple-600">
                      FEATURE
                    </span>
                  </th>
                  {companies.map((company, index) => (
                    <th
                      key={company.id}
                      className={`bg-gradient-to-r ${company.lightColor} p-4 text-center min-w-[180px]`}
                    >
                      <motion.span
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r ${company.color}`}
                      >
                        {company.name}
                      </motion.span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {features.map((feature, rowIndex) => (
                  <motion.tr
                    key={feature.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: rowIndex * 0.05 }}
                    className="border-t border-slate-200 group"
                  >
                    <td className="bg-gradient-to-r from-violet-50 to-purple-50 p-4">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-slate-700">{feature.name}</span>
                        <Tooltip>
                          <TooltipTrigger>
                            <HelpCircle className="w-4 h-4 text-slate-400" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{feature.tooltip}</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    </td>
                    {companies.map((company) => (
                      <td
                        key={`${feature.name}-${company.id}`}
                        className={`bg-gradient-to-r ${company.lightColor} p-4`}
                      >
                        <div className="flex justify-start pl-4">
                          <CellContent
                            value={feature.companies[company.id as keyof typeof feature.companies]}
                            gradient={company.color}
                          />
                        </div>
                      </td>
                    ))}
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Legend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex justify-center gap-8 flex-wrap"
          >
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
              <span className="text-slate-600">Available/Advanced</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center">
                <Check className="w-4 h-4 text-amber-600" />
              </div>
              <span className="text-slate-600">Partially Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                <X className="w-4 h-4 text-red-600" />
              </div>
              <span className="text-slate-600">Limited or Not Available</span>
            </div>
          </motion.div>
        </div>
      </div>
    </TooltipProvider>
  )
}

