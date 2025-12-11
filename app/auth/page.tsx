"use client";

import { useEffect, useState } from "react";
import { Shield, ArrowRight } from "lucide-react";

export default function AuthPage() {
  const [page, setPage] = useState<"login" | "signup">("login");

  const showPage = (p: "login" | "signup") => {
    setPage(p);
    document.title = p === "login" ? "Login" : "Create Account";
  };

  useEffect(() => {
    // check session
    let mounted = true;
    (async () => {
      try {
        const res = await fetch("/auth/me");
        const j = await res.json();
        if (mounted && j?.user) {
          const params = new URLSearchParams(window.location.search);
          const next = params.get("next") || "/";
          window.location.href = next;
        }
      } catch (e) {
        // ignore
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl mb-4 shadow-lg">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {page === "login" ? "Welcome Back" : "Create Account"}
            </h1>
            <p className="text-gray-600">
              {page === "login"
                ? "Sign in to continue to your account"
                : "Get started in seconds with Google"}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
            <a
              href={`/auth/google/login?next=${encodeURIComponent(
                typeof window !== "undefined" ? window.location.pathname : "/"
              )}`}
              className={`w-full flex items-center justify-center gap-3 ${
                page === "login"
                  ? "bg-white border-2 border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50"
                  : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
              } rounded-xl px-6 py-4 font-semibold transition-all duration-200 shadow-sm hover:shadow-md group`}
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span>
                {page === "login"
                  ? "Continue with Google"
                  : "Sign up with Google"}
              </span>
              <ArrowRight className="w-5 h-5 ml-auto group-hover:translate-x-1 transition-transform" />
            </a>

            {page === "login" ? (
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500">
                    Secure authentication powered by{" "}
                    <a href="https://github.com/PersuasivePost/zoogle">
                      Zoogle
                    </a>
                  </span>
                </div>
              </div>
            ) : (
              <div className="space-y-3 pt-4">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                    <svg
                      className="w-3 h-3 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">
                      No password needed
                    </p>
                    <p className="text-sm text-gray-600">
                      Sign in securely with your Google account
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                    <svg
                      className="w-3 h-3 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Quick setup</p>
                    <p className="text-sm text-gray-600">
                      Get started in under 2 minutes
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                    <svg
                      className="w-3 h-3 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Always secure</p>
                    <p className="text-sm text-gray-600">
                      Protected by OAuth 2.0 standards
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="text-center mt-6">
            <p className="text-gray-600">
              {page === "login" ? (
                <>
                  Don't have an account?{" "}
                  <button
                    onClick={() => showPage("signup")}
                    className="font-semibold text-blue-600"
                  >
                    Sign up
                  </button>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <button
                    onClick={() => showPage("login")}
                    className="font-semibold text-purple-600"
                  >
                    Sign in
                  </button>
                </>
              )}
            </p>
          </div>

          <div className="text-center mt-8 text-sm text-gray-500">
            <p>
              {page === "login"
                ? "Protected by Google OAuth 2.0"
                : "Powered by Zoogle 🚀"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
