"use client"

import { useEffect } from "react"
import { app, analytics } from "@/lib/firebase"

export default function FirebaseProvider({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    // Firebase is already initialized in the firebase.ts file
    // This is just a placeholder for any future Firebase-related setup
  }, [])

  return <>{children}</>
} 