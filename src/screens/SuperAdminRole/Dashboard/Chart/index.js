import React, { useEffect, useState } from 'react';

import { faker } from '@faker-js/faker';
import graph from './graph';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import Iconify from './iconify';

import AppTasks from './app-tasks';
import AppNewsUpdate from './app-news-update';
import AppOrderTimeline from './app-order-timeline';
import AppCurrentVisits from './app-current-visits';
import AppWebsiteVisits from './app-website-visits';
import AppWidgetSummary from './app-widget-summary';
import AppTrafficBySite from './app-traffic-by-site';
import AppCurrentSubject from './app-current-subject';
import AppConversionRates from './app-conversion-rates';

import { useLazyQuery } from '@apollo/client';
import { useSelector } from 'react-redux';
import { isEmptyObject } from 'helpers/formatObject';
import { groupBy } from 'utils/formArray';

// ----------------------------------------------------------------------

export default function AppView() {
  const { userToken } = useSelector((state) => state.auth);
  const [data, setData] = useState([]);
  const [labels, setLabels] = useState([]);

  let grouped = {};

  const [getData, { loading }] = useLazyQuery(graph.list.query, {
    context: {
      serviceName: graph.list.serviceName,
      headers: {
        authorization: `Bearer ${userToken}`,
      },
    },
  });

  const handleData = async () => {
    try {
      const { data, error } = await getData({
        variables: {
          type_ids: '1',
        },
      });
      if (!isEmptyObject(data) && !error) {
        const { records } = data[graph.list.name];
        records.forEach((item) => {
          item.end_time = item.end_time.split(' ')[0];
        });
        grouped = groupBy(records, 'end_time');
        const keys = Object.keys(grouped);
        const vals = Object.values(grouped).map((x) => x.length);
        setLabels(keys.reverse());
        setData(vals.reverse());
      }
    } catch (error) {}
  };

  useEffect(() => {
    handleData();
  }, []);

  // console.log('lables', lables);
  return (
    <Container maxWidth="xl">
      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="رانندگان"
            total={7140}
            color="success"
            icon={<img alt="icon" src="/assets/icons/glass/patients.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="محل‌ها"
            total={135}
            color="info"
            icon={<img alt="icon" src="/assets/icons/glass/clinics.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="کارگاه‌ها"
            total={1725}
            color="warning"
            url="/orders/new"
            icon={<img alt="icon" src="/assets/icons/glass/orders.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="کاربران"
            total={234}
            color="error"
            icon={<img alt="icon" src="/assets/icons/glass/doctors.png" />}
          />
        </Grid>

        <Grid xs={12} md={6} lg={6}>
          {labels.length > 0 && (
            <AppWebsiteVisits
              title="نمودار فعالیت حمل بار کارگاه‌ها"
              subheader="ده روز گذشته"
              chart={{
                labels: labels,
                series: [
                  {
                    name: 'تعداد',
                    type: 'column',
                    fill: 'solid',
                    data: data,
                  },
                  {
                    name: 'پیشرفت',
                    type: 'area',
                    fill: 'gradient',
                    color: '#00b8d9',
                    data: data,
                  },
                ],
              }}
            />
          )}
        </Grid>

        <Grid xs={12} md={6} lg={6}>
          {labels.length > 0 && (
            <AppWebsiteVisits
              title="نمودار فعالیت حمل بار کارگاه‌ها"
              subheader="ده روز گذشته"
              chart={{
                labels: labels,
                series: [
                  {
                    name: 'تعداد',
                    type: 'column',
                    fill: 'solid',
                    data: data,
                  },
                  {
                    name: 'پیشرفت',
                    type: 'area',
                    fill: 'gradient',
                    color: '#00b8d9',
                    data: data,
                  },
                ],
              }}
            />
          )}
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppCurrentVisits
            title="نمودار پراکندگی حمل و نقل"
            chart={{
              series: [
                { label: 'رانندگان', value: 4344 },
                { label: 'کاربران', value: 2378 },
                { label: 'مدیران', value: 5348 },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppConversionRates
            title="آمار فعالیت محل‌ها"
            subheader="یک هفته گذشته"
            chart={{
              series: [
                { label: 'محل ۱', value: 400 },
                { label: 'محل ۲', value: 430 },
                { label: 'محل ۳', value: 448 },
                { label: 'محل ۴', value: 470 },
                { label: 'محل ۵', value: 540 },
                { label: 'محل ۶', value: 580 },
                { label: 'محل ۷', value: 690 },
                { label: 'محل ۸', value: 1100 },
                { label: 'محل ۹', value: 1200 },
                { label: 'محل ۱۰', value: 1380 },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppCurrentSubject
            title="آمار فعالیت معادن"
            chart={{
              categories: ['معدن ۱', 'معدن ۲', 'معدن ۳', 'معدن ۴', 'معدن ۵', 'معدن ۶'],
              series: [
                { name: 'مدیر', data: [80, 50, 30, 40, 100, 20] },
                { name: 'کاربر', data: [20, 30, 40, 80, 20, 80] },
                { name: 'راننده', data: [44, 76, 78, 13, 43, 10] },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppNewsUpdate
            title="أخرین فعالیت ها"
            list={[...Array(5)].map((_, index) => ({
              id: faker.string.uuid(),
              title: faker.person.zodiacSign(),
              description: faker.commerce.productDescription(),
              image: `/assets/images/covers/cover_${index + 1}.jpg`,
              postedAt: faker.date.recent(),
            }))}
          />
        </Grid>

        {/* <Grid xs={12} md={6} lg={4}>
          <AppOrderTimeline
            title="اطلاعیه ها"
            list={[...Array(5)].map((_, index) => ({
              id: faker.string.uuid(),
              title: ['بروزرسانی', 'قرارداد جدید', 'ثبت مکان جدید', 'همکاری با سازمان ها', 'راننده جدید'][index],
              type: `order${index + 1}`,
              time: faker.date.past(),
            }))}
          />
        </Grid> */}

        {/* <Grid xs={12} md={6} lg={4}>
          <AppTrafficBySite
            title="Traffic by Site"
            list={[
              {
                name: 'FaceBook',
                value: 323234,
                icon: <Iconify icon="eva:facebook-fill" color="#1877F2" width={32} />,
              },
              {
                name: 'Google',
                value: 341212,
                icon: <Iconify icon="eva:google-fill" color="#DF3E30" width={32} />,
              },
              {
                name: 'Linkedin',
                value: 411213,
                icon: <Iconify icon="eva:linkedin-fill" color="#006097" width={32} />,
              },
              {
                name: 'Twitter',
                value: 443232,
                icon: <Iconify icon="eva:twitter-fill" color="#1C9CEA" width={32} />,
              },
            ]}
          />
        </Grid> */}

        {/* <Grid xs={12} md={6} lg={8}>
          <AppTasks
            title="Tasks"
            list={[
              { id: '1', name: 'Create FireStone Logo' },
              { id: '2', name: 'Add SCSS and JS files if required' },
              { id: '3', name: 'Stakeholder Meeting' },
              { id: '4', name: 'Scoping & Estimations' },
              { id: '5', name: 'Sprint Showcase' },
            ]}
          />
        </Grid> */}
      </Grid>
    </Container>
  );
}
