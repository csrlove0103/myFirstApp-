import { useState, useEffect } from "react";
import { UserProvider, useUser } from "./UserContext";
import OnboardingScreen from "../imports/OnboardingScreen";
import LoginScreen from "../imports/LoginScreen";
import RegisterScreen from "../imports/RegisterScreen";
import LoadingScreen from "../imports/LoadingScreen";
import HomeScreen from "../imports/HomeScreen";
import DiaryEntryScreen from "../imports/DiaryEntryScreen";
import DiaryFeedbackScreen from "../imports/DiaryFeedbackScreen";
import RewardScreen from "../imports/RewardScreen";
import MyPageScreen from "../imports/MyPageScreen";
import { BottomNav, Tab } from "./components/BottomNav";
import { ExpressionsScreen } from "./components/ExpressionsScreen";

type Screen =
  | "onboarding"
  | "login"
  | "register"
  | "home"
  | "reward"
  | "diary"
  | "loading"
  | "feedback"
  | "expressions"
  | "mypage";

const tabToScreen: Record<Tab, Screen> = {
  home: "home",
  reward: "reward",
  diary: "diary",
  expressions: "expressions",
  mypage: "mypage",
};

const screenToTab: Partial<Record<Screen, Tab>> = {
  home: "home",
  reward: "reward",
  diary: "diary",
  feedback: "diary",
  expressions: "expressions",
  mypage: "mypage",
};

const screensWithNav: Screen[] = [
  "home",
  "reward",
  "diary",
  "feedback",
  "expressions",
  "mypage",
];

function AppInner() {
  const [screen, setScreen] = useState<Screen>("onboarding");
  const { setUser } = useUser();

  const navigate = (tab: Tab) => setScreen(tabToScreen[tab]);

  const activeTab = screenToTab[screen];
  const showNav = screensWithNav.includes(screen);

  // Auto-advance loading → feedback
  useEffect(() => {
    if (screen !== "loading") return;
    const t = setTimeout(() => setScreen("feedback"), 3000);
    return () => clearTimeout(t);
  }, [screen]);

  const handleLogin = (id: string, name: string) => {
    setUser({ id, name });
    setScreen("home");
  };

  const renderScreen = () => {
    switch (screen) {
      case "onboarding":
        return (
          <div style={{ position: "relative", width: "100%", minHeight: "100%" }}>
            <OnboardingScreen />
            {/* Clickable "시작하기" zone (bottom-right honeycomb graphic) */}
            <button
              aria-label="시작하기"
              onClick={() => setScreen("login")}
              style={{
                position: "absolute",
                bottom: 40,
                right: 24,
                width: 180,
                height: 170,
                zIndex: 100,
                background: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            />
          </div>
        );

      case "login":
        return (
          <div style={{ position: "relative", width: "100%", minHeight: "100%" }}>
            <LoginScreen
              onLogin={handleLogin}
              onRegister={() => setScreen("register")}
            />
          </div>
        );

      case "register":
        return (
          <div style={{ position: "relative", width: "100%", minHeight: "100%" }}>
            <RegisterScreen
              onRegisterSuccess={() => setScreen("login")}
              onBack={() => setScreen("login")}
            />
          </div>
        );

      case "loading":
        return (
          <div style={{ position: "relative", width: "100%", minHeight: "100%" }}>
            <LoadingScreen />
          </div>
        );

      case "home":
        return (
          <div style={{ position: "relative", width: "100%", minHeight: "100%" }}>
            <HomeScreen onExpressionClick={() => setScreen("expressions")} />
          </div>
        );

      case "diary":
        return (
          <div style={{ position: "relative", width: "100%", minHeight: "100%" }}>
            <DiaryEntryScreen />
            {/* Overlay on "기록 완료하기" submit button - only covers the button area at bottom */}
            <button
              aria-label="기록 완료하기"
              onClick={() => setScreen("loading")}
              style={{
                position: "absolute",
                bottom: 145,
                left: 24,
                right: 24,
                height: 60,
                zIndex: 10,
                background: "transparent",
                border: "none",
                cursor: "pointer",
                pointerEvents: "auto",
              }}
            />
            {/* Back button (left chevron) in header */}
            <button
              aria-label="뒤로가기"
              onClick={() => setScreen("home")}
              style={{
                position: "absolute",
                top: 40,
                left: 24,
                width: 40,
                height: 40,
                zIndex: 10,
                background: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            />
          </div>
        );

      case "feedback":
        return (
          <div style={{ position: "relative", width: "100%", minHeight: "100%" }}>
            <DiaryFeedbackScreen />
          </div>
        );

      case "reward":
        return (
          <div style={{ position: "relative", width: "100%", minHeight: "100%" }}>
            <RewardScreen />
          </div>
        );

      case "mypage":
        return (
          <div style={{ position: "relative", width: "100%", minHeight: "100%" }}>
            <MyPageScreen />
          </div>
        );

      case "expressions":
        return <ExpressionsScreen />;

      default:
        return null;
    }
  };

  return (
    <div
      style={{
        minHeight: "100dvh",
        backgroundColor: "#0a0614",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      {/* Mobile phone frame */}
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 430,
          height: "100dvh",
          overflow: "hidden",
          backgroundColor: "#1f1633",
        }}
      >
        {/* Scrollable content area */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            overflowY: "auto",
            overflowX: "hidden",
            paddingBottom: showNav ? 0 : 0,
          }}
        >
          <div style={{ minHeight: "100%", width: "100%" }}>
            {renderScreen()}
          </div>
        </div>

        {/* Floating action button for home screen — always visible above nav */}
        {screen === "home" && (
          <button
            aria-label="일기 쓰기"
            onClick={() => setScreen("diary")}
            style={{
              position: "absolute",
              bottom: 104,
              right: 24,
              width: 64,
              height: 64,
              borderRadius: "50%",
              zIndex: 190,
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          />
        )}

        {/* Fixed bottom navigation */}
        {showNav && activeTab && (
          <BottomNav activeTab={activeTab} onNavigate={navigate} />
        )}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <UserProvider>
      <AppInner />
    </UserProvider>
  );
}
