import graph from './graph';
import React, { useEffect, useState } from 'react';
import {
  Box,
  Card,
  Slide,
  Stack,
  Button,
  styled,
  CardMedia,
  CardHeader,
  Typography,
  CardActionArea,
  CircularProgress,
} from '@mui/material';

import { removeNulls, cleanData, cleanData2 } from 'helpers/formatObject';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { useMutation } from '@apollo/client';
import { FormattedMessage } from 'react-intl';
import { isEmptyObject } from 'helpers/formatObject';
import { NewDialog, NewDialogActions, NewDialogContent, NewDialogTitle } from 'components';

import Confirm from './Confirm';
import DetailsForm from './DetailsForm';
import LabSelection from './LabSelection';
import ToothSelection from './ToothSelection';
import ActionSelection from './ActionSelection';
import DoctorSelection from './DoctorSelection';
import PatientSelection from './PatientSelection';

import MediaUploader from './MediaUploader';

import Step from '@mui/material/Step';
import Stepper from '@mui/material/Stepper';
import StepLabel from '@mui/material/StepLabel';

import Check from '@mui/icons-material/Check';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';

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

const steps = [
  'انتخاب بیمار',
  'انتخاب دندان',
  'جزییات سفارش',
  'جزییات اضافی',
  'انتخاب لابراتوار',
  'انتخاب پزشک',
  'تایید نهایی',
  'ثبت',
];

export default function FixedOrderCreation({ orderType = 'fixed' }) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({});
  const [formInfo, setFormInfo] = useState({});
  const [activeStep, setActiveStep] = useState(1);
  const { userToken } = useSelector((state) => state.auth);
  const {
    language: { direction },
  } = useSelector((state) => state.setting);
  const isFinalStep = activeStep === 7;

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  const onSubmit = async () => {
    // console.log('actions', Object.values(formData).map(x => Object.values(x)[0]?.title));
    try {
      const { patient, doctor, lab, teeth, extra } = formInfo;
      const { data, errors } = await formUpdate({
        variables: {
          lab_id: lab?.id,
          tooth_numbers: teeth,
          user_id: patient?.id,
          doctor_id: doctor?.id,
          technical_informations: JSON.stringify(formData),
          // call_me,
          // unit_id: '1',
          // description,
          // action_ids: actions.map((x) => x.id),
        },
      });
      if (!errors) {
        if (!isEmptyObject(data)) {
          data[graph.create.name]?.messages.map((message) => toast.success(String(message)));
        }
        setActiveStep(1);
        setFormData({});
        setFormInfo({});
        onClose();
      }
    } catch (error) {
      setFormData(formData);
      setFormInfo(formInfo);
    }
  };

  const handleNext = () => {
    if (isFinalStep) {
      return onSubmit();
    }
    return setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const [formUpdate, { loading }] = useMutation(graph.create.query, {
    context: {
      serviceName: graph.create.serviceName,
      headers: {
        authorization: `Bearer ${userToken}`,
      },
    },
  });

  const onChange = ({ formData, next = true }) => {
    setFormData((prev) => cleanData({ ...prev, ...formData }));
    next && handleNext();
  };

  const onChangeInfo = ({ formData, next = true }) => {
    setFormInfo((prev) => cleanData({ ...prev, ...formData }));
    next && handleNext();
  };

  // useEffect(() => {
  //   console.log('formInfo', formInfo);
  // }, [formInfo]);

  return (
    <>
      <Card variant="outlined" sx={{ width: '100%' }}>
        <CardActionArea onClick={onOpen}>
          <CardMedia alt="Fixed" image="/assets/images/fixed.jpg" sx={{ pt: '70%', m: 1, borderRadius: 2 }} />
          <CardHeader
            title="Fixed Order"
            subheader={
              <Typography variant="subtitle2" fontSize={14} color="text.disabled">
                Fixed Order Description
              </Typography>
            }
          />
        </CardActionArea>
      </Card>
      <NewDialog open={open} onClose={onClose} maxWidth="xl">
        <NewDialogTitle title={<Typography variant="subtitle1">{steps[activeStep - 1]}</Typography>} onClose={onClose}/>
        <NewDialogContent>
          <Box height={700}>
            <Steps
              step={activeStep}
              formData={formData}
              formInfo={formInfo}
              onChange={onChange}
              onChangeInfo={onChangeInfo}
            />
          </Box>
        </NewDialogContent>
        <NewDialogActions>
          <Stack width="100%">
            <Stack justifyContent="center" pb={1}>
              <Stepper alternativeLabel activeStep={activeStep} connector={<QontoConnector />}>
                {steps.map((step) => {
                  return (
                    <Step key={step}>
                      <StepLabel StepIconComponent={QontoStepIcon} />
                    </Step>
                  );
                })}
              </Stepper>
            </Stack>
            <Stack
              alignItems="center"
              justifyContent="space-between"
              direction={direction === 'rtl' ? 'row-reverse' : 'row'}
            >
              <Button
                sx={{ minWidth: 80 }}
                autoFocus
                size="large"
                variant="contained"
                // disabled={loading || !formData.doctor || !formData.lab}
                onClick={handleNext}
                color={isFinalStep ? 'primary' : 'warning'}
              >
                {loading ? (
                  <CircularProgress color="inherit" size={24} />
                ) : (
                  <FormattedMessage id={isFinalStep ? 'ok' : 'next'} />
                )}
              </Button>

              <Button disabled={activeStep === 1} size="large" color="warning" variant="outlined" onClick={handleBack}>
                <FormattedMessage id="back" />
              </Button>
            </Stack>
          </Stack>
        </NewDialogActions>
      </NewDialog>
    </>
  );
}

