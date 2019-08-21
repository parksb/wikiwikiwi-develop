import { requestGitHubAPI } from './utils';

function fetchDoc(id) {
  const {
    number,
    title,
    body,
    labels,
  } = requestGitHubAPI(id);
  return { number, title, body, labels };
}

export default fetchDoc;

