import MainHeader from "./mainHeader";

export default function Layout(props) {
  return (
    <>
      <MainHeader />
      {props.children}
    </>
  );
}
