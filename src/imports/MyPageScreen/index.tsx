import svgPaths from "./svg-5cjwly4zvv";
import { useUser } from "../../app/UserContext";

function Svg() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_1025)" id="SVG">
          <path d={svgPaths.p3d030800} fill="var(--fill-0, #FFDD00)" id="Vector" />
          <path d={svgPaths.p3d030800} id="Vector_2" stroke="var(--stroke-0, black)" strokeWidth="1.2" />
        </g>
        <defs>
          <clipPath id="clip0_1_1025">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[10px] text-white tracking-[0.2344px] whitespace-nowrap">
        <p className="leading-[15px]">Home</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[4px] items-center left-[32px] opacity-40 top-[calc(50%+0.5px)]" data-name="Container">
      <Svg />
      <Container1 />
    </div>
  );
}

function Img() {
  return (
    <div className="h-[20px] relative shrink-0 w-[17.5px]" data-name="Img">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 20">
        <g id="Img">
          <path d={svgPaths.p27339000} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IClassFaSolidFaChartSimpleText20PxIFontAwesomeFontawesomeCom() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="i class='fa-solid fa-chart-simple text-[20px]'></i> Font Awesome fontawesome.com">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[10px] text-white w-[25.71px]">
        <p className="leading-[15px]">Stats</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[4px] items-center left-[90.78px] opacity-40 top-[calc(50%+0.5px)]" data-name="Container">
      <Img />
      <IClassFaSolidFaChartSimpleText20PxIFontAwesomeFontawesomeCom />
    </div>
  );
}

function Img1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[21px]" data-name="Img">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 24">
        <g id="Img">
          <path d={svgPaths.p3c209b00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#cb30e0] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[64px]" data-name="Background+Border">
      <div aria-hidden className="absolute border-4 border-[#1f1633] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] left-0 rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(203,48,224,0.4),0px_4px_6px_-4px_rgba(203,48,224,0.4)] size-[64px] top-0" data-name="Overlay+Shadow" />
      <Img1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[145.91px] top-[calc(50%-23.5px)]" data-name="Container">
      <BackgroundBorder />
    </div>
  );
}

function Svg1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_2_3357)" id="SVG">
          <path d={svgPaths.p343a4df0} fill="var(--fill-0, #FFDD00)" id="Vector" />
          <path d={svgPaths.p343a4df0} id="Vector_2" stroke="var(--stroke-0, black)" strokeWidth="0.142857" />
        </g>
        <defs>
          <clipPath id="clip0_2_3357">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[10px] text-white tracking-[0.1074px] whitespace-nowrap">
        <p className="leading-[15px]">Rewards</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[4px] items-center left-[239.47px] opacity-40 top-[calc(50%+0.5px)]" data-name="Container">
      <Svg1 />
      <Container5 />
    </div>
  );
}

function User() {
  const { profileImage } = useUser();
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="User">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {profileImage ? (
          <img alt="profile" className="absolute left-0 max-w-none size-full top-0 object-cover" src={profileImage} />
        ) : (
          <div className="absolute inset-0 bg-[rgba(66,32,130,0.8)] flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" className="w-[14px] h-[14px]">
              <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" fill="rgba(255,255,255,0.5)"/>
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}

function Border() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[24px]" data-name="Border">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <User />
      </div>
      <div aria-hidden className="absolute border-2 border-[#c2ef4e] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#c2ef4e] text-[10px] tracking-[-0.1563px] whitespace-nowrap">
        <p className="leading-[15px]">Profile</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[4px] items-center left-[311.5px] top-[calc(50%+0.5px)]" data-name="Container">
      <Border />
      <Container7 />
    </div>
  );
}

function Nav() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(31,22,51,0.85)] bottom-0 h-[96px] left-0 right-0 z-[3]" data-name="Nav">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <Container />
      <Container2 />
      <Container3 />
      <Container4 />
      <Container6 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[20px] text-white tracking-[0.2344px] whitespace-nowrap">
        <p className="leading-[30px]">마이페이지</p>
      </div>
    </div>
  );
}

