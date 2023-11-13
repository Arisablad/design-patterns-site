import MainLayout from "@/containers/MainLayout.tsx";
import {Button} from "@/components/ui/button.tsx";
import {CopyIcon} from "lucide-react";
import CodeEditor from "@/components/CodeEditor.tsx";
import StackBlitzCode from "@/components/StackBlitzCode.tsx";
import AiPrompt from "@/components/AiPrompt.tsx";
import {useToast} from "@/components/ui/use-toast.ts";


const code = `
class Counter {
  constructor() {
    this.count = 0;
  }

  getInstance() {
    return this; // returns value of instance
  }

  increment() {
    return this.count++; // incrementing count
  }
  decrement() {
    return this.count--; // decrementing count
  }
  getCount() {
    return this.count; // returns current value of count variable
  }
}
`
const code2 = `
const counter1 = new Counter()
const counter2 = new Counter()
counter1.getInstance() === counter2.getInstance() // false
`

const code3 = `
let instance 
class Counter {
  constructor() {
    this.count = 0;
    if(instance){
      throw new Error("only one instance of Counter class can be created")
    }
    instance = this
  }

  getInstance() {
    return this;
  }

  increment() {
    return this.count++;
  }
  decrement() {
    return this.count--;
  }
  getCount() {
    return this.count;
  }
  
  const counter1 = new Counter()
  const counter2 = new Counter() // Error "only one instance of Counter class can be created"
}
`

const code4 = `
const counter = Object.freeze(new Counter())
export default counter
`


function Singleton() {
    const stackBlitzBaseUrl = import.meta.env.VITE_STACKBLITZ_COMMAND
    const {toast} = useToast()

    return (
        <MainLayout>

            <div className={"w-full text-[rgb(193,193,193)] px-2"}>

                {/*HEADER*/}
                <div className={"border-b border-gray-400 py-20"}>
                    <h1>Singleton Pattern</h1>
                    <p>
                        Singletons are classes/objects which can be instantiated once, and can be accessed globally. This single instance can be
                        shared throughout our application, which makes Singletons great for managing global state in an application.
                    </p>
                </div>


                <div className={"border-b border-gray-400 py-20"}>
                    <span>First lets take a look at what singleton can look like. We're going to build counter class.</span>
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

                <div className={"border-b border-gray-400 py-20"}>
                    <p>Currently this code doesn't meet criteria of singleton cause we can create multiple instances of Counter class

                    </p>
                    <div className={"p-4 flex flex-col relative gap-2"}>
                        <Button variant={"copy"} onClick={()=>{
                            void window.navigator.clipboard.writeText(code2)
                            toast({
                                description: "Code copied to your clipboard",
                            })
                        }}>
                            <CopyIcon/>
                            Copy Code
                        </Button>
                        <CodeEditor code={code2}/>
                    </div>
                </div>

                <div className={"border-b border-gray-400 py-20"}>
                    <p>
                        One way to make sure that only one instance can be created is by creating variable called instance.
                        From the constructor of Counter class we can check if this variable has already assigned value, if not
                        create new one, if variable was previously assigned. Throw new error.
                    </p>
                    <div className={"p-4 flex flex-col relative gap-2"}>
                        <Button variant={"copy"} onClick={()=>{
                            void window.navigator.clipboard.writeText(code2)
                            toast({
                                description: "Code copied to your clipboard",
                            })
                        }}>
                            <CopyIcon/>
                            Copy Code
                        </Button>
                        <CodeEditor code={code3}/>
                    </div>
                </div>

                <div className={"border-b border-gray-400 py-20"}>
                    <p>
                       Finally if we can't create multiple instances. It's time to export <span className={"text-blue-400 font-bold"}>Counter</span> instance, we want to export it
                       from the same file cause we won't create multiple instances. But before it, lets also freeze newly created. Properties
                        on frozen object cannot be be added or modified which reduces the risk of accidentally overwriting the values of Singleton.
                        To do that we will use <span className={"text-blue-400 font-bold"}>Object.freeze()</span> method.
                    </p>
                    <div className={"p-4 flex flex-col relative gap-2"}>
                        <Button variant={"copy"} onClick={()=>{
                            void window.navigator.clipboard.writeText(code2)
                            toast({
                                description: "Code copied to your clipboard",
                            })
                        }}>
                            <CopyIcon/>
                            Copy Code
                        </Button>
                        <CodeEditor code={code4}/>
                    </div>
                </div>




                <div className={"py-20 border-b border-gray-400 grid grid-cols-2 text-center"}>
                    <div>
                        <p className={"text-green-600 font-bold text-2xl"}>Pros</p>
                        <ul>
                            <li>- Restricting the instantiation to just one instance could potentially save a lot of memory space.
                                Instead of having to set up memory for a new instance each time, we only have to set up memory for that one instance</li>
                        </ul>
                    </div>
                    <div>
                        <p className={"text-red-600 font-bold text-2xl"}>Cons</p>
                        <ul>
                            <li>- Singletons are actually considered an anti-pattern, and can (or.. should) be avoided in JavaScript.</li>
                            <li>- In many programming languages, such as Java or C++, it’s not possible to directly create objects the way we can in JavaScript.
                                In those object-oriented programming languages, we need to create a class, which creates an object.</li>
                        </ul>
                    </div>
                </div>


                <div className={"py-20 flex items-center gap-4 flex-col w-full px-4"}>
                    <p className={"text-2xl font-bold"}>Do you have more questions?</p>
                    <AiPrompt pattern={"Singleton"}/>
                </div>


            </div>

        </MainLayout>
    );
}

export default Singleton;