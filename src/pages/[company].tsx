import { useRouter } from "next/router";
import React from "react";
import BookNow from "../components/Company/BookNow";
import Details from "../components/Company/Details/Details";
import { COMPANIES } from "~/Contstant/Companies";

const Company = () => {
  const router = useRouter();
  const { company: id } = router.query;
  const company = COMPANIES.find((c) => c.id === id);

  React.useEffect(() => {
    console.log("company", router.query);
    console.log(id);
  }, [company]);

  if (!company) {
    return <div>404</div>;
  }

  return (
    <div className="mb-8">
      <BookNow {...company} />
      <Details {...company} />
    </div>
  );
};

export default Company;
