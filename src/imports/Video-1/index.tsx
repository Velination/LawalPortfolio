import imgMockup from "./0f846daeecff455b081f1bbe7dc5029eea5604ec.png";
import imgVector1 from "./83ce90fcaf50884de66d5b16170c9de4ff251428.png";

export default function Video() {
  return (
    <div className="relative size-full" data-name="Video">
      <div className="absolute h-[1456px] left-0 top-0 w-[1940px]" data-name="Mockup">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[154.53%] left-[-27.32%] max-w-none top-[-27.27%] w-[154.64%]" src={imgMockup} />
        </div>
      </div>
      <div className="absolute h-[794px] left-[419px] top-[187px] w-[1098px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="795" src={imgVector1} width="1099.001" />
      </div>
    </div>
  );
}