const Steps = ({ step, formData, formInfo, onChange, onChangeInfo }) => {
  switch (step) {
    case 1:
      return <PatientSelection patient={formInfo?.patient} onChange={onChangeInfo} />;
    case 2:
      return (
        <Stack rowGap={2} p={2}>
          <ToothSelection formData={formInfo} onChange={onChangeInfo} />
        </Stack>
      );
    case 3:
      return (
        <Stack rowGap={2} p={1}>
          <Slide in>
            <Typography variant="h4">Case Instructions Selection</Typography>
          </Slide>
          <ActionSelection section="restoration" data={restoration} formData={formData} onChange={onChange} isActive />
          {(!formData?.instructions || Object.keys(formData?.instructions).includes('fullMetal')) && (
            <ActionSelection section="instructions" data={fullMetal} formData={formData} onChange={onChange} isActive />
          )}
          {(!formData?.instructions || Object.keys(formData?.instructions).includes('fullCeramic')) && (
            <ActionSelection
              section="instructions"
              data={fullCeramic}
              formData={formData}
              onChange={onChange}
              isActive
            />
          )}
          {(!formData?.instructions || Object.keys(formData?.instructions).includes('pfm')) && (
            <ActionSelection section="instructions" data={pfm} formData={formData} onChange={onChange} isActive />
          )}
          <ActionSelection
            section="pfmMarginDesign"
            data={pfmMarginDesign}
            formData={formData}
            onChange={onChange}
            isActive={formData?.instructions && Object.keys(formData?.instructions).includes('pfm')}
          />
          <ActionSelection
            section="ponticDesignValue"
            data={ponticDesign}
            formData={formData}
            onChange={onChange}
            isActive={formData?.instructions}
          />
          <ActionSelection
            section="translucencyValue"
            data={translucency}
            formData={formData}
            onChange={onChange}
            isActive={formData?.instructions}
          />
          <ActionSelection
            section="occlusalValue"
            data={occlusalContact}
            formData={formData}
            onChange={onChange}
            isActive={formData?.instructions}
          />
          <ActionSelection
            section="contactValue"
            data={interproximalContact}
            formData={formData}
            onChange={onChange}
            isActive={formData?.instructions}
          />
          <ActionSelection
            section="shadeGuideStandard"
            data={shadeGuide}
            formData={formData}
            onChange={onChange}
            isActive
            // isActive={formData?.shadeValue}
          />

          <ActionSelection
            section="vitaClassic"
            data={vitaClassic}
            formData={formData}
            onChange={onChange}
            isActive={
              formData?.shadeGuideStandard &&
              Object.values(formData?.shadeGuideStandard?.shadeGuide).includes('vitaClassic')
            }
          />
          <ActionSelection
            section="vita3DMaster"
            data={vita3DMaster}
            formData={formData}
            onChange={onChange}
            isActive={
              formData?.shadeGuideStandard &&
              Object.values(formData?.shadeGuideStandard?.shadeGuide).includes('vita3DMaster')
            }
          />

          {/* Stump Shade */}
          <ActionSelection
            section="stumpShadeVitaClassic"
            data={stumpVitaClassic}
            formData={formData}
            onChange={onChange}
            isActive={
              formData?.shadeGuideStandard &&
              Object.values(formData?.shadeGuideStandard?.shadeGuide).includes('vitaClassic')
            }
          />
          <ActionSelection
            section="stumpVita3DMaster"
            data={stumpVita3DMaster}
            formData={formData}
            onChange={onChange}
            isActive={
              formData?.shadeGuideStandard &&
              Object.values(formData?.shadeGuideStandard?.shadeGuide).includes('vita3DMaster')
            }
          />

          <ActionSelection
            section="shadeValue"
            data={pinkShade}
            formData={formData}
            onChange={onChange}
            isActive={formData?.instructions}
          />
          <ActionSelection
            section="implantCementRetained"
            data={implantCementRetained}
            formData={formData}
            onChange={onChange}
            isActive
          />
          <ActionSelection
            section="screwRetained"
            data={screwRetained}
            formData={formData}
            onChange={onChange}
            isActive={
              formData?.implantCementRetained &&
              Object.values(formData?.implantCementRetained?.implantCementRetained).includes('screwRetained')
            }
          />
          <ActionSelection
            section="emergenceCrownProfile"
            data={emergenceCrownProfile}
            formData={formData}
            onChange={onChange}
            isActive={formData?.implantCementRetained}
          />
          <ActionSelection
            section="abutmentType"
            data={abutmentType}
            formData={formData}
            onChange={onChange}
            isActive
          />
          <ActionSelection
            section="emergenceAbutmentProfile"
            data={emergenceAbutmentProfile}
            formData={formData}
            onChange={onChange}
            isActive={formData?.abutmentType}
          />
        </Stack>
      );
    case 4:
      return (
        <Stack rowGap={2} p={3}>
          <Stack direction="row" flexWrap='wrap' justifyContent="space-between">
            <MediaUploader model={'model'} modelId={'id'} refetch={'refetch'} />
            <MediaUploader model={'model'} modelId={'id'} refetch={'refetch'} />
            <MediaUploader model={'model'} modelId={'id'} refetch={'refetch'} />
            <MediaUploader model={'model'} modelId={'id'} refetch={'refetch'} />
          </Stack>
          <Slide in>
            <Typography variant="h4">Implant Information</Typography>
          </Slide>
          <DetailsForm formData={formInfo?.extra} onChange={onChangeInfo} />
        </Stack>
      );
    case 5:
      return <LabSelection formData={formInfo} onChange={onChangeInfo} />;
    case 6:
      return <DoctorSelection doctor={formInfo?.doctor} onChange={onChangeInfo} />;
    default:
      return <Confirm formData={formData} formInfo={formInfo} />;
  }
  // switch (step) {
  //   case 3:
  //     return <InformationForm formData={formData} onChange={onChange} />;
  // case 4:
  //   return <ToothSelection formData={formData} onChange={onChange} />;
  //   default:
  //     return <Confirm formData={formData} />;
  // }
};

