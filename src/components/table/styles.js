import styled from 'styled-components'

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

export const WrapperId = styled.h1`
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
