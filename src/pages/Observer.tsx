import MainLayout from "@/containers/MainLayout.tsx";
import CodeEditor from "@/components/CodeEditor.tsx";
import StackBlitzCode from "@/components/StackBlitzCode.tsx";
import AiPrompt from "@/components/AiPrompt.tsx";
import {Button} from "@/components/ui/button.tsx";
import {CopyIcon} from "lucide-react";
import {useToast} from "@/components/ui/use-toast.ts";

const code = `
    class Observable{
    constructor(){
    this.observers = []
    }
    
    // Method that will add observer to the list
    subscribe(func){
    this.observers.push(func)
    }
    
    // Method that will remove observer from the list
    unsubscribe(func){
    this.observers.filter(observer=> observer !== func)
    }
    
    // Method that will invoke all observers with provided data
    notify(data){
    this.observers.forEach((observer) => observer(data))
    }
    }
`;

function Observer() {
    const { toast } = useToast()

    const stackBlitzBaseUrl = import.meta.env.VITE_STACKBLITZ_OBSERVER




    return (
        <MainLayout>
            <div className={"w-full text-[rgb(193,193,193)] px-2"}>

                {/*HEADER*/}
                <div className={"border-b border-gray-400 py-20"}>
                    <h1>Observer Pattern</h1>
                    <p>With observer pattern we can subscribe certain objects which are called
                        <span className={"font-bold text-blue-200"}> the observers </span> to another object called
                        <span className={"font-bold text-blue-200"}> the observable </span>
                        Whenever an event occurs the observable notifies all observers!
                    </p>
                </div>

                <div className={"border-b border-gray-400 py-20"}>
                    <span>Observable object usually contains 3 important parts</span>
                    <ul className={"list-outside"}>
                        <li><span>observers</span>: an array of observers that will get notified when specific event
                            occurs
                        </li>
                        <li><span>subscribe()</span>: method in order to add observers to the observers list</li>
                        <li><span>unsubscribe()</span>: method in order to remove observers from the observers list</li>
                        <li><span>notify()</span>: method that will notify all observers when specific event occurs</li>
                    </ul>
                </div>


                <div className={"border-b border-gray-400 py-20"}>
                    <span>Let's create an observable. Easy way is by creating ES6 class feature</span>
                    <div className={"p-4 flex flex-col relative gap-2"}>
                        <Button variant={"copy"} onClick={()=>{
                            void window.navigator.clipboard.writeText(code)
                            toast({
                                description: "Code copied to your clipboard",
                            })
                        }}>
                            <CopyIcon/>
                            Copy Code
                        </Button>
                        <CodeEditor code={code}/>
                    </div>
                </div>


                <div className={"py-20"}>
                    <div className={"mb-4"}>Here's simple example how we can use observer pattern to notify all counters
                        about changes
                    </div>
                    <StackBlitzCode stackBlitzBaseUrl={stackBlitzBaseUrl} title={"Observer Pattern"}/>
                </div>

                <div className={"py-20 border-b border-gray-400 grid grid-cols-2 text-center"}>
                    <div>
                        <p className={"text-green-600 font-bold text-2xl"}>Pros</p>
                        <ul>
                            <li>- Great way to enforce separation of concerns</li>
                            <li>- Single responsibility principle</li>
                            <li>- The Observable object is responsible for monitoring the events, while observers simply
                                handle the received data
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className={"text-red-600 font-bold text-2xl"}>Cons</p>
                        <ul>
                            <li>- If an observer is too complex, it may cause performance issues when notifying all
                                subscribers
                            </li>
                        </ul>
                    </div>
                </div>


                <div className={"py-20 flex items-center gap-4 flex-col w-full px-4"}>
                    <p className={"text-2xl font-bold"}>Do you have more questions?</p>
                    <AiPrompt pattern={"Observer"}/>
                </div>

            </div>
        </MainLayout>
    );
}

export default Observer;