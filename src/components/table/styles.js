import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Table = styled.table`
    border-collapse:collapse;
    background-color: #ffffff;
    width: 100%;
    border-radius:3px;

    tr {
        border-bottom: 2px solid rgb(209, 211, 212);
    }

    tr td, tr th {
        padding: 8px;
    }

    tr td {
        color: rgba(0, 0, 0, 0.6);
        font-size: 15px;
        font-weight: normal;
        height: 20px;
        letter-spacing: 0.25px;
        line-height: 20px;
    }

    tr th {
        color: rgb(0, 40, 70);
        font-size: 15px;
        font-weight: bold;
        height: 24px;
        letter-spacing: 0.1px;
        line-height: 24px;
        text-transform: uppercase;
        text-align:start
    }
`

export const WrapperId = styled(Link)`
  text-decoration: underline;
  font-size: 15px;
  color: rgb(0, 40, 70);
  font-weight:normal;
  cursor: pointer;
`
export const WrapperTotal = styled.small`
  font-size: 15px;
  color: rgba(0, 0, 0, 0.6);
  font-weight:normal;
  letter-spacing: 0.25px;
  line-height: 20px;
  text-align: right;
  `

export const IconBall = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  height: 25px;
  width: 25px;
  background-color: #f7c383;
  border-radius: 50%;
  margin: 0 10px;
  font-size:18px;
  font-weight:300;
  color:#002846;
`
export const WrapperName = styled.div`
  display:flex;
`
