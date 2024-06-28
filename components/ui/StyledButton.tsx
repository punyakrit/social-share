import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  position: relative;
  color: white;
  font-size: 1.15rem;
  text-transform: uppercase;
  min-height: 40px;
  letter-spacing: 0.1em;
  transition: 0.5s;
  border: none;
  cursor: pointer;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  background-color: black;
  padding: 10px 20px; /* Adjust padding as needed */
  margin-top: 2rem; /* Equivalent to mt-8 */
  width: 100%; /* Equivalent to w-full */
  font-size: 0.875rem; /* Equivalent to text-sm */

  &:hover {
    letter-spacing: 0.25em;
    background-color: white; /* Change background color to white on hover */
    color: purple; /* Change text color to purple on hover */
    box-shadow: 0 0 50px var(--shadow);
    border-radius: 20px;
    transition: background-color 0.5s, color 0.5s;
  }

  &::before {
    content: "";
    position: absolute;
    inset: 2px;
    background-color: #27282c;
  }

  span {
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    z-index: 1;
  }

  i {
    position: absolute;
    inset: 0;
    display: block;
    background-color: black;
    border-radius: 10px;

    &::before {
      content: "";
      position: absolute;
      top: -3.5px;
      left: 80%;
      width: 12px;
      height: 6px;
      border: 2px solid white; /* Change effect color to white */
      color: white;
      background-color: black;
      transform: translateX(-50%);
      transition: 0.5s;
    }

    &:hover::before {
      width: 20px;
      left: 20%;
    }

    &::after {
      content: "";
      position: absolute;
      bottom: -3.5px;
      left: 20%;
      width: 12px;
      height: 6px;
      border: 2px solid white; /* Change effect color to white */
      background-color: black;
      transform: translateX(-50%);
      transition: 0.5s;
      color: purple; /* Change text color to purple on hover */
    }

    &:hover::after {
      width: 20px;
      left: 80%;
      color: purple; /* Change text color to purple on hover */
    }
  }
`;

const Icon = styled.svg`
  margin-right: 8px; /* Equivalent to mr-2 */
`;

const StyledButton: React.FC = () => {
  return (
    <Button type="button">
      
      <span>Send Message</span>
      <i></i>
    </Button>
  );
};

export default StyledButton;
