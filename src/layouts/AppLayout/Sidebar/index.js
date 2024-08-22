import { useEffect } from 'react';
import { useResponsive } from 'hooks';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Box, Drawer, Typography, Avatar, Stack } from '@mui/material';

import NavSection from './NavSection';

export default function DashboardSidebar({ isOpenSidebar, onCloseSidebar }) {
  const { pathname } = useLocation();

  const isDesktop = useResponsive('up', 'lg');
  const { cellphone, username, roles } = useSelector((state) => state.auth.userInfo);

  const drawerWidth = 320;

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Stack p={1} rowGap={1} height="100%">
      <Stack py={1} rowGap={1} borderRadius={2} alignItems="center" justifyContent="center" bgcolor="warning.light">
        <Avatar alt="profile" sx={{ width: 80, height: 80 }} />
        <Stack direction="row" columnGap={0.5}>
          {roles.map((role) => (
            <Typography
              px={1}
              key={role.id}
              fontSize={12}
              borderRadius={3}
              lineHeight={1.5}
              color="warning.dark"
              variant="subtitle2"
              bgcolor="warning.lighter"
            >
              {role.title}
            </Typography>
          ))}
        </Stack>
        <Typography variant="subtitle2" color="#44474c">
          {username}
        </Typography>
        <Typography variant="body2" color="#44474c77">
          {cellphone}
        </Typography>
      </Stack>
      <NavSection />
    </Stack>
  );

  return (
    <Box
      sx={{
        transition: 'all 0.5s ease',
        width: { xs: 0, lg: drawerWidth },
      }}
    >
      {!isDesktop && (
        <Drawer
          open={isOpenSidebar}
          onClose={onCloseSidebar}
          PaperProps={{
            sx: {
              border: 'none',
              direction: 'ltr',
              width: drawerWidth,
              bgcolor: 'background.default',
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}

      {isDesktop && (
        <Drawer
          open
          variant="persistent"
          PaperProps={{
            sx: {
              border: 'none',
              width: drawerWidth,
              bgcolor: 'background.default',
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}
