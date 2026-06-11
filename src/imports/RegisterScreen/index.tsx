import { useState, FormEvent } from "react";

interface RegisterScreenProps {
  onRegisterSuccess?: () => void;
  onBack?: () => void;
}

const starPath =
  "M14.1411 7.2465L22.8799 4.64337L17.2919 11.7254L22.391 18.9719L13.8386 16.1021L8.25055 23.184L8.5531 14.3285L-0.000413997 11.459L8.73949 8.85554L9.04202 -4.73117e-05L14.1411 7.2465Z";

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

export default function RegisterScreen({ onRegisterSuccess, onBack }: RegisterScreenProps) {
  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!name.trim()) { setError("이름을 입력하세요."); return; }
    if (!userId.trim()) { setError("아이디를 입력하세요."); return; }
    if (userId.length < 4) { setError("아이디는 4자 이상이어야 합니다."); return; }
    if (!password.trim()) { setError("비밀번호를 입력하세요."); return; }
    if (password.length < 6) { setError("비밀번호는 6자 이상이어야 합니다."); return; }
    if (password !== confirmPw) { setError("비밀번호가 일치하지 않습니다."); return; }

    // 기존 사용자 목록 불러오기
    const usersRaw = localStorage.getItem("dayling_users");
    const users: Array<{ id: string; password: string; name: string }> = usersRaw
      ? JSON.parse(usersRaw)
      : [];

    // 중복 아이디 확인
    if (users.find((u) => u.id === userId)) {
      setError("이미 사용 중인 아이디입니다.");
      alert("❌ 회원가입 실패\n이미 사용 중인 아이디입니다.");
      return;
    }

    // 저장
    users.push({ id: userId, password, name });
    localStorage.setItem("dayling_users", JSON.stringify(users));

    alert(
      `✅ 회원가입 완료!\n\n이름: ${name}\n아이디: ${userId}\n비밀번호: ${"*".repeat(password.length)}\n\n로그인 화면으로 이동합니다.`
    );

    onRegisterSuccess?.();
  };

  return (
    <div
      style={{
        minHeight: "100%",
        width: "100%",
        background: "#1f1633",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "48px",
        paddingBottom: "40px",
        boxSizing: "border-box",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          paddingBottom: "36px",
        }}
      >
        {/* Logo */}
        <div
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 800,
            fontStyle: "italic",
            fontSize: "52px",
            color: "#cb30e0",
            letterSpacing: "-2.6px",
            textShadow: "0px 0px 20px rgba(203,48,224,0.4)",
            lineHeight: 1,
            position: "relative",
          }}
        >
          DAYLING
          {/* Small star decoration */}
          <svg
            style={{ position: "absolute", top: -8, right: -20, width: 18, height: 18, opacity: 0.9 }}
            viewBox="0 0 24 24"
            fill="#FFDD00"
          >
            <path d={starPath} />
          </svg>
        </div>
        <p
          style={{
            fontFamily: "'Noto Sans KR', sans-serif",
            fontWeight: 500,
            fontSize: "13px",
            color: "rgba(255,255,255,0.7)",
            marginTop: "8px",
            textAlign: "center",
          }}
        >
          나만의 다이어리 시작하기
        </p>
      </div>

      {/* Card */}
      <div style={{ width: "100%", maxWidth: "400px", padding: "0 24px", boxSizing: "border-box" }}>
        <div
          style={{
            background: "#422082",
            borderRadius: "32px",
            boxShadow: "0px 20px 20px rgba(0,0,0,0.4)",
            border: "1px solid rgba(106,95,193,0.3)",
            position: "relative",
          }}
        >
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              padding: "32px",
            }}
          >
            {/* Title row */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  fontFamily: "'Noto Sans KR', sans-serif",
                  fontWeight: 700,
                  fontSize: "28px",
                  color: "white",
                  letterSpacing: "-0.7px",
                  lineHeight: "42px",
                }}
              >
                회원가입
              </div>
              {/* Star decoration */}
              <svg width="28" height="32" viewBox="0 0 28 32" fill="none" style={{ opacity: 0.4 }}>
                <path
                  d="M17.0368 10.1963L27.4284 7.10076L21.0741 16.4978L27.6076 26.694L17.1478 22.3057L10.7935 31.7027L10.6825 19.5932L0.221856 15.2051L10.6143 12.1094L10.5034 -4.35633e-05L17.0368 10.1963Z"
                  fill="#FFDD00"
                  stroke="black"
                  strokeWidth="0.888889"
                />
              </svg>
            </div>

            {/* 이름 */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <label
                htmlFor="reg-name"
                style={{
                  fontFamily: "'Noto Sans KR', sans-serif",
                  fontWeight: 700,
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.6)",
                  letterSpacing: "0.17px",
                }}
              >
                이름
              </label>
              <input
                id="reg-name"
                type="text"
                placeholder="이름을 입력하세요"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={inputStyle}
                onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(194,239,78,0.6)")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
              />
            </div>

            {/* 아이디 */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <label
                htmlFor="reg-id"
                style={{
                  fontFamily: "'Noto Sans KR', sans-serif",
                  fontWeight: 700,
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.6)",
                  letterSpacing: "0.17px",
                }}
              >
                아이디 <span style={{ fontSize: "12px", fontWeight: 400, color: "rgba(255,255,255,0.35)" }}>(4자 이상)</span>
              </label>
              <input
                id="reg-id"
                type="text"
                placeholder="아이디를 입력하세요"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                style={inputStyle}
                onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(194,239,78,0.6)")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
              />
            </div>

            {/* 비밀번호 */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <label
                htmlFor="reg-pw"
                style={{
                  fontFamily: "'Noto Sans KR', sans-serif",
                  fontWeight: 700,
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.6)",
                  letterSpacing: "0.15px",
                }}
              >
                비밀번호 <span style={{ fontSize: "12px", fontWeight: 400, color: "rgba(255,255,255,0.35)" }}>(6자 이상)</span>
              </label>
              <input
                id="reg-pw"
                type="password"
                placeholder="비밀번호를 입력하세요"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={inputStyle}
                onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(194,239,78,0.6)")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
              />
            </div>

            {/* 비밀번호 확인 */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <label
                htmlFor="reg-confirm"
                style={{
                  fontFamily: "'Noto Sans KR', sans-serif",
                  fontWeight: 700,
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.6)",
                  letterSpacing: "0.15px",
                }}
              >
                비밀번호 확인
              </label>
              <input
                id="reg-confirm"
                type="password"
                placeholder="비밀번호를 다시 입력하세요"
                value={confirmPw}
                onChange={(e) => setConfirmPw(e.target.value)}
                style={{
                  ...inputStyle,
                  borderColor:
                    confirmPw && password !== confirmPw
                      ? "rgba(255,100,100,0.6)"
                      : confirmPw && password === confirmPw
                      ? "rgba(194,239,78,0.6)"
                      : "rgba(255,255,255,0.1)",
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(194,239,78,0.6)")}
                onBlur={(e) => {
                  if (confirmPw && password !== confirmPw) {
                    e.currentTarget.style.borderColor = "rgba(255,100,100,0.6)";
                  } else if (confirmPw && password === confirmPw) {
                    e.currentTarget.style.borderColor = "rgba(194,239,78,0.6)";
                  } else {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                  }
                }}
              />
              {confirmPw && password !== confirmPw && (
                <span style={{ color: "#ff6b6b", fontSize: "12px", fontFamily: "'Noto Sans KR', sans-serif" }}>
                  비밀번호가 일치하지 않습니다.
                </span>
              )}
              {confirmPw && password === confirmPw && (
                <span style={{ color: "#c2ef4e", fontSize: "12px", fontFamily: "'Noto Sans KR', sans-serif" }}>
                  ✓ 비밀번호가 일치합니다.
                </span>
              )}
            </div>

            {/* 에러 메시지 */}
            {error && (
              <p
                style={{
                  color: "#ff6b6b",
                  fontSize: "13px",
                  fontFamily: "'Noto Sans KR', sans-serif",
                  margin: "-8px 0",
                }}
              >
                {error}
              </p>
            )}

            {/* 가입하기 버튼 */}
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
              가입하기
            </button>

            {/* 로그인으로 돌아가기 */}
            <div style={{ textAlign: "center" }}>
              <button
                type="button"
                onClick={onBack}
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
                ← 이미 계정이 있으신가요? <span style={{ color: "#c2ef4e" }}>로그인</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* BG decorations */}
      <svg
        style={{
          position: "absolute",
          top: "180px",
          left: "-16px",
          width: "120px",
          height: "140px",
          opacity: 0.04,
          pointerEvents: "none",
        }}
        viewBox="0 0 120 140"
        fill="none"
      >
        <path
          d="M73.2248 44.7257L118.479 31.2453L90.8067 72.1677L119.259 116.571L73.7083 97.4603L46.0363 138.383L45.5528 85.648L-0.00159447 66.5382L45.2559 53.0572L44.7728 0.322394L73.2248 44.7257Z"
          fill="#FFDD00"
          stroke="black"
          strokeWidth="3.87097"
        />
      </svg>
      <svg
        style={{
          position: "absolute",
          bottom: "180px",
          right: "-24px",
          width: "80px",
          height: "80px",
          opacity: 0.04,
          pointerEvents: "none",
        }}
        viewBox="0 0 80 80"
        fill="none"
      >
        <path
          d="M47.1368 24.155L76.2663 15.4779L57.6396 39.0846L74.6366 63.2396L46.1284 53.6735L27.5016 77.28L28.5101 47.7615L-0.00157725 38.1966L29.1314 29.5184L30.1399 -0.000180354L47.1368 24.155Z"
          fill="#FFDD00"
          stroke="black"
          strokeWidth="3.80952"
        />
      </svg>
    </div>
  );
}
