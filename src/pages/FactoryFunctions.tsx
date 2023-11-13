import MainLayout from "@/containers/MainLayout.tsx";
import {Button} from "@/components/ui/button.tsx";
import {CopyIcon} from "lucide-react";
import CodeEditor from "@/components/CodeEditor.tsx";
import AiPrompt from "@/components/AiPrompt.tsx";
import {useToast} from "@/components/ui/use-toast.ts";


const code = `
const createUser = ({ firstName, lastName, email }) => ({
  firstName,
  lastName,
  email,
  fullName() {
    return 'this.firstName, this.lastName';
  },
});

const user1 = createUser({
  firstName: "John",
  lastName: "Doe",
  email: "john@doe.com"
});

user1.fullName() // John Doe
`;

const code2 = `
const createObjectFromArray = ([key, value]) => ({
  [key]: value,
});

createObjectFromArray(["name", "John"]); // { name: "John" }
`
function FactoryFunctions() {

    const { toast } = useToast()


    return (
     <MainLayout>
         <div className={"w-full text-[rgb(193,193,193)] px-2"}>

             {/*HEADER*/}
             <div className={"border-b border-gray-400 py-20"}>
                 <h1>Factory Pattern</h1>
                 <p>Factory Pattern is nothing more than a function which returns a new object without the use of <span className={"font-bold"}>new </span>
                     keyword
                 </p>
             </div>


             <div className={"border-b border-gray-400 py-20"}>
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
                 <p>The factory pattern can be usefull if we're creating relatively complex and configurable objects.
                     With factory pattern we can easily create objects that contain custom key and values
                 </p>
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
                     <CodeEditor code={code2}/>
                 </div>
             </div>



             <div className={"py-20 border-b border-gray-400 grid grid-cols-2 text-center"}>
                 <div>
                     <p className={"text-green-600 font-bold text-2xl"}>Pros</p>
                     <ul>
                         A factory function can easily return a custom object depending on the current environment.
                     </ul>
                 </div>
                 <div>
                     <p className={"text-red-600 font-bold text-2xl"}>Cons</p>
                     <ul>
                         <li>- In many cases it may be more memory efficient to create new instances with Classes instead of new objects each time.
                         </li>
                     </ul>
                 </div>
             </div>


             <div className={"py-20 flex items-center gap-4 flex-col w-full px-4"}>
                 <p className={"text-2xl font-bold"}>Do you have more questions?</p>
                 <AiPrompt pattern={"Factory Functions"}/>
             </div>

         </div>
     </MainLayout>
    );
}

export default FactoryFunctions;