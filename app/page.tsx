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
  return (
    <div className={`h-screen w-screen bg-cover ${theme == "dark" ? 'bg-[url("../images/dark.webp")]' : 'bg-[url("../images/light.webp")]'}`}>
      {/* <img className="h-screen w-screen bg-cover" src="https://images.pexels.com/photos/358528/pexels-photo-358528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="하늘" /> */}
      <main className="flex flex-col items-center justify-between overflow-hidden">
        <Card className="w-[760px] flex absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <motion.div
            className={cn(`absolute bg-cover w-[380px] h-full rounded-lg z-40 ${theme == "dark" ? 'bg-[url("../images/dark.webp")]' : 'bg-[url("../images/light.webp")]'}`)}
            animate={{ translateX: `${step * 100}%`, backgroundPositionX: `${step * 100}%` }}
            transition={{
              ease: "easeInOut",
            }}
          >
            {step === 1 ? (
              <div className="flex flex-col items-center">
                <p className="text-3xl mt-24">환영합니다!</p>
                <span className="mt-6">
                  여기서 새로운 계정을 만들어봐요! <br />
                  시작하려면 개인 정보를 입력하세요.
                </span>
                <Button
                  className="mt-36"
                  variant="outline"
                  type="button"
                  onClick={() => {
                    setStep(0);
                  }}
                >
                  회원가입
                </Button>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <p className="text-3xl mt-24">
                  다시 오신 것을 <br />
                  &nbsp;&nbsp;환영합니다!
                </p>
                <span className="mt-6">계속 연결하려면 개인 정보로 로그인 하세요</span>
                <Button
                  className="mt-36"
                  variant="outline"
                  type="button"
                  onClick={() => {
                    setStep(1);
                  }}
                >
                  로그인
                </Button>
              </div>
            )}
          </motion.div>

          <SignIn />
          <SignUp />
        </Card>
      </main>
    </div>
  );
}
