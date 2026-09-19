import React from "react";
import {
  Clock3,
  FileQuestion,
  CheckCircle2,
  ArrowRight,
  Brain,
  Target,
  Zap,
  ShieldCheck,
} from "lucide-react";
import { motion } from "motion/react";
import { PageRoute } from "../types";

interface AssessmentProps {
  onNavigate: (page: PageRoute) => void;
}

export const Assessment: React.FC<AssessmentProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0B0F19] text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-indigo-600/10" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-sm font-medium">
                
                TechnoKraft Assessment
              </span>

              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                Test Your Skills.
                <span className="block text-blue-400">
                  Discover Your Potential.
                </span>
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
                Take our online assessment to evaluate your aptitude, reasoning
                and problem-solving skills through a structured multiple-choice
                test.
              </p>

              <div className="mt-8">
                <button
                  onClick={() => onNavigate("assessment-test")}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all shadow-lg shadow-blue-600/20"
                >
                  Start Assessment
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Assessment Overview */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Assessment Overview
            </span>

            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">
              What to Expect
            </h2>

            <p className="mt-4 text-slate-600 leading-relaxed">
              The assessment is designed to provide a quick and structured
              evaluation of your skills.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <FileQuestion className="w-6 h-6" />
              </div>

              <h3 className="mt-5 text-lg font-semibold">Questions</h3>

              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Number of questions will be specified before the assessment
                begins.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <Clock3 className="w-6 h-6" />
              </div>

              <h3 className="mt-5 text-lg font-semibold">Timed Test</h3>

              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                The assessment will be time-based with a fixed duration.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>

              <h3 className="mt-5 text-lg font-semibold">MCQ Based</h3>

              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Each question will have multiple-choice options from which you
                can select your answer.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>

              <h3 className="mt-5 text-lg font-semibold">Instant Result</h3>

              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Your score will be calculated automatically after completing the
                assessment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Areas */}
      <section className="py-16 lg:py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Assessment Areas
              </span>

              <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
                Areas You May Be Tested On
              </h2>

              <p className="mt-5 text-slate-600 leading-relaxed">
                The assessment may include questions that evaluate different
                aspects of analytical and problem-solving ability.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Quantitative Aptitude",
                  "Logical Reasoning",
                  "Verbal Ability",
                  "Problem Solving",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>

                    <span className="font-medium text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6">
                <Brain className="w-8 h-8 text-blue-600" />
                <h3 className="mt-4 font-semibold">Analytical Thinking</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Evaluate patterns and solve logical problems.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6">
                <Target className="w-8 h-8 text-indigo-600" />
                <h3 className="mt-4 font-semibold">Accuracy</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Answer questions carefully within the given time.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6">
                <Zap className="w-8 h-8 text-amber-500" />
                <h3 className="mt-4 font-semibold">Quick Thinking</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Manage your time while solving questions.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6">
                <ShieldCheck className="w-8 h-8 text-emerald-600" />
                <h3 className="mt-4 font-semibold">Fair Assessment</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Receive an automated result after submission.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instructions */}
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-slate-900 text-white p-8 sm:p-10 lg:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold">Before You Begin</h2>

            <div className="mt-6 space-y-4 text-slate-300">
              <div className="flex gap-3">
                <span className="text-blue-400 font-bold">01</span>
                <p>
                  Make sure you have a stable internet connection before
                  starting the assessment.
                </p>
              </div>

              <div className="flex gap-3">
                <span className="text-blue-400 font-bold">02</span>
                <p>
                  Read each question carefully and select the most appropriate
                  answer.
                </p>
              </div>

              <div className="flex gap-3">
                <span className="text-blue-400 font-bold">03</span>
                <p>
                  The assessment will be time-based, so manage your time
                  accordingly.
                </p>
              </div>

              <div className="flex gap-3">
                <span className="text-blue-400 font-bold">04</span>
                <p>
                  Your score will be displayed after the assessment is
                  completed.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-700">
              <button
                onClick={() => onNavigate("assessment-test")}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all"
              >
                Start Test
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
