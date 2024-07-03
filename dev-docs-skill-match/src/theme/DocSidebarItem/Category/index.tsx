import React, { type ComponentProps, useEffect, useMemo } from "react";
import { AiFillAmazonCircle, AiFillAlert, AiFillAndroid } from "react-icons/ai";
import clsx from "clsx";
import {
  ThemeClassNames,
  useThemeConfig,
  usePrevious,
  Collapsible,
  useCollapsible,
} from "@docusaurus/theme-common";
import {
  isActiveSidebarItem,
  findFirstSidebarItemLink,
  useDocSidebarItemsExpandedState,
  isSamePath,
} from "@docusaurus/theme-common/internal";
import Link from "@docusaurus/Link";
import { translate } from "@docusaurus/Translate";
import useIsBrowser from "@docusaurus/useIsBrowser";
import DocSidebarItems from "@theme/DocSidebarItems";
import type { Props } from "@theme/DocSidebarItem/Category";
import arrow from "../../../../static/img/Arrow_Link.svg";

// If we navigate to a category and it becomes active, it should automatically
// expand itself
function useAutoExpandActiveCategory({
  isActive,
  collapsed,
  updateCollapsed,
}: {
  isActive: boolean;
  collapsed: boolean;
  updateCollapsed: (b: boolean) => void;
}) {
  const wasActive = usePrevious(isActive);
  useEffect(() => {
    const justBecameActive = isActive && !wasActive;
    if (justBecameActive && collapsed) {
      updateCollapsed(false);
    }
  }, [isActive, wasActive, collapsed, updateCollapsed]);
}

/**
 * When a collapsible category has no link, we still link it to its first child
 * during SSR as a temporary fallback. This allows to be able to navigate inside
 * the category even when JS fails to load, is delayed or simply disabled
 * React hydration becomes an optional progressive enhancement
 * see https://github.com/facebookincubator/infima/issues/36#issuecomment-772543188
 * see https://github.com/facebook/docusaurus/issues/3030
 */
function useCategoryHrefWithSSRFallback(
  item: Props["item"]
): string | undefined {
  const isBrowser = useIsBrowser();
  return useMemo(() => {
    if (item.href && !item.linkUnlisted) {
      return item.href;
    }
    // In these cases, it's not necessary to render a fallback
    // We skip the "findFirstCategoryLink" computation
    if (isBrowser || !item.collapsible) {
      return undefined;
    }
    return findFirstSidebarItemLink(item);
  }, [item, isBrowser]);
}

function CollapseButton({
  collapsed,
  categoryLabel,
  onClick,
}: {
  collapsed: boolean;
  categoryLabel: string;
  onClick: ComponentProps<"button">["onClick"];
}) {
  return (
    <button
      aria-label={
        collapsed
          ? translate(
              {
                id: "theme.DocSidebarItem.expandCategoryAriaLabel",
                message: "Expand sidebar category '{label}'",
                description: "The ARIA label to expand the sidebar category",
              },
              { label: categoryLabel }
            )
          : translate(
              {
                id: "theme.DocSidebarItem.collapseCategoryAriaLabel",
                message: "Collapse sidebar category '{label}'",
                description: "The ARIA label to collapse the sidebar category",
              },
              { label: categoryLabel }
            )
      }
      aria-expanded={!collapsed}
      type="button"
      className="clean-btn menu__caret"
      onClick={onClick}
    />
  );
}

