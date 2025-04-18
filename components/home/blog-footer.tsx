// // import { Button } from "@/components/ui/button";
// // import { Input } from "@/components/ui/input";
// // import { Mail } from "lucide-react";
// // import { Linkedin, Github, Twitter } from "lucide-react";

// // export function BlogFooter() {
// //   return (
// //     <footer className="border-t bg-background">
// //       <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
// //         <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-5">
// //           {/* Branding Section */}
// //           <div className="md:col-span-2 lg:col-span-2">
// //             <h2 className="text-2xl font-bold">
// //               <span className="bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
// //                 Code
// //               </span>
// //               <span className="text-foreground">Craze</span>
// //             </h2>
// //             <p className="mt-4 text-muted-foreground">
// //               Where ideas meet innovation. Dive into a world of insightful
// //               articles written by passionate thinkers and industry experts.
// //             </p>

// //             <div className="mt-6 flex gap-2">
// //               <Button variant="ghost" size="icon">
// //                 <Twitter className="h-5 w-5 text-muted-foreground" />
// //               </Button>
// //               <Button variant="ghost" size="icon">
// //                 <Github className="h-5 w-5 text-muted-foreground" />
// //               </Button>
// //               <Button variant="ghost" size="icon">
// //                 <Linkedin className="h-5 w-5 text-muted-foreground" />
// //               </Button>
// //             </div>
// //           </div>

// //           {/* Quick Links */}
// //           <div className="space-y-4">
// //             <h3 className="text-lg font-semibold text-foreground">Explore</h3>
// //             <ul className="space-y-3">
// //               <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">All Articles</a></li>
// //               <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Topics</a></li>
// //               <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Authors</a></li>
// //               <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Podcasts</a></li>
// //             </ul>
// //           </div>

// //           {/* Legal */}
// //           <div className="space-y-4">
// //             <h3 className="text-lg font-semibold text-foreground">Legal</h3>
// //             <ul className="space-y-3">
// //               <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a></li>
// //               <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a></li>
// //               <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Cookie Policy</a></li>
// //               <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Licenses</a></li>
// //             </ul>
// //           </div>

// //           {/* Newsletter */}
// //           <div className="space-y-4 md:col-span-2 lg:col-span-2">
// //             <h3 className="text-lg font-semibold text-foreground">Stay Updated</h3>
// //             <form className="flex flex-col gap-4">
// //               <div className="relative">
// //                 <Input
// //                   type="email"
// //                   placeholder="Enter your email"
// //                   className="pl-10 pr-4 py-6"
// //                 />
// //                 <Mail className="h-5 w-5 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
// //               </div>
// //               <Button
// //                 type="submit"
// //                 className="w-full"
// //               >
// //                 Subscribe
// //               </Button>
// //             </form>
// //           </div>
// //         </div>

// //         {/* Copyright */}
// //         <div className="mt-12 border-t pt-8 text-center">
// //           <p className="text-sm text-muted-foreground">
// //             © {new Date().getFullYear()} ByteCode. All rights reserved.
// //           </p>
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // }
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Separator } from "@/components/ui/separator";
// import { Mail, Linkedin, Github, Twitter, BookOpen, FileText, Users, Shield } from "lucide-react";

// export function BlogFooter() {
//   return (
//     <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
//       <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
//         <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
//           {/* Brand Section */}
//           <div className="space-y-5">
//             <h2 className="text-2xl font-bold">
//               <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 bg-clip-text text-transparent">
//                 Code
//               </span>
//               <span className="text-slate-900 dark:text-white">Craze</span>
//             </h2>
//             <p className="text-slate-600 dark:text-slate-400">
//               Professional insights and strategies for developers, tech leaders, and innovators in the digital landscape.
//             </p>

//             <div className="flex gap-2">
//               <Button variant="outline" size="icon" className="rounded-full h-10 w-10">
//                 <Twitter className="h-4 w-4" />
//               </Button>
//               <Button variant="outline" size="icon" className="rounded-full h-10 w-10">
//                 <Github className="h-4 w-4" />
//               </Button>
//               <Button variant="outline" size="icon" className="rounded-full h-10 w-10">
//                 <Linkedin className="h-4 w-4" />
//               </Button>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div className="space-y-5">
//             <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Resources</h3>
//             <ul className="space-y-3">
//               <li className="flex items-center gap-2">
//                 <BookOpen className="h-4 w-4 text-slate-500" />
//                 <a href="#" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">
//                   All Articles
//                 </a>
//               </li>
//               <li className="flex items-center gap-2">
//                 <FileText className="h-4 w-4 text-slate-500" />
//                 <a href="#" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">
//                   Topic Categories
//                 </a>
//               </li>
//               <li className="flex items-center gap-2">
//                 <Users className="h-4 w-4 text-slate-500" />
//                 <a href="#" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">
//                   Expert Contributors
//                 </a>
//               </li>
//               <li className="flex items-center gap-2">
//                 <Shield className="h-4 w-4 text-slate-500" />
//                 <a href="#" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">
//                   Premium Content
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Legal */}
//           <div className="space-y-5">
//             <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Company</h3>
//             <ul className="space-y-3">
//               <li>
//                 <a href="#" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">
//                   About Us
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">
//                   Contact
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">
//                   Privacy Policy
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">
//                   Terms of Service
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Newsletter */}
//           <div className="space-y-5">
//             <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Newsletter</h3>
//             <p className="text-slate-600 dark:text-slate-400">
//               Subscribe to receive updates on new articles and tech insights.
//             </p>
//             <form className="space-y-3">
//               <div className="relative">
//                 <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
//                 <Input
//                   type="email"
//                   placeholder="Your email address"
//                   className="pl-10 py-5 bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800"
//                 />
//               </div>
//               <Button type="submit" className="w-full">
//                 Subscribe
//               </Button>
//             </form>
//           </div>
//         </div>

//         <Separator className="my-8" />

//         <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//           <p className="text-sm text-slate-500">
//             © {new Date().getFullYear()} CodeCraze. All rights reserved.
//           </p>
//           <div className="flex gap-6 text-sm text-slate-500">
//             <a href="#" className="hover:text-slate-900 dark:hover:text-white">Privacy</a>
//             <a href="#" className="hover:text-slate-900 dark:hover:text-white">Terms</a>
//             <a href="#" className="hover:text-slate-900 dark:hover:text-white">Cookies</a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Mail, Linkedin, Github, Twitter, BookOpen, FileText, Users, Shield } from "lucide-react";

export function BlogFooter() {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-5">
            <h2 className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 bg-clip-text text-transparent">
                Code
              </span>
              <span className="text-slate-900 dark:text-white">Craze</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Professional insights and strategies for developers, tech leaders, and innovators in the digital landscape.
            </p>

            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="rounded-full h-10 w-10">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full h-10 w-10">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full h-10 w-10">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Resources</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-slate-500" />
                <a href="#" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">
                  All Articles
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-slate-500" />
                <a href="#" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">
                  Topic Categories
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Users className="h-4 w-4 text-slate-500" />
                <a href="#" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">
                  Expert Contributors
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-slate-500" />
                <a href="#" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">
                  Premium Content
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-5">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-5">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Newsletter</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Subscribe to receive updates on new articles and tech insights.
            </p>
            <form className="space-y-3">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="pl-10 py-5 bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800"
                />
              </div>
              <Button type="submit" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} CodeCraze. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-slate-900 dark:hover:text-white">Privacy</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white">Terms</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}