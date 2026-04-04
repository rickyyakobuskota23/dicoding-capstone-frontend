import { SignUp } from '@clerk/nextjs';
import { GraduationCap } from "lucide-react";

export default function Signup() {
  return (
    <div className="min-h-screen flex bg-background">
      {/* Left Side - Illustration */}
      <div className="hidden lg:flex lg:w-1/2 bg-linear-to-br from-blue-700 via-blue-600 to-blue-500 dark:from-blue-900 dark:via-slate-900 dark:to-blue-950 p-12 items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 text-white max-w-md">
          <div className="mb-8">
            <GraduationCap className="w-16 h-16 mb-6" />
            <h1 className="text-4xl mb-4 font-bold">Welcome to Differentiated Learning Studio</h1>
            <p className="text-blue-100 text-lg">
              Empower every student with AI-driven personalized lesson plans designed for diverse learning needs.
            </p>
          </div>
          {/* ... list items same as Sign In ... */}
        </div>
      </div>

      {/* Right Side - Clerk Sign Up Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-white dark:bg-slate-950">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl text-gray-900 dark:text-white font-semibold">Learning Studio</span>
            </div>

            <h2 className="text-3xl text-gray-900 dark:text-white mb-2 font-bold">Create your account</h2>
            <p className="text-gray-600 dark:text-gray-400">Get started with your free account today.</p>
          </div>

          <SignUp
            appearance={{
              elements: {
                formButtonPrimary: "bg-blue-600 hover:bg-blue-700 text-sm normal-case",
                card: "shadow-none border-none p-0 bg-transparent",
                headerTitle: "hidden",
                headerSubtitle: "hidden",
                socialButtonsBlockButton: "border-gray-200 dark:border-slate-800 hover:bg-gray-50 dark:hover:bg-slate-900 dark:text-white",
                formFieldInput: "rounded-xl border-gray-200 dark:border-slate-800 bg-gray-50 dark:bg-slate-900 dark:text-white",
                formFieldLabel: "dark:text-gray-300",
                footer: "hidden"
              }
            }}
          />

          <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-6">
            Already have an account?{" "}
            <a href="/sign-in" className="text-blue-600 hover:text-blue-700 font-medium">
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}