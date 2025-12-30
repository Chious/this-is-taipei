import { useRef } from "react";
import { SwitchTransition, Transition } from "react-transition-group";
import { Routes, Route, useLocation } from "react-router-dom";
import gsap from "gsap";
import PageLayout from "../components/PageLayout";
import { pageConfigs } from "./pageConfigs";

interface RouteTransitionProps {
  children: React.ReactNode;
  locationKey: string;
}

const RouteTransition = ({ children, locationKey }: RouteTransitionProps) => {
  const nodeRef = useRef<HTMLDivElement>(null);

  return (
    <SwitchTransition mode="out-in">
      <Transition
        key={locationKey}
        nodeRef={nodeRef}
        timeout={500}
        mountOnEnter
        unmountOnExit
        onEnter={() => {
          if (nodeRef.current) {
            gsap.fromTo(
              nodeRef.current,
              { opacity: 0.6 },
              { opacity: 1, duration: 0.5, ease: "power2.out" }
            );
          }
        }}
        onExit={() => {
          if (nodeRef.current) {
            gsap.to(nodeRef.current, {
              opacity: 0.6,
              duration: 0.5,
              ease: "power2.in",
            });
          }
        }}
      >
        <div
          ref={nodeRef}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
          }}
        >
          {children}
        </div>
      </Transition>
    </SwitchTransition>
  );
};

function AppRoutes() {
  const location = useLocation();

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        backgroundColor: "#000",
      }}
    >
      <RouteTransition locationKey={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<PageLayout config={pageConfigs["/"]} />} />
          <Route
            path="/101"
            element={<PageLayout config={pageConfigs["/101"]} />}
          />
          <Route
            path="/night-market"
            element={<PageLayout config={pageConfigs["/night-market"]} />}
          />
          <Route
            path="/longshan-temple"
            element={<PageLayout config={pageConfigs["/longshan-temple"]} />}
          />
          <Route path="*" element={<PageLayout config={pageConfigs["/"]} />} />
        </Routes>
      </RouteTransition>
    </div>
  );
}

export default AppRoutes;
