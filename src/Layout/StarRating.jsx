// import { useState } from 'react';
import Star from './Star';

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
};

const starContainerStyle = {
  display: 'flex',
  gap: '0px',
};

export default function StarRating(props) {
  const { maxRating = 3, color = '#fcc419', size = 48, className = '' } = props;

  return (
    <div style={containerStyle} className={className}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            // onRate={() => handleRating(i + 1)}
            // full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            full={3}
            // onHoverIn={() => setTempRating(i + 1)}
            // onHoverOut={() => setTempRating(0)}
            color={color}
            size={size}
          />
        ))}
      </div>
      {/* <p style={textStyle}>
        {messages.length === maxRating
          ? messages[tempRating ? tempRating - 1 : rating - 1]
          : tempRating || rating || ''}
      </p> */}
    </div>
  );
}