function Svg2() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_2_3353)" id="SVG">
          <path d={svgPaths.p1a991500} fill="var(--fill-0, #FFDD00)" id="Vector" />
          <path d={svgPaths.p1a991500} id="Vector_2" stroke="var(--stroke-0, black)" strokeWidth="2.25" />
        </g>
        <defs>
          <clipPath id="clip0_2_3353">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function OverlayBorder() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Overlay+Border">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Svg2 />
    </div>
  );
}

function Header() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(31,22,51,0.85)] relative shrink-0 w-full z-[2]" data-name="Header">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[24px] pt-[48px] px-[24px] relative size-full">
          <Heading />
          <OverlayBorder />
        </div>
      </div>
    </div>
  );
}

function Profile() {
  const { profileImage } = useUser();
  return (
    <div className="pointer-events-none relative rounded-[9999px] shrink-0 size-[80px]" data-name="Profile">
      <div className="absolute inset-0 overflow-hidden rounded-[9999px]">
        {profileImage ? (
          <img alt="profile" className="absolute left-0 max-w-none size-full top-0 object-cover" src={profileImage} />
        ) : (
          <div className="absolute inset-0 bg-[rgba(66,32,130,0.8)] rounded-[9999px] flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" className="w-[40px] h-[40px]">
              <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" fill="rgba(255,255,255,0.4)"/>
            </svg>
          </div>
        )}
      </div>
      <div aria-hidden className="absolute border-4 border-[rgba(203,48,224,0.3)] border-solid inset-0 rounded-[9999px]" />
    </div>
  );
}

function Img2() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Img">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Img">
          <path d={svgPaths.p26be3500} fill="var(--fill-0, #1F1633)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="absolute bg-[#c2ef4e] bottom-[-4px] content-stretch flex items-center justify-center right-[-4px] rounded-[9999px] size-[28px]" data-name="Background+Border">
      <div aria-hidden className="absolute border-2 border-[#1f1633] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Img2 />
    </div>
  );
}

function Container8() {
  const { setProfileImage } = useUser();

  const handleUpload = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        const result = ev.target?.result as string;
        setProfileImage(result);
      };
      reader.readAsDataURL(file);
    };
    input.click();
  };

  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 cursor-pointer"
      data-name="Container"
      onClick={handleUpload}
      title="프로필 사진 등록"
    >
      <Profile />
      <BackgroundBorder1 />
    </div>
  );
}

function Heading1() {
  const { user } = useUser();
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-white tracking-[0.1289px] whitespace-nowrap">
        <p className="leading-[33px]">{user?.name ?? "게스트"}</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#c2ef4e] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#1f1633] text-[10px] tracking-[0.1074px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">Gold</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Background />
    </div>
  );
}

function Container11() {
  const { user } = useUser();
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] tracking-[0.0547px] whitespace-nowrap">
        <p className="leading-[21px]">{user ? `${user.id}` : ""}</p>
      </div>
    </div>
  );
}

