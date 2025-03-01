"use client"

import { motion } from "framer-motion"
import { Check, X, HelpCircle, Sparkles } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const features = [
  {
    name: "CCSE Certification",
    tooltip: "Comprehensive Computer Science Education Certification",
    companies: {
      koncept: true,
      kumon: false,
      mathanasium: false,
      khanAcademy: "partial",
      ixl: false,
    },
  },
  {
    name: "Structure",
    tooltip: "Learning structure and methodology",
    companies: {
      koncept: "adaptive",
      kumon: "sequential",
      mathanasium: "sequential",
      khanAcademy: "flex",
      ixl: "flex",
    },
  },
  {
    name: "Retention Measurement",
    tooltip: "Tracking and measuring student retention rates",
    companies: {
      koncept: true,
      kumon: false,
      mathanasium: false,
      khanAcademy: false,
      ixl: false,
    },
  },
  {
    name: "Cookie Cutter",
    tooltip: "Standardized approach to learning",
    companies: {
      koncept: false,
      kumon: true,
      mathanasium: true,
      khanAcademy: false,
      ixl: false,
    },
  },
  {
    name: "Student to Teacher Ratio",
    tooltip: "Average number of students per teacher",
    companies: {
      koncept: "1 ON 1",
      kumon: "1 TO 10",
      mathanasium: "1 TO 10",
      khanAcademy: "NA",
      ixl: "NA",
    },
  },
  {
    name: "Wealth of Student Data",
    tooltip: "Comprehensive student performance analytics",
    companies: {
      koncept: true,
      kumon: false,
      mathanasium: false,
      khanAcademy: true,
      ixl: true,
    },
  },
  {
    name: "1 ON 1 Tutoring",
    tooltip: "Personalized one-on-one tutoring sessions",
    companies: {
      koncept: true,
      kumon: false,
      mathanasium: false,
      khanAcademy: false,
      ixl: false,
    },
  },
  {
    name: "National Council of Teachers",
    tooltip: "Affiliated with National Council of Teachers",
    companies: {
      koncept: true,
      kumon: false,
      mathanasium: false,
      khanAcademy: false,
      ixl: false,
    },
  },
  {
    name: "National Reading Panel",
    tooltip: "Aligned with National Reading Panel guidelines",
    companies: {
      koncept: true,
      kumon: false,
      mathanasium: false,
      khanAcademy: false,
      ixl: false,
    },
  },
  {
    name: "Stanford Partnership",
    tooltip: "Official partnership with Stanford University",
    companies: {
      koncept: true,
      kumon: false,
      mathanasium: false,
      khanAcademy: false,
      ixl: false,
    },
  },
]

const companies = [
  {
    id: "koncept",
    name: "Grade Next",
    color: "from-emerald-900 to-teal-600",
    lightColor: "from-emerald-50 to-teal-50",
  },
  {
    id: "kumon",
    name: "KUMON",
    color: "from-blue-500 to-indigo-600",
    lightColor: "from-blue-50 to-indigo-50",
  },
  {
    id: "mathanasium",
    name: "MATHANASIUM",
    color: "from-purple-500 to-violet-600",
    lightColor: "from-purple-50 to-violet-50",
  },
  {
    id: "khanAcademy",
    name: "KHAN ACADEMY",
    color: "from-orange-500 to-amber-600",
    lightColor: "from-orange-50 to-amber-50",
  },
  {
    id: "ixl",
    name: "IXL",
    color: "from-rose-500 to-pink-600",
    lightColor: "from-rose-50 to-pink-50",
  },
]

const CellContent = ({ value, gradient }: { value: boolean | string, gradient: string }) => {
  if (typeof value === "boolean") {
    return value ? (
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.2 }}
        className={`w-8 h-8 rounded-full bg-gradient-to-r ${gradient} flex items-center justify-center`}
      >
        <Check className="w-5 h-5 text-white" />
      </motion.div>
    ) : (
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.2 }}
        className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center"
      >
        <X className="w-5 h-5 text-red-600" />
      </motion.div>
    )
  }
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`text-sm font-medium ${
        value === "partial"
          ? "text-amber-600"
          : value === "NA"
            ? "text-slate-400"
            : `bg-gradient-to-r ${gradient} bg-clip-text text-transparent`
      }`}
    >
      {value.toUpperCase()}
    </motion.span>
  )
}

export default function ComparisonTable() {
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
                Platform Comparison
              </h2>
              <Sparkles className="h-6 w-6 text-teal-500" />
            </div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              See how we stack up against other learning platforms
            </p>
          </motion.div>

          {/* Table */}
          <div className="relative overflow-x-auto rounded-xl shadow-2xl border border-slate-200">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="bg-gradient-to-r from-violet-50 to-purple-50 p-4 text-left min-w-[200px]">
                    <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-purple-600">
                      FEATURES
                    </span>
                  </th>
                  {companies.map((company, index) => (
                    <th
                      key={company.id}
                      className={`bg-gradient-to-r ${company.lightColor} p-4 text-center min-w-[140px]`}
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
                        <div className="flex justify-center">
                        <CellContent value={feature.companies[company.id as keyof typeof feature.companies]} gradient={company.color} />                        </div>
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
              <span className="text-slate-600">Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                <X className="w-4 h-4 text-red-600" />
              </div>
              <span className="text-slate-600">Not Available</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-amber-600 font-medium">PARTIAL</span>
              <span className="text-slate-600">Partially Available</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-400 font-medium">NA</span>
              <span className="text-slate-600">Not Applicable</span>
            </div>
          </motion.div>
        </div>
      </div>
    </TooltipProvider>
  )
}

