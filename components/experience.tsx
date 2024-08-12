import { Separator } from "@/components/ui/separator";

const Experience = () => {
    return ( 
        <div id="experience" className="w-full">
            <h2 className="font-semibold text-2xl">Experience</h2>
            <Separator />
            <div className="mt-4 flex flex-col md:flex-row items-center justify-around">
              <div className="w-full md:w-[300px]">
                <label className="text-xl">2022年9月 ~ 2022年10月</label>
                <p className="font-semibold text-2xl">
                  マレーシア留学
                </p>
              </div>
              <div className="w-full my-4 md:w-[500px]">
                マレーシア工科大学への短期留学を行いました。<br />
                現地では、英語研修・クアラルンプール現地企業のインターンシップ・
                現地学生との交流・大学施設および研究室の見学などを行いました。
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-around">
              <div className="w-full md:w-[300px]">
                <label className="text-xl">2023年2月 ~ 2023年3月</label>
                <p className="font-semibold text-2xl">
                  G-College
                </p>
              </div>
              <div className="w-full my-4 md:w-[500px]">
                起業家を育成するプログラムに参加しました。<br />
                内容は、ビジョンを描き、プロダクトを考え、ピッチを行うというものです。最終ピッチでは、Nstockの宮田さんと高橋さんにピッチを行いました。
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-around">
              <div className="w-full md:w-[300px]">
                <label className="text-xl">2023年10月 ~ 2024年2月</label>
                <p className="font-semibold text-2xl">
                  秋田 若手人材発掘・育成 <br />
                  イノベーションプログラム
                </p>
              </div>
              <div className="w-full my-4 md:w-[500px]">
                アクセラレータプログラムに参加しました。<br />
                チームで新規事業を立案し、webアプリケーションの開発を行い、想定ユーザーにデモを使用してもらいフィードバックをいただき、成果報告会を行いました。自分が参加したチームで最優秀賞をとることができました。<br />
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-around">
              <div className="w-full md:w-[300px]">
                <label className="text-xl">2024年6月 ~ 現在</label>
                <p className="font-semibold text-2xl">
                  株式会社Donuts <br />
                </p>
              </div>
              <div className="w-full my-4 md:w-[500px]">
                エンジニアとして長期インターンを行っています。<br />
                主に新規事業のバックエンドで、PHP/CakePHPフレームワークを用いて開発を行っています。
              </div>
            </div>
        </div>
     );
}
 
export default Experience;