import { SignIn } from '@clerk/nextjs';
import { GraduationCap} from "lucide-react";

export default function Signin() {
    return (
    <div className="min-h-screen flex">
      {/* Left Side - Illustration (Hidden on mobile) */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 p-12 items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 text-white max-w-md">
          <div className="mb-8">
            <GraduationCap className="w-16 h-16 mb-6" />
            <h1 className="text-4xl mb-4">Welcome to Differentiated Learning Studio</h1>
            <p className="text-blue-100 text-lg">
              Empower every student with AI-driven personalized lesson plans designed for diverse learning needs.
            </p>
          </div>

          <div className="space-y-4 mt-12">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur">
                <span className="text-2xl">🎯</span>
              </div>
              <div>
                <h3 className="font-medium">AI-Powered Plans</h3>
                <p className="text-sm text-blue-100">Generate differentiated lessons in minutes</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur">
                <span className="text-2xl">👥</span>
              </div>
              <div>
                <h3 className="font-medium">Student Profiles</h3>
                <p className="text-sm text-blue-100">Track individual learning preferences</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur">
                <span className="text-2xl">📊</span>
              </div>
              <div>
                <h3 className="font-medium">Analytics & Insights</h3>
                <p className="text-sm text-blue-100">Monitor progress and effectiveness</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Clerk Sign In Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl text-gray-900 font-semibold">Learning Studio</span>
            </div>

            <h2 className="text-3xl text-gray-900 mb-2 font-bold">Sign in to your account</h2>
            <p className="text-gray-600">Welcome back! Please enter your details.</p>
          </div>

          {/* Clerk's SignIn Component */}
          <SignIn
            appearance={{
              elements: {
                formButtonPrimary:
                  "bg-blue-600 hover:bg-blue-700 text-sm normal-case",
                card: "shadow-none border-none p-0",
                headerTitle: "hidden",
                headerSubtitle: "hidden",
                socialButtonsBlockButton: "border-gray-200 hover:bg-gray-50",
                formFieldInput: "rounded-xl border-gray-200 bg-gray-50",
                footer: "hidden"
              }
            }}
          />

          <p className="text-center text-sm text-gray-600 mt-6">
            Don't have an account?{" "}
            <a href="/sign-up" className="text-blue-600 hover:text-blue-700 font-medium">
              Create Account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}