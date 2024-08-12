import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div><figure className="bg-red-300 rounded-xl p-8 dark:bg-slate-800">
  <img className="w-24 h-24 rounded-full mx-auto" src="/farhan.59.jpg" alt="" width="384" height="512"/>
  <div className="pt-6 space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “My name is Farhan ALI.I am a student of 12th class in Khawaja Fareed college.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div>
        FARHAN ALI
      </div>
      <div>
        Staff Engineer, Farhan
      </div>
    </figcaption>
  </div>
</figure></div>
    </main>
  );
}
