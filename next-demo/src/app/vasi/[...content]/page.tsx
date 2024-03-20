interface VasiContentProp {
  params: {
    content: string[];
  };
}

export default function VasiContent(props: VasiContentProp) {
  console.log("vasi content", props);

  return <h1>vasi content - {props.params.content[0]}</h1>;
}
