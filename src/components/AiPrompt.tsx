import { useState, }  from 'react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {
    MainContainer,
    ChatContainer,
    MessageList,
    Message,
    MessageInput,
    TypingIndicator, InputToolbox,
} from '@chatscope/chat-ui-kit-react';
import {Button} from "@/components/ui/button.tsx";
import {MessageDirection} from "@chatscope/chat-ui-kit-react/src/types/unions";
import {useToast} from "@/components/ui/use-toast.ts";

type TMessages = {
    message: string;
    sentTime?: string;
    sender: string;
    direction?: MessageDirection | string;
}


const API_KEY = import.meta.env.VITE_GPT_KEY

const AiPrompt = ({pattern}: {pattern:string}) => {
    const [messages, setMessages] = useState<TMessages[]>([
        {
            message: "Hello, I'm your design-patterns assistant",
            sentTime: "just now",
            sender: "ChatGPT",
        },
    ]);
    const [isTyping, setIsTyping] = useState(false);
    const {toast} = useToast()

    const handleSendRequest = async (message:string) => {
        const newMessage = {
            message,
            direction: 'outgoing',
            sender: "user",
        };

        setMessages((prevMessages) => [...prevMessages, newMessage]);
        setIsTyping(true);

        try {
            const response = await processMessageToChatGPT([...messages, newMessage]);
            const content = response.choices[0]?.message?.content;
            if (content) {
                const chatGPTResponse = {
                    message: content as string,
                    sender: "ChatGPT" as string,
                    sentTime: "just now"
                };
                setMessages((prevMessages) => [...prevMessages, chatGPTResponse]);
            }
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Chat assistant doesnt work",
                description: "Too many request in free plan",
            })
            // console.error("Error processing message:", error);
        } finally {
            setIsTyping(false);
        }
    };

    async function processMessageToChatGPT(chatMessages) {
        const apiMessages = chatMessages.map((messageObject) => {
            const role = messageObject.sender === "ChatGPT" ? "assistant" : "user";
            return { role, content: messageObject.message };
        });

        const apiRequestBody = {
            "model": "gpt-3.5-turbo",
            "messages": [
                { role: "system", content: "I'm a Student using ChatGPT for learning" },
                ...apiMessages,
            ],
        };

        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": "Bearer " + API_KEY,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(apiRequestBody),
        })
            return response.json();


    }

    return (
            <div style={{ position:"relative", height: "600px", width: "100%"  }}>
                <MainContainer className={"rounded-md p-2"}>
                    <ChatContainer>
                        <MessageList
                            scrollBehavior="smooth"
                            typingIndicator={isTyping ? <TypingIndicator content="ChatGPT is typing" /> : null}
                        >
                            {messages.map((message, i) => {
                                return <Message key={i} model={message} />
                            })}
                        </MessageList>
                        <MessageInput attachButton={false} placeholder="Send a Message" onSend={handleSendRequest} />
                        <InputToolbox>
                            <div className={"flex flex-wrap justify-center gap-4 py-2"}>
                            <div className={"text-2xl font-bold"}>Our Prompts Suggestion:</div>
                                <Button className={"py-8 sm:py-0"} onClick={()=>{
                                    void handleSendRequest(`Explain me ${pattern} pattern in easier words, like I'm 5 years old`)
                                }}>Easier words</Button>
                                <Button className={"py-8 sm:py-0"} onClick={()=>{
                                    void handleSendRequest(`Could you provide me with examples on ${pattern} pattern in javascript with a detailed description of what is happening in the code?`)
                                }}>Examples</Button>
                            </div>
                        </InputToolbox>
                    </ChatContainer>
                </MainContainer>
            </div>
    )
}

export default AiPrompt;