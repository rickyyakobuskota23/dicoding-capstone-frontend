import Link from "next/link";
import { GraduationCap, BookOpen, Sparkles, Users } from "lucide-react";
import { ModeToggle } from "@/components/web/theme-toggle";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 bg-linear-to-br from-blue-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 py-12 md:py-20">
          {/* Navbar */}
          <header className="flex items-center justify-between mb-16">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/20">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-lg font-bold tracking-tight">
                  Learning Studio
                </p>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                  Personalized teaching
                </p>
              </div>
            </div>

            <nav className="flex items-center gap-6">
              <Link
                href="/sign-in"
                className="text-sm font-medium text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                Sign In
              </Link>
              <Link
                href="/sign-up"
                className="px-5 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition shadow-md shadow-blue-600/20"
              >
                Get Started
              </Link>
              <div className="border-l border-border pl-6">
                <ModeToggle />
              </div>
            </nav>
          </header>

          {/* Hero Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 dark:border-blue-900/50 bg-blue-50/50 dark:bg-blue-900/20 px-4 py-2 text-sm text-blue-700 dark:text-blue-300 mb-8">
                <Sparkles className="w-4 h-4" />
                <span className="font-medium">New: AI-Driven Lesson Differentiation</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
                Personalize your <br/>
                <span className="text-blue-600 bg-clip-text">teaching </span>
                experience.
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed mb-10">
                Plan learning experiences that respond to student needs and classroom goals with a clear, elegant, and AI-powered workflow.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/sign-up"
                  className="px-8 py-4 rounded-2xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition shadow-xl shadow-blue-600/25 text-center"
                >
                  Start Planning Free
                </Link>
                <Link
                  href="/sign-in"
                  className="px-8 py-4 rounded-2xl border border-border bg-card hover:bg-accent transition text-center font-semibold"
                >
                  View Demo
                </Link>
              </div>
            </div>

            {/* Showcase Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-cyan-500 rounded-[2rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative rounded-[2rem] border border-border bg-card p-8 md:p-10 shadow-2xl">
                <div className="flex items-center justify-between mb-10">
                  <div>
                    <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">Active Module</p>
                    <h2 className="text-2xl font-bold">Differentiated Plan</h2>
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-950 flex items-center justify-center">
                    <BookOpen className="w-7 h-7 text-blue-600" />
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    { label: "Objective", text: "Flexible learning paths for Grade 8 Math" },
                    { label: "Strategy", text: "Scaffolded content for diverse readiness levels" },
                  ].map((item, i) => (
                    <div key={i} className="rounded-2xl bg-muted/50 p-5 border border-border/50">
                      <p className="text-xs font-semibold text-muted-foreground mb-1 uppercase">{item.label}</p>
                      <p className="font-medium">{item.text}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-border p-5 bg-background/50">
                    <Users className="w-5 h-5 text-blue-600 mb-3" />
                    <p className="font-bold text-sm">Student Profiles</p>
                    <p className="text-xs text-muted-foreground mt-1">Ready-to-use insights</p>
                  </div>
                  <div className="rounded-2xl border border-border p-5 bg-background/50">
                    <Sparkles className="w-5 h-5 text-blue-600 mb-3" />
                    <p className="font-bold text-sm">AI Assistant</p>
                    <p className="text-xs text-muted-foreground mt-1">Smart suggestions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">
            Platform Features
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Built for meaningful classroom practice
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A focused platform that helps teachers plan more intentionally without the overwhelming complexity of traditional tools.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <BookOpen className="w-6 h-6 text-blue-600" />,
              title: "Smart Planning",
              desc: "Create lesson plans that automatically adapt to different student readiness levels."
            },
            {
              icon: <Users className="w-6 h-6 text-blue-600" />,
              title: "Learner Awareness",
              desc: "Centralize student data to ensure every plan is grounded in real classroom diversity."
            },
            {
              icon: <Sparkles className="w-6 h-6 text-blue-600" />,
              title: "AI Co-Pilot",
              desc: "Get intelligent suggestions for activities, scaffolding, and assessment strategies."
            }
          ].map((feature, i) => (
            <div key={i} className="group p-8 rounded-[2rem] border border-border bg-card hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/5 transition duration-300">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
              <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}