function Svg4() {
  return (
    <div className="flex-[1_0_0] min-h-px overflow-clip relative w-[14px]" data-name="SVG">
      <div className="absolute inset-[0_3.86%_9.15%_-0.01%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.46 12.7185">
          <path d={svgPaths.p37520900} fill="var(--fill-0, #FFDD00)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[0_3.86%_9.15%_-0.01%]" data-name="Vector">
        <div className="absolute inset-[-19.35%_-19.12%_-20.14%_-22.83%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.1062 17.7411">
            <path d={svgPaths.p1235a80} id="Vector" stroke="var(--stroke-0, black)" strokeWidth="1.75" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg3() {
  return (
    <div className="content-stretch drop-shadow-[0px_0px_4px_#fd0] flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[14px]" data-name="SVG">
      <Svg4 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#fd0] text-[14px] tracking-[0.1094px] whitespace-nowrap">
        <p className="leading-[21px]">1,250</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Container">
      <Svg3 />
      <Container14 />
    </div>
  );
}

function Img3() {
  return (
    <div className="h-[14px] relative shrink-0 w-[12.25px]" data-name="Img">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.25 14.0007">
        <g id="Img">
          <path d={svgPaths.p5213a40} fill="var(--fill-0, #FFDD00)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IClassFaSolidFaFireTextFfdd00Text14PxIFontAwesomeFontawesomeCom() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="i class='fa-solid fa-fire text-[#ffdd00] text-[14px]'></i> Font Awesome fontawesome.com">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-white tracking-[0.5605px] whitespace-nowrap">
        <p className="leading-[21px]">12일</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Container">
      <Img3 />
      <IClassFaSolidFaFireTextFfdd00Text14PxIFontAwesomeFontawesomeCom />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex gap-[12px] items-center pt-[4px] relative shrink-0 w-full" data-name="Container">
      <Container13 />
      <div className="bg-[rgba(255,255,255,0.2)] h-[12px] relative shrink-0 w-px" data-name="Vertical Divider" />
      <Container15 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[162px]" data-name="Container">
      <Container10 />
      <Container11 />
      <Container12 />
    </div>
  );
}

function Svg5() {
  return (
    <div className="relative shrink-0 size-[128px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 128 128">
        <g clipPath="url(#clip0_2_2058)" id="SVG">
          <path d={svgPaths.p2fbcf300} fill="var(--fill-0, #FFDD00)" id="Vector" />
          <path d={svgPaths.p2fbcf300} id="Vector_2" stroke="var(--stroke-0, black)" strokeWidth="3.55556" />
        </g>
        <defs>
          <clipPath id="clip0_2_2058">
            <rect fill="white" height="128" width="128" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex flex-col items-start opacity-10 right-[-23px] top-[-23px]" data-name="Container">
      <Svg5 />
    </div>
  );
}

function Section() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full" style={{ backgroundImage: "linear-gradient(135.176deg, rgb(66, 32, 130) 0%, rgb(31, 22, 51) 100%)" }} data-name="Section">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[20px] items-center p-[24px] relative size-full">
          <Container8 />
          <Container9 />
          <Container16 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[rgba(203,48,224,0.2)] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_KR:DemiLight',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.5)] w-full">
        <p className="leading-[18px]">학습 완료</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[20px] text-white tracking-[0.3125px] whitespace-nowrap">
        <p className="leading-[30px]">482건</p>
      </div>
    </div>
  );
}

function Svg6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_2_3344)" id="SVG">
          <path d={svgPaths.p18c91600} fill="var(--fill-0, #FFDD00)" id="Vector" />
          <path d={svgPaths.p18c91600} id="Vector_2" stroke="var(--stroke-0, black)" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_2_3344">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container20 />
      <Svg6 />
    </div>
  );
}

function OverlayBorder1() {
  return (
    <div className="bg-[rgba(66,32,130,0.4)] col-0 justify-self-stretch relative rounded-[16px] row-0 self-start shrink-0" data-name="Overlay+Border">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[16px] relative size-full">
        <Container18 />
        <Container19 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_KR:DemiLight',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.5)] w-full">
        <p className="leading-[18px]">나의 랭킹</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[20px] text-white tracking-[0.0977px] whitespace-nowrap">
        <p className="leading-[30px]">상위 5%</p>
      </div>
    </div>
  );
}

function Svg7() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_2_3340)" id="SVG">
          <path d={svgPaths.p372c1900} fill="var(--fill-0, #FFDD00)" id="Vector" />
          <path d={svgPaths.p372c1900} id="Vector_2" stroke="var(--stroke-0, black)" strokeWidth="0.666667" />
        </g>
        <defs>
          <clipPath id="clip0_2_3340">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container23 />
      <Svg7 />
    </div>
  );
}

