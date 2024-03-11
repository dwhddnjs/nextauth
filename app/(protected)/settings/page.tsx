"use client"

import React from "react"
import { auth, signOut } from "@/auth"
import { useCurrentUser } from "@/hooks/use-current-user"
import { logout } from "@/actions/logout"

const SettingsPage = () => {
  const user = useCurrentUser()

  const onClick = () => {
    logout()
  }

  return (
    <div className="bg-white p-10 rounded-xl">
      <button type="submit" onClick={onClick}>
        Sign out
      </button>
    </div>
  )
}

export default SettingsPage
