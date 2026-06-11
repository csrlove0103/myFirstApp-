const expressions = [
  { phrase: "Seize the day", meaning: "오늘을 잡아라 (Carpe Diem)", category: "라틴어 명언", color: "#c2ef4e" },
  { phrase: "Break a leg", meaning: "행운을 빌어요", category: "영어 관용구", color: "#cb30e0" },
  { phrase: "It's raining cats and dogs", meaning: "비가 억수같이 내린다", category: "영어 관용구", color: "#fa7faa" },
  { phrase: "Under the weather", meaning: "몸이 좋지 않다", category: "영어 관용구", color: "#6a5fc1" },
  { phrase: "Bite the bullet", meaning: "고통을 참고 견디다", category: "영어 관용구", color: "#c2ef4e" },
  { phrase: "Hit the nail on the head", meaning: "정확히 맞히다", category: "영어 관용구", color: "#cb30e0" },
  { phrase: "Cost an arm and a leg", meaning: "엄청나게 비싸다", category: "영어 관용구", color: "#fa7faa" },
  { phrase: "Every cloud has a silver lining", meaning: "고난 뒤에는 좋은 일이 온다", category: "영어 속담", color: "#6a5fc1" },
];

export function ExpressionsScreen() {
  return (
    <div
      style={{
        backgroundColor: '#1f1633',
        minHeight: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: '48px 24px 24px',
          backdropFilter: 'blur(6px)',
          backgroundColor: 'rgba(31,22,51,0.85)',
          position: 'sticky',
          top: 0,
          zIndex: 10,
          borderBottom: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h1
            style={{
              fontFamily: "'Noto Sans KR', sans-serif",
              fontWeight: 700,
              fontSize: 22,
              color: 'white',
              margin: 0,
              lineHeight: '33px',
            }}
          >
            표현 모음
          </h1>
          <div
            style={{
              backgroundColor: 'rgba(194,239,78,0.15)',
              borderRadius: 12,
              padding: '6px 14px',
              border: '1px solid rgba(194,239,78,0.3)',
            }}
          >
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: 12,
                color: '#c2ef4e',
              }}
            >
              {expressions.length} 개
            </span>
          </div>
        </div>
        <p
          style={{
            fontFamily: "'Noto Sans KR', sans-serif",
            fontWeight: 400,
            fontSize: 14,
            color: 'rgba(255,255,255,0.5)',
            marginTop: 8,
            lineHeight: '22px',
          }}
        >
          AI가 분석한 나만의 표현 컬렉션
        </p>
      </div>

      {/* Expression list */}
      <div style={{ padding: '20px 20px 116px', display: 'flex', flexDirection: 'column', gap: 16 }}>
        {expressions.map((expr, i) => (
          <div
            key={i}
            style={{
              background: 'rgba(66,32,130,0.2)',
              borderRadius: 24,
              padding: '20px 24px',
              border: `1px solid ${expr.color}30`,
              boxShadow: `0 4px 20px rgba(0,0,0,0.2)`,
              backdropFilter: 'blur(6px)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
              <span
                style={{
                  fontFamily: "'Noto Sans KR', sans-serif",
                  fontWeight: 700,
                  fontSize: 11,
                  color: expr.color,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}
              >
                {expr.category}
              </span>
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: expr.color,
                  boxShadow: `0 0 8px ${expr.color}`,
                }}
              />
            </div>
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: 17,
                color: 'white',
                margin: '0 0 8px',
                lineHeight: '26px',
              }}
            >
              {expr.phrase}
            </p>
            <p
              style={{
                fontFamily: "'Noto Sans KR', sans-serif",
                fontWeight: 400,
                fontSize: 14,
                color: 'rgba(255,255,255,0.6)',
                margin: 0,
                lineHeight: '22px',
              }}
            >
              {expr.meaning}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