const restoration = [
  {
    alias: 'restoration',
    title: 'Restoration Type',
    children: [
      {
        id: 1,
        alias: 'implant',
        title: 'Implant',
        image: '/assets/images/fixed/implant.webp',
      },
      {
        id: 2,
        alias: 'crown',
        title: 'Crown',
        image: '/assets/images/fixed/crown.jpg',
      },
      {
        id: 3,
        alias: 'bridge',
        title: 'Bridge',
        image: '/assets/images/fixed/bridge.jpg',
      },
      {
        id: 4,
        alias: 'laminate',
        title: 'Laminate',
        image: '/assets/images/fixed/laminate.png',
      },
      {
        id: 5,
        alias: 'postCore',
        title: 'Post & Core',
        image: '/assets/images/fixed/post-core.JPG',
      },
      {
        id: 6,
        alias: 'temporary',
        title: 'Temporary',
        image: '/assets/images/fixed/temporary.webp',
      },
      {
        id: 7,
        alias: 'inlayOnlay',
        title: 'Inlay / Onlay',
        image: '/assets/images/fixed/inlay-onlay.png',
      },
      {
        id: 8,
        alias: 'diagnosticWaxUp',
        title: 'Diagnostic Wax-Up',
        image: '/assets/images/fixed/waxup.jpg',
      },
    ],
  },
];

