import { createClient } from '@blinkdotnew/sdk'

export const blink = createClient({
  projectId: import.meta.env.VITE_BLINK_PROJECT_ID || 'sonicos-ubuntu-os-vvrvhcyi',
  publishableKey: import.meta.env.VITE_BLINK_PUBLISHABLE_KEY || 'blnk_pk_qd0DPwVVLbgOKJYnkzptw_itVGDB7siM',
  authRequired: false,
  auth: { mode: 'managed' },
})
