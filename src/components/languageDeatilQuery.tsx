import { gql, useQuery } from "@apollo/client";
import React, { ReactNode } from "react";

const LanguageDetailQuery = ({ languageName }: { languageName: string }) => {
  const GET_LANGUAGE_INFO = gql`
    query GetLanguage($languageCode: String!) {
      data: languages(filter: { code: { eq: $languageCode } }) {
        native
        name
        code
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_LANGUAGE_INFO, {
    variables: { languageCode: languageName.toLocaleLowerCase() },
  });

  if (loading) return <p className="">{JSON.stringify("loading")}</p>;
  if (error) return <p className="">{JSON.stringify("error")}</p>;
  console.log(data);
  return (
    <div>
      <h2>Language Card:</h2>
      {data && data?.data && data?.data[0] && (
        <LanguageDetailQueryCard
          name={data?.data[0]?.name}
          native={data?.data[0]?.native}
          code={data?.data[0]?.code}
        />
      )}
    </div>
  );
};
export default LanguageDetailQuery;

const LanguageDetailQueryCard = ({
  name,
  native,
  code,
}: {
  name: string;
  native: string;
  code: string;
}) => (
  <div className="border p-4 bg-light">
    <h2>
      {name} <br /> {native}
    </h2>
    <p>
      <q>Language Code: {code}</q>
    </p>
  </div>
);
