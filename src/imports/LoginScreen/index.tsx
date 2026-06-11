import svgPaths from "./svg-zwaf7ew37g";
import { useState, FormEvent } from "react";

interface LoginScreenProps {
  onLogin?: (id: string, name: string) => void;
  onRegister?: () => void;
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:ExtraBold_Italic',sans-serif] font-extrabold italic justify-center leading-[0] relative shrink-0 text-[#cb30e0] text-[64px] text-center text-shadow-[0px_0px_20px_rgba(203,48,224,0.4)] tracking-[-3.2px] whitespace-nowrap">
        <p className="leading-[64px]">DAYLING</p>
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_1925)" id="SVG" opacity="0.9">
          <path d={svgPaths.p1410ee00} fill="var(--fill-0, #FFDD00)" id="Vector" />
          <path d={svgPaths.p1410ee00} id="Vector_2" stroke="var(--stroke-0, black)" strokeWidth="1.14286" />
        </g>
        <defs>
          <clipPath id="clip0_1_1925">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start right-[-24px] top-[-8px]" data-name="Container">
      <Svg />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-0.625px] pb-[8px] relative shrink-0 z-[2]" data-name="Container">
      <Heading />
      <Container1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[240px] relative shrink-0 z-[1]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.8)] text-center tracking-[-0.1641px] whitespace-nowrap">
        <p className="leading-[22.75px] mb-0">매일의 나를 외국어로 기록하고</p>
        <p className="leading-[22.75px]">AI와 함께 성장하는 나만의 다이어리</p>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col isolate items-center px-[32px] relative size-full">
          <Container />
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function HeaderMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[48px] relative shrink-0 w-full" data-name="Header:margin">
      <Header />
    </div>
  );
}

