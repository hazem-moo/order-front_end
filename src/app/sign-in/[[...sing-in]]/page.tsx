import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="flex justify-center items-center w-full h-[75vh] mt-12">
      <SignIn />
    </section>
  );
}
