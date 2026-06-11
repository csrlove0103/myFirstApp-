import svgPaths from "./svg-fh9h96quq2";

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:ExtraBold_Italic',sans-serif] font-extrabold italic justify-center leading-[0] relative shrink-0 text-[#cb30e0] text-[72px] text-center text-shadow-[0px_0px_20px_rgba(203,48,224,0.4)] tracking-[-3.6px] whitespace-nowrap">
        <p className="leading-[72px]">DAYLING</p>
      </div>
    </div>
  );
}

function Heading1Margin() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-1.185px] pb-[16px] relative shrink-0" data-name="Heading 1:margin">
      <Heading />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[17px] text-center text-white tracking-[-0.166px] whitespace-nowrap">
        <p className="leading-[27.63px] mb-0 tracking-[-0.1563px]">매일의 나를 외국어로 기록하고</p>
        <p className="tracking-[-0.1563px]">
          <span className="leading-[27.63px] text-[#c2ef4e]">AI와 함께 성장하는</span>
          <span className="leading-[27.63px]">{` 나만의 다이어리`}</span>
        </p>
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_1_1075)" id="SVG" opacity="0.8">
          <path d={svgPaths.p2d88f500} fill="var(--fill-0, #FFDD00)" id="Vector" />
          <path d={svgPaths.p2d88f500} id="Vector_2" stroke="var(--stroke-0, black)" strokeWidth="1.52381" />
        </g>
        <defs>
          <clipPath id="clip0_1_1075">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start right-[40px] top-[40px]" data-name="Container">
      <Svg />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 pb-[48px] pt-[64px] px-[32px] right-0 top-0" data-name="Header">
      <Heading1Margin />
      <Container />
      <Container1 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#fa7faa] text-[22px] w-full">
        <p className="leading-[33px] mb-0">AI가 튜터이자 친</p>
        <p className="leading-[33px]">구!</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_KR:DemiLight',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-[15px] text-[rgba(255,255,255,0.8)] w-full">
        <p className="leading-[24.38px] mb-0">문법, 표현을 자연스럽게</p>
        <p className="leading-[24.38px] mb-0">교정해주고 따뜻한 공감으</p>
        <p className="leading-[24.38px]">로 하루를 위로해줘요.</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10.875px] items-start min-w-px relative" data-name="Container">
      <Heading1 />
      <Container3 />
    </div>
  );
}

