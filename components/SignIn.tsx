import React from "react";
import { CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Form } from "./ui/form";
import FormComponents from "./FormComponents";
import { Button } from "./ui/button";
import { SignUpSchemaCheck } from "@/validators/auth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@/lib/utils";

const SignIn = () => {
  const form = useForm<z.infer<typeof SignUpSchemaCheck>>({
    resolver: zodResolver(SignUpSchemaCheck),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof SignUpSchemaCheck>) {
    console.log("values", values);
    // alert(JSON.stringify(values, null, 4));
  }
  return (
    <div className="w-[380px]">
      <CardHeader>
        <CardTitle>로그인</CardTitle>
        <CardDescription>필수 정보를 입력해볼게요</CardDescription>
      </CardHeader>
      <CardContent className={cn("z-0")}>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="relative space-y-6 overflow-x-hidden">
            <FormComponents control={form.control} name="email" label="이메일" placeholder="hello@sparta-devcamp.com" />
            <FormComponents control={form.control} name="password" label="비밀번호" type="password" />
            <Button>로그인</Button>
          </form>
        </Form>
      </CardContent>
    </div>
  );
};

export default SignIn;