const fullMetal = [
  {
    alias: 'fullMetal',
    title: 'Full Metal',
    image: '/assets/images/fixed/full-metal.jpg',
    description:
      'Full Metal crown is a full crown covering all axial surfaces of the tooth as well as the occlusal surface and made of metal. It is one of the most commonly indicated crown restorations for posterior teeth.',
    children: [
      {
        id: 12,
        alias: 'whiteHN',
        title: 'whiteHN',
        image: '/assets/images/picture.png',
      },
      {
        id: 13,
        alias: 'yellowHNGold',
        title: 'Yellow HN Gold',
        image: '/assets/images/picture.png',
      },
      {
        id: 14,
        alias: 'semoPrecious',
        title: 'Semo Precious',
        image: '/assets/images/picture.png',
      },
      {
        id: 15,
        alias: 'nonePrecious',
        title: 'None Precious',
        image: '/assets/images/picture.png',
      },
    ],
  },
];

const fullCeramic = [
  {
    id: 22,
    alias: 'fullCeramic',
    title: 'Full Ceramic',
    image: '/assets/images/fixed/full-ceramic.jpg',
    description:
      'Full Ceramic crowns are an ideal alternative to standard porcelain crowns faced with porcelain . They do not contain metal substructures, so it is possible to obtain optimal depth and translucent perfectly imitating a natural, healthy tooth.',
    children: [
      {
        id: 22,
        alias: 'zirconiaSolid',
        title: 'Zirconia Solid',
        image: '/assets/images/picture.png',
      },
      {
        id: 22,
        alias: 'zirconiaLayered',
        title: 'Zirconia Layered',
        image: '/assets/images/picture.png',
      },
      {
        id: 22,
        alias: 'lithiumDisilicate',
        title: 'Lithium Disilicate',
        image: '/assets/images/picture.png',
      },
      {
        id: 22,
        alias: 'composite',
        title: 'Composite',
        image: '/assets/images/picture.png',
      },
      {
        id: 22,
        alias: 'emaxPress',
        title: 'Emax Press',
        image: '/assets/images/picture.png',
      },
      {
        id: 22,
        alias: 'emaxCAD',
        title: 'Emax CAD',
        image: '/assets/images/picture.png',
      },
    ],
  },
];

const pfm = [
  {
    id: 22,
    alias: 'pfm',
    title: 'PFM',
    image: '/assets/images/fixed/pfm.png',
    description:
      'Porcelain Fused to Metal (PFM) crowns have been considered the gold standard for the repair of damaged teeth. PFM crowns have good mechanical properties, satisfactory esthetic results, and an acceptable biological quality needed for periodontal health.',
    children: [
      {
        id: 22,
        alias: 'whiteHN',
        title: 'White HN',
        image: '/assets/images/picture.png',
      },
      {
        id: 22,
        alias: 'semoPrecious',
        title: 'Semo Precious',
        image: '/assets/images/picture.png',
      },
      {
        id: 22,
        alias: 'nonePrecious',
        title: 'None Precious',
        image: '/assets/images/picture.png',
      },
    ],
  },
];

