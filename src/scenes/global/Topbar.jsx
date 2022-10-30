import { Box, IconButton, InputBase, useTheme } from "@mui/material";
import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { ColorModeContext, tokens } from "../../theme";
import { useContext } from "react";

export const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box height="100%" width="100%">
      <Box display="flex" justifyContent="space-between" p={2}>
        {/* Search Bar */}
        <Box
          display="flex"
          backgroundColor={colors.primary[400]}
          borderRadius="3px"
        >
          <InputBase sx={{ ml: 4, flex: 1 }} placeholder="Search" />
          <IconButton type="button" sx={{ p: 1 }}>
            <SearchIcon />
          </IconButton>
        </Box>
        {/* Icons */}
        <Box display="flex">
          <IconButton>
            <BedtimeOutlinedIcon />
          </IconButton>
          <IconButton>
            <NotificationsIcon />
          </IconButton>
          <IconButton>
            <SettingsOutlinedIcon />
          </IconButton>
          <IconButton>
            <PersonOutlineOutlinedIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};
