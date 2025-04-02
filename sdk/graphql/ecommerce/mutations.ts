import { gql } from "@apollo/client";

const productReviewAdd = gql`
  mutation productreviewAdd(
    $productId: String
    $customerId: String
    $review: Float
    $description: String
    $info: JSON
  ) {
    productreviewAdd(
      productId: $productId
      customerId: $customerId
      review: $review
      description: $description
      info: $info
    ) {
      _id
      productId
      customerId
      review
      description
      info
    }
  }
`;

const productReviewUpdate = gql`
  mutation productreviewUpdate(
    $_id: String!
    $productId: String
    $customerId: String
    $review: Float
    $description: String
    $info: JSON
  ) {
    productreviewUpdate(
      _id: $_id
      productId: $productId
      customerId: $customerId
      review: $review
      description: $description
      info: $info
    ) {
      _id
      productId
      customerId
      review
      description
      info
    }
  }
`;

const productReviewRemove = gql`
  mutation productReviewRemove($_id: String!) {
    productReviewRemove(_id: $_id)
  }
`;

const wishlistAdd = gql`
  mutation wishlistAdd($productId: String, $customerId: String) {
    wishlistAdd(productId: $productId, customerId: $customerId) {
      _id
    }
  }
`;

const wishlistUpdate = gql`
  mutation wishlistUpdate(
    $_id: String!
    $productId: String
    $customerId: String
  ) {
    wishlistUpdate(_id: $_id, productId: $productId, customerId: $customerId) {
      _id
    }
  }
`;

const wishlistRemove = gql`
  mutation wishlistRemove($_id: String!) {
    wishlistRemove(_id: $_id) {
      _id
    }
  }
`;

const mutations = {
  productReviewAdd,
  productReviewUpdate,
  productReviewRemove,
  wishlistAdd,
  wishlistUpdate,
  wishlistRemove,
};

export default mutations;
