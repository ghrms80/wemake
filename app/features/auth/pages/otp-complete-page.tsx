import { Form } from "react-router";
import { Button } from "~/common/components/ui/button";
import { Input } from "~/common/components/ui/input";
import type { Route } from "./+types/otp-complete-page";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "OTP 인증 완료 | wemake" },
    { name: "description", content: "OTP 인증 완료 페이지" }
  ];
};

export default function OtpCompletePage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h3 className="text-2xl font-bold">OTP 인증 완료</h3>
        <p className="text-sm text-muted-foreground">
          인증 코드를 입력하여 OTP 설정을 완료하세요
        </p>
      </div>
      <Form className="space-y-4">
        <div className="space-y-2">
          <Input placeholder="인증 코드 6자리 입력" />
        </div>
        <Button type="submit" className="w-full">인증 완료</Button>
      </Form>
    </div>
  );
}
