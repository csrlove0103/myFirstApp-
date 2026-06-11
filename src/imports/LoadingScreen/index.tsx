import svgPaths from "./svg-5q8foefoxk";

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:ExtraBold_Italic',sans-serif] font-extrabold italic justify-center leading-[0] relative shrink-0 text-[#cb30e0] text-[18px] tracking-[-0.9px] whitespace-nowrap">
        <p className="leading-[18px]">DAYLING</p>
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="h-[9px] relative shrink-0 w-[10px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 9">
        <g clipPath="url(#clip0_2_2017)" id="SVG">
          <path d={svgPaths.p13ebe5c0} fill="var(--fill-0, #FFDD00)" id="Vector" />
          <path d={svgPaths.p13ebe5c0} id="Vector_2" stroke="var(--stroke-0, black)" strokeWidth="1.125" />
        </g>
        <defs>
          <clipPath id="clip0_2_2017">
            <rect fill="white" height="9" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[141.83px] opacity-40 top-[48px]" data-name="Container">
      <Heading />
      <Svg />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch drop-shadow-[0px_0px_10px_rgba(203,48,224,0.4)] flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-center text-white tracking-[-0.55px] whitespace-nowrap">
        <p className="leading-[33px]">AI가 일기를 분석 중이에요...</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[280px] pb-[0.565px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[15px] text-[rgba(255,255,255,0.6)] text-center tracking-[-0.0586px] whitespace-nowrap">
        <p className="leading-[24.38px] mb-0">오늘의 감정과 핵심 키워드를</p>
        <p className="leading-[24.38px]">조심스럽게 살펴보고 있어요.</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[15.185px] items-start relative shrink-0 w-[251px]" data-name="Container">
      <Heading1 />
      <Container3 />
    </div>
  );
}

function Margin() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[2.5px] pt-[48px] top-[192px]" data-name="Margin">
      <Container2 />
    </div>
  );
}

function Svg2() {
  return (
    <div className="flex-[1_0_0] min-h-px overflow-clip relative w-[24px]" data-name="SVG">
      <div className="absolute inset-[0.23%_0.62%_1.16%_0]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.8521 27.612">
          <path d={svgPaths.p151eb500} fill="var(--fill-0, #FFDD00)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[0.23%_0.62%_1.16%_0]" data-name="Vector">
        <div className="absolute inset-[-4.86%_-4.18%_-4.51%_-4.81%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.997 30.1995">
            <path d={svgPaths.p30ae7e80} id="Vector" stroke="var(--stroke-0, black)" strokeWidth="0.774194" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg1() {
  return (
    <div className="blur-[0.5px] content-stretch flex flex-col h-[28px] items-start opacity-40 overflow-clip relative shrink-0 w-[24px]" data-name="SVG">
      <Svg2 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start right-[40px] top-0" data-name="Container">
      <Svg1 />
    </div>
  );
}

function Svg4() {
  return (
    <div className="flex-[1_0_0] min-h-px overflow-clip relative w-[80px]" data-name="SVG">
      <div className="absolute inset-[0_4.67%_3.4%_0]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 76.2679 77.2802">
          <path d={svgPaths.p31a7de80} fill="var(--fill-0, #FFDD00)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[0_4.67%_3.4%_0]" data-name="Vector">
        <div className="absolute inset-[-7.43%_-6.85%_-7.43%_-8.27%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 87.7999 88.7588">
            <path d={svgPaths.p93bc000} id="Vector" stroke="var(--stroke-0, black)" strokeWidth="3.80952" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg3() {
  return (
    <div className="content-stretch drop-shadow-[0px_0px_7.5px_rgba(194,239,78,0.6)] flex flex-col items-start overflow-clip relative shrink-0 size-[80px]" data-name="SVG">
      <Svg4 />
    </div>
  );
}

function Svg5() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g clipPath="url(#clip0_2_2011)" id="SVG" opacity="0.8">
          <path d={svgPaths.pef87480} fill="var(--fill-0, #FFDD00)" id="Vector" />
          <path d={svgPaths.pef87480} id="Vector_2" stroke="var(--stroke-0, black)" strokeWidth="0.238095" />
        </g>
        <defs>
          <clipPath id="clip0_2_2011">
            <rect fill="white" height="40" width="40" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col items-start right-[-16px] top-[-16px]" data-name="Container">
      <Svg5 />
    </div>
  );
}

function Svg6() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_2_2005)" id="SVG" opacity="0.6">
          <path d={svgPaths.p1d110700} fill="var(--fill-0, #FFDD00)" id="Vector" />
          <path d={svgPaths.p1d110700} id="Vector_2" stroke="var(--stroke-0, black)" strokeWidth="1.6" />
        </g>
        <defs>
          <clipPath id="clip0_2_2005">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute bottom-[-8px] content-stretch flex flex-col items-start left-[-24px]" data-name="Container">
      <Svg6 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg3 />
      <Container7 />
      <Container8 />
    </div>
  );
}

