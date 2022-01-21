import { crafterConf } from '@craftercms/classes';
import { getItem, parseDescriptor } from '@craftercms/content';

crafterConf.configure({
  baseUrl: 'http://localhost:8080',
  site: 'nextjs-starter',
  cors: true
});

export async function getModel() {
  const cfg = crafterConf.getConfig();
  return await fetch(
    `${cfg.baseUrl}${cfg.endpoints.GET_ITEM_URL}?crafterSite=${cfg.site}&url=${encodeURIComponent('/site/website/index.xml')}`
  )
    .then(r => r.json())
    .then(descriptor => parseDescriptor(descriptor));
  // If we would polyfill the XMLHTTPRequest, we would be able to use Crafter's content SDK.
  // return await getItem('/site/website/index.xml')
  //   .pipe(map(parseDescriptor))
  //   .toPromise();
}
