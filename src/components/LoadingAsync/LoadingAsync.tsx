import React from "react";
import { isLoading$ } from "../../services/loadingService";
import { Box } from "../styles/Box";
import { Spinner } from "../styles/Spinner";

interface Props {}

const LoadingAsync: React.FunctionComponent<Props> = (props) => {
  const [isLoading, setIsLoading] = React.useState(false);

  const isLoadingSub = isLoading$.subscribe((loading) => {
    setIsLoading(loading);
  });

  React.useEffect(() => {
    return () => isLoadingSub.unsubscribe();
  }, []);

  return (
    <>
      {isLoading && (
        <Box
          position="fixed"
          top="0"
          left="0"
          zIndex="2147483647"
          width="100vw"
          height="100vh"
          display="flex"
          justifyContent="center"
          alignItems="center"
          bg="rgba(0, 0, 0, .5)"
        >
          <Box display="flex" justifyContent="space-around" alignItems="center">
            <Spinner />
          </Box>
        </Box>
      )}
    </>
  );
};

export default LoadingAsync;
