import ThanksTemp from "emails/thanks";
import VerificationTemp from "emails/verification";
import { Resend } from "resend";
import { type SendOTPProps, type SendWelcomeEmailProps } from "~/types";
import { generateId } from "../utils";
import { ReactNode } from "react";

export const resend = new Resend(process.env.RESEND_API_KEY);

export const sendWelcomeEmail = async ({
  toMail,
  userName,
}: SendWelcomeEmailProps) => {
  const subject = "Thanks for using Next Starter v2!";
  const temp = ThanksTemp({ userName }) as ReactNode;

  await resend.emails.send({
    from: `Next Starter v2 App <noreply@resend.app>`,
    to: toMail,
    subject: subject,
    headers: {
      "X-Entity-Ref-ID": generateId(),
    },
    react: temp,
    text: "",
  });
};

export const sendOTP = async ({ toMail, code, userName }: SendOTPProps) => {
  const subject = "OTP for Next Starter v2";
  const temp = VerificationTemp({ userName, code }) as ReactNode;

  await resend.emails.send({
    from: `Next Starter v2 App <noreply@next-starter-v2.app>`,
    to: toMail,
    subject: subject,
    headers: {
      "X-Entity-Ref-ID": generateId(),
    },
    react: temp,
    text: "",
  });
};
