"use client";

const OrderDescription = ({
  district,
  street,
  detail,
}: {
  district?: string;
  street?: string;
  detail?: string;
}) => {
  const MORE = "Дэлгэрэнгүй";
  const detailText = detail?.split(MORE)[1];
  return (
    <>
      {district} Дүүрэг, {street} Хороо, Дэлгэрэнгүй хаяг {detailText}
    </>
  );
};

export default OrderDescription;
