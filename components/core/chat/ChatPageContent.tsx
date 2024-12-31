"use client";
import { getAIReply } from "@/lib/openai"; // Adjust the import path accordingly
import { ArrowRight, Loader, User } from "lucide-react";
import { marked } from "marked"; // Import the marked library
import { AnimatePresence, motion } from "motion/react";
import { useState, useEffect, useRef } from "react";

// Suggestions for user to start the conversation
const suggestions: string[] = [
  "Can you find me some beautiful Arabic love poems?",
  "What are some famous Arabic poems that celebrate nature?",
  "Can you suggest poems that deal with themes of loss and grief?",
  "What are some uplifting Arabic poems that inspire hope?",
];

// Define a Message type with role and content
interface Message {
  role: "user" | "ai";
  content: string;
}

const ChatPageContent = () => {
  const [messages, setMessages] = useState<Message[]>([]); // Array of Message objects
  const [inputText, setInputText] = useState<string>(""); // Input text
  const [loading, setLoading] = useState<boolean>(false); // Loading state
  const chatEndRef = useRef<HTMLDivElement | null>(null); // Ref for scrolling

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    // Add user message to the chat
    const userMessage: Message = { role: "user", content: inputText };
    setMessages((prev: Message[] | null) => [
      ...(prev ?? []), // Handle null by falling back to an empty array
      userMessage,
    ]);

    // Clear the input field
    setInputText("");

    // Set loading state to true
    setLoading(true);

    // Get AI reply (Ensure the structure matches Message)
    const aiReply: { content: string | null } = await getAIReply(inputText);

    // Set loading state to false
    setLoading(false);

    // Add AI reply to the chat, ensuring `content` is always a string
    setMessages((prev: Message[] | null) => [
      ...(prev ?? []), // Handle null by falling back to an empty array
      { role: "ai", content: aiReply.content ?? "" }, // Fallback to empty string if content is null
    ]);
  };

  // Scroll to the bottom whenever messages change
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="h-full min-h-screen flex flex-col">
      <AnimatePresence mode="wait">
        {messages.length < 1 ? (
          <motion.div
            key={messages.length < 1 ? "coming" : "leaving"}
            initial={{
              opacity: 0,
              y: 20,
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: {
                ease: [0.25, 1, 0.5, 1],
              },
            }}
            exit={{
              opacity: 0,
              y: -20,
              filter: "blur(10px)",
              transition: {
                ease: [0.5, 0, 0.75, 0],
              },
            }}
            className="h-full w-full flex-col min-h-screen flex items-center justify-center"
          >
            <div className="max-w-xl p-5 w-full">
              <div className="font-Manrope text-4xl">
                Welcome to{" "}
                <span className="font-urdu text-accent/75">أشعاري</span>
              </div>
              <div className="md:text-sm text-xs   mt-7">
                {"> Start A Topic To Discuss"}
                <div>
                  {suggestions.map((item, i) => (
                    <div
                      onClick={() => {
                        setInputText(item);
                      }}
                      key={i}
                      className="opacity-75 line-clamp-1 md:line-clamp-none hover:opacity-100 transition-all duration-300 ease-in-out cursor-pointer"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <div className="flex-1 overflow-y-auto p-4 pt-[40%] pb-44">
            {messages.map((msg, index: number) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                  filter: "blur(10px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: {
                    ease: [0.25, 1, 0.5, 1],
                  },
                }}
                key={index}
                className={`mb-2 ${
                  msg.role === "user" ? "text-left" : "text-right"
                }`}
              >
                <div
                  className={`inline-block py-2 px-4 rounded-xl ${
                    msg.role === "user"
                      ? "bg-accent text-white"
                      : "bg-foreground/75 text-background font-IBMARAB"
                  }`}
                >
                  {/* Render Markdown as HTML */}
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        msg.role === "ai" ? marked(msg.content) : msg.content,
                    }}
                  />
                </div>
              </motion.div>
            ))}
            <AnimatePresence mode="wait">
              {loading && (
                <motion.div
                  key={loading ? "coming" : "leaving"}
                  initial={{
                    opacity: 0,
                    y: 20,
                    filter: "blur(10px)",
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: {
                      ease: [0.25, 1, 0.5, 1],
                    },
                  }}
                  className="w-full flex items-end justify-end"
                >
                  <div className="inline-block py-2 px-4 rounded-xl bg-foreground/75 text-background mr-0">
                    <div className="flex items-center gap-2">
                      <div>Writing A Reply</div>
                      <div>
                        <Loader className="animate-spin" size={13} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <div ref={chatEndRef} /> {/* Reference for scrolling */}
          </div>
        )}
      </AnimatePresence>
      <div className="fixed bottom-14 left-1/2 -translate-x-1/2 wrapper p-0 w-full">
        <input
          placeholder="Think With Me..."
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
          className="border border-foreground/10 py-4 px-12 w-full rounded-none focus-visible:outline-none bg-background"
        />
        <div
          className="h-full aspect-square absolute right-0 top-0 flex items-center justify-center bg-accent hover:opacity-75 transition-all duration-300 ease-in cursor-pointer"
          onClick={handleSendMessage}
        >
          <ArrowRight size={18} />
        </div>
        <div className="absolute left-5 top-1/2 -translate-y-1/2">
          <User size={14} />
        </div>
      </div>
    </div>
  );
};

export default ChatPageContent;
