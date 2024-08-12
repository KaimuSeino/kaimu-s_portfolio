import { Separator } from "@/components/ui/separator";

const Social = () => {
    return ( 
        <div id="social" className="w-full">
            <h2 className="font-semibold text-2xl">SNS</h2>
            <Separator />
            <div className="mt-2">
                <h3 className="font-semibold mt-4">github</h3>
                <p>
                    URL: <a href="https://github.com/KaimuSeino" className="ml-4 text-slate-500 hover:text-slate-700">https://github.com/KaimuSeino</a>
                </p>
            </div>
            <div className="mt-2">
                <h3 className="font-semibold mt-4">X</h3>
                <p>
                    URL: <a href="https://x.com/kaimuseino" className="ml-4 text-slate-500 hover:text-slate-700">https://x.com/kaimuseino</a>
                </p>
            </div>
        </div>
     );
}
 
export default Social;