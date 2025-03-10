export default function Product(props) {
    return (
  <div>
    <p>{props?.course?.title}</p>
    <p>{props?.course?.details}</p>
  </div>
    );
}