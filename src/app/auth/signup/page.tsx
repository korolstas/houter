import { SignUp } from "@screens/auth/signup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hounter | Sign Up",
};

export default function SignUpPage() {
  return <SignUp />;
}
