// "use client";
// import Image from "next/image";
// import { Button } from "../ui/button";
// import { cn } from "@/lib/utils";

// const HeroSection = () => {
//   return (
//     <section className="relative min-h-[600px] w-full overflow-hidden bg-gradient-to-br from-purple-950 via-indigo-950 to-indigo-950">
//       {/* Gradient overlay */}
//       <div className="absolute inset-0 before:absolute before:left-1/4 before:top-0 before:h-[500px] before:w-[500px] before:rounded-full before:bg-gradient-to-r before:from-violet-600/20 before:to-indigo-600/20 before:blur-3xl" />

//       <div className="container relative mx-auto flex h-full flex-col items-center justify-center px-4 py-24 md:flex-row md:py-32">
//         {/* Content */}
//         <div className="flex-1 space-y-8 text-center md:text-left">
//           <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
//             Explore the World Through
//             <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
//               {" "}
//               Words
//             </span>
//           </h1>

//           <p className="mx-auto max-w-2xl text-lg text-gray-300 md:text-xl">
//             Discover insightful articles, thought-provoking stories, and expert
//             perspectives on technology, lifestyle, and innovation.
//           </p>

//           <div className="flex flex-col items-center gap-4 sm:flex-row md:justify-start">
//             <Button size="lg" className="rounded-full px-8 py-6 text-lg">
//               Start Reading
//             </Button>
//             <Button
//               variant="outline"
//               size="lg"
//               className="rounded-full px-8 py-6 text-lg dark:text-white"
//             >
//               Explore Topics
//             </Button>
//           </div>

//           {/* Stats */}
//           <div className="grid grid-cols-3 gap-4 pt-8 text-white md:max-w-md">
//             <div className="space-y-2">
//               <div className="text-2xl font-bold text-primary">1K+</div>
//               <div className="text-sm text-gray-400">Published Articles</div>
//             </div>
//             <div className="space-y-2">
//               <div className="text-2xl font-bold text-primary">50+</div>
//               <div className="text-sm text-gray-400">Expert Writers</div>
//             </div>
//             <div className="space-y-2">
//               <div className="text-2xl font-bold text-primary">10M+</div>
//               <div className="text-sm text-gray-400">Monthly Readers</div>
//             </div>
//           </div>
//         </div>

//         <div className="mt-12 flex-1 md:mt-0">
//           <div
//             className={cn(
//               "relative mx-auto h-96 w-96 rounded-2xl overflow-hidden",
//               "bg-gradient-to-br from-white/5 to-transparent",
//               "border border-primary/20 backdrop-blur-lg",
//               "shadow-2xl shadow-indigo-500/10"
//             )}
//           >
//             <Image
//               src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D"
//               alt="Illustration for the blog"
//               fill
//               className="object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
// export default HeroSection;
// src/components/HeroSection.jsx
"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 lg:py-32">
      {/* Subtle background pattern */}
      <div className="absolute inset-0">
        <div className="absolute left-1/3 top-1/4 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute right-1/4 top-2/3 h-[300px] w-[300px] rounded-full bg-indigo-600/10 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Insights for the
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  {" "}
                  Digital Age
                </span>
              </h1>
              <p className="mt-6 text-lg text-slate-300">
                Expert perspectives on technology, innovation, and business strategies
                from industry leaders and forward-thinking professionals.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-md px-8 py-6 text-base font-medium">
                Explore Articles
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-md border-slate-700 bg-slate-800/50 px-8 py-6 text-base font-medium text-slate-200 hover:bg-slate-800 hover:text-white"
              >
                Subscribe
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div>
                <div className="text-3xl font-bold text-white">2.5K+</div>
                <div className="text-sm text-slate-400">Premium Articles</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">150+</div>
                <div className="text-sm text-slate-400">Expert Contributors</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">15M+</div>
                <div className="text-sm text-slate-400">Monthly Readers</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative mx-auto aspect-video w-full max-w-lg overflow-hidden rounded-xl border border-slate-800 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/80 to-transparent"></div>
            <Image
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D"
              alt="Professional workspace"
              width={900}
              height={600}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;