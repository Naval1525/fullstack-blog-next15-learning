import Navbar from "@/components/home/header/navbar";
import { prisma } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const user = await currentUser();

  // Only try to create/find a user in the database if the user is authenticated
  if (user) {
    const loggedInUser = await prisma.user.findUnique({
      where: { ClerkUserId: user.id },
    });

    // Only create a new user if we couldn't find an existing one
    if (!loggedInUser) {
      try {
        await prisma.user.create({
          data: {
            name: `${user.firstName || ''} ${user.lastName || ''}`.trim(),
            ClerkUserId: user.id,
            email: user.emailAddresses.length > 0 ? user.emailAddresses[0].emailAddress : '',
            imageUrl: user.imageUrl,
          },
        });
      } catch (error) {
        console.error("Error creating user:", error);
        // Continue rendering even if user creation fails
      }
    }
  }

  // Always render the layout with children, regardless of authentication status
  return (
    <div>

      {children}
    </div>
  );
};

export default Layout;