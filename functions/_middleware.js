export function onRequest(context) {
  const url = new URL(context.request.url);

  if (url.hostname === 'www.petfeedguide.com') {
    url.hostname = 'petfeedguide.com';
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
}