function OverlayBorder2() {
  return (
    <div className="bg-[rgba(66,32,130,0.4)] col-0 justify-self-stretch relative rounded-[16px] row-0 self-start shrink-0" data-name="Overlay+Border">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[16px] relative size-full">
        <Container21 />
        <Container22 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(2,minmax(0,1fr))] h-[86px] relative shrink-0 w-full" data-name="Container">
      <OverlayBorder1 />
      <OverlayBorder2 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="content-stretch flex flex-col items-start px-[4px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.4)] tracking-[1.4px] uppercase w-full">
          <p className="leading-[21px]">{`Account & Security`}</p>
        </div>
      </div>
    </div>
  );
}

function Img4() {
  return (
    <div className="h-[16px] relative shrink-0 w-[14px]" data-name="Img">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 16">
        <g id="Img">
          <path d={svgPaths.p2def7700} fill="var(--fill-0, white)" fillOpacity="0.7" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[40px]" data-name="Overlay">
      <Img4 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-white tracking-[-0.0469px] whitespace-nowrap">
        <p className="leading-[24px]">프로필 수정</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <Overlay />
      <Container25 />
    </div>
  );
}

function Img5() {
  return (
    <div className="h-[14px] relative shrink-0 w-[8.75px]" data-name="Img">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.75 14">
        <g id="Img">
          <path d={svgPaths.p167dbc00} fill="var(--fill-0, white)" fillOpacity="0.2" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.05)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between p-[20px] relative size-full">
          <Container24 />
          <Img5 />
        </div>
      </div>
    </div>
  );
}

function Img6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Img">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Img">
          <path d={svgPaths.p228c4ef0} fill="var(--fill-0, white)" fillOpacity="0.7" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[40px]" data-name="Overlay">
      <Img6 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-white tracking-[-0.125px] whitespace-nowrap">
        <p className="leading-[24px]">보안 설정</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <Overlay1 />
      <Container27 />
    </div>
  );
}

function Img7() {
  return (
    <div className="h-[14px] relative shrink-0 w-[8.75px]" data-name="Img">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.75 14">
        <g id="Img">
          <path d={svgPaths.p167dbc00} fill="var(--fill-0, white)" fillOpacity="0.2" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.05)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between p-[20px] relative size-full">
          <Container26 />
          <Img7 />
        </div>
      </div>
    </div>
  );
}

function Img8() {
  return (
    <div className="h-[16px] relative shrink-0 w-[14px]" data-name="Img">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.0008 16">
        <g id="Img">
          <path d={svgPaths.p1868abf0} fill="var(--fill-0, white)" fillOpacity="0.7" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Overlay2() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[40px]" data-name="Overlay">
      <Img8 />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-white tracking-[-0.125px] whitespace-nowrap">
        <p className="leading-[24px]">알림 관리</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <Overlay2 />
      <Container30 />
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#cb30e0] content-stretch flex flex-col h-[24px] items-end pl-[28px] pr-[4px] py-[4px] relative rounded-[9999px] shrink-0 w-[48px]" data-name="Background">
      <div className="absolute bg-white right-[4px] rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] size-[16px] top-[4px]" data-name="Background+Shadow" />
    </div>
  );
}

function Container28() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between p-[20px] relative size-full">
          <Container29 />
          <Background1 />
        </div>
      </div>
    </div>
  );
}

function OverlayBorder3() {
  return (
    <div className="bg-[rgba(66,32,130,0.2)] relative rounded-[24px] shrink-0 w-full" data-name="Overlay+Border">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <HorizontalBorder />
        <HorizontalBorder1 />
        <Container28 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Section1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Section">
      <Heading2 />
      <OverlayBorder3 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="content-stretch flex flex-col items-start px-[4px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.4)] tracking-[1.4px] uppercase w-full">
          <p className="leading-[21px]">Preferences</p>
        </div>
      </div>
    </div>
  );
}

