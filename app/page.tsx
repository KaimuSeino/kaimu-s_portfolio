import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Home() {
  return (
    <main className="m-4">
      <div className="py-8 px-4 flex flex-col justify-center items-center">
        <p className="text-3xl font-semibold">
          Kaimu's Portfolio
        </p>
        <div>
          <Avatar className="h-60 w-60 mt-2">
            <AvatarImage src="/kaimu_icon.JPG" />
          </Avatar>
        </div>
      </div>
      <div className="px-4 flex flex-col gap-4">
        {/* about */}
        <div>
          <h2 className="font-semibold text-2xl">About</h2>
          <Separator />
          <p className="mt-2 text-pretty">
            I'm Kaimu Seino.<br />
            Third year bachelor's student at Akita University.<br />
            Department of Mathematical, Electrical and Electronic Information Engineering
          </p>
        </div>
        <div>
          <h2 className="font-semibold text-2xl">Skill</h2>
          <Separator />
          <h3 className="mt-4 font-semibold">Languages</h3>
          <div className="flex gap-10 w-full mt-6">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
              alt=""
              width={80}
              height={80}
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
              alt=""
              width={80}
              height={80}
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"
              alt=""
              width={80}
              height={80}
            />
          </div>
          <div className="flex gap-10 w-full mt-10">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
              alt=""
              width={80}
              height={80}
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
              alt=""
              width={80}
              height={80}
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
              alt=""
              width={80}
              height={80}
            />
          </div>
          <h3 className="mt-8 font-semibold">Framework</h3>
          <div className="flex gap-10 w-full mt-6">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
              alt=""
              width={80}
              height={80}
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg"
              alt=""
              width={80}
              height={80}
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-plain-wordmark.svg"
              alt=""
              width={80}
              height={80}
            />
          </div>
          <h3 className="mt-8 font-semibold">Others</h3>
          <div className="flex gap-10 w-full mt-6">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
              alt=""
              width={80}
              height={80}
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
              alt=""
              width={80}
              height={80}
            />
          </div>
        </div>
        <div>
          <h2 className="font-semibold text-2xl">Experience</h2>
          <Separator />
          <div className="mt-2 text-pretty">
            <div className="mb-4">
              <label htmlFor="">September. 2022 ~ October. 2022</label>
              <p className="font-semibold">
                Study abroad in Malaysia
              </p>
            </div>
            <div className="mb-4">
              <label htmlFor="">February. 2023 ~ March. 2023</label>
              <p className="font-semibold">
                Akita University DX research and development
              </p>
            </div>
            <div className="mb-4">
              <label htmlFor="">July. 2023 ~ September. 2023</label>
              <p className="font-semibold">
                141&co.,Inc internship
              </p>
            </div>
            <div className="mb-4">
              <label htmlFor="">October. 2023 ~ February. 2024</label>
              <p className="font-semibold">
                AKATSUKI project
              </p>
            </div>
            <div className="mb-4">
              <label htmlFor="">December. 2023 ~ February. 2024</label>
              <p className="font-semibold">
                Web&times;Iot Makers Challenge
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="font-semibold text-2xl">Product</h2>
          <Separator />
          <h3 className="font-semibold mt-4">Eventi</h3>
          <p>
            URL: <a href="https://eventi.jp" className="text-yellow-500 hover:text-yellow-700">Eventi</a>
          </p>
        </div>
        <div>
          <h2 className="font-semibold text-2xl">SNS</h2>
          <Separator />
          <div className="mt-2">
            <h3 className="font-semibold mt-4">github</h3>
            <p>
              URL: <a href="https://eventi.jp" className="ml-4 text-slate-500 hover:text-slate-700">https://github.com/KaimuSeino</a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
