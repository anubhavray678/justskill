import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import PracticeMenuBox from "./reusables/PracticeMenuBox";

function PracticeDropDown({ component }) {
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="hover:text-purple-500 text-md">
              <PracticeMenuBox />
            </NavigationMenuTrigger>
            {/* <NavigationMenuContent>
              {/* <NavigationMenuLink href="/"> */}

            {/* </NavigationMenuLink> */}
            {/* </NavigationMenuContent>  */}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export default PracticeDropDown;