const pfmMarginDesign = [
  {
    id: 22,
    alias: 'pfmMarginDesign',
    title: 'PFM Margin Design',
    children: [
      {
        id: 22,
        alias: '1',
        title: 'Show No Metal 360^',
      },
      {
        id: 22,
        alias: '2',
        title: 'All Porcelain',
      },
      {
        id: 22,
        alias: '3',
        title: 'Metal Colar 360^',
      },
      {
        id: 22,
        alias: '4',
        title: 'Facial Porcelain',
      },
      {
        id: 22,
        alias: '5',
        title: 'Lingual Metal Colar',
      },
      {
        id: 22,
        alias: '6',
        title: 'Metal Lingual',
      },
      {
        id: 22,
        alias: '7',
        title: 'Metal Occlusal',
      },
    ],
  },
];

const occlusalContact = [
  {
    id: 22,
    alias: 'occlusalContact',
    title: 'Occlusal Contact',
    children: [
      {
        id: 22,
        alias: 'light',
        title: 'Light',
      },
      {
        id: 22,
        alias: 'open',
        title: 'Open',
      },
      {
        id: 22,
        alias: 'tight',
        title: 'Tight',
      },
    ],
  },
];

const interproximalContact = [
  {
    id: 22,
    alias: 'interproximalContact',
    title: 'Interproximal Contact',
    children: [
      {
        id: 22,
        alias: 'light',
        title: 'Light',
      },
      {
        id: 22,
        alias: 'medium',
        title: 'Medium',
      },
      {
        id: 22,
        alias: 'heavy',
        title: 'heavy',
      },
    ],
  },
];

const translucency = [
  {
    id: 22,
    alias: 'translucency',
    title: 'Translucency',
    children: [
      {
        id: 22,
        alias: 'yes',
        title: 'Yes',
      },
      {
        id: 22,
        alias: 'no',
        title: 'No',
      },
    ],
  },
];

const ponticDesign = [
  {
    id: 22,
    alias: 'ponticDesign',
    title: 'Pontic Design',
    children: [
      {
        id: 22,
        alias: 'P1',
        title: 'P1 Sanitary',
      },
      {
        id: 22,
        alias: 'P2',
        title: 'P2 Conical',
      },
      {
        id: 22,
        alias: 'P3',
        title: 'P3 Ovate',
      },
      {
        id: 22,
        alias: 'P4',
        title: 'P4 Modified Ridge-Lap',
      },
      {
        id: 22,
        alias: '5',
        title: '5 Full Ridge-Lap',
      },
    ],
  },
];

const pinkShade = [
  {
    id: 22,
    alias: 'pinkShade',
    title: 'Pink Tissue Shade',
    children: [
      {
        id: 22,
        alias: 'light',
        title: 'Light',
      },
      {
        id: 22,
        alias: 'medium',
        title: 'Medium',
      },
      {
        id: 22,
        alias: 'high',
        title: 'High',
      },
      {
        id: 22,
        alias: 'no',
        title: 'No',
      },
    ],
  },
];

const shadeGuide = [
  {
    id: 22,
    alias: 'shadeGuide',
    title: 'Shade Guide',
    children: [
      {
        id: 22,
        alias: 'vitaClassic',
        title: 'Vita Classic',
      },
      {
        id: 22,
        alias: 'vita3DMaster',
        title: 'Vita 3D Master',
      },
    ],
  },
];

