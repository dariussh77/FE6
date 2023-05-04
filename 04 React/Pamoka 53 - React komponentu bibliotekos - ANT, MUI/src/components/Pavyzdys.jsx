import * as React from 'react';
import Box from '@mui/material/Box';
import Slider, { sliderClasses } from '@mui/material/Slider';

const marks = [
    {
      value: 0,
      label: '0°C',
    },
    {
      value: 20,
      label: '20°C',
    },
    {
      value: 37,
      label: '37°C',
    },
    {
      value: 100,
      label: '100°C',
    },
  ];
  
  function valuetext(value) {
    return `${value}°C`;
  }
const PavyzdysMUI = () => {
    
    return ( 
        <section id='bandymai'>
            <Box sx={{ width: 300, height:300,padding:10 }}>
                <Slider
                    aria-label="Temperature"
                    defaultValue={20}
                    getAriaValueText={valuetext}
                    step={10}
                    valueLabelDisplay="auto"
                    marks={marks}
                    sx={{border:'1px solid grey', color:'brown' }}
                    orientation='vertical'
                />
            </Box>
        </section>
     );
}
 
export default PavyzdysMUI;