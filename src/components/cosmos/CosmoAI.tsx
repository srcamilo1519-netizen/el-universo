import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Sparkles, X } from "lucide-react";
import { findAnswer, SUGGESTIONS } from "./aiKnowledge";

interface Message {
  id: string;
  role: "user" | "ai";
  content: string;
}

interface Props {
  open: boolean;
  onClose: () => void;
}

export function CosmoAI({ open, onClose }: Props) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "init",
      role: "ai",
      content:
        "Bienvenido. Soy COSMO AI, tu interfaz educativa para explorar el origen y la evolución del universo. Pregúntame sobre el Big Bang, la materia oscura, las galaxias, los agujeros negros o cualquier otro fenómeno cósmico.",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [streamed, setStreamed] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, streamed]);

  const send = (raw?: string) => {
    const text = (raw ?? input).trim();
    if (!text || typing) return;
    const userMsg: Message = { id: crypto.randomUUID(), role: "user", content: text };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const entry = findAnswer(text);
      const full = entry.answer;
      let i = 0;
      setStreamed("");
      const id = crypto.randomUUID();
      // Stream characters
      const interval = setInterval(() => {
        i += Math.max(2, Math.floor(full.length / 220));
        if (i >= full.length) {
          clearInterval(interval);
          setStreamed("");
          setMessages((m) => [...m, { id, role: "ai", content: full }]);
          setTyping(false);
        } else {
          setStreamed(full.slice(0, i));
        }
      }, 18);
    }, 700);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>
      <aside className={`ai-panel ${open ? "open" : ""} scanlines`}>
        <header className="flex items-center justify-between px-6 py-5 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cosmos-cyan to-cosmos-violet flex items-center justify-center glow-cyan">
                <Sparkles className="w-5 h-5 text-cosmos-deep" />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-cosmos-deep" />
            </div>
            <div>
              <h3 className="text-sm font-medium tracking-wide">COSMO AI</h3>
              <p className="text-[10px] uppercase tracking-[0.3em] text-cosmos-cyan">Online · Knowledge Base v1.0</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full hover:bg-white/5 flex items-center justify-center transition"
            aria-label="Cerrar"
          >
            <X className="w-4 h-4" />
          </button>
        </header>

        <div ref={scrollRef} className="flex-1 overflow-y-auto px-6 py-6 space-y-5">
          {messages.map((m) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] px-4 py-3 rounded-2xl text-[13.5px] leading-relaxed ${
                  m.role === "user"
                    ? "bg-gradient-to-br from-cosmos-blue to-cosmos-violet text-white rounded-br-sm"
                    : "glass text-foreground/90 rounded-bl-sm"
                }`}
              >
                {m.content}
              </div>
            </motion.div>
          ))}
          {streamed && (
            <div className="flex justify-start">
              <div className="max-w-[85%] px-4 py-3 rounded-2xl rounded-bl-sm glass text-foreground/90 text-[13.5px] leading-relaxed">
                {streamed}
                <span className="inline-block w-1.5 h-4 ml-0.5 -mb-0.5 bg-cosmos-cyan animate-pulse" />
              </div>
            </div>
          )}
          {typing && !streamed && (
            <div className="flex justify-start">
              <div className="glass px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1.5 items-center">
                <span className="typing-dot" />
                <span className="typing-dot" style={{ animationDelay: "0.2s" }} />
                <span className="typing-dot" style={{ animationDelay: "0.4s" }} />
              </div>
            </div>
          )}
        </div>

        {messages.length <= 1 && (
          <div className="px-6 pb-3">
            <p className="eyebrow mb-3">Sugerencias</p>
            <div className="flex flex-wrap gap-2">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="text-[11px] px-3 py-1.5 rounded-full glass hover:border-cosmos-cyan/50 hover:text-cosmos-cyan transition"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        <footer className="p-4 border-t border-white/5">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send();
            }}
            className="flex items-center gap-2 glass rounded-full pl-5 pr-2 py-2"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Pregunta sobre el cosmos..."
              className="flex-1 bg-transparent outline-none text-sm placeholder:text-muted-foreground"
            />
            <button
              type="submit"
              disabled={!input.trim() || typing}
              className="w-9 h-9 rounded-full bg-gradient-to-br from-cosmos-cyan to-cosmos-blue text-cosmos-deep flex items-center justify-center disabled:opacity-40 hover:glow-cyan transition"
              aria-label="Enviar"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </footer>
      </aside>
    </>
  );
}
