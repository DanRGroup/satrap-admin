import React, { useEffect, useState } from 'react';

import graph from '../graph';

import Grid from '@mui/material/Unstable_Grid2';

import AppWidgetSummary from '../app-widget-summary';

import { useLazyQuery } from '@apollo/client';
import { useSelector } from 'react-redux';
import { isEmptyObject } from 'helpers/formatObject';

import { useNavigate } from 'react-router-dom';

// ----------------------------------------------------------------------

export default function ModelsCount() {
  const navigate = useNavigate();
  const { userToken } = useSelector((state) => state.auth);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalWorkshops, setTotalWorkshops] = useState(0);
  const [totalSites, setTotalSites] = useState(0);
  const [totalTariffs, setTotalTariffs] = useState(0);

  const [getUsersData] = useLazyQuery(graph.users.query, {
    context: {
      serviceName: graph.users.serviceName,
      headers: {
        authorization: `Bearer ${userToken}`,
      },
    },
  });

  const [getWorkshopsData] = useLazyQuery(graph.workshops.query, {
    context: {
      serviceName: graph.workshops.serviceName,
      headers: {
        authorization: `Bearer ${userToken}`,
      },
    },
  });

  const [getSitesData] = useLazyQuery(graph.sites.query, {
    context: {
      serviceName: graph.sites.serviceName,
      headers: {
        authorization: `Bearer ${userToken}`,
      },
    },
  });

  const [getTariffsData] = useLazyQuery(graph.tariffs.query, {
    context: {
      serviceName: graph.tariffs.serviceName,
      headers: {
        authorization: `Bearer ${userToken}`,
      },
    },
  });

  const handleUserData = async () => {
    try {
      const { data: usersData, usersError } = await getUsersData({});
      if (!isEmptyObject(usersData) && !usersError) {
        const { total } = usersData[graph.users.name];
        setTotalUsers(total);
      }
    } catch (error) {}
  };

  const handleWorkshopData = async () => {
    try {
      const { data: workshopsData, workshopsError } = await getWorkshopsData({});
      if (!isEmptyObject(workshopsData) && !workshopsError) {
        const { total } = workshopsData[graph.workshops.name];
        setTotalWorkshops(total);
      }
    } catch (error) {}
  };

  const handleSitesData = async () => {
    try {
      const { data: sitesData, sitesError } = await getSitesData({});
      if (!isEmptyObject(sitesData) && !sitesError) {
        const { total } = sitesData[graph.sites.name];
        setTotalSites(total);
      }
    } catch (error) {}
  };

  const handleTariffsData = async () => {
    try {
      const { data: tariffsData, tariffsError } = await getTariffsData({});
      if (!isEmptyObject(tariffsData) && !tariffsError) {
        const { total } = tariffsData[graph.tariffs.name];
        setTotalTariffs(total);
      }
    } catch (error) {}
  };

  useEffect(() => {
    handleUserData();
    handleWorkshopData();
    handleSitesData();
    handleTariffsData();
  }, []);

  const userRoute = () => navigate('/dashboard/users');
  const siteRoute = () => navigate('/dashboard/sites');
  const workshopRoute = () => navigate('/dashboard/workshop');
  const tariffRoute = () => navigate('/dashboard/tarrif');

  return (
    <>
      <Grid xs={12} sm={6} md={3} onClick={userRoute}>
        <AppWidgetSummary
          title="کاربران"
          total={totalUsers}
          color="success"
          icon={<img alt="icon" src="/assets/icons/glass/patients.png" />}
        />
      </Grid>

      <Grid xs={12} sm={6} md={3} onClick={siteRoute}>
        <AppWidgetSummary
          title="محل‌ها"
          total={totalSites}
          color="info"
          icon={<img alt="icon" src="/assets/icons/glass/clinics.png" />}
        />
      </Grid>

      <Grid xs={12} sm={6} md={3} onClick={workshopRoute}>
        <AppWidgetSummary
          title="کارگاه‌ها"
          total={totalWorkshops}
          color="warning"
          // url="/orders/new"
          icon={<img alt="icon" src="/assets/icons/glass/orders.png" />}
        />
      </Grid>

      <Grid xs={12} sm={6} md={3} onClick={tariffRoute}>
        <AppWidgetSummary
          title="تعرفه‌ها"
          total={totalTariffs}
          color="error"
          icon={<img alt="icon" src="/assets/icons/glass/doctors.png" />}
        />
      </Grid>
    </>
  );
}
