import React, { useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";

interface Props {
  setIsActive: Function;
}

export const fadeInModal = keyframes`
  from {
    background: rgba(0, 0, 0, 0);
  }
  to {
    background: rgba(0, 0, 0, 0.45);
  }
`;

const ModalContainer = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  display: grid;
  place-items: center;
  animation: ${fadeInModal} 0.35s ease-in-out 0s forwards 1;
`;

export const slideInTop = keyframes`
  0% {
    -webkit-transform: translateX(1000px);
    transform: translateX(1000px);
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
`;

const ContentContainer = styled.div`
  background: linear-gradient(168deg, #fff 33%, #e0ecf5);
  padding: 1rem 0 1rem 0;
  animation: ${slideInTop} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  max-width: 85%;
  box-shadow: 0 0 8px 2px rgba(100, 100, 100, 0.25);
  height: 100%;
  position: relative;
  width: 100%;
  min-height: 50vh;
  position: fixed;
  z-index: 100;
  right: 0;
  bottom: 0;
  align-items: center;
  color: white;
  text-align: center;
`;

const Modal: React.FC<Props> = ({ children, setIsActive }) => {
  let modalRef = useRef(null);
  useOutsideAlerter(modalRef);

  function useOutsideAlerter(ref: any) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsActive(false);
        }
      }

      function handleKeyPressOutside(event: any) {
        if (event.key === "Escape") {
          setIsActive(false);
        }
      }

      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyPressOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener("keydown", handleKeyPressOutside);
        setIsActive(false);
      };
    }, [ref]);
  }

  return (
    <ModalContainer>
      <ContentContainer ref={modalRef}>{children}</ContentContainer>
    </ModalContainer>
  );
};

export default Modal;