const vitaClassic = [
  {
    id: 22,
    alias: 'vitaClassic',
    title: 'Tooth Shade',
    description: 'Vita Classic Shade Guide',
    children: [
      {
        id: 22,
        alias: 'A1',
        title: 'A1',
        bgcolor: 'rgb(240 240 240)',
      },
      {
        id: 22,
        alias: 'A2',
        title: 'A2',
        bgcolor: 'rgb(230 230 230)',
      },
      {
        id: 22,
        alias: 'A3',
        title: 'A3',
        bgcolor: 'rgb(220 220 220)',
      },
      {
        id: 22,
        alias: 'A3.5',
        title: 'A3.5',
        bgcolor: 'rgb(210 210 210)',
      },
      {
        id: 22,
        alias: 'A4',
        title: 'A4',
        bgcolor: 'rgb(200 200 200)',
      },
      {
        id: 22,
        alias: 'B1',
        title: 'B1',
        bgcolor: 'rgb(250 250 240)',
      },
      {
        id: 22,
        alias: 'B2',
        title: 'B2',
        bgcolor: 'rgb(250 250 230)',
      },
      {
        id: 22,
        alias: 'B3',
        title: 'B3',
        bgcolor: 'rgb(250 250 220)',
      },
      {
        id: 22,
        alias: 'B4',
        title: 'B4',
        bgcolor: 'rgb(250 250 210)',
      },
      {
        id: 22,
        alias: 'C1',
        title: 'C1',
        bgcolor: 'rgb(250 240 210)',
      },
      {
        id: 22,
        alias: 'C2',
        title: 'C2',
        bgcolor: 'rgb(250 240 210)',
      },
      {
        id: 22,
        alias: 'C3',
        title: 'C3',
        bgcolor: 'rgb(250 240 210)',
      },
      {
        id: 22,
        alias: 'C4',
        title: 'C4',
        bgcolor: 'rgb(250 240 210)',
      },
      {
        id: 22,
        alias: 'D2',
        title: 'D2',
        bgcolor: 'rgb(250 230 200)',
      },
      {
        id: 22,
        alias: 'D3',
        title: 'D3',
        bgcolor: 'rgb(250 230 200)',
      },
      {
        id: 22,
        alias: 'D4',
        title: 'D4',
        bgcolor: 'rgb(250 230 200)',
      },
    ],
  },
];

const stumpVitaClassic = [
  {
    id: 22,
    alias: 'vitaClassic',
    title: 'Stump Shade',
    description: 'Vita Classic Shade Guide',
    children: [
      {
        id: 22,
        alias: 'A1',
        title: 'A1',
        bgcolor: 'rgb(240 240 240)',
      },
      {
        id: 22,
        alias: 'A2',
        title: 'A2',
        bgcolor: 'rgb(230 230 230)',
      },
      {
        id: 22,
        alias: 'A3',
        title: 'A3',
        bgcolor: 'rgb(220 220 220)',
      },
      {
        id: 22,
        alias: 'A3.5',
        title: 'A3.5',
        bgcolor: 'rgb(210 210 210)',
      },
      {
        id: 22,
        alias: 'A4',
        title: 'A4',
        bgcolor: 'rgb(200 200 200)',
      },
      {
        id: 22,
        alias: 'B1',
        title: 'B1',
        bgcolor: 'rgb(250 250 240)',
      },
      {
        id: 22,
        alias: 'B2',
        title: 'B2',
        bgcolor: 'rgb(250 250 230)',
      },
      {
        id: 22,
        alias: 'B3',
        title: 'B3',
        bgcolor: 'rgb(250 250 220)',
      },
      {
        id: 22,
        alias: 'B4',
        title: 'B4',
        bgcolor: 'rgb(250 250 210)',
      },
      {
        id: 22,
        alias: 'C1',
        title: 'C1',
        bgcolor: 'rgb(250 240 210)',
      },
      {
        id: 22,
        alias: 'C2',
        title: 'C2',
        bgcolor: 'rgb(250 240 210)',
      },
      {
        id: 22,
        alias: 'C3',
        title: 'C3',
        bgcolor: 'rgb(250 240 210)',
      },
      {
        id: 22,
        alias: 'C4',
        title: 'C4',
        bgcolor: 'rgb(250 240 210)',
      },
      {
        id: 22,
        alias: 'D2',
        title: 'D2',
        bgcolor: 'rgb(250 230 200)',
      },
      {
        id: 22,
        alias: 'D3',
        title: 'D3',
        bgcolor: 'rgb(250 230 200)',
      },
      {
        id: 22,
        alias: 'D4',
        title: 'D4',
        bgcolor: 'rgb(250 230 200)',
      },
    ],
  },
];

