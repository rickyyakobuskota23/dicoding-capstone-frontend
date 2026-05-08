"use client";

import { Sparkles, MousePointer2, Wand2, CheckCircle, Info } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const LessonGeneratorEmptyState = () => {
  return (
    <div className="h-full flex items-center justify-center p-8 bg-slate-50/50">
      <div className="max-w-2xl w-full text-center space-y-8 animate-in fade-in zoom-in duration-500">

        {/* Hero Section */}
        <div className="space-y-4">
          <div className="relative mx-auto w-24 h-24">
            <div className="absolute inset-0 bg-blue-100 rounded-full animate-pulse" />
            <div className="relative flex items-center justify-center h-full">
              <Sparkles className="w-12 h-12 text-blue-600" />
            </div>
            <div className="absolute -top-1 -right-1 bg-white p-1.5 rounded-lg shadow-sm border border-slate-100">
              <Wand2 className="w-4 h-4 text-purple-500" />
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
              Ready to create something amazing?
            </h2>
            <p className="text-slate-500 text-lg max-w-md mx-auto">
              Fill in the details on the left to generate a personalized,
              differentiated lesson plan in seconds.
            </p>
          </div>
        </div>

        {/* How it Works */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              icon: MousePointer2,
              title: "Input Details",
              desc: "Subject, grade, and topic",
              color: "text-blue-600",
              bg: "bg-blue-50"
            },
            {
              icon: Wand2,
              title: "AI Magic",
              desc: "We generate your plan",
              color: "text-purple-600",
              bg: "bg-purple-50"
            },
            {
              icon: CheckCircle,
              title: "Review & Save",
              desc: "Customize and export",
              color: "text-green-600",
              bg: "bg-green-50"
            }
          ].map((step, i) => (step &&
            <div key={i} className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-2">
              <div className={`w-8 h-8 ${step.bg} rounded-lg flex items-center justify-center mx-auto`}>
                <step.icon className={`w-4 h-4 ${step.color}`} />
              </div>
              <h4 className="font-semibold text-sm text-slate-900">{step.title}</h4>
              <p className="text-xs text-slate-500">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Pro Tip Card */}
        <Card className="border-blue-100 bg-blue-50/30 overflow-hidden">
          <CardContent className="p-4 flex gap-4 text-left">
            <div className="shrink-0 mt-0.5">
              <div className="bg-blue-600 rounded-full p-1">
                <Info className="w-4 h-4 text-white" />
              </div>
            </div>
            <div className="space-y-1">
              <h5 className="text-sm font-bold text-blue-900">Pro Tip</h5>
              <p className="text-xs text-blue-800/80 leading-relaxed">
                Be specific with your <strong>Learning Objectives</strong>. Instead of &#34;Learn fractions&#34;,
                try &#34;Students will be able to add fractions with unlike denominators using visual models.&#34;
                The more detail you give, the better the AI performs!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LessonGeneratorEmptyState;