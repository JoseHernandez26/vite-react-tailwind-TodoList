import CrossIcon from "./assets/components/CrossIcon";
import MoonIcon from "./assets/components/icons/MoonIcon";
const App= ()=>{
return (
<div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat bg-gray-300 ">
<header className="container mx-auto px-4 pt-8">
<div className="flex justify-between">

<h1 className="text-3xl font-semibold uppercase tracking-[0.3em] text-white">Todo</h1>
<button><MoonIcon className="fill-red-400"/></button>

</div>
<form className="overflow-hiddend rounded-md bg-white py-4 px-4">
<span className="inline-block h-5 w-5 rounded-full"></span>
<input type="text" placeholder="Create a new todo..."
className="w-full text-gray-400 outline-none"/>
</form>
</header>
<main className="container mx-auto px-4 mt-8 px-4">
<div className="rounded-md bg-white bg-white [&article]:p-4" >
<article className="flex gap-4 py-4 border-b-gray-400 border-b px-4">
    <button className="flex-none inline-block h-5 w-5 rounded-full  border-2"></button>
    <p className="text-gray-600 grow">Complete curso de Javascript en línea</p>
    <button ><CrossIcon/></button>
</article>
<article className="flex gap-4 py-4 border-b-gray-400 border-b px-4">
    <button className="flex-none inline-block h-5 w-5 rounded-full  border-2"></button>
    <p className="text-gray-600 grow">Complete curso de Javascript en línea</p>
    <button ><CrossIcon/></button>
</article>
<article className="flex gap-4 py-4 border-b-gray-400 border-b px-4">
    <button className="flex-none inline-block h-5 w-5 rounded-full  border-2"></button>
    <p className="text-gray-600 grow">Complete curso de Javascript en línea</p>
    <button ><CrossIcon/></button>
</article>



<section className="py-4 px-4 flex justify-between">
<span className="text-gray-400">5 items left</span>
<button className="text-gray-400">Clear Completed</button>
</section>

</div>


</main>

<section className="px-auto container mx-auto px-4">

    <div className="bg-white p-4 rounded-md flex justify-center gap-4">
    <button className="hover:text-blue-500" >
      All  
    </button>
    <button className="hover:text-blue-500">
     Active 
    </button>
    <button className="hover:text-blue-500">
 Completed
    </button>

    </div>

</section>

<p className="text-center">Drag and drop to reorder list</p>
</div>

);
};

export default App;