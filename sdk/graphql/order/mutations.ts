import { gql } from "@apollo/client";

const addEditParamDefs = `$items: [OrderItemInput], $totalAmount: Float!, $type: String!, $customerId: String, $registerNumber: String, $billType: String, $origin: String, $dueDate: Date, $branchId: String, $deliveryInfo: JSON, $description: String, $saleStatus: String, $couponCode: String, $voucherId: String`;

const addEditParams = `items: $items, totalAmount: $totalAmount, type: $type, customerId: $customerId, registerNumber: $registerNumber, billType: $billType, origin: $origin, dueDate: $dueDate, branchId: $branchId, deliveryInfo: $deliveryInfo, description: $description, saleStatus: $saleStatus, couponCode: $couponCode, voucherId: $voucherId`;

const ordersAdd = gql`
  mutation ordersAdd(${addEditParamDefs}) {
    ordersAdd(${addEditParams}) {
     _id
    }
  }
`;

const ordersEdit = gql`
  mutation ordersEdit($_id: String!, ${addEditParamDefs}) {
    ordersEdit(_id: $_id, ${addEditParams}) {
      _id,
      status
    }
  }
`;

const orderChangeSaleStatus = gql`
  mutation OrderChangeSaleStatus($_id: String!, $saleStatus: String) {
    orderChangeSaleStatus(_id: $_id, saleStatus: $saleStatus) {
      _id
    }
  }
`;

const ordersCancel = gql`
  mutation OrdersCancel($_id: String!) {
    ordersCancel(_id: $_id)
  }
`;

const addressAdd = gql`
  mutation AddressAdd(
    $customerId: String
    $alias: String
    $district: String
    $street: String
    $address1: String
    $detail: String
    $w3w: String
  ) {
    addressAdd(
      customerId: $customerId
      alias: $alias
      district: $district
      street: $street
      address1: $address1
      detail: $detail
      w3w: $w3w
    ) {
      _id
    }
  }
`;

const addressRemove = gql`
  mutation AddressRemove($_id: String!) {
    addressRemove(_id: $_id)
  }
`;

const addressUpdate = gql`
  mutation AddressUpdate(
    $_id: String!
    $customerId: String
    $alias: String
    $district: String
    $street: String
    $address1: String
    $detail: String
    $w3w: String
  ) {
    addressUpdate(
      _id: $_id
      customerId: $customerId
      alias: $alias
      district: $district
      street: $street
      address1: $address1
      detail: $detail
      w3w: $w3w
    ) {
      _id
    }
  }
`;

const mutations = {
  ordersAdd,
  ordersEdit,
  ordersCancel,
  orderChangeSaleStatus,
  addressAdd,
  addressRemove,
  addressUpdate,
};

export default mutations;