const icons: any = [
  <svg
    width="18"
    height="20"
    viewBox="0 0 18 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      className="sidebar-icons-toggle-dark"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.75 5.90549C11.0439 5.57245 12 4.39788 12 3C12 1.34315 10.6569 0 9 0C7.34315 0 6 1.34315 6 3C6 4.39788 6.95608 5.57245 8.25 5.90549V9.25H5C3.48122 9.25 2.25 10.4812 2.25 12V14.0945C0.95608 14.4275 0 15.6021 0 17C0 18.6569 1.34315 20 3 20C4.65685 20 6 18.6569 6 17C6 15.6021 5.04392 14.4275 3.75 14.0945V12C3.75 11.3096 4.30964 10.75 5 10.75H13C13.6904 10.75 14.25 11.3096 14.25 12V14.0945C12.9561 14.4275 12 15.6021 12 17C12 18.6569 13.3431 20 15 20C16.6569 20 18 18.6569 18 17C18 15.6021 17.0439 14.4275 15.75 14.0945V12C15.75 10.4812 14.5188 9.25 13 9.25H9.75V5.90549ZM10.5 3C10.5 3.82843 9.82843 4.5 9 4.5C8.17157 4.5 7.5 3.82843 7.5 3C7.5 2.17157 8.17157 1.5 9 1.5C9.82843 1.5 10.5 2.17157 10.5 3ZM3 18.5C3.82843 18.5 4.5 17.8284 4.5 17C4.5 16.1716 3.82843 15.5 3 15.5C2.17157 15.5 1.5 16.1716 1.5 17C1.5 17.8284 2.17157 18.5 3 18.5ZM15 18.5C15.8284 18.5 16.5 17.8284 16.5 17C16.5 16.1716 15.8284 15.5 15 15.5C14.1716 15.5 13.5 16.1716 13.5 17C13.5 17.8284 14.1716 18.5 15 18.5Z"
      fill="#6F6F6F"
    />
  </svg>,
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      className="sidebar-icons-toggle-dark"
      d="M9.72954 0.407986C10.0004 0.197338 10.3796 0.197338 10.6505 0.407986L18.8405 6.77799C19.0231 6.92008 19.13 7.13856 19.13 7.37V17.38C19.13 18.0616 18.8592 18.7153 18.3773 19.1973C17.8953 19.6792 17.2416 19.95 16.56 19.95H3.82C3.13839 19.95 2.4847 19.6792 2.00274 19.1973C1.52077 18.7153 1.25 18.0616 1.25 17.38V7.37C1.25 7.13856 1.35685 6.92008 1.53954 6.77799L9.72954 0.407986ZM2.75 7.73681V17.38C2.75 17.6638 2.86273 17.9359 3.0634 18.1366C3.26406 18.3373 3.53622 18.45 3.82 18.45H16.56C16.8438 18.45 17.1159 18.3373 17.3166 18.1366C17.5173 17.9359 17.63 17.6638 17.63 17.38V7.73681L10.19 1.95015L2.75 7.73681Z"
      fill="#367167"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6.71094 10.0996C6.71094 9.68539 7.04673 9.34961 7.46094 9.34961H12.9209C13.3351 9.34961 13.6709 9.68539 13.6709 10.0996V19.1996C13.6709 19.6138 13.3351 19.9496 12.9209 19.9496C12.5067 19.9496 12.1709 19.6138 12.1709 19.1996V10.8496H8.21094V19.1996C8.21094 19.6138 7.87516 19.9496 7.46094 19.9496C7.04673 19.9496 6.71094 19.6138 6.71094 19.1996V10.0996Z"
      fill="#367167"
      className="sidebar-icons-toggle-dark"
    />
  </svg>,
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      className="sidebar-icons-toggle-dark"
      d="M19.5105 12.0537C19.4498 11.8925 19.38 11.7347 19.3014 11.5812L15.6864 3.45292C15.6503 3.37584 15.6001 3.30595 15.5384 3.2467C15.2795 2.99081 14.9719 2.78779 14.6334 2.64927C14.2948 2.51075 13.9319 2.43945 13.5654 2.43945C13.1988 2.43945 12.8359 2.51075 12.4974 2.64927C12.1588 2.78779 11.8513 2.99081 11.5924 3.2467C11.5285 3.30998 11.478 3.38504 11.4436 3.46761C11.4092 3.55017 11.3917 3.63861 11.392 3.72787V6.21962H8.60456V3.72787C8.60487 3.63861 8.58734 3.55017 8.55296 3.46761C8.51858 3.38504 8.46803 3.30998 8.40421 3.2467C8.1453 2.99081 7.83776 2.78779 7.49921 2.64927C7.16066 2.51075 6.79773 2.43945 6.43121 2.43945C6.06469 2.43945 5.70177 2.51075 5.36321 2.64927C5.02466 2.78779 4.71713 2.99081 4.45822 3.2467C4.39651 3.30595 4.34632 3.37584 4.31013 3.45292L0.695151 11.5812C0.616606 11.7347 0.546811 11.8925 0.486092 12.0537C0.324212 12.4975 0.241685 12.9655 0.24219 13.4371C0.24219 14.5309 0.682706 15.58 1.46683 16.3534C2.25095 17.1269 3.31445 17.5614 4.42337 17.5614C5.53229 17.5614 6.59579 17.1269 7.37992 16.3534C8.16404 15.58 8.60456 14.5309 8.60456 13.4371V7.59438H11.392V13.4371C11.392 14.5309 11.8325 15.58 12.6167 16.3534C13.4008 17.1269 14.4643 17.5614 15.5732 17.5614C16.6821 17.5614 17.7456 17.1269 18.5298 16.3534C19.3139 15.58 19.7544 14.5309 19.7544 13.4371C19.7549 12.9655 19.6724 12.4975 19.5105 12.0537ZM5.52964 4.1403C5.76172 3.94714 6.05109 3.8335 6.35425 3.81645C6.65742 3.79941 6.958 3.87989 7.21083 4.04578V10.3697C6.4479 9.68669 5.45366 9.30974 4.42337 9.31284C3.98583 9.31205 3.55084 9.37872 3.13417 9.51046L5.52964 4.1403ZM4.42337 16.1866C3.97586 16.1883 3.53456 16.0833 3.137 15.8806C2.73945 15.6779 2.39741 15.3835 2.13997 15.0224C1.88254 14.6614 1.71732 14.2443 1.65838 13.8067C1.59943 13.3691 1.64851 12.924 1.80142 12.5091L1.95822 12.1654C2.18698 11.7329 2.52831 11.3681 2.94719 11.1087C3.36606 10.8492 3.84738 10.7043 4.34176 10.6889C4.83614 10.6736 5.32576 10.7882 5.76037 11.0211C6.19499 11.2541 6.55895 11.5969 6.81489 12.0144C7.07083 12.4319 7.20954 12.909 7.21678 13.3968C7.22402 13.8847 7.09954 14.3656 6.8561 14.7903C6.61266 15.2151 6.25903 15.5682 5.83152 15.8136C5.404 16.059 4.91799 16.1877 4.42337 16.1866ZM12.7858 4.04578C13.0386 3.87989 13.3392 3.79941 13.6423 3.81645C13.9455 3.8335 14.2349 3.94714 14.4669 4.1403L16.8624 9.51046C16.4457 9.37872 16.0108 9.31205 15.5732 9.31284C14.5429 9.30974 13.5487 9.68669 12.7858 10.3697V4.04578ZM15.5732 16.1866C15.0786 16.1877 14.5926 16.059 14.1651 15.8136C13.7375 15.5682 13.3839 15.2151 13.1405 14.7903C12.897 14.3656 12.7726 13.8847 12.7798 13.3968C12.787 12.909 12.9257 12.4319 13.1817 12.0144C13.4376 11.5969 13.8016 11.2541 14.2362 11.0211C14.6708 10.7882 15.1604 10.6736 15.6548 10.6889C16.1492 10.7043 16.6305 10.8492 17.0494 11.1087C17.4683 11.3681 17.8096 11.7329 18.0384 12.1654L18.1952 12.5091C18.3481 12.924 18.3971 13.3691 18.3382 13.8067C18.2793 14.2443 18.114 14.6614 17.8566 15.0224C17.5992 15.3835 17.2571 15.6779 16.8596 15.8806C16.462 16.0833 16.0207 16.1883 15.5732 16.1866Z"
      fill="#6F6F6F"
    />
  </svg>,
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      className="sidebar-icons-toggle-dark"
      d="M19.5105 12.0537C19.4498 11.8925 19.38 11.7347 19.3014 11.5812L15.6864 3.45292C15.6503 3.37584 15.6001 3.30595 15.5384 3.2467C15.2795 2.99081 14.9719 2.78779 14.6334 2.64927C14.2948 2.51075 13.9319 2.43945 13.5654 2.43945C13.1988 2.43945 12.8359 2.51075 12.4974 2.64927C12.1588 2.78779 11.8513 2.99081 11.5924 3.2467C11.5285 3.30998 11.478 3.38504 11.4436 3.46761C11.4092 3.55017 11.3917 3.63861 11.392 3.72787V6.21962H8.60456V3.72787C8.60487 3.63861 8.58734 3.55017 8.55296 3.46761C8.51858 3.38504 8.46803 3.30998 8.40421 3.2467C8.1453 2.99081 7.83776 2.78779 7.49921 2.64927C7.16066 2.51075 6.79773 2.43945 6.43121 2.43945C6.06469 2.43945 5.70177 2.51075 5.36321 2.64927C5.02466 2.78779 4.71713 2.99081 4.45822 3.2467C4.39651 3.30595 4.34632 3.37584 4.31013 3.45292L0.695151 11.5812C0.616606 11.7347 0.546811 11.8925 0.486092 12.0537C0.324212 12.4975 0.241685 12.9655 0.24219 13.4371C0.24219 14.5309 0.682706 15.58 1.46683 16.3534C2.25095 17.1269 3.31445 17.5614 4.42337 17.5614C5.53229 17.5614 6.59579 17.1269 7.37992 16.3534C8.16404 15.58 8.60456 14.5309 8.60456 13.4371V7.59438H11.392V13.4371C11.392 14.5309 11.8325 15.58 12.6167 16.3534C13.4008 17.1269 14.4643 17.5614 15.5732 17.5614C16.6821 17.5614 17.7456 17.1269 18.5298 16.3534C19.3139 15.58 19.7544 14.5309 19.7544 13.4371C19.7549 12.9655 19.6724 12.4975 19.5105 12.0537ZM5.52964 4.1403C5.76172 3.94714 6.05109 3.8335 6.35425 3.81645C6.65742 3.79941 6.958 3.87989 7.21083 4.04578V10.3697C6.4479 9.68669 5.45366 9.30974 4.42337 9.31284C3.98583 9.31205 3.55084 9.37872 3.13417 9.51046L5.52964 4.1403ZM4.42337 16.1866C3.97586 16.1883 3.53456 16.0833 3.137 15.8806C2.73945 15.6779 2.39741 15.3835 2.13997 15.0224C1.88254 14.6614 1.71732 14.2443 1.65838 13.8067C1.59943 13.3691 1.64851 12.924 1.80142 12.5091L1.95822 12.1654C2.18698 11.7329 2.52831 11.3681 2.94719 11.1087C3.36606 10.8492 3.84738 10.7043 4.34176 10.6889C4.83614 10.6736 5.32576 10.7882 5.76037 11.0211C6.19499 11.2541 6.55895 11.5969 6.81489 12.0144C7.07083 12.4319 7.20954 12.909 7.21678 13.3968C7.22402 13.8847 7.09954 14.3656 6.8561 14.7903C6.61266 15.2151 6.25903 15.5682 5.83152 15.8136C5.404 16.059 4.91799 16.1877 4.42337 16.1866ZM12.7858 4.04578C13.0386 3.87989 13.3392 3.79941 13.6423 3.81645C13.9455 3.8335 14.2349 3.94714 14.4669 4.1403L16.8624 9.51046C16.4457 9.37872 16.0108 9.31205 15.5732 9.31284C14.5429 9.30974 13.5487 9.68669 12.7858 10.3697V4.04578ZM15.5732 16.1866C15.0786 16.1877 14.5926 16.059 14.1651 15.8136C13.7375 15.5682 13.3839 15.2151 13.1405 14.7903C12.897 14.3656 12.7726 13.8847 12.7798 13.3968C12.787 12.909 12.9257 12.4319 13.1817 12.0144C13.4376 11.5969 13.8016 11.2541 14.2362 11.0211C14.6708 10.7882 15.1604 10.6736 15.6548 10.6889C16.1492 10.7043 16.6305 10.8492 17.0494 11.1087C17.4683 11.3681 17.8096 11.7329 18.0384 12.1654L18.1952 12.5091C18.3481 12.924 18.3971 13.3691 18.3382 13.8067C18.2793 14.2443 18.114 14.6614 17.8566 15.0224C17.5992 15.3835 17.2571 15.6779 16.8596 15.8806C16.462 16.0833 16.0207 16.1883 15.5732 16.1866Z"
      fill="#6F6F6F"
    />
  </svg>,
  <svg
    className="faqs-icon"
    width="20"
    height="22"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      className="sidebar-icons-toggle-dark"
      d="M18.3346 1.66699H1.66797V18.3337L5.0013 15.0003H18.3346V1.66699ZM16.668 13.3337H5.0013L3.33464 15.0003V3.33366H16.668V13.3337Z"
      fill="#6F6F6F"
    />
  </svg>,
    <svg
    className="faqs-icon"
    width="20"
    height="22"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      className="sidebar-icons-toggle-dark"
      d="M18.3346 1.66699H1.66797V18.3337L5.0013 15.0003H18.3346V1.66699ZM16.668 13.3337H5.0013L3.33464 15.0003V3.33366H16.668V13.3337Z"
      fill="#6F6F6F"
    />
  </svg>,
    <svg
    className="faqs-icon"
    width="20"
    height="22"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      className="sidebar-icons-toggle-dark"
      d="M18.3346 1.66699H1.66797V18.3337L5.0013 15.0003H18.3346V1.66699ZM16.668 13.3337H5.0013L3.33464 15.0003V3.33366H16.668V13.3337Z"
      fill="#6F6F6F"
    />
  </svg>,
    <svg
    className="faqs-icon"
    width="20"
    height="22"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      className="sidebar-icons-toggle-dark"
      d="M18.3346 1.66699H1.66797V18.3337L5.0013 15.0003H18.3346V1.66699ZM16.668 13.3337H5.0013L3.33464 15.0003V3.33366H16.668V13.3337Z"
      fill="#6F6F6F"
    />
  </svg>,
];

