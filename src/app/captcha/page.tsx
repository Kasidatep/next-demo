'use client';

import React, { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const VideoPage = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [showRecaptcha, setShowRecaptcha] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA | null>(null);

  const RECAPTCHA_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_KEY ?? '';

  const handleVerification = (value: any) => {
    console.log(value);

    if (value) {
      setIsVerified(true);
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
      setShowRecaptcha(false);
      if (videoRef.current) {
        videoRef.current.play();
      }
    }
  };

  const handlePlayPause = () => {
    if (!isVerified) {
      setShowRecaptcha(true);
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }
  };

  return (
    <div className="container p-5 m-auto">
      Captcha Test <span className="border white bg-red-300 px-5 rounded">{isVerified ? 'Verified' : 'Not Verified'}</span> 
      <div style={{ position: 'relative', width: '600px' }}>
        <video
          width="600"
          controls
          ref={videoRef}
          onPlay={handlePlayPause}
        >
          <source src="/test.mov" />
          Your browser does not support the video tag.
        </video>
        {showRecaptcha && (
          <div
            id="recaptcha-popup"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'white',
              padding: '20px',
              boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
              zIndex: 1000,
            }}
          >
            <ReCAPTCHA
              sitekey={RECAPTCHA_KEY}
              ref={recaptchaRef}
              theme='light'
              type='image'
              onChange={handleVerification}
            />
          </div>
        )}
      </div>
    </div>
  );
}


export default  VideoPage;