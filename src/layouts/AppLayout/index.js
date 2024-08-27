import { Box } from '@mui/material';
import { TourProvider } from 'providers';
import { Outlet } from 'react-router-dom';
import { useState, Suspense, useEffect } from 'react';

import Navbar from './Navbar';
import Sidebar from './Sidebar';

import { setModels, fetchContractTypes } from 'toolkits/redux/models';
import { useDispatch, useSelector } from 'react-redux';

export default function DashboardLayout() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const setRedux = () => {
    // dispatch(setModels({ test: [{ const: '1', title: 'test' }] }));
    dispatch(fetchContractTypes());
    console.log('Set Test');
  };

  const models = useSelector((state) => state.models);
  console.log(models);
  useEffect(() => {
    setRedux();
  }, []);
  return (
    <>
      <TourProvider>
        <Navbar onOpenSidebar={() => setOpen(true)} />
        <Sidebar isOpenSidebar={open} onCloseSidebar={() => setOpen(false)} />
        <Box
          sx={{
            px: 1,
            pt: 10,
            pl: {
              xs: 0,
              lg: 41,
            },
            flexGrow: 1,
            minHeight: 'calc(100vh)',
            bgcolor: 'transparent',
          }}
        >
          <Suspense>
            <Outlet />
          </Suspense>
        </Box>
      </TourProvider>
    </>
  );
}
