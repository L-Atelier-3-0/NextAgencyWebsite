import DefaultLayout from "@/app/layouts/DefaultLayout";
import React from "react";
import SignInForm from "@/app/components/SignInForm";

export default function page() {
  return (
    <DefaultLayout>
        <div className="pt-20 flex justify-center items-center flex-1 text-sm">
          <SignInForm />
      </div>
    </DefaultLayout>
  );
}
