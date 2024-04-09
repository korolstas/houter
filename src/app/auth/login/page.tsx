import { Login } from "@screens/login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hounter | Login",
};

export default function LoginPage() {
  return <Login />;
}