function Svg1() {
  return (
    <div className="h-[32px] relative shrink-0 w-[28px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 32">
        <g clipPath="url(#clip0_1_1921)" id="SVG" opacity="0.4">
          <path d={svgPaths.p2c7b6a00} fill="var(--fill-0, #FFDD00)" id="Vector" />
          <path d={svgPaths.p2c7b6a00} id="Vector_2" stroke="var(--stroke-0, black)" strokeWidth="0.888889" />
        </g>
        <defs>
          <clipPath id="clip0_1_1921">
            <rect fill="white" height="32" width="28" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg2() {
  return (
    <div className="h-[34px] relative shrink-0 w-[30px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 34">
        <g clipPath="url(#clip0_1_1917)" id="SVG">
          <path d={svgPaths.p2b963600} fill="var(--fill-0, #FFDD00)" id="Vector" />
          <path d={svgPaths.p2b963600} id="Vector_2" stroke="var(--stroke-0, black)" strokeWidth="0.944444" />
        </g>
        <defs>
          <clipPath id="clip0_1_1917">
            <rect fill="white" height="34" width="30" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg6() {
  return (
    <div className="h-[140px] relative shrink-0 w-[120px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 140">
        <g clipPath="url(#clip0_1_1901)" id="SVG">
          <path d={svgPaths.p33e3bb00} fill="var(--fill-0, #FFDD00)" id="Vector" />
          <path d={svgPaths.p33e3bb00} id="Vector_2" stroke="var(--stroke-0, black)" strokeWidth="3.87097" />
        </g>
        <defs>
          <clipPath id="clip0_1_1901">
            <rect fill="white" height="140" width="120" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg7() {
  return (
    <div className="relative shrink-0 size-[80px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g clipPath="url(#clip0_1_1897)" id="SVG">
          <path d={svgPaths.p386500} fill="var(--fill-0, #FFDD00)" id="Vector" />
          <path d={svgPaths.p386500} id="Vector_2" stroke="var(--stroke-0, black)" strokeWidth="3.80952" />
        </g>
        <defs>
          <clipPath id="clip0_1_1897">
            <rect fill="white" height="80" width="80" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default function LoginScreen({ onLogin, onRegister }: LoginScreenProps) {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!userId.trim()) {
      setError("아이디를 입력하세요.");
      return;
    }
    if (!password.trim()) {
      setError("비밀번호를 입력하세요.");
      return;
    }

    // localStorage에서 가입된 사용자 조회
    const usersRaw = localStorage.getItem("dayling_users");
    const users: Array<{ id: string; password: string; name: string }> = usersRaw
      ? JSON.parse(usersRaw)
      : [];

    const matched = users.find((u) => u.id === userId && u.password === password);

    if (!matched) {
      setError("아이디 또는 비밀번호가 올바르지 않습니다.");
      alert("❌ 로그인 실패\n아이디 또는 비밀번호가 올바르지 않습니다.");
      return;
    }

    alert(`✅ 로그인 성공!\n\n아이디: ${userId}\n이름: ${matched.name}`);
    onLogin?.(matched.id, matched.name);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    height: "56px",
    background: "rgba(21,15,35,0.6)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "16px",
    padding: "0 20px",
    color: "white",
    fontSize: "15px",
    fontFamily: "'Noto Sans KR', sans-serif",
    fontWeight: 350,
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.2s",
  };

  return (
    <div
      className="bg-[#1f1633] content-stretch flex flex-col items-center pb-[40px] pt-[48px] relative size-full"
      data-name="Login Screen"
    >
      <HeaderMargin />

      {/* Main card */}
      <div className="max-w-[400px] relative shrink-0 w-full">
        <div className="content-stretch flex flex-col items-start max-w-[inherit] pb-[19.5px] px-[24px] relative size-full">
          <div
            className="bg-[#422082] drop-shadow-[0px_20px_20px_rgba(0,0,0,0.4)] relative rounded-[32px] shrink-0 w-full"
            data-name="Background+Border+Shadow"
          >
            <div
              aria-hidden
              className="absolute border border-[rgba(106,95,193,0.3)] border-solid inset-0 pointer-events-none rounded-[32px]"
            />
            <form
              onSubmit={handleSubmit}
              className="content-stretch flex flex-col gap-[32px] items-start p-[32px] relative size-full"
            >
              {/* Heading row */}
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[28px] text-white tracking-[-0.7px] whitespace-nowrap">
                  <p className="leading-[42px]">로그인</p>
                </div>
                <Svg1 />
              </div>

              {/* Input fields */}
              <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
                {/* 아이디 */}
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                  <label
                    htmlFor="login-id"
                    className="[word-break:break-word] flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] tracking-[0.1777px] whitespace-nowrap"
                  >
                    <span className="leading-[21px]">아이디</span>
                  </label>
                  <input
                    id="login-id"
                    type="text"
                    placeholder="아이디를 입력하세요"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    style={inputStyle}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(203,48,224,0.6)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
                  />
                </div>

                {/* 비밀번호 */}
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                  <label
                    htmlFor="login-pw"
                    className="[word-break:break-word] flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] tracking-[0.1504px] whitespace-nowrap"
                  >
                    <span className="leading-[21px]">비밀번호</span>
                  </label>
                  <input
                    id="login-pw"
                    type="password"
                    placeholder="비밀번호를 입력하세요"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={inputStyle}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(203,48,224,0.6)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
                  />
                </div>
              </div>

              {/* 에러 메시지 */}
              {error && (
                <p
                  style={{
                    color: "#ff6b6b",
                    fontSize: "13px",
                    fontFamily: "'Noto Sans KR', sans-serif",
                    margin: "-16px 0",
                    width: "100%",
                  }}
                >
                  {error}
                </p>
              )}

              {/* 로그인 버튼 */}
              <button
                type="submit"
                style={{
                  width: "100%",
                  height: "60px",
                  background: "#c2ef4e",
                  border: "none",
                  borderRadius: "16px",
                  cursor: "pointer",
                  boxShadow: "0px 4px 7px rgba(194,239,78,0.3)",
                  fontFamily: "'Noto Sans KR', sans-serif",
                  fontWeight: 700,
                  fontSize: "18px",
                  color: "#150f23",
                  letterSpacing: "0.2988px",
                  transition: "opacity 0.15s, transform 0.1s",
                }}
                onMouseOver={(e) => (e.currentTarget.style.opacity = "0.88")}
                onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
                onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.98)")}
                onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                로그인하기
              </button>

              {/* 회원가입 / 비밀번호 찾기 */}
              <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0 w-full">
                <button
                  type="button"
                  onClick={onRegister}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "'Noto Sans KR', sans-serif",
                    fontWeight: 500,
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.5)",
                    letterSpacing: "0.1504px",
                    padding: 0,
                    transition: "color 0.15s",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}
                  onMouseOut={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                >
                  회원가입
                </button>
                <div className="bg-[rgba(255,255,255,0.2)] h-[12px] relative shrink-0 w-px" />
                <button
                  type="button"
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "'Noto Sans KR', sans-serif",
                    fontWeight: 500,
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.5)",
                    letterSpacing: "-0.082px",
                    padding: 0,
                    transition: "color 0.15s",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}
                  onMouseOut={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                >
                  비밀번호 찾기
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer decorations */}
      <div className="opacity-40 relative shrink-0 w-full">
        <div className="flex flex-row items-end justify-center size-full">
          <div className="content-stretch flex items-end justify-between pt-[32px] px-[32px] relative size-full">
            <div className="content-stretch flex gap-[12px] items-start relative shrink-0">
              <Svg2 />
            </div>
          </div>
        </div>
      </div>

      {/* BG star decorations */}
      <div className="absolute content-stretch flex flex-col h-[140px] items-start left-[-16px] opacity-5 top-[210px]">
        <Svg6 />
      </div>
      <div className="absolute bottom-[210px] content-stretch flex flex-col h-[80px] items-start opacity-5 right-[-24px]">
        <Svg7 />
      </div>
    </div>
  );
}