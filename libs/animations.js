import { keyframes } from "@emotion/react";

export const spin = keyframes`
from { transform: rotate(0deg); }
to { transform: rotate(360deg); }`

export const swing = keyframes`
    0% { transform: rotate(45deg); }
    50% { transform: rotate(-45deg); }
    100% { transform: rotate(45deg); }
  `
export const swingRevert = keyframes`
    0% { transform: rotate(-45deg); }
    50% { transform: rotate(45deg); }
    100% { transform: rotate(-45deg); }
  `

export const heartBeat = keyframes`
0% {
   transform: scale(0.8);
 }
 10% {
   transform: scale(1.2);
 }
 15% {
   transform: scale(0.9);
 }
 20%{
   transform: scale(1.3);
 }
 30%{
   transform: scale(0.8);
 }
 50% {
   transform: scale(1.2);
 }
 60%{
   transform: scale(0.9);
 }
 70%{
   transform: scale(1.3);
 }
 100% {
   transform: scale(0.8);
 }
`