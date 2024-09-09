import { useTina } from "tinacms/dist/react";
import HeroSection from "../components/HeroSection";
import { getStaticPropsForTina } from "tinacms/dist/getStaticProps";

export default function Home(props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  return (
    <div>
      <HeroSection
        title={data.pages.title}
        subtitle={data.pages.subtitle}
        buttonText={data.pages.buttonText}
      />
    </div>
  );
}

export const getStaticProps = async () => {
  return getStaticPropsForTina({
    query: `{
      pages {
        title
        subtitle
        buttonText
      }
    }`,
  });
};
