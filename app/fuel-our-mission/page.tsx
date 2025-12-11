"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Footer from "@/components/footer";
import { ChevronRight, Heart, Zap, Users, Target, Lightbulb } from "lucide-react";

interface BudgetItem {
  label: string;
  percentage: number;
  amount: string;
  description: string;
  color: string;
}

const budgetData: BudgetItem[] = [
  {
    label: "Research & Development",
    percentage: 35,
    amount: "$35,000",
    description: "Advanced aerodynamics and efficiency optimization",
    color: "from-cyan-500 to-blue-500",
  },
  {
    label: "Manufacturing & Materials",
    percentage: 30,
    amount: "$30,000",
    description: "Lightweight composites and precision components",
    color: "from-blue-500 to-purple-500",
  },
  {
    label: "Logistics & Transportation",
    percentage: 20,
    amount: "$20,000",
    description: "Competition travel and equipment transport",
    color: "from-purple-500 to-pink-500",
  },
  {
    label: "Testing & Validation",
    percentage: 15,
    amount: "$15,000",
    description: "Track testing and performance validation",
    color: "from-pink-500 to-red-500",
  },
];

export default function FuelOurMission() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isCheckingAuth, setIsCheckingAuth] = useState(false);
  const [showAmountModal, setShowAmountModal] = useState(false);
  const [amount, setAmount] = useState("500");
  const [userData, setUserData] = useState<any>(null);
  const totalBudget = 100000;

  const router = useRouter();

  const handleContribute = async () => {
    // Check authentication by calling the /auth/me API
    setIsCheckingAuth(true);
    try {
      const res = await fetch("/auth/me");
      const data = await res.json();

      if (!data?.user) {
        // User not logged in - redirect to auth page
        router?.push("/auth?next=/fuel-our-mission");
        return;
      }

      // User is logged in - show amount modal
      setUserData(data.user);
      setShowAmountModal(true);
    } catch (err) {
      console.error("Auth check error:", err);
      // On error, redirect to auth page to be safe
      router?.push("/auth?next=/fuel-our-mission");
    } finally {
      setIsCheckingAuth(false);
    }
  };

  const handleProceedToPayment = () => {
    const parsed = Number(amount);
    if (Number.isNaN(parsed) || parsed <= 0) {
      alert("Please enter a valid amount");
      return;
    }

    setShowAmountModal(false);
    openRazorpayCheckout(parsed, userData).catch((err) => {
      console.error("Razorpay flow error", err);
      alert("Payment could not be initiated. Check console for details.");
    });
  };

  async function loadRazorpayScript(): Promise<void> {
    if (typeof window === "undefined") return;
    if ((window as any).Razorpay) return;
    return new Promise((res, rej) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => res();
      script.onerror = () => rej(new Error("Failed to load Razorpay script"));
      document.body.appendChild(script);
    });
  }

  async function openRazorpayCheckout(amountInINR: number, user: any) {
    await loadRazorpayScript();

    // Check if Razorpay key is configured
    const razorpayKey = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
    if (!razorpayKey || razorpayKey === "your_key_id_here") {
      alert(
        "❌ Razorpay keys not configured!\n\n" +
          "Please follow these steps:\n" +
          "1. Go to https://dashboard.razorpay.com/\n" +
          "2. Get your Test Mode API keys\n" +
          "3. Add them to .env.local file\n" +
          "4. Restart the dev server\n\n" +
          "Check the console for more details."
      );
      console.error(
        "🔴 RAZORPAY CONFIGURATION ERROR:\n" +
          "The NEXT_PUBLIC_RAZORPAY_KEY_ID environment variable is not set or still has placeholder value.\n\n" +
          "Current value:",
        razorpayKey,
        "\n\n" +
          "Steps to fix:\n" +
          "1. Open .env.local file in project root\n" +
          "2. Replace 'your_key_id_here' with your actual Razorpay Key ID\n" +
          "3. Get keys from: https://dashboard.razorpay.com/app/keys\n" +
          "4. Restart server: pnpm dev"
      );
      throw new Error("Razorpay keys not configured");
    }

    // Create order server-side
    const res = await fetch("/api/payments/razorpay/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: amountInINR, currency: "INR" }),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err?.error || "Order creation failed");
    }
    const order = await res.json();

    const options: any = {
      key: razorpayKey,
      amount: order.amount, // in currency subunits (paise for INR)
      currency: order.currency,
      name: "Team Eta - KJSSE",
      description: "Fuel Our Mission - Shell Eco-Marathon 2025",
      image: "/placeholder-logo.png", // Your logo
      order_id: order.id,
      prefill: {
        name: user?.name || "",
        email: user?.email || "",
        contact: user?.mobile || "",
      },
      notes: {
        purpose: "Crowdfunding for Shell Eco-Marathon",
        team: "Team Eta",
      },
      theme: {
        color: "#14b8a6", // Teal-500
      },
      handler: async function (response: any) {
        // Payment successful - verify on server
        try {
          const verifyRes = await fetch("/api/payments/razorpay/verify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }),
          });

          const verifyData = await verifyRes.json();

          if (verifyRes.ok && verifyData.success) {
            // Redirect to success page
            router.push(
              `/payment-success?payment_id=${response.razorpay_payment_id}&order_id=${response.razorpay_order_id}`
            );
          } else {
            alert(
              "Payment verification failed. Please contact support with Payment ID: " +
                response.razorpay_payment_id
            );
          }
        } catch (err) {
          console.error("Verification error:", err);
          alert(
            "Payment completed but verification failed. Please contact support with Payment ID: " +
              response.razorpay_payment_id
          );
        }
      },
      modal: {
        ondismiss: function () {
          console.log("Payment modal closed by user");
        },
        escape: true,
        backdropclose: false,
      },
    };

    const rzp = new (window as any).Razorpay(options);

    // Handle payment failure
    rzp.on("payment.failed", function (response: any) {
      console.error("Payment failed:", response.error);
      alert(
        `Payment Failed!\nReason: ${response.error.description}\nPlease try again.`
      );
    });

    rzp.open();
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Amount Modal */}
      {showAmountModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 transform transition-all animate-scale-in">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Enter Contribution Amount
            </h2>
            <p className="text-muted-foreground mb-6">
              Every contribution helps Team Eta achieve excellence at the Shell
              Eco-Marathon!
            </p>

            <div className="mb-6">
              <label className="block text-sm font-medium text-foreground mb-2">
                Amount (INR)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground text-lg font-semibold">
                  ₹
                </span>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-background border-2 border-border rounded-lg focus:border-primary focus:outline-none text-lg font-semibold transition-colors"
                  placeholder="500"
                  min="1"
                  autoFocus
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleProceedToPayment();
                    }
                  }}
                />
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Minimum: ₹1 • Suggested: ₹500
              </p>
            </div>

            {/* Quick Amount Buttons */}
            <div className="grid grid-cols-4 gap-2 mb-6">
              {[100, 500, 1000, 2000].map((preset) => (
                <button
                  key={preset}
                  onClick={() => setAmount(String(preset))}
                  className="py-2 px-3 border-2 border-border rounded-lg hover:border-primary hover:bg-primary/10 transition-all font-semibold text-sm"
                >
                  ₹{preset}
                </button>
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowAmountModal(false)}
                className="flex-1 py-3 px-6 border-2 border-border rounded-lg hover:bg-muted font-bold transition-all"
              >
                Cancel
              </button>
              <button
                onClick={handleProceedToPayment}
                className="flex-1 py-3 px-6 bg-gradient-to-r from-primary to-cyan-600 hover:from-primary/90 hover:to-cyan-700 text-white font-bold rounded-lg transition-all shadow-lg hover:scale-105"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        {/* Floating gradient orbs */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-b from-primary/15 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 left-1/4 w-96 h-96 bg-gradient-to-t from-cyan-500/15 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold animate-fade-in">
              <Zap className="w-4 h-4" />
              <span>Crowdfunding Campaign</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 animate-slide-up delay-100">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-blue-600">FUEL OUR MISSION</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground font-light animate-slide-up delay-200">
              Help Us Cross the Finish Line
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-cyan-500 rounded-full mx-auto mt-8 animate-slide-up delay-300"></div>
          </div>

          {/* Story Section */}
          <div className="mb-20 animate-slide-up delay-200">
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 via-cyan-500/30 to-primary/30 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm border-2 border-primary/20 group-hover:border-primary/50 rounded-2xl p-8 sm:p-12 transition-all duration-500">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <Lightbulb className="text-primary w-7 h-7" />
                  </div>
                  So Good, So Far!
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                  Team Eta, a dedicated group of students from KJSSE, Mumbai, is
                  embarking on an ambitious endeavor to design and construct a
                  high-efficiency vehicle for the prestigious Shell Eco-Marathon
                  competition. With a proven track record in sustainable
                  automotive development, including notable achievements such as
                  Mahil in 2019 and Arya in 2015, the team is poised to excel once
                  again.
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Recognizing the importance of securing funding for their
                  project, Team Eta has outlined specific areas where support is
                  needed, ranging from logistics to research and development. To
                  achieve our goals, we propose launching a crowdfunding campaign
                  to engage with our community and wider audience, aiming not only
                  to raise necessary funds but also to raise awareness about our
                  project's significance. With a clear plan and unwavering
                  determination, Team Eta is optimistic about the potential of
                  crowdfunding to propel our project forward and make a meaningful
                  impact in the Shell Eco-Marathon 2026.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mb-20 animate-slide-up delay-300">
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/40 via-cyan-500/40 to-primary/40 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative bg-gradient-to-br from-primary/10 via-cyan-500/10 to-primary/10 backdrop-blur-sm border-2 border-primary/30 group-hover:border-primary/60 rounded-3xl p-12 transition-all duration-500 hover:shadow-[0_20px_60px_-10px_rgba(88,159,246,0.3)]">
                <h2 className="text-4xl sm:text-5xl font-black mb-6 text-foreground">
                  Ready to Make Impact?
                </h2>
                <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                  Every contribution brings us closer to victory at the Shell
                  Eco-Marathon. Join our mission to build the future of
                  sustainable mobility.
                </p>
                <button
                  onClick={() =>
                    window.open("https://forms.gle/ktrENLjZCaXgNUUq7", "_blank")
                  }
                  className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-primary to-cyan-600 hover:from-primary/90 hover:to-cyan-700 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(88,159,246,0.4)] hover:shadow-[0_0_50px_rgba(34,211,238,0.6)] group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    CONTRIBUTE NOW
                    <ChevronRight
                      className="group-hover:translate-x-1 transition-transform"
                      size={20}
                    />
                  </span>
                  {/* Button shine effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                </button>
              </div>
            </div>
          </div>

          {/*
          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 flex items-center gap-3">
              <Target className="text-teal-600" size={32} />
              Thinking, Where Your Money Goes?
            </h2>

            <div className="mb-12">
              <div className="flex h-20 rounded-xl overflow-hidden shadow-2xl border border-gray-200">
                {budgetData.map((item, index) => (
                  <div
                    key={index}
                    className={`relative group transition-all duration-300 cursor-pointer ${
                      hoveredIndex === null || hoveredIndex === index
                        ? "opacity-100"
                        : "opacity-60"
                    }`}
                    style={{ width: `${item.percentage}%` }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div
                      className={`w-full h-full bg-linear-to-r ${item.color} opacity-80 group-hover:opacity-100 transition-opacity`}
                    />
                    {item.percentage >= 15 && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white font-bold text-sm">
                          {item.percentage}%
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {budgetData.map((item, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-lg border transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                    hoveredIndex === index
                      ? "bg-white border-teal-600 shadow-lg shadow-teal-600/20"
                      : "bg-white border-gray-200 hover:border-gray-300"
                  }`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-gray-900">
                      {item.label}
                    </h3>
                    <span
                      className={`text-2xl font-bold bg-linear-to-r ${item.color} bg-clip-text text-transparent`}
                    >
                      {item.amount}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                  <div className="mt-4 w-full bg-gray-200 rounded-full h-1.5">
                    <div
                      className={`h-full rounded-full bg-linear-to-r ${item.color}`}
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          */}

          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20 animate-slide-up delay-400">
            <div className="group">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-500/30 to-pink-500/30 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm border-2 border-primary/20 p-8 rounded-xl text-center hover:border-primary/50 transition-all duration-500 hover:shadow-lg">
                <div className="p-3 rounded-xl bg-red-50/80 w-fit mx-auto mb-3">
                  <Heart className="text-red-600 w-7 h-7" />
                </div>
                <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500 mb-2">1000+</p>
                <p className="text-muted-foreground font-medium">Supporters</p>
              </div>
            </div>

            <div className="group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm border-2 border-primary/20 p-8 rounded-xl text-center hover:border-primary/50 transition-all duration-500 hover:shadow-lg">
                <div className="p-3 rounded-xl bg-blue-50/80 w-fit mx-auto mb-3">
                  <Users className="text-blue-600 w-7 h-7" />
                </div>
                <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 mb-2">50+</p>
                <p className="text-muted-foreground font-medium">Team Members</p>
              </div>
            </div>

            <div className="group">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/30 to-orange-500/30 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm border-2 border-primary/20 p-8 rounded-xl text-center hover:border-primary/50 transition-all duration-500 hover:shadow-lg">
                <div className="p-3 rounded-xl bg-yellow-50/80 w-fit mx-auto mb-3">
                  <Zap className="text-yellow-600 w-7 h-7" />
                </div>
                <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500 mb-2">6</p>
                <p className="text-muted-foreground font-medium">Prototypes Built</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
