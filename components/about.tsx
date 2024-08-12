import { Separator } from "@/components/ui/separator";
import MyAvatar from "@/components/my-avatar";

const About = () => {
    return ( 
        <div id="about" className="w-full mt-20 flex flex-col md:flex-row items-center justify-around">
            <MyAvatar />
            <div>
              <h2 className="font-semibold text-2xl">About</h2>
              <Separator />
              <p className="mt-2 text-pretty font-medium">
                清野 海夢（せいの かいむ）です。<br />
                秋田大学 理工学部 4年生です。<br />
                大学では、電気電子工学を専攻しており、半導体とマイクロコンピュータを用いた <br />
                デバイス開発に関する研究を行っています。<br />
                アクセラレータープログラムやハッカソンなどのイベントに参加するのが好きです。<br />
                よく友達と新規事業やスタートアップ関連の話をしています。<br />
              </p>
            </div>
  
        </div>
     );
}
 
export default About;