import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';

import { useGeolocation } from 'hooks/geoHook';
import ReactMapboxGl, {
  Layer,
  Feature,
  RotationControl,
  ScaleControl,
  ZoomControl,
  Popup,
  Marker,
} from 'react-mapbox-gl';
import SearchAddress from './SearchAddress';

import 'mapbox-gl/dist/mapbox-gl.css';
import { setRTLTextPlugin, getRTLTextPluginStatus } from 'mapbox-gl';
import { Box, styled } from '@mui/material';

const Map = ReactMapboxGl({
  accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA',
  // interactive: !disabled,
});

const LocationFieldTemplate = (props) => {
  const { formData, onChange, disabled } = props;
  const state = useGeolocation();
  const [center, setCenter] = useState([state.longitude, state.latitude]);

  useEffect(() => {
    const status = getRTLTextPluginStatus();
    if (status === 'unavailable') {
      setRTLTextPlugin(
        'https://www.parsimap.com/scripts/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.0/mapbox-gl-rtl-text.js'
      );
    }
  }, []);

  // useEffect(() => {
  //   onChange({ lat: String(center[1]), lng: String(center[0]) });
  // }, []);

  const changeCenter = (data) => {
    setCenter(data);
  };

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (formData && loading) {
        setCenter([formData?.lng || state.longitude, formData?.lat || state.latitude]);
      }
      return setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [formData]);

  return (
    <>
      <Card
        variant="outlined"
        sx={{
          height: {
            xs: '480px',
            sm: '500px',
            md: '560px',
            lg: '600px',
            xl: '640px',
          },
        }}
      >
        <Map
          zoom={[15]}
          style="https://www.parsimap.com/styles/street.json"
          containerStyle={{
            height: '100%',
            width: '100%',
            borderRadius: 10,
          }}
          center={center}
          onClick={(map, event) => {
            setCenter([event.lngLat.lng, event.lngLat.lat]);
            onChange({
              lat: String(event.lngLat.lat),
              lng: String(event.lngLat.lng),
            });
          }}
        >
          <Marker coordinates={center} anchor="center">
            <StyledBox
              width={16}
              height={16}
              borderRadius={2}
              bgcolor="primary.main"
              color="primary"
              sx={{ opacity: 0.9 }}
            />
          </Marker>
        </Map>
        <Box sx={{ position: 'absolute', top: 4, left: 4, right: 4, zIndex: 1 }}>
          <SearchAddress changeCenter={changeCenter} />
        </Box>
      </Card>
    </>
  );
};

const StyledBox = styled(Box)(({ theme, color = 'primary' }) => ({
  '&::after': {
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    position: 'absolute',
    border: '1px solid',
    animation: 'ripple 1.2s infinite ease-in-out',
    borderColor: theme.palette[color].main,
    content: '""',
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

export default LocationFieldTemplate;
