import * as React from 'react';
import PropTypes from 'prop-types';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons/faEllipsisV';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import SvgIcon from '@mui/material/SvgIcon';
import ChatIcon from '@mui/icons-material/Chat';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import Avatar from '@mui/material/Avatar';


const FontAwesomeSvgIcon = React.forwardRef((props, ref) => {
  const { icon } = props;

  const {
    icon: [width, height, , , svgPathData],
  } = icon;

  return (
    <SvgIcon ref={ref} viewBox={`0 0 ${width} ${height}`}>
      {typeof svgPathData === 'string' ? (
        <path d={svgPathData} />
      ) : (
        /**
         * A multi-path Font Awesome icon seems to imply a duotune icon. The 0th path seems to
         * be the faded element (referred to as the "secondary" path in the Font Awesome docs)
         * of a duotone icon. 40% is the default opacity.
         *
         * @see https://fontawesome.com/how-to-use/on-the-web/styling/duotone-icons#changing-opacity
         */
        svgPathData.map((d, i) => (
          <path style={{ opacity: i === 0 ? 0.4 : 1 }} d={d} />
        ))
      )}
    </SvgIcon>
  );
});

FontAwesomeSvgIcon.propTypes = {
  icon: PropTypes.any.isRequired,
};

export default function FontAwesomeSvgIconDemo() {
  return (
    <Box
      sx={{
        '& > :not(style)': {
          m: 1,
        },
      }}
   
    >
       
      <IconButton aria-label="Example">
        <Avatar alt="Remy Sharp" src="https://icon-library.com/images/free-avatar-icon/free-avatar-icon-10.jpg" style={{marginLeft:0}} />
            <Box style={{marginLeft:"180px"}}>
            <DataUsageIcon  style={{marginRight:"20px"}}/>
            <ChatIcon style={{marginRight:"21px"}}/>
            <FontAwesomeIcon icon={faEllipsisV} style={{marginBottom:"3px"}} />     
            </Box>
         </IconButton>
    </Box>
  );
}