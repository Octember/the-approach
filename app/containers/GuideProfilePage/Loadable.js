/**
 *
 * Asynchronously loads the component for GuideProfilePage
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