export default function DocSidebarItemCategory({
  item,
  onItemClick,
  activePath,
  level,
  index,
  ...props
}: Props): JSX.Element {
  const { items, label, collapsible, className, href } = item;
  const {
    docs: {
      sidebar: { autoCollapseCategories },
    },
  } = useThemeConfig();
  const hrefWithSSRFallback = useCategoryHrefWithSSRFallback(item);

  const isActive = isActiveSidebarItem(item, activePath);
  const isCurrentPage = isSamePath(href, activePath);

  const { collapsed, setCollapsed } = useCollapsible({
    // Active categories are always initialized as expanded. The default
    // (`item.collapsed`) is only used for non-active categories.
    initialState: () => {
      if (!collapsible) {
        return false;
      }
      return isActive ? false : item.collapsed;
    },
  });

  const { expandedItem, setExpandedItem } = useDocSidebarItemsExpandedState();
  // Use this instead of `setCollapsed`, because it is also reactive
  const updateCollapsed = (toCollapsed: boolean = !collapsed) => {
    setExpandedItem(toCollapsed ? null : index);
    setCollapsed(toCollapsed);
  };
  useAutoExpandActiveCategory({ isActive, collapsed, updateCollapsed });
  useEffect(() => {
    if (
      collapsible &&
      expandedItem != null &&
      expandedItem !== index &&
      autoCollapseCategories
    ) {
      setCollapsed(true);
    }
  }, [collapsible, expandedItem, index, setCollapsed, autoCollapseCategories]);

  return (
    <li
      className={clsx(
        ThemeClassNames.docs.docSidebarItemCategory,
        ThemeClassNames.docs.docSidebarItemCategoryLevel(level),
        "menu__list-item",
        {
          "menu__list-item--collapsed": collapsed,
        },
        className
      )}
    >
      <div
        className={clsx("menu__list-item-collapsible", {
          "menu__list-item-collapsible--active": isCurrentPage,
        })}
      >
        <Link
          className={clsx("menu__link", {
            "menu__link--sublist": collapsible,
            "menu__link--sublist-caret": !href && collapsible,
            "menu__link--active": isActive,
          })}
          onClick={
            collapsible
              ? (e) => {
                  onItemClick?.(item);
                  if (href) {
                    updateCollapsed(false);
                  } else {
                    e.preventDefault();
                    updateCollapsed();
                  }
                }
              : () => {
                  onItemClick?.(item);
                }
          }
          aria-current={isCurrentPage ? "page" : undefined}
          role={collapsible && !href ? "button" : undefined}
          aria-expanded={collapsible && !href ? !collapsed : undefined}
          href={collapsible ? hrefWithSSRFallback ?? "#" : hrefWithSSRFallback}
          {...props}
        >
          <span className="side-bar-icons sidebar-icons-toggle-dark">
            {icons[index]}
          </span>
          {label}
        </Link>
        {href && collapsible && (
          <CollapseButton
            collapsed={collapsed}
            categoryLabel={label}
            onClick={(e) => {
              e.preventDefault();
              updateCollapsed();
            }}
          />
        )}
      </div>

      <Collapsible lazy as="ul" className="menu__list" collapsed={collapsed}>
        <DocSidebarItems
          items={items}
          tabIndex={collapsed ? -1 : 0}
          onItemClick={onItemClick}
          activePath={activePath}
          level={level + 1}
        />
      </Collapsible>
    </li>
  );
}
