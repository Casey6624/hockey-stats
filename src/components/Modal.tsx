import React, { useRef, useEffect } from "react"
import styled, { keyframes } from "styled-components"

interface Props {
    setIsActive: Function
}

const fadeIn = keyframes`
    from{
        background: rgba(0,0,0, 0);
    }
    to{
        background: rgba(0,0,0, 0.8);
    }
`

const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    animation: ${fadeIn} 0.35s ease-in-out 0s forwards 1;
`

const ContentContainer = styled.div`
    position: fixed;
    top: 20;
    left: 50;
    width: 100%;
    height: 80vh;
    padding: 1rem;
`


const Modal: React.FC<Props> = ({ children, setIsActive }) => {
    let modalRef = useRef(null)
    useOutsideAlerter(modalRef)

    function useOutsideAlerter(ref: any) {
        useEffect(() => {
            /**
             * Alert if clicked on outside of element
             */
            function handleClickOutside(event: any) {
                console.log(event.target)
                if (ref.current && !ref.current.contains(event.target)) {
                    //setIsActive(false) 
                    window.alert("outside")
                }
            }
    
            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
                setIsActive(false)
            };
        }, [ref]);
    }

    return(<ModalContainer ref={modalRef}>
        <ContentContainer>
            {children} 
        </ContentContainer>   
    </ModalContainer>)
}

export default Modal