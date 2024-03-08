"use client";

import SignIn from "@/components/SignIn";
import SignUp from "@/components/SignUp";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTheme } from "next-themes";

export default function Home() {
  const [step, setStep] = useState<number>(1);

  const { theme } = useTheme();
  const text = step ? ["환영합니다!", "여기서 새로운 계정을 만들어봐요!\n시작하려면 개인 정보를 입력하세요.", "회원가입"] : ["다시 오신 것을\n 환영합니다!", "계속 연결하려면 개인 정보로 로그인 하세요", "로그인"];
  return (
    <div className={`h-screen w-screen bg-cover ${theme == "dark" ? 'bg-[url("../images/dark.webp")]' : 'bg-[url("../images/light.webp")]'}`}>
      <main className="flex flex-col items-center justify-between overflow-hidden">
        <Card className="w-[760px] flex absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <motion.div
            className={cn(`absolute bg-cover w-[380px] h-full rounded-lg z-40 ${theme == "dark" ? 'bg-[url("../images/dark.webp")]' : 'bg-[url("../images/light.webp")]'}`)}
            animate={{ translateX: `${step * 100}%`, backgroundPositionX: `${step * 100}%` }}
            transition={{
              ease: "easeInOut",
            }}
          >
            <div className="flex flex-col items-center">
              <p className="text-3xl mt-24 whitespace-pre">{text[0]}</p>
              <span className="mt-6 whitespace-pre">{text[1]}</span>
              <Button
                className="mt-36"
                variant="outline"
                type="button"
                onClick={() => {
                  setStep((prevStep) => (prevStep === 0 ? 1 : 0));
                }}
              >
                {text[2]}
              </Button>
            </div>
          </motion.div>
          <SignIn />
          <SignUp />
        </Card>
      </main>
    </div>
  );
}
