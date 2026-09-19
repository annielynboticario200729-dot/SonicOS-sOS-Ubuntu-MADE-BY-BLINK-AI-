// Auto-generated from your database schema — do not edit by hand.
// Regenerates automatically whenever a table is created or altered.

export type SonicAppStateRow = {
  id: string
  userId: string
  pinnedApps: string
  recentApps: string
  updatedAt: string
}

export type SonicFilesRow = {
  id: string
  userId: string
  name: string
  kind: string
  parentId: string | null
  isPinned: boolean
  createdAt: string
}

export type SonicPreferencesRow = {
  id: string
  userId: string
  wallpaper: string
  theme: string
  dockPosition: string
  updatedAt: string
}
