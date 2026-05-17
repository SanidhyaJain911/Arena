/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'motion/react';
import { 
  Trophy, 
  Users, 
  Zap, 
  Globe, 
  Target, 
  ShieldCheck, 
  Play, 
  ChevronRight, 
  Star,
  Gamepad2,
  Cpu,
  Monitor
} from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const MouseGlow = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-30 opacity-50"
      style={{
        background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(0, 242, 255, 0.15), transparent 80%)`
      }}
    />
  );
};

const Navbar = () => (
  <motion.nav 
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    className="fixed top-0 left-0 w-full z-50 glass-card px-6 py-4 flex items-center justify-between"
    id="navbar"
  >
    <div className="flex items-center gap-2">
      <div className="w-10 h-10 bg-gradient-to-tr from-neon-blue to-neon-purple rounded-lg flex items-center justify-center neon-glow-blue">
        <Gamepad2 className="text-cyber-dark w-6 h-6" />
      </div>
      <span className="font-display font-bold text-xl tracking-tighter text-gradient">ARENA</span>
    </div>
    <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-widest uppercase opacity-70">
      <a href="#hero" className="hover:text-neon-blue transition-colors">Home</a>
      <a href="#gameplay" className="hover:text-neon-blue transition-colors">Showcase</a>
      <a href="#features" className="hover:text-neon-blue transition-colors">Tech</a>
      <a href="#leaderboard" className="hover:text-neon-blue transition-colors">Ranks</a>
    </div>
    <motion.button 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-6 py-2 bg-white text-cyber-dark font-display font-bold text-sm tracking-widest uppercase rounded-full hover:bg-neon-blue transition-all neon-glow-blue"
    >
      Login
    </motion.button>
  </motion.nav>
);

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          style={{ y: y1 }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-40 grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark via-transparent to-cyber-dark" />
        <div className="absolute inset-0 bg-mesh opacity-60" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neon-blue/30 bg-neon-blue/10 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-neon-blue animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-neon-blue">Server Online: 4,129 ACTIVE</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tighter leading-[0.85] text-gradient">
            ULTIMATE<br />PING PONG<br />ARENA
          </h1>
          
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Forge your legacy in the world's first high-octane cybernetic table tennis league. 
            Real-time physics. Global matchmaking. Pure domination.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-12 py-5 overflow-hidden rounded-xl bg-neon-blue border-none text-cyber-dark font-display font-black text-xl tracking-tighter uppercase transition-all neon-glow-blue"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
              <div className="flex items-center gap-3">
                <Play className="w-6 h-6 fill-cyber-dark" />
                PLAY NOW
              </div>
            </motion.button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
        <div className="w-0.5 h-12 bg-gradient-to-b from-neon-blue to-transparent" />
      </div>
    </section>
  );
};

const GameplayShowcase = () => (
  <section id="gameplay" className="py-32 px-6 bg-cyber-dark relative">
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8 text-center md:text-left">
        <div className="max-w-2xl">
          <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-6">PREMIUM<br /><span className="text-neon-blue">GAMEPLAY</span></h2>
          <p className="text-white/50 text-xl font-light">Experience latency-free physics and stunning visuals that blur the line between virtual and reality.</p>
        </div>
        <div className="hidden md:block">
          <div className="p-8 glass-card rounded-2xl flex flex-col items-center">
            <span className="text-6xl font-black text-gradient">120+</span>
            <span className="text-xs uppercase tracking-widest font-bold opacity-50">FPS Unlocked</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="group relative aspect-video overflow-hidden rounded-3xl glass-card cursor-pointer"
        >
          <img 
            src="https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?q=80&w=2670&auto=format&fit=crop" 
            alt="Gameplay 1"
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark to-transparent opacity-60" />
          <div className="absolute bottom-8 left-8">
            <h3 className="text-2xl font-bold mb-2">NEON DYNAMICS</h3>
            <div className="flex items-center gap-2 px-3 py-1 bg-neon-blue text-cyber-dark text-[10px] font-black uppercase rounded-full">
              <Zap className="w-3 h-3" /> Ultra Speed
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="group relative aspect-video overflow-hidden rounded-3xl glass-card cursor-pointer"
        >
          <img 
            src="https://images.unsplash.com/photo-1511210352317-06240d85949d?q=80&w=2670&auto=format&fit=crop" 
            alt="Gameplay 2"
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 font-display"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark to-transparent opacity-60" />
          <div className="absolute bottom-8 left-8">
            <h3 className="text-2xl font-bold mb-2">GLOBAL ARENA</h3>
            <div className="flex items-center gap-2 px-3 py-1 bg-neon-purple text-white text-[10px] font-black uppercase rounded-full">
              <Globe className="w-3 h-3" /> PvP Sync
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Features = () => {
  const features = [
    { icon: <Zap />, title: "Hyper-Speed", desc: "Proprietary networking engine delivers sub-5ms input latency for instant paddle response." },
    { icon: <ShieldCheck />, title: "Fair Play AI", desc: "Our advanced neural detection ensures a 100% cheat-free environment for everyone." },
    { icon: <Users />, title: "Team Modes", desc: "Group up with friends for intense 2v2 tactical matches and coordinated strikes." },
    { icon: <Target />, title: "Skill Tiers", desc: "Climb from Bronze to Ultimate Grandmaster through our merit-based ELO system." },
    { icon: <Cpu />, title: "Next-Gen Tech", desc: "Powered by custom ray-tracing and dynamic physics for realistic ball interactions." },
  ];

  return (
    <section id="features" className="py-32 px-6 relative bg-cyber-dark overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-purple/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black mb-6">TECH STACK</h2>
          <div className="w-24 h-1 bg-neon-blue mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="p-10 glass-card rounded-3xl border border-white/5 hover:border-neon-blue/30 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-neon-blue group-hover:text-cyber-dark transition-all duration-300">
                {f.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight uppercase">{f.title}</h3>
              <p className="text-white/40 leading-relaxed font-light">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Leaderboard = () => {
  const users = [
    { rank: "01", name: "CYBER_GHOST", points: "48,920", winRate: "92%", color: "text-neon-blue" },
    { rank: "02", name: "VOID_WALKER", points: "45,110", winRate: "88%", color: "text-white" },
    { rank: "03", name: "NEON_WAVE", points: "42,750", winRate: "85%", color: "text-white" },
  ];

  return (
    <section id="leaderboard" className="py-32 px-6 bg-cyber-dark relative">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-6 mb-16">
            <Trophy className="w-16 h-16 text-neon-blue" />
            <h2 className="text-5xl font-black tracking-tight uppercase">Leaderboard</h2>
          </div>

          <div className="glass-card rounded-3xl overflow-hidden border border-white/5">
            <div className="grid grid-cols-4 p-8 border-bottom border-white/5 bg-white/5 text-[10px] font-bold tracking-[0.2em] uppercase opacity-50">
              <div>Rank</div>
              <div>Player</div>
              <div className="text-right">Win Rate</div>
              <div className="text-right">Score</div>
            </div>
            {users.map((u, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="grid grid-cols-4 p-8 items-center border-t border-white/5 hover:bg-white/5 transition-colors cursor-default"
              >
                <div className="font-mono text-xl opacity-30">#{u.rank}</div>
                <div className={`font-display font-bold text-xl ${u.color}`}>{u.name}</div>
                <div className="text-right text-white/50">{u.winRate}</div>
                <div className="text-right font-mono font-bold text-neon-blue">{u.points}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const CTA = () => (
  <section className="py-48 px-6 relative overflow-hidden bg-cyber-dark">
    <div className="absolute inset-0 z-0">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-gradient-to-tr from-neon-blue/20 via-neon-purple/20 to-transparent rounded-full blur-[150px] animate-pulse-slow" />
    </div>

    <div className="container mx-auto relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-7xl md:text-9xl font-black mb-12 tracking-tighter text-gradient leading-[0.8] uppercase">Ready to<br />Play?</h2>
        <motion.button 
          whileHover={{ scale: 1.1, rotate: -2 }}
          whileTap={{ scale: 0.9 }}
          className="group relative px-16 py-8 bg-white text-cyber-dark rounded-2xl font-display font-black text-3xl tracking-tighter uppercase transition-shadow hover:shadow-[0_0_60px_rgba(255,255,255,0.4)]"
        >
          START PLAYING FREE
          <ChevronRight className="inline-block ml-4 group-hover:translate-x-2 transition-transform" />
        </motion.button>
        <p className="mt-12 text-white/30 uppercase tracking-[0.4em] text-[10px] font-bold">No download required • Web-GL Enhanced</p>
      </motion.div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-20 px-6 border-t border-white/5 glass-card">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="col-span-1 md:col-span-2">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 bg-gradient-to-tr from-neon-blue to-neon-purple rounded-lg flex items-center justify-center">
            <Gamepad2 className="text-cyber-dark w-5 h-5" />
          </div>
          <span className="font-display font-bold text-xl tracking-tighter">ARENA</span>
        </div>
        <p className="text-white/40 max-w-sm mb-8 font-light">The future of competitive digital sports is here. Built for the next generation of global athletes.</p>
        <div className="flex gap-4">
          {['twitter', 'discord', 'twitch', 'youtube'].map(s => (
            <motion.div key={s} whileHover={{ y: -5 }} className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center cursor-pointer hover:bg-white transition-colors hover:text-cyber-dark opacity-60 hover:opacity-100">
              <span className="text-[10px] font-black uppercase">{s.charAt(0)}</span>
            </motion.div>
          ))}
        </div>
      </div>
      <div>
        <h4 className="font-bold uppercase tracking-widest text-xs mb-8">Platforms</h4>
        <div className="flex flex-col gap-4 text-white/40 text-sm font-light">
          <a href="#" className="hover:text-neon-blue">Web Version</a>
          <a href="#" className="hover:text-neon-blue">Desktop App</a>
          <a href="#" className="hover:text-neon-blue">Mobile App</a>
          <a href="#" className="hover:text-neon-blue">Virtual Reality</a>
        </div>
      </div>
      <div>
        <h4 className="font-bold uppercase tracking-widest text-xs mb-8">Legal</h4>
        <div className="flex flex-col gap-4 text-white/40 text-sm font-light">
          <a href="#" className="hover:text-neon-blue">Privacy Policy</a>
          <a href="#" className="hover:text-neon-blue">Terms of Service</a>
          <a href="#" className="hover:text-neon-blue">Cookie Policy</a>
          <a href="#" className="hover:text-neon-blue">Community Guidelines</a>
        </div>
      </div>
    </div>
    <div className="container mx-auto mt-20 pt-8 border-t border-white/5 text-[10px] font-bold tracking-widest uppercase opacity-20 text-center">
      © 2026 Ultimate Ping Pong Arena • All Rights Reserved
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="relative selection:bg-neon-blue selection:text-cyber-dark">
      <MouseGlow />
      <Navbar />
      <main className="relative">
        <Hero />
        <GameplayShowcase />
        <Features />
        <Leaderboard />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