function Container4() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-center justify-center left-1/2 size-[192px] top-0" data-name="Container">
      <div className="absolute inset-0 rounded-[9999px]" data-name="Border">
        <div aria-hidden className="absolute border-2 border-[rgba(203,48,224,0.2)] border-dashed inset-0 pointer-events-none rounded-[9999px]" />
      </div>
      <div className="absolute inset-[16px] rounded-[9999px]" data-name="Border">
        <div aria-hidden className="absolute border border-[rgba(194,239,78,0.2)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      </div>
      <Container5 />
      <Container6 />
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] h-[6px] overflow-clip relative rounded-[9999px] shrink-0 w-[256px]" data-name="Overlay">
      <div className="absolute bg-[#cb30e0] inset-[0_33.34%_0_0] rounded-[9999px] shadow-[0px_0px_10px_0px_#cb30e0]" data-name="Background+Shadow" />
      <div className="absolute bg-gradient-to-r from-[rgba(255,255,255,0)] inset-0 to-[rgba(255,255,255,0)] via-1/2 via-[rgba(255,255,255,0.4)]" data-name="Gradient" />
    </div>
  );
}

function Margin1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[46px] items-start left-0 pt-[40px] top-[337.75px] w-[256px]" data-name="Margin">
      <Overlay />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[383.75px] relative shrink-0 w-[256px]" data-name="Container">
      <Margin />
      <Container4 />
      <Margin1 />
    </div>
  );
}

function Svg8() {
  return (
    <div className="flex-[1_0_0] min-h-px overflow-clip relative w-[20px]" data-name="SVG">
      <div className="absolute inset-[1.61%_0.62%_2.51%_0]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.8768 23.01">
          <path d={svgPaths.p38b35400} fill="var(--fill-0, #FFDD00)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[1.61%_0.62%_2.51%_0]" data-name="Vector">
        <div className="absolute inset-[-4.86%_-4.18%_-4.51%_-4.81%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.6642 25.1662">
            <path d={svgPaths.p32b52400} id="Vector" stroke="var(--stroke-0, black)" strokeWidth="0.645161" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg7() {
  return (
    <div className="content-stretch drop-shadow-[0px_0px_7.5px_rgba(250,127,170,0.5)] flex flex-col h-[24px] items-center justify-center overflow-clip relative shrink-0 w-[20px]" data-name="SVG">
      <Svg8 />
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(250,127,170,0.2)] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[40px]" data-name="Overlay">
      <Svg7 />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[-1px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#fa7faa] text-[13px] tracking-[0.0508px] whitespace-nowrap">
        <p className="leading-[19.5px]">오늘의 팁</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[23.5px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_KR:DemiLight',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-[13px] text-[rgba(255,255,255,0.7)] tracking-[-0.1016px] whitespace-nowrap">
        <p className="leading-[16.25px] mb-0">꾸준히 기록하면 당신만의 감정 패턴을</p>
        <p className="leading-[16.25px]">더 정확하게 발견할 수 있어요!</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[56px] relative shrink-0 w-[205px]" data-name="Container">
      <Container10 />
      <Container11 />
    </div>
  );
}

function OverlayBorderOverlayBlur() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.05)] content-stretch flex gap-[16px] items-start max-w-[320px] px-[24px] py-[20px] relative rounded-[24px] shrink-0" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Overlay1 />
      <Container9 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[320px] pt-[80px] relative shrink-0" data-name="Margin">
      <OverlayBorderOverlayBlur />
    </div>
  );
}

function Svg9() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_2_1995)" id="SVG">
          <path d={svgPaths.p3ac99180} fill="var(--fill-0, #FFDD00)" id="Vector" />
          <path d={svgPaths.p3ac99180} id="Vector_2" stroke="var(--stroke-0, black)" strokeWidth="1.77778" />
        </g>
        <defs>
          <clipPath id="clip0_2_1995">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute bottom-[48px] content-stretch flex flex-col items-center left-[171.5px] opacity-30" data-name="Container">
      <Svg9 />
    </div>
  );
}

export default function LoadingScreen() {
  return (
    <div className="bg-[#1f1633] content-stretch flex flex-col items-center justify-center pb-[139.12px] pt-[139.13px] px-[32px] relative size-full" data-name="Loading Screen">
      <div className="absolute bg-[rgba(203,48,224,0.1)] blur-[40px] left-[-50px] rounded-[9999px] size-[256px] top-[-100px]" data-name="Overlay+Blur" />
      <div className="absolute bg-[rgba(194,239,78,0.1)] blur-[40px] bottom-[-97px] right-0 rounded-[9999px] size-[256px]" data-name="Overlay+Blur" />
      <Container />
      <Container1 />
      <Margin2 />
      <Container12 />
    </div>
  );
}