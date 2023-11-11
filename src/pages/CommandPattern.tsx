import MainLayout from "@/containers/MainLayout.tsx";
import {Button} from "@/components/ui/button.tsx";
import {CopyIcon} from "lucide-react";
import CodeEditor from "@/components/CodeEditor.tsx";
import {useToast} from "@/components/ui/use-toast.ts";
import StackBlitzCode from "@/components/StackBlitzCode.tsx";


const code = `
class Calculator {
  constructor() {
    // INITILIZE CALCULATOR WITH VALUE EQUALS TO 0
    this.value = 0;
  }

  addValue(valueToAdd) {
    this.value = this.value + valueToAdd;
    console.log('Value after add is', this.value);
  }
  substractValue(valueToSubstract) {
    this.value = this.value - valueToSubstract;
    console.log('Value after substract is', this.value);
  }
  multiplyValue(valueToMultiply) {
    this.value = this.value * valueToMultiply;
    console.log('Value after multiply is', this.value);
  }
  divideValue(valueToDivide) {
    this.value = this.value / valueToDivide;
    console.log('Value after divide is', this.value);
  }
}

const calculcator = new Calculator();

calculcator.addValue(15); // Value after add is 15
calculcator.divideValue(5); // Value after divide is 3
calculcator.substractValue(2); // Value after substract is 1
calculcator.multiplyValue(5); // Value after multiply is 5
`

const code2 = `
class Calculator {
  constructor() {
    this.value = 15;
  }
  substractValue(valueToSubstract) {
    this.value = this.value - valueToSubstract;
    console.log('Value after substract is', this.value);
  }
  multiplyValue(valueToMultiply) {
    this.value = this.value * valueToMultiply;
    console.log('Value after multiply is', this.value);
  }
  divideValue(valueToDivide) {
    this.value = this.value / valueToDivide;
    console.log('Value after divide is', this.value);
  }
}

class AddValue {
  constructor(valueToAdd) {
    this.valueToAdd = valueToAdd;
  }
  // EXECUTE FUNCTION NEEDS TO TAKE CURRENT VALUE WHICH IS THIS THAT VALUE FROM PREVIOUS EXAMPLES
  // CAUSE OF ADD VALUE FUNCTION IS NO LONGER IN THE CALCULATOR
  execute(currentValue) {
    return currentValue + this.valueToAdd;
  }
  undo(currentValue){
    return currentValue - this.valueToAdd;
  }
}

const calculcator = new Calculator();
calculcator.substractValue(5); //Value after substract is 10

const addValue = new AddValue(5); // Initilize with value to add
const newValue = addValue.execute(calculcator.value) // Value after executing add command 15
const newValueUndo = addValue.undo(calculcator.value) // Value after undo add command 10
console.log("Value after executing add command", newValue)
console.log("Value after undo add command", addValue.undo(newValue))
`


function CommandPattern() {

    const {toast} = useToast()

    return (
        <MainLayout>
            <div className={"w-full text-[rgb(193,193,193)] px-2"}>

                {/*HEADER*/}
                <div className={"border-b border-gray-400 py-20"}>
                    <h1>Command Pattern</h1>
                    <p>The idea of command pattern is to take a different operations, you want something to do
                       and <span className={"font-bold text-blue-400"}>Encapsulate</span> them into indivdual commands that have
                        <span className={"font-bold text-blue-400"}> execute </span> and <span className={"font-bold text-blue-400"}>undo</span> methods.
                    </p>
                </div>


                <div className={"border-b border-gray-400 py-20"}>
                    <span>Check out this simple calculator code</span>
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
                    <p>So how can we started implementing Command Pattern in this example?<br/>
                       We need to abstract all methods into own commands like this:
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
                    <p>Obiously in this trival example for adding and substracting count value
                        <span className={'font-bold text-blue-400'}> undo </span>
                        method seems to be pretty useless. <br/>
                        But when you think about actions like adding and removing users from database
                        this pattern can save you a lot of work!😊
                    </p>
                </div>


                <div className={"py-20"}>
                    <div className={"mb-4"}>Here's simple example how we can use observer pattern to notify all counters
                        about changes
                    </div>
                    {/*<StackBlitzCode stackBlitzBaseUrl={stackBlitzBaseUrl} title={"Observer Pattern"}/>*/}
                </div>



            </div>
        </MainLayout>
    );
}

export default CommandPattern;