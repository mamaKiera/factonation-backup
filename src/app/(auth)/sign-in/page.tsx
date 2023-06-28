"use client";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Command } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/Button";
import { UserAuthForm } from "@/components/UserAuthForm";
import bootcampImage from "../../../../public/scada-bootcamp-1200px.webp";
import { Icons } from "@/components/Icon";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function AuthenticationPage({
  className,
  ...props
}: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <div className="z-[999] bg-background flex h-screen">
      <div className="grid place-content-center bg-secondary-button w-1/2">
        <div className="max-w-xl">
          <div className="flex flex-col justify-center items-center mt-50 rounded-lg overflow-hidden">
            <Image
              src={bootcampImage}
              width={1200}
              height={800}
              alt="bootcamp image"
            />
          </div>
          <h1 className="text-lg my-6 text-center">
            เริ่มตั้งแต่สอนเขียน C# ตั้งแต่ศูนย์
            ไม่จำเป็นต้องมีพื้นฐานการเขียนโปรแกรม เรียนแบบ On-demand สัปดาห์ละ 2
            วิดีโอ ในกลุ่ม Private ถามตอบได้ตลอดเวลา
          </h1>
        </div>
      </div>

      <div className="w-1/2 bg-background my-auto">
        <UserAuthForm className="max-w-lg mx-auto" />
      </div>
    </div>
  );
}
