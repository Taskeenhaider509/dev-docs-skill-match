import React, {memo} from 'react';
import {
  DocSidebarItemsExpandedStateProvider,
  useVisibleSidebarItems,
} from '@docusaurus/theme-common/internal';
import DocSidebarItem from '@theme/DocSidebarItem';

import type {Props} from '@theme/DocSidebarItems';

function DocSidebarItems({items, ...props}: Props): JSX.Element {
  const visibleItems = useVisibleSidebarItems(items, props.activePath);
  return (
    <DocSidebarItemsExpandedStateProvider>
      {visibleItems.map((item, index) => (
        <div>
        {item.type === "link"?<div style={{display:"flex", paddingLeft: "17px"}}>
          <div style={{width:'2px',backgroundColor:"#CED3DB",height:'40px',position:'relative',right:'9px'}}></div>
          <DocSidebarItem key={index} item={item} index={index} {...props} />
        </div>:<DocSidebarItem key={index} item={item} index={index} {...props} />}
        </div>
      ))}
    </DocSidebarItemsExpandedStateProvider>
  );
}

// Optimize sidebar at each "level"
export default memo(DocSidebarItems);
