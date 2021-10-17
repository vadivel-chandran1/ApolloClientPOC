import { gql } from '@apollo/client'
import styled from 'styled-components'

import style from 'styled-jsx/style'

import css from '@emotion/css' 



// write a GraphQL query that asks for names and codes for all countries


export const PAYEE_DETAILS = gql`
query PayeeDetails($payeeId: String!, $payeeSource: enum) {
  payeeDetailsInquiry(payeeId: $payeeId, payeeSource: $payeeSource) {
    name
    firstName
    lastName
    nickName
  }
}
`

// query {
//   payeeDetailsInquiry(payeeSource: DIY, payeeId: "2") {
//     ... on PayeeInquiryResponse {
//       payeeList {
//         payeeId
//         name
//         firstName
//         lastName
//         nickName
//         payeeStatus
//         payeeSource
//         payeeCategory
//       }
//     }
//   }
// }
