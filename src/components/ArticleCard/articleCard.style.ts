import { Link } from "react-router-dom"
import styled from "styled-components"

// Updated styled components for the card to mimic New York Times style

export const Card = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
  border: 1px solid #ebebeb;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  box-shadow: 0 1px 4px rgba(102, 102, 102, 0.15);
  margin: 20px 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const CardImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
  border-radius: 4px;
`

export const Title = styled.h2`
  font-size: 24px;
  color: #000;
  font-weight: bold;
  margin-bottom: 10px;
`

export const Abstract = styled.p`
  color: #333;
  font-size: 16px;
  line-height: 1.5;
`

export const Footer = styled.footer`
  margin-top: 20px;
  text-align: left;
  color: #999;
  font-size: 14px;
`
