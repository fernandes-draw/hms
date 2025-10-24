import { ActionIcon } from "@mantine/core";
import { IconLayoutSidebarLeftCollapseFilled } from "@tabler/icons-react";
import ProfileMenu from "./ProfileMenu";

const Header = () => {
  return (
    <div className="bg-cyan-100 w-full h-16">
      <ActionIcon variant="transparent" size="xl" aria-label="Settings">
        <IconLayoutSidebarLeftCollapseFilled
          style={{ width: "70%", height: "70%" }}
        />
      </ActionIcon>
      <ProfileMenu />
    </div>
  );
};

export default Header;
