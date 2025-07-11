import { Button } from "@/components/ui/button";
import ModeToggle from "@/components/ui/ModeToggle";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";

export default async  function Home() {
  return (
    <div className="m-4">
   <h1>Home page welcome</h1>
    </div>
  );
}
