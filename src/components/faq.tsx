"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Why is the sky blue?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque laboriosam neque reprehenderit saepe eius dolorum vel consequuntur perspiciatis ad vero.",
  },
  {
    question: "Why did the chicken cross the road?",
    answer:
      "To get to the other side! But seriously, this classic riddle has been making people groan and laugh for generations. It's the ultimate anti-joke that plays with our expectations of complex answers.",
  },
  {
    question: "How many licks does it take to get to the center of a tootsie pop?",
    answer:
      "According to scientific studies, it takes an average of 364 licks to reach the center of a Tootsie Pop. However, this number can vary based on factors like licking technique, saliva composition, and patience levels.",
  },
  {
    question: "Where's Waldo?",
    answer:
      "Waldo could be anywhere in the detailed illustrations! The key to finding him is to scan methodically and look for his distinctive red and white striped shirt, hat, and glasses. He's often hidden in plain sight among crowds of people and busy scenes.",
  },
  {
    question: "Why is the sky blue?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque laboriosam neque reprehenderit saepe eius dolorum vel consequuntur perspiciatis ad vero.",
  },
  {
    question: "Why did the chicken cross the road?",
    answer:
      "To get to the other side! But seriously, this classic riddle has been making people groan and laugh for generations. It's the ultimate anti-joke that plays with our expectations of complex answers.",
  },
]

export default function FAQ() {
  return (
    <section className="py-24 px-4 md:px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Frequently asked questions</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg md:text-xl hover:text-blue-500 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base md:text-lg">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

