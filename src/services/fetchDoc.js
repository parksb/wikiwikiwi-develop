import { requestGitHubAPI } from './utils';

function fetchDoc(id) {
  const {
    number,
    title,
    body,
    labels,
    created_at,
    updated_at,
  } = requestGitHubAPI(id);
  return { number, title, body, labels, created_at, updated_at };
}

export default fetchDoc;
