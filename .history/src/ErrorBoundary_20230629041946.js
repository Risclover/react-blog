import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  let error = useRouteError();
  console.log("error");
  console.error(error);
  // Uncaught ReferenceError: path is not defined
  return <div>Dang!</div>;
}