import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import {
  AppWindow, BatteryFull, ChevronUp, FileText, Folder, Globe, Grid2X2, HardDrive,
  HelpCircle, Menu, Monitor, Music2, Search, Settings, ShieldCheck, Terminal,
  Wifi, X, Zap,
} from 'lucide-react'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'SonicOS · The blue blur desktop' },
      { name: 'description', content: 'A Sonic-flavored Ubuntu desktop experience.' },
    ],
  }),
  component: SonicDesktop,
})

type AppKey = 'Files' | 'Terminal' | 'Settings' | 'Browser' | 'Music'

const apps: { key: AppKey; label: string; icon: typeof Folder; color: string }[] = [
  { key: 'Files', label: 'Files', icon: Folder, color: 'bg-primary' },
  { key: 'Terminal', label: 'Terminal', icon: Terminal, color: 'bg-foreground' },
  { key: 'Browser', label: 'Web Browser', icon: Globe, color: 'bg-accent' },
  { key: 'Music', label: 'Music', icon: Music2, color: 'bg-rose-400' },
  { key: 'Settings', label: 'Settings', icon: Settings, color: 'bg-sky-300' },
]

function SonicDesktop() {
  const [launcherOpen, setLauncherOpen] = useState(false)
  const [activeApp, setActiveApp] = useState<AppKey | null>(null)
  const [time, setTime] = useState('09:41')

  const openApp = (key: AppKey) => {
    setActiveApp(key)
    setLauncherOpen(false)
  }

  return (
    <main className="relative min-h-dvh overflow-hidden bg-background text-foreground">
      <div className="absolute inset-0 bg-background/35 bg-[url('/images/sonicos-background.jpg')] bg-cover bg-center bg-no-repeat" />
      <div className="absolute inset-0 bg-[linear-gradient(110deg,oklch(0.10_0.06_255_/_0.86),oklch(0.16_0.07_250_/_0.44)_55%,oklch(0.12_0.05_250_/_0.22))]" />
      <div className="absolute -right-20 top-28 h-72 w-72 rounded-full border-[28px] border-accent/80 shadow-[0_0_0_12px_oklch(0.86_0.19_93_/_0.18),0_0_80px_oklch(0.86_0.19_93_/_0.4)]" />
      <div className="absolute -left-24 bottom-20 h-80 w-80 rounded-full border-[18px] border-primary/40" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-[linear-gradient(170deg,transparent_20%,oklch(0.18_0.07_260_/_0.7))]" />

      <header className="relative z-20 flex h-12 items-center justify-between border-b border-primary-foreground/10 bg-sidebar/75 px-4 text-xs backdrop-blur-xl">
        <button onClick={() => setLauncherOpen(!launcherOpen)} className="flex items-center gap-3 rounded-lg px-2 py-1.5 font-semibold transition hover:bg-primary-foreground/10 active:scale-95" aria-label="Open applications">
          <div className="grid h-6 w-6 place-items-center rounded-md bg-accent text-accent-foreground shadow-sm"><Zap className="h-4 w-4 fill-current" /></div>
          <span>sOS</span>
        </button>
        <button className="rounded-md px-3 py-1.5 font-medium transition hover:bg-primary-foreground/10" onClick={() => setTime(time === '09:41' ? '09:42' : '09:41')}>{time} · Friday, Sep 19</button>
        <div className="flex items-center gap-3 text-primary-foreground/80"><Wifi className="h-4 w-4" /><BatteryFull className="h-4 w-4" /><ChevronUp className="h-4 w-4" /></div>
      </header>

      <section className="relative z-10 flex min-h-[calc(100dvh-7rem)] flex-col justify-between p-6 sm:p-10">
        <div className="max-w-lg animate-fade-in">
          <div className="mb-5 flex items-center gap-3 text-accent"><div className="h-px w-10 bg-accent" /><span className="font-mono text-[10px] font-semibold uppercase tracking-[0.3em]">SonicOS / Wayland session</span></div>
          <h1 className="max-w-xl font-serif text-5xl font-bold leading-[0.92] tracking-tight text-primary-foreground sm:text-7xl">Run at the<br /><span className="text-accent">speed of sound.</span></h1>
          <p className="mt-6 max-w-sm text-sm leading-6 text-primary-foreground/70">A fast, friendly Ubuntu desktop with a little more blue, a little more attitude, and all the apps you already know.</p>
          <button onClick={() => openApp('Files')} className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-bold text-accent-foreground shadow-lg transition hover:-translate-y-0.5 hover:shadow-accent/30 active:translate-y-0"><Folder className="h-4 w-4" /> Open Home Folder</button>
        </div>

        <div className="flex items-end justify-between gap-4">
          <div className="hidden items-center gap-2 rounded-2xl border border-primary-foreground/10 bg-sidebar/65 p-2 shadow-lg backdrop-blur-xl sm:flex">
            <button onClick={() => setLauncherOpen(!launcherOpen)} className="grid h-12 w-12 place-items-center rounded-xl bg-accent text-accent-foreground transition hover:scale-105 active:scale-95"><Grid2X2 className="h-5 w-5" /></button>
            {apps.slice(0, 4).map(({ key, icon: Icon, color, label }) => <button key={key} title={label} onClick={() => openApp(key)} className={`grid h-12 w-12 place-items-center rounded-xl ${color} text-primary-foreground shadow-md transition hover:-translate-y-1 active:scale-95`}><Icon className="h-5 w-5" /></button>)}
            <div className="mx-1 h-8 w-px bg-primary-foreground/15" />
            <button onClick={() => openApp('Settings')} className="grid h-12 w-12 place-items-center rounded-xl bg-secondary text-secondary-foreground transition hover:-translate-y-1 active:scale-95"><Settings className="h-5 w-5" /></button>
          </div>
          <div className="ml-auto flex items-center gap-2 rounded-full border border-primary-foreground/10 bg-sidebar/55 px-3 py-2 text-[11px] text-primary-foreground/60 backdrop-blur-xl"><ShieldCheck className="h-3.5 w-3.5 text-accent" /> Secure session <span className="text-primary-foreground/30">•</span> Sonic kernel 1.0</div>
        </div>
      </section>

      {launcherOpen && <Launcher onClose={() => setLauncherOpen(false)} onOpen={openApp} />}
      {activeApp && <AppWindowPanel app={activeApp} onClose={() => setActiveApp(null)} />}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-0 h-6 bg-accent/10" />
    </main>
  )
}

