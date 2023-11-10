import MainLayout from "@/containers/MainLayout.tsx";
import CodeEditor from "@/components/CodeEditor.tsx";


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
                    <li><span>observers</span>: an array of observers that will get notified when specific event occurs</li>
                    <li><span>subscribe()</span>: method in order to add observers to the observers list</li>
                    <li><span>unsubscribe()</span>: method in order to remove observers from the observers list</li>
                    <li><span>notify()</span>: method that will notify all observers when specific event occurs</li>
                </ul>
            </div>


            <div className={"py-20"}>
                <span>Let's create an observable. Easy way is by creating ES6 class feature</span>
                    <div className={"p-4"}>
                    <CodeEditor code={code}/>
                    </div>
            </div>




        </div>
        </MainLayout>
    );
}

export default Observer;