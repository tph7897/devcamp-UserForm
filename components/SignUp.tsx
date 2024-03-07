import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Form } from "./ui/form";
import { motion } from "framer-motion";
import FormComponents from "./FormComponents";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { SignUpSchemaCheck } from "@/validators/auth";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useToast } from "./ui/use-toast";

const SignUp = () => {
  const [step, setStep] = useState<number>(0);
  const { toast } = useToast();
  const form = useForm<z.infer<typeof SignUpSchemaCheck>>({
    resolver: zodResolver(SignUpSchemaCheck),
    defaultValues: {
      nickname: "",
      email: "",
      phone: "",
      role: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(values: z.infer<typeof SignUpSchemaCheck>) {
    const { password, confirmPassword } = values;
    if (password !== confirmPassword) {
      toast({
        title: "비밀번호가 일치하지 않습니다.",
        variant: "destructive",
        duration: 1000,
      });
      return;
    }
    alert(JSON.stringify(values, null, 4));
  }

  const handleButtonClick = () => {
    form.trigger(["phone", "email", "nickname", "role"]);
    const phoneState = form.getFieldState("phone");
    const emailState = form.getFieldState("email");
    const nicknameState = form.getFieldState("nickname");
    const roleState = form.getFieldState("role");
    if (!phoneState.isDirty || phoneState.invalid) return;
    if (!emailState.isDirty || emailState.invalid) return;
    if (!nicknameState.isDirty || nicknameState.invalid) return;
    if (!roleState.isDirty || roleState.invalid) return;

    setStep(1);
  };

  return (
    <div className="w-[380px]">
      <CardHeader>
        <CardTitle>계정 생성</CardTitle>
        <CardDescription>필수 정보를 입력해주세요</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="relative space-y-3 overflow-x-hidden">
            <motion.div className={cn("space-y-3")} animate={{ translateX: `${step * -100}%` }} transition={{ ease: "easeInOut" }}>
              <FormComponents control={form.control} name="nickname" label="닉네임" placeholder="홍길동" />
              <FormComponents control={form.control} name="email" label="이메일" placeholder="hello@sparta-devcamp.com" />
              <FormComponents control={form.control} name="phone" label="연락처" placeholder="01000000000" />
              <FormComponents control={form.control} name="role" label="역할" placeholder="역할을 선택해주세요" />
            </motion.div>
            <motion.div
              className={cn("space-y-3 absolute top-0 left-0 right-0")}
              animate={{ translateX: `${(1 - step) * 100}%` }}
              transition={{
                ease: "easeInOut",
              }}
            >
              <FormComponents control={form.control} name="password" label="비밀번호" type="password" />
              <FormComponents control={form.control} name="confirmPassword" label="비밀번호 확인" type="password" />
            </motion.div>
            <Button type="button" className={cn({ hidden: step === 1 })} onClick={handleButtonClick}>
              다음 단계로 ⭢
            </Button>
            <Button className={cn({ hidden: step === 0 })}>계정 등록하기</Button>
            <Button
              type="button"
              variant={"ghost"}
              className={cn({ hidden: step === 0 })}
              onClick={() => {
                setStep(0);
              }}
            >
              이전 단계로
            </Button>
          </form>
        </Form>
      </CardContent>
    </div>
  );
};

export default SignUp;