function Launcher({ onClose, onOpen }: { onClose: () => void; onOpen: (key: AppKey) => void }) {
  return <div className="absolute left-3 top-14 z-30 w-[min(92vw,420px)] animate-fade-in rounded-2xl border border-primary-foreground/15 bg-sidebar/95 p-4 shadow-2xl backdrop-blur-2xl">
    <div className="mb-4 flex items-center gap-2 rounded-xl bg-background/70 px-3 py-2 text-primary-foreground/50"><Search className="h-4 w-4" /><span className="text-sm">Search applications</span><span className="ml-auto font-mono text-[10px]">SUPER</span></div>
    <div className="grid grid-cols-4 gap-2">{apps.map(({ key, label, icon: Icon, color }) => <button key={key} onClick={() => onOpen(key)} className="group flex flex-col items-center gap-2 rounded-xl p-3 text-center transition hover:bg-primary-foreground/10 active:scale-95"><span className={`grid h-11 w-11 place-items-center rounded-xl ${color} text-primary-foreground shadow-md transition group-hover:scale-105`}><Icon className="h-5 w-5" /></span><span className="text-[11px] text-primary-foreground/75">{label}</span></button>)}</div>
    <div className="mt-4 flex items-center justify-between border-t border-primary-foreground/10 pt-3 text-[11px] text-primary-foreground/45"><span>9 applications</span><button onClick={onClose} className="hover:text-primary-foreground"><X className="h-4 w-4" /></button></div>
  </div>
}

