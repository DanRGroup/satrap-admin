import React, { useEffect, useState } from 'react';
import { Box, Grid, Stack, Button, styled, Typography } from '@mui/material';

import { useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { cleanData } from 'helpers/formatObject';

import Confirm from './Confirm';
import ViewOrder from './ViewOrder';
import TypeSelection from './TypeSelection';
import ToothSelection from './ToothSelection';
import DoctorSelection from './DoctorSelection';
import PatientSelection from './PatientSelection';

import Step from '@mui/material/Step';
import Stepper from '@mui/material/Stepper';
import StepLabel from '@mui/material/StepLabel';

import Check from '@mui/icons-material/Check';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import LabSelection from './LabSelection';
import MediaUploader from './MediaUploader';

const steps = ['انتخاب بیمار', 'انتخاب دندان', 'انتخاب پزشک', 'تایید نهایی'];

export default function FixedOrderCreation({ id }) {
  const [orderId, setOrderId] = useState(id);
  const [formData, setFormData] = useState({});
  const [formInfo, setFormInfo] = useState({});
  const [activeStep, setActiveStep] = useState(0);

  const {
    language: { direction },
  } = useSelector((state) => state.setting);
  const isFinalStep = activeStep === 2;

  const handleNext = () => {
    return setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const onChange = ({ formData, next = true }) => {
    setFormData((prev) => cleanData({ ...prev, ...formData }));
    next && handleNext();
  };

  const onChangeInfo = ({ formData, next = true }) => {
    setFormInfo((prev) => cleanData({ ...prev, ...formData }));
    next && handleNext();
  };

  // useEffect(() => {
  //   console.log('formData', formData);
  // }, [formData]);

  return (
    <Stack sx={{ minHeight: 'calc(100vh - 80px)', direction: 'ltr' }}>
      {/* <Typography variant="subtitle1">{steps[activeStep - 1]}</Typography> */}
      {orderId ? (
        <Stack flexGrow={1} rowGap={1} pb={1}>
          <ViewOrder id={orderId} />
        </Stack>
      ) : (
        <Steps
          step={activeStep}
          formData={formData}
          formInfo={formInfo}
          onChange={onChange}
          onChangeInfo={onChangeInfo}
        />
      )}
      {activeStep !== 3 && (
        <Stack
          p={1}
          bottom={8}
          borderRadius={2}
          position="sticky"
          sx={{ direction: 'ltr' }}
          justifyContent="center"
          bgcolor="background.paper"
        >
          <Stack
            alignItems="center"
            justifyContent="space-between"
            direction={direction === 'rtl' ? 'row-reverse' : 'row'}
          >
            {isFinalStep ? (
              <Confirm formData={formData} onChange={onChange} setOrderId={setOrderId} handleNext={handleNext} />
            ) : (
              <Button
                autoFocus
                size="large"
                color="warning"
                variant="contained"
                sx={{ minWidth: 80 }}
                onClick={handleNext}
              >
                <FormattedMessage id="next" />
              </Button>
            )}

            <Stepper sx={{ width: '100%' }} alternativeLabel activeStep={activeStep} connector={<QontoConnector />}>
              {steps.map((step) => {
                return (
                  <Step key={step}>
                    <StepLabel StepIconComponent={QontoStepIcon} />
                  </Step>
                );
              })}
            </Stepper>

            <Button
              size="large"
              color="warning"
              variant="outlined"
              sx={{ minWidth: 80 }}
              onClick={handleBack}
              disabled={!activeStep}
            >
              <FormattedMessage id="back" />
            </Button>
          </Stack>
        </Stack>
      )}
    </Stack>
  );
}

const Steps = ({ step, formData, formInfo, onChange, onChangeInfo }) => {
  const onTypeSelection = (data) => {
    onChange({
      formData: { modified: formData?.modified ? formData?.modified.concat(data) : data },
      next: false,
    });
  };
  switch (step) {
    case 0:
      return (
        <Box flexGrow={1}>
          <PatientSelection patient={formData?.patient} onChange={onChange} />
        </Box>
      );
    case 1:
      return (
        <Stack flexGrow={1} direction={{ xs: 'column-reverse', sm: 'row' }} alignItems="center" columnGap={1} p={2}>
          <Grid flex={3} container>
            {types.map((x, i) => (
              <Grid key={i} p={0.5} item xs={6} sm={6} md={4} lg={4} xl={4}>
                <TypeSelection
                  type={x.alias}
                  title={x.title}
                  image={x.image}
                  color={x.color}
                  teeth={formData?.teeth}
                  onSubmit={onTypeSelection}
                />
              </Grid>
            ))}
          </Grid>
          <Box flex={2}>
            <ToothSelection modified={formData?.modified} teeth={formData?.teeth} onChange={onChange} />
          </Box>
        </Stack>
      );
    case 2:
      return (
        <Box flexGrow={1}>
          <DoctorSelection doctor={formData?.doctor} onChange={onChange} />
        </Box>
      );
    // case 2:
    //   return (
    //     <Box flexGrow={1}>
    //       <LabSelection formData={formInfo} onChange={onChangeInfo} />;
    //     </Box>
    //   );
    default:
      return (
        <Stack flexGrow={1} justifyContent="center" alignItems="center">
          <Typography variant="subtitle1" color="error">
            خطای ناشناخته
          </Typography>
        </Stack>
      );
  }
};

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.primary.main,
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.primary.main,
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
  display: 'flex',
  height: 22,
  alignItems: 'center',
  ...(ownerState.active && {
    color: theme.palette.primary.main,
  }),
  '& .QontoStepIcon-completedIcon': {
    color: theme.palette.primary.main,
    zIndex: 1,
    fontSize: 18,
  },
  '& .QontoStepIcon-circle': {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? <Check className="QontoStepIcon-completedIcon" /> : <div className="QontoStepIcon-circle" />}
    </QontoStepIconRoot>
  );
}

const types = [
  {
    id: 1,
    color: 'red',
    alias: 'implant',
    title: 'Implant',
    image: '/assets/images/fixed/implant.webp',
  },
  {
    id: 2,
    color: 'blue',
    alias: 'crown',
    title: 'Crown',
    image: '/assets/images/fixed/crown.jpg',
  },
  {
    id: 3,
    color: 'green',
    alias: 'bridge',
    title: 'Bridge',
    image: '/assets/images/fixed/bridge.jpg',
  },
  {
    id: 4,
    color: 'yellow',
    alias: 'laminate',
    title: 'Laminate',
    image: '/assets/images/fixed/laminate.png',
  },
  {
    id: 5,
    color: 'orange',
    alias: 'postCore',
    title: 'Post & Core',
    image: '/assets/images/fixed/post-core.JPG',
  },
  {
    id: 6,
    color: 'black',
    alias: 'temporary',
    title: 'Temporary',
    image: '/assets/images/fixed/temporary.webp',
  },
  {
    id: 7,
    color: 'brown',
    alias: 'inlayOnlay',
    title: 'Inlay / Onlay',
    image: '/assets/images/fixed/inlay-onlay.png',
  },
  {
    id: 8,
    color: 'teal',
    alias: 'diagnosticWaxUp',
    title: 'Diagnostic Wax-Up',
    image: '/assets/images/fixed/waxup.jpg',
  },
];
