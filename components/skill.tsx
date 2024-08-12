import Image from "next/image";
import { Separator } from "@/components/ui/separator";

const Skill = () => {
    return (
        <div id='skill' className="w-full">
            <h2 className="font-semibold text-2xl">Skill</h2>
            <Separator />
            <h3 className="mt-4 font-semibold">プログラミング言語</h3>
            <div className="grid grid-cols-3 md:flex gap-10 w-full mt-6">
              <div className="">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                  alt="typescript"
                  width={100}
                  height={100}
                />
                <p>学習: 1年</p>
              </div>
              <div>
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                  alt=""
                  width={100}
                  height={100}
                />
                <p>学習: 1年</p>
              </div>
              <div>
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"
                  alt=""
                  width={100}
                  height={100}
                />
                <p>学習: 6ヶ月</p>
                <p>実務: 3ヶ月</p>
              </div>
              <div>
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                  alt=""
                  width={100}
                  height={100}
                />
                <p>学習: 2年</p>
                <p>研究: 6ヶ月</p>
              </div>
              <div>
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                  alt=""
                  width={100}
                  height={100}
                />
                <p>学習: 1年</p>
                <p>実務: 3ヶ月</p>
              </div>
              <div>
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                  alt=""
                  width={100}
                  height={100}
                />
                <p>学習: 1年</p>
                <p>実務: 3ヶ月</p>
              </div>
              <div>
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg"
                  alt=""
                  width={100}
                  height={100}
                />
                <p>学習: 3ヶ月</p>
              </div>
            </div>
            <h3 className="mt-4 font-semibold">フレームワーク</h3>
            <div className="grid grid-cols-3 md:flex gap-10 w-full mt-6">
              <div>
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                  alt=""
                  width={100}
                  height={100}
                />
                <p>学習: 1年</p>
              </div>
              <div>
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg"
                  alt=""
                  width={100}
                  height={100}
                />
                <p>学習: 1年</p>
              </div>
              <div>
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
                  alt=""
                  width={100}
                  height={100}
                />
                <p>学習: 1年</p>
              </div>
              <div>
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg"
                  alt=""
                  width={100}
                  height={100}
                />
                <p>学習: 2ヶ月</p>
              </div>
              <div>
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cakephp/cakephp-plain-wordmark.svg"
                  alt=""
                  width={100}
                  height={100}
                />
                <p>学習: 3ヶ月</p>
                <p>実務: 3ヶ月</p>
              </div>
            </div>
            <h3 className="mt-4 font-semibold">その他</h3>
            <div className="flex gap-10 w-full mt-6">
              <div>
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
                  alt=""
                  width={100}
                  height={100}
                />
                <p>学習: 1年</p>
                <p>実務: 3ヶ月</p>
              </div>
              <div>
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                  alt=""
                  width={100}
                  height={100}
                />
                <p>学習: 1年</p>
                <p>実務: 3ヶ月</p>
              </div>
              <div>
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
                  alt=""
                  width={100}
                  height={100}
                />
                <p>学習: 3ヶ月</p>
                <p>実務: 3ヶ月</p>
              </div>
            </div>
        </div>
    );
}
 
export default Skill;