import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

const Products = () => {
    return ( 
        <div id="products" className="w-full">
            <h2 className="font-semibold text-2xl">Products</h2>
            <Separator />
            <div className="flex flex-col gap-4 md:flex-row items-center justify-around mt-4">
              <div>
                <h3 className="font-semibold text-2xl mt-4">Eventi</h3>
                <p className="w-full md:w-[500px]">
                  秋田若手人材・発掘イノベーションプログラム
                  で制作したプロダクトです。
                </p>
              </div>
              <Link href='https://eventi.jp' target="_blank">
                <Image
                  src='/eventi.jpg'
                  alt="eventi"
                  width={300}
                  height={300}
                  className="border-2 rounded-2xl transition-transform duration-300 hover:scale-105"
                />
              </Link>
            </div>
        </div>
     );
}
 
export default Products;