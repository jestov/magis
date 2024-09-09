import { TinaEditProvider } from "tinacms/dist/edit-state";
import "@/styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <TinaEditProvider showEditButton={true}>
      <Component {...pageProps} />
    </TinaEditProvider>
  );
}

export default MyApp;
