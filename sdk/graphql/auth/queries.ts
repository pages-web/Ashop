import { gql } from "@apollo/client";

const currentUser = gql`
  query clientPortalCurrentUser {
    clientPortalCurrentUser {
      _id
      firstName
      lastName
      avatar
      erxesCustomerId
      phone
      email
    }
  }
`;

const userDetail = gql`
  query UserDetail {
    clientPortalCurrentUser {
      isEmailVerified
      isPhoneVerified
    }
  }
`;

const erxesCustomerDetail = gql`
  query CustomerDetail($id: String!) {
    customerDetail(_id: $id) {
      _id
      birthDate
    }
  }
`;

const currentConfig = gql`
  query CurrentConfig {
    currentConfig {
      erxesAppToken
      paymentIds
      deliveryConfig
      name
      description
      pdomain
      isCheckRemainder
      branchId
      initialCategoryIds
      uiOptions {
        logo
        colors
        favIcon
      }
    }
  }
`;

const branchDetail = gql`
  query branchDetail($id: String!) {
    branchDetail(_id: $id) {
      _id
      title
      address
      phoneNumber
      email
      links
      coordinate {
        longitude
        latitude
      }
      image {
        url
      }
    }
  }
`;

const queries = {
  currentUser,
  currentConfig,
  userDetail,
  branchDetail,
  erxesCustomerDetail,
};

export default queries;
