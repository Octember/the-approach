/**
 *
 * Asynchronously loads the component for RouteReviewPage
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
