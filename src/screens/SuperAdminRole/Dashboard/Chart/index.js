import React from 'react';

import { faker } from '@faker-js/faker';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

import ModelsCount from './ModelsCount';
import ServiceChart from './ServiceChart';
import TonnageChart from './TonnageChart';

import AppNewsUpdate from './app-news-update';
import AppCurrentVisits from './app-current-visits';
import AppCurrentSubject from './app-current-subject';
import AppConversionRates from './app-conversion-rates';

// ----------------------------------------------------------------------

export default function AppView() {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={3}>
        <ModelsCount />
        <ServiceChart />
        <TonnageChart />
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
