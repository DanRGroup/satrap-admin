import { Box } from '@mui/material';
import { TourProvider } from 'providers';
import { Outlet } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import graph from './graph';

import { setModels } from 'toolkits/redux/models';
import { useDispatch, useSelector } from 'react-redux';
import { isEmptyObject } from 'helpers/formatObject';
import { useLazyQuery } from '@apollo/client';

import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default function DashboardLayout() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [result, setResult] = useState({});
  const { userToken } = useSelector((state) => state.auth);
  const { models } = useSelector((state) => state.models);

  const [getData, { loading }] = useLazyQuery(graph.list.query, {
    context: {
      serviceName: graph.list.serviceName,
      headers: {
        authorization: `Bearer ${userToken}`,
      },
    },
  });

  // const handleData = async () => {
  //   try {
  //     const { data: types, error } = await getData();
  //     if (!isEmptyObject(types) && !error) {
  //       const res = types[graph.list.name];
  //       // setResult(res);
  //       dispatch(setModels({ contractTypes: res }));
  //     }
  //   } catch (error) {}
  // };

  // useEffect(() => {
  //   handleData();
  // }, []);

  // console.log('res', result);

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
