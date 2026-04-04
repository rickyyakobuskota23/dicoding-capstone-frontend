import Link from "next/link";
import { GraduationCap, BookOpen, Sparkles, Users } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-slate-100" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28">
          {/* Navbar */}
          <header className="flex items-center justify-between mb-16">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-blue-600 flex items-center justify-center shadow-sm">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-lg font-semibold tracking-tight">
                  Learning Studio
                </p>
                <p className="text-sm text-gray-500">
                  Personalized teaching support
                </p>
              </div>
            </div>

            <nav className="flex items-center gap-3">
              <Link
                href="/sign-in"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition"
              >
                Sign In
              </Link>
              <Link
                href="/sign-up"
                className="px-5 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition shadow-sm"
              >
                Sign Up
              </Link>
            </nav>
          </header>

          {/* Hero Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-sm text-blue-700 shadow-sm mb-6">
                <Sparkles className="w-4 h-4" />
                Designed for thoughtful, differentiated teaching
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                A modern space for
                <span className="text-blue-600"> personalized learning </span>
                design.
              </h1>

              <p className="mt-6 text-lg text-gray-600 leading-8">
                Support teachers in planning learning experiences that respond to
                student needs, learning differences, and classroom goals with a
                clear, elegant, and practical workflow.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/sign-up"
                  className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition shadow-sm text-center"
                >
                  Get Started
                </Link>
                <Link
                  href="/sign-in"
                  className="px-6 py-3 rounded-xl border border-gray-300 bg-white text-gray-800 font-medium hover:bg-gray-50 transition text-center"
                >
                  Sign In
                </Link>
              </div>

              <div className="mt-10 flex items-center gap-8 text-sm text-gray-500">
                <div>
                  <p className="font-semibold text-gray-900">Teacher-first</p>
                  <p>Simple and practical flow</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Minimal UI</p>
                  <p>Focused on clarity</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Scalable</p>
                  <p>Ready for future features</p>
                </div>
              </div>
            </div>

            {/* Right Showcase Card */}
            <div className="relative">
              <div className="rounded-3xl border border-gray-200 bg-white shadow-xl shadow-slate-200/50 p-6 md:p-8">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <p className="text-sm text-gray-500">Today’s focus</p>
                    <h2 className="text-xl font-semibold mt-1">
                      Differentiated Lesson Planning
                    </h2>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-blue-600" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100">
                    <p className="text-sm text-gray-500 mb-1">Objective</p>
                    <p className="font-medium text-gray-900">
                      Build student understanding through flexible learning paths
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100">
                    <p className="text-sm text-gray-500 mb-1">Support</p>
                    <p className="font-medium text-gray-900">
                      Adjust content, process, and output for diverse learners
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100">
                    <p className="text-sm text-gray-500 mb-1">Class insight</p>
                    <p className="font-medium text-gray-900">
                      Organize learner profiles and plan with greater intention
                    </p>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-gray-100 p-4">
                    <Users className="w-5 h-5 text-blue-600 mb-3" />
                    <p className="font-medium text-gray-900">Student Profiles</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Understand learner readiness and preferences
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-100 p-4">
                    <Sparkles className="w-5 h-5 text-blue-600 mb-3" />
                    <p className="font-medium text-gray-900">Smart Planning</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Turn teaching ideas into structured plans
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -z-10 -bottom-6 -right-6 w-40 h-40 rounded-full bg-blue-100/50 blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-medium text-blue-600 mb-3">
            Why Learning Studio
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Built for meaningful classroom practice
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            A focused platform that helps teachers plan more intentionally
            without unnecessary complexity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-5">
              <BookOpen className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Lesson Planning</h3>
            <p className="text-gray-600 leading-7">
              Create lesson plans with a structure that supports differentiated
              instruction and practical classroom use.
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-5">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Learner Awareness</h3>
            <p className="text-gray-600 leading-7">
              Keep student needs visible so planning decisions are grounded in
              real classroom diversity.
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-5">
              <Sparkles className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Elegant Workflow</h3>
            <p className="text-gray-600 leading-7">
              Minimal interface, clear navigation, and a calm visual design that
              supports focused work.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}