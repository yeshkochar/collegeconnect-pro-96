import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, X, Send, Bot, User, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'नमस्ते! 🇮🇳 Welcome to the Government Career & Education Portal. I\'m your AI assistant here to help you with career guidance, educational pathways, and government opportunities. How can I assist you today?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const generateBotResponse = async (userMessage: string): Promise<string> => {
    // Enhanced AI responses based on keywords
    const message = userMessage.toLowerCase();
    
    if (message.includes('career') || message.includes('job') || message.includes('profession')) {
      return `Based on your interest in career guidance, I recommend taking our comprehensive Career Assessment Quiz. 🎯

**Popular Government Career Paths:**
• **Civil Services (UPSC)** - IAS, IPS, IFS officers
• **Banking Sector** - SBI, IBPS, RBI opportunities  
• **Defense Services** - Army, Navy, Air Force
• **Teaching** - Central/State Government schools & colleges
• **Engineering Services** - Railways, PWD, CPWD
• **Healthcare** - Government hospitals & research

Would you like me to help you explore any specific field or take the assessment quiz?`;
    }

    if (message.includes('education') || message.includes('study') || message.includes('course')) {
      return `Great question about education! 📚 Here are some key pathways:

**Technical Education:**
• Engineering (IITs, NITs, State Colleges)
• Medical (AIIMS, Government Medical Colleges)
• Polytechnic & ITIs for skill development

**Higher Education:**
• Central Universities (JNU, BHU, AMU, etc.)
• State Universities
• Distance Learning (IGNOU, State Open Universities)

**Professional Courses:**
• Law (NLUs, Government Law Colleges)
• Management (IIMs, Government B-Schools)
• Teacher Training (B.Ed, D.Ed)

What specific field interests you? I can provide detailed information!`;
    }

    if (message.includes('exam') || message.includes('test') || message.includes('preparation')) {
      return `Here are major government exams and preparation tips: 📖

**All India Level:**
• **UPSC CSE** - Civil Services (Prelims + Mains + Interview)
• **SSC CGL/CHSL** - Central Government posts
• **Railway Exams** - RRB NTPC, Group D, JE
• **Banking** - IBPS PO/Clerk, SBI exams

**State Level:**
• **State PSCs** - State government positions
• **Police Recruitment** - Constable to Officer levels
• **Teacher Eligibility Tests** - CTET, State TETs

**Preparation Strategy:**
✓ Start with NCERT books for foundation
✓ Current affairs through newspapers
✓ Mock tests and previous year papers
✓ Time management and revision

Which exam are you preparing for? I can provide specific guidance!`;
    }

    if (message.includes('hello') || message.includes('hi') || message.includes('namaste')) {
      return `नमस्ते! 🙏 Welcome to our Government Career Portal! I'm here to help you navigate:

• **Career Assessment** - Discover your ideal government career path
• **Educational Guidance** - Find the right courses and institutions  
• **Exam Preparation** - Get strategies for government competitive exams
• **College Information** - Explore government colleges and universities

What would you like to explore today? Type your question or ask me about careers, education, or exams!`;
    }

    if (message.includes('college') || message.includes('university') || message.includes('admission')) {
      return `Here's information about top government educational institutions: 🏛️

**Premier Institutes:**
• **IITs** - Indian Institutes of Technology (JEE Advanced)
• **NITs** - National Institutes of Technology (JEE Main)
• **IIMs** - Indian Institutes of Management (CAT)
• **AIIMS** - All India Institute of Medical Sciences (NEET)

**Central Universities:**
• Jawaharlal Nehru University (JNU)
• Banaras Hindu University (BHU)
• Aligarh Muslim University (AMU)
• University of Delhi

**Admission Process:**
• Most require entrance exams (JEE, NEET, CAT, etc.)
• Merit-based selection
• Reservation policies apply
• Online application through official portals

Need specific information about any institution or admission process?`;
    }

    // Default intelligent response
    return `Thank you for your question! 🤔 I'm here to help with career guidance and educational pathways.

**I can assist you with:**
• Career assessment and recommendations
• Government job opportunities  
• Educational institutions and courses
• Exam preparation strategies
• Admission processes

Could you please be more specific about what you'd like to know? For example:
- "Tell me about engineering careers"
- "How to prepare for UPSC?"
- "Best colleges for medical studies"

I'm ready to provide detailed, helpful information! 🚀`;
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage.trim(),
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      // Simulate typing delay for better UX
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const botResponse = await generateBotResponse(userMessage.content);
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: 'I apologize, but I encountered an error. Please try again or contact our support team.',
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-primary to-success"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-96 h-[500px]">
      <Card className="h-full flex flex-col shadow-2xl border-2 border-primary/20">
        <CardHeader className="bg-gradient-to-r from-primary to-success text-white p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5" />
              <CardTitle className="text-lg">AI Career Assistant</CardTitle>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8 text-white hover:bg-white/20"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col p-0">
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex gap-3 max-w-[85%]",
                    message.sender === 'user' ? "ml-auto" : "mr-auto"
                  )}
                >
                  {message.sender === 'bot' && (
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-success flex items-center justify-center">
                        <Bot className="h-4 w-4 text-white" />
                      </div>
                    </div>
                  )}
                  
                  <div
                    className={cn(
                      "rounded-lg px-3 py-2 text-sm whitespace-pre-wrap",
                      message.sender === 'user'
                        ? "bg-primary text-white ml-2"
                        : "bg-muted text-foreground"
                    )}
                  >
                    {message.content}
                  </div>

                  {message.sender === 'user' && (
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                        <User className="h-4 w-4 text-white" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
              
              {isLoading && (
                <div className="flex gap-3 max-w-[85%]">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-success flex items-center justify-center">
                      <Bot className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <div className="bg-muted rounded-lg px-3 py-2">
                    <div className="flex items-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span className="text-sm text-muted-foreground">Thinking...</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div ref={messagesEndRef} />
          </ScrollArea>

          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                ref={inputRef}
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about careers, education, or exams..."
                disabled={isLoading}
                className="flex-1"
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isLoading}
                size="icon"
                className="bg-gradient-to-r from-primary to-success hover:from-primary-hover hover:to-success/90"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChatBot;