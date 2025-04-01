import { GalleryVerticalEnd } from "lucide-react";

import { LoginForm } from "@/components/ui/login-form";

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start"></div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="relative hidden  lg:block">
        <img
          src="https://res.cloudinary.com/dufjleqeu/image/upload/v1743405272/xq4iph1ow7nuc3elcob1.jpg"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover ] "
        />
      </div>
    </div>
  );
}
