import { requestGitHubAPI } from './utils';

function fetchDocList(param = '') {
  const data = requestGitHubAPI(null, param);
  return data.map(({ number, title, body, labels, created_at }) => {
    return {
      number,
      title,
      body,
      labels,
      created_at
    };
  });
}

export default fetchDocList;
