import React from "react";
import { Text } from "components/Text";
import { Footer, SecondaryButton } from "components";
import { Wrapper, InnerWrapper, ButtonsWrapper } from "./ErrorBoundary.styled";

export function FallbackComponent({ error }) {
  return (
    <Wrapper>
      <InnerWrapper>
        <Text size="3xl" color="white">
          Something went wrong
        </Text>
        <Text>Sorry, an error occurred.</Text>
        <code>
          {error.name}: {error.message}
        </code>
        <Text>
          We've been notified about this issue and we'll take a look at it
          shortly.
        </Text>
        <Text>
          You can also try reloading the page, request support on Discord, or
          come back later.
        </Text>
        <ButtonsWrapper>
          <SecondaryButton size="sm" onClick={() => window.location.reload()}>
            Reload
          </SecondaryButton>
          <SecondaryButton
            size="sm"
            onClick={() => window.open("https://discord.across.to", "_blank")}
          >
            Discord
          </SecondaryButton>
        </ButtonsWrapper>
      </InnerWrapper>
      <Footer />
    </Wrapper>
  );
}

export function ErrorBoundary({ children }) {
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const handleError = (event) => {
      setError(event.error);
    };

    window.addEventListener("error", handleError);

    return () => {
      window.removeEventListener("error", handleError);
    };
  }, []);

  if (error) {
    return <FallbackComponent error={error} />;
  }

  return <>{children}</>;
}


// import React from "react";
// import { Text, SecondaryButton, Footer } from "components";
// import { Wrapper, InnerWrapper, ButtonsWrapper } from "./ErrorBoundary.styled";
// import Sentry from "utils/sentry";

// export function FallbackComponent({ error }) {
//   return (
//     <Wrapper>
//       <InnerWrapper>
//         <Text size="3xl" color="white">
//           Something went wrong
//         </Text>
//         <Text>Sorry, an error occurred.</Text>
//         <code>
//           {error.name}: {error.message}
//         </code>
//         <Text>
//           We've been notified about this issue and we'll take a look at it
//           shortly.
//         </Text>
//         <Text>
//           You can also try reloading the page, request support on Discord, or
//           come back later.
//         </Text>
//         <ButtonsWrapper>
//           <SecondaryButton onClick={() => window.location.reload()}>
//             Reload
//           </SecondaryButton>
//           <SecondaryButton

//             onClick={() => window.open("https://discord.across.to", "_blank")}
//           >
//             Discord
//           </SecondaryButton>
//         </ButtonsWrapper>
//       </InnerWrapper>
//       <Footer />
//     </Wrapper>
//   );
// }

// export function ErrorBoundary({ children }) {
//   return (
//     <Sentry.ErrorBoundary
//       fallback={({ error }) => <FallbackComponent error={error} />}
//       beforeCapture={(scope) => scope.setLevel("fatal")}
//     >
//       {children}
//     </Sentry.ErrorBoundary>
//   );
// }
