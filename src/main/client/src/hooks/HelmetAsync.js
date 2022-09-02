import { Helmet } from "react-helmet-async";

function HelmetAsync({title}) {
  return (
    <Helmet>
      <title>{title}Nomad Link</title>
    </Helmet>
  );
}

export default HelmetAsync;