function Svg8() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2_3327)" id="SVG">
          <path d={svgPaths.p2288e40} fill="var(--fill-0, #FFDD00)" id="Vector" />
          <path d={svgPaths.p2288e40} id="Vector_2" stroke="var(--stroke-0, black)" strokeWidth="0.952381" />
        </g>
        <defs>
          <clipPath id="clip0_2_3327">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Overlay3() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[40px]" data-name="Overlay">
      <Svg8 />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-white tracking-[-0.125px] whitespace-nowrap">
        <p className="leading-[24px]">다크 모드</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <Overlay3 />
      <Container32 />
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[19.13px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] left-0 text-[#c2ef4e] text-[13px] top-[9px] tracking-[0.876px] whitespace-nowrap">
        <p className="leading-[19.5px]">On</p>
      </div>
    </div>
  );
}

function HorizontalBorder2() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.05)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[20px] pr-[19.99px] py-[20px] relative size-full">
          <Container31 />
          <Container33 />
        </div>
      </div>
    </div>
  );
}

function Img9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Img">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Img">
          <path d={svgPaths.p33d8d640} fill="var(--fill-0, white)" fillOpacity="0.7" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Overlay4() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[40px]" data-name="Overlay">
      <Img9 />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-white tracking-[-0.125px] whitespace-nowrap">
        <p className="leading-[24px]">언어 설정</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <Overlay4 />
      <Container35 />
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[35.89px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Noto_Sans_KR:DemiLight',sans-serif] font-[350] justify-center leading-[0] left-0 text-[13px] text-[rgba(255,255,255,0.4)] top-[9px] tracking-[0.5586px] whitespace-nowrap">
        <p className="leading-[19.5px]">한국어</p>
      </div>
    </div>
  );
}

function HorizontalBorder3() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.05)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between p-[20px] relative size-full">
          <Container34 />
          <Container36 />
        </div>
      </div>
    </div>
  );
}

function Img10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Img">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Img">
          <path d={svgPaths.p735f700} fill="var(--fill-0, white)" fillOpacity="0.7" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Overlay5() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[40px]" data-name="Overlay">
      <Img10 />
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-white tracking-[-0.125px] whitespace-nowrap">
        <p className="leading-[24px]">고객 센터</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <Overlay5 />
      <Container39 />
    </div>
  );
}

function Img11() {
  return (
    <div className="h-[14px] relative shrink-0 w-[8.75px]" data-name="Img">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.75 14">
        <g id="Img">
          <path d={svgPaths.p167dbc00} fill="var(--fill-0, white)" fillOpacity="0.2" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container37() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between p-[20px] relative size-full">
          <Container38 />
          <Img11 />
        </div>
      </div>
    </div>
  );
}

function OverlayBorder4() {
  return (
    <div className="bg-[rgba(66,32,130,0.2)] relative rounded-[24px] shrink-0 w-full" data-name="Overlay+Border">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <HorizontalBorder2 />
        <HorizontalBorder3 />
        <Container37 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Section2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Section">
      <Heading3 />
      <OverlayBorder4 />
    </div>
  );
}

function Img12() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Img">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Img">
          <path d={svgPaths.p3fd2c700} fill="var(--fill-0, #F87171)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex gap-[12px] items-center justify-center py-[20px] relative rounded-[24px] shrink-0 w-full" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Img12 />
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#f87171] text-[16px] text-center tracking-[0.375px] whitespace-nowrap">
        <p className="leading-[24px]">로그아웃</p>
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Main">
      <div className="content-stretch flex flex-col gap-[32px] items-start px-[24px] relative size-full">
        <Section />
        <Container17 />
        <Section1 />
        <Section2 />
        <Button />
      </div>
    </div>
  );
}

export default function MyPageScreen() {
  return (
    <div className="bg-[#1f1633] content-stretch flex flex-col isolate items-start pb-[96px] relative size-full" data-name="My Page Screen">

      <Header />
      <Main />
    </div>
  );
}