function Svg1() {
  return (
    <div className="h-[38px] relative shrink-0 w-[34px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 38">
        <g clipPath="url(#clip0_1_1083)" id="SVG">
          <path d={svgPaths.p2478c5b0} fill="var(--fill-0, #FFDD00)" id="Vector" />
          <path d={svgPaths.p2478c5b0} id="Vector_2" stroke="var(--stroke-0, black)" strokeWidth="1.05556" />
        </g>
        <defs>
          <clipPath id="clip0_1_1083">
            <rect fill="white" height="38" width="34" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg2() {
  return (
    <div className="h-[38px] relative shrink-0 w-[34px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 38">
        <g clipPath="url(#clip0_1_1037)" id="SVG" opacity="0.6">
          <path d={svgPaths.p2478c5b0} fill="var(--fill-0, #FFDD00)" id="Vector" />
          <path d={svgPaths.p2478c5b0} id="Vector_2" stroke="var(--stroke-0, black)" strokeWidth="1.05556" />
        </g>
        <defs>
          <clipPath id="clip0_1_1037">
            <rect fill="white" height="38" width="34" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SvgAlignFlexEnd() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="SVG:align-flex-end">
      <Svg2 />
    </div>
  );
}

function Svg3() {
  return (
    <div className="h-[18px] relative shrink-0 w-[14px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 18">
        <g clipPath="url(#clip0_1_1079)" id="SVG">
          <path d={svgPaths.p79a0000} fill="var(--fill-0, #FFDD00)" id="Vector" />
          <path d={svgPaths.p79a0000} id="Vector_2" stroke="var(--stroke-0, black)" />
        </g>
        <defs>
          <clipPath id="clip0_1_1079">
            <rect fill="white" height="18" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg4() {
  return (
    <div className="h-[18px] relative shrink-0 w-[14px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 18">
        <g clipPath="url(#clip0_1_1067)" id="SVG" opacity="0.4">
          <path d={svgPaths.p79a0000} fill="var(--fill-0, #FFDD00)" id="Vector" />
          <path d={svgPaths.p79a0000} id="Vector_2" stroke="var(--stroke-0, black)" />
        </g>
        <defs>
          <clipPath id="clip0_1_1067">
            <rect fill="white" height="18" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start right-[-8px] top-[40px]" data-name="Container">
      <Svg3 />
      <Svg4 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <Svg1 />
      <SvgAlignFlexEnd />
      <Container5 />
    </div>
  );
}

function Section() {
  return (
    <div className="absolute left-[4px] right-[64px] rounded-br-[32px] rounded-tr-[32px] top-[255.25px]" style={{ backgroundImage: "linear-gradient(135.127deg, rgba(106, 95, 193, 0.1) 0%, rgba(31, 22, 51, 0.5) 100%)" }} data-name="Section">
      <div className="content-stretch flex items-start justify-between overflow-clip p-[32px] relative rounded-[inherit] size-full">
        <Container2 />
        <Container4 />
      </div>
      <div aria-hidden className="absolute border-[rgba(203,48,224,0.4)] border-b border-r border-solid border-t inset-0 pointer-events-none rounded-br-[32px] rounded-tr-[32px] shadow-[0px_0px_8px_6px_#150f23]" />
    </div>
  );
}

function Svg5() {
  return (
    <div className="absolute h-[32px] left-0 top-[8px] w-[28px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 32">
        <g clipPath="url(#clip0_1_1071)" id="SVG">
          <path d={svgPaths.p2c7b6a00} fill="var(--fill-0, #FFDD00)" id="Vector" />
          <path d={svgPaths.p2c7b6a00} id="Vector_2" stroke="var(--stroke-0, black)" strokeWidth="0.888889" />
        </g>
        <defs>
          <clipPath id="clip0_1_1071">
            <rect fill="white" height="32" width="28" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg6() {
  return (
    <div className="absolute h-[38px] left-[36px] top-[8px] w-[34px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 38">
        <g clipPath="url(#clip0_1_1057)" id="SVG" opacity="0.8">
          <path d={svgPaths.p2478c5b0} fill="var(--fill-0, #FFDD00)" id="Vector" />
          <path d={svgPaths.p2478c5b0} id="Vector_2" stroke="var(--stroke-0, black)" strokeWidth="1.05556" />
        </g>
        <defs>
          <clipPath id="clip0_1_1057">
            <rect fill="white" height="38" width="34" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg7() {
  return (
    <div className="absolute h-[32px] left-0 top-[54px] w-[28px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 32">
        <g clipPath="url(#clip0_1_1053)" id="SVG" opacity="0.4">
          <path d={svgPaths.p2c7b6a00} fill="var(--fill-0, #FFDD00)" id="Vector" />
          <path d={svgPaths.p2c7b6a00} id="Vector_2" stroke="var(--stroke-0, black)" strokeWidth="0.888889" />
        </g>
        <defs>
          <clipPath id="clip0_1_1053">
            <rect fill="white" height="32" width="28" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg8() {
  return (
    <div className="absolute h-[18px] left-[36px] top-[54px] w-[14px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 18">
        <g clipPath="url(#clip0_1_1041)" id="SVG">
          <path d={svgPaths.p79a0000} fill="var(--fill-0, #FFDD00)" id="Vector" />
          <path d={svgPaths.p79a0000} id="Vector_2" stroke="var(--stroke-0, black)" />
        </g>
        <defs>
          <clipPath id="clip0_1_1041">
            <rect fill="white" height="18" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg9() {
  return (
    <div className="absolute h-[18px] left-[58px] top-[54px] w-[14px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 18">
        <g clipPath="url(#clip0_1_1061)" id="SVG" opacity="0.5">
          <path d={svgPaths.p79a0000} fill="var(--fill-0, #FFDD00)" id="Vector" />
          <path d={svgPaths.p79a0000} id="Vector_2" stroke="var(--stroke-0, black)" />
        </g>
        <defs>
          <clipPath id="clip0_1_1061">
            <rect fill="white" height="18" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[86px] relative shrink-0 w-[80.66px] z-[2]" data-name="Container">
      <Svg5 />
      <Svg6 />
      <Svg7 />
      <Svg8 />
      <Svg9 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#6a5fc1] text-[22px] text-right tracking-[-0.2148px] whitespace-nowrap">
        <p className="leading-[33px] mb-0">매일 출석하며 다</p>
        <p className="leading-[33px]">꾸하기!</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_KR:DemiLight',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-[15px] text-[rgba(255,255,255,0.8)] text-right tracking-[-0.1465px] whitespace-nowrap">
        <p className="leading-[24.38px] mb-0">출석 보상으로 스티커, 배</p>
        <p className="leading-[24.38px] mb-0">경을 모아 나만의 다이어리</p>
        <p className="leading-[24.38px]">를 완성해요.</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[10.875px] items-start relative shrink-0 w-[161.33px] z-[1]" data-name="Container">
      <Heading2 />
      <Container8 />
    </div>
  );
}

function Section1() {
  return (
    <div className="absolute left-[64px] right-[4px] rounded-bl-[32px] rounded-tl-[32px] top-[504.38px]" style={{ backgroundImage: "linear-gradient(135.127deg, rgba(106, 95, 193, 0.1) 0%, rgba(31, 22, 51, 0.5) 100%)" }} data-name="Section">
      <div className="content-stretch flex isolate items-start justify-between overflow-clip p-[32px] relative rounded-[inherit] size-full">
        <Container6 />
        <Container7 />
      </div>
      <div aria-hidden className="absolute border-[rgba(106,95,193,0.6)] border-b border-l border-solid border-t inset-0 pointer-events-none rounded-bl-[32px] rounded-tl-[32px] shadow-[0px_0px_8px_6px_#150f23]" />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#c2ef4e] text-[22px] w-full">
        <p className="leading-[33px] mb-0">최소 글자수 제한</p>
        <p className="leading-[33px]">없이!</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_KR:DemiLight',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-[15px] text-[rgba(255,255,255,0.8)] w-full">
        <p className="leading-[24.38px] mb-0">최소 글자 수 제한이 없어</p>
        <p className="leading-[24.38px] mb-0">요. 외국어로 쓰는 것에 부</p>
        <p className="leading-[24.38px] mb-0">담갖지 말고 한 줄부터 시</p>
        <p className="leading-[24.38px]">작해요.</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[11.065px] items-start min-w-px relative" data-name="Container">
      <Heading3 />
      <Container10 />
    </div>
  );
}

function Svg10() {
  return (
    <div className="h-[38px] relative shrink-0 w-[34px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 38">
        <g clipPath="url(#clip0_1_1049)" id="SVG">
          <path d={svgPaths.p1268b7b0} fill="var(--fill-0, #FFDD00)" id="Vector" />
          <path d={svgPaths.p1268b7b0} id="Vector_2" stroke="var(--stroke-0, black)" strokeWidth="1.05556" />
        </g>
        <defs>
          <clipPath id="clip0_1_1049">
            <rect fill="white" height="38" width="34" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg11() {
  return (
    <div className="h-[21px] relative shrink-0 w-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 21">
        <g clipPath="url(#clip0_1_1033)" id="SVG" opacity="0.7">
          <path d={svgPaths.p130cb40} fill="var(--fill-0, #FFDD00)" id="Vector" />
          <path d={svgPaths.p130cb40} id="Vector_2" stroke="var(--stroke-0, black)" strokeWidth="1.05" />
        </g>
        <defs>
          <clipPath id="clip0_1_1033">
            <rect fill="white" height="21" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg12() {
  return (
    <div className="h-[21px] relative shrink-0 w-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 21">
        <g clipPath="url(#clip0_1_1029)" id="SVG" opacity="0.4">
          <path d={svgPaths.p130cb40} fill="var(--fill-0, #FFDD00)" id="Vector" />
          <path d={svgPaths.p130cb40} id="Vector_2" stroke="var(--stroke-0, black)" strokeWidth="1.05" />
        </g>
        <defs>
          <clipPath id="clip0_1_1029">
            <rect fill="white" height="21" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Container">
      <Svg11 />
      <Svg12 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center pr-[16px] relative shrink-0" data-name="Container">
      <Svg10 />
      <Container12 />
    </div>
  );
}

function Section2() {
  return (
    <div className="absolute left-[4px] right-[64px] rounded-br-[32px] rounded-tr-[32px] top-[753.5px]" style={{ backgroundImage: "linear-gradient(135.146deg, rgba(106, 95, 193, 0.1) 0%, rgba(31, 22, 51, 0.5) 100%)" }} data-name="Section">
      <div className="content-stretch flex items-start justify-between overflow-clip p-[32px] relative rounded-[inherit] size-full">
        <Container9 />
        <Container11 />
      </div>
      <div aria-hidden className="absolute border-[rgba(194,239,78,0.4)] border-b border-r border-solid border-t inset-0 pointer-events-none rounded-br-[32px] rounded-tr-[32px] shadow-[0px_0px_8px_6px_#150f23]" />
    </div>
  );
}

function Svg13() {
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

function Container13() {
  return (
    <div className="absolute content-stretch flex flex-col h-[24px] items-start left-[16px] opacity-20 top-[420px]" data-name="Container">
      <Svg13 />
    </div>
  );
}

function Svg14() {
  return (
    <div className="h-[50px] relative shrink-0 w-[40px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 50">
        <g clipPath="url(#clip0_1_1045)" id="SVG">
          <path d={svgPaths.p1209ab80} fill="var(--fill-0, #FFDD00)" id="Vector" />
          <path d={svgPaths.p1209ab80} id="Vector_2" stroke="var(--stroke-0, black)" strokeWidth="2.77778" />
        </g>
        <defs>
          <clipPath id="clip0_1_1045">
            <rect fill="white" height="50" width="40" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex flex-col h-[50px] items-start opacity-10 right-[32px] top-[210px]" data-name="Container">
      <Svg14 />
    </div>
  );
}

function Svg16() {
  return (
    <div className="flex-[1_0_0] min-h-px overflow-clip relative w-[180px] flex items-center justify-center drop-shadow-[0_0_15px_rgba(255,221,0,0.6)]" data-name="SVG">
      <svg className="block w-[140px] h-[140px]" fill="none" viewBox="0 0 200 200">
        <path d="M 100 10 L 126 70 L 190 75 L 140 115 L 155 180 L 100 145 L 45 180 L 60 115 L 10 75 L 74 70 Z" fill="#FFDD00" stroke="black" strokeWidth="4" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function Svg15() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[170px] items-center justify-center relative shrink-0 w-[180px]" data-name="SVG">
      <Svg16 />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[2px] relative shrink-0" data-name="Margin">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#150f23] text-[18px] tracking-[-0.45px] whitespace-nowrap">
        <p className="leading-[27px] drop-shadow-md">DAYLING</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0" data-name="Margin">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#150f23] text-[16px] tracking-[0.0469px] whitespace-nowrap">
        <p className="leading-[24px]">시작하기!!</p>
      </div>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(21,15,35,0.1)] content-stretch flex flex-col items-start opacity-80 px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Overlay">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#150f23] text-[11px] tracking-[0.0645px] whitespace-nowrap">
        <p className="leading-[16.5px]">이곳을 클릭하세요</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center justify-center pt-[8px]" data-name="Container">
      <Margin />
      <Margin1 />
      <Overlay />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Container">
      <Svg15 />
      <Container17 />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute bottom-[40px] content-stretch flex flex-col items-center right-[24px]" data-name="Container">
      <Container16 />
    </div>
  );
}

export default function OnboardingScreen() {
  return (
    <div className="bg-[#1f1633] relative w-full min-h-[1200px]" data-name="Onboarding Screen">
      <Header />
      <Section />
      <Section1 />
      <Section2 />
      <Container13 />
      <Container14 />
      <Container15 />
    </div>
  );
}