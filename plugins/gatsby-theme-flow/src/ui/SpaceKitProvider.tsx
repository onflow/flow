import React from "react";

interface State {
  /**
   * Disable all JavaScript based animations
   *
   * This includes Framer Motion animations and manual css values.
   *
   * @default false
   */
  disableAnimations: boolean;
}

const defaultState: State = {
  disableAnimations: false,
};

// This implementation is based on the excellent blog post by Kent C. Dodds on
// How to use React Context effectively:
// https://kentcdodds.com/blog/how-to-use-react-context-effectively

const SpaceKitStateContext = React.createContext<State | undefined>(undefined);
const SpaceKitSetContext = React.createContext<
  React.Dispatch<React.SetStateAction<State | undefined>> | undefined
>(undefined);

/**
 * Provider to set options on all Space Kit components
 *
 * This is completely optional; components will not have issues if this is
 * missing from the context.
 *
 * A good place to use this would be in your storybook configuration as a
 * decorator applied to all components if we're running inside of chromatic.
 */
export const SpaceKitProvider: React.FC<Partial<State>> = ({
  children,
  ...stateProps
}) => {
  const [state, setState] = React.useState<State | undefined>({
    ...defaultState,
    ...stateProps,
  });

  return (
    <SpaceKitStateContext.Provider value={state}>
      <SpaceKitSetContext.Provider value={setState}>
        {children}
      </SpaceKitSetContext.Provider>
    </SpaceKitStateContext.Provider>
  );
};

/**
 * Hook to get the values from the Space Kit Provider with sensible defaults for
 * all the values.
 *
 * This component does _not_ require us to be wrapped with `SpaceKitProvider`
 */
export function useSpaceKitProvider(): Readonly<State> {
  const context = React.useContext(SpaceKitStateContext);

  if (context == null) {
    // Provide a default because consumers are not required to wrap their
    // components with our providers
    return defaultState;
  }

  return context;
}
