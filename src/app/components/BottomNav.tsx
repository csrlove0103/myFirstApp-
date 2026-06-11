import type { ComponentType } from 'react';
import svgPaths from "../../imports/DiaryEntryScreen/svg-7v96pz03yf";

export type Tab = 'home' | 'reward' | 'diary' | 'expressions' | 'mypage';

interface BottomNavProps {
  activeTab: Tab;
  onNavigate: (tab: Tab) => void;
}

function HomeIcon({ active }: { active: boolean }) {
  return (
    <div style={{ width: 22.5, height: 20, position: 'relative', flexShrink: 0 }}>
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} fill="none" preserveAspectRatio="none" viewBox="0 0 22.5 20">
        <path d={svgPaths.p34558000} fill={active ? '#CB30E0' : 'white'} />
      </svg>
    </div>
  );
}

function RewardIcon({ active }: { active: boolean }) {
  return (
    <div style={{ width: 17.5, height: 20, position: 'relative', flexShrink: 0 }}>
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 20">
        <path d={svgPaths.p22a23d00} fill={active ? '#CB30E0' : 'white'} />
      </svg>
    </div>
  );
}

function DiaryIcon({ active }: { active: boolean }) {
  return (
    <div style={{ width: 22.5, height: 20, position: 'relative', flexShrink: 0 }}>
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} fill="none" preserveAspectRatio="none" viewBox="0 0 22.5 20">
        <path d={svgPaths.p11cc9f00} fill={active ? '#CB30E0' : 'white'} />
      </svg>
    </div>
  );
}

function LayersIcon({ active }: { active: boolean }) {
  return (
    <div style={{ width: 22.5, height: 20, position: 'relative', flexShrink: 0 }}>
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} fill="none" preserveAspectRatio="none" viewBox="0 0 22.5 20">
        <path d={svgPaths.p382bf00} fill={active ? '#CB30E0' : 'white'} />
      </svg>
    </div>
  );
}

function UserIcon({ active }: { active: boolean }) {
  return (
    <div style={{ width: 17.5, height: 20, position: 'relative', flexShrink: 0 }}>
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 20">
        <path d={svgPaths.p3fbba500} fill={active ? '#CB30E0' : 'white'} />
      </svg>
    </div>
  );
}

const tabs: { id: Tab; label: string; Icon: ComponentType<{ active: boolean }> }[] = [
  { id: 'home', label: '홈', Icon: HomeIcon },
  { id: 'reward', label: '리워드', Icon: RewardIcon },
  { id: 'diary', label: '기록', Icon: DiaryIcon },
  { id: 'expressions', label: '표현모음', Icon: LayersIcon },
  { id: 'mypage', label: '마이페이지', Icon: UserIcon },
];

export function BottomNav({ activeTab, onNavigate }: BottomNavProps) {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        height: 96,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 32,
        paddingRight: 32,
        backdropFilter: 'blur(12px)',
        backgroundColor: 'rgba(31,22,51,0.92)',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      {tabs.map(({ id, label, Icon }) => {
        const active = activeTab === id;
        return (
          <button
            key={id}
            onClick={() => onNavigate(id)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 4,
              opacity: active ? 1 : 0.5,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              minWidth: 0,
            }}
          >
            {/* Active dot indicator */}
            <div style={{ height: 10, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', width: 6 }}>
              {active && (
                <div style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#cb30e0' }} />
              )}
            </div>
            <Icon active={active} />
            <span
              style={{
                fontFamily: "'Noto Sans KR', 'Noto Sans KR:Bold', sans-serif",
                fontWeight: active ? 700 : 500,
                fontSize: 10,
                lineHeight: '15px',
                color: active ? '#cb30e0' : 'white',
                whiteSpace: 'nowrap',
              }}
            >
              {label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
