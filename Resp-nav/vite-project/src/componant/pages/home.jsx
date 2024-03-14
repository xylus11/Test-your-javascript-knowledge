import React from "react";
import Title from "../Title"
export default function home({ pageTitle }) {
  return (
    <>
      <Title text={pageTitle} classes={"text-center title-main text-primary"} />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
        consequatur optio at. Dicta molestiae impedit voluptas ea enim?
        Voluptatibus adipisci dolorum cumque rem inventore, quidem nihil optio
        nesciunt, labore obcaecati, sapiente nam maiores ut aliquid. Modi nisi
        consequuntur temporibus reprehenderit nostrum animi est aut et enim
        nobis? Nemo, fugiat facilis.
      </p>
    </>
  );
}
