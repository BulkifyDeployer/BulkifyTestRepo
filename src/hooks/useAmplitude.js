// import { useContext, createContext, ReactNode } from "react";

// import { amplitudeAPIKey } from "utils";

// import { useLoadAmpli } from "./useLoadAmpli";
// import { useInitialUserPropTraces } from "./useInitialUserPropTraces";
// import { useAmpliTracking, TrackingRequest } from "./useAmpliTracking";

// const isAmpliDisabled = Boolean(amplitudeAPIKey);

// export const AmpliContext = createContext({
//   isAmpliLoaded: false,
//   isAmpliDisabled,
//   areInitialUserPropsSet: false,
//   addToAmpliQueue: () => { },
// });

// export function AmpliProvider({ children }) {
//   const { isAmpliLoaded } = useLoadAmpli();
//   const { areInitialUserPropsSet } = useInitialUserPropTraces(isAmpliLoaded);
//   const { addToQueue: addToAmpliQueue } = useAmpliTracking(
//     areInitialUserPropsSet
//   );

//   return (
//     <AmpliContext.Provider
//       value={{
//         isAmpliLoaded,
//         isAmpliDisabled,
//         areInitialUserPropsSet,
//         addToAmpliQueue,
//       }}
//     >
//       {children}
//     </AmpliContext.Provider>
//   );
// }

// export function useAmplitude() {
//   const context = useContext(AmpliContext);
//   return context;
// }