function AppWindowPanel({ app, onClose }: { app: AppKey; onClose: () => void }) {
  const data = { Files: { icon: Folder, title: 'Home — sonic', content: <div className="grid grid-cols-3 gap-4 p-5"><FolderTile icon={Folder} label="Desktop" /><FolderTile icon={Folder} label="Documents" /><FolderTile icon={Folder} label="Downloads" /><FolderTile icon={Music2} label="Music" /><FolderTile icon={FileText} label="Pictures" /><FolderTile icon={HardDrive} label="SonicOS Drive" /></div> }, Terminal: { icon: Terminal, title: 'sonic@sonicos: ~', content: <div className="bg-foreground p-5 font-mono text-xs leading-6 text-accent"><p>sonic@sonicos:~$ neofetch</p><p className="text-primary-foreground">  SonicOS 1.0 · Ubuntu base</p><p className="text-primary-foreground">  Kernel 6.8.0-sonic · x86_64</p><p>  Ready when you are.</p><p className="mt-3">sonic@sonicos:~$ <span className="animate-pulse">▌</span></p></div> }, Settings: { icon: Settings, title: 'Settings', content: <div className="space-y-3 p-5"><SettingRow icon={Monitor} title="Appearance" detail="Sonic blue · Midnight" /><SettingRow icon={Wifi} title="Network" detail="Connected to Green Hill Wi-Fi" /><SettingRow icon={ShieldCheck} title="Privacy & Security" detail="Everything is protected" /></div> }, Browser: { icon: Globe, title: 'Web Browser', content: <div className="p-6 text-center"><Globe className="mx-auto h-12 w-12 text-primary" /><p className="mt-4 font-serif text-xl">Welcome to the web, fast one.</p><p className="mt-2 text-sm text-muted-foreground">Your Ubuntu browser is ready for action.</p></div> }, Music: { icon: Music2, title: 'Music', content: <div className="p-6 text-center"><div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-accent text-accent-foreground shadow-lg"><Music2 /></div><p className="mt-4 font-serif text-xl">Green Hill Zone</p><p className="text-sm text-muted-foreground">SonicOS soundtrack</p></div> } }[app]
  const Icon = data.icon
  return <div className="absolute inset-x-4 top-24 z-20 mx-auto max-w-xl animate-fade-in overflow-hidden rounded-2xl border border-border bg-card/95 shadow-2xl backdrop-blur-xl sm:inset-x-auto sm:left-1/2 sm:w-[560px] sm:-translate-x-1/2"><div className="flex items-center gap-2 border-b border-border bg-secondary/70 px-4 py-3"><Icon className="h-4 w-4 text-primary" /><span className="flex-1 text-xs font-semibold">{data.title}</span><button onClick={onClose} className="rounded-md p-1 text-muted-foreground transition hover:bg-destructive hover:text-destructive-foreground"><X className="h-4 w-4" /></button></div>{data.content}</div>
}

function FolderTile({ icon: Icon, label }: { icon: typeof Folder; label: string }) { return <button className="flex flex-col items-center gap-2 rounded-xl p-3 text-center transition hover:bg-primary/10 active:scale-95"><Icon className="h-9 w-9 text-primary" /><span className="text-xs">{label}</span></button> }
function SettingRow({ icon: Icon, title, detail }: { icon: typeof Settings; title: string; detail: string }) { return <button className="flex w-full items-center gap-3 rounded-xl p-3 text-left transition hover:bg-primary/10"><Icon className="h-5 w-5 text-primary" /><span className="flex-1"><span className="block text-sm font-medium">{title}</span><span className="block text-xs text-muted-foreground">{detail}</span></span><ChevronUp className="h-4 w-4 rotate-90 text-muted-foreground" /></button> }
