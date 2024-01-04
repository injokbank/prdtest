import { useEffect, useRef } from "react";

function saveScrollPos() {
  console.log(`###### saveScrollPos ` + window.scrollY);
  sessionStorage.setItem("scrollPos", 100);
}

function restoreScrollPos() {
  const scrollPos = sessionStorage.getItem("scrollPos");
  console.log(`###### scrollPos ` + scrollPos);
  if (scrollPos) {
    window.scrollTo(0, scrollPos);
    sessionStorage.removeItem("scrollPos");
  }
}

export default function useScrollResotration(router) {
  const shouldScrollRestore = useRef(false);

  useEffect(() => {
    console.log(`###### shouldScrollRestore.current ` + shouldScrollRestore.current);
    if ("scrollRestoration" in window.history) {
      shouldScrollRestore.current = false;
      window.history.scrollRestoration = "manual";

      const onRouteChangeStart = () => {
        if (!shouldScrollRestore.current) {
          saveScrollPos();
        }
      };

      const onRouteChangeComplete = () => {
        console.log(`###### onRouteChangeComplete shouldScrollRestore.current ` + shouldScrollRestore.current);
        if (shouldScrollRestore.current) {
          shouldScrollRestore.current = false;
          restoreScrollPos();
        }
      };

      router.events.on("routeChangeStart", onRouteChangeStart);
      router.events.on("routeChangeComplete", onRouteChangeComplete);
      console.log(`###### routeChangeComplete beforePopState `);
      router.beforePopState(({ url, as, options }) => {
        console.log(`###### beforePopState url, as, options ` + url + ` ` + as, ` ` + options);
        console.log(`###### beforePopState ` + shouldScrollRestore.current);
        shouldScrollRestore.current = true;
        return true;
      });

      return () => {
        router.events.off("routeChangeStart", onRouteChangeStart);
        router.events.off("routeChangeComplete", onRouteChangeComplete);
        router.beforePopState(() => true);
      };
    }
  }, [router]);
}
