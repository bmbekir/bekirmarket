interface MoneyValue {
  price: number;
}
export default (props: MoneyValue) => {
  return (
    <span>
      {new Intl.NumberFormat("tr-TR", {
        style: "currency",
        currency: "TRY",
      }).format(props.price)}
    </span>
  );
};
