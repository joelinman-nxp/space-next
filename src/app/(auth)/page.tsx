import { NextPage } from "next";

import H1 from "@/components/typography/h1";
import P from "@/components/typography/p";
import SignInForm from "@/components/forms/SignInForm";
import Link from "next/link";

const SignInPage: NextPage = async () => {
  return (
    <>
      <H1 className="text-center">Login to {process.env.APPLICATION_NAME}</H1>
      <P className="text-xl py-4 font-bold text-center mb-10">
        'Enter your Login details here...'
      </P>
      <div className="border rounded-lg p-4">
        <SignInForm />
      </div>
      <div className="register text-center pt-4">
        <P>Don't have an account?</P>
        <Link className="text-red-800 font-bold underline" href="/register">
          Register a New Account Now...
        </Link>
      </div>
    </>
  );
};

export default SignInPage;
