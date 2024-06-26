"use client";
import React from "react";
import Lottie from "lottie-react";
import { cn } from "@/lib/utils";

interface LottieIconProps {
  lottieData: any;
  width?: number;
  height?: number;
}
export const LottieIcon = ({ lottieData, width, height }: LottieIconProps) => {
  return <Lottie animationData={lottieData} loop={true} />;
};
