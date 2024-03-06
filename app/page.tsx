"use client";

import SignIn from "@/components/SignIn";
import SignUp from "@/components/SignUp";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [step, setStep] = useState<number>(1);
  return (
    <div className="h-screen w-screen bg-[url('../images/wallpaper.webp')] bg-cover">
      <main className="flex h-screen flex-col items-center justify-between p-52">
        <Card className="w-[760px] flex overflow-hidden relative">
          <motion.div
            className={cn("absolute bg-[url('../images/wallpaper.webp')] bg-cover w-[380px] h-full z-50")}
            animate={{ translateX: `${step * 100}%`, backgroundPositionX: `${step * 100}%` }}
            transition={{
              ease: "easeInOut",
            }}
          >
            <Button
              className="absolute -translate-x-1/2 -translate-y-1/2 top-3/4 left-1/2"
              variant="outline"
              type="button"
              onClick={() => {
                setStep(step === 1 ? 0 : 1);
              }}
            >
              {step === 1 ? "회원가입" : "로그인"}
            </Button>
          </motion.div>

          <SignIn />
          <SignUp />
        </Card>
      </main>
    </div>
  );
}
