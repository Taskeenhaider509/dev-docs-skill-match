import React, { useEffect, useState, type ReactNode } from "react";
import { useThemeConfig, ErrorCauseBoundary } from "@docusaurus/theme-common";
import {
  splitNavbarItems,
  useNavbarMobileSidebar,
} from "@docusaurus/theme-common/internal";
import NavbarItem, { type Props as NavbarItemConfig } from "@theme/NavbarItem";
import NavbarColorModeToggle from "@theme/Navbar/ColorModeToggle";
import SearchBar from "@theme/SearchBar";
import NavbarMobileSidebarToggle from "@theme/Navbar/MobileSidebar/Toggle";
import NavbarLogo from "@theme/Navbar/Logo";
import NavbarSearch from "@theme/Navbar/Search";
import {useLocation} from '@docusaurus/router'

import styles from "./styles.module.css";

function useNavbarItems() {
  // TODO temporary casting until ThemeConfig type is improved
  return useThemeConfig().navbar.items as NavbarItemConfig[];
}

function NavbarItems({ items }: { items: NavbarItemConfig[] }): JSX.Element {
  return (
    <>
      {items.map((item, i) => (
        <ErrorCauseBoundary
          key={i}
          onError={(error) =>
            new Error(
              `A theme navbar item failed to render.
Please double-check the following navbar item (themeConfig.navbar.items) of your Docusaurus config:
${JSON.stringify(item, null, 2)}`,
              { cause: error }
            )
          }
        >
          <NavbarItem {...item} />
        </ErrorCauseBoundary>
      ))}
    </>
  );
}

function NavbarContentLayout({
  left,
  right,
}: {
  left: ReactNode;
  right: ReactNode;
}) {
//   const location = useLocation();
// const [path, setPath] = useState("")
//   useEffect(() => {
//     const isDocsPath = /^\/docs\/.+/.test(location.pathname);
//     console.log(isDocsPath, "path");
//     setPath(isDocsPath)
//   }, [location.pathname]);
// style={{position:"relative",right:path?"14%":""}}
  return (
    <div className="navbar__inner">
      <div className="navbar__items navbar-toggle-items">{left}</div>
      <div className="navbar__items navbar__items--right">{right}</div>
    </div>
  );
}

export default function NavbarContent(): JSX.Element {
  const mobileSidebar = useNavbarMobileSidebar();

  const items = useNavbarItems();
  const [leftItems, rightItems] = splitNavbarItems(items);

  const searchBarItem = items.find((item) => item.type === "search");

  return (
    <NavbarContentLayout
      left={
        // TODO stop hardcoding items?
        <>
          <NavbarLogo />
          {!mobileSidebar.disabled && <NavbarMobileSidebarToggle />}
          <NavbarItems items={leftItems} />
        </>
      }
      right={
        // TODO stop hardcoding items?
        // Ask the user to add the respective navbar items => more flexible
        <>
          <NavbarItems items={rightItems} />
          {!searchBarItem && (
            <NavbarSearch>
              <SearchBar />
            </NavbarSearch>
          )}
          <div className="navbar-section navbar-hidden-components">
            <a
              href="https://www.skillmatch.tech/contact-us"
              target="_blank"
              className="navbar-link textdarktheme"
            >
              Submit a ticket
            </a>
            <a href="https://www.skillmatch.tech/book-demo" target="_blank">
              <button className="navbar-button-request">Request A Demo</button>
            </a>
            <a href="https://www.skillmatch.tech/signin" target="_blank">
              <button className="navbar-button-sign-in">Sign in</button>
            </a>
          </div>
          <NavbarColorModeToggle className={styles.colorModeToggle} />
        </>
      }
    />
  );
}
