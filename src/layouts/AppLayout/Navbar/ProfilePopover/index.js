import { useState } from 'react';
import { alpha } from '@mui/material/styles';

import {
  Menu,
  Stack,
  Avatar,
  Divider,
  MenuItem,
  Typography,
  IconButton,
  DialogTitle,
  DialogContent,
  DialogActions,
  Slide,
  Button,
} from '@mui/material';

import { signOut } from 'toolkits/redux/auth';
import { useDispatch, useSelector } from 'react-redux';

import CloseIcon from '@mui/icons-material/Close';
import { NewDialog, NewDialogTitle } from 'components';

// ----------------------------------------------------------------------

export default function ProfilePopover() {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const {
    language: { language, direction },
  } = useSelector((state) => state.setting);
  const { userInfo } = useSelector((state) => state.auth);
  console.log('userInfo', userInfo);
  const { username, roles, firstname, lastname } = userInfo;

  const onOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setOpenDialog(true);
  };

  const onClose = () => {
    setOpenDialog(false);
  };

  const logout = async () => {
    try {
      dispatch(signOut());
      onClose();
    } catch (error) {}
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <IconButton
        color="warning"
        aria-describedby={id}
        onClick={onOpen}
        sx={{
          p: 0,
          width: 41,
          height: 41,
          ...(open && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: (theme) => alpha(theme.palette.primary.main, 0.3),
            },
          }),
        }}
      >
        <Avatar
          alt="profile"
          // src="/assets/images/avatars/avatar_12.jpg"
          sx={{ width: 32, height: 32, objectFit: 'cover' }}
        />
      </IconButton>

      <Menu
        id={id}
        open={open}
        dir={direction}
        onClose={onClose}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Stack p={1}>
          <Typography variant="subtitle1">{username}</Typography>
          <Stack direction="row" columnGap={1} py={1}>
            {roles.map((role) => (
              <Typography
                px={2}
                py={0.5}
                key={role.id}
                fontSize={12}
                borderRadius={3}
                lineHeight={1.5}
                color="error.dark"
                variant="subtitle2"
                bgcolor="error.lighter"
              >
                {role.title}
              </Typography>
            ))}
          </Stack>
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <MenuItem onClick={logout} sx={{ m: 1 }}>
          خروج از سامانه
        </MenuItem>
      </Menu>
    </>
    // <>
    //   <IconButton
    //     color="warning"
    //     aria-describedby={id}
    //     onClick={onOpen}
    //     sx={{
    //       p: 0,
    //       width: 41,
    //       height: 41,
    //       ...(open && {
    //         '&:before': {
    //           zIndex: 1,
    //           content: "''",
    //           width: '100%',
    //           height: '100%',
    //           borderRadius: '50%',
    //           position: 'absolute',
    //           bgcolor: (theme) => alpha(theme.palette.primary.main, 0.3),
    //         },
    //       }),
    //     }}
    //   >
    //     <Avatar
    //       alt="profile"
    //       // src="/assets/images/avatars/avatar_12.jpg"
    //       sx={{ width: 32, height: 32, objectFit: 'cover' }}
    //     />
    //   </IconButton>
    //   <NewDialog open={open}>
    //     <NewDialogTitle title="پروفایل کاربری" onClose={onClose} />

    //     <Stack p={1}>
    //       <Stack direction="row" columnGap={1} py={1}>
    //         {roles.map((role) => (
    //           <Typography
    //             px={2}
    //             py={0.5}
    //             key={role.id}
    //             fontSize={12}
    //             borderRadius={3}
    //             lineHeight={1.5}
    //             color="error.dark"
    //             variant="subtitle2"
    //             bgcolor="error.lighter"
    //           >
    //             {role.title}
    //           </Typography>
    //         ))}
    //       </Stack>
    //     </Stack>
    //     <DialogContent
    //       sx={{
    //         p: 2,
    //         rowGap: 0.5,
    //         minHeight: 200,
    //         display: 'flex',
    //         pb: { xs: 15, sm: 2 },
    //         flexDirection: 'column',
    //         justifyContent: 'flex-start',
    //       }}
    //     >
    //       <Stack rowGap={2} justifyContent="center">
    //         <Stack
    //           p={2}
    //           flex={1}
    //           rowGap={1}
    //           minWidth={220}
    //           borderRadius={3}
    //           bgcolor="#f9f9f9"
    //           alignItems="center"
    //           justifyContent="center"
    //         >
    //           <Typography variant="subtitle1" align="left">
    //             {`${firstname || '-'} ${lastname || '-'}`}
    //           </Typography>
    //           <Typography variant="subtitle1" align="left">
    //             {userInfo?.cellphone}
    //           </Typography>
    //         </Stack>
    //         <Stack bgcolor="f9f9f9" direction="row" columnGap={1}>
    //           <Button
    //             fullWidth
    //             size="large"
    //             color="primary"
    //             variant="contained"
    //             // onClick={() => handleType(1)}
    //             sx={{
    //               borderRadius: 2,
    //             }}
    //           >
    //             ویرایش
    //           </Button>
    //           <Button
    //             fullWidth
    //             size="large"
    //             color="error"
    //             onClick={logout}
    //             sx={{
    //               borderRadius: 2,
    //               bgcolor: 'error.lighter',
    //             }}
    //           >
    //             خروج
    //           </Button>
    //         </Stack>
    //       </Stack>
    //     </DialogContent>
    //   </NewDialog>
    // </>
  );
}
