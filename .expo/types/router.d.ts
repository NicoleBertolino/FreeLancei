/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/screens/SignIn`; params?: Router.UnknownInputParams; } | { pathname: `/screens/candidate/SignUpCandidate`; params?: Router.UnknownInputParams; } | { pathname: `/screens/company/CandidatesScreen`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/SignIn`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/candidate/SignUpCandidate`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/company/CandidatesScreen`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `/screens/SignIn${`?${string}` | `#${string}` | ''}` | `/screens/candidate/SignUpCandidate${`?${string}` | `#${string}` | ''}` | `/screens/company/CandidatesScreen${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/screens/SignIn`; params?: Router.UnknownInputParams; } | { pathname: `/screens/candidate/SignUpCandidate`; params?: Router.UnknownInputParams; } | { pathname: `/screens/company/CandidatesScreen`; params?: Router.UnknownInputParams; };
    }
  }
}
