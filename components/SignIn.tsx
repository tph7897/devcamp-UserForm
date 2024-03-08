import React from "react";
import { CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Form } from "./ui/form";
import { Button } from "./ui/button";
import { SignInSchemaCheck } from "@/validators/auth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@/lib/utils";
import SingInFormComponents from "./SignInFormComponents";

const SignIn = () => {
  const form = useForm<z.infer<typeof SignInSchemaCheck>>({
    resolver: zodResolver(SignInSchemaCheck),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof SignInSchemaCheck>) {
    console.log("values", values);
    alert(JSON.stringify(values, null, 4));
  }
  return (
    <div className="w-[380px]">
      <CardHeader>
        <CardTitle>로그인</CardTitle>
      </CardHeader>
      <CardContent className={cn("z-0")}>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="relative space-y-6 overflow-x-hidden">
            <SingInFormComponents control={form.control} name="email" label="이메일" placeholder="hello@sparta-devcamp.com" />
            <SingInFormComponents control={form.control} name="password" label="비밀번호" type="password" />
            <CardDescription>비밀번호를 잊으셨나요?</CardDescription>
            <Button>로그인</Button>
          </form>
        </Form>
      </CardContent>
    </div>
  );
};

export default SignIn;