const vita3DMaster = [
  {
    id: 22,
    alias: 'vita3DMaster',
    title: 'Tooth Shade',
    description: 'Vita 3D Master Shade Guide',
    children: [
      {
        id: 22,
        alias: '1M',
        title: '1M',
      },
      {
        id: 22,
        alias: '2M',
        title: '2M',
      },
      {
        id: 22,
        alias: '3M',
        title: '3M',
      },
      {
        id: 22,
        alias: '4M',
        title: '4M',
      },
      {
        id: 22,
        alias: '5M',
        title: '5M',
      },
    ],
  },
];

const stumpVita3DMaster = [
  {
    id: 22,
    alias: 'vita3DMaster',
    title: 'Stump Shade',
    description: 'Vita 3D Master Shade Guide',
    children: [
      {
        id: 22,
        alias: '1M',
        title: '1M',
      },
      {
        id: 22,
        alias: '2M',
        title: '2M',
      },
      {
        id: 22,
        alias: '3M',
        title: '3M',
      },
      {
        id: 22,
        alias: '4M',
        title: '4M',
      },
      {
        id: 22,
        alias: '5M',
        title: '5M',
      },
    ],
  },
];

const implantCementRetained = [
  {
    id: 22,
    alias: 'implantCementRetained',
    title: 'Implant Cement Retained',
    children: [
      {
        id: 22,
        alias: 'solidCement',
        title: 'Solid Cement retained',
      },
      {
        id: 22,
        alias: 'screwCement',
        title: 'Screw Cement retained',
      },
      {
        id: 22,
        alias: 'screwRetained',
        title: 'Screw Retained retained',
      },
    ],
  },
];

const screwRetained = [
  {
    id: 22,
    alias: 'screwRetained',
    title: 'Screw Retained',
    children: [
      {
        id: 22,
        alias: 'changedToCement',
        title: 'Changed to Cement',
      },
      {
        id: 22,
        alias: 'continueRegardless',
        title: 'Continue Regardless',
      },
      {
        id: 22,
        alias: 'torrentoBridge',
        title: 'Torrento Bridge',
      },
    ],
  },
];

const emergenceCrownProfile = [
  {
    id: 22,
    alias: 'emergenceCrownProfile',
    title: 'Emergence Crown Profile',
    children: [
      {
        id: 22,
        alias: 'followTissue',
        title: 'Follow Tissue',
      },
      {
        id: 22,
        alias: 'contourDesign',
        title: 'Contour Design',
      },
      {
        id: 22,
        alias: 'anatomicalDesign',
        title: 'Anatomical Design',
      },
    ],
  },
];

const abutmentType = [
  {
    id: 22,
    alias: 'abutmentType',
    title: 'Abutment Type',
    children: [
      {
        id: 22,
        alias: 'customTitanium',
        title: 'Custom Titanium',
      },
      {
        id: 22,
        alias: 'customZirconia',
        title: 'Custom Zirconia',
      },
      {
        id: 22,
        alias: 'companyAbutment',
        title: 'Company Abutment',
      },
    ],
  },
];

const emergenceAbutmentProfile = [
  {
    id: 22,
    alias: 'emergenceAbutmentProfile',
    title: 'Emergence Abutment Profile',
    children: [
      {
        id: 22,
        alias: 'followTissue',
        title: 'Follow Tissue',
      },
      {
        id: 22,
        alias: 'contourDesign',
        title: 'Contour Design',
      },
      {
        id: 22,
        alias: 'anatomicalDesign',
        title: 'Anatomical Design',
      },
    ],
  },
];
