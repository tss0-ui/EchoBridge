// components/CameraView.tsx

import React, { useRef, useEffect, useCallback } from 'react';
import Webcam from 'react-webcam';

interface CameraViewProps {
  onFrameCapture?: (imageSrc: string) => void;
  isCapturing?: boolean;
}

const videoConstraints = {
  width: 640,
  height: 480,
  facingMode: 'user',
};

const CameraView: React.FC<CameraViewProps> = ({ onFrameCapture, isCapturing = false }) => {
  const webcamRef = useRef<Webcam>(null);
  const captureInterval = useRef<NodeJS.Timeout | null>(null);

  const captureFrame = useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc && onFrameCapture) {
        onFrameCapture(imageSrc);
      }
    }
  }, [onFrameCapture]);

  useEffect(() => {
    if (isCapturing) {
      captureInterval.current = setInterval(captureFrame, 1000); // capture every second
    } else {
      if (captureInterval.current) {
        clearInterval(captureInterval.current);
        captureInterval.current = null;
      }
    }

    return () => {
      if (captureInterval.current) {
        clearInterval(captureInterval.current);
      }
    };
  }, [isCapturing, captureFrame]);

  return (
    <div className="flex justify-center items-center">
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
        className="rounded-xl shadow-lg border border-gray-300"
      />
    </div>
  );
};

export default CameraView;
