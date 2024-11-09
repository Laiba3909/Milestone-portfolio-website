interface Heading {
    name: string;
  }
  
  export default function Head(props: Heading): JSX.Element {
    return (
      <div
        className="border-2 rounded-3xl mt-3 border-[#41228e] text-[#41228e] xl:ml-[500px]
      2xl:ml-[600px] w-[270px] md:ml-[350px] ml-10"
      >
        <h1 className="text-center mt-3 font-mono text-4xl">{props.name}</h1>
      </div>
    );
  }
  